<template>
  <div class="quiz">
    <h1>{{ $t("quiz.quizheader") }}</h1>
    <iframe width="1200x" 
      height="800px" 
      src="https://forms.office.com/Pages/ResponsePage.aspx?id=8Kqebvc_6U2M1B_71FlRuV2OWoSAzsZKqeFYuHg19LpURTNUUkFTMDI1SjRTVURIWkFIME1CU0ZaUC4u&embed=true" 
      frameborder="0" marginwidth="0" marginheight="0" style="border: none; max-width:100%; max-height:100vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
  </div>
</template>
  
  <style scoped>
  .quiz {
    align-items: center;
  }
  h1 {
    text-align: center;
  }
  @media (max-width: 950px) {
    .quiz {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: inherit;
      margin: 0;
    }
    iframe {
      align-items: center;
      display: flex;
      width: 40rem;
      height: 40rem;
      margin: 0;
    }
    main {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40vh;
      margin: 0;
    }
  }
  </style>