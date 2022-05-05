import React from 'react';
import propTypes from 'prop-types';

const DetailsCard = ({ detail, nature }) => {

    return (
        <>
            {nature == "people" ? (
                <>
                    <div className="card-details row">
                        <img src="http://via.placeholder.com/800x600" className="card-img-top col-6" alt="..." />
                        <div className="card-body col-6">
                            <p className="card-title">{detail?.name}</p>
                            <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam assumenda doloribus incidunt molestias minima aliquam dolor in, dolores eaque repellat minus ipsa nihil sunt esse.</p>
                        </div>
                    </div>
                    <hr />
                    <div className="general-details row">
                        <p className="col-2">
                            <strong>Name</strong>
                            <br />
                            {detail?.name}
                        </p>
                        <p className="col-2">
                            <strong>Birth Year</strong>
                            <br />
                            {detail?.birth_year}
                        </p>
                        <p className="col-2">
                            <strong>Gender</strong>
                            <br />
                            {detail?.gender}
                        </p>
                        <p className="col-2">
                            <strong>Height</strong>
                            <br />
                            {detail?.height}
                        </p>
                        <p className="col-2">
                            <strong>Skin Color</strong>
                            <br />
                            {detail?.skin_color}
                        </p>
                        <p className="col-2">
                            <strong>Eye Color </strong>
                            <br />
                            {detail?.eye_color}
                        </p>
                    </div>
                </>
            ) : nature == "planets" ? (
                <>
                    <div className="card-details row">
                        <img src="http://via.placeholder.com/800x600" className="card-img-top col-6" alt="..." />
                        <div className="card-body col-6">
                            <p className="card-title">{detail?.name}</p>
                            <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam assumenda doloribus incidunt molestias minima aliquam dolor in, dolores eaque repellat minus ipsa nihil sunt esse.</p>
                        </div>
                    </div>
                    <hr />
                    <div className="general-details row">
                        <p className="col-2">
                            <strong>Name</strong>
                            <br />
                            {detail?.name}
                        </p>
                        <p className="col-2">
                            <strong>Created</strong>
                            <br />
                            {detail?.created}
                        </p>
                        <p className="col-2">
                            <strong>Diameter</strong>
                            <br />
                            {detail?.diameter}
                        </p>
                        <p className="col-2">
                            <strong>Gravity</strong>
                            <br />
                            {detail?.gravity}
                        </p>
                        <p className="col-2">
                            <strong>Population</strong>
                            <br />
                            {detail?.population}
                        </p>
                        <p className="col-2">
                            <strong>Terrain</strong>
                            <br />
                            {detail?.terrain}
                        </p>
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