const queryPermissionsState = async() => {
    try {
      const {state} = await navigator.permissions.query({name: 'geolocation'});
      return state; // can be ‘prompt’, ‘granted’, or ‘denied’
    } catch (err) {
      // when the permissions-API isn't available (e.g. Safari prior to 16.0),
      // we have to assume we have to ask.
      return 'prompt';
    }
  }
const getTransform = (x:number, y:number) => x+'px,'+y+"px"

export const setup = () => {
    const htmlPerso = document.querySelector<HTMLVideoElement>('.perso')!
    // const htmlBg = document.querySelector<HTMLVideoElement>('.bg')!
    const htmlFg = document.querySelector<HTMLVideoElement>('.fg')!
    const htmlText = document.querySelector<HTMLButtonElement>('#txt')!
    
    htmlPerso.style.transform = `translate(${getTransform(90 * 0.1, -20 * 0.1)})`;

    const handleOrientation = (event: DeviceOrientationEvent)=>{
        let y = event.beta || 0; // In degree in the range [-180,180)
        let x = event.gamma || 0; // In degree in the range [-90,90)
        htmlPerso.style.transform = `translate(${getTransform(x * 0.5, y * 0.5)})`;
        htmlFg.style.transform = `translate(${getTransform(x * 0.8, y * 0.8)})`;

        htmlText.textContent = `beta : ${Math.round(Number(x) * 100) / 100}\n`;
        htmlText.textContent += `gamma: ${Math.round(Number(y) * 100) / 100}\n`;
    }
    queryPermissionsState().then(res =>{
        if(res ==='granted' ){
            window.addEventListener("deviceorientation", handleOrientation);
        }
    })
}
 