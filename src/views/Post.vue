<script>
import MainComp from "../components/MainComp";
import CreateEdit from '../components/CreateEdit';
import Layout from './layouts/main';

/**
 * Add-Edit component
 */
export default {
    components: {Layout, CreateEdit},
    extends:MainComp,
    data() {
        return {
            data:{
                test_b:this.test,
                postData:'abc'
            }
        }
    }
}
</script>
<template>
    <Layout>
        <CreateEdit v-bind="data" :test="test"></CreateEdit>
    </Layout>
</template>
