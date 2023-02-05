interface DeviceOrientationEventiOS extends DeviceOrientationEvent {
    requestPermission?: () => Promise<'granted' | 'denied'>;
  }

const requestPermission = (DeviceOrientationEvent as unknown as DeviceOrientationEventiOS).requestPermission;
const iOS = typeof requestPermission === 'function';
  
const queryPermissions = async():Promise<'granted' | 'denied'> => {
    if(iOS && requestPermission) {
    try {
        const permissionState =  await requestPermission();
        return permissionState
      } catch(e) {
       return "denied";
      }
    }else{
        return 'granted'
    }
  }
  

export const setup = () => {
    const htmlPerso = document.querySelector<HTMLVideoElement>('.perso')!
    // const htmlBg = document.querySelector<HTMLVideoElement>('.bg')!
    const htmlFg = document.querySelector<HTMLVideoElement>('.fg')!
    const htmlText = document.querySelector<HTMLButtonElement>('#txt')!
     
    const handleOrientation = (event: DeviceOrientationEvent)=>{
        let y = event.beta || 0; // In degree in the range [-180,180)
        let x = event.gamma || 0; // In degree in the range [-90,90)
        htmlPerso.style.top = `${(y + 50) * 0.05}%`;
        htmlPerso.style.left = `${x + 50* 0.05}%`;
        htmlFg.style.top = `${y+ 50 * 0.07}%`;
        htmlFg.style.left = `${x+ 50 * 0.07}%`;

        htmlText.textContent = `beta : ${Math.round(Number(x) * 100) / 100}\n`;
        htmlText.textContent += `gamma: ${Math.round(Number(y) * 100) / 100}\n`;
    }
    queryPermissions().then(res =>{
        if(res ==='granted' ){
            window.addEventListener("deviceorientation", handleOrientation);
        }
    })
}
 