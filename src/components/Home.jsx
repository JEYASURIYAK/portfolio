import React from 'react';
import '../App.css';
import Typed from 'typed.js';

export default function Home() {


    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Frontend Developer', 'MERN-stack Developer', 'Web developer'],
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 500,
            loop: true
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return (
        <div className="home-container" id='Home'>
            <section className='home row'>
                <div className="home-content col-md-8">
                    <h3>Hello, It's Me</h3>
                    <h1>Jeyasuriya Kalaimani</h1>
                    <h3>And I'm a <span className='text' ref={el}></span></h3>
                    <p>I'm passionate about full-stack development |
                        <br />Proficient in React.js, HTML, CSS, JS & Modern JS Libraries...
                    </p>

                    <div className="home-sci">
                        <a href="https://www.linkedin.com/in/jeyasuriyak/"><i className='bx bxl-linkedin'></i></a>
                        <a href="https://github.com/JEYASURIYAK"><i className='bx bxl-github'></i></a>
                        <a href="https://www.facebook.com/profile.php?id=100050758190492"><i className='bx bxl-facebook'></i></a>
                        <a href="https://www.instagram.com/suriya_ayirus0208/"><i className='bx bxl-instagram'></i></a>

                    </div>
                    <a href="#About" className='btn-box'>More About Me</a>
                </div>

                <div className="col-md-4 w-30 h-50 rounded-circle">
                    <img src="photo.jpg" alt="#" className='img-fluid image'/>
                </div>
            </section>

        </div>



    )

}
