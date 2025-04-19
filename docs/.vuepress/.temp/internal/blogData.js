export const blogPostData = [{"path":"/article/jtdqtb5j/","title":"Mac","categoryList":[{"id":"3196de","sort":10001,"name":"preview2"}],"createTime":"2025/03/31 09:37:51","lang":"zh-CN","excerpt":""},{"path":"/article/dvlvx1vm/","title":"Markdown","categoryList":[{"id":"5ebeb6","sort":10000,"name":"preview"}],"tags":["markdown"],"createTime":"2025/03/30 14:21:24","lang":"zh-CN","excerpt":""},{"path":"/article/duz704lp/","title":"自定义组件","categoryList":[{"id":"5ebeb6","sort":10000,"name":"preview"}],"tags":["预览","组件"],"createTime":"2025/03/30 14:21:24","lang":"zh-CN","excerpt":""},{"path":"/article/bc8laxun/","title":"md","categoryList":[{"id":"3196de","sort":10001,"name":"preview2"}],"createTime":"2024/03/31 09:43:24","lang":"zh-CN","excerpt":""}]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogPostData) {
    __VUE_HMR_RUNTIME__.updateBlogPostData(blogPostData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ blogPostData }) => {
    __VUE_HMR_RUNTIME__.updateBlogPostData(blogPostData)
  })
}
