<template>
  <div>
    <header>
      <NuxtLink to="/">
        Nuxt home
      </NuxtLink>

      <ul>
        <li>
          <NuxtLink to="/">
            Home
          </NuxtLink>
        </li>

        <li>
          <NuxtLink to="/about">
            About
          </NuxtLink>
        </li>

        <li>
          <NuxtLink to="/products">
            products
          </NuxtLink>
        </li>
      </ul>
    </header>

    <div>
      <slot />
    </div>
  </div>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #12b488;
  gap: 20px;
}

.router-link-exact-active {
  color: #12b488;
}
</style>
