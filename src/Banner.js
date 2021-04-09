import axios from './axios';
import React, { useEffect, useState } from 'react'
import './Banner.css';
import requests from './Request';

const Banner = () => {

    const [movie,setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor( Math.random() * request.data.results.length - 1 )
                ]
            );
            return request;
        };
        fetchData();
    }, [])

    console.log(movie);
    const truncate = (string,num) => {
        return string?.length > num ? string.substr(0, num-1)  + "..." : string;
    }

    return (
        <header className="banner" style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
            backgroundSize: "cover",
            backgroundPosition: "center center",

        }}>
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.name || movie?.title || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner_description">
                    {truncate(movie?.overview,150)}
                </h1>
            </div>
            <div className="banner--fadeBottom" />
            
        </header>
    )
}

export default Banner
