<template>
  <div>
    <div class="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center">
        <!-- Page content here -->

        <slot />
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 w-64 h-full bg-base-200 text-base-content">
          <!-- Sidebar content here -->
          <!-- <li><a>Sidebar Item 1</a></li> -->
          <li>
            <div class="form-control">
              <label class="cursor-pointer label">
                <span class="label-text w-32">women's clothing</span>
                <input
                  type="checkbox"
                  checked="checked"
                  class="checkbox checkbox-info"
                />
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
