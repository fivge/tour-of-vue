#### 定义

```js
const User = {
  template: '<div>User</div>'
};

const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/user/:id', component: User },
    { path: '*', component: NotFoundComponent }
  ]
});
```

```js
const router = new VueRouter({
  routes: [
    {
      path: '/user/:id',
      component: User,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'profile',
          component: UserProfile
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'posts',
          component: UserPosts
        }
      ]
    }
  ]
});
```

#### 跳转、参数

```html
<router-link to="/foo">Go to Foo</router-link>
<router-link to="/bar">Go to Bar</router-link>
<router-view></router-view>
```

```js
// 给出一个路由 { path: '/user-*' }
this.$router.push('/user-admin');
this.$route.params.pathMatch; // 'admin'
// 给出一个路由 { path: '*' }
this.$router.push('/non-existing');
this.$route.params.pathMatch; // '/non-existing'
```

```js
// 字符串
router.push('home');

// 对象
router.push({ path: 'home' });

// 命名的路由
router.push({ name: 'user', params: { userId: '123' } });

// 带查询参数，变成 /register?plan=private
router.push({ path: 'register', query: { plan: 'private' } });

// 如果提供了 path，params 会被忽略

const userId = '123';
router.push({ name: 'user', params: { userId } }); // -> /user/123
router.push({ path: `/user/${userId}` }); // -> /user/123
// 这里的 params 不生效
router.push({ path: '/user', params: { userId } }); // -> /user
```

##### 命名路由

```js
const router = new VueRouter({
  routes: [
    {
      path: '/user/:userId',
      name: 'user',
      component: User
    }
  ]
});

router.push({ name: 'user', params: { userId: 123 } });
```

```html
<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
```

#### 重定向

```js
const router = new VueRouter({
  routes: [{ path: '/a', redirect: '/b' }]
});

const router = new VueRouter({
  routes: [
    {
      path: '/a',
      redirect: to => {
        // 方法接收 目标路由 作为参数
        // return 重定向的 字符串路径/路径对象
      }
    }
  ]
});

// 别名
const router = new VueRouter({
  routes: [{ path: '/a', component: A, alias: '/b' }]
});
```

#### 路由守卫

#### 路由元

#### 路由懒加载

```js
const Foo = () => import('./Foo.vue');

const Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue');
const Bar = () => import(/* webpackChunkName: "group-foo" */ './Bar.vue');
const Baz = () => import(/* webpackChunkName: "group-foo" */ './Baz.vue');
```

```bash
# nono
│   ├── app-legacy.5ad4178a.js
│   ├── app-legacy.5ad4178a.js.map
│   ├── app.5ad4178a.js
│   ├── app.5ad4178a.js.map
│   ├── chunk-vendors-legacy.de28998b.js
│   ├── chunk-vendors-legacy.de28998b.js.map
│   ├── chunk-vendors.de28998b.js
│   └── chunk-vendors.de28998b.js.map
# component
│   ├── app-legacy.3803fbfc.js
│   ├── app-legacy.3803fbfc.js.map
│   ├── app.96a0da14.js
│   ├── app.96a0da14.js.map
│   ├── chunk-2d0d7dea-legacy.fb804f14.js
│   ├── chunk-2d0d7dea-legacy.fb804f14.js.map
│   ├── chunk-2d0d7dea.fb804f14.js
│   ├── chunk-2d0d7dea.fb804f14.js.map
│   ├── chunk-2d0db300-legacy.76478a77.js
│   ├── chunk-2d0db300-legacy.76478a77.js.map
│   ├── chunk-2d0db300.76478a77.js
│   ├── chunk-2d0db300.76478a77.js.map
│   ├── chunk-vendors-legacy.de28998b.js
│   ├── chunk-vendors-legacy.de28998b.js.map
│   ├── chunk-vendors.de28998b.js
│   └── chunk-vendors.de28998b.js.map
# group
│   ├── app-legacy.2bfc165a.js
│   ├── app-legacy.2bfc165a.js.map
│   ├── app.c13005ce.js
│   ├── app.c13005ce.js.map
│   ├── chunk-vendors-legacy.de28998b.js
│   ├── chunk-vendors-legacy.de28998b.js.map
│   ├── chunk-vendors.de28998b.js
│   ├── chunk-vendors.de28998b.js.map
│   ├── group-foo-legacy.cf5e63ab.js
│   ├── group-foo-legacy.cf5e63ab.js.map
│   ├── group-foo.cf5e63ab.js
│   └── group-foo.cf5e63ab.js.map

```
