<template>
    <div class=" min-h-screen mx-auto overflow-x-hidden">
      <div class="w-full mx-auto">
        <Header />
      </div>
      <div class="pt-4 max-w-[83rem] mx-auto flex">
        <Sidebar />
        <main class="flex-1 px-4 py-2">
            <slot/>
        </main>
      </div>
    </div>
  </template>
  
  <script>

  
  </script>
  
  <style scoped>
  .overlay {
    animation: fadeIn 0.3s ease-out;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  </style>
  