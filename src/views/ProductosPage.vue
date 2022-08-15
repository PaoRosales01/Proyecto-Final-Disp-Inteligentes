<template>
    <ion-page>
        <menu-principal></menu-principal>
        <ion-header :translucent="true">
            <ion-toolbar class="toolbar">
                <ion-buttons slot="start">
                    <ion-menu-button @click="openMenu"> </ion-menu-button>
                </ion-buttons>
                <ion-title>Productos</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding" :fullscreen="true">
            <ion-grid>
                <ion-row>
                    <ion-col size-lg="3" size-md="3" size-sm="12" v-for="producto in lista" :key="producto.id">
                        <ion-card class="div-info-producto">
                            <div class="img-container" :style="{ backgroundImage: 'url(' + producto.imagen + ')' }">
                                <div class="img-container__blur"></div>
                                <ion-img class="img-container__front" :src="producto.imagen"></ion-img>
                            </div>
                            <ion-card-header>
                                <ion-card-title class="nombre-producto">{{ producto.nombre }}</ion-card-title>
                            </ion-card-header>
                            <ion-card-content>
                                <p class="descripcion-producto">
                                    {{ producto.descripcion }}
                                </p>
                                <ion-card-subtitle class="precio-producto">{{ producto.precio }}</ion-card-subtitle>
                                <router-link class="router" to='/carrito'>
                                    <ion-button class="boton-producto" color="secondary">Comprar</ion-button>
                                </router-link>
                            </ion-card-content>
                        </ion-card>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>

<script>

import {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonGrid,
    IonCol,
    IonRow,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonImg,
    IonMenuButton,
    IonButtons,
    IonPage
} from "@ionic/vue";

import { defineComponent } from "vue";
import MenuPrincipal from './MenuPage.vue'

export default defineComponent({
    name: "ProductosPage",
    components: {
        IonContent,
        IonHeader,
        IonTitle,
        IonToolbar,
        MenuPrincipal,
        IonGrid,
        IonCol,
        IonRow,
        IonButton,
        IonCard,
        IonCardContent,
        IonCardHeader,
        IonCardSubtitle,
        IonCardTitle,
        IonImg,
        IonMenuButton,
        IonButtons,
        IonPage
    },
    data() {
        return {
            lista: [
                {
                    id: 1,
                    imagen: '/assets/img/focoInteligente.jpg',
                    nombre: 'Foco Led Inteligente ',
                    descripcion: 'Smart Light con 16 Millones de Colores, Regulable Control Remoto de APP',
                    precio: '$115',
                },
                {
                    id: 2,
                    imagen: '/assets/img/cerradura.jpg',
                    nombre: 'Cerradura Biometrica',
                    descripcion: 'Modelo: LC-1298, Smart Lock, 5 Métodos de Apertura, Teclado con Luz.',
                    precio: '$2500',
                },
                {
                    id: 3,
                    imagen: '/assets/img/dispensador.jpg',
                    nombre: 'Dispensador de Alimento para Mascotas',
                    descripcion: 'Funciona con tecnología WiFi  e incluye un cuenco de acero inoxidable con capacidad de 4 litros',
                    precio: '$1630',
                },
                {
                    id: 4,
                    imagen: '/assets/img/echodot.jpg',
                    nombre: 'Echo Dot',
                    descripcion: 'Se controla con la voz y te conecta con Alexa a través de red Wi-Fi.',
                    precio: '$400',
                }
            ]
        }
    }
});
</script>