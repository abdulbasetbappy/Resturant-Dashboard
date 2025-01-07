<template>
    <div>
      <div class="tabs-container flex items-center justify-start gap-10 m-6">
        <!-- Tabs -->
        <button
          v-for="tab in tabs"
          :key="tab.name"
          @click="selectTab(tab.name)"
          :class="[
            'text-base font-medium pb-2 border-b-2 transition-all ease-in-out duration-300',
            activeTab === tab.name
              ? 'text-slate-600 border-slate-600'
              : 'text-gray-600 border-transparent hover:text-slate-500 hover:border-slate-500',
          ]"
        >
          {{ tab.name }}
        </button>
      </div>
    
      <div class="m-6">

      </div>
    </div>
    </template>
    
    <script setup>
    // Tabs data
    const tabs = ref([
      { name: "Home" },
      { name: "About" },
      { name: "Contacts" },
      { name: "Blogs" },
      { name: "Privacy Policy" },
    ]);
    
    // Active tab state
    const activeTab = ref(tabs.value[0].name);
    
    // Select a tab
    const selectTab = (tabName) => {
      activeTab.value = tabName;
    };
    </script>
    
    <style scoped>
    .tabs-container button {
      cursor: pointer;
    }
    </style>
    