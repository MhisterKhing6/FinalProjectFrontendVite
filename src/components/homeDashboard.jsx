import { useEffect, useState } from "react"
import { Badge, Button, Col, Stack } from "react-bootstrap"
import { getFromBackend } from "../utils/backendCalls"
import { token } from "../utils/config"
import { formatDate } from "../utils/datesManipulation"
import { getToken } from "../utils/localstorage"
import { Loading } from "./loading"

const HomeDashboard = () => {
    const [openAss, setOpenAss] = useState([])
    const [grades, setGrades] = useState([])
    const [loading, setLoading] = useState(true)
    let k = []
    useEffect(()=> {
        const loadAssignments = async () => {
            let url = "/coder/student/open/assignments"
            let result = await getFromBackend(url, getToken(token.studentTokenKey))
            setOpenAss(result.data)
            setLoading(false)
        }
        loadAssignments()
    },[])
    return (
        <Col style={{backgroundColor: "#F0F8FF"}} className="shadow-sm p-2 border-1" xs={10} md={9} lg={10}>
          {loading ? <Loading /> : <>
          <div className="shadow-sm mb-3">
           <h4 className="subHeading">Current Project </h4>
           { openAss.map(val=> {
            return (<Button key={val.id} href={`/assignment/${val.id}`} className="w-100 bg-transparent text-black border-0">
            <Stack  className="mb-3 shadow-lg p-2">
                <Stack className="justify-content-between" direction="horizontal">
                    <h5 className="assTitle">{val.title}</h5> 
                    <Badge bg="secondary" style={{fontSize:"18px"}}>{val.AssignmentResults.mark || 0}%</Badge>
                </Stack>
                <Stack  direction="horizontal" className="my-2">
                <div className="m-1 mx-2">
                    <Badge bg="secondary">{val.Course.courseCode}</Badge>
                    </div>
                    
                    <div className="m-1">
                    <Badge bg="danger">{formatDate(val.endDate)}</Badge>
                    </div>
                </Stack>
            </Stack>
        </Button>)
           })}
                </div>

            <div className="shadow-lg my-2 bg-opacity-10 p-md-2">
           <h4 className="subHeading">Grades </h4>
           <Button href="" className="w-100 bg-transparent text-black border-0">
                    <Stack  className="mb-3 shadow-lg p-2">
                        <Stack className="justify-content-between" direction="horizontal">
                            <h5 className="assTitle">Introduction to Java of a woman of a lousy love</h5> 
                            <Badge bg="success" style={{fontSize:"18px"}}>99%</Badge>
                        </Stack>
                        <Stack  direction="horizontal" className="my-2">
                            <div className="m-1">
                            <Badge bg="secondary">CSM 982</Badge>
                            </div>
                        </Stack>
                        
                    </Stack>
                </Button>
                <Button href="" className="w-100 bg-transparent text-black border-0">
                    <Stack  className="mb-3 shadow-lg p-2">
                        <Stack className="justify-content-between" direction="horizontal">
                            <h5 className="assTitle">Introduction</h5> 
                            <Badge bg="success" style={{fontSize:"18px"}}>99%</Badge>
                        </Stack>
                        <Stack  direction="horizontal" className="my-2">
                            <div className="m-1 mx-2">
                            <Badge>7/06/2021</Badge>
                            </div>
                            <div className="m-1">
                            <Badge bg="danger">22/23/2033</Badge>
                            </div>
                        </Stack>
                    </Stack>
                </Button>
                </div>
                </>
            }
        </Col>
    )
}
export { HomeDashboard }
