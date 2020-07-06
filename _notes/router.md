`router-view`

```html
<router-view></router-view>
```

`router`

```js
const router = new VueRouter({
  routes: [
    { path: '/user', component: User },
    // 重定向
    { path: '/a', redirect: '/b' },
     {
      path: '/a',
      redirect: to => {
        // 方法接收 目标路由 作为参数
        // return 重定向的 字符串路径/路径对象
      }
    },
    // 别名
    { path: '/a', component: A, alias: '/b' },
    // 动态路径参数 以冒号开头
    { path: '/user/:id', component: User },
    // 命名路由
    {
      path: '/user/:userId',
      name: 'user',
      component: User
    },
    // 子路由
     {
      path: '/user/:id',
      component: User,
      children: [
        {
          // /user/:id/profile
          path: 'profile',
          component: UserProfile
        },
        {
          // /user/:id/posts
          path: 'posts',
          component: UserPosts
        }
      ]
    }
    // 通配
    { path: '*', component: NotFoundComponent }
  ]
});
```

`router`

`js`

```js
// 字符串
router.push('home');
// 对象
router.push({ path: 'home' });
router.push({ path: '/home' });
// 带查询参数，变成 /register?plan=private
router.push({ path: 'register', query: { plan: 'private' } });
// params
router.push({ path: `/user/${userId}` }); // -> /user/123
router.push({ name: 'user', params: { userId } }); // -> /user/123
// 如果提供了 path，params 会被忽略 ⛔
router.push({ path: '/user', params: { userId } }); // -> /user 这里的 params 不生效 ⛔
// 命名的路由
router.push({ name: 'user', params: { userId: '123' } });
```

`router.go(n)`

这个方法的参数是一个整数，意思是在 history 记录中向前或者后退多少步，类似 window.history.go(n)。

```js
// 在浏览器记录中前进一步，等同于 history.forward()
router.go(1);

// 后退一步记录，等同于 history.back()
router.go(-1);

// 前进 3 步记录
router.go(3);

// 如果 history 记录不够用，那就默默地失败呗
router.go(-100);
router.go(100);
```

`html`

```html
<router-link to="/foo">Go to Foo</router-link>
<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
<router-view></router-view>
```

> route

`params`

```js
// /user/:id
$route.params.id;
```

`pathMatch`

```js
// 给出一个路由 { path: '/user-*' }
this.$router.push('/user-admin');
this.$route.params.pathMatch; // 'admin'
// 给出一个路由 { path: '*' }
this.$router.push('/non-existing');
this.$route.params.pathMatch; // '/non-existing'
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
