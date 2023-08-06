<template>
  <div v-if="careerpaths" class="career_card">
    <h1>{{ $t("careerpage.headertitle") }}</h1>
    <div class="career_header">
      <div class="photo">
        <img :src="careerpaths.image" />
      </div>
      <div class="career_personal">
        <div class="personal">
          <h4 class="personal_name">{{ $t(careerpaths.name) }}</h4>
          <p>{{ $t(careerpaths.description) }}</p>
          <p>{{ $t(careerpaths.company) }}</p>
        </div>
      </div>
    </div>
    <div class="career_video">
      <iframe
        width="100%"
        :src="careerpaths.video"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
    <div class="career_skills">
      <h1>{{ $t("careerpage.skills") }}</h1>
      <div class="career_list">
        <div
          v-for="(skill, index) in careerpaths.skills"
          :key="skill.id"
          :style="{
            backgroundColor: getColor[index % getColor.length],
            color: getFontColor(getColor[index % getColor.length]),
          }"
          class="career_item"
        >
          {{ $t(skill) }}
        </div>
      </div>
    </div>
    <div class="career_roles">
      <h1>{{ $t("careerpage.roles") }}</h1>
      <div class="career_list">
        <div
          v-for="(role, index) in careerpaths.roles"
          :key="index"
          class="career_item career_role"
        >
          {{ $t(role) }}
        </div>
      </div>
    </div>
    <div class="career_offer">
      <h1>Courses Offered by JAMK</h1>
      <div v-for="(course, index) in careerpaths.courses" :key="index">
        <h3>{{ $t(course.name) }}</h3>
        <!-- <p>{{ $t(course.description) }}</p> -->
        <template v-if="course.isExpanded">
          <p
            v-for="(sentence, index) in splitSentences($t(course.description))"
            :key="index"
          >
            {{ sentence }}
          </p>
          <p>
            <a :href="course.link" v-if="course.hasOwnProperty(`link`)">{{
              course.link
            }}</a>
          </p>
        </template>
        <template v-else-if="$t(course.description).length <= 100">
          <p>{{ $t(course.description) }}</p>
        </template>
        <template v-else>
          <p>{{ $t(course.description).slice(0, 100) + "..." }}</p>
        </template>
        <span v-if="$t(course.description).length > 100">
          <a @click="toggleReadMore(course)">
            {{ course.isExpanded ? "Read Less" : "Read More" }}
          </a>
        </span>
      </div>
    </div>
  </div>
  <div v-else>
    <p>loading for info...</p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      isExpanded: false,
      careerpaths: null,
      getColor: [
        "var(--color-box1)",
        "var(--color-box2)",
        "var(--color-box3)",
        "var(--color-box4)",
        "var(--color-box5)",
        "var(--color-box6)",
      ],
    };
  },
  computed: {
    getFontColor() {
      return (color) => {
        // Add your condition here to determine the font color based on the background color
        if (color === "var(--color-box2)") {
          return "white"; // Set font color to white for color-box1
        } else if (color === "var(--color-box1)") {
          return "black"; // Set font color to black for color-box2
        } else if (color === "var(--color-box4)") {
          return "white"; // Set font color to black for color-box2
        } else if (color === "var(--color-box6)") {
          return "white"; // Set font color to black for color-box2
        } else {
          return "inherit"; // Use default font color for other colors
        }
      };
    },
  },

  methods: {
    splitSentences(description) {
      // Split the description into an array of sentences
      return description.split(";").map((sentence) => sentence.trim());
    },

    toggleReadMore(item) {
      item.isExpanded = !item.isExpanded;
    },
    loadCareerPath() {
      const careerId = this.$route.params.id;
      fetch("/db.json")
        .then((response) => response.json())
        .then((data) => {
          const careerpath = data.careerpaths.find(
            (career) => career.id === careerId.toString()
          );
          if (careerpath) {
            console.log("Loaded career path successfully");
            this.careerpaths = careerpath;
          } else {
            console.error("Career path not found");
          }
        })
        .catch((error) => {
          console.error("Error loading JSON file:", error);
        });
    },
  },
  mounted() {
    this.loadCareerPath();
  },

  watch: {
    $route(to, from) {
      this.loadCareerPath();
    },
  },
  computed: {
    getFontColor() {
      return (color) => {
        // Add your condition here to determine the font color based on the background color
        if (color === "var(--color-box1)") {
          return "black"; // Set font color to white for color-box1
        } else if (color === "var(--color-box2)") {
          return "black"; // Set font color to black for color-box2
        } else if (color === "var(--color-box4)") {
          return "black"; // Set font color to black for color-box2
        } else if (color === "var(--color-box6)") {
          return "white"; // Set font color to black for color-box2
        } else if (color === "var(--color-box3)") {
          return "black"; // Set font color to black for color-box2
        } else {
          return "inherit"; // Use default font color for other colors
        }
      };
    },
  },
};
</script>

