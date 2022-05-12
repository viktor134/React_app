import { Button, Input, Modal } from 'antd'
import React, { useState } from 'react'

const EditDeleteModal = ({ item, isModalVisible, setIsModalVisible, setMock }) => {
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState(item.text);
  const handleCancel = () => {
    setValue(item.text);
    setEditMode(false);
    setIsModalVisible(false);
  };
  const onTextChange = ({target:{value}}) => {
    setValue(value)
  }
  const editButtonHandler = () => {
    if (editMode) {
      setMock((prev) => (prev.map((post) => {
        if (post.id === item.id) {
          return { ...post, text: value }
        }
        return post
      })))
      setEditMode(false);
      setIsModalVisible(false);
    }
    else {
      setEditMode(true);
    }
  }
  const deleteButtonHandler = () => {
    setIsModalVisible(false);
    setMock((prev)=> prev.filter((post)=> item.id !== post.id))
  }
  return (
    <Modal
      title={item.title}
      visible={isModalVisible}
      onCancel={handleCancel}
      footer={null}
    >
      <div className="body">
        {editMode ? (
          <Input.TextArea value={value} onChange={onTextChange} />
        ) : item.text}
      </div>
      <Button type='primary' onClick={editButtonHandler}>{editMode ? "Save" : "Edit"}</Button>
      <Button onClick={deleteButtonHandler}>Delete</Button>
    </Modal>
  )
}

export default EditDeleteModal