<template>
  <header class="custom-header" :class="{ 'hidden': isHeaderHidden }">
    <div class="header-content">
      <div class="image-container">
        <img :src="require('@/assets/travel.jpg')" alt="여행 이미지" class="header-image">
      </div>
      <nav>
        <ul class="menu">
          <li>
            <router-link to="/" active-class="active">전자기기 순위</router-link>
          </li>
          <li>
            <router-link to="/about" active-class="active">가격 비교</router-link>
          </li>
          <li>
            <router-link to="/introduce" active-class="active">자기소개</router-link>
          </li>
          <li>
            <router-link to="/kakaologin" active-class="active">로그인</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style>
@keyframes fadeout {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.custom-header {
  background-color: #f2f2f2;
  padding: 10px;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  transition: top 0.3s;
}

.header-content {
  display: flex;
  align-items: center;
}

.image-container {
  float: left;
  margin-right: 10px;
}

.header-image {
  width: 40px;
}

nav {
  display: flex;
}

.menu {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.menu li {
  margin-left: 10px;
}

.menu li a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

.menu li a:hover,
.menu li a.active {
  color: #079007;
}

.hidden {
  top: -60px;
  animation: fadeout 0.3s;
}

</style>

<script>
export default {
  data () {
    return {
      isHeaderHidden: false,
      prevScrollPos: window.pageYOffset
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const currentScrollPos = window.pageYOffset
      this.isHeaderHidden = currentScrollPos > this.prevScrollPos && currentScrollPos > 60
      this.prevScrollPos = currentScrollPos
    }
  }
}
</script>
