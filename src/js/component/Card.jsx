import React, { useContext, useState } from 'react';
import propTypes from 'prop-types';
import { Link } from "react-router-dom"
import { Context } from "../store/appContext"


const Card = ({ nature, properties, uid, _id }) => {
    const [color, setColor] = useState("");

    const { actions } = useContext(Context);
    const { name, gender, hair_color, eye_color, climate, gravity, population, model, passengers, cost_in_credits } = properties;

    return (
        <>
            {nature === "people" ? (
                <div className="card">
                    <img src="http://via.placeholder.com/400x200" className="card-img" alt="imagen" />
                    <div className="card-body">
                        <p className="card-title">{name}</p>
                        <p className="card-text">
                            Gender: {gender}   <br />
                            Hair-color: {hair_color}  <br />
                            Eye-color: {eye_color}
                        </p>
                        <Link to={`/${nature}/${uid}`}>
                            <button className="btn btn-primary">  Learn More!  </button>
                        </Link>
                        <button
                            type='button'
                            className={`corazon negro ${color === "negro" && "like"}`}
                            onClick={() => {
                                setColor("negro")
                                actions.addFavorites(_id)
                            }}>
                            <i className="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
            ) : nature === "planets" ? (
                <div className="card">
                    <img src="http://via.placeholder.com/400x200" className="card-img" alt="imagen" />
                    <div className="card-body">
                        <p className="card-title">{name}</p>
                        <p className="card-text">
                            Climate: {climate}   <br />
                            Gravity: {gravity}  <br />
                            Population:  {population}
                        </p>
                        <Link to={`/${nature}/${uid}`}>
                            <button className="btn btn-primary">  Learn More!  </button>
                        </Link>
                        <button
                            className={`corazon negro ${color === "negro" && "like"}`}
                            onClick={() => {
                                setColor("negro")
                                actions.addFavorites(_id)
                            }}>
                            <i className="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
            ) : nature === "vehicles" ? (
                <div className="card">
                    <img src="http://via.placeholder.com/400x200" className="card-img" alt="imagen" />
                    <div className="card-body">
                        <p className="card-title">{name}</p>
                        <p className="card-text">
                            Model: {model}   <br />
                            Passengers: {passengers} <br />
                            Price: {cost_in_credits}
                        </p>
                        <div className="endButtons">
                            <Link to={`/${nature}/${uid}`}>
                                <button className="btn btn-primary">  Learn More!  </button>
                            </Link>
                            <button
                                className={`corazon negro ${color === "negro" && "like"}`}
                                onClick={() => {
                                    setColor("negro")
                                    actions.addFavorites(_id)
                                }}>
                                <i className="fas fa-heart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="d-flex align-items-center m-5">
                    <strong>Loading...</strong>
                    <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                </div>
            )}
        </>
    );
};

Card.propTypes = {
    nature: propTypes.string,
    properties: propTypes.object,
    uid: propTypes.string,
    _id: propTypes.string
}

export default Card;