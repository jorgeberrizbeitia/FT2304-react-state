

function Events() {

  const doSomething = () => {
    console.log("patata")
  }

  const printDate = () => {
    console.log( new Date() )
  }

  const printValue = (event) => {
    console.log(event.target.value)
  }


  return (
    <div>
      
      <h3>Eventos</h3>

      <button onDoubleClick={ doSomething }>Click</button>

      <h1 onMouseEnter={printDate} >Prueba</h1>

      <input type="text" onChange={ printValue } />

    </div>
  )
}

export default Events