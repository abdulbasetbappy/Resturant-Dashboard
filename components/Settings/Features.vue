<template>
  <div>
    <!-- Header -->
    <div class="flex flex-row justify-between items-center">
      <div class="flex flex-row gap-3">
        <h1 class="text-2xl font-medium">Features</h1>
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

    <!-- Features -->
    <div class="mt-8">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <MainFileDropZone label="Upload Logo" v-model:file="uploadedFile" />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <MainToggle label="Facebook" label-position="right" class="mt-4" />
          <div>
            <label class="block text-sm font-medium mb-1">App ID</label>
            <input v-model="feature1" placeholder="xxxx-xxxx-xxxx-xxxx" />
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">App Secret</label>
            <input v-model="feature2" placeholder="xxxx-xxxx-xxxx-xxxx" />
          </div>
        </div>
        <div>
          <MainToggle label="Google" label-position="right" class="mt-4" />
          <div>
            <label class="block text-sm font-medium mb-1">Client ID</label>
            <input v-model="feature3" placeholder="xxxx-xxxx-xxxx-xxxx" />
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">Client Secret</label>
            <input v-model="feature4" placeholder="xxxx-xxxx-xxxx-xxxx" />
          </div>
        </div>
      </div>
      <div>
        <MainToggle label="Map" label-position="right" class="mt-4" />
        <div>
          <label class="block text-sm font-medium mb-1">API Key</label>
          <input v-model="feature3" placeholder="xxxx-xxxx-xxxx-xxxx" />
        </div>
      </div>
      <SettingsDatePicker />
    </div>
  </div>
</template>

<script setup>
const uploadedFile = ref(null);
</script>
