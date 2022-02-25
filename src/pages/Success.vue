<template>
    <div>
        <h3>Success</h3>
    </div>
</template>

<script>

import axios from 'axios'
import _ from 'lodash'

export default {
    name: 'success',
    methods: {
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
                   } else if(response.data.quote_status == 1) {
                       this.$router.push({ name: '/pricing', query: {
                           'hash_id': response.data.hash_id,
                           'email' : response.data.email
                        }});
                   }
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

<style scoped>

</style>