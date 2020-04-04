<script>
import Layout from './layouts/main';
import Http from '../services/post';

/**
 * Add-Edit component
 */
export default {
    components: {Layout},
    data() {
        return {
            posts:[]
        }
    },
    created() {
        this.fetchData()
    },
    methods:{
        fetchData() {
            Http.get().then(response => {
                this.posts = response.data
            }).catch(error => {
                console.log(error);
                console.log(error.response);
            })
        },
    }
}
</script>
<template>
    <Layout>
        <b-list-group>
            <b-list-group-item v-for="(post, index) in posts.slice(80)" v-bind:key="index" href="javascript:;" @click="$router.push('/post/edit/'+post.id)" class="flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{{post.title}}</h5>
                    <small class="text-muted">{{post.id}} days ago</small>
                </div>
                <p class="mb-1">
                    {{post.body}}
                </p>
                <small class="text-muted">Donec id elit non mi porta.</small>
            </b-list-group-item>
        </b-list-group>
    </Layout>
</template>
