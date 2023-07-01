<template>
    <div 
        class="margin-box"
        style= "border:.5px solid black; 
                border-radius: 10px; 
                width: 300px;
                height: 100px">
        <p style="font-size: small;">Enter code to access Admin Account:</p>
        <form @submit.prevent="submitCode">
        <input v-model="code" type="password" name="code" value placeholder="Code"/>
        <button type="submit" name="button" class="dg-btn">Submit</button>
        </form>
    </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
    export default {
        name: "LoginForm",
        components:{},
        setup(){
            const store = useStore();
            const router = useRouter();

        let code = ref("");
        function submitCode() {
        if (code.value === "<@:)") {
            store.dispatch("verifyCode", true);
        } else {
            store.dispatch("verifyCode", false);
        }
        // Navigate if correct code, alert if not correct
        if (store.state.allowAccess) {
            router.push({ name: "camera-test" });
        } else {
            alert("Incorrect code");
        }
        code.value = "";
        }

        return { code, submitCode };
     },
    };
</script>

<style>
    .margin-box{
        margin-top:10vh;
        margin-left: auto;
        margin-right: auto;
    }
</style>