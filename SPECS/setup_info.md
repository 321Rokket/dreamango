# 1. CREATE PROJECT STRUCTURE
mkdir dreamango
cd dreamango

# 2. INITIALIZE GIT
git init
git branch -M main

# 3. CREATE BACKEND (Django with Conda)
mkdir backend
cd backend

# Create conda environment
conda create -n dreamango python=3.11 -y
conda activate dreamango

The latest official Django version is 5.2.1 (LTS). Read the 5.2.1 release notes, then install it.

# Install Django packages via conda
conda install django djangorestframework -c conda-forge
conda install psycopg2 -c conda-forge
pip install django-cors-headers python-decouple gunicorn whitenoise django-storages google-cloud-storage

# Create Django project
django-admin startproject dreamango_project .
python manage.py startapp api
cd ..

# 4. CREATE FRONTEND (React + Vite)
npm create vite@latest frontend -- --template react-ts
cd frontend
npm install
npm install -D tailwindcss postcss autoprefixer @types/node
npm install daisyui @headlessui/react @heroicons/react
npx tailwindcss init -p
cd ..

# 5. CREATE ENVIRONMENT FILES
touch .env.example
touch backend/.env
touch frontend/.env

# 6. CREATE TESTING STRUCTURE
mkdir -p backend/tests
mkdir -p frontend/src/__tests__

# 7. START LOCAL DEVELOPMENT
# Terminal 1: Backend
cd backend
conda activate dreamango
python manage.py makemigrations
python manage.py migrate
python manage.py runserver

# Terminal 2: Frontend (new terminal window)
cd frontend
npm run dev
#
#
#
# /frontend/src/App.tsx

import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [apiStatus, setApiStatus] = useState<string>('checking...')

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL || 'http://localhost:8000/api/')
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


#
#
#
