import { useEffect } from 'react'
import soon from '../pictures/soon.png'

function Uc() {
	useEffect(window.setRandomBackground, [])
	
	return (
		<div className="flex-container-uc">
    			<div class="flex-item-left-uc">
                		<h2>Coming Soon</h2>
                		<p>Site under construction</p>
    			</div>
    			<div class="flex-item-right-uc">
       
           
                		<img width="100%" src={soon} alt="Coming soon"/>
          
       
    			</div>
		</div>
	)
}
export default Uc