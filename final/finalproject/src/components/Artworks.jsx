import React, { Component } from "react";
import { useState, useEffect } from 'react';
import '../styles/Artworks.css';
import doll from '../pictures/doll.jpeg';
import alex from '../pictures/alex.jpeg';
import shin from '../pictures/shin.jpeg';
import flowers from '../pictures/flower.jpeg';
import jin from '../pictures/jin_selfie.jpeg';
import cat from '../pictures/cat.jpeg';
import bottle from '../pictures/bottle.jpeg';
import cherry from '../pictures/cherry.jpeg';
import donut from '../pictures/donut.jpeg';
import yass from '../pictures/yass.jpeg';



function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}




function Artworks(){

    const fetchTodos = async () => {
        setLoading(true);
        await timeout(1000);
        setLoading(false);
    };

    const [loading, setLoading] = useState(false);

    return(
        <div className='gallary__show' id='main__content'>
            <ul className='gallary__row1'>
                <li><img className='gallary__img' src={yass} alt='stickers'/></li>
                <li><img className='gallary__img' src={doll} alt='doll holding sparkling water'/></li>
                <li><img className='gallary__img' src={shin} alt='Nowara Shinnosuke'/></li>
            </ul>

            <ul className='gallary__row2'>
                <li><img className='gallary__img' src={flowers} alt='flowers'/></li>
                <li><img className='gallary__img' src={jin} alt="Sara's selfie"/></li>
                <li><img className='gallary__img' src={cat} alt='Cat'/></li>
            </ul>

            <ul className='gallary__row3'>
                <li><img className='gallary__img' src={bottle} alt='Boba bottles'/></li>
                <li><img className='gallary__img' src={cherry} alt='Chibi Maruko-chan'/></li>
                <li><img className='gallary__img' src={donut} alt='Unicorn donut'/></li>
            </ul>

            <ul className='gallary__row4'>
                <li><img className='gallary__img' src={alex} alt='Alex playing guitar'/></li>
                
            </ul>
            <ul className='gallary__row5'>
                
                <button className='vote__button' onClick={fetchTodos}>
                
                    {loading && <span className='loading__img'>|</span>}
                    {!loading && <span>Vote for Sara</span>}
                </button>
                
            </ul>
        </div>
    )
}

export default Artworks