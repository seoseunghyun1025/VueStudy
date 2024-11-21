<template>
  <div class="container">
    <PageHeader/>
    <img :src="require(`@/assets/travel2.jpg`)" class="image">
    <h2>소개</h2>
    안녕하세요 20201531서승현입니다!
    컴퓨터소프트웨어공학과 YA반입니다!
    <h2>전공을 통한 목표와 꿈</h2>
    전공 수업을 듣고 기술을 쌓은 다음 대기업에 취업할 것입니다.
    <h2>홈페이지에 담은 기술과 디자인 설명</h2>
    <ol>
        <li>컴포넌트에 3개를 만들었습니다 pageheader에는 이미지와 전자기기순위, 가격비교, 자기소개, login을 만들었습니다. 스크롤을 내리면 fadeout/in을 하는 애니메이션을 넣었습니다.
            pagefooter에는 학번이름 이메일, 핸드폰 번호를 넣었습니다. pagemenu에는 HomeView에 넣을 이미지를 넣었습니다.
        </li>
        <li>메인 페이지인 전자기기 순위페이지는 전체순위, 갤럭시 순위와 아이폰 순위를 통해 그 해의
            순위를 보여주는 탭입니다. 버튼은 라디오를 사용하였습니다.
        </li>
        <li>가격 비교페이지에는 아이폰과 갤럭시의 리스트를 볼 수 있는데 두 개를 선택하면 비교할 수 있습니다. 비교 결과가 나오는데 저렴한것을
            알려주고 초기화 버튼을 누르면 숨기기 됩니다.
        </li>
        <li>
            자기소개는 저에 대해 소개하고 홈페이지에 대한 설명입니다.
        </li>
        <li>
            login페이지는 아이디, 비밀번호를 적을 수 있고 카카오 계정으로 로그인을 누르면 api호출이 됩니다.
            회원 가입을 누르면 회원가입 페이지로 넘어가 회원가입을 할 수 있습니다.
            이메일에 @를 안 넣고 가입하기를 누르면 오류가 뜹니다.
        </li>
    </ol>
    <PageFooter/>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import PageFooter from '@/components/PageFooter'
export default {
  name: 'IntroducePage',
  components: {
    PageHeader,
    PageFooter
  }
}
</script>

<style>
.image {
  width: 400px; /* 원하는 가로 크기로 조정 */
  height: auto; /* 세로 크기는 가로에 맞게 자동 조정 */
}
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

p {
  line-height: 1.5;
  margin-bottom: 20px;
}

ol {
  margin-bottom: 20px;
}

li {
  margin-bottom: 10px;
}

.PageFooter {
  margin-top: 50px;
  text-align: center;
  font-size: 14px;
  color: #888;
}

.PageFooter a {
  color: #888;
  text-decoration: none;
}

.PageFooter a:hover {
  color: #333;
}

.PageHeader {
  position: relative;
}

.PageHeader::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("@/assets/travel2.jpg");
  background-size: cover;
  opacity: 0.5;
  z-index: -1;
}
</style>
