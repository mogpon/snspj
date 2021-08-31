<template>
  <div class="head">
    <div class="left">
      <img src="../実践モダン開発/img/logo.png">
    </div>
    <div class="right">
      <NuxtLink to="/">新規登録</NuxtLink>
      <NuxtLink to="/login">ログイン</NuxtLink>
    </div>
  </div>
</template>

<style>
  .head{
    height:80px;
    width:100vw;
    display: flex;
    justify-content:space-between;
    background-color: rgb(0, 4, 22);
    line-height: 80px;
  }
  .left{
    width:120px;
    padding:13px;
  
  }
  img{
    width:100%;
  }
  .right a{
    text-decoration: none;
    color:white;
    padding-right:25px;
  }
</style>