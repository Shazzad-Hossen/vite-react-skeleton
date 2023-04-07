import React from 'react';
import Lottie from "lottie-react";
import loadingAnim from "../assets/loading.json";

const LoadingSpinner = () => {
    return (
        
            <Lottie className='w-[100px] fixed top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2' animationData={loadingAnim} loop={true} />
            
        
    );
};

export default LoadingSpinner;