import './App.css'


import { Route, Routes } from 'react-router-dom'
import { StudentDashboardNav } from './components/studentDashboardNav'
import { LandingPage } from './pages/landingPage'
import { LecturerDashboard } from './pages/lecturerDashboard'
import { LoginLecturer } from './pages/lecturerLogin'
import { LecturerRegistrationPage } from './pages/lecturerRegistration'
import { StudentDashboard } from './pages/studentDashboard'
import { LoginStudent } from './pages/studentLogin'
import { StudentRegistrationPage } from './pages/studentRegistration'
import { StudentProfile } from './components/studentProfile'
import { AssignmentDescription } from './pages/assignmentDecriptionPage'
import { SolutionUpload } from './components/fileUpload'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/auth/register/student' element={<StudentRegistrationPage />} /> 
      <Route path='/auth/register/lecturer' element={<LecturerRegistrationPage />} /> 
      <Route path='/auth/login/student' element = {<LoginStudent />} />
      <Route path='/auth/login/lecturer' element = {<LoginLecturer />} />
      <Route path='/student/dashboard' element = { <StudentDashboard />} />
      <Route path='/lecturer/dashboard' element = { <LecturerDashboard />} />
      <Route path='/loading' element={<StudentDashboardNav/>} />
      <Route path="/test" element={<SolutionUpload />} />
      <Route path='/assignment/:id' element={<AssignmentDescription /> } />
    

    </Routes>

    </>
  )
}

export default App
