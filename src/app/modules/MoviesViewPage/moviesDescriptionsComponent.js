import React from 'react'

function MoviesDescriptionsComponent(props) {
  return (
    <div className='text-left mx-5 MoviesDescriptionsComponent'>
        <h4>{props?.title || 'demo title'}</h4>
        <h6>{props?.rating || 0}/10</h6>
        <p>{props?.genres || 'demo genres'}</p>
        <p>{props?.description || 'demo description'}</p>
    </div>
  )
}

export default MoviesDescriptionsComponent