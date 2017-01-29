<template>
    <md-layout md-align="center">
        <md-card>
            <md-card-content>
                <md-input-container>
                    <label>邮箱</label>
                    <md-input type="email" required />
                </md-input-container>
                <md-input-container md-has-password>
                    <label>密码</label>
                    <md-input type="password" required/>
                </md-input-container>
            </md-card-content>
            <md-card-actions>
                <md-button>登陆</md-button>
            </md-card-actions>
        </md-card>
    </md-layout>
</template>

<script lang="babel">
    export default{
        components:{},
        data(){
            return{
            }
        },

    }
</script>

<style lang="scss" scoped>
    .md-layout{
        padding-top: 20vh;
    }

    .md-card{
        width: 320px;
    }
</style>
