import React from 'react'
import { Link } from "react-router-dom";

const linkColor = {
    color: "#1746A2"
}

export default function HomePage() {
  return (
    <>
         <h1>Top TV</h1>
         <em>All about the smaller silver screen</em>
         <ul>
            <li><Link to="/shows" style={linkColor}>Explore show</Link></li>
            <li><Link to="/search" style={linkColor}>Search for your favorite show</Link></li>
         </ul>
    </>
   
  )
}
