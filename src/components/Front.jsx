import "../styles/front.css";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link as ScrollLink } from 'react-scroll';

const Front = () => {
    return (
        <section className="front-container">
            <div className="front-content">
                <p className="front-content-1">I'M <span className="large-text">Rishvant Singh</span></p>
                <div className="text-1">
                    <span className="text-2">I'M </span>
                    <span className="large-text animation">Developer</span>
                </div>
                <ScrollLink to="contact" smooth={true} duration={1000} className="front-content-btn">Contact Me</ScrollLink>
            </div>
            <div className="front-social">
                <span className="social-line"></span>
                <FaLinkedin className="linkedin-social social-icons" />
                <FaSquareXTwitter className="twitter-social social-icons" />
                <FaInstagram className="instagram-social social-icons" />
                <FaGithub className="github-social social-icons" />
            </div>
        </section>
    )
}

export default Front;