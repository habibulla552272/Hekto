import React from 'react'

const BlogMiniCarad = (props) => {
  return (
    <div className='flex gap-2'>

      <img src={props.Image} alt="" />
      <div className='flex flex-col gap-a  justify-center'>
        <h3>{props.title}</h3>
        <p>{props.date}</p>
      </div>
    </div>
  )
}

export default BlogMiniCarad
