import React from 'react'
import {Button} from '@mui/material'
import { CustomButtonProps } from 'interfaces/common'
function CustomButton({title,color,type,backgroundColor,fullWidth,icon,disabled,handleClick}:CustomButtonProps) {
  return (
    <Button disabled={disabled} type={type==='submit'?'submit':'button'}  onClick={handleClick} sx={{flex:fullWidth?1:'unset',padding:'10px 15px',width:fullWidth?'100%':'fit-content',minWidth:130,backgroundColor,color,fontSize:16,fontWeight:600,gap:'10px',textTransform:'capitalize','&:hover':{opacity:0.9,backgroundColor}}}>
      {icon}{title}
    </Button>
  )
}

export default CustomButton
