import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';
export default function BlogTablet() {
  const navigate=useNavigate();
  const PostClick = (blogId) => {
    navigate(`/blog/${blogId}`);
  };
  const blogPosts = [
    {
      id: 1,
      image: 'https://webdesign-finder.com/psycheco-psychology-v2/wp-content/uploads/2023/07/img58-1170x660.jpg',
      date: 'July 17, 2023',
      author: 'Emin',
      title: 'Sample post with image',
      content: 'Nam varius facilisis tempus. Fusce laoreet metus odio, a rutrum dolor tincidunt sit amet. Maecenas molestie rhoncus est, tempor imperdiet lorem laoreet quis. Nunc ultricies scelerisque urna. Aenean sodales orci orci. Nullam elementum egestas libero, sed vehicula…',
    }, {
      id: 2,
      image: 'https://webdesign-finder.com/psycheco-psychology-v2/wp-content/uploads/2023/07/img58-1170x660.jpg',
      date: 'July 17, 2023',
      author: 'Emin',
      title: 'Sample post with image',
      content: 'Nam varius facilisis tempus. Fusce laoreet metus odio, a rutrum dolor tincidunt sit amet. Maecenas molestie rhoncus est, tempor imperdiet lorem laoreet quis. Nunc ultricies scelerisque urna. Aenean sodales orci orci. Nullam elementum egestas libero, sed vehicula…',
    }, {
      id: 3,
      image: 'https://webdesign-finder.com/psycheco-psychology-v2/wp-content/uploads/2023/07/img58-1170x660.jpg',
      date: 'July 17, 2023',
      author: 'Emin',
      title: 'Sample post with image',
      content: 'Nam varius facilisis tempus. Fusce laoreet metus odio, a rutrum dolor tincidunt sit amet. Maecenas molestie rhoncus est, tempor imperdiet lorem laoreet quis. Nunc ultricies scelerisque urna. Aenean sodales orci orci. Nullam elementum egestas libero, sed vehicula…',
    },
  ];
  return (
    <>
      {
        blogPosts.map((blog, index) => (
          <section id='blog-tablet' key={blog.id}>
              <div className="container" onClick={() => PostClick(blog.id)}>
                <div className="container-blog-img" style={{ backgroundImage: `url(${blog.image})` }}>
                  <div className="blog-img-overlay"></div>
                </div>
                <div className="container-date">
                  <span className='date'>{blog.date}</span>
                  <span className='author'>{blog.author}</span>
                </div>
                <h2>{blog.title}</h2>
                <p>{blog.content}…</p>
                <a className='link' href="#">Read More</a>
              </div>
          </section>
        ))
      }
    </>





  )
}
