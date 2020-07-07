### 1

  <div *ngFor='let message of messageService.messages'> {{message}} </div>

key 如何生成

> 使用数组 index

```html
<div v-for="(message, index) of messages" :key="index"></div>
```

https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/1

> 因为不带 key 时节点能够复用，省去了销毁/创建组件的开销，同时只需要修改 DOM 文本内容而不是移除/添加节点，这就是文档中所说的“刻意依赖默认行为以获取性能上的提升”。
> 既然如此，为什么还要建议带 key 呢？因为这种模式只适用于渲染简单的无状态组件。对于大多数场景来说，列表组件都有自己的状态。
> 举个例子：一个新闻列表，可点击列表项来将其标记为"已访问"，可通过 tab 切换“娱乐新闻”或是“社会新闻”。
> 不带 key 属性的情况下，在“娱乐新闻”下选中第二项然后切换到“社会新闻”，"社会新闻"里的第二项也会是被选中的状态，因为这里复用了组件，保留了之前的状态。要解决这个问题，可以为列表项带上新闻 id 作为唯一 key，那么每次渲染列表时都会完全替换所有组件，使其拥有正确状态。
> 这只是个简单的例子，实际应用会更复杂。带上唯一 key 虽然会增加开销，但是对于用户来说基本感受不到差距，而且能保证组件状态正确，这应该就是为什么推荐使用唯一 id 作为 key 的原因。至于具体怎么使用，就要根据实际情况来选择了。

### 2

pipe 如何实现

> computed

> | async 管道需要再考虑

### 3

依赖注入如何完成

> https://cn.vuejs.org/v2/guide/components-edge-cases.html

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

> whatever 统一规范即可

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

> 通过改变原型链，构造 Observer。数据发生变化时，能够传递数据的变化
