import './search.css'
import { useState, useEffect } from 'react'
import UserContainer from './userContainer'
import searchUsers from '../../utils/searchUsers'

const SeacrhBox =({setSearchProfile})=>{

    const url = `${process.env.BACKEND_URL}user/search/`
    const [users, setUsers] = useState([])

    useEffect(()=>{

    },[])

    const handleChange =async(e)=>{
        //search users
        const res = await searchUsers(url, e.target.value)
        setUsers(res.data.data)
        console.log(users)
    }


    return(
        <div className='searched_page_main_box'>
            <div className="search_user_side_box">
                
                {/*________search input field________  */}
                <h3>Search</h3>
                <div className="search_bar_div">
                    <input type="text" name="username" placeholder="Search someone..." autoComplete='off' onChange={(e)=>handleChange(e)} id="search_bar_input"/>
                </div>

                {/* ____________display searched users ____________*/}
                <div className="searched_user_container_list">
                    <ul>
                        {users && 
                        users.map((user, index)=>
                            
                            <li key={index}><UserContainer profile={user.profile_picture} username={user.username} userid={user._id} setSearchProfile={setSearchProfile}/></li>   
                        )} 
                       
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SeacrhBox