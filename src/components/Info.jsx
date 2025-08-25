import image from "../assets/img/image.png";
import { SocialIcon } from 'react-social-icons'


export default function Info() {
    return (
        <header>
            <section className="info">
                <img src={image} alt="Marius Ludvigsen" />
                <h1>Marius Ludvigsen</h1>
                <p className="fullstack">Fullstack Developer</p>
                <p><a href="">github.com/MariusREL</a></p>
            </section>
            <section className="btn-container">
                <button className="btn e-mail"> 
                    <i className="fi fi-rr-envelope"></i>
                    <p>Email</p>
                </button>
                <button className="btn linkedIn">
                    <SocialIcon network='linkedin' style={{ height: 20, width: 20 }} bgColor="#fff" fgColor="#5093E2"/>
                    <p>LinkedIn</p>
                </button>
            </section>
        </header>
    );
}
