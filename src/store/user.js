import firebase from 'firebase/app';

export default {
    state: {
        user: null
    },
    getters: {
        isLogged(state) {
            return state.user
        }
    },
    mutations: {
        setUser(state, id) {
            state.user = id
        },
        logoutUser(state) {
            state.user = null
        }
    },
    actions: {
        async registerUser({commit}, {email, password}) {
            const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
            commit('setUser', user.user.uid)
        },
        async loginUser({commit}, {email, password}) {
            const user = await firebase.auth().signInWithEmailAndPassword(email, password);
            commit('setUser', user.user.uid)
        },
        async logOutUser({commit}) {
            await firebase.auth().signOut();
            commit('logoutUser')
        },
        loggedUser({commit}, user) {
            commit('setUser', user.uid);
        }
    }
}