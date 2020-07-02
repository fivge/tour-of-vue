# vue.js

### get start

#### DOM

- `{{ prop }}`
- `v-bind` `v-on`
- `v-module`
- `v-if` `v-for`

```html
{{ message }}

<span v-bind:title="message"></span>

<p v-if="seen"></p>

<li v-for="todo in todos">
  {{ todo.text }}
</li>

<button v-on:click="reverseMessage">逆转消息</button>

<!-- 双向绑定 -->
<input v-model="message" />
```

```js
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('');
    }
  }
});
```

#### 组件

```html
<todo-item v-for="item in groceryList" v-bind:todo="item" v-bind:key="item.id"> </todo-item>
```

```js
Vue.component('todo-item', {
  // todo-item 组件现在接受一个
  // "prop"，类似于一个自定义 attribute。
  // 这个 prop 名为 todo。
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});
```

`key`

### todo

> app4

`__ob__: Observer`

```js
console.log(app4.obj);

name: "name"
__ob__: Observer {value: {…}, dep: Dep, vmCount: 0}
get name: ƒ reactiveGetter()
set name: ƒ reactiveSetter(newVal)
__proto__: Object
```

- [JS 中的观察者们 —— 四种 Observers](https://xiaotianxia.github.io/blog/vuepress/js/four_kinds_of_observers.html)
- [渲染器](http://hcysun.me/vue-design/zh/)

> app7

`custom-elements`

```html
<todo-item></todo-item>
```

<https://custom-elements-everywhere.com/>

<https://developer.mozilla.org/zh-CN/docs/Web/Web_Components>

WebComponents

- Custom elements
- Shadow DOM
- HTML templates