<style>
.career_card {
  max-width: 1400px;
  padding: 1rem;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  font-family: Montserrat;
  margin: 0rem;
  text-align: left;
  text-decoration: none;
  /* border: 5px solid #0d004c; */
  background-color: --color-background-soft;
  transition: color 0.15s ease, border-color 0.15s ease;
}

.personal_name {
  margin-top: 0;
}

.career_header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.career_personal {
  display: flex;
  align-items: center;
}
.photo {
  width: 258px;
  height: 258px;
  margin-right: 1rem;
  border: 4px solid #0d004c;
}

.personal {
  flex: 1;
  padding-left: 4px;
  margin-top: 0px;
}

.career_video {
  justify-content: center;
  align-self: center;
  height: 408px;
  margin-top: 70px;
  border: 4px solid #0d004c;
}

.career_video iframe {
  width: 600px;
  height: 400px;
}

.career_skills {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
}

.career_list {
  align-items: center;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  gap: 10px 10px; /* row-gap column gap */
  row-gap: 10px;
  column-gap: 5px;
}

.career_item {
  flex: 1 0 21%; /* explanation below */
  margin: 5px;
  height: 100px;
  padding: 2rem;
  padding-top: 5rem;
  padding-bottom: 5rem;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 5px;
}

.career_role {
  color: var(--color-box-text-color);
  background-color: var(--role-box-color);
  height: 50px;
}

.career_offer {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 20px;
}

.descinline {
  display: inline;
}

.descempty {
  display: none;
}

@media (max-width: 1200px) {
  .career_header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .career_personal {
    display: flex;
    align-items: center;
  }

  .photo {
    width: 259px;
    height: 259px;
    margin-right: 10px;
    border: 4px solid #0d004c;
  }

  .personal {
    flex: 1;
    padding-left: 4px;
    margin-top: 0px;
  }

  .career_video {
    justify-content: center;
    align-self: center;
    height: 223px;
    margin-top: 70px;
    margin-left: spx;
    border: 4px solid #0d004c;
  }

  .career_video iframe {
    width: 400px;
    height: 215px;
  }

  .career_skills {
    margin-top: 10px;
  }

  .career_list {
    width: 700px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    gap: 10px 20px; /* row-gap column gap */
    row-gap: 10px;
    column-gap: 20px;
  }

  .career_list > div {
    flex: 1 1 150px;
  }

  .career_item {
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
  }
}

@media (max-width: 1150px) {
  .career_skills {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 10px;
  }
  .career_list {
    width: 650px;
    align-items: center;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    gap: 10px 10px; /* row-gap column gap */
    row-gap: 10px;
    column-gap: 5px;
  }
  .career_item {
    flex: 1 0 21%;
    height: 100px;
    padding: 2rem;
    padding-top: 5rem;
    padding-bottom: 5rem;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 5px;
  }
}

@media (max-width: 1065px) {
  .career_list {
    width: 600px;
  }
}

@media (max-width: 1010px) {
  .career_list {
    width: 600px;
  }

  .career_item {
    font-size: 17px;
  }
}

/* -- 950px (MOBILE LAYOUT) -- */

@media (max-width: 950px) {
  .career_card {
  justify-content: center;
  align-items: center;
  width: 300px;
  max-width: 300px;
  padding: 1rem;
  flex-direction: column;
}

  .career_header {
    display: flex;
    max-width: 350px;
    flex-direction: column;
    justify-content: space-between;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  .career_personal {
    display: flex;
    align-items: center;
  }

  .photo {
    width: 258px;
    height: 258px;
    margin-right: 0;
    border: 4px solid #0d004c;
  }

  .personal {
    flex: 1;
    padding-left: 4px;
    margin-top: 0px;
  }

  .career_video {
    justify-content: center;
    align-self: center;
    height: 200px;
    margin-top: 70px;
    margin-left: spx;
    border: 4px solid #0d004c;
  }

  .career_video iframe {
    width: 300px;
    height: 200px;
  }

  .career_list {
    width: 350px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    gap: 10px 20px; /* row-gap column gap */
    row-gap: 10px;
    column-gap: 20px;
  }

  .career_item {
    min-width: 50px;
    min-height: 100px;
    padding: 1rem;
    font-size: 12px;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
  }
  .career_roles {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 200px;
    margin-top: 10px;
  }
  .career_offer {
    max-width: 300px;
  }
}
</style>
