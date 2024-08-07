import { useContext, useEffect, useState } from "react"
import Chart from "react-apexcharts"
import { Accordion, Button, Card, Col, Container, Row } from "react-bootstrap"
import { FaMagento } from "react-icons/fa"
import { FaMaximize, FaMinimize } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"
import { AlertToast } from "../components/alertTracker"
import { Loading } from "../components/loading"
import { LecturerNavbar } from "../components/navbarLecturer"
import { LecturerContext } from "../context/lecturerContext"

const AssignmentReport = () => {

    const [loading, setLoading] = useState(false)
    const redirect = useNavigate()
    const [loadingAssignment, setLoadingAssignment] = useState(true)
    const [object, setObject] = useState({})
    const [showInfo, setShowInfo]= useState(false)
    const [infoMessage, setInfoMessage]  = useState("")
    const {loadAssignment, setAssignment, assignment,loadDetails, authenticated, setAuthenticated, lecturer, setLecturer} = useContext(LecturerContext)
    useEffect(()=> {
        
        const loadProfile = async () => {
            await loadDetails(setLecturer, lecturer,setLoading, setAuthenticated,redirect)
            await loadAssignment(object, setObject,setLoadingAssignment )           
        }
        loadProfile()
    },[authenticated])
   
    
    let xxaceis = ["Good", "Bad", "Very Good", "Excellent"]
    const donut = [20, 80]
    const labels = ["Good", "Bad"]
    let series = [{data:[30, 20, 80, 90], "name": "series 1"}]
    let options = {
        chart: {
            id:"basic chart"
        }, xaxis: {
            categories: xxaceis
          }
    }
    return (
        <>
        {loading || loadingAssignment ? <Loading /> : 
        <>
        <LecturerNavbar />
        <div className="w-100 min-vh-100">
        <Container>
            <Row>
            <AlertToast show={showInfo} text={infoMessage} toggleShow={() => setShowInfo(false) } />
            <div className="border-bottom mb-5 pt-5">
            <h4 style={{fontWeight:"bolder"}} className=" mb-3 mt-2">Report For Assignments</h4>
                    <div className="d-flex flex-wrap flex-md-nowrap justify-content-between">
                    <p className="text-muted">
                    Introduction to C++
                    </p>
                    </div>
                </div>
                <Container className="my-1">
                <Card className="my-1">
                            <Card.Body>
                            <div  className='mb-0'>
                                <h6 className='mb-0'></h6>
                                <div className='fs-xs'>200/400 students submitted</div>
                             </div>
                             <div className="progress mt-1 mb-1">
                             <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width:'90%'}} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            </Card.Body>
                 </Card>
                </Container>
            </Row>
            <Row className="my-2 p-3">
                    <Col xs={6} md={6} lg={4} className="rounded p-2 text-center">
                        <Card.Body className="stat shadow-lg py-4" >
                        <div  style={{width:"65px"}} className="iconStat mx-auto text-primary rounded-circle p-2 shadow-lg bg-body-secondary mb-2"><FaMaximize  size={"30px"}/></div>
                        <div className="my-2"><h5>Best Score </h5></div>
                        <div><h5> 20 </h5></div>
                        </Card.Body>
                    </Col>
                    <Col xs={6} md={6} lg={4} className=" rounded p-2 text-center">
                        <Card.Body className="stat shadow-lg py-4" >
                        <div  style={{width:"65px"}} className="iconStat mx-auto text-primary rounded-circle p-2 shadow-lg bg-body-secondary mb-2"><FaMagento  size={"30px"}/></div>
                        <div className="my-2"><h5>Average Score </h5></div>
                        <div><h5> 20 </h5></div>
                        </Card.Body>
                    </Col>

                    <Col xs={6} md={6} lg={4} className="rounded p-2 text-center">
                        <Card.Body className="stat shadow-lg py-4" >
                        <div  style={{width:"65px"}} className="iconStat h mx-auto text-primary rounded-circle p-2 shadow-lg bg-body-secondary mb-2"><FaMinimize  size={"30px"}/></div>
                        <div className="my-2"><h5>Worst Score </h5></div>
                        <div><h5> 20 </h5></div>
                        </Card.Body>
                    </Col>
                </Row> 
                <Row className="my-2  p-2">
                    <Col xs={12} md={6}>
                    <Chart 
                    options={{...options, title:{text:"Performance Bands"}}}
                    series={series}
                    width={"100%"}
                    type="bar"
                    height={"350px"}
                    />

                    </Col>
                    <Col xs={12} md={6}>
                    <Chart 
                    options={{title:{text:"Submission Percentage"},labels:["Submitted", "Not Submitted"]}}
                    series={donut}
                    width={"100%"}
                    type="donut"
                    
                    height={"350px"}
                    />
                    </Col>
                </Row>

                <Row className="my-3">
                <h5 className="subHeading">Report On Questions</h5>
                <Accordion>
                    <Accordion.Item eventKey={1}>
                        <Accordion.Header>Question 1</Accordion.Header>
                        <Accordion.Body>
                        <Card className="my-1">
                            <Card.Body>
                            <div  className='mb-0'>
                                <h6 className='mb-0'></h6>
                                <div className='fs-xs'>200/400 students Attempted</div>
                             </div>
                             <div className="progress mt-1 mb-1">
                             <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width:'90%'}} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            </Card.Body>
                            </Card>
                            <Chart 
                                options={{...options, title:{text:"Performance Bands"}}}
                                series={series}
                                width={"100%"}
                                type="bar"
                                height={"350px"}
                                />
                            <Card className="p-2 border-0">
                                <h6 >Download Question Results</h6>
                                <div className="my-2 d-flex ">
                                <Button style={{width:"150px"}}  variant="outline-primary">Excel</Button>
                                <Button style={{width:"150px"}} className="mx-3" variant="outline-dark">PDF</Button>
                                </div>

                            </Card>
                         </Accordion.Body>
                        
                    </Accordion.Item>
                </Accordion>
                </Row>
        </Container>
        </div>
        </>
            }
        </>
    )
}
export { AssignmentReport }
