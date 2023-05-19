import React, { useState } from 'react';

const City = (props) => {
  const city = props.cityData
  const [population, setPopulation] = useState(city.population)

  const increase = () => {
    setPopulation(population + 10)
  }

  const decrease = () => {
    setPopulation(population - 10)
  }

  const deleteCity = () => {
    props.onDelete(city.id)
  }

  return (
    <tr>
      <td>{city.name}</td>
      <td>{population}</td>
      <td>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        <button onClick={deleteCity}>delete</button>
      </td>
    </tr>
  )
}

export default City;