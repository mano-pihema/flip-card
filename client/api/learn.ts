import request from "superagent"
import { Translation } from "../../models/learn";

const serverUrl = '/api/v1/learn'

export function learnWord(translation:Translation) {

  return request.post(serverUrl)
  .send(translation)
  .then((res)=>console.log(res))
  .catch(error => {
    console.error('Error subscribing to push notifications:', error);
  });
}