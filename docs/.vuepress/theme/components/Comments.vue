<template>
  <div class="plume-comments">
    <h3 class="comments-title">
      {{ comments.length > 0 ? comments.length + "条评论" : "暂无评论" }}
    </h3>

    <!-- 评论列表 - 只显示一级评论 -->
    <div v-if="comments.length > 0" class="comments-list">
      <div
        v-for="comment in rootComments"
        :key="comment.id"
        class="comment-item"
      >
        <!-- 主评论 -->
        <div class="comment-header">
          <div class="comment-avatar">
            <img :src="getAvatar(comment.visitor_id)" alt="avatar" />
          </div>
          <div class="comment-meta">
            <div class="comment-author">
              {{ comment.author || `游客 ${comment.id}` }}
            </div>
            <div class="comment-date">{{ formatDate(comment.date) }}</div>
          </div>
        </div>
        <div
          class="comment-content"
          v-html="formatContent(comment.content)"
        ></div>
        <div class="comment-actions">
          <button class="reply-button" @click="replyTo(comment)">回复</button>
        </div>

        <!-- 回复表单 - 对主评论的回复 -->
        <div v-if="replyingTo === comment.id" class="reply-form">
          <div class="comment-form">
            <div v-if="error" class="form-error">{{ error }}</div>

            <div class="form-group">
              <textarea
                v-model="replyContent"
                rows="4"
                :placeholder="`回复 ${comment.author || '游客'}...`"
                required
              ></textarea>
            </div>

            <div class="form-actions">
              <button
                type="submit"
                class="submit-button"
                @click="submitReply(comment)"
                :disabled="isSubmittingReply"
              >
                {{ isSubmittingReply ? "提交中..." : "提交回复" }}
              </button>

              <button type="button" class="cancel-button" @click="cancelReply">
                取消
              </button>
            </div>
          </div>
        </div>

        <!-- 子评论区域 -->
        <div
          v-if="getCommentReplies(comment.id).length > 0"
          class="replies-container"
        >
          <div
            v-for="reply in getCommentReplies(comment.id)"
            :key="reply.id"
            class="reply-item"
          >
            <div class="reply-header">
              <div class="reply-avatar">
                <img :src="getAvatar(reply.visitor_id)" alt="avatar" />
              </div>
              <div class="reply-meta">
                <div class="reply-author">
                  <span class="replier">{{ reply.author || "游客" }}</span>
                  <span class="reply-to">回复</span>
                  <span class="target">{{ getReplyTarget(reply) }}</span>
                </div>
                <div class="reply-date">{{ formatDate(reply.date) }}</div>
              </div>
            </div>
            <div
              class="reply-content"
              v-html="formatContent(reply.content)"
            ></div>
            <div class="reply-actions">
              <button class="reply-button" @click="replyTo(reply, comment.id)">
                回复
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="no-comments">暂无评论，来添加第一条评论吧！</div>

    <!-- 评论表单 -->
    <div class="main-comment-form">
      <div class="comment-form">
        <div v-if="error" class="form-error">{{ error }}</div>

        <div class="form-group">
          <textarea
            v-model="commentContent"
            rows="4"
            placeholder="写下你的想法..."
            required
          ></textarea>
        </div>

        <div class="form-actions">
          <button
            type="submit"
            class="submit-button"
            @click="submitComment"
            :disabled="isSubmitting"
          >
            {{ isSubmitting ? "提交中..." : "提交评论" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comments: [],
      isLoading: true,
      replyingTo: null,
      replyingToParentId: null, // 跟踪二级评论的父评论ID
      error: "",
      commentContent: "",
      replyContent: "",
      isSubmitting: false,
      isSubmittingReply: false,
      avatarColors: [
        "#3eaf7c",
        "#00a0e9",
        "#f47920",
        "#7fb80e",
        "#8552a1",
        "#e8380d",
        "#7c378a",
        "#009ad6",
        "#e60012",
        "#a5a5a5",
      ],
    };
  },
  computed: {
    // 获取所有一级评论
    rootComments() {
      return this.comments.filter((comment) => comment.parent_id === 0);
    },
  },
  mounted() {
    this.fetchComments();
  },
  methods: {
    async fetchComments() {
      this.isLoading = true;
      try {
        const response = await fetch(
          `/api/comments/get?path=${encodeURIComponent(
            window.location.pathname
          )}`,
          {
            credentials: "include", // 确保可以发送和接收cookies
          }
        );

        if (response.ok) {
          this.comments = await response.json();
        } else {
          console.error("Failed to fetch comments");
        }
      } catch (err) {
        console.error("Error fetching comments:", err);
      } finally {
        this.isLoading = false;
      }
    },

    // 获取特定评论的所有回复
    getCommentReplies(commentId) {
      return this.comments.filter((comment) => comment.parent_id === commentId);
    },

    // 获取回复目标的名称
    getReplyTarget(reply) {
      // 如果没有reply_to_id，则回复的是父评论
      if (!reply.reply_to_id || reply.reply_to_id === reply.parent_id) {
        const parentComment = this.comments.find(
          (c) => c.id === reply.parent_id
        );
        return parentComment ? parentComment.author || "游客" : "游客";
      }

      // 否则，回复的是其他回复
      const targetReply = this.comments.find((c) => c.id === reply.reply_to_id);
      return targetReply ? targetReply.author || "游客" : "游客";
    },

    async submitComment() {
      if (!this.commentContent.trim()) {
        this.error = "请输入评论内容";
        return;
      }

      this.isSubmitting = true;

      try {
        // 提交评论到后端
        const response = await fetch("/api/comments/post", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content: this.commentContent,
            path: window.location.pathname,
            parent_id: 0, // 一级评论的parent_id是0
          }),
          credentials: "include", // 重要：确保可以发送和接收cookies
        });

        const result = await response.json();

        if (result.success) {
          this.commentContent = "";
          this.error = "";
          this.fetchComments();
        } else {
          this.error = result.message || "评论提交失败";
        }
      } catch (err) {
        this.error = "网络错误，请稍后再试";
        console.error(err);
      } finally {
        this.isSubmitting = false;
      }
    },

    async submitReply(targetComment) {
      if (!this.replyContent.trim()) {
        this.error = "请输入回复内容";
        return;
      }

      this.isSubmittingReply = true;

      try {
        // 确定父评论ID和回复目标ID
        const parentId = this.replyingToParentId || targetComment.id;
        const replyToId = targetComment.id;

        // 提交回复到后端
        const response = await fetch("/api/comments/post", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content: this.replyContent,
            path: window.location.pathname,
            parent_id: parentId,
            reply_to_id: replyToId,
          }),
          credentials: "include",
        });

        const result = await response.json();

        if (result.success) {
          this.replyContent = "";
          this.error = "";
          this.replyingTo = null;
          this.replyingToParentId = null;
          this.fetchComments();
        } else {
          this.error = result.message || "回复提交失败";
        }
      } catch (err) {
        this.error = "网络错误，请稍后再试";
        console.error(err);
      } finally {
        this.isSubmittingReply = false;
      }
    },

    // 回复评论
    replyTo(comment, parentId = null) {
      this.replyingTo = comment.id;
      // 如果是回复子评论，记录原始父评论ID
      this.replyingToParentId = parentId;
      this.replyContent = "";
    },

    cancelReply() {
      this.replyingTo = null;
      this.replyingToParentId = null;
    },

    formatDate(timestamp) {
      const date = new Date(timestamp * 1000);
      return date.toLocaleString("zh-CN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      });
    },

    // 根据访客ID生成一致的头像
    getAvatar(visitorId) {
      // 如果没有visitorId，使用默认颜色
      if (!visitorId) {
        return this.getDefaultAvatar();
      }

      // 将UUID字符串转换为数字
      const numericId = this.getNumericHash(visitorId);
      const colorIndex = numericId % this.avatarColors.length;
      const color = this.avatarColors[colorIndex];

      // 生成SVG头像
      return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='${encodeURIComponent(
        color
      )}'/%3E%3Ctext x='50' y='50' font-family='Arial' font-size='35' fill='white' text-anchor='middle' dominant-baseline='middle'%3E游客%3C/text%3E%3C/svg%3E`;
    },

    // 将字符串转换为数字的辅助方法
    getNumericHash(str) {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0; // 转换为32位整数
      }
      return Math.abs(hash);
    },

    // 默认头像
    getDefaultAvatar() {
      const defaultColor = this.avatarColors[0];
      return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='${encodeURIComponent(
        defaultColor
      )}'/%3E%3Ctext x='50' y='50' font-family='Arial' font-size='35' fill='white' text-anchor='middle' dominant-baseline='middle'%3E游客%3C/text%3E%3C/svg%3E`;
    },

    formatContent(content) {
      // 简单转义HTML以防XSS
      const escaped = content
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

      // 将URL转为链接
      return escaped.replace(
        /(https?:\/\/[^\s]+)/g,
        '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
      );
    },
  },
};
</script>

