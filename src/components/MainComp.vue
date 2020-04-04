<script>
import Http from "../services/post";

export default {
    name: 'MainComp',
    data() {
        return {
            test: {0: 'MainComp'}
        }
    },
    // eslint-disable-next-line no-unused-vars
    beforeRouteEnter(to, from, next) {
        let Id = to.params.Id;
        // eslint-disable-next-line no-unused-vars
        Http.getById(Id).then(response => {
            // eslint-disable-next-line no-unused-vars
            next(vm => {
                //vm.postData = 'xyz'
                //vm.$set(vm, 'postData', response.data);
                //this.$set(this.formData, field, response.data.data[field]);
                vm.data.postData = response.data;
                vm.data.test = vm.test[0];
                //console.log(vm);
                //vm.$set(vm.data, 'postData', response.data);
            })
        })
    }
}
</script>
<template>
    <p>MainComp</p>
</template>