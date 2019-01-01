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
        SIGNUP({commit}, payload) {
            console.log(' ..111111111. el=', payload);
            console.log(' ... commit=',commit)
        }
    }
}