## vuex

#### Mutation

> 提交载荷（Payload）

```js
mutations: {
  increment (state, n) {
    state.count += n
  }
}

store.commit('increment', 10)
```

Mutation 需遵守 Vue 的响应规则
