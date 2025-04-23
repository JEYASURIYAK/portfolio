import React from 'react'

export default function Projects() {
    return (
        <div className="home-container" id='Projects'>
            <section className='home row project-section'>
                <h1>Projects</h1>
                <div className="col-12 heading2"><h4>Studies <span>Project</span></h4></div>
                <div className="col-md-6">
                    <div className="project-container project1">
                        <h3>Plant Species And Disease Recognition With Usage Insights</h3>
                        <p>• Developed an intelligent web application using React.js and Python (Flask) for plant species identification and disease detection through image-based deep learning models (CNNs).
                            • Utilized image preprocessing, transfer learning, and a structured MongoDB database to enable accurate and real-time plant and disease classification.
                            • Included usage insights such as medicinal, culinary, and environmental benefits of plants, enhancing user knowledge.
                            • Designed with a responsive, user-friendly UI to ensure accessibility for farmers, students, and researchers.
                            • Supported automated treatment suggestions, report generation, and a secure admin panel for data management.
                            • Aimed to bridge the gap between AI and sustainable agriculture, making plant care smarter and more accessible.</p>

                    </div>
                </div>
                <div className="col-md-6">
                    <div className="project-container project2">
                        <h3>Alert System for Two-Wheeler</h3>
                        <p>• This project is an IoT-based mini project designed to enhance rider safety by delivering real-time audio alerts during vehicle startup. • Built using an Arduino microcontroller, the system integrates a speaker and sensors to notify users about critical startup conditions such as engine status, battery level, and system checks. • The setup includes components like Arduino Uno, a buzzer, and jumper wires, with the logic coded via the Arduino IDE. • Its core aim is to promote helmet usage and prevent head injuries by fostering awareness and responsible riding behavior. • The system is compact, low-power, and potentially expandable with wireless communication and smart helmet integration for broader safety applications.</p>

                    </div>
                </div>
                <div className="col-md-6">
                    <div className="project-container project3">
                        <h3>Online Medical Consultation Platform</h3>
                        <p>• Developed a full-featured React.js platform enabling patients to book appointments and consult with doctors
                            online via video call.
                            • Implemented role-based dashboards for patients and doctors, using React Router and protected routes for
                            secure navigation.
                            • Used Redux for managing global state such as appointment history, user authentication, and prescription data.
                            • Integrated third-party video calling API Jitsi Meet for real-time consultation features</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="project-container project4">
                        <h3>Land Brokerage Website</h3>
                        <p>• Developed a scalable land brokerage website using React.js with reusable components and clean architecture.
                            • Managed global state efficiently with Redux to handle authentication, filters, and saved properties.
                            • Built and validated interactive forms using controlled components, Formik, and Yup with smooth routing via
                            react-router-dom.
                            • Integrated Git and GitHub for version control, ensuring seamless collaboration and codebase management</p>

                    </div>
                </div>
                <div className="col-12 heading2"><h4>Self <span>Project</span></h4></div>
                <div className="col-md-6">
                    <div className="project-container project5">
                        <h3>Personal Portfolio Website</h3>
                        <p>I have developed a personal portfolio website using React.js to showcase my professional background, technical skills, and featured projects in an interactive and visually engaging manner. The site is fully responsive, offering a seamless experience across all device sizes, thanks to a well-structured combination of CSS and Bootstrap. I also integrated smooth animations to enhance user interaction and bring a modern, dynamic feel to the interface. This project highlights my strengths in front-end development, component-based design, responsive layouts, and animation integration—delivering a polished and user-friendly digital portfolio that reflects my creative and technical capabilities.</p>

                    </div>
                </div>
                <div className="col-md-6">
                    <div className="project-container project6">
                        <h3>E-Commerce Dashboard</h3>
                        <p>• Created a responsive admin dashboard using React.js for managing products, users, and orders efficiently.
                            • Implemented dynamic tables and visual charts using Recharts and Material UI for real-time sales insights.
                            • Used Firebase for real-time data updates, authentication, and secure backend management.</p>

                    </div>
                </div>
            </section>

        </div>

    )
}
