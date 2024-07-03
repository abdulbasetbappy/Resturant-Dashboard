<template>
    <div>
      <!-- Header -->
      <div class="flex flex-row justify-between items-center">
        <div class="flex flex-row gap-3">
          <h1 class="text-xl font-medium">Privacy Policies</h1>
        </div>
        <div class="mr-16">
          <!-- Submit Button -->
          <button
            class="mt-4 bg-indigo-500 px-4 py-2 rounded-lg text-blue-50"
            @click="handleSubmit"
          >
            Save
          </button>
        </div>
      </div>
  
      <!-- Fields For Information -->
      <Fieldset legend="Profile Information" class="mt-4 border border-gray-300 p-4 pt-0 mr-16">
        <div class="card">
            <Editor v-model="value" editorStyle="height: 320px" />
        </div>
      </Fieldset>
  
      <!-- Display Collected Data -->
      <div v-if="submitted" class="mt-4">
        <h2 class="text-xl font-medium">Collected Data</h2>
        <pre>
            Business Information: {{ value }}
        </pre>
      </div>
    </div>
  </template>
  
  <script setup>

import Editor from 'primevue/editor';

  const submitted = ref(false);
  
    // Define the form fields object
    const value = ref('');
  // Function to handle form submission
  const handleSubmit = () => {
    submitted.value = true;
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  </style>
  