const arrow = document.querySelector(".photoNext a")
const firstFotoUrl = document.querySelector(".photoBox a")["style"]["background"]

const initialFoto = firstFotoUrl.substring(
    firstFotoUrl.indexOf('https://'), 
    firstFotoUrl.lastIndexOf('?c')
)
fotos = []

fotos.push(initialFoto)

for(let i = 0; i < 50; i++) {
  setTimeout(()=> {
    arrow.click()
      
    let fotoUrl = document.querySelector(".photoBox a")["style"]["background"]

    let foto = fotoUrl.substring(
        fotoUrl.indexOf('https://'), 
        fotoUrl.lastIndexOf('?c')
    )

    if (foto !== initialFoto) { 
        console.log(initialFoto + " -> " + foto + " " + i) 
        fotos.push(foto)
    }
    if (foto === initialFoto) { debugger; }
    
  }, 3000 * i)
}
