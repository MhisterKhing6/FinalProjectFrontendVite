import { useEffect, useState } from "react"
import { Badge, Button, Col, Stack } from "react-bootstrap"
import { getFromBackend } from "../utils/backendCalls"
import { token } from "../utils/config"
import { formatDate } from "../utils/datesManipulation"
import { getToken } from "../utils/localstorage"
import { Loading } from "./loading"

const AssignmentCard = ({course, id}) => {
    const [openAss, setOpenAss] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        const loadAssignments = async () => {

            let url = "/coder/student/open/course/assignments/" + id
            let result = await getFromBackend(url, getToken(token.studentTokenKey))
            console.log(result)
            setOpenAss(result.data)
            setLoading(false)
        }
        loadAssignments()
    },[])
    return (
        <Col style={{backgroundColor: "#F0F8FF"}} className="shadow-sm p-2 border-1" xs={10} md={9} lg={10}>
          {loading ? <Loading /> : <>
          <div className="shadow-sm mb-3">
           <h4 className="subHeading"> {course} Assignments</h4>
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
        </>
            }
        </Col>
    )
}
export { AssignmentCard }
