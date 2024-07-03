<template>
    <div>
      <!-- Header -->
      <div class="flex flex-row justify-between items-center">
        <div class="flex flex-row gap-3">
          <h1 class="text-xl font-medium">Email Services</h1>
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
  
      <!-- Fields For Stripe -->
      <Fieldset legend="Email SMTP Information" class="mt-4 border border-gray-300 p-4 pt-0 mr-16">
          <div>
            <label for="host">Host</label>
            <input
              type="text"
              id="host"
              placeholder="smtp.gmail.com"
              v-model="fields.host"
              class="block mb-2 border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
            />
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
                <label for="port">PORT</label>
                <input
                  type="text"
                  id="port"
                  placeholder="127.0.0.1"
                  v-model="fields.port"
                  class="block mb-2 border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
                />
  
            </div>
            <div>
                <label for="from_name">From</label>
                <input
                  type="text"
                  id="from_name"
                  placeholder="Enter From Name"
                  v-model="fields.from_name"
                  class="block mb-2 border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
                />
  
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
                <label for="username">Username</label>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter Username"
                  v-model="fields.username"
                  class="block mb-2 border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
                />
  
            </div>
            <div>
                <label for="Password">Password</label>
                <input
                  type="password"
                  id="Password"
                  placeholder="Enter Password"
                  v-model="fields.password"
                  class="block mb-2 border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
                />
  
            </div>
          </div>
          <div>
            <label for="Admin_Email">Admin Email</label>
            <input
              type="email"
              id="Admin_Email"
              placeholder="Enter Admin Email"
              v-model="fields.admin_email"
              class="block mb-2 border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
            />
          </div>
      </Fieldset>
  
  
      <!-- Display Collected Data -->
      <div v-if="submitted" class="mt-4">
        <h2 class="text-xl font-medium">Collected Data</h2>
        <pre>{{ fields }}</pre>
      </div>
    </div>
  </template>
  
  <script setup>
  const submitted = ref(false);
  
    // Define the form fields object
    const fields = reactive({
      port: '',
      host:'',
      from_name: '',
      username: '',
      password: '',
      admin_email: '',
    });
  
  // Function to handle form submission
  const handleSubmit = () => {
    submitted.value = true;
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  </style>
  