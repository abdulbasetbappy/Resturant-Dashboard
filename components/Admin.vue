<template>
    <div>
      <!-- Header -->
      <div class="flex flex-row justify-between items-center">
        <div class="flex flex-row gap-3">
          <h1 class="text-xl font-medium">Super Admin</h1>
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
          <div class="grid grid-cols-3 gap-4">
            <div>
                <label for="fname">First Name</label>
                <input
                  type="text"
                  id="fname"
                  placeholder="Enter First Name"
                  v-model="adminInfo.first_name"
                  class="block mb-2 border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
                />
  
            </div>
            <div>
                <label for="Last_Name">Last Name</label>
                <input
                  type="text"
                  id="Last_Name"
                  placeholder="Enter Last Name"
                  v-model="adminInfo.last_name"
                  class="block mb-2 border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
                />
  
            </div>
            <div>
                <label for="Phone">Phone</label>
                <input
                  type="text"
                  id="Phone"
                  placeholder="Enter Phone Number"
                  v-model="adminInfo.phone"
                  class="block mb-2 border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
                />
  
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
                <label for="Email">Email</label>
                <input
                  type="email"
                  id="Email"
                  placeholder="Enter Admin Email"
                  v-model="adminInfo.email"
                  class="block mb-2 border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
                />
  
            </div>
            <div>
                <label for="Address">Address</label>
                <input
                  type="text"
                  id="Address"
                  placeholder="Enter Local Address"
                  v-model="adminInfo.address"
                  class="block mb-2 border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
                />
  
            </div>
          </div>
      </Fieldset>
  
      <!-- Display Collected Data -->
      <div v-if="submitted" class="mt-4">
        <h2 class="text-xl font-medium">Collected Data</h2>
        <pre>
            Business Information: {{ adminInfo }}
        </pre>
      </div>
    </div>
  </template>
  
  <script setup>
  const submitted = ref(false);
  
    // Define the form fields object
    const adminInfo = reactive({
        email: '',
        phone: '',
        address: '',
        first_name: '',
        last_name: '',
    });
  // Function to handle form submission
  const handleSubmit = () => {
    submitted.value = true;
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  </style>
  