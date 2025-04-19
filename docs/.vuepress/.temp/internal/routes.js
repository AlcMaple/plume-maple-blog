export const redirects = JSON.parse("{\"/preview/custom-component.example.html\":\"/article/duz704lp/\",\"/preview/markdown.html\":\"/article/dvlvx1vm/\",\"/preview2/Mac.html\":\"/article/jtdqtb5j/\",\"/preview2/md.html\":\"/article/bc8laxun/\",\"/notes/demo/\":\"/demo/\",\"/notes/demo/bar.html\":\"/demo/ik769n76/\",\"/notes/demo/foo.html\":\"/demo/n1n7i03m/\",\"/notes/demo2/\":\"/demo2/\",\"/notes/demo2/bar.html\":\"/demo2/ik769n76/\",\"/notes/demo2/foo.html\":\"/demo2/n1n7i03m/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/mac/plume-maple-blog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/article/duz704lp/", { loader: () => import(/* webpackChunkName: "article_duz704lp_index.html" */"/Users/mac/plume-maple-blog/docs/.vuepress/.temp/pages/article/duz704lp/index.html.js"), meta: {"title":"自定义组件"} }],
  ["/article/dvlvx1vm/", { loader: () => import(/* webpackChunkName: "article_dvlvx1vm_index.html" */"/Users/mac/plume-maple-blog/docs/.vuepress/.temp/pages/article/dvlvx1vm/index.html.js"), meta: {"title":"Markdown"} }],
  ["/article/jtdqtb5j/", { loader: () => import(/* webpackChunkName: "article_jtdqtb5j_index.html" */"/Users/mac/plume-maple-blog/docs/.vuepress/.temp/pages/article/jtdqtb5j/index.html.js"), meta: {"title":"Mac"} }],
  ["/article/bc8laxun/", { loader: () => import(/* webpackChunkName: "article_bc8laxun_index.html" */"/Users/mac/plume-maple-blog/docs/.vuepress/.temp/pages/article/bc8laxun/index.html.js"), meta: {"title":"md"} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "demo_index.html" */"/Users/mac/plume-maple-blog/docs/.vuepress/.temp/pages/demo/index.html.js"), meta: {"title":"Demo"} }],
  ["/demo/ik769n76/", { loader: () => import(/* webpackChunkName: "demo_ik769n76_index.html" */"/Users/mac/plume-maple-blog/docs/.vuepress/.temp/pages/demo/ik769n76/index.html.js"), meta: {"title":"bar"} }],
  ["/demo/n1n7i03m/", { loader: () => import(/* webpackChunkName: "demo_n1n7i03m_index.html" */"/Users/mac/plume-maple-blog/docs/.vuepress/.temp/pages/demo/n1n7i03m/index.html.js"), meta: {"title":"foo"} }],
  ["/demo2/", { loader: () => import(/* webpackChunkName: "demo2_index.html" */"/Users/mac/plume-maple-blog/docs/.vuepress/.temp/pages/demo2/index.html.js"), meta: {"title":"Demo"} }],
  ["/demo2/ik769n76/", { loader: () => import(/* webpackChunkName: "demo2_ik769n76_index.html" */"/Users/mac/plume-maple-blog/docs/.vuepress/.temp/pages/demo2/ik769n76/index.html.js"), meta: {"title":"bar"} }],
  ["/demo2/n1n7i03m/", { loader: () => import(/* webpackChunkName: "demo2_n1n7i03m_index.html" */"/Users/mac/plume-maple-blog/docs/.vuepress/.temp/pages/demo2/n1n7i03m/index.html.js"), meta: {"title":"foo"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/mac/plume-maple-blog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"/Users/mac/plume-maple-blog/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"博客"} }],
  ["/blog/tags/", { loader: () => import(/* webpackChunkName: "blog_tags_index.html" */"/Users/mac/plume-maple-blog/docs/.vuepress/.temp/pages/blog/tags/index.html.js"), meta: {"title":"标签"} }],
  ["/blog/archives/", { loader: () => import(/* webpackChunkName: "blog_archives_index.html" */"/Users/mac/plume-maple-blog/docs/.vuepress/.temp/pages/blog/archives/index.html.js"), meta: {"title":"归档"} }],
  ["/blog/categories/", { loader: () => import(/* webpackChunkName: "blog_categories_index.html" */"/Users/mac/plume-maple-blog/docs/.vuepress/.temp/pages/blog/categories/index.html.js"), meta: {"title":"分类"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
