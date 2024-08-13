import { Image, Container, Col, Row } from "react-bootstrap"
import image from "../../assets/c.png"
import { AudioPlay } from "./AudioPlayer";
import { VideoPlayer } from "./VideoPlayer";
import { PictureCard } from "./PictureCard";
import { DocumentCard } from "./DocumentCard";
const ChatCard = ({message={me:true}, type="video"}) => {


    return (
        <div className={`d-flex w-100 ${message.me ? "justify-content-start" : "justify-content-end"}`}>
        <Container>
        <Row>
        <Col sm={10} md={8} lg={5} className="p-3">
            <div className={`d-flex ${message.md ? "justify-content-start" : "justify-content-end"} align-items-center`}>
            <div className={`d-flex  align-items-center justify-content-start`}>
            {!message.me && <Image roundedCircle src={image} width={80} height={80} />  }
            <p style={{fontWeight:"bold"}} className="px-2">{message.me ? "You" : "John NewMan"}</p>
            <p className="px-2 text-muted">9:83pm</p>
            </div>
            <div className="text-success">
               
            </div>
            </div>
            <div className=" border-3 ">
                <p  style={{borderRadius: "20px",}} className="p-3 shadow-lg  sh border border-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore architecto quis rem repellendus atque officia excepturi, quos tenetur soluta adipisci provident facere reiciendis porro expedita eius odit nostrum accusamus voluptatem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusantium corporis assumenda quis inventore, molestiae officiis, reprehenderit fugit sequi rem doloribus totam! Placeat quae ipsum earum architecto velit. Corrupti, fugiat.
                                controls
                <div className="py-2">
               {type==="video" && <VideoPlayer className="w-100"
                src={"kofi kofilkfofikfofikfoikfoifso"}
                /> }
                {type==="audio" && <AudioPlay src="kokfosofkfoisfksofi" />}
                {type==="pic" && <PictureCard src={"kofi"} />}
                {type === "doc" && <DocumentCard docSize={20} docName={"kofi"} />} 
                </div>
                </p>
                </div>
            </Col>
        </Row>
        </Container>
        </div>
    )
}
export { ChatCard }
