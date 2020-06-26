<template>
    <div class="listBox">
      <ul>
        <li v-for="(item, index) in items" :key="index">
          <a>
            {{ item.text }}
            <div class="close"><v-icon @click="deleteItem(item.text)">mdi-close</v-icon></div>
          </a>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'ToDoList',
  props: {
    items: {
      type: Array
    },
    deleteItem: {
      type: Function
    }
  },
  data () {
    return {
    }
  },
  methods: {
  },
  watch: {
    items (val) {
      console.log('변경감지 >>', val)
    }
    /**
     * 데이터 감지
     * **/
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
  beforeUpdate () {
    /**
     * 컴포넌트가 재 렌더링되고 패치되기 직전에 실행
     * **/
  },
  updated () {
    /**
     * 데이터가 변하여 재 렌더링이 일어난 후 실
     * **/
  },
  beforeDestroy () {
    /**
     * 인스턴스가 제거되기 직전에 실행
     * - 이벤트리스너 제거하기에 좋음
     * **/
  },
  destroyed () {
  /**
   * 인스턴스가 제거된 후 실행
   * **/
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
