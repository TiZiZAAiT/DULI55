import { useEffect } from 'react'
import surf from "../pictures/surf.jpg"
import tour from "../pictures/tour.jpg"
import dive from "../pictures/dive.jpg"

function Activities() {
	useEffect(window.setRandomBackground, [])
	
	return (
		<div>
			<div className="flex-container-act">
    				<div className="flex-item-left-act">
                			<h2>Surfing</h2>
                			<p>In the Phillipines there are two seasons. You have the dry season and wind and swell come 
                			from the North -East, they call this Amihan and runs from December to May. The second  
                			season they call the wet season where the wind and swell then come from the South-West, 
                			which they call Habagat and runs from June to November. Both seasons and their swells give 
                			a consistent break at Duli Beach which makes it a great spot for surfing. The sandy slope 
                			gives a nice beach break, so beginner, pro and everything in between will definitely have 
                			good fun surfing here. The beach has on average seven months per year nice waves for 
                			surfing and is still pretty much secluded.
                			<br/>
                			At the resort we rent surfboards in all different shapes and sizes. For example we have 
                			for the beginners 8 feet foam longboards to start off with. Any skill level after beginner 
                			can find his or her preferred board in the rack, with short- and longboards to choose from. 
                			We also have in-house instructors ready to go, to give you surf 
                			lesson or assistance if wished for.
					</p>
    				</div>
    				<div className="flex-item-right-act">
           
                			<img width="100%" src={surf} alt="Surfing boards"/>
            
    				</div>
			</div>

			<div className="flex-container-act">
    				<div className="flex-item-left-act">
                			<h2>Island Hopping</h2>
                			<p>With 45 islands, Island hopping in Bacuit Bay is one of the biggest highlights in the area. 
                			Island hopping tours for the bay leave from El Nido town. The day-tour options are as follows:<br/><br/>
                			<b>Tour A</b> covers lagoons and beaches, including Miniloc Island’s Small Lagoon and Big Lagoon, 
                			Simizu Island, Payong-Payong Beach and Seven Commandos Beach (P1,200 per person).<br/><br/>
                			<b>Tour B</b> includes caves, coves and beaches such as Codugnon Cave, Cathedral Cave, Snake Island, 
                			Pinagbuyutan Island, Pangulasian Island and Lagen Island (P1,300 per person).<br/><br/>
                			<b>Tour C</b> takes you to hidden beaches and shrines like Tapuitan Island, Star Beach, 
                			Hidden Beach, Secret Beach and Helicopter Island. (P1,400 per person).<br/><br/>
                			<b>Tour D</b> highlights island beaches, namely Cadlao Island, Nat Nat Beach, Pasandigan Beach, 
                			Paradise Beach, Ubugon Cave and Bukal Beach (P1,200 per person).<br/><br/>
                			Lunch will be prepared by your guides and served at one of the stops. You can also go for a 
                			private or custom tour. The price for that will depend on your wishes.<br/><br/>
                			On top of the tour price there's a mandatory P200 Eco-Tourism Development Fee (EDTF) per person which 
                			is valid for 10 days. The collection of the ETDF is a way to maintain a sustainable protection program 
                			of El Nido's natural resources from the impact of tourism on the environment.
                			</p>
    				</div>
    				<div className="flex-item-right-act">
           
                			<img width="100%" src={tour} alt="Tour map"/>
          
    				</div>
			</div>

			<div className="flex-container-act">
    				<div className="flex-item-left-act">
                			<h2>Diving</h2>
                			<p>The most popular diving spots in the area are located in the Bacuit Bay, located west of El Nido. 
                			There are more than 30 dive sites scattered around 45 islands and islets. You can find 45 species 
                			of hard corals, over 800 species of fish, 5 species of sea turtles, 5 species of marine mammals, and 
                			uncountable numbers of marine invertebrates.<br/><br/>
                			Diving in El Nido is good for all levels of experience. Bacuit Bay offers dive sites for Open Water 
                			Course students as well as sites for divers with many years of experience. Depths of the dive sites 
                			vary between 10 meter and 40 meters. Besides that there are several shallow areas to do a Discover 
                			Scuba Diving for the very first time and still have the luxury to see beautiful corals, fish and even 
                			a turtle if you're lucky. <br/><br/>The currents in El Nido are usually caused by tidal currents which are very 
                			slight to moderate depending on tidal fluctuations. The currents are very manageable and divers can 
                			easily swim back to the boat. <br/><br/>Divers have seen whale sharks, manta rays and dugongs, but these 
                			sightings are rare and seasonal. Please don’t expect to see these large species and consider yourself 
                			lucky if you are rewarded with a visit of one of these wonderful creatures.
                			</p>
    				</div>
    				<div className="flex-item-right-act">
       
                			<img width="100%" src={dive} alt="Diving map"/>
          
    				</div>
			</div>

		</div>
	)
}
export default Activities;