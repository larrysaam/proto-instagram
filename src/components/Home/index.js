import NavigationBar from './Navigation/navigation';
import Sugestion from './Suggestion/sugestion';
import Content from './Reels/content';
import profileImg from '../../assets/images/suggestion.PNG';
import '../../style/navigation.css';

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
