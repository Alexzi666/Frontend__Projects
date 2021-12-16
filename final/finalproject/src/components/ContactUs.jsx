import { useState } from 'react';
import '../styles/ContactUs.css';
import Thankyoupage from '../components/Thankyoupage.jsx';




function ContactUs({setPage}){

    const [showage, setShowage] = useState(false);
    const [showFirstname, setshowFirstname] = useState(false);
    const [showLastname, setshowLastname] = useState(false);
    const [state, setState] = useState({});


    function onChangeHandler(event) {
        
            let nam = event.target.name;
            let val = event.target.value;
            setState({[nam]: val});
          
    }


    function onlyNumberKey(event) {
        let x = event.target.value;
        
        const regex=/^[a-zA-Z]+$/;
        if (x.match(regex) || x === '')
            {
                setShowage(false);
            }
        else {
            setShowage(true);
        }
    }

    function onlyLetterKey(event) {
        let x = event.target.value;
        
        const regex=/^[0-9]+$/;
        if (x.match(regex) || x ==='')
            {
                setshowFirstname(false);
            }
        else {
            setshowFirstname(true);
        }
    }

    function onlyLetterKey1(event) {
        let x = event.target.value;
        
        const regex=/^[0-9]+$/;
        if (x.match(regex) || x ==='')
            {
                setshowLastname(false);
            }
        else {
            setshowLastname(true);
        }
    }

    function handleSubmit(){
        return(
            <Thankyoupage/>
        )
    }

    return (
        
        <div className="main-content" id='main__content'>

            <form className="create-form" action="#" method='POST'>

                <label className="label_person_name">
                    <span className="label_person_name_span">First name: </span>
                    <input type="text" className="person_name" id="fn" name="label_person_name_input" onChange={(e) => onChangeHandler(e)} placeholder="ex: Alex" minlength="1" maxlength="10" required onKeyPress={(e) => onlyLetterKey1(e)} onKeyUp={(e) => onlyLetterKey1(e)}/>
                    <p className={`firstname__indicator ${showLastname ? "" : "good"}`}>Please only type letters!</p>
                    <p className={`firstname__indicator ${showLastname ? "good" : ""}`}> 👍</p>
                    <span className="validity" id="validity2"></span>
                </label>

                <label className="label_phone_name">
                    <span className="label_pnumber_span">Enter your phone number: </span>
                    <input type="text" className="phone_name" name="label_phone_name" onChange={(e) => onChangeHandler(e)} placeholder="ex: xxx-xxx-xxxx" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
                </label>


                <label className="label_person_lastName">

                    <span className="label_person_name_span">Last name: </span>
                    <input type="text" className="person_name" id="ln" name="label_person_name_input_last" onChange={(e) => onChangeHandler(e)} required placeholder="ex: Jill" minlength="1" maxlength="10" onKeyPress={(e) => onlyLetterKey(e)} onKeyUp={(e) => onlyLetterKey(e)}/>
                    <p className={`lastname__indicator ${showFirstname ? "" : "good"}`}>Please only type letters!</p>
                    <p className={`lastname__indicator ${showFirstname ? "good" : ""}`}> 👍</p>
                    <span className="validity" id="validity1"></span>

                </label>

                <label className="label_person_age">
                    <span className="label_person_age_span">Want to share your age? </span>
                    <input type="text" className="person_age" name='age_input' onKeyPress={(e) => onlyNumberKey(e)} onChange={(e) => onChangeHandler(e)} onKeyUp={(e) => onlyNumberKey(e)}/>
                    <p className={`age_indicator ${showage ? "good" : ""}`}> 👍</p>
                    <p className={`age_indicator ${showage ? "" : "good"}`}>Please type in a number!</p>
                </label>


                <label className="select">
                    <span className="select_span">Please choose your favorite pet: </span>

                    <select name="select_dropbox" id="select_select">
                        <option value="0" selected>Please make your selection :)</option>
                        <option value="1">&nbsp;😼  &nbsp; cat</option>
                        <option value="2">&nbsp;&#128054; &nbsp; dog</option>
                        <option value="3">&nbsp;&#128055; &nbsp; pig</option>
                    </select>

                </label>
                

                <label className="like">
                    <span className="like_span">Do you like Sara's drawing? </span>
                    <select name="like_dislike" id="like__button">
                        <option value="0" selected>Please make your selection</option>
                        <option value="1">Luv it</option>
                        <option value="2">Not really</option>
                    </select>
                </label>


                <label className="email">
                    <span className="email_span">Do you want to receive our email? </span>
                    <input type="checkbox" className="email_checkbox" name="email"/>

                </label>

                <button className="form_submit" type="submit" disabled={!showFirstname || !showLastname} onClick={() => setPage('Thankyoupage')}>submit 😊</button>

            </form>

            
        </div>
    )
}

export default ContactUs;