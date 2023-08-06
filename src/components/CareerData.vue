<script setup></script>

<template>
  <div class="wrapper">
    <div class="left">
      <div class="searchbar">
        <input type="text" v-model="searchValue" placeholder="Search" />
        <div v-if="careersList.length">
          <div
            class="item"
            v-for="careerpath in careersList"
            :key="careerpath.id"
          >
            <router-link
              class="itemlink"
              :to="{
                name: 'DetailInformations',
                params: { id: careerpath.id },
              }"
            >
              {{ $t(careerpath.listrole) }}
            </router-link>
          </div>
        </div>
        <div class="error" v-else>
          No Career paths found for this search: <br />
          {{ searchValue }}.
        </div>
      </div>
    </div>
    <div class="right">
        <router-view name="detail"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    searchValue: "",
    careerpaths: [],
    careerpath: {},
  }),
  computed: {
    careersList() {
      const searchValue = this.searchValue.toLowerCase().trim();
      if (searchValue.length > 0) {
        return this.careerpaths.filter((careerpath) => {
          const translatedListRole = this.$t(careerpath.listrole);
          return translatedListRole.toLowerCase().includes(searchValue);
        });
      }
      return this.careerpaths;
    },
  },
  methods: {
    loadCareerPaths() {
      fetch("/db.json")
        .then((response) => response.json())
        .then((data) => {
          console.log("Loaded data successfully");
          this.careerpaths = data.careerpaths;
        })
        .catch((error) => {
          console.error("Error loading JSON file:", error);
        });
    },
    clickHandler: function handleClick(event, path) {
      event.preventDefault();
      console.log(path);
    },
  },
  mounted() {
    this.loadCareerPaths();
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  min-width: 100%;
  overflow: auto;
}

.left {
  padding: 1rem;
  width: 25rem;
  float: left;
  font-family: Montserrat;
}

.right {
  padding-top: 0rem;
  width: 65rem;
  float: right;
}
.searchbar .left {
  padding: 1rem;
  width: inherit;
}

input {
  width: 23rem;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 5px -1px;
}

.item {
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: white;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}

.error {
  display: flex;
  margin: 0;
  background-color: tomato;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  white-space: pre-wrap;
  word-break: break-word;
  overflow: hidden;
  overflow: hidden;
  padding: 1rem;
}

.itemlink {
  display: flex;
  justify-content: center;
  background-color: var(--sidebar-button-color);
  padding: 1.75rem;
  color: var(--navbar-text-color);
  border-radius: 5px;
  border: 4px solid #0d004c;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 5px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}

/* --- 1500px --- */

@media (max-width: 1500px) {
  .wrapper {
    display: flex;
    flex-direction: row;
    min-width: 100%;
    overflow: auto;
  }

  .left {
    padding: 1rem;
    width: 25rem;
    font-size: 15px;
    font-weight: bold;
    float: left;
  }

  .right {
    padding-top: 0rem;
    width: 49rem;
    float: right;
  }

  input {
    width: 23rem;
  }
}

@media (max-width: 1200px) {
  .wrapper {
    display: flex;
    flex-direction: row;
    min-width: 100%;
    overflow: auto;
  }

  .left {
    padding: 1rem;
    width: 23rem;
    float: left;
  }

  .right {
    padding-top: 0rem;
    width: 40rem;
    float: right;
  }

  input {
    width: 21rem;
  }
} 

@media (max-width: 1030px) {

  .left {
    padding: 1rem;
    width: 20rem;
    float: left;
  }

  .right {
    padding-top: 0rem;
    width: 40rem;
    float: right;
  }

  input {
    width: 18rem;
  }
} 

@media (max-width: 980px) {
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .left {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-right: 0;
  }

  .right {
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .searchbar {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-height: 50rem;
  }

  input {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 17.5rem;
    padding: 1rem;
    font-size: 16px;
    border: none;
    overflow-y: scroll;
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }

  .item {
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: white;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
      rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  }

  .career {
    background-color: rgb(97, 62, 252);
    padding: 1rem;
    width: inherit;
    cursor: pointer;
    overflow: hidden;
  }

  .error {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0;
    background-color: tomato;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: break-word;
    overflow: hidden;
    padding: 1rem;
  }
}
</style>
