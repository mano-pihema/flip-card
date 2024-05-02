import { Box, Button, Modal, Typography} from '@mui/material'
import { ChangeEvent, FormEvent, useState } from 'react'
import {ReminderForm} from '../../models/reminder'
import { createReminder } from '../api/reminder'
import { subscribeUser } from '../api/subscription'
import {urlBase64ToUint8Array,style} from '../utils'

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
 
   function submitHandler(event:FormEvent<HTMLFormElement>){
    event.preventDefault()
    createReminder(form)
    setOpen(false)
  }

  function inputHandler(event:ChangeEvent<HTMLInputElement>){
    const {name,value} = event.target
    setForm({...form,[name]:value})
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
            <input type="number" name='hours' min={0} max={23}  onChange={inputHandler}/>
            <label htmlFor="mins">minutes</label>
            <input type="number" name='mins' min={0} max={59} onChange={inputHandler} />
            <button type='submit'>add reminder</button>
          </form>
        </Box>
      </Modal>
    </>
  )
}

export default NotificationToggle