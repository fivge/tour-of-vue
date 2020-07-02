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

<button v-on:click="reverseMessage">逆转消息</button>

<!-- 双向绑定 -->
<input v-model="message" />

<p v-if="seen"></p>

<li v-for="todo in todos">
  {{ todo.text }}
</li>
```

v-model 本质上不过是语法糖

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

##### `key`

Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。

Vue 为你提供了一种方式来表达“这两个元素是完全独立的，不要复用它们”。只需添加一个具有唯一值的 key attribute 即可

### Vue 实例

```js
var data = { a: 1 };

var vm = new Vue({
  el: '#example',
  data: data
});
```

#### property

当一个 Vue 实例被创建时，它将 data 对象中的所有的 property 加入到 Vue 的响应式系统中。当这些 property 的值发生改变时，视图将会产生“响应”，即匹配更新为新的值。

_这里唯一的例外是使用 Object.freeze()，这会阻止修改现有的 property，也意味着响应系统无法再追踪变化。_

除了数据 property，Vue 实例还暴露了一些有用的实例 property 与方法。它们都有前缀 \$，以便与用户定义的 property 区分开来

#### 生命周期钩子

生命周期钩子的 this 上下文指向调用它的 Vue 实例。

> 不要在选项 property 或回调上使用箭头函数。因为箭头函数并没有 this，this 会作为变量一直向上级词法作用域查找，直至找到为止

### 模板语法

在底层的实现上，Vue 将模板编译成虚拟 DOM 渲染函数。结合响应系统，Vue 能够智能地计算出最少需要重新渲染多少组件，并把 DOM 操作次数减到最少。

#### 插值

`{{ prop }}`

`v-bind`

#### 指令 Directives

`v-*`

指令 attribute 的值预期是单个 JavaScript 表达式

指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。

```html
<!-- 最基本 -->
<p v-if="seen"></p>
<!-- 绑定参数 -->
<span v-bind:title="message"></span>
<!-- 动态参数 -->
<a v-bind:[attributeName]="url"> ... </a>
<a v-on:[eventName]="doSomething"> ... </a>
<script>
  data: {
    attributeName: 'hr' + 'ef';
    eventName: 'fo' + 'cus';
  }
</script>
<!-- 修饰符 -->
<!-- .prevent 修饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault() -->
<form v-on:submit.prevent="onSubmit">...</form>
```

##### 缩写

> `v-bind`

```html
<!-- 完整语法 -->
<a v-bind:href="url">...</a>

<!-- 缩写 -->
<a :href="url">...</a>

<!-- 动态参数的缩写 (2.6.0+) -->
<a :[key]="url"> ... </a>
```

> `v-on`

```html
<!-- 完整语法 -->
<a v-on:click="doSomething">...</a>

<!-- 缩写 -->
<a @click="doSomething">...</a>

<!-- 动态参数的缩写 (2.6.0+) -->
<a @[event]="doSomething"> ... </a>
```

### 计算属性和侦听器

`computed`

`watch`

### 数组和对象

Vue 将被侦听的数组的变更方法进行了包裹，所以它们也将会触发视图更新。这些被包裹过的方法包括：

- push()
- pop()
- shift()
- unshift()
- splice()
- sort()
- reverse()

Vue 为了使得 DOM 元素得到最大范围的重用而实现了一些智能的**启发式方法**，所以用一个含有相同元素的数组去替换原来的数组是非常高效的操作。

由于 JavaScript 的限制，Vue 不能检测数组和对象的变化。深入响应式原理中有相关的讨论。

---

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

> mvvm

MVVM `ViewModel`

V <==> VM <==> M

- <https://zh.wikipedia.org/wiki/MVVM#/media/File:MVVMPattern.png>

![](https://zh.wikipedia.org/wiki/MVVM#/media/File:MVVMPattern.png)

> `()=>`

箭头函数并没有 this，this 会作为变量一直向上级词法作用域查找，直至找到为止

> 虚拟 DOM

render()

JSX

> 指令

`vue` vs `angular`

```html
<!-- vue -->
<a :href="url">...</a>

<a @click="doSomething">...</a>

<input v-model="message" />

<!-- angular -->
<a [href]="url">...</a>
<input [ngModule]="message" />

<a (click)="doSomething">...</a>

<input [(ngModule)]="message" />
```

> 数组和对象

https://cn.vuejs.org/v2/guide/reactivity.html#%E6%A3%80%E6%B5%8B%E5%8F%98%E5%8C%96%E7%9A%84%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9

---

todo https://cn.vuejs.org/v2/guide/components.html
