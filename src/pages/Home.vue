<template>
    <div>
        
    <HomeHeader />
    <HomeCustomize />

    <!-- HOUSE PLANS -->
    <section id="house-plans" class="house-plans" v-if="getHouseWashData.length > 0">
        <div class="plans-container">
            <div class="plans-head">
                <h3>House Washing Plans</h3>
                <p>After trading for a few years we have learnt that the one size does not fit all. We try our best to
                    tailor a package that meets your particular needs and stays within your budget.</p>
            </div>

            <div class="row home-row-sm">
                <div class="col-md-6 mb-3" v-for="item in getHouseWashData" :key="item.id">
                    <!-- PLANS BODY -->
                    <div class="plans-body">
                        <div class="plans-card">
                            <div class="plans-card-head">
                                <h3>{{ item.plan_name }}</h3>
                            </div>
                            <div class="plans-card-body">
                                <div class="plans-price-list">
                                    <div class="plans-price">
                                        <span>$</span>
                                        <span>{{ item.price_sheet[0]['price'] }}</span>
                                    </div>
                                    <div class="plans-list">

                                        <div class="plans-list-item" v-for="feature in JSON.parse(item.features)" :key="feature.id">
                                            <div class="plans-list-icon">
                                                <svg v-if="feature.status" xmlns="http://www.w3.org/2000/svg" width="23" height="23"
                                                    viewBox="0 0 22 22" fill="none">
                                                    <path
                                                        d="M10.9999 1.83325C5.93992 1.83325 1.83325 5.93992 1.83325 10.9999C1.83325 16.0599 5.93992 20.1666 10.9999 20.1666C16.0599 20.1666 20.1666 16.0599 20.1666 10.9999C20.1666 5.93992 16.0599 1.83325 10.9999 1.83325ZM9.16659 15.5833L4.58325 10.9999L5.87575 9.70742L9.16659 12.9891L16.1241 6.03159L17.4166 7.33325L9.16659 15.5833Z"
                                                        fill="#009BE3" />
                                                </svg>
                                                <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM17 15.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59L15.59 7L17 8.41L13.41 12L17 15.59Z" fill="#A8A8A8"></path></svg>
                                            </div>
                                            <p :class="{ 'p-grey': (feature.status) ? false : true }">
                                                {{ feature.feature }}
                                            </p>
                                        </div>

                                    </div>
                                </div>
                                <div class="plans-btn">
                                    <button @click="addPlan(item, 'house')" :disabled="selectPlanBtn('house', item.id)">Select Plan</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <!-- PLANS BODY ENDS -->

                </div>
            </div>

        </div>
    </section>
    <!-- HOUSE PLANS ENDS -->

    <!-- ROOF PLANS -->
    <section class="roof-plans" v-if="getRoofCleanData.length > 0">
        <div class="roof-plans-box">
            <div class="plans-container">
                <div class="plans-head">
                    <h3>Roof Treatment Plans</h3>
                </div>

                <div class="row home-row-sm">
                    <div class="col-md-6 mb-3" v-for="item in getRoofCleanData" :key="item.id">
                        <!-- PLANS BODY -->
                        <div class="plans-body plans-shadow">
                            <div class="plans-card">
                                <div class="plans-card-head">
                                    <h3>{{ item.plan_name }}</h3>
                                </div>
                                <div class="plans-card-body">
                                    <div class="plans-price-list">
                                        <div class="plans-price">
                                            <span>$</span>
                                            <span>{{ item.price_sheet[0]['price'] }}</span>
                                        </div>
                                        <div class="plans-list">

                                            <div class="plans-list-item" v-for="feature in JSON.parse(item.features)" :key="feature.id">
                                            <div class="plans-list-icon">
                                                <svg v-if="feature.status" xmlns="http://www.w3.org/2000/svg" width="23" height="23"
                                                    viewBox="0 0 22 22" fill="none">
                                                    <path
                                                        d="M10.9999 1.83325C5.93992 1.83325 1.83325 5.93992 1.83325 10.9999C1.83325 16.0599 5.93992 20.1666 10.9999 20.1666C16.0599 20.1666 20.1666 16.0599 20.1666 10.9999C20.1666 5.93992 16.0599 1.83325 10.9999 1.83325ZM9.16659 15.5833L4.58325 10.9999L5.87575 9.70742L9.16659 12.9891L16.1241 6.03159L17.4166 7.33325L9.16659 15.5833Z"
                                                        fill="#009BE3" />
                                                </svg>
                                                <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM17 15.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59L15.59 7L17 8.41L13.41 12L17 15.59Z" fill="#A8A8A8"></path></svg>
                                            </div>
                                            <p :class="{ 'p-grey': (feature.status) ? false : true }">
                                                {{ feature.feature }}
                                            </p>
                                             </div>

                                        </div>
                                    </div>
                                    <div class="plans-btn">
                                        <button @click="addPlan(item, 'roof')" :disabled="selectPlanBtn('roof', item.id)">Select Plan</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <!-- PLANS BODY ENDS -->

                    </div>
                </div>

            </div>
        </div>
    </section>
    <!-- ROOF PLANS ENDS -->

     <!-- DRIVE PLANS -->
    <section class="drive-plans" v-if="getDrivewayData.length > 0">
        <div class="plans-container">
            <div class="plans-head">
                <h3>Driveway, Sidewalk, and Patio Plans</h3>
            </div>

            <div class="row home-row-sm">
                <div class="col-md-6 mb-3" v-for="item in getDrivewayData" :key="item.id">
                    <!-- PLANS BODY -->
                    <div class="plans-body">
                        <div class="plans-card">
                            <div class="plans-card-head">
                                <h3>{{ item.plan_name }}</h3>
                            </div>
                            <div class="plans-card-body">
                                <div class="plans-price-list">
                                    <div class="plans-price">
                                        <span>$</span>
                                        <span>{{ item.price_sheet[0]['price'] }}</span>
                                    </div>
                                    <div class="plans-list">

                                          <div class="plans-list-item" v-for="feature in JSON.parse(item.features)" :key="feature.id">
                                            <div class="plans-list-icon">
                                                <svg v-if="feature.status" xmlns="http://www.w3.org/2000/svg" width="23" height="23"
                                                    viewBox="0 0 22 22" fill="none">
                                                    <path
                                                        d="M10.9999 1.83325C5.93992 1.83325 1.83325 5.93992 1.83325 10.9999C1.83325 16.0599 5.93992 20.1666 10.9999 20.1666C16.0599 20.1666 20.1666 16.0599 20.1666 10.9999C20.1666 5.93992 16.0599 1.83325 10.9999 1.83325ZM9.16659 15.5833L4.58325 10.9999L5.87575 9.70742L9.16659 12.9891L16.1241 6.03159L17.4166 7.33325L9.16659 15.5833Z"
                                                        fill="#009BE3" />
                                                </svg>
                                                <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM17 15.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59L15.59 7L17 8.41L13.41 12L17 15.59Z" fill="#A8A8A8"></path></svg>
                                            </div>
                                            <p :class="{ 'p-grey': (feature.status) ? false : true }">
                                                {{ feature.feature }}
                                            </p>
                                            </div>

                                    </div>
                                </div>
                                <div class="plans-btn">
                                   <button @click="addPlan(item, 'driveway')" :disabled="selectPlanBtn('driveway', item.id)">Select Plan</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <!-- PLANS BODY ENDS -->

                </div>
            </div>

        </div>
    </section>
    <!-- DRIVE PLANS ENDS -->

    <HomeVisit />

    <!-- CONFIRMATION -->
    <section class="confirmation" v-if="Object.keys(selectedServices).length > 0">
        <div class="container">
            <div class="confirmation-content">
                <div class="confirmation-head">
                    <h3>Confirmation</h3>
                </div>
                <div class="confirmation-body">
                    <p class="choose">You choose the following services</p>

                    <div class="row confirm-content-head">
                        <div class="col-5 title">
                            <h3>Category</h3>
                        </div>
                        <div class="col-3 title">
                            <h3>Plan</h3>
                        </div>
                        <div class="col-2 title">
                            <h3>Amount</h3>
                        </div>
                        <div class="col-2 title">
                            <h3>Time <span class="title-min">(minutes)</span></h3>
                        </div>
                    </div>
                    <div class="confirm-content-body">
                        <!-- ITEM 1 -->
                        <div class="row confirm-content-item" v-for="(item,key,index) in selectedServices" :key="index">
                            <div class="col-5 item-category title">
                                <p>
                                    {{ confirmationListName(key) }}
                                </p>
                            </div>
                            <div class="col-3 item-plan title">
                                <p>{{ item.plan_name }}</p>
                            </div>
                            <div class="col-2 item-amount title">
                                <p>${{ item.price_sheet[0].price }}</p>
                            </div>

                            <div class="col-2 item-amout title">
                                <p>{{ item.price_sheet[0].time }}</p>
                            </div>

                        </div>

                        <div class="row confirm-content-item">
                            <div class="col-5 item-category title">
                                <p class="p-blue">
                                     {{ discount.name }}
                                </p>
                            </div>
                            <div class="col-3 item-plan title">
                                <p></p>
                            </div>
                            <div class="col-2 item-amount title">
                                <p>(${{ discount.price }})</p>
                            </div>
                        </div>

                        <div class="row confirm-content-item">
                            <div class="col-5 item-category title">
                                <h3 class="h-blue total">Total</h3>
                            </div>
                            <div class="col-3 item-plan title">
                                <p></p>
                            </div>
                            <div class="col-2 item-amount title">
                                <h3 class="h-blue total">${{ totalPrice }}</h3>
                            </div>
                            <div class="col-2 item-amount title">
                                <p>{{ totalTime }}</p>
                            </div>
                        </div>

                        <!-- PROCEED TO BOOKING -->
                        <div class="row mt-2">
                            <div class="ml-auto col-4 col-sm-3 col-md-2">
                                <button class="proceed-btn" @click="showDialog">Proceed</button>
                            </div>
                        </div>
                        <!-- PROCEED TO BOOKING ENDS -->
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="container">
        <div class="schedule-date" v-if="date">
             <p>Schedule Date: {{ date }}</p>
        </div>
        <HomeDialog @emitDate="emitDate" :active="active" @hideDialog="active = false" />
    </div>

     <!-- SIGNATURE -->
    <section class="signature" v-if="date">
        <div class="signature-box">
            <div class="container">
                <div class="signature-content">
                    <p>Please leave your signature below</p>
                    {{ form }}
                    <form @submit.prevent="formHandler">
                    <div class="signature-content-inner">
                        <div class="signature-input">
                                <input type="text" name="" v-model.trim="signature">
                                <p v-if="signatureError" class="signature-error">{{ signatureError }}</p> 
                        </div>
                        <div class="signature-btn">
                            <button>I'm Ready to Schedule</button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <HomeFooter />

    </div>
