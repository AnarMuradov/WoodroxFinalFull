import React from 'react'
import OurBlog from '../../Components/OurBlog'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import Overlay from '../../Components/Overlay'

const Blog = () => {
  return (
    <>
    <Overlay head="Blog">
        <Link to="/">Home</Link>
        <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
        <Link to="/blog">Blog</Link>
      </Overlay>
    <OurBlog/>
    </>
  )
}

export default Blog