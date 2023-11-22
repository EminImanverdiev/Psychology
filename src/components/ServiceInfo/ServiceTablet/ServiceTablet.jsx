import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
export default function ServiceTablet() {
    const navigate = useNavigate();
    const GetServiceId = (postId) => {
        navigate(`/service/${postId}`)
    }
    const servicePosts = [
        {
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
        },
        {
            id: 2,
            image: "https://webdesign-finder.com/psycheco-psychology-v2/wp-content/uploads/2023/07/img32.jpg",
            title: "Depression therapy",
            content: "Sed dapibus sit amet augue tincidunt venenatis. Praesent libero urna, pretium sed finibus et, tincidunt quis ipsum. Maecenas a lectus in leo fermentum finibus tincidunt nec felis.",
            description: [
                "Phasellus semper vulputate diam. Nullam eget dui.",
                "Phasellus semper vulputate diam. Nullam eget dui.",
                "Phasellus semper vulputate diam. Nullam eget dui.",
                "Phasellus semper vulputate diam. Nullam eget dui."
            ]
        },
        {
            id: 3,
            image: "https://webdesign-finder.com/psycheco-psychology-v2/wp-content/uploads/2023/07/img32.jpg",
            title: "Depression therapy",
            content: "Sed dapibus sit amet augue tincidunt venenatis. Praesent libero urna, pretium sed finibus et, tincidunt quis ipsum. Maecenas a lectus in leo fermentum finibus tincidunt nec felis.",
            description: [
                "Phasellus semper vulputate diam. Nullam eget dui.",
                "Phasellus semper vulputate diam. Nullam eget dui.",
                "Phasellus semper vulputate diam. Nullam eget dui.",
                "Phasellus semper vulputate diam. Nullam eget dui."
            ]
        },
    ]
    return (
        <>
            {servicePosts.map((service, index) => (
                <section key={index} id='service-tablet' onClick={() => GetServiceId(service.id)} className={index % 2 === 0 ? 'even' : 'odd'}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className={`col-xxl-6 col-lg-6 ${index % 2 === 0 ? 'order-2' : ''}`}>
                                <div className="tablet-widget-img" style={{ backgroundImage: `url(${service.image})` }}>
                                    <div className="tablet-overlay"></div>
                                </div>
                            </div>
                            <div className={`col-xxl-6 col-lg-6 ${index % 2 === 0 ? 'order-1' : ''}`}>
                                <div className="service-tablet-box-content">
                                    <h3>{service.title}</h3>
                                    <p>{service.content}</p>
                                    <ul>
                                        {service.description.map((desc, descIndex) => (
                                            <li key={descIndex}>- <b>{desc}</b></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </>
    )
}