</template>

<script>
// import DatePicker from 'v-calendar/lib/components/date-picker.umd'
import HomeHeader from '../components/Home/HomeHeader.vue'
import HomeCustomize from '../components/Home/HomeCustomize.vue'
import HomeVisit from '../components/Home/HomeVisit.vue'
import HomeDialog from '../components/Home/Dialog/HomeDialog.vue'
import HomeFooter from '../components/Home/HomeFooter.vue'
import _ from 'lodash';
import axios from 'axios'

export default {
    name: 'home',
    components: {
        HomeHeader,
        HomeCustomize,
        HomeFooter,
        HomeVisit,
        HomeDialog
        // DatePicker
    },
    data() {
        return {
            date: '',
            active: false,
            quoteFormData: [],
            selectedServices: {},
            discount: {
                name: 'Two Plus Service Discount of 15%',
                price: 20
            },
            totalPrice: 0,
            totalTime: 0,
            signature: '',
            signatureError: '',
            form: ''
        }
    },
    computed: {
        getHouseWashData() {
            return this.$store.getters.getHouseWashData;
        },
        getRoofCleanData() {
            return this.$store.getters.getRoofCleanData;
        },
        getDrivewayData() {
            return this.$store.getters.getDrivewayData;
        }
    },
    methods: {
        formHandler() {

            if(this.signature == '') {
                this.signatureError = 'Please enter your signature'
                return;
            }

            let form = {
                scheduleDate: this.date,
                selectedPlans: this.selectedPlansFormattedData(),
                totalPrice: this.totalPrice,
                totalTime: this.totalTime,
                signature: this.signature,
                quoteId: this.$store.getters.getQuoteId,
                email: this.$store.getters.getEmail
            }

            axios.post(`/api/update_quote`, form).then((response) => {
                if(response.data.status == 200) {
                    this.$router.push({ name: 'success', query: {
                        'hash_id': response.data.quote_id,
                        'email': response.data.email
                    }});
                }
            }).catch((err) => {
               console.log(err);
            });
        },
        addPlan(feature, type) {
            if(type == 'house') {
              this.selectedServices = Object.assign({}, this.selectedServices, { ['house'] : feature});

            } else if(type == 'roof') {
                this.selectedServices = Object.assign({}, this.selectedServices, { ['roof'] : feature});
            } else if(type == 'driveway') {
                this.selectedServices = Object.assign({}, this.selectedServices, { ['driveway'] : feature});
            }
            this.calcTotalPrice();
            this.calcTotalTime();
        },
        selectPlanBtn(key, itemId) {
            if(_.has(this.selectedServices,key)) {
                return this.selectedServices[key].id == itemId ? true : false
            }
           return false;
        },
        confirmationListName(key) {
            if(key == 'house') {
                return 'House Plans';
            } else if(key == 'roof') {
                return 'Roof Treatment Plans';
            } else if(key == 'driveway') {
                return 'Driveway, Sidewalk, and Patio Plans';
            }
        },
        calcTotalPrice() {
            let price = 0;

            _.forOwn(this.selectedServices, function(value) { 
                price += value.price_sheet[0].price;
            });

            this.totalPrice = price - this.discount.price;
        },
        calcTotalTime() {
            let time = 0;
            _.forOwn(this.selectedServices, function(value) {
                time += parseInt(value.price_sheet[0].time);
            });

            this.totalTime = time;
        },
        selectedPlansFormattedData() {
            let plansArr = [];
            _.forOwn(this.selectedServices, function(value) { 
                plansArr.push(value.id);
            });
            return plansArr;
        },  
        emitDate(date) {
            this.date = date 
        },
        showDialog() {
            this.active = true;
        },
        getRouteParams() {

            if(_.has(this.$route.query, 'hash_id') && _.has(this.$route.query, 'email')) {

               axios.get('/api/get_quote', {
                   params: {
                       'hash_id': this.$route.query.hash_id,
                       'email': this.$route.query.email
                   }
               }).then((response) => {

                   if(response.data.status == 500) {
                       this.$router.push({ name: 'quote' });
                   } else if(response.data.quote_status == 3) {
                       this.$router.push({ name: 'success', query: {
                           'hash_id': response.data.quote_id,
                           'email': response.data.email
                       }});
                   }

                   this.$store.dispatch('addQuoteFormData', response.data);

               }).catch((err) => {
                   console.log(err);
               });
            } else {
                this.$router.push({ name: 'quote' });
            }
        }
    },
    mounted() {
        this.getRouteParams();
    }
}
</script>