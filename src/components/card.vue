<template>
    <div class="card">
        <div class="card-img">
            <img src="../assets/card.jpeg" alt="artical title">
        </div>
        <div class="card-content">
            <h2 class="card-title">
                artical title
            </h2>
            <p class="card-summary">
                summary here summary here summary here summary here
            </p>
            <router-link class="read-more" to="/blog/card">
            continue reading
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
.card{
    width: 33%;
    box-sizing: border-box;
    padding: 30px 10px 0;
    
}
.card-img img{
    width: 100%;
    border-radius: 5px;
}
.card-title{
    color: #990099;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 7px;
}
.card-summary{
    margin-top: 0;
    font-weight: 300;
    color: #333;
}
.read-more{
    color: #333;
    font-size: 14px;
    font-weight: 400;
    font-style: italic;
}
@media(max-width: 900px){
    .card{
    width: 50%;
}
}
@media(max-width: 600px){
    .card{
    width: 100%;
}
}
</style>