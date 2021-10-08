const arrow = document.querySelector(".photoNext a")
const firstU = document.querySelector(".photoBox a")["style"]["background"]

const initialFoto = firstU.substring(
    firstU.indexOf('https://'), 
    firstU.lastIndexOf('?c')
)
fotos = []

fotos.push(initialFoto)

for(let i = 0; i < 50; i++) {
  setTimeout(()=> {
    arrow.click()
    let u = document.querySelector(".photoBox a")["style"]["background"]

    let foto = u.substring(
        u.indexOf('https://'), 
        u.lastIndexOf('?c')
    )

    if (foto !== initialFoto) { 
        console.log(initialFoto + " -> " + foto + " " + i) 
        fotos.push(foto)
    }
    if (foto === initialFoto) { debugger; }
    
  }, 3000 * i)
}
