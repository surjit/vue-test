<script>
export default {
    props: ['postData', 'test', 'test_b'],
    created() {
        console.log('CreateEdit created');
        console.log(this.postData);
        console.log(this.test);
        console.log(this.test_b);
        console.log('');
    },
    mounted() {
        console.log('CreateEdit mounted');
        console.log(this.postData);
        console.log(this.test);
        console.log(this.test_b);
        console.log('');
    },
    updated() {
        console.log('CreateEdit updated');
        console.log(this.postData);
        console.log(this.test);
        console.log(this.test_b);
        console.log('');
    }
}
</script>
<template>
    <div class="row" style="border:1px #ccc solid">
        <div class="col-12">
            <input type="text" placeholder="text" :value="test">
            <pre>
                {{postData}} test={{test}} test_b={{test_b}}
            </pre>
        </div>
    </div>
</template>
