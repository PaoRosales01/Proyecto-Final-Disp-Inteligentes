<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar class="toolbar">
        <ion-title>Administrar Producto</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-card class="card-container">
        <ion-grid>
        <ion-row>
                <ion-col 
                    size="12" 
                    size-lg="2" 
                    size-md="4" 
                    size-sm="10"
                    class="img-foco-container"
                >
                    <ion-img
                        src="/assets/img/foco.png  "
                        class="img-foco"
                    ></ion-img>
                </ion-col>
            </ion-row>
            </ion-grid>
        <ion-card-header>
          <ion-card-title class="card-container__title"
            >Nombre Del Producto</ion-card-title
          >
        </ion-card-header>

        <ion-card-content class="card-content">
        
         
          

          <div class="button-container">
            <ion-button class="button-container__style">Configurar</ion-button>
          </div>

          

         <div class="help-container">
          
            
         </div>
          <ion-card-title class="card-container__title"
            >Estadisticas De uso</ion-card-title
          >
        </ion-card-content>
        <ion-img
                        src="/assets/img/grafic.png  "
                        class="img-foco"
                    ></ion-img>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  },
});
</script>
