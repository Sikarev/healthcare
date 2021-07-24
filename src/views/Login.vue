<template>
  <login-form />
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { LoginForm },
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