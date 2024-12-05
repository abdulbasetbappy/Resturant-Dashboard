<template>
  <div
    class="bg-white shadow-md p-6 rounded-md flex justify-between items-center"
  >
    <!--<Loader />-->
    <!-- Left Section: Title and Menu Hours -->
    <div>
      <!-- Title with Dropdown Icon -->
      <h1 class="text-2xl font-bold flex items-center">
        Menu
        <Icon
          name="material-symbols:keyboard-arrow-down-rounded"
          class="w-6 h-6"
        />
      </h1>

      <!-- Menu Hours -->
      <p class="text-gray-500 mt-2">Menu Hours</p>
      <p class="text-sm text-gray-700">Every day 11:00 AM - 3:00 AM</p>
    </div>

    <!-- Right Section: Edit Button -->
    <div>
      <button
        class="flex items-center bg-gray-100 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
      >
        <Icon
          name="material-symbols:settings-b-roll-outline-rounded"
          class="w-6 h-6"
        />
        Edit
      </button>
    </div>
  </div>
  <div class="card">
    <TabView v-model:activeIndex="active">
      <TabPanel header="Overview  ">
        <Overview />
      </TabPanel>
      <TabPanel header="Menus">
        <div
          class="flex justify-between items-center bg-white p-4 shadow-sm rounded-md"
        >
          <!-- Title Section -->
          <h1 class="text-2xl font-bold text-gray-900">Menus</h1>

          <!-- Button Section -->
           <MenusComponentAddNewMenu />
        </div>
        <MenusTable />
      </TabPanel>
      <TabPanel header="Categories">
        <div
          class="flex justify-between items-center bg-white p-4 shadow-sm rounded-md"
        >
          <!-- Title Section -->
          <h1 class="text-2xl font-bold text-gray-900">Categories</h1>

          <!-- Button Section -->
           <MenusComponentAddNewCategory />
        </div>
        <CategoriesTable />
      </TabPanel>
      <TabPanel header="All Items">
        <div
          class="flex justify-between items-center bg-white p-4 shadow-sm rounded-md"
        >
          <!-- Title Section -->
          <h1 class="text-2xl font-bold text-gray-900">All Items</h1>

          <!-- Button Section -->
           <MenusComponentAddNewItems />
        </div>
        <ItemsTable />
      </TabPanel>
      <TabPanel header="Options">
        <div
          class="flex justify-between items-center bg-white p-4 shadow-sm rounded-md"
        >
          <!-- Title Section -->
          <h1 class="text-2xl font-bold text-gray-900">Options</h1>

          <!-- Button Section -->
          <button
            class="flex items-center bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            New Menu
          </button>
        </div>
        <OptionsTable />
      </TabPanel>
    </TabView>
  </div>
</template>

<script setup>
import CategoriesTable from "~/components/MenusComponent/CategoriesTable.vue";
import MenusTable from "~/components/MenusComponent/MenusTable.vue";
import ItemsTable from "~/components/MenusComponent/ItemsTable.vue";
import OptionsTable from "~/components/MenusComponent/OptionsTable.vue";
import Overview from "~/components/MenusComponent/Overview.vue";

const active = ref(0);
definePageMeta({
  layout: "dash-board",
});
</script>
