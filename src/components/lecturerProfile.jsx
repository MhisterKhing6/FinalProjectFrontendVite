import { Avatar } from "@files-ui/react";
import { useState } from "react";
import { Button, FloatingLabel, Form, Modal, Spinner, Stack } from "react-bootstrap";
import { CgClose } from "react-icons/cg";
import { convertBase64 } from "../utils/config";
import { Loading } from "./loading";


const Profile = (show, handleClose) => {
    const [avatar, setImage] = useState("")
    const [uploadData, setUploadData] = useState({"email":"" , "name":" ", "profilePic":" ", "githubUsername":"", "class":"",
         "studentId":"", "index":"", "program": "", })

    const [disableButton, setdisButton] = useState(true)
    const [spinner, setSpinner] = useState()

    

    return(
        <>
        <Modal show={true} className="h-100 w-100">
            {false ? <div className="vh-100"><Loading /> </div>: <>
                <Stack direction="horizontal" className="p-2 w-100 justify-content-end">
                        <Button variant="secondary"><CgClose /></Button>
            </Stack>
        <Form className="my-2 w-100">
            <Stack className = "justify-content-center align-items-center">
                <div style={{borderRadius:"50%" ,width:"150px", height:"150px"}} className="shadow-lg">
                    <Avatar onChange={ async (val) => {
                        let result = await convertBase64(val)
                        setUploadData({...uploadData,'profilePic':result})
                        setdisButton(false)
                    }} 
                    src={uploadData.profilePic} 
                    variant="circle" 
                    style={{width:"150px", height:"150px"}}
                    accept="image/*"
                    changeLabel="Change Pic"
                    />
                </div>
                <Modal.Body className="w-100">
                    <FloatingLabel label="Name*" size={"sm"} className="w-100 mb-2">
                        <Form.Control value={uploadData.name} size="sm"
                        onChange={(val) => {
                            setUploadData({...uploadData, name:val.target.value});
                            setdisButton(false)
                        }
                            
                        }
                        readOnly type="text" placeholder=" " />
                    </FloatingLabel>
                    <FloatingLabel label="Email" size={"sm"} className="mb-2 w-100">
                        <Form.Control
                        value={uploadData.email}
                        size="sm" readOnly type="text" placeholder=" " />
                    </FloatingLabel>
                    <FloatingLabel className="w-100 mb-2" label="Program" size={"sm"}>
                        <Form.Control value={uploadData.program} size="sm" readOnly type="text" placeholder=" " />
                    </FloatingLabel>
                    <FloatingLabel className="w-100 mb-2" label="Year" size={"sm"}>
                        <Form.Control value={uploadData.year} readOnly size="sm" type="text" placeholder=" " />
                    </FloatingLabel>
                    <FloatingLabel className="w-100 mb-2" label="Student Id" size={"sm"}>
                        <Form.Control  value={uploadData.studentId} readOnly size="sm" type="text" placeholder=" " />
                    </FloatingLabel>
                    <FloatingLabel className="w-100 mb-2" label="Index Number" size={"sm"}>
                        <Form.Control value={uploadData.index} readOnly size="sm" type="text" placeholder=" " />
                    </FloatingLabel>

                    <FloatingLabel className="mb-2 w-100" label="Github UserName*" size={"sm"}>
                        <Form.Control 
                        onChange={(val) => setUploadData({...uploadData, githubUsername:githubUsername})}
                        value={uploadData.githubUsername} size="sm" type="text" placeholder=" " />
                    </FloatingLabel>
                    <div className="mx-auto">
                    <Button disabled className="w-50 parent" size="lg" variant="success">Update</Button>
                    <Spinner style={{left:"23%"}} variant="light" className="p-1 child" />
                    </div>
                    </Modal.Body>
            </Stack>
        </Form>
                </>}
        </Modal>
        </>
    )
}

export { Profile };
