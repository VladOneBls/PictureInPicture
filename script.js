const videoElement = document.getElementById('video');
const button = document.getElementById('button');


// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia(); // waiting for the user to select which screen or window to share
        videoElement.srcObject = mediaStream; // passing the mediaStream into our video object as its source object
        videoElement.onloadedmetadata = () => { // when the video has loaded its metadata, it's gonna call a function that's gonna play the video
            videoElement.play();
        }
    } catch (error) {
        // Catch Error Here
    }
}

button.addEventListener('click', async () => {
    // Disable Button
    button.disabled = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
});


// On Load
selectMediaStream();