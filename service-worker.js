/* eslint-disable no-undef */
console.log('Service Worker Loaded...')
self.addEventListener('push', (event) => {
  const data = event.data.json()
  console.log('Push notification received:', data)
  self.registration.showNotification(data.title, {
    body: data.body,
  })
})

self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  const url = 'http://localhost:5173/Play'
  event
    .waitUntil(event.currentTarget.clients.openWindow(url))
    .then((windowClient) => (windowClient ? windowClient.focus() : null))
})
