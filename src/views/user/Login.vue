<template>
  <div class="loginWrap">
    <a-layout>
      <a-layout-header>Header</a-layout-header>
      <a-layout-content>
        <div class="login">
          <div class="title">后台管理系统模板</div>
          <div class="form">
            <a-form-model
              id="components-form-login"
              :form="form"
              class="login-form"
              @submit="handleSubmit"
            >
              <a-form-model-item>
                <a-input placeholder="admin" v-model="form.account">
                  <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                </a-input>
              </a-form-model-item>
              <a-form-model-item>
                <a-input type="password" placeholder="admin" v-model="form.password">
                  <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                </a-input>
              </a-form-model-item>
              <a-form-model-item>
                <a class="login-form-forgot" href>忘记密码</a>
                <a-button type="primary" html-type="submit" class="login-form-button">登陆</a-button>
                <a href>注册</a>
              </a-form-model-item>
            </a-form-model>
          </div>
        </div>
      </a-layout-content>
      <a-layout-footer>
        Designed and developed by
        <a
          class="link"
          href="http://hanmangniu.com"
          target="_blank"
        >Hanmangniu</a>
        <br />All Rights Reserved
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: { account: "", password: "" }
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      if (this.form.account == "admin" && this.form.password == "admin") {
        this.$message.success("登陆成功");
        this.$router.push({ name: "Dashboard" });
      } else {
        this.$message.error("登陆失败,账号或密码错误");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.loginWrap {
  background-image: url("../../assets/loginBack.svg");
  background-repeat: repeat;
  width: 100%;
  height: 100%;
  .login {
    text-align: center;
    padding: 60px 80px;
    .title {
      font-size: 28px;
      font-weight: bolder;
      margin-bottom: 40px;
    }
    #components-form-login {
      &.login-form {
        max-width: 360px;
        margin: 0 auto;
      }
      .ant-form-item label {
        float: left;
      }
      .login-form-forgot {
        float: right;
      }
      .login-form-button {
        width: 100%;
      }
    }
  }
}
.ant-layout {
  background: transparent;
  height: 100%;
  .ant-layout-header {
    background: transparent;
    text-align: center;
  }
  .ant-layout-footer {
    background: transparent;
    text-align: center;
    color: rgba(0, 0, 0, 0.45);
    .link {
      color: rgba(0, 0, 0, 0.45);
      &:hover {
        color: rgba(0, 0, 0, 0.65);
      }
    }
  }
}
</style>
