<template>
  <aside
    class="sidebar fixed lg:static w-[240px] h-[calc(100vh-4rem)] lg:h-auto transform -translate-x-full lg:translate-x-0 transition-transform duration-300 z-45 overflow-y-auto p-1 "
  >
    <div
      class="bg-slate-900 bg-opacity-30 rounded-xl py-1 shadow-lg mb- transition-all duration-300 border-[1px] border-slate-900"
    >
      <NuxtLink
        v-for="item in menuItems"
        :key="item.name"
        :to="item.link"
        :class="[
          'flex rounded-lg gap-2 items-center px-5 text-gray-600 hover:text-slate-100 hover:bg-slate-900 hover:bg-opacity-100 py-[0.9rem] transition-all ease-in-out duration-300 hover:translate-x-1',
          isActive(item.link) ? 'text-slate-100 bg-slate-900 bg-opacity-100 border-[1px] border-slate-800 shadow-md translate-x-1' : ''
        ]"
      >
        <Icon :name="item.icon" class="w-6 h-6" />
        <span class="material-icons-outlined">{{ item.name }}</span>
      </NuxtLink>
    </div>
  </aside>
</template>

<script setup>

// Define menu items
const menuItems = ref([
  { name: "Dashboard", link: "/", icon: "solar:home-smile-line-duotone" },
  { name: "Sales", link: "/Sales", icon: "solar:sale-line-duotone" },
  { name: "Reviews", link: "/Reviews", icon: "solar:notification-lines-remove-line-duotone" },
  { name: "Stuff", link: "/Stuff", icon: "solar:user-heart-rounded-line-duotone" },
  { name: "Customer", link: "/Customer", icon: "solar:users-group-rounded-line-duotone" },
  { name: "Menu Manager", link: "/Menu-Manager", icon: "solar:bill-list-line-duotone" },
  { name: "Invoice", link: "/Invoice", icon: "solar:bill-check-line-duotone" },
  { name: "Offers", link: "/Offers", icon: "solar:dollar-minimalistic-outline" },
  { name: "Pages", link: "/Pages", icon: "solar:programming-line-duotone" },
  { name: "Settings", link: "/Settings", icon: "solar:settings-line-duotone" },
]);

// Get the current route
const route = useRoute();

// Check if the link is active
const isActive = (link) => route.path === link;
</script>
