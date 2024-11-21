<template>
  <div class="container">
    <PageHeader/>
    <button class="sort-button" @click="sortAscending">가격 오름차순 정렬</button>
    <button class="sort-button" @click="sortDescending">가격 내림차순 정렬</button>
    <button class="reset-button" @click="reset">전체 표시</button>

    <div class="comparison" v-if="showComparison">
      <h3>비교 결과:</h3>
      <p>첫 번째 선택: {{ selected1 }}</p>
      <p>두 번째 선택: {{ selected2 }}</p>
      <p>가격 비교 결과: {{ comparePrices(selected1, selected2) }}</p>
      <button class="reset-button" v-on:click="touch">초기화</button>
    </div>
    <h3>iPhone 랭킹</h3>
    <table class="ranking-table">
      <thead>
        <tr>
          <th>모델명</th>
          <th>CPU</th>
          <th>RAM</th>
          <th>내장 메모리</th>
          <th>가격</th>
          <th>선택</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="phone in iPhoneRanking" :key="phone.name">
          <td>{{ phone.name }}</td>
          <td>{{ phone.specs.cpu }}</td>
          <td>{{ phone.specs.ram }}</td>
          <td>{{ phone.specs.memory }}</td>
          <td>{{ phone.specs.price }}</td>
          <td>
            <button class="select-button" @click="selectPhone(phone.name)">선택</button>
          </td>
        </tr>
      </tbody>
    </table>

    <h3>Galaxy 랭킹</h3>
    <table class="ranking-table">
      <thead>
        <tr>
          <th>모델명</th>
          <th>CPU</th>
          <th>RAM</th>
          <th>내장 메모리</th>
          <th>가격</th>
          <th>선택</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="phone in galaxyRanking" :key="phone.name">
          <td>{{ phone.name }}</td>
          <td>{{ phone.specs.cpu }}</td>
          <td>{{ phone.specs.ram }}</td>
          <td>{{ phone.specs.memory }}</td>
          <td>{{ phone.specs.price }}</td>
          <td>
            <button class="select-button" @click="selectPhone(phone.name)">선택</button>
          </td>
        </tr>
      </tbody>
    </table>
    <PageFooter/>
  </div>
</template>
<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.sort-button {
  padding: 5px 10px;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
}

.reset-button {
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
}

.comparison {
  margin-top: 20px;
  background-color: #f2f2f2;
  padding: 10px;
}

.ranking-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.ranking-table th,
.ranking-table td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.ranking-table th {
  background-color: #f2f2f2;
}

.select-button {
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
}

.custom-button {
  display: inline-block;
  padding: 5px 10px;
  background-color: #eee;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  font-size: 14px;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.custom-button:hover {
  background-color: #ccc;
}
</style>

<script>

import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'

