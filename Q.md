### 1

  <div *ngFor='let message of messageService.messages'> {{message}} </div>

key 如何生成

### 2

pipe 如何实现

### 3

依赖注入如何完成

### 4

如果 DI 采用 vuex 的话，如何控制作用域。如何模块化

#### 4.1

`.vue` 共享同一个实例，js 是独立的文件

如何在 js 中，共享 vue 的实例

> now

vuex 中的实例在 store.js 中已经实例化了，所以各个 js 文件共享的是同一个实例，通过导入的方式引入即可

> way1

new JS

construct 注入

### 5

vue 组件命名规则/规范

如果只采用常量的话，如何区分是组件还是类型、常量

———— 引入时候的 .vue 后缀??

`MessagesComponent` `Messages`

### 6 `__ob__: Observer`

what is `__ob__: Observer`

> vue

data{
array || object
}

> vuex

console.log(store.state.messages);

展开即不发生变化。。不同与 rxjs 中的 Observables？？？

- https://juejin.im/post/5b38527951882574a672615d
