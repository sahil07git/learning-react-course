// import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {

  return (
   <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100">
      <Card title="React Basics" description="Learn components, props, and state." />
      <Card title="Tailwind CSS" description="Style your apps quickly with utility classes." />
      <Card title="JavaScript ES6" description="Understand modern JS features for React." />
    </div>
  )
}

export default App
