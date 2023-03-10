import videoMp4 from './assets/vanhelsing.mp4'
import videoWebm from './assets/vanhelsing.webm'

const calcAngleDegrees = (x:number, y:number) => Math.atan2(y, x) * 180 / Math.PI;

  
export const setup = () => {
    const htmlVideo = document.querySelector<HTMLVideoElement>('#video')!
    const htmlText = document.querySelector<HTMLButtonElement>('#txt')!
    const htmlTextVideo = document.querySelector<HTMLButtonElement>('#videoTime')!
    const handleOrientation = (event: DeviceOrientationEvent)=>{
        const y = Math.round(Number( event.beta ) * 100) / 100; 
        const x = Math.round(Number( event.gamma ) * 100) / 100;
      
        /* 
             360 
        */
        
        const degres = calcAngleDegrees(x || 0, y || 0) + 90
        let currentTime = degres * htmlVideo.duration / 360;
        htmlVideo.currentTime = currentTime;

        htmlText.textContent = `beta : ${Math.round(Number(x) * 100) / 100}\n`;
        htmlText.textContent += `gamma: ${Math.round(Number(y) * 100) / 100}\n`;
        htmlTextVideo.textContent = 'currentTime: '+currentTime.toString() + " degres: "+degres

    }


    htmlVideo.children[0].setAttribute('src', videoMp4)
    htmlVideo.children[1].setAttribute('src', videoWebm)
    htmlVideo.load();
    htmlVideo.addEventListener('loadedmetadata', () => {
        window.addEventListener("deviceorientation", handleOrientation);
    });
       

}


/*

current time : 

bottom = htmlVideo.currentTime / 2
left =  htmlVideo.currentTime / 4
right = htmlVideo.currentTime / 2 + htmlVideo.currentTime / 4 

position 

bottom = x = 0, y = 100



*/


