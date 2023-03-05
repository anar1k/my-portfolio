export default defineNuxtRouteMiddleware((to) => {
  if (to.path === '/project') {
    return navigateTo('/projects');
  }
});
