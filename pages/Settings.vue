
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
                <p class="m-0">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
            </TabPanel>
            <TabPanel header="Contacts">
                <p class="m-0">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
            </TabPanel>
            <TabPanel header="Admin">
                <p class="m-0">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
            </TabPanel>
            <TabPanel header="Privecy Policy">
                <p class="m-0">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
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