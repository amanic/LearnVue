<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}

// 箭头函数
// const power = (参数列表) => {
//   函数内容
// }
// 一个参数可以省去括号

// 返回值|
// const mul = (num1, num2) =>{
//   return num1+num2
// }
// 上面的写法相当于只有一行代码，可以写成下面的格式
// constmul = (num1, num2) => num1 + num2
// ______________
// 什么时候使用箭头
  // setTimeout(function () {
  //   console.log(this);
  // }, 1000)
  //
  // setTimeout(() => {
  //   console.log(this);
  // }, 1000)

  // 问题: 箭头函数中的this是如何查找的了?
  // 答案: 向外层作用域中, 一层层查找this, 直到有this的定义.
  // const obj = {
  //   aaa() {
  //     setTimeout(function () {
  //       console.log(this); // window
  //     })
  //
  //     setTimeout(() => {
  //       console.log(this); // obj对象
  //     })
  //   }
  // }
  //
  // obj.aaa()


  const obj = {
    aaa() {
      setTimeout(function () {
        setTimeout(function () {
          console.log(this); // window
        })

        setTimeout(() => {
          console.log(this); // window
        })
      })

      setTimeout(() => {
        setTimeout(function () {
          console.log(this); // window
        })

        setTimeout(() => {
          console.log(this); // obj
        })
      })
    }
  }

  obj.aaa()

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
