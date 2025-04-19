export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"Maple\",\"description\":\"小case\",\"head\":[[\"link\",{\"rel\":\"icon\",\"type\":\"image/png\",\"href\":\"/logo.png\"}],[\"script\",{\"src\":\"//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js\",\"async\":true,\"data-pjax-transient\":\"\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
