/**
 * Created by stevie on 2016/11/29.
 */
// import mutations from './mutations'
// import actions from './actions'
import Location from './modules/Location'
import createPersistedState from './plugins/createPersistedState'

export default {
    // actions,
    // mutations,
    modules: {
        Location,
    },
    strict: true, //不要在生产环境中开启严格模式
    plugins: [
        createPersistedState()
    ]
}
