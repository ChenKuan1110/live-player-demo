/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}


// 微信 JSSDK
declare var wx: any

// flv.js
declare var flvjs: any
