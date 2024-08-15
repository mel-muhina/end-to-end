import React from 'react'
import { useState, useEffect } from 'react';
import GalleryImage from '../GalleryImage';
import { Link } from 'react-router-dom';

export default function ShowGallery() {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        displayShows();
    }, [])

    // Build fetch to API
    // Store the data into state
    async function displayShows() {
        const response = await fetch ("https://api.tvmaze.com/shows");
        const data = await response.json();
        setShows(data)
    }
   

    // Map through the data and render card/ div for each tv show

  return (
    <div className='shows'>
        {shows.map(show => <Link to={`${show.id}`} key={show.id}>
             <GalleryImage show={show} />
        </Link> )}
    </div>
  )
}
