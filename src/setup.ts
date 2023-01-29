import video from './assets/vanhelsing.mp4'

export const setup = () => {
    const htmlVideo = document.querySelector<HTMLVideoElement>('#video')!
    const htmlText = document.querySelector<HTMLButtonElement>('#txt')!
    const el = htmlVideo.children[0]
    el.setAttribute('src', video)
    htmlVideo.addEventListener('loadedmetadata', () => {
        console.log(htmlVideo.duration)
        htmlVideo.currentTime = 0.975;

    });
       

    const handleOrientation = (event: DeviceOrientationEvent)=>{
        let x = event.beta; // In degree in the range [-180,180)
        let y = event.gamma; // In degree in the range [-90,90)
      
        htmlText.textContent = `beta : ${Math.round(Number(x) * 100) / 100}\n`;
        htmlText.textContent += `gamma: ${Math.round(Number(y) * 100) / 100}\n`;
    }

    window.addEventListener("deviceorientation", handleOrientation);
}


/*

current time : 

bottom = htmlVideo.currentTime / 2
left =  htmlVideo.currentTime / 4
right = htmlVideo.currentTime / 2 + htmlVideo.currentTime / 4 

position 

bottom = x = 0, y = 100



*/


