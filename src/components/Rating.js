import React from 'react';

const Rating = ({ number }) => {                               
    if(!number ||  number < 1){
        return null
    }
    let jsx = Array(number).fill(number).map(i => <i class="fas fa-star"></i>)
    return jsx;
};

export default Rating;
