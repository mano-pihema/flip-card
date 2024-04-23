import request from "superagent"
import { ReminderForm } from "../../models/reminder"

const serverUrl = '/api/v1/reminder'

export function createReminder(reminder:ReminderForm) {
  console.log('api',reminder)
  return request.post(serverUrl).send(reminder).then((res)=>console.log(res))
}