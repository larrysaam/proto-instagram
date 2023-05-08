import './story.css';
import fruit from './fruit.png'
import lemon from './lemon.png'

const Story =()=>{

    // story array gotten from server
    let stories =[
        {
            userid:"123da23",
            name:"joe",
            ProfileImage:fruit
        },
        {
            userid:"5tr4523",
            name:"john",
            ProfileImage:lemon
        }
    ];


    const Followerstory =  stories.map((story) =>
                    <li className="FollowerStory" key={story.userid}>
                        <ul className='storyUl'>
                            <li>
                                <img src={story.ProfileImage} alt='' className='StoryProfileImg'/>
                            </li>
                            <li>
                               <p> {story.name}</p>
                            </li>
                        </ul>
                    </li>
                );

    return(
        <div id='StoryBox'>
            <ul className='storyUl'>
                {Followerstory}
            </ul>
        </div>
    )
}

export default Story;