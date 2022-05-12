import { Button } from 'antd'
import React, { useState } from 'react'
import "./addButton.scss";
import AddPostModal from './components/add-post-modal/AddPostModal';

const AddButton = ({setMock}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <>
    <AddPostModal 
    setMock={setMock}
    isModalVisible={isModalVisible}
    setIsModalVisible={setIsModalVisible}
    />
    <div className='add-button-wraper'>
      <Button type="primary" shape="circle" onClick={showModal}>
        +
      </Button>
    </div>
    </>
    
  )
}

export default AddButton