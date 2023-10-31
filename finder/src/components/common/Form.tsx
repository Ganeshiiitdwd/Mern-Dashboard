import React from 'react'
import {Box,Typography,FormControl,FormHelperText,TextField,TextareaAutosize,Stack,Select,MenuItem,Button} from '@mui/material'
import { FormProps } from 'interfaces/common'
import CustomButton from './CustomButton'
function Form({type,register,formLoading,handleImageChange,onFinish,handleSubmit,onFinishHandler,propertyImage}:FormProps) {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} >{type} a Property</Typography>
   <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#e6e1e3">
   <form style={{marginTop:'20px',width:'100%',display:'flex',flexDirection:'column',gap:'20px'}} onSubmit={handleSubmit(onFinishHandler)}>
    <FormControl>
      <FormHelperText sx={{fontWeight:500,margin:'10px',fontSize:16}}>Enter Property Name</FormHelperText>
  <TextField
  fullWidth
  required
  id='outlined-basic'
  placeholder='Title'
  sx={{background:'white'}}
  variant='outlined'
  {...register('title',{required:true})}
  >
 </TextField>
  
    </FormControl>
    {/* new input field */}
    <FormControl>
      <FormHelperText sx={{fontWeight:500,margin:'10px',fontSize:16}}>Enter Property Description</FormHelperText>
  <TextareaAutosize
  minRows={5}
  required
  placeholder='Write Description'
  style={{width:'100%',
  fontSize:'16px',borderColor:'rgba(0,0,0,0.23)',
  borderRadius:6,padding:10
  
}}{...register('description',{required:true})}
  />
  
    </FormControl>

   <Stack direction="row" gap={4}>
   <FormControl sx={{flex:1}}>
   <FormHelperText
   sx={{
    fontWeight:500,
    margin:'10px 0',
    fontSize:16,
     
   }}
   >
    Select Property Type
   </FormHelperText>
   <Select
   sx={{background:'white'}}
   variant='outlined'
   displayEmpty
   required
   inputProps={{'aria-label':'without label'}}
   defaultValue="Apartment"
   {...register('propertyType',{required:true})}
   >
  <MenuItem value='Apartment'>Apartment</MenuItem>
  <MenuItem value='Office'>Office</MenuItem>
  <MenuItem value='Store'>Store</MenuItem>
  <MenuItem value='Bunglow'>Bunglow</MenuItem>
  <MenuItem value='Villa'>Villa</MenuItem>
  <MenuItem value='Studio'>Studio</MenuItem>
  
   </Select>
   </FormControl>
   {/* price */}
   <FormControl>
      <FormHelperText sx={{fontWeight:500,margin:'10px',fontSize:16}}>Enter Property Price</FormHelperText>
  <TextField
  fullWidth
  required
  type='number'
  id='outlined-basic'
  sx={{background:'white'}}
  variant='outlined'
  {...register('price',{required:true})}
  >
 </TextField>
  
    </FormControl>
   </Stack>
{/* location */}
<FormControl>
      <FormHelperText sx={{fontWeight:500,margin:'10px',fontSize:16}}>Enter Property Address</FormHelperText>
  <TextField
  fullWidth
  required

  id='outlined-basic'
  sx={{background:'white'}}
  variant='outlined'
  {...register('location',{required:true})}
  >
 </TextField>
  
    </FormControl>
    <Stack
    direction="column" gap={1} justifyContent="center"
    mb={2}
    >
      <Stack direction="row" gap={2}>
  <Typography fontSize={16} fontWeight={500} my="10px" color="black">Property Photo</Typography>
     <Button component="label" sx={{width:'fit-content' ,textTransform:'capitalize' , fontSize:16}}>Upload*
     <input 
     hidden
     accept='image/*'  //it will accept all kind of images
     type='file'
     onChange={(e)=>{
      //to avoid the error give following command
      //@ts-ignore
      handleImageChange(e.target.files[0])
      console.log(e)
     }}
     />
     </Button>
      </Stack>
      <Typography fontSize={14} sx={{wordBreak:'break-all'}} color="black">
        {propertyImage?.name}
      </Typography>
    
    </Stack>
    {/* submit button */}
    <CustomButton
    type='submit'
    title={formLoading?'Submitting...':"Submit"}
    backgroundColor="#1976D2"
    color='#fcfcfc'
    />

   </form>

   </Box>
   
    </Box>
  )
}
 
export default Form
