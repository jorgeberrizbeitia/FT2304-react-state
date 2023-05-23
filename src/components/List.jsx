function List() {

  const someArr = ["patata", "banana", "lechuga", "tomate", "patata"];
  // el map crea un nuevo array con cada uno de los elementos un poco modificados

  // const someJsx = [<p>patata</p>, <p>banana</p>, <p>lechuga</p>, <p>tomate</p>]

  const ninjaTurtles = [
    {
      name: "leonardo",
      color: "blue", 
      weapon: "katana",
    },
    {
      name: "raphael",
      color: "red",
      weapon: "sai",
    },
    {
      name: "donatello",
      color: "purple",
      weapon: "bo",
    },
    {
      name: "michelangelo",
      color: "orange",
      weapon: "nunchaku",
    },
    {
      name: "splinter",
      color: "gray",
      weapon: "cane",
    }
  ]

  return (
    <div>
      <h3>Lista</h3>

      {someArr.map((eachElement, index) => {
        return <p key={index}>{eachElement}</p>;
      })}

      <div>
        {ninjaTurtles.map((eachElement, index) => {

          

          return (
            <div key={index} style={ {backgroundColor: eachElement.color} }>
              <h3>{eachElement.name === "splinter" ? "🐀" : "🐢" }</h3>
              <p>name: {eachElement.name} 
                {/* <span>{eachElement.name === "raphael" ? " ⭐" : undefined }</span> */}
                {eachElement.name === "raphael" ? <span>⭐</span> : null}
                {/* {eachElement.name === "raphael" && <span>⭐</span>} */}
              </p>
              <p>arma: {eachElement.weapon}</p>
            </div>
          )
        })}
      </div>

    </div>
  );
}

export default List;
