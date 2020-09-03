// 引用vue路由'vue-router'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 调用路由
import routes from './routes'
const router = new VueRouter({
    routes
})

// 引用进度条
import nProgress from 'nprogress'

// 路由全局解析守卫
router.beforeEach((to, from, next) => {
    nProgress.start()
    next()
})
// 路由全局后置钩子
router.afterEach((to,from) => {
    nProgress.done()
})

export default router