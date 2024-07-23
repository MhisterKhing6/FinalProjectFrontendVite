import emailPic from "../assets/verified.png"
import "./verfyemail.css";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";

const CongratulationsAssignment = ({show, onHide, showQuestion}) => {
    const redirect = useNavigate()
    return (
        <Modal show={show} onHide={onHide} backdrop="static">
        <Modal.Header closeButton />
        <Modal.Body>
        <section className="container">
            <section className="raise d-flex flex-column justify-content-center align-items-center">
                <div>
                    <img style={{width: '300px', height: "250px "}} className="img-fluid" src={emailPic} alt="email" />
                </div>
                <article className="text-center">
                    <h3 className=" text-primary lead my-1"><b>Assignment Saved </b> </h3>
                    <p style={{fontSize: "25px"}}>Next add questions to assignment?</p>
                </article>
                <button onClick={(e) => {
                    e.preventDefault()
                    showQuestion()
                    onHide()
                    
                }}  style={{minWidth: "240px" ,fontWeight: "bold", fontSize: "1rem"}} className="btn btn-primary">Add Question</button>
            </section>
        </section>
        </Modal.Body>
        </Modal>
    )
}

export {CongratulationsAssignment}