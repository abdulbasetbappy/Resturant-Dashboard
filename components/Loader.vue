<template>
    <div class="fixed inset-0 flex justify-center items-center bg-white bg-opacity-75 z-50">
      <div class="flex space-x-2 animate-spin">
        <!-- Circle 1 -->
        <div class="w-4 h-4 bg-gray-800 rounded-full"></div>
        <!-- Circle 2 -->
        <div class="w-4 h-4 bg-gray-800 rounded-full"></div>
        <!-- Circle 3 -->
        <div class="w-4 h-4 bg-gray-800 rounded-full"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "LoadingSpinner",
  };
  </script>
  
  <style scoped>
  /* Add any custom styles here if needed */
  </style>
  