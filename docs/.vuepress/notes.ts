import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

// const demoNote = defineNoteConfig({
//   dir: 'demo',
//   link: '/demo',
//   sidebar: ['', 'foo', 'bar'],
// })

// const demoNote2 = defineNoteConfig({
//   dir: 'demo2',
//   link: '/demo2',
//   sidebar: ['', 'foo', 'bar'],
// })

// - [基础知识](./基础知识.md)
// - [jQuery](./jQuery.md)
// - [进阶](./进阶.md)
// - [报错](./报错.md)
// - [链表](./链表.md)
// - [树](./树.md)
// - [递归](./递归.md)
// - [贪心](./贪心.md)
// - [动态规划](./动态规划.md)


const JavaScript = defineNoteConfig({
  dir: 'JavaScript',
  link: '/JavaScript',
  sidebar: ['', '基础知识', 'jQuery', '进阶', '报错', '链表', '树', '递归', '贪心', '动态规划'],
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [JavaScript],
})
