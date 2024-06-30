<template>
    <div class="h-screen flex flex-col bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg">
      <div class="flex items-center justify-center h-16 bg-white text-white">
        <div class="flex-shrink-0">
              <img class="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Logo">
            </div>
        <h1 class="text-2xl ml-2 text-indigo-500 font-semibold">Dashboard</h1>
      </div>
      <nav class="flex-1 py-4 overflow-y-auto">
        <ul class="space-y-2">
          <li>
            <Nuxt-Link to="/Dashboard" class="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900">
              <span class="mr-3 flex items-center">
                <Icon name="mage:dashboard-4-fill" class="w-6 h-6" />
              </span>
              Dashboard
            </Nuxt-Link>
          </li>
          <li>
            <Nuxt-Link to="/Sales" class="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900">
              <span class="mr-3 flex items-center">
                <Icon name="mage:dashboard-chart-arrow-fill" class="w-6 h-6" />
              </span>
              Sales
            </Nuxt-Link>
          </li>
          <li>
            <Nuxt-Link to="/Reviews" class="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900">
              <span class="mr-3 flex items-center">
                <Icon name="material-symbols:reviews-rounded" class="w-6 h-6" />
              </span>
              Reviews
            </Nuxt-Link>
          </li>
          <li>
            <Nuxt-Link to="/Menu" class="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900">
              <span class="mr-3 flex items-center">
                <Icon name="ic:twotone-restaurant-menu" class="w-6 h-6" />
              </span>
              Menu Manager
            </Nuxt-Link>
          </li>
          <li>
            <Nuxt-Link to="/Stuff" class="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900">
              <span class="mr-3 flex items-center">
                <Icon name="material-symbols:person-pin-rounded" class="w-6 h-6" />
              </span>
              Stuff
            </Nuxt-Link>
          </li>
          <li>
            <Nuxt-Link to="/Customer" class="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900">
              <span class="mr-3 flex items-center">
                <Icon name="flowbite:users-group-solid" class="w-6 h-6" />
              </span>
              Customer
            </Nuxt-Link>
          </li>
          <li>
            <Nuxt-Link to="/Invoice" class="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900">
              <span class="mr-3 flex items-center">
                <Icon name="mdi:invoice-text-edit" class="w-6 h-6" />
              </span>
              Invoice
            </Nuxt-Link>
          </li>
          <li>
            <Nuxt-Link to="/Marketing" class="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900">
              <span class="mr-3 flex items-center">
                <Icon name="mage:dashboard-bar-fill" class="w-6 h-6" />
              </span>
              Marketing
            </Nuxt-Link>
          </li>
          <li>
            <Nuxt-Link to="/Pages" class="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900">
              <span class="mr-3 flex items-center">
                <Icon name="simple-icons:powerpages" class="w-6 h-6" />
              </span>
              Pages
            </Nuxt-Link>
          </li>
          <li>
            <Nuxt-Link to="/Settings" class="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900">
              <span class="mr-3 flex items-center">
                <Icon name="material-symbols:settings-heart-rounded" class="w-6 h-6" />
              </span>
              Settings
            </Nuxt-Link>
          </li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SideBar'
  }
  </script>
  
  <style>

  </style>
  