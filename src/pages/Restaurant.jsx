import { useEffect } from 'react'
import res1 from '../pictures/res1.jpg'

function Restaurant() {
	useEffect(window.setRandomBackground, [])

	return (
		<div className="flex-container-res">
    			<div className="flex-item-left-res">
                		<h2>Restaurant/Bar</h2>
                		<p>At the Duli Beach Resort there is a restaurant with a bar where, besides cold and refreshing drinks, 
                		you can enjoy tasty and fresh food.<br/><br/>
                		Every day the food menu changes depending on the availability of fresh products at the local markets. 
                		Local fisherman provide us daily with the 'catch of the day'. Besides seafood there are always freshly made 
                		meals for everyone's liking. We also have a big variety of drinks. Pick your favorite beer, shot, soda and/ or 
                		juice. Even though we are not connected to the electricity grid we can guarantee you the drinks are cold!<br/><br/>
                		The restaurant is op from 7:30 am until 10 pm. Open for both inhouse, and day guest. The restaurant is right at 
                		the beach and is all set up for you to enjoy the view, food and / or drinks. If you stay at the resort you can, 
                		besides eat in the restaurant, have your breakfast, lunch and/ or dinner served at your own spacious balcony.<br/><br/>
                		Had enough of the water? No worries we got you covered. In the restaurant you can find books, magazines and a 
                		lot of games for both inside as outside. There are also plenty of lounge chairs, hammocks and sunbeds around 
                		for you to relax in and lay back. When there are waves in Duli, the inhouse instructors of Surf El Nido can 
                		be found either in the water or in the restaurant.
                		</p>
    			</div>
    			<div className="flex-item-right-res">
       
           		<img width="100%" src={res1} alt="Bar"/>
          
       			</div>
		</div>
	)
}
export default Restaurant