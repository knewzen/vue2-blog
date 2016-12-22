/**
 * Created by stevie on 2016/12/8.
 */
export default {
    state: {
        history: [],
    },
    mutations: {
        add (state, payload) {
            state.history.splice(0, 0, payload);
        },
        remove(state, payload){
            state.history.splice(payload, 1)
        }
    },
    getters: {
        current(state){
            if(state.history.length > 0){
                return state.history[0];
            }
            return {}
        }
    }
}
