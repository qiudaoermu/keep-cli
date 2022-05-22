<template>
  <div class="right-content"></div>
</template>

<script>
export default {
  name: "a",
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {
    this.queryNewFund();
  },
  methods: {
    queryNewFund() {
      let that = this;
      let codeList = ["1", "2", "3"];
      this.getData(codeList,0);
    },
    getData(codeList,index) {
      if (i === codeList.length) {
        return;
      }
      new Promise(resolve => {
        axios.get(codeList[index]).then(result => {
          resolve(result);
        });
      }).then(res => {
        this.getData(codeList,index + 1);
      });
    }
  },
  methods: {}
};
</script>
<style lang='less' scoped>
</style>
