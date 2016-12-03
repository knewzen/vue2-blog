<template>
    <div class="row">
        <!--<demo></demo>-->
        <div class="col-xs-offset-1 col-xs-10">
            <md-card>
                <md-card-content>
                    <md-input-container>
                        <label>用户名</label>
                        <md-input required maxlength="20"></md-input>
                    </md-input-container>
                    <md-input-container md-has-password>
                        <label>密码</label>
                        <md-input type="password" required maxlength="20"></md-input>
                    </md-input-container>
                </md-card-content>
                <md-card-actions>
                    <md-button>登陆</md-button>
                </md-card-actions>
            </md-card>
        </div>
    </div>
</template>

<script lang="babel">
//    import Demo from './components/Demo.vue'


    export default {
        components: {
//            Demo,
        },
        created(){

        },

    }
</script>

<style lang="scss" scoped>
    a{
        display: flex;
    }
</style>
