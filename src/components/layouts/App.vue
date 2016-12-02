<template>
    <router-view v-if="is_loaded"></router-view>
</template>

<script lang="babel">
//    import AMap from 'AMap'

    export default {
        data(){
            return {
                is_loaded: true
            }
        },
        watch:{
            'is_loaded'(val){
//                console.log(val);
            }
        },
        created(){
//            this.location();
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

                    AMap.event.addListener(geolocation, 'complete', function (e) {
                        console.log(e);
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
                                    self.is_loaded = true;
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

<style lang="scss">
    @import "../../styles/main.scss";
</style>
