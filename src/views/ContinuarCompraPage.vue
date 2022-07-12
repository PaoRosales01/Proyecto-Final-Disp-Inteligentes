<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar class="toolbar">
        <ion-title>Continuar Compra</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
        <ion-grid>
            <ion-row>
                <ion-col 
                    size="11" 
                    size-lg="2" 
                    size-md="4" 
                    size-sm="10"
                >
                    <ion-item>
                        <ion-label position="floating">Nombre completo:</ion-label>
                        <ion-input></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="floating">Dirección:</ion-label>
                        <ion-input></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="floating" >Método de pago</ion-label>
                        <ion-select>
                            <ion-select-option value="debito">
                                Tarjeta de débito
                            </ion-select-option>
                            <ion-select-option value="credito">
                                Tarjeta de crédito
                            </ion-select-option>
                            <ion-select-option value="paypal">
                                Paypal
                            </ion-select-option>
                            <ion-select-option value="tranferencia">
                                Transeferencia bancaria
                            </ion-select-option>
                        </ion-select>
                    </ion-item>
                </ion-col>
            </ion-row>   
            <ion-row>
                <ion-col 
                    size="12"
                    size-lg="2" 
                    size-md="4" 
                    size-sm="10"
                    class="total-pagar"
                >
                    <h4>Total a pagar: $2630.00</h4>
                </ion-col>
            </ion-row>      
            <ion-row>
                <div class="button-container btn-continuar">
                    <ion-button class="button-container__style">Finalizar compra</ion-button>
                </div>
            </ion-row>      
        </ion-grid>
    </ion-content>
  </ion-page>
</template>



<script>
import {
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonContent
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContinuarCompraPage",
  components: {
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonContent
  }
});
</script>