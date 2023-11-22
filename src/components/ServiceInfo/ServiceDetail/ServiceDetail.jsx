import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './style.css';

export default function ServiceDetail() {
    const { serviceId } = useParams(); 

    const service = {
        id: 1,
        image: "https://webdesign-finder.com/psycheco-psychology-v2/wp-content/uploads/2023/07/img32.jpg",
        title: "Depression therapy",
        content: "Sed dapibus sit amet augue tincidunt venenatis. Praesent libero urna, pretium sed finibus et, tincidunt quis ipsum. Maecenas a lectus in leo fermentum finibus tincidunt nec felis.",
        description: [
            "Phasellus semper vulputate diam. Nullam eget dui.",
            "Phasellus semper vulputate diam. Nullam eget dui.",
            "Phasellus semper vulputate diam. Nullam eget dui.",
            "Phasellus semper vulputate diam. Nullam eget dui."
        ]
    };

    return (
        <section id='service-detail'>
            <Navbar />
            <Header />
            <div className="container">
                <div className="tablet-widget-img" style={{ backgroundImage: `url(${service.image})` }}>
                    <div className="tablet-overlay"></div>
                </div>
                <h3>{service.title}</h3>
                <p>{service.content}</p>
                <ul>
                    {service.description.map((desc, descIndex) => (
                        <li key={descIndex}>- <b>{desc}</b></li>
                    ))}
                </ul>
            </div>
            <Footer />
        </section>
    )
}
