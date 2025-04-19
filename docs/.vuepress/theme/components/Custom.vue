<script setup lang="ts">
import { ref } from "vue";
import { onMounted } from "vue";

const message = ref("Hello World!");

onMounted(() => {
  // 重置不蒜子计数器（仅用于开发环境，生产环境请移除此代码）
  if (process.env.NODE_ENV === "development") {
    localStorage.removeItem("busuanzi_id");
  }
});
</script>

<template>
  <!-- <div class="my-custom-content">
    {{ message }}
  </div> -->
  <div>
    <!-- 访问统计 -->
    <div class="visitor-stats">
      <!-- <span id="busuanzi_container_site_uv">
        访客数：<span id="busuanzi_value_site_uv"></span> 人
      </span>
      <span id="busuanzi_container_site_pv">
        总访问量：<span id="busuanzi_value_site_pv"></span> 次
      </span> -->
      <span id="busuanzi_container_page_pv">
        本文阅读量：<span id="busuanzi_value_page_pv"></span> 次
      </span>
    </div>
  </div>
</template>

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
