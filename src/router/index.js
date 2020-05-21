import Vue from 'vue';
import VueRouter from 'vue-router';
import IndexComponent from '../components/web/pages/Index'
import AboutComponent from '../components/web/pages/About'
import ContactComponent from '../components/web/pages/Contact'
import NotFoundComponent from '../components/web/pages/NotFound'

Vue.use(VueRouter)

const routes = [
{
	path: '/',
	component:IndexComponent,
	name:'Index'
},
{
	path: '/home',
	component:IndexComponent,
	name:'Home'
},
{
	path: '/about',
	component:AboutComponent,
	name:'About'
},
{
	path: '/contact',
	component:ContactComponent,
	name:'Contact'
},
{ 	path: '*', 
	component: NotFoundComponent 
}
]

export default new VueRouter({
	routes,
	mode: 'history',
})