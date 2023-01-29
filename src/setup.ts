import video from './assets/vanhelsing.mp4'

export const setup = ( ) => {
    const htmlVideo = document.querySelector<HTMLButtonElement>('#video')!
    const htmlText = document.querySelector<HTMLButtonElement>('#txt')!
    const el = htmlVideo.children[0]
    el.setAttribute('src', video)
    // let gyroscope = new Gyroscope({frequency: 60});
    // console.log(gyroscope)
    // gyroscope.addEventListener('reading', (e) => {
    //   console.log(`Angular velocity along the X-axis ${gyroscope.x}`);
    //   console.log(`Angular velocity along the Y-axis ${gyroscope.y}`);
    //   console.log(`Angular velocity along the Z-axis ${gyroscope.z}`);
    // });
    // gyroscope.addEventListener('error', (e) => {
    //     console.log(e)
    // })
    // gyroscope.start();

    const handleOrientation = (event)=>{
        let x = event.beta; // In degree in the range [-180,180)
        let y = event.gamma; // In degree in the range [-90,90)
      
        htmlText.textContent = `beta : ${x}\n`;
        htmlText.textContent += `gamma: ${y}\n`;
    }

    window.addEventListener("deviceorientation", handleOrientation);
}