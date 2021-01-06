import {combineReducers} from 'redux';
const initState={
    language:{
        'vi':{
            nav:{
                galery:'Ảnh',
                contact:'Liên lạc',
                detail:'Thông tin'
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
                    title:'Học tại',
                    school:"Đại học Bách khoa Hà Nội",
                    major:'Chuyên ngành: Kỹ thuật máy tính',
                    year:'Niên khóa : 64',
                    degree:"Bằng: unknown"
                },
                hobby:{
                    title:'Sở thích',
                    hobby:'Lập trình và giải thuật',
                    sport:'Thể dục đường phố',
                    reading:'Đọc sách',
                    game:'chơi games'
                }
            }
        }
        ,
        'en':{
            nav:{
                galery:'Galery',
                contact:'Contact',
                detail:'Detail'
            },
            carousel:{
                title:"Hello",
                content:'My name is Tan, wellcome to my website!',
                comment:'Take a look at my photo first!'
            },
            detail:{
                detail:{
                    title:'Myseft',
                    name:`Name: Hoàng Minh Tân`,
                    dateOfBirth:`Date of birth: 6/6/2001`,
                    now:`Now: Single`,
                    height:`Height: 1.73m`,
                    weight:`Weight: 65kg`
                },
                study:{
                        title:'Study at',
                        school:"Hanoi University of Science and Technology",
                        major:'Major: Computer Engineering',
                        year:'Academic year: 64th',
                        degree:"unknown"
                },
                hobby:{
                    title:'Hobbies',
                    hobby:'Coding and solving algorithm',
                    sport:'Street workout',
                    reading:'Reading books',
                    game:'Playing games'
                    
                }
            }
        }
    }
    ,
    display:'vi'
}
const language=(state=initState.language,action)=>{
    return state
}
const display=(state=initState.display,action)=>{
    if(action.type==='toggle/language')
    {
        return action.payload
    }
    return state
}
export default combineReducers({
    language:language,
    display:display
})