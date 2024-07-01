<template>
  <nav
    class="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg"
  >
    <!--Header/TopBar-->
    <div class="max-w-7xl mx-auto px-4 xs:px-6 lg:px-8">
      <!--Header Elements-->
      <div class="flex items-center xs:justify-between md:justify-end  h-16">
        <!--Mobile Menu Button-->
        <div class="xs:block md:hidden">  
            <nuxt-link to="/DashBoard" class="flex flex-row items-center justify-start">
              <img class="h-8 inline-block w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Logo">
              <h1 class="text-2xl ml-2 text-indigo-500 font-semibold">Dashboard</h1>
            </nuxt-link>
        </div>
        <!--Header Elements-->
        <div class="hidden md:block">
          <div class="ml-4 flex gap-3 justify-end items-center md:ml-6">
            <!--Notification-->
            <div>
              <button
                @click="toggleMobileMenu"
                class="flex text-gray-600 text-sm"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <i v-badge="2" class="pi pi-bell w-6 h-6 text-2xl" />
              </button>
            </div>
            <!-- Profile dropdown -->
            <div class="ml-3 relative">
              <div>
                <button
                  @click="toggleMobileMenu"
                  class="flex bg-gray-300 text-sm rounded-xl p-1"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <img
                    src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-user-color-icon.png"
                    class="h-8 w-8 rounded-xl"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <!--Responsive Mobile Menu Button -->
        <div class="-mr-2 flex md:hidden">
          <button
            @click="toggleMobileMenu"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
          >
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
            <svg
              class="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div
      class="absolute top-14 right-12 z-100"
      :class="{ block: mobileMenuOpen, hidden: !mobileMenuOpen }"
    >
      <div class="pt-4 shadow-lg rounded-md pb-3 bg-slate-200">
        <div class="flex items-center px-5">
          <div class="flex-shrink-0">
            <img
              class="h-10 w-10 rounded-full"
              src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-user-color-icon.png"
              alt=""
            />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium leading-none text-gray-800">
              Tom Cook
            </div>
            <div class="text-sm font-medium leading-none text-gray-400">
              tom@example.com
            </div>
          </div>
        </div>
        <nav class="flex-1 py-4 md:hidden overflow-y-auto">
          <ul class="space-y-2">
            <li>
              <Nuxt-Link
                to="/Dashboard"
                class="flex items-center px-4 hover:rounded-lg py-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
              >
                <span class="mr-3 flex items-center">
                  <Icon name="mage:dashboard-4-fill" class="w-6 h-6" />
                </span>
                Dashboard
              </Nuxt-Link>
            </li>
            <li>
              <Nuxt-Link
                to="/Sales"
                class="flex items-center hover:rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
              >
                <span class="mr-3 flex items-center">
                  <Icon
                    name="mage:dashboard-chart-arrow-fill"
                    class="w-6 h-6"
                  />
                </span>
                Sales
              </Nuxt-Link>
            </li>
            <li>
              <Nuxt-Link
                to="/Reviews"
                class="flex items-center hover:rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
              >
                <span class="mr-3 flex items-center">
                  <Icon
                    name="material-symbols:reviews-rounded"
                    class="w-6 h-6"
                  />
                </span>
                Reviews
              </Nuxt-Link>
            </li>
            <li>
              <Nuxt-Link
                to="/Menu"
                class="flex items-center px-4 py-2 hover:rounded-lg text-gray-700 hover:bg-gray-200 hover:text-gray-900"
              >
                <span class="mr-3 flex items-center">
                  <Icon name="ic:twotone-restaurant-menu" class="w-6 h-6" />
                </span>
                Menu Manager
              </Nuxt-Link>
            </li>
            <li>
              <Nuxt-Link
                to="/Stuff"
                class="flex items-center px-4 hover:rounded-lg py-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
              >
                <span class="mr-3 flex items-center">
                  <Icon
                    name="material-symbols:person-pin-rounded"
                    class="w-6 h-6"
                  />
                </span>
                Stuff
              </Nuxt-Link>
            </li>
            <li>
              <Nuxt-Link
                to="/Customer"
                class="flex items-center hover:rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
              >
                <span class="mr-3 flex items-center">
                  <Icon name="flowbite:users-group-solid" class="w-6 h-6" />
                </span>
                Customer
              </Nuxt-Link>
            </li>
            <li>
              <Nuxt-Link
                to="/Invoice"
                class="flex items-center px-4 hover:rounded-lg py-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
              >
                <span class="mr-3 flex items-center">
                  <Icon name="mdi:invoice-text-edit" class="w-6 h-6" />
                </span>
                Invoice
              </Nuxt-Link>
            </li>
            <li>
              <Nuxt-Link
                to="/Marketing"
                class="flex items-center hover:rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
              >
                <span class="mr-3 flex items-center">
                  <Icon name="mage:dashboard-bar-fill" class="w-6 h-6" />
                </span>
                Marketing
              </Nuxt-Link>
            </li>
            <li>
              <Nuxt-Link
                to="/Pages"
                class="flex items-center px-4 hover:rounded-lg py-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
              >
                <span class="mr-3 flex items-center">
                  <Icon name="simple-icons:powerpages" class="w-6 h-6" />
                </span>
                Pages
              </Nuxt-Link>
            </li>
            <li>
              <Nuxt-Link
                to="/Settings"
                class="flex items-center hover:rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
              >
                <span class="mr-3 flex items-center">
                  <Icon
                    name="material-symbols:settings-heart-rounded"
                    class="w-6 h-6"
                  />
                </span>
                Settings
              </Nuxt-Link>
            </li>
          </ul>
        </nav>
        <div class="mt-3 px-2 space-y-1">
          <nav class="flex-1 py-4 overflow-y-auto">
          <ul class="space-y-1">
            <li>
              <Nuxt-Link
                to="/DashBoard"
                class="flex items-center px-4 hover:rounded-lg py-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
              >
                <span class="mr-3 flex items-center">
                  <Icon name="material-symbols:other-houses-rounded" class="w-6 h-6" />
                </span>
                Home
              </Nuxt-Link>
            </li>
            <li>
              <Nuxt-Link
                to="/Settings"
                class="flex items-center hover:rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
              >
                <span class="mr-3 flex items-center">
                  <Icon
                    name="material-symbols:manage-accounts-rounded"
                    class="w-6 h-6"
                  />
                </span>
                Settings
              </Nuxt-Link>
            </li>
            <li>
              <Nuxt-Link
                to="#"
                class="flex items-center hover:rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
              >
                <span class="mr-3 flex items-center">
                  <Icon
                    name="solar:logout-2-bold"
                    class="w-6 h-6 rotate-180"
                  />
                </span>
                Sign Out
              </Nuxt-Link>
            </li>
          </ul>
        </nav>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const mobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>

<style scoped></style>
