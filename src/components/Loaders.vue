<template>
    <div class="loader">
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
                default: 'ball-grid-pulse'
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
        background: #ed5565;
        box-sizing: border-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex: 0 1 auto;
        flex: 0 1 auto;
        -ms-flex-direction: column;
        flex-direction: column;
        -ms-flex-positive: 1;
        flex-grow: 1;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        -ms-flex-preferred-size: 25%;
        flex-basis: 25%;
        max-width: 25%;
        height: 200px;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
    }
</style>
