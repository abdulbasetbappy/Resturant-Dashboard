<template>
  <div>
    <!-- Header -->
    <div class="flex flex-row justify-between items-center">
      <div class="flex flex-row gap-3">
            <h1 class="text-xl font-medium">Add Field</h1>
            <Button
                class="youtube px-4 py-1 bg-gray-200"
                aria-label="Youtube"
                @click="addField"
            >
                <i class="pi pi-plus"></i>
            </Button>
      </div>
      <div class="mr-16">
            <!-- Submit Button -->
            <button class="mt-4 bg-indigo-500 px-4 py-2 rounded-lg text-blue-50" @click="handleSubmit">Save</button>
      </div>
    </div>

    <!-- Dynamic Form Fields -->
     <Fieldset :legend="`Location ${index + 1}`" v-for="(field, index) in fields" :key="index" class="mt-4 border border-gray-300 p-4 pt-0 mr-16">
        <div>
        <label class="block text-sm font-medium mb-1">Name</label>
        <input
            v-model="field.name"
            placeholder="Name"
            class="block mb-2 border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
        />
        <div class="grid grid-cols-2 gap-4">
            <div>
            <label class="block text-sm font-medium mb-1">Address</label>
            <Textarea
                v-model="field.address"
                placeholder="Address"
                class="block mb-2 h-[100px] border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
            />
            </div>
            <div>
            <label class="block text-sm font-medium mb-1">Latitude</label>
            <input
                v-model="field.latitude"
                placeholder="Latitude"
                class="block mb-2 border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
            />
            <label class="block text-sm font-medium mb-1">Longitude</label>
            <input
                v-model="field.longitude"
                placeholder="Longitude"
                class="block mb-2 border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
            />
            </div>
        </div>
        <div class="grid grid-cols-3 gap-4">
            <div>
            <label class="block text-sm font-medium mb-1">City</label>
            <input
                v-model="field.city"
                placeholder="City"
                class="block mb-2 border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
            />
            </div>
            <div>
            <label class="block text-sm font-medium mb-1">Zip</label>
            <input
                v-model="field.zip"
                placeholder="Zip"
                class="block mb-2 border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
            />
            </div>
            <div>
            <label class="block text-sm font-medium mb-1">State</label>
            <input
                v-model="field.state"
                placeholder="State"
                class="block mb-2 border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
            />
            </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
            <div>
            <label class="block text-sm font-medium mb-1">Phone</label>
            <input
                v-model="field.phone"
                placeholder="Phone"
                class="block mb-2 border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
            />
            </div>
            <div>
            <label class="block text-sm font-medium mb-1">Email</label>
            <input
                v-model="field.email"
                placeholder="Email"
                class="block mb-2 border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
            />
            </div>
        </div>
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
import { ref, reactive } from "vue";
import Button from "primevue/button";

const fields = ref([{
  name: '',
  address: '',
  city: '',
  zip: '',
  state: '',
  phone: '',
  email: '',
  latitude: '',
  longitude: ''
}]); // Reactive state for form fields
const submitted = ref(false);

// Function to add a new field
const addField = () => {
  fields.value.push({
    name: "",
    address: "",
    city: "",
    zip: "",
    state: "",
    phone: "",
    email: "",
    latitude: "",
    longitude: "",
  });
};

// Function to handle form submission
const handleSubmit = () => {
  submitted.value = true;
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
