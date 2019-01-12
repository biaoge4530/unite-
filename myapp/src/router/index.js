import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Word from '@/components/word'
import My from '@/components/my'
import Login from '@/components/login'
/* import NotLogin from '../components/notLogin' */
import Edit_btn from '@/components/edit_btn'
import Register from '@/components/register'
import Edit_home from '@/components/edit_home'
import WordMdn from '@/components/word-mdn/headphoto'
import Fans from '@/components/word-mdn/components-head/fans'
import Like from '@/components/word-mdn/components-head/like'
import Hot from '@/components/word-mdn/components-head/hot'
import Notebook from '@/components/word-mdn/components-head/notebook'
import Word_search from '@/components/word_search'
import Word_notice from '@/components/word_notice'
import Collect from '@/components/collect'
import New from '@/components/collect/new'
Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path:"/",
      redirect:"/word"
    },
    {
      path: '/word',
      name: "word",
      component: Word,
      meta:{
      	showFooter: true
      }
    },
    {
      path:"/word/word_search",
      name:"word_search",
      component:Word_search,
      meta:{
        showFooter:false,
      }
    },
    {
      path:"/word/word_notice",
      name:"word_notice",
      component:Word_notice,
      meta:{
        showFooter:false,
      }
    },
    {
      path:"/word/word_search",
      name:"word_search",
      component:Word_search,
      meta:{
        showFooter:false,
      }
    },
    {
      path: '/word-mdn',
      name: 'word-mdn',
      component: WordMdn,
      children:
        [
          {
            path: '/like',
            name: 'like',
            component: Like
          },
          {
            path: '/fans',
            name: 'fans',
            component: Fans
          }
        ]
    },
    {
      path: '/my',
      name: "my",
      component: My,
      meta:{
      	showFooter: true
      }
    },
    {
      path: '/edit_btn',
      name: "edit_btn",
      component: Edit_btn,
      meta:{
      	showFooter: false
      }
    },
    {
      path: '/edit_home',
      name: "edit_home",
      component: Edit_home,
      meta:{
      	showFooter: false
      }
    },
		{
			path: "/release_dynamics",
			name:"release_dynamics",
			component: Release_dynamics,
			meta:{
				showFooter:false
			}
		},
		{
			path: "/select_place",
			name:"select_place",
			component: Select_place,
			meta:{
				showFooter:false
			}
		},
		{
			path:"/select_public",
			name:"select_public",
			component:Select_public,
			meta:{
				showFooter:false
			}
		},
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta:{
        //tab栏隐藏
        showFooter: false,
        //路由守卫
        requireAuth:true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta:{
        showFooter: false,
        requireAuth:true
      }
    },
    /* {
      path: '/notLogin',
      name: 'notLogin',
      component: NotLogin,
      meta:{
        showFooter: true,
        requireAuth:true
      }
    }, */
    {
      path: '/verify',
      name: 'verify',
      component: Verify,
      meta:{
        showFooter: false,
        requireAuth:true
      }
    },
    {
      path: '/restPassword',
      name: 'restPassword',
      component: RestPassword,
      meta:{
        showFooter: false,
        requireAuth:true
      }
    },
    {
      path: '/bandPhone',
      name: 'bandPhone',
      component: BandPhone,
      meta:{
        showFooter: false,
        requireAuth:true
      }
    },
    {
      path: '/collect',
      name: 'collect',
      component: Collect,
      meta:{
        showFooter: false,
        requireAuth:true
      }
    },
    {
      path: '/new',
      name: 'new',
      component: New,
      meta:{
        showFooter: false,
        requireAuth:true
      }
    },
  ]
})

//注册全局钩子函数用来拦截导航
/* router.beforeEach( (to,from,next)=>{
  const token = store.state.token
  if(to.meta.requireAuth){   //判断该路由是否需要登录权限
    if(token){ //通过vuex state获取当前的token是否存在
      next()
    }else{
      //该页面需要登录
      next({
        path:'/login'
        //query:{redirect:to.fullPath} //将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }else{
    next()
  }
} ) */





export default router;
