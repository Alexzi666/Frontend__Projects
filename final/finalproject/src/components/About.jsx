import Tab from '../components/Tabs.jsx';
import jinw from '../pictures/JinWang.png';
import us from '../pictures/us.JPG';
import future from '../pictures/future.png';

function About(){

    const map = {
        Sara : {text0 : 'About Sara(Jin) Wang',text1 : 'Name : 王瑾', text2:"Sara's Bio", text3 : "Sara is a current student at USC. In her spare time, she enjoys drawing by herself. She owns a drawing book where she plans to fill every single page with her drawings one day. Even though it has been almost three years, the drawing book is still far from filled. I guess slow makes the greatest work!", img: jinw},
        "Sara and I" : {text0 : 'About this Project', text1 : '2019/02/05', text2:"Backstory", text3:"I met Sara six years ago when we were both freshman in college, we were young and happy and did not have to worry about 'finding a job', 'how much a job pays', 'getting married', etc. After we both graduated from college, our lifes were filled with 'looking for jobs', 'peer pressures' as well as 'VISA status' as international students. Happiness seems only have been drifting further and stress storms in and enveloped our life. That was when Sara decided to start drawing and looking for her inner peace, she always told me that she feels peace and calm when she draws. To me, her drawings serves as a 'time machine' that can travel me back in time, I could even smell the spring breeze and hear the bird singing of that day when I see her drawing. I though it would be great to collect these memories and make it into a story book.", img:us},
        Future : {text0:'About the Future', text1 : 'Photo Credit : Alex(Bingjie) Zi', text2:'For the Future Us', text3:"There are bread and butter in life, but also, poems and dreams. For the future Sara and Alex: maybe you have already landed your dream job, maybe you no longer need to worry about your neighbor playing death metal 4am in the morning, maybe you have already owned your first house, or maybe all the maybes never come true. Please smile to yourself, come and look at the drawings, appreciate what you have, you were happy. Find peace and calm in you, that's all it matters.",img : future},
        
      }

    return(
        <div className='main__div'>
            <Tab map={map}/>
        </div>
    )
}
export default About