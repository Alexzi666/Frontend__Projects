import Carousel from './Carousel';
import doll from '../pictures/doll.jpeg';
import alex from '../pictures/alex.jpeg';
import shin from '../pictures/shin.jpeg';
import flowers from '../pictures/flower.jpeg';
import jin from '../pictures/jin_selfie.jpeg';
import cat from '../pictures/cat.jpeg';
import bottle from '../pictures/bottle.jpeg';
import cherry from '../pictures/cherry.jpeg';
import donut from '../pictures/donut.jpeg';
import yass from '../pictures/yass.jpeg';



function Home(){

    const slides = [
        { src: yass, alt: "All the stickers Sara has used on her mac", text:"These are all the stickers that Sara used to have on her previous Mac, even though she no longer uses that Mac, but she decided to draw these stickers down, I like this drawing the best among all of her drawings", text2:"Stickers on Sara's Laptop"},
        { src: doll, alt: "A__Happy__doll__holding__sparkling__Water", text: 'Sara draw this picture while I was desperately looking for my first job as a recent graduated Math major student, ' , text2 : 'A Happy Doll Holding A Sparkling Water'},
        { src: alex, alt: "Sara draw me playing guitar :)", text: 'This picture was drawn while I just graduated from UCSD, I was extreamly happy finally getting out from school, so I started learning playing guitar. Sara decided to draw this moment of harmony', text2: 'Alex Playing Guitar'},
        { src: shin, alt: "Nohara_Shinnosuke", text: "Nohara Shinnosuke（野原しんのすけ／のはらしんのすけ）is the animation that Sara watchs the most in her childhood, this animation plays a huge impact to Sara's childhood" , text2:"野原しんのすけ／のはらしんのすけ"},
        { src: flowers, alt: "flowers", text:"This is a picture that Sara recently drew right after we went hiking over the Water Fall Track in the montain around City of Pasadena, we saw a great amount of beautiful flowers along the way." , text2:"Flowers"},
        { src: jin, alt: "Jin draw herself a selfie", text:"After Sara drew me a picture, she decided to draw herself a selfie, even though it looks creepy to me, but Sara thinks that she did a good job drawing herself a picture." ,text2:"Sara's Selfie"},
        { src: cat, alt: "A lonely cat watching a lure", text:"Sara saw this cat in a video, she then decided to draw a picture of this cat :)", text2:"Cat"},
        { src: bottle, alt: "All the milks that we drinked", text:"We have tried all of these products, the bottle in the middle has Sara's name on it, this is Sara's favorite work", text2:"Boba and Milk"},
        { src: cherry, alt: "Sakura", text:"Momoko Sakura（ちびまる子ちゃん）, another most watched childhood animation for Sara. Sara sometimes still watch this series while she is studying." , text2:"ちびまる子ちゃん"},
        { src: donut, alt: "An unicorn donut", text:"This picture was drawn when Sara wanted to draw something but did not know what to draw, so she went to YouTube and found a video teaching kids drawing and she decided to follow the video and draw this Unicorn Donut", text2: "Unicorn Donut"},

      ];

    return(
        <div className='carousel__div'>
            <Carousel slides={slides}/>
        </div>
    )
}
export default Home