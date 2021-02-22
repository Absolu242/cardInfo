import React, { useState } from "react"


import imgHolder from "../images/profile.jpg"
import Visa from "./svg/Visa"
import Apay from "./svg/Apay"
import Paypal from "./svg/Paypal"
import Mastercard from "./svg/Mastercard"
import "../style/PassengerInfo.css"


export default function PassengerInfo({ item }) {
  const [isHide, setHide] = useState(false)
  return (
    <>
      <div className="card">
        <div className="card__content">
          <div className="card__top">
            <span>
              <p>PASSENGER INFO</p>
            </span>
            <span className="switch">
              Hide information
              <span className="switch-btn" onClick={() => setHide(!isHide)}>
                {isHide ? (
                  <i className="fas fa-eye-slash    "></i>
                ) : (
                  <i className="fas fa-eye    "></i>
                )}
              </span>
            </span>
          </div>

          <div className="card__main">
            <div className="card__main--left">
              <span className="name">
                <img src={isHide ? imgHolder : item.image} alt="user" />
                <span>
                  <h2>{isHide ? "************" : item.name}</h2>
                  <p>{isHide ? "*" : item.interaction} interactions</p>
                </span>
              </span>
              <div className="card__main--userInfo">
                <p>Email</p>
                <span>{isHide ? "*********************" : item.email}</span>
              </div>
              <div className="card__main--userInfo">
                <p>Phone</p>
                <span>{isHide ? "***************" : item.phone}</span>
              </div>
              <div className="card__main--userInfo">
                <p>Location</p>
                <span>{isHide ? "*********" : item.location}</span>
              </div>
            </div>

            <div className="card__main--right">
              <div className="pay">
                <Paypal />
              </div>
              <div className="pay">
                <Visa />
              </div>
              <div className="pay">
                <Mastercard />
              </div>
              <div className="pay">
                <Apay />
              </div>
            </div>
          </div>

          <div className="card__bottom">
            <div className="card__bottom--traget">
              <span>
                <span className="icon blueIcon">
                  <i className="fas fa-check    "></i>
                </span>
                <h2>{item.placeOne.name}</h2>
                <p>{item.placeOne.address}</p>
              </span>

              <span className="line"></span>
              <span>
                <span className="icon greenIcon">
                  <i className="fas fa-map-marker-alt    "></i>
                </span>
                <h2>{item.placeTwo.name}</h2>
                <p>{item.placeTwo.address}</p>
              </span>
            </div>

            <div className="card__bottom--details">
              <div className="card__bottom--detail">
                <span>{item.distance} km</span>
                <p>Distance</p>
              </div>

              <div className="card__bottom--detail">
                <span>{item.time} min</span>
                <p>Time</p>
              </div>

              <div className="card__bottom--detail">
                <span>${item.price}</span>
                <p>Price</p>
              </div>

              <div className="card__bottom--detail">
                <span>{item.energy} kWh</span>
                <p>Energy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
