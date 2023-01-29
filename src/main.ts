import './style.css'
import { setup } from './setup'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <video controls id="video">

     <source src="" type="video/mp4" id="source">

    </video>
    <p id="txt"></p>
`

setup()
