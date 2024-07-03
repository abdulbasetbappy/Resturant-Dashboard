<template>
  <div>
    <!-- Header -->
    <div class="flex flex-row justify-between items-center">
      <div class="flex flex-row gap-3">
            <h1 class="text-xl font-medium">Add Delivery Zones</h1>
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
     <Fieldset :legend="`Zone ${index + 1}`" v-for="(field, index) in fields" :key="index" class="mt-4 border border-gray-300 p-4 pt-0 mr-16">
        <div>
          <!--1st Row-->
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
        <!--2nd Row-->
        <div class="grid grid-cols-4 gap-4 mb-4">
          <div>
            <label class="block text-sm font-medium mb-1">Latitude</label>
            <input
                v-model="field.latitude"
                placeholder="Latitude"
                class="block mb-2 border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
            />
          </div>
          <div>
              <label class="block text-sm font-medium mb-1">Longitude</label>
            <input
                v-model="field.longitude"
                placeholder="Longitude"
                class="block mb-2 border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
            />
            </div>
          <div>
              <label class="block text-sm font-medium mb-1">Min. Cart</label>
            <input
                v-model="field.minCart"
                placeholder="Min. Cart Amount"
                class="block mb-2 border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
            />
          </div>
              <div class="h-5">
                <label class="block text-sm font-medium mb-1">Managed By</label>
                  <Dropdown v-model="field.managedBy" :options="zoneHandler" optionLabel="name" placeholder="Managed By" class=" mb-2 border border-gray-300 w-[100%] outline-none rounded-md focus:border-indigo-500" />
            </div>
          </div>
        </div>
        <!--3rd Row-->
        <label class="text-md font-medium">Delivery Charges</label>
        <div class="grid grid-cols-3 gap-4">
          <div>
            <label class="block text-sm font-medium mb-1">Min</label>
            <input
                v-model="field.minDelivery"
                placeholder="Min Delivery"
                class="block mb-2 border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
            />
            </div>
            <div>
            <label class="block text-sm font-medium mb-1">Max</label>
            <input
                v-model="field.maxDelivery"
                placeholder="Max Delivery"
                class="block mb-2 border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
            />
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Charge</label>
              <input
                v-model="field.charge"
                placeholder="Charge"
                class="block mb-2 border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
              />
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
import Dropdown from 'primevue/dropdown';



const fields = ref([{
  minCart: '',
  city: '',
  zip: '',
  state: '',
  latitude: '',
  longitude: '',
  minDelivery: '',
  maxDelivery: '',
  charge: '',
  managedBy: {},
}]); // Reactive state for form fields
const zoneHandler = reactive([
  {name:'Admin',code:'01'},
  {name:'Admin',code:'01'},
  {name:'Admin',code:'01'},
])
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

<style >
/* Add your custom styles here */
</style>
