export default defineNuxtRouteMiddleware((to, from) => {
  console.log("middleware - not Global");
});
