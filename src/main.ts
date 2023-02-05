import './style.css'
import './reset.css'
import { setup } from './setup'
import perso from './assets/layers_vanhelsing/perso.png'
import bg from './assets/layers_vanhelsing/bg.jpg'
import fg from './assets/layers_vanhelsing/fg.png'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div class="imgContainer">
      <img src=${bg} class='bg'/>
      <img src=${perso} class='perso'/>
      <img src=${fg} class='fg'/>
    </div>
    <p id="txt"></p>
`

setup()
