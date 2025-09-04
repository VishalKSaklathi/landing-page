import React, { useEffect, useState } from 'react'
import './App.css'
import downloadImg from './assets/download.png';
function Home() {
    //states for contact form
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const titles = ['Web Dev', 'App Dev', 'CRM', 'Health'];

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent.`);
            setName('');
            setEmail('');
            setMessage('');
        } else {
            alert('Please fill out all fields.');
        }
    }

    const activateNavLink = () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) { /* empty */ }

        navLinks.forEach(link => link.classList.remove('active'));
        if (navLinks[index]) {
            navLinks[index].classList.add('active');
        }
    }

    //this is used to detect the section and activate the nav-link
    useEffect(() => {
        window.addEventListener('scroll', activateNavLink);
        activateNavLink();
        return () => window.removeEventListener('scroll', activateNavLink);
    }, []);

    // Animated title index state
    const [titleIndex, setTitleIndex] = useState(0);

    // Animated letter-by-letter effect for titles
    const [displayedTitle, setDisplayedTitle] = useState('');
    const [letterIndex, setLetterIndex] = useState(0);

    useEffect(() => {
        setDisplayedTitle('');
        setLetterIndex(0);
    }, [titleIndex]);

    useEffect(() => {
        if (letterIndex < titles[titleIndex].length) {
            const timeout = setTimeout(() => {
                setDisplayedTitle((prev) => prev + titles[titleIndex][letterIndex]);
                setLetterIndex((prev) => prev + 1);
            }, 80);
            return () => clearTimeout(timeout);
        } else {
            // Wait before cycling to next title
            const timeout = setTimeout(() => {
                setTitleIndex((prev) => (prev + 1) % titles.length);
            }, 1500);
            return () => clearTimeout(timeout);
        }
    }, [letterIndex, titleIndex, titles]);

    //service animation
    // const ref1 = useRef();
    const [isRedWide, setIsRedWide] = useState(false);
    const [isGreenWide, setIsGreenWide] = useState(false);
    const [isBlueWide, setIsBlueWide] = useState(false);
    const [isBlackWide, setIsBlackWide] = useState(false);
    const [expanded, setExpanded] = useState('');
    function handleClick(e) {
        const item = e.target.closest('.service-item');
        const target = item.id;
        const redDiv = document.getElementById('red');
        const greenDiv = document.getElementById('green');
        const blueDiv = document.getElementById('blue');
        const blackDiv = document.getElementById('black');
        if (target === 'red') {
            if (!isRedWide) {
                redDiv.style.width = '300px';
                greenDiv.style.width = '100px';
                blueDiv.style.width = '100px';
                blackDiv.style.width = '100px';
                setIsRedWide(true);
                setIsGreenWide(false);
                setIsBlueWide(false);
                setIsBlackWide(false);
                setExpanded('red');
            } else {
                redDiv.style.width = '100px';
                setIsRedWide(false);
                setExpanded('');
            }
        } else if (target === 'green') {
            if (!isGreenWide) {
                greenDiv.style.width = '300px';
                redDiv.style.width = '100px';
                blueDiv.style.width = '100px';
                blackDiv.style.width = '100px';
                setIsGreenWide(true);
                setIsRedWide(false);
                setIsBlueWide(false);
                setIsBlackWide(false);
                setExpanded('green');
            } else {
                greenDiv.style.width = '100px';
                setIsGreenWide(false);
                setExpanded('');
            }
        } else if (target === 'blue') {
            if (!isBlueWide) {
                blueDiv.style.width = '300px';
                redDiv.style.width = '100px';
                greenDiv.style.width = '100px';
                blackDiv.style.width = '100px';
                setIsBlueWide(true);
                setIsRedWide(false);
                setIsGreenWide(false);
                setIsBlackWide(false);
                setExpanded('blue');
            } else {
                blueDiv.style.width = '100px';
                setIsBlueWide(false);
                setExpanded('');
            }
        } else if (target === 'black') {
            if (!isBlackWide) {
                blackDiv.style.width = '300px';
                blueDiv.style.width = '100px';
                redDiv.style.width = '100px';
                greenDiv.style.width = '100px';
                setIsBlackWide(true);
                setIsBlueWide(false);
                setIsRedWide(false);
                setIsGreenWide(false);
                setExpanded('black');
            } else {
                blackDiv.style.width = '100px';
                setIsBlackWide(false);
                setExpanded('');
            }
        }
    }

    return (
        <>
            <header>
                <nav>
                    <div className="logo">InnovAI</div>
                    <ul className="nav-links">
                        <li><a href="#home" className="nav-link">Home</a></li>
                        <li><a href="#about" className="nav-link">About Us</a></li>
                        <li><a href="#services" className="nav-link">Services</a></li>
                        <li><a href="#contact" className="nav-link">Contact</a></li>
                    </ul>
                </nav>
            </header >

            <section id="home" className="hero">
                <h1>Welcome to InnovAI</h1>
                <p>Your success is our priority.</p>
                <h2>AI in {displayedTitle}</h2>
                <a href="#about">
                    <button id="cta-button">
                        learn more
                    </button>
                </a>
            </section>

            <section id="about" className="about">
                {/* <h2>About Us</h2> */}
                <h2>About Us</h2>
                <table>
                    <tr>
                        <td>
                            <p>Welcome to InnovAI, where cutting-edge technology meets unparalleled creativity. Founded with a vision to
                                revolutionize
                                the way the world interacts with artificial intelligence, we are a passionate team of engineers,
                                researchers, and
                                visionaries dedicated to pushing the boundaries of what's possible.

                                At InnovAI, we believe in harnessing the power of AI to create solutions that enhance lives, drive
                                innovation, and
                                transform industries. Our state-of-the-art algorithms and machine learning models are designed to tackle
                                complex
                                challenges and provide intelligent, adaptive, and scalable solutions
                                Mission: To empower businesses and individuals through AI-driven insights and automation, making
                                technology more
                                accessible, efficient, and impactful.
                                Our Vision: To lead the AI revolution by developing innovative products that inspire, inform, and
                                improve
                                the human
                                experience.
                            </p>
                        </td>
                        <td>
                            <img src={downloadImg} alt="innovAI solutions" width={300} />
                        </td>
                    </tr>
                </table>
                {/* <img src="./assets/download.png" alt="about" /> */}

            </section>

            <section id="services" class="services">
                <h2>Our Services</h2>
                <div class="service-list" onClick={handleClick}>
                    <div className="red service-item" style={{ background: 'linear-gradient(90deg, #ff3c3c 0%, #b30000 100%)' }} id='red'>
                        {/* Red */}
                        <h3>AI in Web Dev</h3>
                        <ul class="no-bullets" style={{ display: expanded === 'red' ? 'block' : 'none' }}>
                            <li>Personalized User Experience</li>
                            <li>SEO Optimization</li>
                            <li>Web Design</li>
                            <li>Performance Monitoring</li>
                        </ul>
                    </div>
                    <div className="green service-item" style={{ background: 'linear-gradient(90deg, #43ea7a 0%, #007f3b 100%)' }} id='green'>
                        {/* Green */}
                        <h3>AI in App Dev</h3>
                        <ul class="no-bullets" style={{ display: expanded === 'green' ? 'block' : 'none' }}>
                            <li>Predictive Analytics</li>
                            <li>Voice Recognition and Natural Language Processing (NLP)</li>
                            <li>Automated Testing</li>
                            <li>Behavioral Analytics</li>
                        </ul>
                    </div>
                    <div className="blue service-item" style={{ background: 'linear-gradient(90deg, #3c8cff 0%, #003b7a 100%)' }} id='blue'>
                        {/* Blue */}
                        <h3>AI in CRM</h3>
                        <ul class="no-bullets" style={{ display: expanded === 'blue' ? 'block' : 'none' }}>
                            <li>Customer Segmentation</li>
                            <li>Sentiment Analysis</li>
                            <li>Predictive Customer Support</li>
                            <li>Automated Workflows</li>
                        </ul>
                    </div>
                    <div className="black service-item" style={{ background: 'linear-gradient(90deg, #b36cff 0%, #4b007a 100%)' }} id='black'>
                        {/* Blue */}
                        <h3>AI in HealthCare</h3>
                        <ul class="no-bullets" style={{ display: expanded === 'black' ? 'block' : 'none' }}>
                            <li>Early Disease Detection & Diagnosis</li>
                            <li>Personalized Treatment Plans</li>
                            <li>Virtual Health Assistants</li>
                            <li>Drug Discovery and Development</li>
                        </ul>
                    </div>
                </div>
            </section >

            <section id="contact" className="contact">
                <h2>Contact Us</h2>
                <p>Our Customer care service tracks all queries in a query management tool and gives each and every query a
                    feedback.
                    We use AI agents to do this tasks.These agents analyze queries, and reply accordingly on the basis of
                    previosly fed data.
                    Along with these agents our team also looks most of the crucial queries that proper reply.
                    We assure you tahat please meassge us for any of your queries that will help us a ot to improve ourseves.
                    We are a Company focused much on Customer satisfaction. Thank you from team.
                </p>
                <form id="contact-form" onSubmit={handleSubmit}>
                    <input type="text" id="name" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} required />
                    <input type="email" id="email" placeholder="Your Email" value={email} onChange={e => setEmail(e.target.value)} required />
                    <input type="location" id="location" placeholder="Your Location" required />
                    <textarea id="message" placeholder="Your Message" value={message} onChange={e => setMessage(e.target.value)} required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </section>

            <footer>
                <p>&copy; 2023 Company Name. All rights reserved.</p>
            </footer>
        </>
    )
}

export default Home

// I want to add a smooth scrolling effect to the page.
// I want to ensure in a single view only one section is displayed
// I want to use Very Large fonts to make for Headeres section titles etc...
// I wan to make interactive navbar --> interaction with reaspect to scrolling
//  I want to add multiple columns in Service list and make it look cool 
