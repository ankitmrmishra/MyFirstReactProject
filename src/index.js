import React from 'react'
import  ReactDOM  from 'react-dom'
import './index.css'
const photo = 'https://images.unsplash.com/photo-1577083552792-a0d461cb1dd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGhvdGdyYXBpYyUyMGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
const author = ''
const description = ''
function  Ankit() {
  return (
    <section className='bookSection'>
  <Greeting photo='https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdGdyYXBpYyUyMGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
  author='Ankit Mishra' description='This is great novel'
  />
    <Greeting photo='https://images.unsplash.com/photo-1577083552792-a0d461cb1dd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGhvdGdyYXBpYyUyMGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60' 
    author='Mishra Ankit'  description='This is great fiction'
    />
    <Greeting photo='https://images.unsplash.com/photo-1579541814924-49fef17c5be5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdGdyYXBpYyUyMGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
    author='Shri Ankit Mishra' description='This is great non-fiction'
    />
    <Greeting photo='https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdGdyYXBpYyUyMGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
    author='Mr. Ankit Mishra' description='This is great self help book'
    />
    <Greeting photo='https://images.unsplash.com/photo-1482160549825-59d1b23cb208?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGhvdGdyYXBpYyUyMGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
    author='The Ankit MIshra' description='This is great book for mathematics'
    />
    </section>
    
  )
}

const Greeting = (props) => 
   <div className='container'>
   <div className="imgs">
   <img className='image-img' src={props.photo} alt="" srcset="" />
   </div>
    
    <div className='textContainer'>    <h1 className='headin'>{props.description}
    <br />
    <span className='author'>{props.author}</span>
    </h1>
    
</div>

    </div> ;


ReactDOM.render(<Ankit/> , document.getElementById('root'));
