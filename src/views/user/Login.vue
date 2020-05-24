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
                <a-input
                  v-decorator="[
                    'userName',
                    {
                      rules: [
                        {
                          required: true,
                          message: 'Please input your username!',
                        },
                      ],
                    },
                  ]"
                  placeholder="Username"
                >
                  <a-icon
                    slot="prefix"
                    type="user"
                    style="color: rgba(0,0,0,.25)"
                  />
                </a-input>
              </a-form-model-item>
              <a-form-model-item>
                <a-input
                  v-decorator="[
                    'password',
                    {
                      rules: [
                        {
                          required: true,
                          message: 'Please input your Password!',
                        },
                      ],
                    },
                  ]"
                  type="password"
                  placeholder="Password"
                >
                  <a-icon
                    slot="prefix"
                    type="lock"
                    style="color: rgba(0,0,0,.25)"
                  />
                </a-input>
              </a-form-model-item>
              <a-form-model-item>
                <a class="login-form-forgot" href="">
                  忘记密码
                </a>
                <a-button
                  type="primary"
                  html-type="submit"
                  class="login-form-button"
                >
                  登陆
                </a-button>
                <a href="">
                  注册
                </a>
              </a-form-model-item>
            </a-form-model>
          </div>
        </div>
      </a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.loginWrap {
  background-image: url("../../assets/loginBack.svg");
  background-repeat: repeat;
  width: 100vw;
  height: 100vh;
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
</style>