export default {
  components: {
    PageHeader,
    PageFooter
  },
  data () {
    return {
      iPhoneRanking: [
        {
          name: '14pro',
          specs: {
            cpu: 'A16 Bionic',
            ram: '6GB',
            memory: '128GB',
            price: '$999'
          }
        }, {
          name: '14',
          specs: {
            cpu: 'A16 Bionic',
            ram: '4GB',
            memory: '64GB',
            price: '$799'
          }
        }, {
          name: '14promax',
          specs: {
            cpu: 'A16 Bionic',
            ram: '6GB',
            memory: '128GB',
            price: '$1,099'
          }
        }, {
          name: '13mini',
          specs: {
            cpu: 'A15 Bionic',
            ram: '4GB',
            memory: '64GB',
            price: '$699'
          }
        }, {
          name: 'se3',
          specs: {
            cpu: 'A15 Bionic',
            ram: '4GB',
            memory: '64GB',
            price: '$399'
          }
        }, {
          name: '14plus',
          specs: {
            cpu: 'A16 Bionic',
            ram: '4GB',
            memory: '64GB',
            price: '$899'
          }
        }, {
          name: '13pro',
          specs: {
            cpu: 'A15 Bionic',
            ram: '6GB',
            memory: '128GB',
            price: '$999'
          }
        }, {
          name: '13',
          specs: {
            cpu: 'A15 Bionic',
            ram: '4GB',
            memory: '64GB',
            price: '$799'
          }
        }, {
          name: '12mini',
          specs: {
            cpu: 'A15 Bionic',
            ram: '4GB',
            memory: '64GB',
            price: '$699'
          }
        }, {
          name: '11pro',
          specs: {
            cpu: 'A13 Bionic',
            ram: '4GB',
            memory: '64GB',
            price: '$999'
          }
        }
      ],
      galaxyRanking: [
        {
          name: 'a34',
          specs: {
            cpu: '2.6 Octa-Core',
            ram: '6GB',
            memory: '128GB',
            price: '$379'
          }
        }, {
          name: 's23',
          specs: {
            cpu: '스냅드래곤8 Gen2',
            ram: '8GB',
            memory: '256GB',
            price: '$699'
          }
        }, {
          name: 's23ultra',
          specs: {
            cpu: '스냅드래곤8 Gen2',
            ram: '12GB',
            memory: '256GB',
            price: '$1,100'
          }
        }, {
          name: 's23+',
          specs: {
            cpu: '스냅드래곤8 Gen2',
            ram: '8GB',
            memory: '256GB',
            price: '$917'
          }
        }, {
          name: 'a24',
          specs: {
            cpu: 'MediaTekHelioG99',
            ram: '6GB',
            memory: '128GB',
            price: '$212'
          }
        }, {
          name: 'a54',
          specs: {
            cpu: 'Exynos 1380',
            ram: '6GB',
            memory: '128GB',
            price: '$356'
          }
        }, {
          name: 'quantum4',
          specs: {
            cpu: 'Exynos 1280',
            ram: '6GB',
            memory: '128GB',
            price: '$427'
          }
        }, {
          name: 'a14',
          specs: {
            cpu: 'MediaTekDimensity700',
            ram: '4GB',
            memory: '64GB',
            price: '$179'
          }
        }
      ],
      selected1: '',
      selected2: '',
      showComparison: false
    }
  },
  methods: {
    sortAscending () {
      this.iPhoneRanking.sort((a, b) => a.specs.price.localeCompare(b.specs.price))
      this.galaxyRanking.sort((a, b) => a.specs.price.localeCompare(b.specs.price))
    },
    sortDescending () {
      this.iPhoneRanking.sort((a, b) => b.specs.price.localeCompare(a.specs.price))
      this.galaxyRanking.sort((a, b) => b.specs.price.localeCompare(a.specs.price))
    },
    touch () {
      this.showComparison = false
    },
    reset () {
      this.showComparison = false
      this.selected1 = ''
      this.selected2 = ''
      // 모든 랭킹 데이터를 초기화하여 전체 표시
    },
    selectPhone (phoneName) {
      if (!this.selected1) {
        this.selected1 = phoneName
      } else if (!this.selected2) {
        this.selected2 = phoneName
        this.showComparison = true
      } else {
        this.selected1 = phoneName
        this.selected2 = ''
        this.showComparison = false
      }
    },
    comparePrices (phone1, phone2) {
      const phone1Price = this.getPrice(phone1)
      const phone2Price = this.getPrice(phone2)

      if (phone1Price < phone2Price) {
        return `${phone1} 가격이 더 저렴합니다.`
      } else if (phone1Price > phone2Price) {
        return `${phone2} 가격이 더 저렴합니다.`
      } else {
        return '가격이 동일합니다.'
      }
    },
    getPrice (phoneName) {
      const iPhone = this.iPhoneRanking.find((phone) => phone.name === phoneName)
      const galaxy = this.galaxyRanking.find((phone) => phone.name === phoneName)

      if (iPhone) {
        return iPhone.specs.price
      } else if (galaxy) {
        return galaxy.specs.price
      }

      return 0
    }
  }
}
</script>
