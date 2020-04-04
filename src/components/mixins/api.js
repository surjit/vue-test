import Http from '../../services/post';

export default {
    props: ['title', 'model', 'formFields', 'formKeys'],
    data() {
        return {
            formData: {}
        }
    },
    created() {
        this.fetchData();
    },
    watch: {
        // eslint-disable-next-line no-unused-vars
        $route(to, from) {
            this.resetForm();
        }
    },
    methods: {
        fetchData() {
            let Id = this.$route.params.Id;
            Http.getById(Id).then(response => {
                    this.formKeys.forEach(field => {
                        this.$set(this.formData, field, response.data[field]);
                    });
            }).catch(error => {
                console.log(error);
                console.log(error.response);
            })
        },
        // eslint-disable-next-line no-unused-vars
        saveUser(e) {
            console.log(e);
        },
        createOrUpdate() {

        },
        resetForm() {
            this.formData = {};
            this.$refs.form.reset();
        }
    }
}
