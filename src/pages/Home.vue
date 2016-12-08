<template>
    <md-list class="md-double-line md-dense">
        <md-list-item v-for="i in $store.state.Location.history">
            <md-icon class="md-primary">phone</md-icon>

            <div class="md-list-text-container">
                <span>{{ i.address.formattedAddress }}</span>
                <span>Mobile</span>
            </div>
        </md-list-item>
    </md-list>
</template>

<script lang="babel">
    export default {
        components: {
        },
        created(){
        },

    }
</script>

<style lang="scss" scoped>
</style>
