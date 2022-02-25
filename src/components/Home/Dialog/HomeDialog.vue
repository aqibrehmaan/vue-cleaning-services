<template>
    <div class="dialog" :class="{ 'active': active}">
        <div class="dialog-icon-wrap">
            <span class="dialog-close-icon" @click="$emit('hideDialog')">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/></svg>
            </span>
        </div>
        <div class="dialog-date">
            <p>Select Schedule Date / Time</p>
             <v-date-picker v-model="date" mode="dateTime" :valid-hours="[0,3,4,5,8,16,20]" is24hr :timezone="timezone" :min-date="minDate" :max-date="maxDate" @input="dateHandler" :model-config="modelConfig" 
             @update:to-page="updateToPage"
             :disabled-dates="disabledDates"
             />
        </div>
    </div>
</template>

<script>
export default {
    props: ['active'],
    data() {
        return {
            minDate: new Date(),
            maxDate: "",
            date: '',
            modelConfig: {
             type: 'string',
             mask: 'YYYY-MM-DD, H:m:s', // Uses 'iso' if missing
            },
            timezone: '',
            disabledDates: {
                days: [1,2,3,4,5,6,7,8]
            }
        }
    },
    methods: {
        dateHandler() {
            this.$emit('emitDate', this.date);
        },
        updateToPage() {
           // console.log('Update to page', e);
        }
    }
}
</script>

<style>

</style>