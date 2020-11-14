<template>
    <div class="color">{{message}}</div>
</template>

<script>
export default {
    name : 'App',
    data() {
        return {
            message: "你好啊陈海涛"
        }
    }
}
</script>

<style scoped>
.color{
    color: blue;
}
</style>