import comp from "/Users/mac/plume-maple-blog/docs/.vuepress/.temp/pages/demo2/index.html.vue"
const data = JSON.parse("{\"path\":\"/demo2/\",\"title\":\"Demo\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Demo\",\"createTime\":\"2025/03/30 14:21:24\",\"permalink\":\"/demo2/\"},\"headers\":[],\"readingTime\":{\"minutes\":0.04,\"words\":13},\"filePathRelative\":\"notes/demo2/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
