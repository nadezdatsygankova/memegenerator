import React from "react"
import Data from '../memesData'

export default function Meme() {

    let [value, setValue] = React.useState('');

    function addImage() {

        let memesArray = Data.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        setValue(memesArray[randomNumber].url);
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button
                    className="form--button"
                    onClick={addImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={value} className='meme--image' alt='memo' />
        </main>
    )
}