<template>
<div class="main">
  <div class="main_left">
      <div class="left">
        <img src="../実践モダン開発/img/logo.png">
      </div>
      <div class="menu">
        <a @click="home" class="home">ホーム</a><br>
        <a @click="logout" class="logout">ログアウト</a>
        <div class="share">
        <p>シェア</p>
        <textarea cols="40" rows="7" v-model="newText"></textarea><br>
        <button @click="insertText">シェアする</button>
        </div>
      </div>
  </div>
  <div class="main_right">
    <div class="right">
      <h2>コメント</h2>
      <ul v-for="item in textLists" :key="item.id">
        <div class="title">
          <p>test</p>
          <img src="../実践モダン開発/img/heart.png" alt="" @click="count++">
          <span>{{ count }}</span>
          <img src="../実践モダン開発/img/cross.png" alt="" @click="deleteText(item.id)">
        </div>
        <li>{{ item.text }}</li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  data(){
    return{
      newText:"",
      textLists:[],
      count:0,
    }
  },
  methods: {
    async getText(){
      const resData = await this.$axios.get(
        "http://127.0.0.1:8000/api/text"
      );
      this.textLists = resData.data.data;
    },
    async insertText(){
      const sendData = {
        text:this.newText,
      };
      await this.$axios.post("http://127.0.0.1:8000/api/text/",sendData);
      this.getText();
    },
    async deleteText(id){
      await this.$axios.delete("http://127.0.0.1:8000/api/text/" + id);
      this.getText();
    },
    logout() {
        firebase
          .auth()
          .signOut()
          .then(() => {
            alert('ログアウトが完了しました')
            this.$router.replace('/login')
          })
    },
    move_coment(){
      this.$router.replace('/login')
    },
    home(){
      this.$router.replace('/home')
    }
  },
  created(){
    this.getText();
  },
};
</script>
<style>
.title{
  display: flex;
}
.right img{
  width:15px;
  margin-left :10px;
  margin-right :5px;
}
.coment{
  padding-left :30px;
}
.right li{
  margin-top:8px;
}

.main{
  color:white;
  display:flex;
  justify-content: space-between;
}
.main_left{
  width:25%;
}
.menu{
  margin-left:15px;
}
.home, .logout, .share{
  margin:10px;
}
.home::before{
  content:"";
  background:url(../実践モダン開発/img/home.png);
  background-size: cover;
  vertical-align: middle;
  width: 30px;
  height: 30px;
  display: inline-block;
  margin-right:10px;
}
.logout , .home{
  text-decoration: none;
  color:white;
  cursor: pointer;
}
.logout::before{
  content:"";
  background:url(../実践モダン開発/img/logout.png);
  background-size: cover;
  vertical-align: middle;
  width: 30px;
  height: 30px;
  display: inline-block;
  margin-right:10px;
}
.menu textarea{
  background: rgb(0, 4, 22);
  border-radius: 5px;
  color:white;
  width:100%;
}
.menu button{
  margin-top:8px;
  color:white;
  font-size:12px;
  background:rgb(110, 55, 155);
  padding:6px 18px;
  border-radius:30px;
}
.main_right{
  width:70%;
}
.right h2{
  height: 30px;
  line-height: 30px;
  border:1px solid white;
  padding:10px;
}
.right ul{
  height: 40px;
  align-items: center;
  /* line-height: 40px; */
  border:1px solid white;
  padding:10px;
}
.right li{
  list-style: none;
  font-size:12px;
}
.right p{
  margin:0;
}


html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure,
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
    margin:0;
    padding:0;
    border:0;
    outline:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}

body {
    line-height:1;
    background: rgb(0, 4, 22);
}

article,aside,details,figcaption,figure,
footer,header,hgroup,menu,nav,section {
    display:block;
}

nav ul {
    list-style:none;
}

blockquote, q {
    quotes:none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    content:'';
    content:none;
}

a {
    margin:0;
    padding:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}

/* change colours to suit your needs */
ins {
    background-color:#ff9;
    color:#000;
    text-decoration:none;
}

/* change colours to suit your needs */
mark {
    background-color:#ff9;
    color:#000;
    font-style:italic;
    font-weight:bold;
}

del {
    text-decoration: line-through;
}

abbr[title], dfn[title] {
    border-bottom:1px dotted;
    cursor:help;
}

table {
    border-collapse:collapse;
    border-spacing:0;
}

/* change border colour to suit your needs */
hr {
    display:block;
    height:1px;
    border:0;  
    border-top:1px solid #cccccc;
    margin:1em 0;
    padding:0;
}

input, select {
    vertical-align:middle;
}
</style>