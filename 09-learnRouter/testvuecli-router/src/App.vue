<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link :to="'/user/' + userId">用户</router-link>
      <router-link :to="{path:'/profile',query:{age:18, name:'martea', sex:'male'}}">个人简历</router-link>
      <button @click="aboutButton">通过代码的方式实现跳转</button>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      userId: 'amanic'
    }
  },
  methods: {
    aboutButton(){
      this.$router.push('/about')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
