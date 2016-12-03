<template>
    <div class="body" v-md-theme="md_theme">
        <transition leave-active-class="animated fadeOut">
            <loaders v-if="is_show_loading"></loaders>
        </transition>
        <template v-if="!is_show_loading">
            <div class="fixed-top">
                <md-toolbar class="md-dense">
                    <md-button class="md-icon-button">
                        <md-icon>menu</md-icon>
                    </md-button>
                    <div class="md-title col-xs">Vue Material</div>
                    <md-button class="md-icon-button">
                        <md-icon>favorite</md-icon>
                    </md-button>
                </md-toolbar>
            </div>
            <router-view></router-view>
            <div class="fixed-bottom">
                <md-bottom-bar>
                    <md-bottom-bar-item md-icon="history" md-active>Recents</md-bottom-bar-item>
                    <md-bottom-bar-item md-icon="favorite">Favorites</md-bottom-bar-item>
                    <md-bottom-bar-item md-icon="near_me">Nearby</md-bottom-bar-item>
                </md-bottom-bar>
            </div>
        </template>
    </div>
</template>

<script lang="babel">
    import Loaders from '../widget/Loaders.vue'

    export default {
        components:{
            Loaders
        },
        data(){
            return {
                md_theme: 'default',
                is_show_loading: true,
            }
        },
        watch:{
        },
        created(){
            this.location();
        },
        methods:{
            location(){
                let self = this;
                AMap.service(['AMap.Geolocation', 'AMap.Geocoder'], function () {
                    let geolocation = new AMap.Geolocation({
                        enableHighAccuracy: false,//是否使用高精度定位，默认:true
                        timeout: 10000,          //超过10秒后停止定位，默认：无穷大
                        buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                        zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                        buttonPosition: 'RB'
                    });
                    let geocoder = new AMap.Geocoder({
                        radius: 1000,
                        extensions: "base"
                    });
//                geolocation.getCurrentPosition();
                    geolocation.watchPosition();

                    let temp_position = null;
                    AMap.event.addListener(geolocation, 'complete', function (e) {
                        self.is_show_loading = false;
                        if(Object.is(temp_position, e.position)) return;
                        temp_position = e.position;
                        geocoder.getAddress(e.position, function (status, result) {
                            switch (status){
                                case 'error':
                                    console.log("服务请求出错啦！ ");
                                    break;
                                case 'no_data':
                                    console.log("无数据返回，请换个关键字试试～～");
                                    break;
                                default:
                                    console.log(result);
                                    break;
                            }
                        });
                    });
                    AMap.event.addListener(geolocation, 'error', function (err) {
                        console.log(err);
                    });
                });
            }
        }
    }
</script>

<style lang="scss" src="../../assets/scss/main.scss"></style>
