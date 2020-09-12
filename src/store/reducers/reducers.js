import {combineReducers} from 'redux';
const initState={
    language:{
        'vi':{
            nav:{
                galery:'Anh',
                contact:'Lien lac',
                detail:'Thong tin'
            },
            carousel:{
                title:"xin chao",
                content:'xin chao tat ca cac ban',
                comment:'xem anh cua minh nha'
            },
            detail:{
                detail:{
                    title:'Thông tin',
                    name:`Tên: Hoàng Minh Tân`,
                    dateOfBirth:`Ngày sinh: 6/6/2001`,
                    now:`Hiện tại: độc thân`,
                    height:`Chiều cao: 1.73m`,
                    weight:`Cân nặng: 65kg`
                },
                study:{

                },
                hobby:{

                }
            }
        }
        ,
        'en':{
            title:'hello'
        }
    }
    ,
    display:'vi'
}
const language=(state=initState.language,action)=>{
    return state;
}
const display=(state=initState.display,action)=>{
    if(action.type==='toggle/language')
    {
        return {...state,display:action.payload}
    }
    return state
}
export default combineReducers({
    language:language,
    display:display
})