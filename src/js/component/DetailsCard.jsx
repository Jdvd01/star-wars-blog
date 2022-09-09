import React from 'react';
import propTypes from 'prop-types';

const DetailsCard = ({ detail, nature, id }) => {
    const { properties } = detail;
    return (
        <>
            {nature == "people" ? (
                <>
                <div className='cards-container'>
                    <div className="card-details row">
                        <div className='col-lg-2 col-md-6 col-sm-12 p-3 details-img'>
                            <img src={`${properties?.imgUrlBase}/characters/${id}.jpg`} 
                            className="card-img-top" 
                            alt="..." 
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null; // prevents looping
                                currentTarget.src="https://starwars-visualguide.com/assets/img/placeholder.jpg";
                            }}    
                        />
                        </div>
                        <div className="card-body col-lg-6 col-md-6 col-sm-12">
                            <p className="card-title">{properties?.name}</p>
                            <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam assumenda doloribus incidunt molestias minima aliquam dolor in, dolores eaque repellat minus ipsa nihil sunt esse.</p>
                        </div>
                    </div>
                    <hr />
                    <div className="general-details row">
                        <p className="col-lg-4 col-md-4 col-sm-12">
                            <strong>Name</strong>: {properties?.name}
                        </p>
                        <p className="col-lg-4 col-md-4 col-sm-12">
                            <strong>Birth Year</strong>: {properties?.birth_year}
                        </p>
                        <p className="col-lg-4 col-md-4 col-sm-12">
                            <strong>Gender</strong>: {properties?.gender}
                        </p>
                        <p className="col-lg-4 col-md-4 col-sm-12">
                            <strong>Height</strong>: {properties?.height}
                        </p>
                        <p className="col-lg-4 col-md-4 col-sm-12">
                            <strong>Skin Color</strong>: {properties?.skin_color}
                        </p>
                        <p className="col-lg-4 col-md-4 col-sm-12">
                            <strong>Eye Color </strong>: {properties?.eye_color}
                        </p>
                    </div>
                </div>
                </>
            ) : nature == "planets" ? (
                <>
                <div className='cards-container'>

                    <div className="card-details row">
                        <div className='col-lg-2 col-md-6 col-sm-12 p-3 details-img'>
                            <img src={`${properties?.imgUrlBase}/planets/${id}.jpg`}  
                            className="card-img-top" 
                            alt="..." 
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null; // prevents looping
                                currentTarget.src="https://starwars-visualguide.com/assets/img/placeholder.jpg";
                            }}
                        />
                        </div>
                        <div className="card-body col-lg-6 col-md-6 col-sm-12">
                            <p className="card-title">{properties?.name}</p>
                            <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam assumenda doloribus incidunt molestias minima aliquam dolor in, dolores eaque repellat minus ipsa nihil sunt esse.</p>
                        </div>
                    </div>
                    <hr />
                    <div className="general-details row">
                        <p className="col-lg-4 col-md-4 col-sm-12">
                            <strong>Name</strong>: {properties?.name}
                        </p>
                        <p className="col-lg-4 col-md-4 col-sm-12">
                            <strong>Created</strong>: {properties?.created}
                        </p>
                        <p className="col-lg-4 col-md-4 col-sm-12">
                            <strong>Diameter</strong>: {properties?.diameter}
                        </p>
                        <p className="col-lg-4 col-md-4 col-sm-12">
                            <strong>Gravity</strong>: {properties?.gravity}
                        </p>
                        <p className="col-lg-4 col-md-4 col-sm-12">
                            <strong>Population</strong>: {properties?.population}
                        </p>
                        <p className="col-lg-4 col-md-4 col-sm-12">
                            <strong>Terrain</strong>: {properties?.terrain}
                        </p>
                    </div>
                </div>
                </>
            ) : nature == "vehicles" ? (
                <>
                <div className='cards-container'>
                    <div className="card-details row">
                        <div className='col-lg-5 col-md-6 col-sm-12 p-3 details-img'>
                            <img 
                                src={`${properties?.imgUrlBase}/vehicles/${id}.jpg`}  
                                className="card-img-top" 
                                alt="..." 
                                onError={({ currentTarget }) => {
                                    currentTarget.onerror = null; // prevents looping
                                    currentTarget.src="https://starwars-visualguide.com/assets/img/placeholder.jpg";
                                }}
                            />
                        </div>
                        <div className="card-body col-lg-6 col-md-6 col-sm-12">
                            <p className="card-title">{properties?.name}</p>
                            <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam assumenda doloribus incidunt molestias minima aliquam dolor in, dolores eaque repellat minus ipsa nihil sunt esse.</p>
                        </div>
                    </div>
                    <hr />
                    <div className="general-details row">
                        <p className="col-lg-4 col-md-4 col-sm-12">
                            <strong>Name</strong>: {properties?.name}
                        </p>
                        <p className="col-lg-4 col-md-4 col-sm-12">
                            <strong>Created</strong>: {properties?.created}
                        </p>
                        <p className="col-lg-4 col-md-4 col-sm-12">
                            <strong>Length</strong>: {properties?.length}
                        </p>
                        <p className="col-lg-4 col-md-4 col-sm-12">
                            <strong>Manufacturer</strong>: {properties?.manufacturer}
                        </p>
                        <p className="col-lg-4 col-md-4 col-sm-12">
                            <strong>Model</strong>: {properties?.model}
                        </p>
                        <p className="col-lg-4 col-md-4 col-sm-12">
                            <strong>Passengers</strong>: {properties?.passengers}
                        </p>
                    </div>
                </div>
                </>
            ) : (
                <div className="d-flex align-items-center m-5">
                    <strong>Loading...</strong>
                    <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                </div>
            )}

        </>
    );
};

DetailsCard.propTypes = {
    nature: propTypes.string,
    detail: propTypes.object
}

export default DetailsCard;