<template>
  <div>
    <a-spin tip="Loading...">
      <div class="spin-content">
        <!-- 这里可以额外添加加载提示 -->
      </div>
    </a-spin>
  </div>
</template>

<script>
export default {
  methods:{
    redirectTo(){
      setTimeout(() => {
        this.$router.push({name:'Login'})
      }, 3000);
    }
  },
  mounted(){
    this.redirectTo()
  }
};
</script>

<style lang="scss" scoped></style>
