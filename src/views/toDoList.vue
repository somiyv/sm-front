<template>
  <div class="todolistCon">
    <h1>ToDoList</h1>
    <div class="inpBox">
      <v-text-field
        solo
        :append-icon="'mdi-send'"
        v-model="item"
        @click:append="addList()"
      ></v-text-field>
    </div>
    <item-list :items="items" :delete-item="deleteItem"></item-list>
  </div>
</template>

<script>
import itemList from './list'
export default {
  name: 'ToDoList',
  data () {
    return {
      item: '',
      items: [
        {
          text: 'Wifi'
        },
        {
          text: 'Bluetooth'
        },
        {
          text: 'Data Usage'
        }
      ]
    }
  },
  components: {
    itemList
  },
  watch: {
    items (val) {
      console.log('부모 컴포넌트 변경감지 >>', val)
    }
  },
  beforeCreate () {
    // **
    // 컴포넌트가 생성되기전,서버 렌더링도 지원
    // - data, events 접근 불가
    // ** //
  },
  created () {
    // **
    // 컴포넌트가 생성되기전,서버 렌더링도 지원
    // - data, events 접근 가능
    // - 템플릿이 렌더링되지 않음
    // ** //
  },
  beforeMount () {
    // **
    // 초기 렌더링 직전임. ( 초기에 돔을 변경할때 활용 )
    // - 첫 랜더링 직전에 실행.
    // - 왠만하면 사용하지않는게 좋음.
    // ** //
  },
  mounted () {
    /**
     * 초기 렌더링 직전임. ( 초기에 돔을 변경할때 활용 )
     * - 컴포넌트, 템플릿, 렌더링된 돔에 접근가능
     * - 하위컴포넌트는 접근 안될수있음.
     * - 부모 -> 자식 -> 자식 완료 -> 부모 완료 순으로 실행
     * **/
  },
  methods: {
    addList () {
      this.items.push({text: this.item})
      this.item = ''
    },
    deleteItem (item) {
      console.log(item + '삭제')
      this.items.splice(this.items.indexOf(item), 1)
    }
  }
}
</script>

<style>
  .todolistCon {
    margin: 20px auto;
    text-align: center;
    color: #2c3e50;
    padding:30px;
    width: 500px;
    border:thin solid rgba(0,0,0,.12);
    border-radius: 2px;
  }

  .todolistCon h1 {
    padding-bottom:10px;
  }
</style>
