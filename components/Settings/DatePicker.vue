<template>
    <div class="mt-6">
      <h2 class="text-xl font-medium mb-4">Set Active Hours</h2>
  
      <!-- Weekdays Selection -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          v-for="day in days"
          :key="day.value"
          class="border-[1px] border-slate-900 p-4 rounded-lg shadow-sm"
        >
          <h3 class="text-lg font-medium mb-2">{{ day.label }}</h3>
  
          <!-- Start Time -->
          <div class="flex items-center gap-2 mb-2">
            <label class="text-sm font-medium">Start:</label>
            <input
              type="time"
              v-model="day.startTime"
              :step="timeStep"
              class="border rounded px-2 py-1"
            />
          </div>
  
          <!-- End Time -->
          <div class="flex items-center gap-2">
            <label class="text-sm font-medium">End:</label>
            <input
              type="time"
              v-model="day.endTime"
              :step="timeStep"
              class="border rounded px-2 py-1"
            />
          </div>
        </div>
      </div>
  
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  // List of days for the restaurant schedule
  const days = ref([
    { label: "Monday", value: "monday", startTime: "00:00", endTime: "24:00" },
    { label: "Tuesday", value: "tuesday", startTime: "00:00", endTime: "24:00" },
    { label: "Wednesday", value: "wednesday", startTime: "00:00", endTime: "24:00" },
    { label: "Thursday", value: "thursday", startTime: "00:00", endTime: "24:00" },
    { label: "Friday", value: "friday", startTime: "00:00", endTime: "24:00" },
    { label: "Saturday", value: "saturday", startTime: "00:00", endTime: "24:00" },
    { label: "Sunday", value: "sunday", startTime: "00:00", endTime: "24:00" },
  ]);
  
  // Step for the time picker (e.g., every 1 minute)
  const timeStep = 60; // In seconds
  
  // Function to save hours
  const saveActiveHours = () => {
    console.log("Active Hours:", days.value);
    alert("Active hours saved successfully!");
  };
  </script>
  
  <style scoped>
  /* Additional styles for layout and responsiveness */
  </style>
  