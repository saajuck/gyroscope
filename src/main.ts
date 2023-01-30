import './style.css'
import { setup } from './setup'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <video autobuffer controls id="video">

     <source id="sourceMp4" src="" type="video/mp4" id="source">
     <source id="sourceWebm" src="" type="video/webm" id="source">

    </video>
    <p id="txt"></p>
    <p id="videoTime"></p>
`

setup()
