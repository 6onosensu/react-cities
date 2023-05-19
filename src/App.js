import Cities from "./components/Cities";

function App() {
  const cities = [
    {
      id: 1,
      name: "New York",
      population: 8405837,
      country: "United States",
      capital: false
    },
    {
      id: 2,
      name: "London",
      population: 8788000,
      country: "United Kingdom",
      capital: true
    },
    {
      id: 3,
      name: "Tallinn",
      population: 403980,
      country: "Estonia",
      capital: true
    },
    {
      id: 4,
      name: "Lisbon",
      population: 504718,
      country: "Portugal",
      capital: true
    },
    {
      id: 5,
      name: "München",
      population: 1471508,
      country: "Germany",
      capital: false
    }
  ]

  return (
    <div className="App">
      <Cities data={cities}/>
      Tut budet react cities
    </div>
  );
}

export default App;
