<template>
    <div>
        <router-link to="/" class="back">back</router-link>
        <app-header>
        <h1>
            What Bout?
        </h1>
    </app-header>
    <div class="blog-contet">
        <div class="blog-img">
        <img src="../img/card.jpeg" alt="artical title">    
        </div>

        <h2 class="card-title">
            artical title
        </h2>
        <p class="card-summary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur corporis nulla nesciunt laborum, omnis sed excepturi ducimus atque in voluptates molestiae veritatis. Molestias totam dignissimos, alias perspiciatis delectus dolorem hic.
        </p>
    </div>
    </div>
</template>

<script>
  import AppHeader from "../app-header";
    export default {
        components:{
            AppHeader
        }
    }
</script>

<style scoped>
.blog-contet{
    max-width: 1024px;
    margin: auto;
    text-align: center;
}
.blog-img{
    text-align: center;
}
.blog-img img{
    max-width: 100%;
    max-height: 450px;
}
.back{
    position: absolute;
    padding: 8px 17px;
    text-decoration: none;
    background-color: #ffffff40;
    border-radius: 18px;
    color: #fff;
    top: 6px;
    left: 6px;
}
</style>