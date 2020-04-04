<script>
export default {
    props: ['postData'],
    created() {
        console.log(this.postData);
    },
    mounted() {
        console.log(this.postData);
    },
    updated() {
        console.log(this.postData);
    }
}
</script>
<template>
    <div class="row">
        <div class="col-12">
            <pre>
                <input type="text" placeholder="text" :value="postData.title">
                {{postData}}
            </pre>
        </div>
    </div>
</template>
