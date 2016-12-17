<template>
    <div>
        <md-list class="md-double-line md-dense">
            <transition-group name="list-complete">
                <md-list-item v-for="(i, index) in $store.state.Location.history" :key="i" class="list-complete-item" @click="openDialog('alert', i)">
                    <md-icon class="md-primary">my_location</md-icon>
                    <div class="md-list-text-container">
                        <span>{{ i.formattedAddress }}</span>
                        <span>精度范围{{ i.accuracy }}米；定位来源于{{ i.location_type }}；</span>
                    </div>
                    <md-button class="md-icon-button md-list-action" @click="remove(index)">
                        <md-icon class="md-primary">delete</md-icon>
                    </md-button>
                </md-list-item>
            </transition-group>
        </md-list>
        <md-dialog-alert
            :md-title="alert.formattedAddress"
            :md-content-html="JsonToHtml(alert)"
            ref="alert">
        </md-dialog-alert>
    </div>
</template>

<script lang="babel">
    import { mapMutations } from 'vuex'

    export default {
        components: {
        },
        data(){
            return {
                alert: {}
            }
        },
        computed:{
        },
        created(){
        },
        methods:{
            ...mapMutations([
                'remove'
            ]),
            openDialog(ref, item) {
                this.alert = item;
                this.$refs[ref].open();
            },
            JsonToHtml(json){
                return `<pre>${JSON.stringify(json, undefined, 2)}</pre>`
            }
        }
    }
</script>

<style lang="scss" scoped>
    .list-complete-item {
        transition: all 1s;
    }
    .list-complete-enter, .list-complete-leave-active {
        opacity: 0;
        transform: translateY(30px);
    }
    .list-complete-leave-active {
        width: 100%;
        position: absolute;
    }
</style>
