import videoMp4 from './assets/vanhelsing.mp4'
import videoWebm from './assets/vanhelsing.webm'

const calcAngleDegrees = (x:number, y:number) => Math.atan2(y, x) * 180 / Math.PI;

  
export const setup = () => {
    const htmlVideo = document.querySelector<HTMLVideoElement>('#video')!
    const htmlText = document.querySelector<HTMLButtonElement>('#txt')!
    const htmlTextVideo = document.querySelector<HTMLButtonElement>('#videoTime')!
    const handleOrientation = (event: DeviceOrientationEvent)=>{
        const y = event.beta; 
        const x = event.gamma;
      
        htmlText.textContent = `beta : ${Math.round(Number(x) * 100) / 100}\n`;
        htmlText.textContent += `gamma: ${Math.round(Number(y) * 100) / 100}\n`;
        const degres = calcAngleDegrees(x || 0, y || 0)
        let currentTime = degres * htmlVideo.currentTime / 360;
        htmlVideo.currentTime = currentTime;
        console.log(currentTime, htmlTextVideo)
        htmlTextVideo.textContent = 'currentTime: '+currentTime.toString() + ' - htmlVideo.currentTime:'+htmlVideo.currentTime+ " - degres: "+degres
    }


    htmlVideo.children[0].setAttribute('src', videoMp4)
    htmlVideo.children[1].setAttribute('src', videoWebm)
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


