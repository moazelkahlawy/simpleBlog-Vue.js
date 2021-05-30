<template>
    <div>
        <header>
            <slot></slot>
        </header>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
header{
    height: 250px;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    background:linear-gradient(135deg, rgba(51,0,51,0.8) 0%,rgba(51,51,102,0.8) 100%,rgba(125,185,232,0.8) 100%) , url(../assets/photo-header.jpeg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
h1{
    color: #fff;
    font-size: 59px;
    font-weight: 300;
}
</style>