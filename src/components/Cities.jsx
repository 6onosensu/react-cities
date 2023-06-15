import React, { useState } from 'react';
import City from './City';
import AddCity from './AddCity';

const Cities = (props) => {
  const [cities, setCities] = useState(props.data)

  const deleteCity = (id) => {
    setCities(cities.filter(city => city.id !== id))
  }

  const addCity = (newCity) => {
    setCities([...cities, newCity])
  }

  return (
    <div>
      <input type="text" placeholder='Search..' id='search-input' className='input'/>
      <h2>Cities population</h2>
      <div>
        <AddCity onAdded={addCity} />
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Population</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cities.map(city => <City key={city.id} cityData={city} onDelete={deleteCity} />)}
        </tbody>
      </table>
    </div>
  )
}

export default Cities;