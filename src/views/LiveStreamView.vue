<template>
    <div style="display: flex; flex-direction:row;">
        <span class="material-symbols-outlined"><div class="circle-border">menu</div></span>
        <div class="padding-box">
            
            <div class="vertical-container">
                <div class="demo-box" v-if="VideoBox_toggle"><VideoBox/></div>
                <div class="demo-box" style="display: flex; flex-direction:row; align-items: center;">
                    <span v-if="expand_toggle" @click="toggleElement('expand_toggle')" :style="{cursor: 'pointer'}" class="material-symbols-outlined">expand_less</span>
                    <span v-else @click="toggleElement('expand_toggle')" :style="{cursor: 'pointer'}" class="material-symbols-outlined">expand_more</span>
                    <p>Local Stream Info:</p>
                    
                    <span 
                    @click="toggleElement('VideoBox_toggle')" 
                    class="material-symbols-outlined"
                    style="margin-left: 43%;"
                    :style="{cursor: 'pointer'}">videocam</span>
                </div>
                <!-- render conditionally if the expan -->
                <div v-if="expand_toggle" class="local-stream-data">
                    <p>
                        <!-- add backend config in post -->
                        And all you create
                        And all you destroy
                        And all that you do
                        And all that you say
                        And all that you eat
                        And everyone you meet (everyone you meet)
                        And all that you slight
                        And everyone you fight
                        And all that is now
                        And all that is gone
                        And all that's to come
                        And everything under the sun is in tune
                        But the sun is eclipsed by the moon
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import VideoBox from '../components/VideoBox.vue'
    import Button from '../components/Button.vue'

    export default{
        name: "LiveStreamView",
        components:{
            VideoBox,
            Button,
        },
        data(){
            return{
                VideoBox_toggle: false,
                expand_toggle: false,
            }
        },
        methods:{
            toggleElement(x){
                this[x] = !this[x];
            },
            videocamColorChange(){
                console.log('color has changed to green')
            }
        },
    }
</script>

<style scoped>
    .demo-box{
      height: auto;
      width: 350px;
      background: lightgray; 
    } 
    .local-stream-data{
        border-radius:0 0 10px 10px;
        background-color: #e6e8e6;
        height: 250px;
        width: 350px;
        margin-top: 0;
    }
    .padding-box{
      margin-top: 10%;
      margin-left: auto;
      margin-right: auto;
    }
    .vertical-container{
        display:flex;
        flex-direction:column
    }
</style>