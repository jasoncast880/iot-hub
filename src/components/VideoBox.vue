<template>
    <div >
        <body>
            <video id="webcamVideo" autoplay playsinline></video>
        </body>
    </div>
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
      height: 250px;
      width: 350px;
      /* background-color: lightgray;
      border: 5px solid lightgray; */
    }

</style>