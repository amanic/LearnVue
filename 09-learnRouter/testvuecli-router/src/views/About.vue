<template>
  <div class="about">
    <h1>使用vue-router的步骤</h1>
    <h2>第一步：创建路由组建，详见router文件夹下面的index.js</h2>
    <h2>第二步：配置路由映射：组件和路径的映射关系配置</h2>
    <h2>第三步：使用路由，通过&ltrouter-link&gt和&ltrouter-view&gt标签使用</h2>
    <router-link to="/about/news">新闻</router-link>
    <router-link to="/about/msgs">消息</router-link>
    <router-view ></router-view>
  </div>
</template>
