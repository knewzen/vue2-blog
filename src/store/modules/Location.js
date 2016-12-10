/**
 * Created by stevie on 2016/12/8.
 */
export default {
    state: {
        history: [],
    },
    mutations: {
        add (state, payload) {
            state.history.push(payload);
        },
    },
    getters: {
        current(state){
            if(state.history.length > 0){
                return state.history[0];
            }
            return null
        }
    }
}
