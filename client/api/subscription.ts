import request from "superagent"


const serverUrl = '/api/v1/subscribe'


export function subscribeUser(sub:string) {
 
  return request.post(serverUrl).send(sub).set('Content-Type', 'application/json').then((res)=>console.log(res)).catch(error => {
    console.error('Error subscribing to push notifications:', error);
  });
}