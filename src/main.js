import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/messaging';
import 'firebase/storage';

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    router,
    store,
    created() {
        let config = {
            apiKey: "AIzaSyCKt_lkiEMSYT7iUfC2T2O_XKzyLy0RlcI",
            authDomain: "friendlychat-f95f6.firebaseapp.com",
            databaseURL: "https://friendlychat-f95f6.firebaseio.com",
            projectId: "friendlychat-f95f6",
            storageBucket: "friendlychat-f95f6.appspot.com",
            messagingSenderId: "266869847098"
        };
        firebase.initializeApp(config);

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.$store.dispatch('loggedUser', user)
            }
        })
    }
}).$mount('#app');

