// 1. Listar 3 elementos del json en la pagina
// 2. Un boton que agregue un wizard aleatorio del json a la pagina
// 3. Un boton que ordene todos los wizard de la pagina alfabeticamente
// 4. Un boton en cada wizard que pueda eliminarlo de la pagina
import { useState } from "react"

// const allWizards = require("../data/wizards.json")
import allWizards from "../data/wizards.json"
console.log(allWizards)

function WizardList() {

  // const threeWizards = allWizards.slice(0, 3)
  // const threeWizards = [ allWizards[112], allWizards[64], allWizards[162] ]
  const [ wizards, setWizards ] = useState([ allWizards[112], allWizards[64], allWizards[162] ])

  // cuando creamos un estado
  // 1. Cuando hay info que cambia por interacciones del usuario
  // 2. Cuando hay info que cambia por acciones automaticas de la pagina
  // 3. Cuando nos traemos Data de un lugar externo (API o nuestro Server)

  const addWizard = () => {
    // aqui va la logica de añadir un nuevo hechicero
    console.log("probando añadir hechicero")

    // clausula de guardia para evitar añadir más elementos de los que puedo
    if (allWizards.length === wizards.length) {
      console.log("ya has añadido a todos")
      return
    }

    // todo clausula de guardia para que evita duplicados

    const indexRandom = Math.floor( Math.random() * allWizards.length )
    const randomWizard = allWizards[indexRandom] // es lo que queremos añadir
    console.log(randomWizard)

    // logica para prevenir duplicados
    let isDuplicated = false;
    wizards.forEach((eachWizard) => {
      if (eachWizard.id === randomWizard.id) {
        isDuplicated = true;
      }
    })

    if (isDuplicated === true) {
      console.log("elemento duplicado. Activando recursion")
      addWizard()
      return
    }


    // wizards.push(randomWizard)
    // * NUNCA podemos mutar/modificar/alterar el estado directamente

    const cloneWizards = JSON.parse( JSON.stringify( wizards ) )
    cloneWizards.push(randomWizard)




    setWizards( cloneWizards ) // ESTA es la funcion que demos usar para actualizar el estado

    // console.log(setWizards)

    // setWizards( [randomWizard, ...wizards] )

  }

  const wizardOrder = () => {
    console.log("esto funciona?")

    // wizards
    // sort

    // podriamos usar toSorted para no tener que clonar

    const cloneWizards = JSON.parse( JSON.stringify(wizards) )

    cloneWizards.sort((wizard2, wizard1) => {
      // return 1 o -1 o 0
      if (wizard2.name > wizard1.name) {
        return 1
      } else if (wizard2.name < wizard1.name) {
        return -1
      } else {
        return 0
      }
    })

    // cloneWizards.sort((wizard2, wizard1) => {
    //   return wizard2.name > wizard1.name ? 1 : -1
    // })

    // cloneWizards.sort((a, b) => a.name > b.name ? 1 : -1)
    // cloneWizards.sort((a, b) => a.name.localeCompare(b.name))

    // setWizards => actualizar el estado y re-renderizer el componente
    setWizards( cloneWizards )

  }

  const handleDeleteWizard = (index) => {
    console.log("intentando borrar wizard", index)

    // borrar por id o borrar por indice
    // splice, filter, slice

    const cloneWizards = JSON.parse( JSON.stringify( wizards ) )
    cloneWizards.splice( index, 1 )


    // setWizards(nuevo valor)
    setWizards( cloneWizards )

  }


  // JS
  return (
    <div>
      {/* JSX */}

      <button onClick={ addWizard }>Añadir</button>
      <button onClick={ wizardOrder }>Ordenar</button>

      {
      // JS
      wizards.map((eachWizard, index) => {
          return (
            <div key={eachWizard.id}>
              <h5>Name: {eachWizard.name}</h5>
              <p>Description: {eachWizard.description}</p>
              {/* cuando necesitamos pasar un argumento a una funcion de evento. la envolvemos en una funcion anonima */}
              <button onClick={ () => handleDeleteWizard(index) }>Delete</button>
              <hr />
            </div>
          )
      })}

    </div>
  )
}

export default WizardList