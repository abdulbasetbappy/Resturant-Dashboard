<template>
    <div class="card flex justify-content-center">
      <Breadcrumb :home="home" :model="breadcrumbItems" />
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { useRoute } from 'vue-router';
  import Breadcrumb from 'primevue/breadcrumb';
  
  const route = useRoute();
  
  const home = ref({
    icon: 'pi pi-home'
  });
  
  const breadcrumbItems = computed(() => {
    const items = [];
    if (route.matched) {
      route.matched.forEach(match => {
        items.push({
          label: match.name,
          to: { name: match.name, params: route.params }
        });
      });
    }
    return items;
  });
  </script>
  