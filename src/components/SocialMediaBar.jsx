import facebook from '../pictures/facebook.png'
import instagram from '../pictures/instagram.png'
import tripadvisor from '../pictures/tripadvisor.png'
import ltp from '../pictures/phillippines.jpg'

function SocialMediaBar() {
	return (
		<div className="social">
			<table style={{
        			height: "100%",
        			paddingTop: "10px",
        			paddingBottom: "10px",
        			paddingRight: "5px",
				paddingLeft: "5px"
    			}}>
            			<tr style={{ height: "25%" }}>
                			<td style={{ textAlign: "center" }}>
                    				<a target="_blank" href="https://www.facebook.com/dulibeach">
                        				<img width="50" height="50" src={facebook} alt="Facebook" />
                    				</a>
                			</td>
            			</tr>
            			<tr style={{ height: "25%" }}>
                			<td style={{ textAlign: "center", paddingTop: "10px" }}>
                    				<a target="_blank" href="https://www.instagram.com/dulibeachresort/">
                        				<img width="50" height="50" src={instagram} alt="Instagram" />
                    				</a>
                			</td>
            			</tr>
            			<tr style={{ height: "25%" }}>
                			<td style={{ textAlign: "center", paddingTop: "10px" }}>
                    				<a target="_blank" href="https://www.tripadvisor.com/Hotel_Review-g294256-d8663261-Reviews-Duli_Beach_Resort-El_Nido_Palawan_Island_Palawan_Province_Mimaropa.html">
                        				<img width="50" src={tripadvisor} alt="TripAdvisor" />
                    				</a>
                			</td>
            			</tr>
            			<tr style={{ height: "25%" }}>
                			<td style={{ textAlign: "center", paddingTop: "10px" }}>
                    				<a target="_blank" href="https://philippines.travel/lovethephilippines">
                        				<img width="50" src={ltp} alt="Love the Philippines" />
                				</a>
                			</td>
            			</tr>
    			</table>
		</div>
	)
}

export default SocialMediaBar