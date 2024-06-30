<template>
    <div class="flex h-screen">
      <SideBar class="w-64 bg-gray-900 text-white" />
      <div class="flex-1 flex flex-col">
        <AppBar class="bg-gray-800 text-white shadow-md" />
        <main class="flex-1 overflow-y-auto p-4">
          <NuxtPage />
        </main>
      </div>
    </div>
  </template>
