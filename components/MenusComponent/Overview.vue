<template>
  <div class="p-4">
    <!-- Draggable Categories -->
    <ul>
      <transition-group name="fade" mode="out-in" tag="div">
        <li
          v-for="(category, catIndex) in categories"
          :key="category.id"
          @dragstart="dragCategoryStart(catIndex)"
          @dragover.prevent
          @drop="dropCategory(catIndex)"
          draggable="true"
          class="bg-white border-b border-gray-200 p-4 rounded-md mb-2 shadow-sm cursor-move transition-transform duration-200 ease-in-out"
        >
          <div class="flex justify-between items-center">
            <div @click="toggleDropdown(catIndex)" class="cursor-pointer flex items-center space-x-2">
              <span class="font-semibold">{{ category.name }}</span>
              <span class="text-gray-500 text-sm">{{ category.items.length }} items</span>
              <span :class="{ 'rotate-180': category.dropdownOpen }">▼</span>
            </div>
          </div>
          <!-- Draggable Items Inside Dropdown -->
          <transition-group name="fade" mode="out-in" tag="ul" class="pl-4">
            <li
              v-if="category.dropdownOpen"
              v-for="(item, itemIndex) in category.items"
              :key="item.id"
              @dragstart="dragItemStart(catIndex, itemIndex)"
              @dragover.prevent
              @drop="dropItem(catIndex, itemIndex)"
              draggable="true"
              class="bg-gray-100 border-b border-gray-300 p-4 rounded-md mb-2 flex items-center space-x-4 shadow-sm cursor-move transition-transform duration-200 ease-in-out"
            >
              <img :src="item.image" alt="item image" class="w-10 h-10 rounded-full" />
              <div>
                <h3 class="font-semibold">{{ item.title }}</h3>
                <p class="text-gray-500 text-sm">{{ item.subtitle }}</p>
                <p class="text-green-500 font-bold">{{ item.price }}</p>
              </div>
            </li>
          </transition-group>
        </li>
      </transition-group>
    </ul>
    <!-- Updated Data Structure Display -->
    <div class="mt-6 p-4 bg-gray-50 rounded-md shadow-md">
      <h3 class="font-semibold text-lg mb-4">Updated Data Structure</h3>
      <pre class="bg-white p-4 rounded-md shadow-sm text-sm overflow-auto">{{ categories }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const categories = ref([
  {
    id: 1,
    name: "Sandwiches",
    items: [
      {
        id: 1,
        image: "https://via.placeholder.com/40",
        title: "Chicken Sandwich",
        subtitle: "Grilled chicken with lettuce",
        price: "$5.99",
      },
      {
        id: 2,
        image: "https://via.placeholder.com/40",
        title: "Veggie Sandwich",
        subtitle: "Fresh veggies with hummus",
        price: "$4.99",
      },
    ],
  },
  {
    id: 2,
    name: "Burgers",
    items: [
      {
        id: 1,
        image: "https://via.placeholder.com/40",
        title: "Beef Burger",
        subtitle: "Juicy beef patty with cheese",
        price: "$8.99",
      },
      {
        id: 2,
        image: "https://via.placeholder.com/40",
        title: "Veggie Burger",
        subtitle: "Grilled veggies with sauce",
        price: "$7.99",
      },
    ],
  },
]);

const draggedCategoryIndex = ref(null);
const draggedItemIndex = ref(null);
const draggedCategory = ref(null);

const dragCategoryStart = (index) => {
  draggedCategoryIndex.value = index;
  draggedCategory.value = categories.value[index];
};

const dropCategory = (index) => {
  const draggedData = categories.value.splice(draggedCategoryIndex.value, 1)[0];
  categories.value.splice(index, 0, draggedData);
  draggedCategoryIndex.value = null;
};

const dragItemStart = (catIndex, itemIndex) => {
  draggedCategoryIndex.value = catIndex;
  draggedItemIndex.value = itemIndex;
};

const dropItem = (catIndex, itemIndex) => {
  const draggedItemData = categories.value[draggedCategoryIndex.value].items.splice(draggedItemIndex.value, 1)[0];
  categories.value[catIndex].items.splice(itemIndex, 0, draggedItemData);
  draggedCategoryIndex.value = null;
  draggedItemIndex.value = null;
};

const toggleDropdown = (index) => {
  categories.value[index].dropdownOpen = !categories.value[index].dropdownOpen;
};
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
