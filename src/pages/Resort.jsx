import { useEffect } from 'react'
import karta from '../pictures/karta.jpg'
import bungalow1 from '../pictures/bungalow1.jpg'
import turtles from '../pictures/turtles.jpg'


function Resort() {
	useEffect(window.setRandomBackground, [])
	
	return (
		<div>
			<div className="flex-container-resort">
    				<div class="flex-item-left-resort">
                			<h2>Resort</h2>
                			<p>Duli Beach is located in the north of Palawan, the most western island of the Philippines. 
                			Often referred to as 'the last frontier'. The area is still fairly undiscovered and there 
                			are many beautiful places waiting to be found. Most tourist going to Palawan visit besides 
                			the capital Puerto Princesa and  the Underground River, the northern province of the island, 
                			El Nido. One of the favorite destinations there is Bacuit Bay, located next to El Nido town. 
                			Duli Beach is located in the Barangay Bucana.</p>
    				</div>
    				<div className="flex-item-right-resort">
       
                			<img width="100%" src={karta} alt="Location"/>
          
    				</div>
			</div>

			<div className="flex-container-resort">
    				<div className="flex-item-left-resort">
                			<h2>Bungalows</h2>
                			<p>The resort offers 6 private bungalows for rent and 
                			therefor makes your stay on the beach extra special. The bungalows are all facing the 
                			ocean and have a spacious, clean, and practical setup.<br/>
                			Our bungalows are each six meter by six meter and surrounded by nature. They all have a 
                			twelve square meter balcony with sea view, a big bathroom with toilet, sink and shower 
                			“cold” water. The rooms are big and all come with a comfortable king-size bed. 
                			Because of our remote location we are not connected to the power grid and therefor power is 
                			limited. Inside the bungalow a solar battery supplies the lighting and we have usb-chargers 
                			to charge your gadgets.<br/>
                			The rate per bungalow per night is PHP 4500.-, this is good for two persons including breakfast. 
                			You can book direct with us via our website by using our contact form, or you can book through 
                			either Agoda, Booking.com or AirBnB.
					</p>
    				</div>
    			<div className="flex-item-right-resort">
       
                		<img width="100%" src={bungalow1} alt="Bungalow"/>
          
    			</div>
			</div>

			<div className="flex-container-resort">
    				<div class="flex-item-left-resort">
                			<h2>Marine Turtles</h2>
                			<p>In the north of Palawan there are still beaches where marine turtles go to make their 
                			nests, one of them is Duli Beach.<br/>
                			“Duli” means female turtle in the Sanskrit language, so a perfect name for the place. 
                			From November until February Duli Beach is a nesting ground for marine turtles. There are 
                			three different species nesting on Duli Beach, namely the Hawksbill turtle (named for their 
                			narrow, pointed beak), the Green turtle (named for the usually green fat found beneath its carapace) 
                			and the Olive Ridley turtle (which gets its name from the olive green color of its heart shaped shell). 
                			Off the three species the most nests found on Duli are those from the Olive Ridley turtle.<br/><br/>
                			All three species migrate long distances between feeding grounds and hatching beaches. Mature turtles 
                			always return to the exact beach from which they hatched. Females crawl out on beaches, dig nests and 
                			lay eggs mostly during the night. At around 60 days, the eggs hatch and the hatchlings instinctively head 
                			directly towards the water.<br/><br/>
                			At the resort we do everything in our power to protect the nests from poachers and animals. For instance we 
                			educated and trained our staff and neighbors about sea turtles. We have patrollers going around in the night 
                			to locate the nest. We also have build a hatchery at the resort to provide the best safety for the eggs. 
                			Whenever there is a nest hatching our guests can witness the release and we try to give as much information 
                			as possible. At the resort we offer the option for people to adopt a nest and in this way they help us out 
                			in our conservation efforts.<br/><br/>
                			Over the years we are doing the conservation work, we cofounded the El Nido Marine Turtle Conservation 
                			Network (#ENMTCN). An initiative with a few other businesses in El Nido to help and protect the marine 
                			turtles in the area. Members of the network help each other out and share knowledge and data among. The network 
                			is approved and backed by the Department of Environment and Natural Resources (DENR) and the Palawan Council for 
                			Sustainable Development (PCSD).<br/><br/>
                			Please have a look on our Facebook page or our Instagram account for the latest information and pictures.
					</p>
    				</div>
    				<div className="flex-item-right-resort">
       
                			<img width="100%" src={turtles} alt="Turtles"/>
          
    				</div>
			</div>
		</div>
	)
}
export default Resort;