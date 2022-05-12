import { Input, Modal } from 'antd'
import React, { useState } from 'react'

const AddPostModal = ({ isModalVisible, setIsModalVisible, setMock }) => {
  const [textValue, setTextValue] = useState("");
  const [titleValue, setTitleValue] = useState("");

  const onTextChange = ({ target: { value } }) => {
    setTextValue(value)
  }
  const onTitleChange = ({ target: { value } }) => {
    setTitleValue(value)
  }
  const handleOk = () => {
    setMock((prev)=>[...prev, {
      id: Date.now(), 
      title: titleValue,
      text: textValue
    }]);
    setTextValue("");
    setTitleValue("");
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setTextValue("");
    setTitleValue("");
    setIsModalVisible(false);
  };
  return (
    <Modal
      title={"new Post"}
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <div className="body">
        title
        <Input value={titleValue} onChange={onTitleChange} />
        text
        <Input.TextArea value={textValue} onChange={onTextChange} />
      </div>
    </Modal>
  )
}

export default AddPostModal