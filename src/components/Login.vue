<template>
<div class="loginwrapper">
  <div class="login">
    <h1>{{ $t("login.header")}}</h1>
    <input
      type="text"
      name="username"
      v-model="input.username"
      placeholder="Username"
      class="logininput"
    />
    <input
      type="password"
      name="password"
      v-model="input.password"
      placeholder="Password"
      class="logininput"
    />
    <button type="button" @click="login" class="loginbutton">{{ $t("login.header")}}</button>
  </div>
</div>
</template>

<script>
export default {
  name: "Login",
  props: {
    mockAccount: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      input: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      if (this.input.username && this.input.password) {
        if (
          this.input.username === this.mockAccount.username &&
          this.input.password === this.mockAccount.password
        ) {
          this.$emit("authenticated", true);
          this.$router.replace({ name: "result" });
        } else {
          console.log("The username and/or password is incorrect");
        }
      } else {
        console.log("A username and password must be present");
      }
    },
  },
};
</script>

<style scoped>
.loginwrapper {
  margin-top: -40rem;
}
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--navbar-text-color);
  background-color: var(--navbar-background-color);
  width: 500px;
  border-radius: 5px;
  border: 1px solid #cccccc;
  margin: auto;
  margin-top: 20rem;
  padding: 20px;
}
.logininput {
  max-width: 250px;
  padding: 0.25rem;
  margin: 2px;
}
.loginbutton {
  color: var(--color-text-color);
  background-color: var(--sidebar-button-color);
  font-family: Montserrat;
  border-radius: 5px;
  margin: 2px;
  padding: 0.25rem;
  width: 150px;
  max-width: 250px;
}

@media (max-width: 950px) {
  .loginwrapper {
    margin-top: -25rem;
  }
  .login {
    width: 300px;
    border-radius: 5px;
    border: 1px solid #cccccc;
    margin: auto;
    margin-top: 20rem;
    padding: 20px;
}
}
</style>
