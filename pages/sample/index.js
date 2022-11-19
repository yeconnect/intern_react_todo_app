import React, {useState, useEffect} from 'react'

const Sample = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  
  useEffect(() => {
    alert('useEffectが実行されました');
  });

  return (
    <div>
      <button onClick={()=>setCount(count+1)}>
        押せ！
      </button>
      <button onClick={()=>setCount2(count2+1)}>
        押せ2！
      </button>
    </div>
  )
}

export default Sample