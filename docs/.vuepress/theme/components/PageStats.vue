<template>
  <div class="visitor-stats">
    <span v-if="isLoaded">访客数：{{ visitorCount }} 人</span>
    <span v-if="isLoaded">总访问量：{{ totalVisits }} 次</span>
    <span v-if="isLoaded">本文阅读量：{{ pageViews }} 次</span>
    <span v-else>统计数据加载中...</span>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const visitorCount = ref(0)
const totalVisits = ref(0)
const pageViews = ref(0)
const isLoaded = ref(false)

// API前缀路径，同域名下直接使用相对路径
const API_BASE = '/api'

onMounted(async () => {
  try {
    // 获取当前文章ID（使用路径作为ID）
    const articleId = route.path
    
    // 记录访客
    const visitorResponse = await fetch(`${API_BASE}/record-visitor`, {
      credentials: 'include' // 重要：发送和接收cookies
    })
    const visitorData = await visitorResponse.json()
    visitorCount.value = visitorData.visitorCount
    
    // 记录文章访问（去重）
    const articleResponse = await fetch(`${API_BASE}/record-article-visit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ articleId })
    })
    const articleData = await articleResponse.json()
    totalVisits.value = articleData.totalVisits
    
    // 记录页面浏览（不去重）
    const viewResponse = await fetch(`${API_BASE}/record-page-view`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ articleId })
    })
    const viewData = await viewResponse.json()
    pageViews.value = viewData.pageViews
    
    isLoaded.value = true
  } catch (error) {
    console.error('统计服务错误:', error)
    // 即使有错误也标记为已加载，避免一直显示加载中
    isLoaded.value = true
  }
})
</script>

<style>
.visitor-stats {
  margin: 1rem 0;
  font-size: 0.9rem;
  color: #666;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>