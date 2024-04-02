import { useEffect, useState } from 'react'
import './App.css'
import { stringBase64Apolo } from './config'

function App() {
  
  const b64 = `data:application/pdf;base64,${stringBase64Apolo}`;

  useEffect(() => {
    var link = document.createElement('a');
    link.href = b64;
    link.download = "prueba.pdf"
    document.body.appendChild(link)
    link.click()

  }, [])

  return (
    <>
      Descargando....
    </>
  )
}

export default App
