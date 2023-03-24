import React from 'react';
import preloader from '../../assets/spinner.svg';

export const Loader = () => {
    return (
        <div>
            <img src={preloader} alt="spinner" style={{width: '80px'}}/>
        </div>
    );
};