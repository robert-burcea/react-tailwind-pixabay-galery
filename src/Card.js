import React from 'react'

export default function Card({image}) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.largeImageURL} alt="" className="w-full"></img>
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views:</strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads:</strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes:</strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
          {image.tags.split(',').map((tag) => {
              return <span className="tag">{tag}</span>;
          })}
      </div>
    </div>
  )
}
