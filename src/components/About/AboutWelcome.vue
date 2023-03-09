<template>
  <v-row
    align="center"
    no-gutters
  >
    <v-col
      class="order-md-1"
      cols="12"
      md="4"
    >
      <nuxt-img
        alt="groot"
        class="w-100"
        quality="80"
        src="/img/groot.webp"
      />
    </v-col>

    <v-col
      cols="12"
      md="8"
    >
      <div class="text-h4 text-md-h3 mb-4 text-primary">
        Добро пожаловать!
      </div>

      <p class="text-body-1">
        Привет, я Анар и я Frontend-разработчик. Мне нравится разрабатывать с помощью
        <span class="text-green">Vue.js</span>. Я уже создал несколько
        веб-приложений и не собираюсь на этом останавливаться. Я в некотором роде технический энтузиаст.
        С веб-разработкой я познакомился в 2021 году и по сей день продолжаю работать в этой сфере и узнавать
        что-то новое.
      </p>

      <v-row>
        <v-col
          cols="12"
          md="6"
          xl="4"
        >
          <v-btn
            class="mt-4"
            prepend-icon="mdi-robot-happy-outline"
            to="/projects"
            block
          >
            Посмотреть проекты
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
