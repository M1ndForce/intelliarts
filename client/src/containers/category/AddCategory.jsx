import React, {useEffect, useState} from 'react';
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import axios from "axios";

const AddCategory = (props) => {

        const initState = {
            name: '',
            price: 0,
            sheH: ''
        }
        const [state, setState] = useState(initState)

        // const [makeReq, setMakeReq] = useState(false)


        const inputOnchangeHandler = (e) => {
            // e.target.name
            //TODO e => set into state
        }

        const addBtnHandler = (e) => {
            // e.preventDefault()
            // setMakeReq(true)
            axios.post('/category', {
                            ...state
                        }).then(res=>{
                            if (res.status === 200)
                            alert('Category added')
                            setState(initState)
                        })
            setState(initState)
        }

        // useEffect(() => {
        //     if (makeReq) {
        //         setMakeReq(false)
        //         axios.post('/category', {
        //             ...state
        //         }).then(res=>{
        //             if (res.status === 200)
        //             alert('Category added')
        //             setState(initState)
        //         })
        //     }
        // }, [makeReq])

        return <div>
            <Input value={state.name} name={'name'} onchage={inputOnchangeHandler}/>
            <Input name={'name'}/>
            <Input/>
            <Button text={'Add'} onClick={addBtnHandler}/>
        </div>
    }
;

export default AddCategory;
