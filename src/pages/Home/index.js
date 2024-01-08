import NavigationBar from '../../components/Navigation/navigation';
import Sugestion from '../../components/Suggestion/sugestion';
import Content from '../../components/Reels/content';
import profileImg from '../../assets/images/suggestion.PNG';


function App() {

  return(
    <div className='homeDiv'>
        <NavigationBar />
        <Content />
        <Sugestion profileImg={profileImg}  />
    </div>

  )
}

export default App;
