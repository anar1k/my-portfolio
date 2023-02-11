import eslintPlugin from 'vite-plugin-eslint'

export default defineNuxtConfig({
  vite: {
    plugins: [
      eslintPlugin()
    ]
  },

  srcDir: 'src/'
})
