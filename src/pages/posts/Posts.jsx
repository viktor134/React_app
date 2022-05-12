import React, { useState } from 'react'
import AddButton from './components/add-button/AddButton'
import Post from './components/post/Post'
import { mock as init } from './constants'
import "./posts.scss"

const Posts = () => {
  const [mock, setMock] = useState(init)
  return (
    <div className='post-page'>
      <AddButton setMock={setMock}/>
      <div className="posts-container">
        {mock.map((item) => (
          <React.Fragment key={item.id}>
            <Post item={item} setMock={setMock}/>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default Posts