import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [apiStatus, setApiStatus] = useState<string>('checking...')

  useEffect(() => {
    fetch('http://localhost:8000/api/')
      .then(res => res.json())
      .then(data => setApiStatus(`Connected: ${data.message}`))
      .catch(() => setApiStatus('API connection failed'))
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
      <div className="text-center">
        <div className="hero">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-6xl font-bold text-white mb-8">
                DreamAngo
              </h1>
              <p className="text-xl text-base-200 mb-4">
                Dream + Django
              </p>
              <p className="text-lg text-base-300 mb-8">
                Transform negative reviews into positive relationships
              </p>
              <div className="space-y-4">
                <button className="btn btn-accent btn-lg">
                  Get Started
                </button>
                <div className="divider text-base-200">API Status</div>
                <div className="alert alert-info">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>{apiStatus}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
