<template>
  <div class="container"><PageHeader/>
  <PageMenu/>
     <div class="radio-container">
    <input type="radio" id="2022" value="2022" v-model="selectedRank">
    <label for="2022">2022 폰 순위</label>

    <input type="radio" id="galaxy" value="galaxy" v-model="selectedRank">
    <label for="galaxy">갤럭시 순위</label>

    <input type="radio" id="iphone" value="iphone" v-model="selectedRank">
    <label for="iphone">아이폰 순위</label>
    </div>
    <div v-if="selectedRank === '2022'">
      <div v-for="(phone, index) in phoneRankings2022" :key="index">
        <img :src="require(`@/assets/${phone.name}.jpg`)" :alt="phone.name">
        <table>
          <tr>
            <th>Ranking</th>
            <th>Name</th>
            <th>CPU</th>
            <th>RAM</th>
            <th>Memory</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>{{index + 1}}</td>
            <td>{{phone.name}}</td>
            <td>{{ phone.specs.cpu }}</td>
            <td>{{ phone.specs.ram }}</td>
            <td>{{ phone.specs.memory }}</td>
            <td>{{ phone.specs.price }}</td>
          </tr>
        </table>
      </div>
    </div>
    <div v-if="selectedRank === 'galaxy'">
      <div v-for="(phone, index) in galaxyRanking" :key="index">
        <img :src="require(`@/assets/${phone.name}.jpg`)" :alt="phone.name">
        <table>
          <tr>
            <th>Ranking</th>
            <th>Name</th>
            <th>CPU</th>
            <th>RAM</th>
            <th>Memory</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>{{index + 1}}</td>
            <td>{{phone.name}}</td>
            <td>{{ phone.specs.cpu }}</td>
            <td>{{ phone.specs.ram }}</td>
            <td>{{ phone.specs.memory }}</td>
            <td>{{ phone.specs.price }}</td>
          </tr>
        </table>
      </div>
    </div>
    <div v-if="selectedRank === 'iphone'">
      <div v-for="(phone, index) in iphoneRanking" :key="index">
        <img :src="require(`@/assets/${phone.name}.jpg`)" :alt="phone.name">
        <table>
          <tr>
            <th>Ranking</th>
            <th>Name</th>
            <th>CPU</th>
            <th>RAM</th>
            <th>Memory</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>{{index + 1}}</td>
            <td>{{phone.name}}</td>
            <td>{{ phone.specs.cpu }}</td>
            <td>{{ phone.specs.ram }}</td>
            <td>{{ phone.specs.memory }}</td>
            <td>{{ phone.specs.price }}</td>
          </tr>
        </table>
      </div>
    </div>
    <PageFooter/>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'
import PageMenu from '@/components/PageMenu.vue'

export default {
  components: {
    PageHeader,
    PageFooter,
    PageMenu
  },
  data () {
    return {
      selectedRank: null,
      iphoneRanking: [
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
      phoneRankings2022: [
        {
          name: 'iphone13',
          specs: {
            cpu: 'A15 Bionic',
            ram: '4GB',
            memory: '64GB',
            price: '$999'
          }
        },
        {
          name: 'iphone13promax',
          specs: {
            cpu: 'A15 Bionic',
            ram: '6GB',
            memory: '128GB',
            price: '$1,099'
          }
        },
        {
          name: 'iphone14promax',
          specs: {
            cpu: 'A16 Bionic',
            ram: '8GB',
            memory: '256GB',
            price: '$1,299'
          }
        },
        {
          name: 'galaxya13',
          specs: {
            cpu: 'Exynos 850',
            ram: '4GB',
            memory: '128GB',
            price: '$299'
          }
        },
        {
          name: 'iphone13pro',
          specs: {
            cpu: 'A15 Bionic',
            ram: '6GB',
            memory: '256GB',
            price: '$1,099'
          }
        },
        {
          name: 'iphone12',
          specs: {
            cpu: 'A14 Bionic',
            ram: '4GB',
            memory: '64GB',
            price: '$799'
          }
        },
        {
          name: 'iphone14',
          specs: {
            cpu: 'A16 Bionic',
            ram: '6GB',
            memory: '128GB',
            price: '$999'
          }
        }, {
          name: 'iphone14pro',
          specs: {
            cpu: 'A16 Bionic',
            ram: '8GB',
            memory: '256GB',
            price: '$1,199'
          }
        },
        {
          name: 'iphonese2022',
          specs: {
            cpu: 'A15 Bionic',
            ram: '4GB',
            memory: '64GB',
            price: '$499'
          }
        },
        {
          name: 'galaxya03',
          specs: {
            cpu: 'Snapdragon 450',
            ram: '3GB',
            memory: '32GB',
            price: '$149'
          }
        }
      ]
    }
  }
}
</script>
<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
.phone-item {
  margin-bottom: 20px;
}

table {
  width: 100%;
  margin-top: 10px;
}

table th {
  background-color: #f2f2f2;
  padding: 10px;
  font-weight: bold;
  text-align: center;
}

table td {
  padding: 10px;
  text-align: center;
}
.radio-container {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.sort-button,
.reset-button,
.select-button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

.sort-button:hover,
.reset-button:hover,
.select-button:hover {
  opacity: 0.8;
}

.radio-container input[type="radio"] {
  display: none;
}

.radio-container label {
  display: inline-block;
  padding: 5px 10px;
  background-color: #eee;
  border-radius: 4px;
  cursor: pointer;
}

.radio-container input[type="radio"]:checked + label {
  background-color: #ccc;
}
</style>
