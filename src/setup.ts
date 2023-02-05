
const getTransform = (x:number, y:number) => "translate("+x+','+y+")"

export const setup = () => {
    const htmlPerso = document.querySelector<HTMLVideoElement>('.perso')!
    const htmlBg = document.querySelector<HTMLVideoElement>('.bg')!
    const htmlFg = document.querySelector<HTMLVideoElement>('.fg')!
    const htmlText = document.querySelector<HTMLButtonElement>('#txt')!
    
       

    const handleOrientation = (event: DeviceOrientationEvent)=>{
        let x = event.beta || 0; // In degree in the range [-180,180)
        let y = event.gamma || 0; // In degree in the range [-90,90)
        htmlPerso.style.transform = `translate(${getTransform(x * 0.1, y * 0.1)})`;
        htmlFg.style.transform = `translate(${getTransform(x * 0.2, y * 0.2)})`;

        htmlText.textContent = `beta : ${Math.round(Number(x) * 100) / 100}\n`;
        htmlText.textContent += `gamma: ${Math.round(Number(y) * 100) / 100}\n`;
    }

    window.addEventListener("deviceorientation", handleOrientation);
}
 