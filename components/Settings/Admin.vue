<template>
  <div>
    <!-- Header -->
    <div class="flex flex-row justify-between items-center">
      <div class="flex flex-row gap-3">
        <h1 class="text-2xl font-medium">Super Admin</h1>
      </div>
      <div class="">
        <!-- Submit Button -->
        <MainButton
          label="Save"
          icon="solar:file-send-bold-duotone"
          :handleSubmit="handleSubmit"
        />
      </div>
    </div>
    <MainFileDropZone
      label=""
      v-model:file="uploadedFile"
      type="profile"
    />  
    <!-- Fields For Information -->
    <form legend="Profile Information" class="mt-4 p-4 pt-0">
      <div class="grid grid-cols-3 gap-4">
        <div>
          <label for="fname">First Name</label>
          <input
            type="text"
            id="fname"
            placeholder="Enter First Name"
            v-model="adminInfo.first_name"
          />
        </div>
        <div>
          <label for="Last_Name">Last Name</label>
          <input
            type="text"
            id="Last_Name"
            placeholder="Enter Last Name"
            v-model="adminInfo.last_name"
          />
        </div>
        <div>
          <label for="Phone">Phone</label>
          <input
            type="text"
            id="Phone"
            placeholder="Enter Phone Number"
            v-model="adminInfo.phone"
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
          />
        </div>
        <div>
          <label for="Address">Address</label>
          <input
            type="text"
            id="Address"
            placeholder="Enter Local Address"
            v-model="adminInfo.address"
          />
        </div>
      </div>
    </form>

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
  email: "",
  phone: "",
  address: "",
  first_name: "",
  last_name: "",
});
// Function to handle form submission
const handleSubmit = () => {
  submitted.value = true;
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
