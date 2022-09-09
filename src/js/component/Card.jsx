import React, { useContext } from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Card = ({ nature, properties, uid, _id }) => {
  const { actions } = useContext(Context);

  properties.imgUrlBase = "https://starwars-visualguide.com/assets/img/"
  const {
    name,
    gender,
    hair_color,
    eye_color,
    climate,
    gravity,
    population,
    model,
    passengers,
    cost_in_credits,
    imgUrlBase
  } = properties;

  return (
    <>
      {nature === "people" ? (
        <div className="card">
          <div className="img-container">
            <img
              src={`${imgUrlBase}/characters/${uid}.jpg`}
              className="card-img"
              alt={`Foto de ${name}`}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src="https://starwars-visualguide.com/assets/img/placeholder.jpg";
              }}
            />
          </div>
          <div className="card-body">
            <p className="card-title">{name}</p>
            <p className="card-text">
              Gender: {gender} <br />
              Hair-color: {hair_color} <br />
              Eye-color: {eye_color}
            </p>
            <div className="card-footer">
              <Link to={`/${nature}/${uid}`}>
                <button className="btn btn-primary"> Learn More! </button>
              </Link>
              <button
                type="button"
                className={`heart`}
                onClick={() => {
                  actions.addFavorites(_id);
                }}
              >
                {actions.isFavorite(_id)}
              </button>
            </div>
          </div>
        </div>
      ) : nature === "planets" ? (
        <div className="card">
          <div className="img-container">
            <img
              src={`${imgUrlBase}/planets/${uid}.jpg`} 
              className="card-img"
              alt={`Foto de ${name}`}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src="https://starwars-visualguide.com/assets/img/placeholder.jpg";
              }}
            />
          </div>
          <div className="card-body">
            <p className="card-title">{name}</p>
            <p className="card-text">
              Climate: {climate} <br />
              Gravity: {gravity} <br />
              Population: {population}
            </p>
            <div className="card-footer">
              <Link to={`/${nature}/${uid}`}>
                <button className="btn btn-primary"> Learn More! </button>
              </Link>
              <button
                className={`heart`}
                onClick={() => actions.addFavorites(_id)}
              >
                {actions.isFavorite(_id)}
              </button>
            </div>
          </div>
        </div>
      ) : nature === "vehicles" ? (
        <div className="card">
          <div className="img-container">
            <img
              src={`${imgUrlBase}/vehicles/${uid}.jpg`}
              className="card-img"
              alt={`Foto de ${name}`}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src="https://starwars-visualguide.com/assets/img/placeholder.jpg";
              }}
            />
          </div>
          <div className="card-body">
            <p className="card-title">{name}</p>
            <p className="card-text">
              Model: {model} <br />
              Passengers: {passengers} <br />
              Price: {cost_in_credits}
            </p>
            <div className="card-footer">
              <Link to={`/${nature}/${uid}`}>
                <button className="btn btn-primary"> Learn More! </button>
              </Link>
              <button
                className={`heart`}
                onClick={() => actions.addFavorites(_id)}
              >
                {actions.isFavorite(_id)}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex align-items-center m-5">
          <strong>Loading...</strong>
          <div
            className="spinner-border ms-auto"
            role="status"
            aria-hidden="true"
          ></div>
        </div>
      )}
    </>
  );
};

Card.propTypes = {
  nature: propTypes.string,
  properties: propTypes.object,
  uid: propTypes.string,
  _id: propTypes.string,
};

export default Card;
