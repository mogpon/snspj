<template>
  <div id="app">
    <Head></Head>
    <div class="register">
      <h2>新規登録</h2>
      <input type="text" name="name" placeholder="ユーザーネーム" v-model="name" required><br>
      <input type="text" name="email" placeholder="メールアドレス" v-model="email" required><br>
      <input type="text" name="pass" placeholder="パスワード" v-model="pass" required><br>
      <button @click="register">新規登録</button>
    </div>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  data(){
    return{
      name:null,
      email:null,
      pass:null,
    }
  },
  methods: {
    register() {
      if (!this.name || !this.email || !this.pass) {
        alert('入力されていない項目があります')
        return
      }
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.pass)
        .then((data) => {
          data.user.sendEmailVerification().then(() => {
            this.$router.replace('/login')
          })
        })
        .catch((error) => {
          switch (error.code) {
            case 'auth/invalid-email':
              alert('メールアドレスの形式が違います。')
              break
            case 'auth/email-already-in-use':
              alert('このメールアドレスはすでに使われています。')
              break
            case 'auth/weak-password':
              alert('パスワードは6文字以上で入力してください。')
              break
            default:
              alert('エラーが起きました。しばらくしてから再度お試しください。')
              break
          }
        })
    },
  },
}
</script>

<style>
.register{
  width:30%;
  padding:20px 10px;
  background:white;
  text-align: center;
  margin:80px auto;
  border-radius: 5px;
}
.register input{
  margin-top:12px;
  width:80%;
  height: 30px;
  font-size:14px;
}
.register button{
  margin-top:10px;
  color:white;
  font-size:12px;
  background:rgb(110, 55, 155);
  padding:6px 18px;
  border-radius:30px;
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