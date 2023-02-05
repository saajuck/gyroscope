import './style.css'
import './reset.css'
import { setup } from './setup'
import perso from './assets/layers_vanhelsing_resized/perso.png'
import bg from './assets/layers_vanhelsing_resized/bg.jpg'
import fg from './assets/layers_vanhelsing_resized/fg.png'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <p id="txt"></p>

    <div class="imgContainer">
      <p class='name' id="van">VAN</p>
      <p class='name' id="helsing">HELSING</p>
      <img src=${bg} class='bg'/>
      <img src=${perso} class='perso'/>
      <img src=${fg} class='fg'/>
    </div>
`

setup()
