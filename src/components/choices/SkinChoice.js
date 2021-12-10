import React from 'react'
import skinLogo from '../../assets/skin.svg'
import colorA from '../../assets/color-533724.svg'
import colorB from '../../assets/color-FCCC84.svg'
import colorC from '../../assets/color-E0A39A.svg'
import colorD from '../../assets/color-FCD7B8.svg'
import "./choices.css"


const SkinChoice = (props) => {

    return (
        <div className="choice-container">
            <img className='icon-img' src={skinLogo} alt="head icon" />
            <ul className="list-color">
                <li onClick={props.color} className="color-item" id='#FCD7B8'><img src={colorD} alt="skin color" /></li>
                <li onClick={props.color} className="color-item" id='#E0A39A'><img src={colorC} alt="skin color" /></li>
                <li onClick={props.color} className="color-item" id='#FCCC84'><img src={colorB} alt="skin color" /></li>
                <li onClick={props.color} className="color-item" id='#533724'><img src={colorA} alt="skin color" /></li>
            </ul>
        </div>
    )
}

export default SkinChoice;