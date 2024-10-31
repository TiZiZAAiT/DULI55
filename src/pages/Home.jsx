import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Home() {
	useEffect(window.setRandomBackground, [])
	useEffect(window.flexItemScript, [])
	useEffect(window.bookNowSlide, [])
	
	return (
		<div>
			<div className="flex-container">
    				<div className="flex-item-left">
        				<b>Resort</b>
        				<p className="hover-text" style={{display: "none"}}>
        					Duli Beach Resort is the first and only 
        					establishment that offers accommodation on Duli Beach. 
        					Come live in our bungalows on the beach.
        					<br/>
        					Duli Beach is located in the north of Palawan, 
        					the most western island of the Philippines. 
        					Often referred to as 'the last frontier'. 
        					The area is still fairly undiscovered and there 
        					are many beautiful places waiting to be found. “Duli” 
        					means female turtle in the Sanskrit language, a 
        					perfect name for the place since Duli Beach is a 
        					nesting ground for marine turtles from 
        					November until February.
        				</p>
    				</div>
    				<div class="flex-item-center">
        				<b>Restaurant</b>
        					<p class="hover-text" style={{display: "none"}}>
        					Duli Beach Resort has a restaurant 
        					on the premises that serves food and drinks 
        					during the whole day. Not only to in-house 
        					guests but also to visitors spending the day.
        					<br/>
        					<br/>
        					The menu changes every day depending on the 
        					availability of fresh products on the local 
        					market. The local fisherman provide us with the 
        					'catch of the day'. Besides seafood there are 
        					always freshly made meals for everyone's liking. 
        					We also have a big variety of drinks. Pick your 
        					favorite beer, shot, soda and/ or juice.
        				</p>
    				</div>
    				<div class="flex-item-right">
        				<b>Activities</b>
        				<p class="hover-text" style={{display: "none"}}>
        					Duli Beach Resort and the surrounding area offers 
        					a wide range of activities. You can rent surf boards, 
        					stand up paddle boards, body boards, skim boards and 
        					kayaks from the resort and there is always an inhouse 
        					instructor for lessons available ready to go if needed. 
        					You can also get a massage, play football, play 
        					volleyball or go island hopping in the Bacuit Bay.
        					The near town of El Nido also offers diving and a 
        					vibrant night life. Click here to see all activities 
        					offered by the resort and surrounding area.
        				</p>
    				</div>
			</div>
			<Link className="booknowBIG" to="/uc">BOOK NOW</Link>
			
		</div>
	)
}
export default Home