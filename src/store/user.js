import firebase from 'firebase/app';
export default {
    state: {
        user: {
            isAuthenticated: false,
            uid: null
        }
    },
    mutations: {},
    getters: {},
    actions: {
        async registerUser({commit}, {email, password}) {
            const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
            console.log(' ..111111111. user=', user);
        }
    }
}