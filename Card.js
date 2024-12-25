import React from 'react'

function Card(props){
    return (
        <div className='card'>
            <img className='imgSize' src={props.img} alt='Card demos' width="10%" height="250"/>
            <div className='card-body'>
                <h4 className='cardTitle'>{props.title}</h4>
                <p class="card-text">{props.text}</p>
                <a href={props.link} class="btn btn-primary stretched-link">
                    <button>{props.btnTxt}</button>
                    </a>
            </div>
            <br/><br/>
        </div>
    );  
}
export default Card;