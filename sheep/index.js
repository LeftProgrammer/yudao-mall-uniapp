// 引入框架库
import { $url, $router, $platform, $helper, zIndex } from '@jinghe-lvdi/core';
import $store from '@/sheep/store';
import * as core from '@jinghe-lvdi/core';
console.log('core===>', core); // 查看导出内容

const sheep = {
    $store,
    $url,
    $router,
    $platform,
    $helper,
    $zIndex: zIndex,
};

// 加载Shopro底层依赖
export async function ShoproInit() {
    // 应用初始化
    await $store('app').init();
  
    // 平台初始化加载(各平台provider提供不同的加载流程)
    $platform.load();
  
    if (process.env.NODE_ENV === 'development') {
      ShoproDebug();
    }
  }
  
  // 开发模式
  function ShoproDebug() {
    // 开发环境引入vconsole调试
    // #ifdef H5
    // import("vconsole").then(vconsole => {
    // 	new vconsole.default();
    // });
    // #endif
  
    // TODO 芋艿：可以打印路由
    // 同步前端页面到后端
    // console.log(ROUTES)
  }
  
// 保持与原有代码兼容的导出方式
export default sheep;
