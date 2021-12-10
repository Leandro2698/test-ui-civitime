import React, { useState } from 'react';
import "./home.css"
import ManSvg from '../../components/genre/ManSvg';
import WomanSvg from '../../components/genre/WomanSvg';
import SkinChoice from '../../components/choices/SkinChoice';
import TshirtChoice from '../../components/choices/TshirtChoice';

const Home = () => {
    const [choiceMan, setChoiceMan] = useState(true);
    const [choiceWoman, setChoiceWoman] = useState(true);
    const [title, setTitle] = useState("Lequel de ces deux avatars préférez-vous ?");
    const [skinColor, setSkinColor] = useState('#FCD7B8');
    const [shirtColor, setShirtColor] = useState('#B2C7C7');
    const [mariniereColor, setMariniereColor] = useState('');
    const [require, setrequire] = useState(false);
    const [error, setError] = useState('')


    const updateAvatar = (event) => {
        event.preventDefault();
        setTitle('Votre avatar est parfait !')
    }

    const handleChoices = (event) => {
        if (event.target.id === "man") {
            setChoiceMan(true);
            setChoiceWoman(false);
            setTitle("Vous avez choisis le skin homme");
            setrequire(true)
            setError('')
        }
        else if (event.target.id === "woman") {
            setChoiceWoman(true);
            setChoiceMan(false);
            setTitle("Vous avez choisis le skin femme");
            setrequire(true)
            setError('')
        }
    }


    const choiceSkinColor = (event) => {
        if (require === true) {
            setSkinColor(event.target.id)
            setError('')

        } else {
            setError('Vous devez choisir le genre de votre avatar avant sa couleur de peau')
        }
    }

    const choiceShirtColor = (event) => {

        if (require === true) {
            setError('')
            if (event.target.id === '#C0C4C7') {

                setMariniereColor('#1C3E8E')
                setShirtColor('#C0C4C7')
            } else {
                setMariniereColor('')
                setShirtColor(event.target.id)
            }
        } else {
            setError('Vous devez choisir le genre de votre avatar avant son t-shirt')
        }
    }

    const resetChoice = () => {
        setChoiceWoman(true)
        setChoiceMan(true)
        setTitle("Lequel de ces deux avatars préférez-vous ?")
        setSkinColor('#FCD7B8')
        setShirtColor('#B2C7C7')
        setMariniereColor('')
        setrequire(false)
        setError('')
    }


    return (
        <div className="container-home">
            <header className="header-home">
                <h1 className="title-header-home">PROFIL</h1>
            </header>
            <form onSubmit={updateAvatar}>

                <div className="home-content">
                    <h2 className="title-home-content">{title}</h2>
                    <div className="genre-container">
                        <ul className="genre-list">
                            <li
                                className="genre-item"
                                onClick={handleChoices}
                                id="man">
                                {choiceMan &&
                                    <ManSvg
                                        skin={skinColor}
                                        shirt={shirtColor}
                                        mariniere={mariniereColor}
                                    />}
                            </li>
                            <li
                                className="genre-item"
                                onClick={handleChoices}
                                id="woman">
                                {choiceWoman &&
                                    <WomanSvg
                                        skin={skinColor}
                                        shirt={shirtColor}
                                        mariniere={mariniereColor}
                                    />}
                            </li>
                        </ul>
                    </div>

                    <hr className="separateur" />

                    <div className="color-container">
                        <SkinChoice
                            color={choiceSkinColor}
                        />


                        <TshirtChoice
                            color={choiceShirtColor}
                        />
                    </div>

                    {require ?
                        (
                            <div className="btn-form-home">
                                <button onClick={resetChoice} className="btn-reset">Retour</button>
                                <input type="submit" className="btn-validation" value="Valider"></input>
                            </div>
                        )
                        :
                        (
                            <p className="message-error">{error}</p>
                        )
                    }
                </div>
            </form>
        </div>
    )
}

export default Home;