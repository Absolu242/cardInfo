import React from "react"
import PassengerInfo from "./components/PassengerInfo"
import "./style/App.css"

import img1 from "./images/17.jpg"
import img2 from "./images/59.jpg"
import img3 from "./images/75.jpg"

const data = [
  {
    id: 1,
    image: img1,
    name: "Nora M.Buchanan",
    interaction: "4",
    email: "invision@inVisionapp.com",
    phone: "+144-3412-4422",
    location: "New York, NY",
    placeOne: {
      name: "Jackson Heights",
      address: "32-27 74th Street",
    },
    placeTwo: {
      name: "Greenpoint",
      address: "81 Gate St Brooklyn",
    },
    distance: "12.3",
    time: "42",
    price: "34.20",
    energy: "12.4",
  },
  {
    id: 2,
    name: "Absolu Leibniz",
    image: img2,
    interaction: "7",
    email: "wangleibniz@gmail.com",
    phone: "+33-4000-2482",
    location: "Paris",
    placeOne: {
      name: "Albert",
      address: "12-47 24th Street",
    },
    placeTwo: {
      name: "TourCool",
      address: "11 Gate St Hide",
    },
    distance: "16.3",
    time: "52",
    price: "104",
    energy: "22",
  },
  {
    id: 3,
    name: "Moran Good",
    image: img3,
    interaction: "2",
    email: "info@moran.com",
    phone: "+22-8973-2145",
    location: "London",
    placeOne: {
      name: "Queen Castle",
      address: "24th Queen Street",
    },
    placeTwo: {
      name: "Bridgepoint",
      address: "20 Gate St Look",
    },
    distance: "32.3",
    time: "30",
    price: "24",
    energy: "30",
  },
]

function App() {
  return (
    <div className="App">
      {data.map((item) => (
        <div className="App__item" key={item.id}>
          <PassengerInfo item={item} />
        </div>
      ))}
      {/* <div className="App__item">
        <PassengerInfo />
      </div>
      <div className="App__item">
        <PassengerInfo />
      </div> */}
    </div>
  )
}

export default App
