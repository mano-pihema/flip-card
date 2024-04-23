import { Box, Button, Modal, Typography} from '@mui/material'
import { useEffect, useState } from 'react'
import {ReminderForm} from '../../models/reminder'
import { createReminder } from '../api/reminder';
import { subscribeUser } from '../api/subscription';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const publicKey = 'BE-z-95D9D6B5OCosqSHnLlTBUTsOQREvvmZgc_iicAXL06e39gRN9NcAwYcTjkMyI2P9S4AYCEDuFRZiNuS6gc'

function NotificationToggle() {

  const [open, setOpen] = useState(false)
  const [form,setForm] = useState<ReminderForm>({}as ReminderForm)

  function askPerm() {
    Notification.requestPermission().then((perm)=>{if(perm=='granted'){
     navigator.serviceWorker.register('../../service-worker.js')
     .then(reg=>{
      reg.pushManager.subscribe({userVisibleOnly:true,applicationServerKey:urlBase64ToUint8Array(publicKey)})
      .then(sub =>
        subscribeUser(JSON.stringify(sub))
      )
     })
     setOpen(true) 
    }
      
  })
  }

  
  // @ts-expect-error fix type later
   function submitHandler(event){
    event.preventDefault()
    const hours = event.currentTarget['hours'].value
    const mins = event.currentTarget['mins'].value
    
    setForm({mins,hours})
    
    setOpen(false)
  }

  useEffect(()=>{
  createReminder(form)
  },[form])


  function urlBase64ToUint8Array(base64String:string) {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
 
    // eslint-disable-next-line no-useless-escape
    const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/')
  
    const rawData = window.atob(base64)
    const outputArray = new Uint8Array(rawData.length)
  
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i)
    }
    return outputArray
  }

  return (
    <>
    <Button key={1} onClick={askPerm} sx={{ my: 2, color: 'white', display: 'block' }}>
      Notifications
    </Button>
    <Modal
        open={open}
        onClose={()=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Freqency of notification
          </Typography>
          <Typography>set a reminder to practice for every</Typography>
          <form onSubmit={submitHandler}>
            <label htmlFor="hours">hours</label>
            <input type="number" name='hours' min={0} max={23} />
            <label htmlFor="mins">minutes</label>
            <input type="number" name='mins' min={0} max={59} />
            <button type='submit'>add reminder</button>
          </form>
        </Box>
      </Modal>
    
    </>
    
  )
}

export default NotificationToggle