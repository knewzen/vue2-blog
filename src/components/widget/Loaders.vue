<template>
    <div class="loader row flex-items-xs-center flex-items-xs-middle">
        <div :class="type">
            <div v-for="i in types[type]" :style="styles"></div>
        </div>
    </div>
</template>

<script lang="babel">
    export default{
        props:{
            type: {
                type: String,
                default: 'line-scale'
            },
            size: {
                type: String,
                default: 'md'
            },
            active: {
                type: Boolean,
                default: true
            },
            color: {
                type: String,
                default: 'gray'
            }
        },
        data(){
            return {
                types: {
                    "ball-pulse"                  : 3,
                    "ball-grid-pulse"             : 9,
                    "ball-clip-rotate"            : 1,
                    "ball-clip-rotate-pulse"      : 2,
                    "square-spin"                 : 1,
                    "ball-clip-rotate-multiple"   : 2,
                    "ball-pulse-rise"             : 5,
                    "ball-rotate"                 : 1,
                    "cube-transition"             : 2,
                    "ball-zig-zag"                : 2,
                    "ball-zig-zag-deflect"        : 2,
                    "ball-triangle-path"          : 3,
                    "ball-scale"                  : 1,
                    "line-scale"                  : 5,
                    "line-scale-party"            : 4,
                    "ball-scale-multiple"         : 3,
                    "ball-pulse-sync"             : 3,
                    "ball-beat"                   : 3,
                    "line-scale-pulse-out"        : 5,
                    "line-scale-pulse-out-rapid"  : 5,
                    "ball-scale-ripple"           : 1,
                    "ball-scale-ripple-multiple"  : 3,
                    "ball-spin-fade-loader"       : 8,
                    "line-spin-fade-loader"       : 8,
                    "triangle-skew-spin"          : 1,
                    "pacman"                      : 5,
                    "ball-grid-beat"              : 9,
                    "semi-circle-spin"            : 1
                },
                styles: {
                    background: this.color ? this.color : ''
                },
            }
        },
        methods:{
        },
        components: {}
    }
</script>

<style lang="scss" scoped>
    @import "~loaders.css/loaders.min.css";
    .loader{
        position: absolute;
        left: 0;
        top: 0;
        min-width: 100%;
        min-height: 100%;
        z-index: 2147483647;
        background: rgba(255,255,255, .8);
    }
</style>
