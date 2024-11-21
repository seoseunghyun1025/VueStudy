<template>
  <div class="kakaologin">
    <PageHeader/>
    <div class="login-container">

    <div class="login-box">
    <div class="form-group">
      <label for="id">아이디</label>
      <input id="id" type="text" method="post" class="input-field" placeholder="아이디를 입력하세요">
    </div>
    <div class="form-group">
      <label for="password">비밀번호</label>
      <input id="password" type="password" method="post" class="input-field" placeholder="비밀번호를 입력하세요">
    </div>
    <button type="submit" class="login-button">로그인</button>
    <a id="custom-login-btn" @click="kakaoLogin">
      <img src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg" width="222">
    </a>
    <router-link to="/signUp">회원가입</router-link>
  </div>
</div>
    <PageFooter/>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'

export default {

  methods: {
    kakaoLogin () {
      window.Kakao.Auth.login({
        scope: 'profile, account_email',
        success: this.getKakaoAccount
      })
    },
    getKakaoAccount () {
      window.Kakao.API.request({
        url: '/v2/user/me',
        success: res => {
          const kakaoAccount = res.kakao_account
          const nickname = kakaoAccount.profile.nickname
          const email = kakaoAccount.email
          console.log('nickname', nickname)
          console.log('email', email)

          alert('로그인 성공!')
        },
        fail: error => {
          console.log(error)
        }
      })
    }
  },
  components: {
    PageHeader,
    PageFooter
  }
}
</script>
<style>
.kakaologin {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
.login-box {
  width: 300px;
  padding: 20px;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  font-weight: bold;
}

.input-field {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.login-button {
  width: 50%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

#custom-login-btn {
  display: block;
  margin-top: 10px;
}

.kakaologin {
  text-align: center;
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  font-weight: bold;
}

.input-field {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 200px;
  color: #888; /* 회색 글씨 색상 */
}

.login-button {
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

#custom-login-btn {
  display: block;
  margin-top: 10px;
}
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-box {
  width: 300px;
  padding: 20px;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
