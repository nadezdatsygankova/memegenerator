import Troll from '../troll-face.png'

export default function Header() {
    return (
        <header className="header">
            <img src={Troll} className='header--image' alt='icon' />
            <h2 className='header--title'> Meme Generator</h2>
            <h3 className='header--project'>React Course - Project 3</h3>
        </header>
    );
}

