
<template>
    <div class="card">
        <DataTable class="p-4 pt-0" v-model:filters="filters" :value="customers" paginator showGridlines :rows="10" dataKey="id"
                filterDisplay="menu" :loading="loading" :globalFilterFields="['ID','name', 'country.name', 'representative.name', 'balance', 'status']">
            <template #header>
                <div class="flex justify-between">
                    <Button type="button" icon="pi pi-filter-slash" class="bg-indigo-600 px-4 text-indigo-50" label="Clear" outlined @click="clearFilter()" />
                        <IconField iconPosition="left">
                        <InputIcon>
                            <i class="pi pi-search" />
                        </InputIcon>
                        <InputText v-model="filters['global'].value" class="pl-10 py-1 border border-gray-300" placeholder="Keyword Search" />
                    </IconField>
                </div>
            </template>
            <template #empty> No customers found. </template>
            <template #loading> Loading customers data. Please Wait... </template>  
            <!--ID-->          
            <Column field="ID" header="ID" style="min-width: 4rem">
                <template #body="{ data }">
                    #{{ data.id }}
                </template>
            </Column>
            <!--CustomerName-->
            <Column field="name" header="Customer" style="min-width: 12rem">
                <template #body="{ data }">
                    {{ data.name }}
                </template>
            </Column>
            <!--Delivery Type-->
            <Column header="Delivery Type" filterField="representative" :showFilterMatchModes="false" :filterMenuStyle="{ width: '14rem' }" style="min-width: 9rem">
                <template #body="{ data }">
                        <span>Pickup</span>
                </template>
            </Column>
            <!--Date-->
            <Column header="Date" filterField="date" dataType="date" style="min-width: 6rem">
                <template #body="{ data }">
                    7 Days Ago
                </template>
            </Column>
            <!--Payment Methods-->
            <Column header="Payment" filterField="date" dataType="date" style="min-width: 6rem">
                <template #body="{ data }">
                    <p>Cash On</p>
                </template>
            </Column>
            <!--Total-->
            <Column header="Total" filterField="balance" dataType="numeric" style="min-width: 4rem">
                <template #body="{ data }">
                    {{ formatCurrency(data.balance) }}
                </template>
            </Column>
            <!--Status-->
            <Column header="Status" field="status" :filterMenuStyle="{ width: '4rem' }" style="min-width: 4rem">
                <template #body="{ data }">
                    <Tag :value="data.status" :severity="getSeverity(data.status)" />
                </template>
            </Column>
            <!--Actions-->
            <Column header="Actions" field="status" :filterMenuStyle="{ width: '4rem' }" class="flex justify-center items-center" style="min-width: 4rem">
                <template #body="{ data }">
                    <button class="bg-indigo-200 text-indigo-600 px-2 py-1 rounded-md">
                        <i class="pi pi-file-edit" style="font-size: 1.1rem;"></i>
                    </button>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script>
import { CustomerService } from '../service/CustomerService.js';
import { FilterMatchMode, FilterOperator } from 'primevue/api';

export default {
    data() {
        return {
            customers: null,
            filters: null,
            representatives: [
                { name: 'Amy Elsner', image: 'amyelsner.png' },
                { name: 'Anna Fali', image: 'annafali.png' },
                { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
                { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
                { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
                { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
                { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
                { name: 'Onyama Limba', image: 'onyamalimba.png' },
                { name: 'Stephen Shaw', image: 'stephenshaw.png' },
                { name: 'XuXue Feng', image: 'xuxuefeng.png' }
            ],
            statuses: ['Canceled', 'Pending', 'Processing', 'Completed'],
            loading: true
        };
    },
    created() {
        this.initFilters();
    },
    mounted() {
        CustomerService.getCustomersMedium().then((data) => {
            this.customers = this.getCustomers(data);
            this.loading = false;
        });
    },
    methods: {
        formatDate(value) {
            return value.toLocaleDateString('en-US', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            });
        },
        formatCurrency(value) {
            return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        },
        clearFilter() {
            this.initFilters();
        },
        initFilters() {
            this.filters = {
                global: { value: null, matchMode: FilterMatchMode.CONTAINS },
                name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
                'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
                representative: { value: null, matchMode: FilterMatchMode.IN },
                date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
                balance: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
                status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
                activity: { value: [0, 100], matchMode: FilterMatchMode.BETWEEN },
                verified: { value: null, matchMode: FilterMatchMode.EQUALS }
            };
        },
        getCustomers(data) {
            return [...(data || [])].map((d) => {
                d.date = new Date(d.date);

                return d;
            });
        },
        getSeverity(status) {
            switch (status) {
                case 'unqualified':
                    return 'danger';

                case 'qualified':
                    return 'success';

                case 'new':
                    return 'info';

                case 'negotiation':
                    return 'warning';

                case 'renewal':
                    return null;
            }
        }
    }
};
</script>