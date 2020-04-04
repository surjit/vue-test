<script>
    import CreateEdit from '../components/CreateEdit';
    import Layout from './layouts/main';

    /**
     * Add-Edit component
     */
    export default {
        components: {Layout, CreateEdit},
        data() {
            return {
                data: {
                    title: 'test',
                    formKeys: ['title', 'body'],
                    formFields: [
                        {
                            fieldType: "TextInput",
                            name: "title",
                            label: false,
                            placeholder: 'titletitletitletitletitletitletitletitletitletitletitletitletitletitletitle',
                            rules: "required"
                        },
                        {
                            fieldType: "TextInput",
                            name: "body",
                            label: false,
                            placeholder: 'bodybodybodybodybodybodybodybodybodybodybodybodybody',
                            rules: "required"
                        }
                    ]
                }
            }
        }
    }
</script>
<template>
    <Layout>
        <CreateEdit v-bind="data"></CreateEdit>
    </Layout>
</template>
