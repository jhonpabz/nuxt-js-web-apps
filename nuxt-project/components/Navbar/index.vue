<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <!--          <li>
            <NuxtLink to="/context"
              >React Context and Provider Pattern</NuxtLink
            >
          </li> -->
          <li><NuxtLink to="/usestate">useState</NuxtLink></li>
          <li><NuxtLink to="/events">Events</NuxtLink></li>
          <li><NuxtLink to="/custom">Custom</NuxtLink></li>
        </ul>
      </div>
      <a class="btn btn-ghost normal-case text-xl">Test</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <!--      <li>
          <NuxtLink to="/context">React Context and Provider Pattern</NuxtLink>
        </li> -->
        <li><NuxtLink to="/usestate">useState</NuxtLink></li>
        <li><NuxtLink to="/events">Events</NuxtLink></li>
        <li><NuxtLink to="/custom">Custom</NuxtLink></li>
      </ul>
    </div>
    <div class="navbar-end">
      <a class="btn">
        <IconsAccount />
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
