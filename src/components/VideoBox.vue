<template>
    <p>Your WebCam Here</p>
    <body>
        <video id="webcamVideo" autoplay playsinline></video>
    </body>
</template>

<script>
export default{
    mounted() {
        const video=document.getElementById('webcamVideo')
        //check if getUserMedia i supported by browser
        if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
            navigator.mediaDevices.getUserMedia({video:true})
                .then(stream => {
                    //set the vid source to the webcam stream
                    video.srcObject = stream;
                })
                .catch(error => {
                    console.error('Error accessing webcam: ', error)
            });
        } else{
            console.error('getUserMedia is not supported');
        }
    },
}
   
</script>
    
<style scoped>
#webcamVideo{
      height: auto;
      width: 350px;
      border-width: 10px;
      border-color:black;
      background:grey;
    }
</style>