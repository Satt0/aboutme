import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import './Toggle.scss'
export default function Toggle() {
    const lang=useSelector(state=>state.display)
    const dispatch = useDispatch()
    function toggle(){
        dispatch({type:'toggle/language',payload:lang==='vi'?'en':'vi'})
    }
    useEffect(()=>{
        let a=null;
        const toggle=document.getElementById('toggle');
        window.addEventListener('scroll',()=>{
           if(a) clearTimeout(a);
            toggle.className='toggle-lang hide'
            
           a = setTimeout(()=>{
                toggle.className='toggle-lang show';  
            },100)

        })
    })
    return (
        <div className="toggle-lang show" id='toggle' onClick={toggle}>
            {lang}
        </div>
    )
}
