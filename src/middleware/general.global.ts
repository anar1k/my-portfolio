export default defineNuxtRouteMiddleware((to) => {
  if (to.path === '/product') {
    return navigateTo('/products');
  }
});
