import React from 'react'
import shirtLogo from '../../assets/t-shirt.svg'
import colorA from '../../assets/color-striped.svg'
import colorB from '../../assets/color-FF1414.svg'
import colorC from '../../assets/color-88C10F.svg'
import colorD from '../../assets/color-B2C7C7.svg'
import "./choices.css"

const TshirtChoice = (props) => {

    return (

        <div className="choice-container">
            <img className="icon-img" src={shirtLogo} alt="head icon" />
            <ul className="list-color">
                <li onClick={props.color} className="color-item" id='#B2C7C7'><img src={colorD} alt="shirt color" /></li>
                <li onClick={props.color} className="color-item" id='#88C10F'><img src={colorC} alt="shirt color" /></li>
                <li onClick={props.color} className="color-item" id='#FF1414'><img src={colorB} alt="shirt color" /></li>
                <li onClick={props.color} className="color-item" id='#C0C4C7'><img src={colorA} alt="shirt color" /></li>
            </ul>
        </div>



    )
}

export default TshirtChoice;