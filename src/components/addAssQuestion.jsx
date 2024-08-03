import { Dropzone, FileCard } from '@files-ui/react'
import { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { postToBackend } from '../utils/backendCalls'
import { convertText } from '../utils/encodingFunctions'
import { AlertToast } from './alertTracker'
import { token } from '../utils/config'
import { getToken } from '../utils/localstorage'
const AddAssQuestion = ({compiler , assId, show, onHide, addQuestion, newQuestion}) => {
    const [uploadQuestion, setUploadQuestion] = useState({})
    const [fileD, setFileD] = useState(false)
    const [editorD, setEditorD] = useState(false)
    const [solutionScript, setSolutionScript] = useState([])
    const [solun, setSolun] = useState([])
    const [examples, setExamples] = useState([])

    const [fileS, setFileS] = useState(false)
    const [editorS, setEditorS] = useState(false)
    //
    const [showInfo, setShowInfo] = useState(false)
    const [infoMessage, setInfoMessage] = useState("")


    const handleSubmit = async (val)=> {
        val.preventDefault()
                    if(!uploadQuestion.requirement) {
                        setInfoMessage("please provide details to requirement")
                        setShowInfo(true)
                    }
                    //check for solution text script
                    if(!uploadQuestion.solutionScript) {
                        setInfoMessage("please provide solution test script by loading a file")
                        setShowInfo(true)
                    }else {
                        let assObject = {ext:compiler.extension.replaceAll(".","").split(",")[0] ,...uploadQuestion, AssignmentId:assId }
                        //submit to backend
                        let url = "/coder/lecturer/assignment/task"
                        let dataB = await postToBackend(url, assObject, getToken(token.lecturerTokenKey))
                        if(dataB.status !== 201) {
                        setInfoMessage(dataB.data.reason)
                        setShowInfo(true)
                        }      
                        else {
                            setUploadQuestion({})
                            
                            addQuestion()
                            onHide()
                        }
                    }
    }
    return (
        <Modal show={show} backdrop='static' onHide={onHide} className='p-2'>
            <Modal.Header closeButton >
                <h4>Add Question</h4>
           </Modal.Header>
            <Form onSubmit={handleSubmit} className='p-4'>
                <AlertToast show={showInfo} text={infoMessage} toggleShow={()=> setShowInfo(false)} />
                <Form.Label>
                    Question Number*
                </Form.Label>
                <Form.Control
                value={uploadQuestion.number}
                onChange={(val) => {setUploadQuestion({...uploadQuestion, number:val.target.value})}}
                className='mb-2' required type="number" />
                <Form.Label>
                    General Requirement*
                </Form.Label>
                <Form.Control
                onChange={(val)=> setUploadQuestion({...uploadQuestion, requirement:val.target.value})}
                value={uploadQuestion.requirement}
                required className='mb-2' as="textarea" rows={6} />
                <Form.Label>Explanation Examples*</Form.Label>
                <div className='mx-2 mb-2'>
                    
                        <Form.Check
                        label="File Upload"
                        style={{fontSize: "1.2rem"}}
                        inline
                        className='mx-4'
                        onClick={(val) => { 
                            setFileD(!fileD)
                            setEditorD(false)
                        }}
                        checked={fileD}
                        name="subMode"/>

                        <Form.Check
                        label="Editor"
                        style={{fontSize: "1.2rem"}}
                        inline
                        className='mx-4'
                        onClick={(val) => { 
                            setEditorD(!editorD)
                            setFileD(false)
                        }
                        }
                        checked={editorD}
                        name="subMode"/>
                    </div>

                    {fileD && <Dropzone max={1} label='Upload Examples'
                    //accept={compiler.extension.replaceAll(".","").split(",")}
                    onChange={async (val) => {
                        if(val.length === 0) {
                            setExamples([])
                            setUploadQuestion({...uploadQuestion, examples:""})
                        }else{
                        setExamples(val)
                        let test = await convertText(val[0].file)
                        setUploadQuestion({...uploadQuestion, examples:test})
                        }

                    }}
                    value={examples}
                    >
                      { examples.map(val => <FileCard key={val.id} {...val}  />) }
                       
                         
                    </Dropzone> }
                    <Form.Label>Solution Script*</Form.Label>
                    <div className='mx-2 mb-2'>
                    
                    <Form.Check
                    label="File Upload"
                    style={{fontSize: "1.2rem"}}
                    inline
                    className='mx-4'
                    onClick={(val) => { 
                        setFileS(!fileS)
                        setEditorS(false)
                        newQuestion(true)
                    }}
                    checked={fileS}
                    name="subMode"/>

                    <Form.Check
                    label="Editor"
                    style={{fontSize: "1.2rem"}}
                    inline
                    className='mx-4'
                    onClick={(val) => { 
                        setEditorS(!editorS)
                        setFileS(false)
                    }
                    }
                    checked={editorS}
                    name="subMode"/>
                </div>
                {fileS && <Dropzone max={1} label='Upload Solution File'
                    //accept={compiler.extension.replaceAll(".","").split(",")}
                    onChange={async (val) => {
                        if(val.length === 0) {
                            setSolutionScript([])
                            setUploadQuestion({...uploadQuestion, solutionScript:""})
                        }else{
                        setSolutionScript(val)
                        let test = await convertText(val[0].file)
                        setUploadQuestion({...uploadQuestion, solutionScript:test})
                        }

                    }}
                    value={solutionScript}
                    >
                      { solutionScript.map(val => <FileCard key={val.id} {...val}  />) }
                       
                         
                    </Dropzone> }

                <Form.Label className='mt-2'>Solution File Path*</Form.Label>
                <Form.Control
                value={uploadQuestion.solutionPath}
                onChange={val => {
                    setUploadQuestion({...uploadQuestion, solutionPath:val.target.value})
                }}
                as='textarea' />
                <Form.Control.Feedback>Use new line for multiple files</Form.Control.Feedback>
            <Button className='w-100 my-2' type="submit">Submit</Button>
            </Form>
            
        </Modal>
    )
}

export { AddAssQuestion }
