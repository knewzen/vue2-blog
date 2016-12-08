/**
 * Created by stevie on 2016/12/8.
 */
export default {
    state: {
        current: null,
        history: [],
    },
    mutations: {
        add (state, payload) {
            state.current = payload ? payload : null;
            if (payload) {
                state.history.push(payload);
            }
        },
    }
}
