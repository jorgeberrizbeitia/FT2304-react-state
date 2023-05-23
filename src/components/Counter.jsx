import { useState } from "react";

function Counter() {

  // let counterValue = 0;
  // tenemos que hacer uso de el estado de React
  // el Estado es un Obj en React que almacena los valores cambiantes del componente
  // el Estado nos da una funcion para actualizar los valores y causar una renderización nueva del componente
  // const algo = useState(0)
  // argumento: el valor inicial que tendrá el estado
  // console.log(algo) // un array siempre con dos elementos
  // 1. El estado que estoy creando
  // 2. La funcion que actualiza el estado
  // let counterValue = algo[0]
  // const functionQueActualiza = algo[1]

  const [ counterValue, setCounterValue ] = useState(0)

  const sumarContador = () => {
    console.log("intentando sumar")
    // counterValue = counterValue + 1;
    // console.log(counterValue)
    // functionQueActualiza va a hacer dos cosas:
    // 1. Actualizar el valor del estado
    // 2. Causar una nueva renderización del componente
    setCounterValue( counterValue + 1 )
  }

  const restarContador = () => {
    if ( counterValue > 0 ) {
      setCounterValue( counterValue - 1 )
    }
  }

  return (
    <div>
      
      <h3>Contador</h3>

      <h4>{counterValue}</h4>
      <button onClick={ restarContador } disabled={counterValue <= 0 ? true : false}>Restar</button>
      <button onClick={ sumarContador }>Sumar</button>

      { counterValue === 0 && <p>Se ha terminado el dinero</p> }

    </div>
  )
}


// despues de que React renderiza de nuevo el JSX (en el dom virtual) detecta los cambios sobre el DOM y lo actualiza todo una sola vez

export default Counter