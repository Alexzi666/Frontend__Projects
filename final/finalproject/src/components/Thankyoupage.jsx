import '../styles/Thankyou.css';
import thankyoupic from '../pictures/thankyou.gif';

function Thankyoupage(){
    return (
        <div>
            <div className='thank__main'> <label class="fir" id='main__content'>Thank you!!! We have received your order!!!</label>
                <br className="sen"/> You gift is on the way! you should expect to receive your order in one month :) !!!
            </div>
            
        <li className="picc"><img className="footerPic" src={thankyoupic} alt="thankyou!!!"/></li>

        </div>
    )
}

export default Thankyoupage;