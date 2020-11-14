// 1.使用commonjs的模块化规范
const {add, mul} = require('./js/mathUtil.js')

console.log(add(20, 30));
console.log(mul(20, 30));

// 2.使用ES6的模块化的规范
import {name, age, height} from "./js/info";

console.log(name);
console.log(age);
console.log(height);

// 3.依赖css文件
require('./css/normal.css')

// 4.依赖less文件
require('./css/special.less')

document.writeln('<h2>你好啊，陈海涛。</h2>')

import Vue from 'vue'

const app = {
    template: `
    <div id = app>{{message}}</div>
    `,
    data() {
        return {
            message: '我是message'
        }
    }
}

new Vue({
    el: '#app',
    template: '<app/>',
    components: {
        app
    }
  })
  