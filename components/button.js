import React from 'react'

const MyButton = ({title}) => {
  return (
    <button className="bg-red-300 hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
        {title} 
    </button>
  )
}

export default MyButton;