import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const intVal = {
    name:"",
    email:""
}
const FormFile = (props) => {
    const [inputData, setInputData] = useState(intVal);
  

    const inputHandle = (event) => {
        const result = event.target;
        const {name, value} = result;

        setInputData(()=>{
            return{
                ...inputData,
                [name]:value
            }
        })
    }
    
    const submitHandle = async (e) => {
        e.preventDefault()
        if(Object.keys(props.passEditData).length === 0){
             await props.onSubmit(inputData);
         }else{
             props.UpdateHadnle(inputData) 
        }
        setInputData(intVal) 
        console.log("Data Submit SuccesFully!")
    }
   
    useEffect(()=>{
        const result = props.passEditData;
        console.log(result)
        setInputData(result)
    },[props.passEditData])

    console.log(inputData)
    return (
        <>
            <Form onSubmit={submitHandle} className='mb-5'>
                {
                    props.sendInputHandle.map((element, index) => {
                        return (
                            <>

                                <Form.Group className="mb-3" key={index}>
                                    <Form.Label>{element.label}</Form.Label>
                                    <Form.Control
                                        type={element.type}
                                        name={element.name}
                                        placeholder={element.placeholder}
                                        value={inputData[element.name] || ''}
                                        onChange={inputHandle}
                                    />
                                </Form.Group>
                            </>
                        )
                    })
                }
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default FormFile