import React, {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(1)
  const [input, setInput] = useState(1)

  const inc = () => {
    setCount(count +1)
  }
  const dec = () => {
    setCount(count -1)
  }
  const num = () => {
    setCount(input)
  }

  const changeInput = (e) => {
    setInput(+e.target.value)
  }


  return (
    <div>
      <div>
        <button onClick={dec}>-</button>
        <span>{count}</span>
        <button onClick={inc}>-</button>
      </div>
      <div>
        <input value={input} type="number" onChange={changeInput}/>
        <button onClick={num}>Применить</button>
      </div>
    </div>
  )
}

export  default Counter;