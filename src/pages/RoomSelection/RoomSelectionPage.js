import React, { useState, useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import ChatPopUp from '../../components/ChatPopUp/ChatPopUp';
import webSocketReducer, { upgradeWebSocket } from '../../reducer/reducer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const RoomSelectionPage = () => {

  const formField = React.useRef(null)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = () => {
    dispatch(upgradeWebSocket(
      new WebSocket(`ws://146.190.231.201:8083/?room=${formField?.current?.getFieldValue('message')}&innerCoords=${JSON.stringify({ x: window.innerWidth, y: window.innerHeight })}`
      )));
    navigate('/game');
  }

  useEffect(() => {

  }, [])

  // useEffect(scrollToBottom, [messagesArray]);
  return (
    <div>
      <Form onFinish={submit} ref={formField}>
        <Form.Item
          name='message'
          initialValue=''>
          <Input></Input>
        </Form.Item>
        <Button onClick={submit}>scegli istanza</Button>
      </Form>
    </div>
  )
}
