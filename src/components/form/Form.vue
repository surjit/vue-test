<template>
    <div>
        <template v-for="(field, index) in schema">
            <component
                :key="index"
                :is="field.fieldType"
                :value="formData[field.name]"
                @input="updateForm(field.name, $event)"
                v-bind="field">
            </component>
        </template>
    </div>
</template>

<script>
import TextInput from "./elements/TextInput";

export default {
    name: "FormGenerator",
    components: {TextInput},
    props: ["schema", "value"],
    data() {
        return {
            formData: this.value || {}
        };
    },
    methods: {
        updateForm(fieldName, value) {
            this.$set(this.formData, fieldName, value);
            this.$emit("input", this.formData);
        }
    }
};
</script>
