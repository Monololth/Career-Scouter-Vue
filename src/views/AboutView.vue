<template>
  <div class="loginpage">
    <div v-if="!authenticated">
      <!-- Display the login form when not authenticated -->
      <login-form @authenticated="setAuthenticated" :mockAccount="mockAccount"/>
    </div>
    <div v-else>
      <div id="about" class="about">
        <div class="logout">
          <router-link
            class="logoutbutton"
            v-if="authenticated"
            to="/login"
            v-on:click.native="logout"
            replace
            >{{$t("login.logout")}}</router-link>
        </div>
        <iframe
          title="Career Scouter Report"
          width="1140"
          height="541.25"
          src="https://app.powerbi.com/view?r=eyJrIjoiYWY1MjI5NmYtYjkxNy00MjM0LWFiZjYtYTk2Y2E0OWQ2ZTk5IiwidCI6IjczMjJjYWQ1LTUwMWItNDgyNy1iYmE4LTU3ODQ4M2JjMjYxMyIsImMiOjh9"
          frameborder="0"
          allowFullScreen="true">
        </iframe>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "../components/Login.vue";
export default {
  name: "AboutPage",
  components: {
    LoginForm,
  },
  data() {
    return {
      authenticated: false,
      mockAccount: {
        username: "career",
        password: "scouter",
      },
    };
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    },
  },
};
</script>

<style scoped>
.loginpage {
  color: var(--color-box-text-color);
}
.logoutbutton {
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px;
  border-radius: 5px;
  padding: 1rem;
  color: var(--color-box-text-color);
  background-color: var(--sidebar-button-color);
}
.logout {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin-top: 1rem;
}
.about {
  color: var(--color-box-text-color);
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
}

iframe {
  width: 80rem;
  height: 50rem;
}

@media (max-width: 1300px) {
  iframe {
    width: 50rem;
    height: 50rem;
  }
}

@media (max-width: 950px) {
  .about {
    display: flex;
    align-items: center;
  }

  iframe {
    width: 22rem;
    height: 15rem;
  }
  .loginpage {
    color: var(--color-box-text-color);
    margin-top: -40rem;
  }
  .logoutbutton {
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid 1px;
    border-radius: 5px;
    padding: 1rem;
    color: var(--color-box-text-color);
    background-color: var(--sidebar-button-color);
  }
  .logout {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    margin-top: 1rem;
  }
}
</style>
