import Vue from 'vue'

/* ============
 * Vue.js Material
 * ============
 *
 * Material Design for Vue.js
 *
 * https://github.com/marcosmoura/vue-material
 */
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial);

Vue.material.theme.registerAll({
    default: {
        primary: 'blue',
        accent: 'pink',
        warn: 'deep-orange',
        background: 'white'
    },
});

/* ============
 * leancloud
 * ============
 *
 * https://leancloud.cn/docs/leanstorage-started-js.html
 */
// import AV from 'leancloud-storage'
// const appId = 'N72dGJaXBCfiQAqIWTq5uHid-gzGzoHsz';
// const appKey = '2Q9xOtIBMTQ39hwgbBjKptwy';
// AV.init({ appId, appKey });
//
// window.AV = AV;

export default {}
