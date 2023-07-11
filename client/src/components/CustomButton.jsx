import React from 'react'
import state from '../store'
import { useSnapshot } from 'valtio'
import { getContrastingColor } from '../config/helpers'

const CustomButton = ({title, type, customStyle, handleClick}) => {
    const snap = useSnapshot(state)
    const genrateStyle = (type) => {
        if(type === 'filled'){
            return {
                backgroundColor: snap.color,
                color: getContrastingColor(snap.color)
            }
        }
        else if (type === 'outline'){
          return {
            borderColor: snap.color,
            borderWidth: '1px',
            color: snap.color,
          }
        }
    }



  return (
    <button className={`px-2 py-1.5 flex-1 rounded-md ${customStyle}`}
    style={genrateStyle(type)}
    onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default CustomButton
