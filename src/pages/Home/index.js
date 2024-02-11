import Sugestion from '../../components/Suggestion/sugestion';
import Content from '../../components/Reels/content';
import profileImg from '../../assets/images/suggestion.PNG';
import '../../components/Reels/reels.css'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate()

  useEffect(()=>{
    if(!localStorage.getItem('token')){
      navigate('/Login')
    }
  })

  return(
    <div className='homeDiv'>
        <Content />
        <Sugestion profileImg={profileImg}  />
    </div>

  )
}

export default Home;
