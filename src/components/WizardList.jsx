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

    // todo clausula de guardia para que evita duplicados

    const indexRandom = Math.floor( Math.random() * allWizards.length )
    const randomWizard = allWizards[indexRandom] // es lo que queremos añadir
    console.log(randomWizard)

    // wizards.push(randomWizard)
    // NUNCA podemos mutar/modificar/alterar el estado directamente

    const cloneWizards = JSON.parse( JSON.stringify( wizards ) )
    cloneWizards.push(randomWizard)

    setWizards( cloneWizards ) // ESTA es la funcion que demos usar para actualizar el estado

    // console.log(setWizards)

    // setWizards( [randomWizard, ...wizards] )

  }

  // JS
  return (
    <div>
      {/* JSX */}

      <button onClick={ addWizard }>Añadir</button>
      <button>Ordenar</button>

      {
      // JS
      wizards.map((eachWizard) => {
          return (
            <div key={eachWizard.id}>
              <h5>Name: {eachWizard.name}</h5>
              <p>Description: {eachWizard.description}</p>
              <button>Delete</button>
              <hr />
            </div>
          )
      })}

    </div>
  )
}

export default WizardList