<template>
  <div class="signup-form">
    <PageHeader/>
    <h2>회원가입</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">이름</label>
        <input type="text" id="name" v-model="name" required>
      </div>
      <div class="form-group">
        <label for="email">이메일</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="password">비밀번호</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <div class="form-group">
        <button type="submit">가입하기</button>
      </div>
    </form>
    <PageFooter/>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import PageFooter from '@/components/PageFooter'

export default {
  name: 'SignUpPage',
  components: {
    PageHeader,
    PageFooter
  },
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    submitForm () {
      // 폼 제출 시 실행되는 로직을 추가할 수 있습니다.
      // 예를 들면 회원가입 API 호출 등의 로직을 수행할 수 있습니다.
      console.log('회원가입 폼이 제출되었습니다.')
      console.log('이름:', this.name)
      console.log('이메일:', this.email)
      console.log('비밀번호:', this.password)
    }
  }
}
</script>

<style scoped>
.signup-form {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
}
</style>

<style>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>
