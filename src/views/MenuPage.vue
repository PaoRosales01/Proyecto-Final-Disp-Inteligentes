<template>
    <ion-menu side="start" content-id="principal">
        <ion-header :translucent="true">
            <ion-toolbar class="toolbar">
                <ion-title>Menú Principal</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list>
                <ion-item v-for="pagina in lista" :key="pagina.titulo">
                    <ion-icon :src="pagina.icono" class="icono-menu"> </ion-icon>
                    <router-link class="router" :to="pagina.redirectTo">
                        <ion-label class="opciones-menu"> {{pagina.titulo}} </ion-label>
                    </router-link>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-menu>
    <ion-router-outlet id="principal"/>
</template>

<script>

import {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonMenu,
    IonIcon,
    IonLabel,
    IonList,
    IonItem,
    IonRouterOutlet,
    menuController
} from "@ionic/vue";

import { defineComponent } from "vue";

export default defineComponent({
    name: "MenuPrincipal",
    components: {
        IonContent,
        IonHeader,
        IonTitle,
        IonToolbar,
        IonMenu,
        IonList,
        IonItem,
        IonIcon,
        IonLabel,
        IonRouterOutlet
    },
    data() {
        return {
            lista: [
                { titulo: 'Inicio', icono: '/assets/icons/inicio.svg', redirectTo: '/home' },
                { titulo: 'Nosotros', icono: '/assets/icons/nosotros.svg', redirectTo: '/nosotros' },
                { titulo: 'Productos', icono: '/assets/icons/admin-produc.svg', redirectTo: '/productos' },
                { titulo: 'Contacto', icono: '/assets/icons/contacto.svg', redirectTo: '/contacto' },
                { titulo: 'Iniciar Sesión', icono: '/assets/icons/login.svg', redirectTo: '/login' },
                { titulo: 'Registrarse', icono: '/assets/icons/person-add.svg', redirectTo: '/signup' },
                { titulo: 'Inicio (Administrador)', icono: '/assets/icons/inicio.svg', redirectTo: '/inicioCliente' },
                { titulo: 'Carrito de Compras', icono: '/assets/icons/carrito.svg', redirectTo: '/carrito' },
                { titulo: 'Administrar Producto', icono: '/assets/icons/admin-produc.svg', redirectTo: '/administrarProducto' },
                { titulo: 'Configuración de Cuenta', icono: '/assets/icons/configuracion.svg', redirectTo: '/cuentaCliente' },
            ],
        };
    },
    methods: {
        openMenu() {
            menuController.enable(true);
            menuController.open();
        },
        closeMenu(){
            menuController.enable(true);
            menuController.close();
        }
        
    }
});
</script>