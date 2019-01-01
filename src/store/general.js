export default {
    state: {
        processing: false,
        error: false
    },
    mutations: {
        setProcessing(state, payload) {
            state.processing = payload;
        },
        setError(state, payload) {
            state.processing = payload;
        }
    },
    actions: {},
    getters: {
        getProcessing: (state) => state.processing

    }
}