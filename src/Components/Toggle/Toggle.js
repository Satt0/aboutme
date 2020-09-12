import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import './Toggle.scss'
export default function Toggle() {
    const lang=useSelector(state=>state.display)
    const dispatch = useDispatch()
    function toggle(){
        dispatch({type:'toggle/language',payload:lang==='vi'?'en':'vi'})
    }
    return (
        <div className="toggle-lang" onClick={toggle}>
            {lang}
        </div>
    )
}
