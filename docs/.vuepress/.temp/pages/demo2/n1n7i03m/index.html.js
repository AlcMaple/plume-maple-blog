import comp from "/Users/mac/Downloads/del/plume-maple-blog/docs/.vuepress/.temp/pages/demo2/n1n7i03m/index.html.vue"
const data = JSON.parse("{\"path\":\"/demo2/n1n7i03m/\",\"title\":\"foo\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"foo\",\"createTime\":\"2025/03/30 14:21:24\",\"permalink\":\"/demo2/n1n7i03m/\"},\"headers\":[],\"readingTime\":{\"minutes\":0.04,\"words\":11},\"filePathRelative\":\"notes/demo2/foo.md\"}")
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
