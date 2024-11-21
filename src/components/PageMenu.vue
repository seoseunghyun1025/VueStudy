<template>
  <nav>
    <div class="centered">
      <img class="image" :src="require('@/assets/travel.jpg')" alt="Travel Image">
    </div>
  </nav>
</template>

<style>
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh; /* 또는 이미지를 가운데로 정렬하고자 하는 요소의 높이 */
  margin: 0 auto
}
.image {
  width: 400px; /* 원하는 가로 크기로 조정 */
  height: auto; /* 세로 크기는 가로에 맞게 자동 조정 */
}
</style>
