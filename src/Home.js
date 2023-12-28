import NavigationBar from './navigation';
import Sugestion from './sugestion';
import Content from './content';
import profileImg from './suggestion.PNG';
import './navigation.css';

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
