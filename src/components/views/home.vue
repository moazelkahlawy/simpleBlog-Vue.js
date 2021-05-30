<template>
<div>
    <app-header>
        <h1>
            Blog
        </h1>
    </app-header>
    <div class="container">
    <card></card>
    <card></card>
    <card></card>
    <card></card>
    <card></card>
    <card></card>
    <button type="button" class="load-more">Load More</button>
    </div>
</div>
</template>

<script>
import AppHeader from "../app-header";
import Card from "../card";

export default {
components: {
    AppHeader,
    Card,
},
};
</script>

<style scoped>
.container{
  padding: 0 30px;
  max-width: 1024px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
}
.load-more {
display: block;
color: #fff;
background-color: #990099;
border-radius: 5px;
border: none;
padding: 10px 25px;
font-size: 18px;
line-height: 1;
margin: 50px auto;
cursor: pointer;
}
</style>
