import { useState } from "react"
import { Badge, Button, Card, Col, Row, Stack } from "react-bootstrap"

const AssDashboard = ({title, url, type}) => {
    const [course, setCourse] = useState(false)
    return (
        <Col style={{backgroundColor: "#F0F8FF"}} className="shadow-sm p-2 border-1" xs={10} md={9} lg={10}>
        <div className="shadow-lg my-2 bg-opacity-10 p-md-2">
           <h4 className="subHeading">{title} </h4>
           
                    {course ? <Row>
                        <Col xs={12} md={6} lg={4}>
                        <Button  href="" className="p-sm-2 w-100 bg-transparent text-black border-0">
                        <Card style={{height:"150px"}} className="overflow-hidden p-2 border-0 styleCard shadow-lg">
                            <Card.Title>CSM 2333</Card.Title>
                            <Card.Body className="overflow-hidden">blakskslksl Introudction to java blaalklskls</Card.Body>
                        </Card>
                        </Button>
                        </Col>    
                    </Row>: <Button href="" className="w-100 bg-transparent text-black border-0">
                    <Stack  className="mb-3 shadow-lg p-2">
                        <Stack className="justify-content-between" direction="horizontal">
                            <h5 className="assTitle">Introduction to Java</h5> 
                            <Badge bg="success" style={{fontSize:"18px"}}>99%</Badge>
                        </Stack>
                        {type==="ass" ? <Stack  direction="horizontal" className="my-2">
                           <div className="m-1 mx-2">
                            <Badge>12/32/98</Badge>
                            </div>
                            <div className="m-1">
                            <Badge bg="danger">12/38/2023</Badge>
                            </div> 
                        </Stack> : <Stack  direction="horizontal" className="my-2">
                            <div className="m-1">
                            <Badge bg="secondary">CSM 982</Badge>
                            </div>
                        </Stack> }
                    </Stack>
                </Button> }
            </div>
        </Col>
    )
}
export { AssDashboard }
