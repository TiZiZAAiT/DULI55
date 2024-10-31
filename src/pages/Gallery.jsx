import { useEffect } from 'react'
import video from "../pictures/Gallery/VID_20240305_150834.mp4"

function Gallery() {
	useEffect(window.setRandomBackground, [])
	
	return (
		<div style={{ textAlign: 'center', marginBottom: '200px'}}>
    			<video width="400" controls>
        			<source src={video} type="video/mp4"/>
        			Your browser does not support HTML5 video.
    			</video>
		</div>
	)
}
export default Gallery