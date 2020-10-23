import React from 'react';
import './AppDetails.css';

export default function AppDetails(props) {
    return (
        <div className="AppDetails">
            <h2>{ props.App }</h2>


            <div className="app_category">{ props.Category }</div>
            <div className="app_rating">{ props.Rating }</div>
            <div className="app_size">{ props.Size }</div>
            <div className="app_downloads">{ props.Installs }</div>

        </div>
    )
} 