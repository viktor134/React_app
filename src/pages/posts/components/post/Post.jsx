import React, { useState } from 'react'
import EditDeleteModal from './components/edit-delete-modal/EditDeleteModal';
import "./post.scss"

const Post = ({ item, setMock }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };


  return (
    <>
      <EditDeleteModal
      item={item}
      setMock={setMock}
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      />
      <div className='post' onClick={showModal}>
        <div className='title'>
          {item.title}
        </div>
        <div className='body'>
          {item.text.length > 200 ? `${item.text.substring(0, 199)}...` : item.text}
        </div>
      </div>
    </>

  )
}

export default Post