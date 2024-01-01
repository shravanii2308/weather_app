import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setS] = useState("Mumbai");

    useEffect( () => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=f5683df08fb808eceb292e4c64171449~`
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson);
        };

        fetchApi();
    }, [search])

    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input
                        type="search"
                        className="inputfield"
                        onChange={(event) => { setS(event.target.value) }}
                    ></input>
                </div>
                {!city ? (
                    <p>Not Found</p>
                ) : (
                    <>
                        <div className="info-1">
                            <h2 className="location"></h2>
                            <i className="fa fa-street-view" aria-hidden="true"></i>
                            <span className="loc">{search}</span>
                        </div>
                        <div className="info-2">
                            <h1 className="temp">{city.temp}25.52° Cel</h1>
                            <h3 className="tempin_max"> Min : 5.25° Cel | Max : 5.25° Cel</h3>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};
export default Tempapp;
