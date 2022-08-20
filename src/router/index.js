import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import SignupPage from '../views/SignupPage.vue'
import CarritoPage from '../views/CarritoPage.vue'
import InicioClientePage from '../views/InicioClientePage.vue'
import ContinuarCompraPage from '../views/ContinuarCompraPage.vue'
import CuentaClientePage from '../views/CuentaClientePage.vue'
import MenuPage from '../views/MenuPage.vue'
import AdministrarProductoPage from '../views/AdministrarProductoPage.vue'
import ProductosPage from '../views/ProductosPage.vue'
import ContactoPage from '../views/ContactoPage.vue'
import NosotrosPage from '../views/NosotrosPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignupPage
  },
  {
    path: '/carrito',
    name: 'Carrito',
    component: CarritoPage
  },
  {
    path: '/inicioCliente',
    name: 'InicioCliente',
    component: InicioClientePage
  },
  {
    path: '/continuarCompra',
    name: 'ContinuarCompra',
    component: ContinuarCompraPage
  },
  {
    path: '/cuentaCliente',
    name: 'CuentaCliente',
    component: CuentaClientePage
  },
  {
    path: '/menu',
    name: 'Menu',
    component: MenuPage
  },
  {
    path: '/administrarProducto',
    name: 'AdministrarProducto',
    component: AdministrarProductoPage
  },
  {
    path: '/productos',
    name: 'Productos',
    component: ProductosPage
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: ContactoPage
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: NosotrosPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
