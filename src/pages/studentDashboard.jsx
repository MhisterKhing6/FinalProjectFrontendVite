import { useContext, useState, useEffect } from "react"
import { Container, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { AssDashboard } from "../components/courseDashboard"
import { HomeDashboard } from "../components/homeDashboard"
import { StudentDashboardNav } from "../components/studentDashboardNav"
import { StudentContext } from "../context/studentContext"
import { Loading } from "../components/loading"
const StudentDashboard = () => {
    const [home, setHome] = useState(true)
    const [assignments, setAssignments] = useState(false)
    const [scores, setScores] = useState(false)
    const redirect = useNavigate()
    const [loading, setLoading] = useState(true)
    const {loadDetails, authenticated, setAuthenticated, student, setStudent} = useContext(StudentContext)
    
    useEffect(()=> {
        loadDetails(setStudent, student,setLoading, setAuthenticated, redirect )
    }, [authenticated])
    return (<>  
            {loading ? <Loading /> :
            <section className="student">
                <Container className="shadow-lg">
                    <Row>
                        <StudentDashboardNav home={home} ass={assignments} scores={scores} setHome={setHome} setAss={setAssignments} setScores={setScores}/>
                        {home &&<HomeDashboard />}
                        {assignments && <AssDashboard title={"Assignments"} />}
                        {scores && <AssDashboard title={"Scores"} />}
                    </Row>
                </Container>
            </section>
}
    </>)
} 

export { StudentDashboard }
