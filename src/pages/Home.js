import React from "react";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    let navigate = useNavigate(); 
    const handleClick = () =>{ 
        let path = `about`; 
        navigate(path);
    }
    return (
      <div className="home-first-wrapper">
        <div className="home-content">
            <div className="home-wrapper">
                <header>
                    <h1 className="home-h1">Welcome to my website!</h1>
                    <hr></hr>
                </header>
                <main className="home-main">
                    <p className="home-text-before-arrow">If you wish to find out more, click on the button below</p>
                    <p className="home-arrow">&darr;</p>
                    <button onClick={handleClick}>Find out more</button>
                </main>
            </div>
        </div>
      </div>
    );
};

export default Home;