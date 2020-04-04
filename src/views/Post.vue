<script>
import CreateEdit from '../components/CreateEdit';
import Layout from './layouts/main';
import Http from "../services/post";

/**
 * Add-Edit component
 */
export default {
    components: {Layout, CreateEdit},
    data() {
        return {
            postData:{
                postData:'abc'
            }
        }
    },
    // eslint-disable-next-line no-unused-vars
    beforeRouteEnter(to, from, next) {
        let Id = to.params.Id;
        Http.getById(Id).then(response => {
            next(vm => {
                //vm.postData = 'xyz'
                //vm.$set(vm, 'postData', response.data);
                //this.$set(this.formData, field, response.data.data[field]);
                vm.postData.postData = response.data;
                //console.log(vm);
                //vm.$set(vm.data, 'postData', response.data);
            })
        })
    }
}
</script>
<template>
    <Layout>
        <CreateEdit v-bind="postData"></CreateEdit>
    </Layout>
</template>
