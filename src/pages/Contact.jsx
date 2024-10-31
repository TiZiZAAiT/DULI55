import { useEffect, useState } from 'react'
import cont from '../pictures/cont.jpg'

function Contact() {
	useEffect(window.setRandomBackground, [])
	useEffect(window.formScript, [])

	// CAPTCHA Logic
	const [num1, setNum1] = useState(Math.floor(Math.random() * 10));
	const [num2, setNum2] = useState(Math.floor(Math.random() * 10));
	const [answer, setAnswer] = useState('');
	const [isCorrect, setIsCorrect] = useState(false);
	const [submitted, setSubmitted] = useState(false);
    
	const handleAnswerChange = (e) => {
	    setAnswer(e.target.value);
	};
    
	const handleSubmit = (e) => {
	    e.preventDefault();
	    if (parseInt(answer, 10) === num1 + num2) {
		setIsCorrect(true);
		setSubmitted(true);
		// Here, you can handle the actual form submission (e.g., send data to the server)
	    } else {
		alert("Incorrect answer. Please try again.");
		setAnswer('');
	    }
	};
	
	return (
		<div className="flex-container-c">
    			<div className="flex-item-left-c">
                		<h2>Contact Us</h2>
                		<div className="form">
                    			<form action="/action_page.php">

                        			<label for="fname">First Name</label>
                        			<input className="small" type="text" id="fname" name="firstname" placeholder="Your name.."/>

                        			<label for="lname">Last Name</label>
                        			<input className="small" type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                        			<label for="email">Email</label>
                        			<input className="small" type="text" id="email" name="email" placeholder="Your email.."/>

                        			<label for="message">Message</label>
                        			<textarea className="textbox" placeholder="Write your message here.."></textarea>

                        			<input type="submit" value="Submit" />
                        		</form>
                		</div>
    			</div>
    			<div className="flex-item-right-c">
       
                		<img width="100%" src={cont} alt="Duli Beach Resort"/>
             
    			</div>
		</div>
	)
}
export default Contact