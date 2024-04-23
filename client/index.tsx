
import  { createRoot } from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { routes } from './routes'


const queryClient = new QueryClient()

const router = createBrowserRouter(routes)
const root = createRoot(document.getElementById('root') as HTMLElement)

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registered:', registration);
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  });
}

root.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
  </QueryClientProvider>

)
