<template>
  <div id="app">
    <img src="../assets/logo.png">
    <div class="nav">
         <!-- 使用 router-link 组件来导航. -->
        <!-- 通过传入 `to` 属性指定链接. -->
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/hello">About</router-link></li>
        </ul>
    </div>
    <div class="main">
       <router-view></router-view>
     </div>
     <div class="row">
       <user-name></user-name>
       <user-submit></user-submit>
     </div>

  </div>
</template>

<script>
import UserName from '@/components/UserName'
import UserSubmit from '@/components/UserSubmit'
export default {
  name: 'app',
  components: {
    UserName,
    UserSubmit
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
