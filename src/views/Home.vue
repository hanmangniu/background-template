<template>
  <div v-if="loading">
    <a-spin tip="Loading...">
      <div class="spin-content">
        <!-- 这里可以额外添加加载提示 -->
      </div>
    </a-spin>
  </div>
  <a-layout v-else id="components-layout">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :defaultOpenKeys="defaultOpenKeys" :defaultSelectedKeys="defaultSelectedKeys">
        <a-sub-menu key="/dashboard">
          <span slot="title"><a-icon type="dashboard" /><span>Dashboard</span></span>
          <a-menu-item key="/dashboard/analysis" @click="jumpLink('/dashboard/analysis')">
            分析页
          </a-menu-item>
          <a-menu-item key="/dashboard/monitor" @click="jumpLink('/dashboard/monitor')">
            监控页
          </a-menu-item>
          <a-menu-item key="/dashboard/workplace" @click="jumpLink('/dashboard/workplace')">
            工作台
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="() => (collapsed = !collapsed)" />
      </a-layout-header>
      <a-layout-content :style="{ margin: '12px 8px', padding: '12px', minHeight: '280px' }">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      loading: true,
      collapsed: false,
      defaultOpenKeys: ["/dashboard"],
      defaultSelectedKeys: ["/dashboard/analysis"],
    };
  },
  methods: {
    redirectTo() {
      const isLogin = true;
      setTimeout(() => {
        // 请求之后 判断是否登陆
        if (isLogin) {
          this.loading = false;
        } else {
          this.$router.push({ name: "Login" });
        }
      }, 3000);
    },
    jumpLink(url) {
      this.$router.push({ path: url });
    },
  },
  beforeMount() {
    let pathname = window.location.pathname;
    pathname = pathname.split("/list")[0];
    pathname = pathname.split("/new")[0];
    pathname = pathname.split("/detail")[0];
    const openKeys = "/" + pathname.split("/")[1].split("/")[0];
    this.defaultSelectedKeys = [pathname];
    this.defaultOpenKeys = [openKeys];
  },
  mounted() {
    this.redirectTo();
  },
};
</script>
<style lang="scss" scoped>
#components-layout {
  height: 100%;
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1890ff;
    }
  }
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
}
</style>
