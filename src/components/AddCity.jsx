import React, { useState } from "react";

const AddCity = (props) => {
  const [name, setName] = useState('')
  const [population, setPopulation] = useState('')

  const add = (e) => {
    e.preventDefault()
    const id = new Date()
    const city = {id, name, population}
    props.onAdded(city)
    setName('')
    setPopulation('')
  }

  return (
    <form>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder='name' />

      <input
        value={population}
        onChange={e => setPopulation(e.target.value)}
        placeholder='population' />

      <button onClick={add}>add</button>
    </form>
  )
}

export default AddCity;