import { useContext, useEffect, useState } from "react"
import { Badge, Button, Col, Container, Form, InputGroup, Pagination, Row, Table } from "react-bootstrap"
import { FaSearch } from "react-icons/fa"
import { useNavigate, useParams } from "react-router-dom"
import { Loading } from "../components/loading"
import { LecturerNavbar } from "../components/navbarLecturer"
import { LecturerContext } from "../context/lecturerContext"
import { getFromBackend } from "../utils/backendCalls"
import { token } from "../utils/config"
import { getToken } from "../utils/localstorage"
import { ChatWindow } from "../components/forum/chatWindow"

const Forum = () => {

    const [loading, setLoading] = useState(false)
    const redirect = useNavigate()
    const [loadingDetail, setLoadingDetail] = useState(true)
    const [submission, setSub] = useState([])
    const {assId} = useParams()
    const {loadAssignment, setAssignment, assignment,loadDetails, authenticated, setAuthenticated, lecturer, setLecturer} = useContext(LecturerContext)
    useEffect(()=> {
        
        const loadProfile = async () => {
            await loadDetails(setLecturer, lecturer,setLoading, setAuthenticated,redirect)
        }
        loadProfile()
    },[authenticated])
   
   

    
    return (
        <>
        {(loading ) ? <Loading /> : 
        <>
        <LecturerNavbar />
        <div className="w-100 min-vh-100">
        <Container>
            <Row>
            <div className="border-bottom mb-4 pt-5">
            <h4 style={{fontWeight:"bolder"}} className=" mb-3 mt-2">Chat Forum</h4>
                    <div className="d-flex flex-wrap flex-md-nowrap justify-content-between">
                    <p className="text-muted">
                    Assignment Title: 
                    </p>
                    </div>
                </div>
                <Container className="my-4">
                <div  className=''>
                                <h6 className='mb-0'></h6>
                                <div className='fs-xs'>{submission.totalCount}/{submission.totalStudents} students submitted</div>
                             </div>
                             <div className="progress mt-1 mb-1">
                             <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width:`${(submission.totalCount/submission.totalStudents)*100}%`}} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                    
                       <ChatWindow className="w-100"/>
                    

                    
                    
                </Container>
                
            </Row>

        </Container>
        </div>
        </>
            }
        </>
    )
}
export { Forum }
