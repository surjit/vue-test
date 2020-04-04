<script>
import FormGenerator from "./form/Form";
import Api from './mixins/api';

export default {
    mixins:[Api],
    components: {
        'form-generator': FormGenerator
    },
    data() {
        return {
            loading: false
        }
    }
}
</script>
<template>
    <div class="row">
        <div class="col-12">
            <ValidationObserver ref="form">
                <b-form @submit.prevent="saveUser" class="p-2" novalidate>
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">{{title}}</h4>
                            <div class="row">
                                <div class="col-sm-6">
                                    <form-generator :schema="formFields" v-model="formData"></form-generator>
                                </div>
                            </div>
                            <b-button class="btn btn-primary mr-1" type="submit" variant="primary">
                                Save Changes
                            </b-button>
                        </div>
                    </div>
                </b-form>
            </ValidationObserver>
        </div>
    </div>
</template>
