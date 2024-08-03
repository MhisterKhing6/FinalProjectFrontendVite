import './App.css'


import { Route, Routes } from 'react-router-dom'
import { AddAssQuestion } from './components/addAssQuestion'
import { SolutionUpload } from './components/fileUpload'
import { StudentDashboardNav } from './components/studentDashboardNav'
import { AssignmentCourse } from './pages/AssignmentCourse'
import { ViewAssignment } from './pages/ViewAssignmentLecturer'
import { AssignmentDescription } from './pages/assignmentDecriptionPage'
import { CreateAssignment } from './pages/createAssignmentPage'
import { LandingPage } from './pages/landingPage'
import { LecturerDashboardPage } from './pages/lecturerDashboard'
import { LoginLecturer } from './pages/lecturerLogin'
import { LecturerRegistrationPage } from './pages/lecturerRegistration'
import { DashboardElement } from './pages/studentAssignments'
import { StudentDashboard } from './pages/studentDashboard'
import { LoginStudent } from './pages/studentLogin'
import { StudentRegistrationPage } from './pages/studentRegistration'
import { AssignmentDetailPage } from './pages/viewAssignmentDetails'

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
      <Route path='/lecturer/dashboard' element = { <LecturerDashboardPage />} />
      <Route path='/loading' element={<StudentDashboardNav/>} />
      <Route path="/test" element={<SolutionUpload />} />
      <Route path='/assignment/:id' element={<AssignmentDescription /> } />
      <Route path='/student/assignment' element= {<DashboardElement url={'/course/assignment/'} title={"Student Assignment"} />} />
      <Route path='/student/grades' element= {<DashboardElement title={"Student Grades"} />} />
      <Route path='/course/assignment/:cId' element= {<AssignmentCourse />} />
      <Route path='/create/assignment' element={<CreateAssignment />} />
      <Route path='/add/question' element={<AddAssQuestion />} />
      <Route path='/lecturer/view-assignment' element={<ViewAssignment />} />
      <Route path='/assignment-detail/:assId/:status' element={<AssignmentDetailPage />} />
      
    </Routes>
    </>
  )
}

export default App
