
<template>
    <div class="card">
        <TabView v-model:activeIndex="active">
            <TabPanel header="Locations">
                <Locations/>
            </TabPanel>
            <TabPanel header="Delivery Zones">
                <DeliveryZones/>
            </TabPanel>
            <TabPanel header="Payments">
                <Payments/>
            </TabPanel>
            <TabPanel header="Email Services">
                <EmailServices/>
            </TabPanel>
            <TabPanel header="Contacts">
                <ContactInfo/>
            </TabPanel>
            <TabPanel header="Admin">
                <Admin/>
            </TabPanel>
            <TabPanel header="Privecy Policy">
                <PrivacyPolicies/>
            </TabPanel>
        </TabView>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const active = ref(0);
definePageMeta({
        layout: 'dash-board'
})
</script>
<style >
.p-highlight > a >span {
    color: #5b45f4 ;
}
.p-tabview-title{
    color: #000000c2;
}
.p-tabview-ink-bar {
    background-color: #5b45f4;
    height: 2px;
}
</style>