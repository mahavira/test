import React from 'react';
import { Button, DatePicker, TimePicker, Calendar } from 'antd';
import './App.css';

function App() {
  const onHandle = () => {

  }
  return (
    <div className="App" onClick={onHandle}>
      <Button type="primary">加载中</Button>
      <DatePicker placeholder="xxx" />
      <TimePicker placeholder="xxx" />
      <Calendar />
    </div>
  );
}

export default App;
