import { useEffect, useState } from 'react'
import cont from '../pictures/cont.jpg'

function Contact() {
	useEffect(window.setRandomBackground, [])
	useEffect(window.formScript, [])
	
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