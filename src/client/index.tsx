import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'

// react 18
const container = document.getElementById('app')
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!)
root.render(<App/>)

// react 17
// document.addEventListener('DOMContentLoaded', () => {
//   render(
//    <App/> , document.getElementById('app')
//   )
// })
