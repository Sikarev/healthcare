<template>
  <el-form
    ref="loginData"
    :model="loginData"
    :rules="rules"
    label-width="120px"
    label-position="top"
    size="medium"
    class="form"
  >
    <h2>Логин</h2>
    <el-form-item prop="username" label="Имя пользователя">
      <el-input
        name="username"
        type="text"
        v-model="loginData.username"
      ></el-input>
    </el-form-item>
    <el-form-item prop="password" label="Пароль">
      <el-input
        name="password"
        type="password"
        v-model="loginData.password"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-checkbox @click="setRememberMe" v-model="loginData.rememberMe"
        >Запомнить меня</el-checkbox
      >
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Войти</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      loginData: {
        username: "",
        password: "",
        rememberMe: false,
      },
      rules: {
        username: [
          {
            required: true,
            message: "Введите имя пользователя",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Введите пароль",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      if (this.loginData.username === "" || this.loginData.password === "") {
        alert("Ошибка ввода"); // прикрутить валидацию
      }
      console.log(this.loginData);
    },
    setRememberMe() {
      this.rememberMe = !this.rememberMe;
    },
  },
});
</script>

<style lang="css" scoped>
.form {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 50px;
}
@media (max-width: 576px) {
  .form {
    padding: 0 10px;
  }
}
</style>