<style>
.plume-comments {
  margin-top: 2rem;
  padding-top: 2rem;
  font-family: var(--font-family);
  color: #e4e4e4;
}

.comments-title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
  color: #e4e4e4;
}

.comments-list {
  margin-bottom: 2rem;
}

.comment-item {
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.comment-item:last-child {
  border-bottom: none;
}

.comment-header {
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
}

.comment-avatar {
  margin-right: 1rem;
}

.comment-avatar img,
.reply-avatar img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.comment-meta {
  display: flex;
  flex-direction: column;
}

.comment-author {
  font-weight: 500;
  color: #e4e4e4;
}

.comment-date {
  font-size: 0.9rem;
  color: #999;
}

.comment-content {
  line-height: 1.6;
  margin-left: 3.5rem;
  word-break: break-word;
  color: #dcdcdc;
}

.comment-content a {
  color: #6c9aff;
  text-decoration: none;
}

.comment-content a:hover {
  text-decoration: underline;
}

.comment-actions {
  margin-top: 0.8rem;
  margin-left: 3.5rem;
}

.reply-button {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #7ba2ff;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.reply-button:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.3);
}

.reply-form {
  margin-top: 1rem;
  margin-left: 3.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
}

.no-comments {
  padding: 2rem 0;
  text-align: center;
  color: #999;
}

.comment-form {
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 1rem;
}

.form-error {
  color: #ff6b6b;
  margin-bottom: 1rem;
  padding: 0.5rem;
  background: rgba(255, 107, 107, 0.1);
  border-radius: 4px;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  color: #e4e4e4;
  font-family: var(--font-family);
  transition: border-color 0.2s ease;
  resize: vertical;
}

.form-group textarea:focus {
  outline: none;
  border-color: #7ba2ff;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

.submit-button,
.cancel-button {
  padding: 0.7rem 1.2rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.submit-button {
  background: #4e7bff;
  color: white;
  border: none;
}

.submit-button:hover {
  background: #3a67e8;
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.cancel-button {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #e4e4e4;
}

.cancel-button:hover {
  background: rgba(255, 255, 255, 0.05);
}

.main-comment-form h3 {
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
}

/* 子评论样式 */
.replies-container {
  margin-left: 3.5rem;
  margin-top: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  padding: 0.5rem 1rem;
  border-left: 2px solid rgba(255, 255, 255, 0.1);
}

.reply-item {
  padding: 0.8rem 0;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
}

.reply-item:last-child {
  border-bottom: none;
}

.reply-header {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.reply-avatar {
  margin-right: 0.8rem;
}

.reply-avatar img {
  width: 32px;
  height: 32px;
}

.reply-meta {
  display: flex;
  flex-direction: column;
}

.reply-author {
  font-weight: 500;
  color: #e4e4e4;
  font-size: 0.95rem;
}

.reply-author .replier {
  color: #7ba2ff;
}

.reply-author .reply-to {
  margin: 0 0.3rem;
  color: #999;
}

.reply-author .target {
  color: #7ba2ff;
}

.reply-date {
  font-size: 0.85rem;
  color: #999;
}

.reply-content {
  line-height: 1.5;
  margin-left: 2.8rem;
  word-break: break-word;
  color: #dcdcdc;
}

.reply-actions {
  margin-top: 0.5rem;
  margin-left: 2.8rem;
}

.reply-actions .reply-button {
  padding: 0.2rem 0.6rem;
  font-size: 0.85rem;
}

/* 响应式适配 */
@media (max-width: 768px) {
  .comment-content,
  .comment-actions,
  .reply-form {
    margin-left: 0;
  }

  .comment-header {
    margin-bottom: 1.2rem;
  }

  .replies-container {
    margin-left: 0.5rem;
    padding: 0.5rem;
  }

  .reply-content,
  .reply-actions {
    margin-left: 0;
  }
}

/* 适配暗色模式 */
html.dark .plume-comments,
html[data-theme="dark"] .plume-comments {
  /* 暗色模式已经是默认风格，这里可以添加额外的暗色模式特定样式 */
}

/* 适配亮色模式 */
html:not(.dark):not([data-theme="dark"]) .plume-comments {
  color: #333;

  .comments-title {
    color: #333;
  }

  .comment-item {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .comment-author {
    color: #333;
  }

  .comment-date {
    color: #666;
  }

  .comment-content {
    color: #444;
  }

  .comment-content a {
    color: #4e7bff;
  }

  .reply-button {
    border: 1px solid rgba(0, 0, 0, 0.1);
    color: #4e7bff;
  }

  .reply-button:hover {
    background: rgba(0, 0, 0, 0.03);
  }

  .reply-form {
    background: rgba(0, 0, 0, 0.03);
  }

  .no-comments {
    color: #888;
  }

  .comment-form {
    background: rgba(0, 0, 0, 0.03);
  }

  .form-group textarea {
    border: 1px solid rgba(0, 0, 0, 0.1);
    background: rgba(0, 0, 0, 0.02);
    color: #333;
  }

  .cancel-button {
    border: 1px solid rgba(0, 0, 0, 0.1);
    color: #333;
  }

  .replies-container {
    background: rgba(0, 0, 0, 0.02);
    border-left: 2px solid rgba(0, 0, 0, 0.1);
  }

  .reply-item {
    border-bottom: 1px dashed rgba(0, 0, 0, 0.1);
  }

  .reply-author {
    color: #333;
  }

  .reply-author .replier,
  .reply-author .target {
    color: #4e7bff;
  }

  .reply-author .reply-to {
    color: #666;
  }

  .reply-content {
    color: #444;
  }
}
</style>