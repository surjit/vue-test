<script>
    export default {
        name: 'TextInput',
        props: ['placeholder', 'label', 'name', 'value', 'rules', 'disabled'],
        computed: {
            isDisabled() {
                return this.disabled ? true : false;
            }
        }
    }
</script>
<template>
    <ValidationProvider
        mode="eager"
        v-slot="{ errors }"
        :key="name"
        :name="name"
        :rules="rules">
        <label v-if="label">{{label}}</label>
        <div class="form-group">
            <input
                type="input"
                :class="{'form-control': true, 'is-invalid' : errors[0]}"
                :placeholder="placeholder"
                autocomplete="off"
                :disabled="isDisabled"
                :value="value"
                @input="$emit('input',$event.target.value)">
            <div class="invalid-feedback" v-if="errors[0]">
                <span v-if="errors[0]">{{errors[0]}}</span>
            </div>
        </div>
    </ValidationProvider>
</template>
