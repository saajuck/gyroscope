interface DeviceOrientationEventiOS extends DeviceOrientationEvent {
    requestPermission?: () => Promise<'granted' | 'denied'>;
  }

const requestPermission = (DeviceOrientationEvent as unknown as DeviceOrientationEventiOS).requestPermission;
const iOS = typeof requestPermission === 'function';
  
const formatPosition = (value:number, ponderation:number):string => value * ponderation + 50 +'%'

const handleOrientation = (event: DeviceOrientationEvent)=>{
    const htmlPerso = document.querySelector<HTMLImageElement>('.perso')!
    const htmlFg = document.querySelector<HTMLImageElement>('.fg')!
    const htmlText = document.querySelector<HTMLButtonElement>('#txt')!
    let y = event.beta || 0; // In degree in the range [-180,180)
    let x = event.gamma || 0; // In degree in the range [-90,90)
    htmlPerso.style.top = formatPosition(y, 0.1);
    htmlPerso.style.left = formatPosition(x, 0.1);
    htmlFg.style.top = formatPosition(y, 0.15);
    htmlFg.style.left = formatPosition(x, 0.15);

    htmlText.textContent = `beta : ${Math.round(Number(x) * 100) / 100}\n`;
    htmlText.textContent += `gamma: ${Math.round(Number(y) * 100) / 100}\n`;
}

const queryPermissions = async():Promise<void> => {
    if(iOS && requestPermission) {
        try {
            const permissionState =  await requestPermission();
            if(permissionState === 'granted'){
                window.addEventListener("deviceorientation", handleOrientation);
            }
        } catch(e) {
            const htmlText = document.querySelector<HTMLButtonElement>('#txt')!
            htmlText.textContent = 'permission not granted'
        }
    }else{
        window.addEventListener("deviceorientation", handleOrientation);
    }
}
 
export const setup = () => {
    const htmlBody = document.querySelector<HTMLBodyElement>('body')!
    console.log(htmlBody)
    if(iOS) { 
        console.log(htmlBody)
        htmlBody.addEventListener('onClick', queryPermissions)
    }else{
        window.addEventListener("deviceorientation", handleOrientation);
    }
}
