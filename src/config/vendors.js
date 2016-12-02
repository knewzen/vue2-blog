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
        primary: 'cyan',
        accent: 'white',
    },
});

export default {}
