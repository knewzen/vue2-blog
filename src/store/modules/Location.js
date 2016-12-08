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

            if (typeof payload == 'object') {
                const is_same = state.current && state.current.address.formattedAddress != payload.address.formattedAddress;
                if(is_same || !state.current){
                    state.current = payload;
                    state.history.push(payload);
                }
            }
        },
    }
}
