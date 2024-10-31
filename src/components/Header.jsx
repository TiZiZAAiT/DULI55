import { Link } from 'react-router-dom'
import { useState } from 'react'
import dulibiglogo from '../pictures/DULIBIGlogo.png'
import dulismalllogo from '../pictures/DULIsmalllogo.png'
import smallmenu from '../pictures/smallmenu.png'


function Header() {

	const [activeLink, setActiveLink] = useState('/')

    	const handleClick = (path) => {
        setActiveLink(path)
    	}

	return (
		<div>
			<header className="big">
				<table style={{ width: '100%', textAlign: 'center', paddingTop: '5px', paddingBottom: '5px' }}>
					<tr>
						<td>
							<img width="737" height="103" src={dulibiglogo} alt="Logo" />
						</td>
					</tr>
				</table>

				<div className="flex-navbar">
					<Link className={'flex-item-big1 ' + (activeLink === '/' ? 'activeLink' : '')} 
					to="/" onClick={() => handleClick('/')}>HOME</Link>
					<Link className={'flex-item-small1 ' + (activeLink === '/' ? 'activeLink' : '')} 
					to="/" onClick={() => handleClick('/')}>HOME</Link>

					<Link className={'flex-item-big2 ' + (activeLink === '/resort' ? 'activeLink' : '')} 
					to="/resort" onClick={() => handleClick('/resort')}>RESORT</Link>
					<Link className={'flex-item-small2 ' + (activeLink === '/resort' ? 'activeLink' : '')} 
					to="/resort" onClick={() => handleClick('/resort')}>RESORT</Link>

					<Link className={'flex-item-big3 ' + (activeLink === '/activities' ? 'activeLink' : '')} 
					to="/activities" onClick={() => handleClick('/activities')}>ACTIVITIES</Link>
					<Link className={'flex-item-small3 ' + (activeLink === '/activities' ? 'activeLink' : '')} 
					to="/activities" onClick={() => handleClick('/activities')}>ACTIVITIES</Link>

					<Link className={'flex-item-big4 ' + (activeLink === '/restaurant' ? 'activeLink' : '')} 
					to="/restaurant" onClick={() => handleClick('/restaurant')}>RESTAURANT/BAR</Link>
					<Link className={'flex-item-small4 ' + (activeLink === '/restaurant' ? 'activeLink' : '')} 
					to="/restaurant" onClick={() => handleClick('/restaurant')}>RESTAURANT/BAR</Link>

					<Link className={'flex-item-big5 ' + (activeLink === '/gallery' ? 'activeLink' : '')} 
					to="/gallery" onClick={() => handleClick('/gallery')}>GALLERY</Link>
					<Link className={'flex-item-small5 ' + (activeLink === '/gallery' ? 'activeLink' : '')} 
					to="/gallery" onClick={() => handleClick('/gallery')}>GALLERY</Link>

					<Link className={'flex-item-big6 ' + (activeLink === '/contact' ? 'activeLink' : '')} 
					to="/contact" onClick={() => handleClick('/contact')}>CONTACT US</Link>
					<Link className={'flex-item-small6 ' + (activeLink === '/contact' ? 'activeLink' : '')} 
					to="/contact" onClick={() => handleClick('/contact')}>CONTACT US</Link>

					<a className="flex-item-big7">SEARCH</a>
					<a className="flex-item-small7">SEARCH</a>
				</div>
			</header>

			<header className="small" style={{ width: '100%' }}>
            			<table style={{ width: '100%', borderSpacing: 0 }}>
                    			<tr>
                        			<td style={{ width: '25%', backgroundColor: '#aaddff' }}>
                            				<div className="dropdown">
                                				<img width="100%" src={smallmenu} alt="Small menu" />
                                				<div className="dropdown-content">
                                    					<table style={{ width: '40%', borderSpacing: 0 }}>
                                            					<tr>
                                                					<td><Link className="dropdown" to="/">HOME</Link></td>
                                            					</tr>
                                            					<tr>
                                                					<td><Link className="dropdown" to="/resort">RESORT</Link></td>
                                            					</tr>
                                            					<tr>
                                                					<td><Link className="dropdown" to="/restaurant">RESTAURANT/BAR</Link></td>
                                            					</tr>
                                            					<tr>
                                                					<td><Link className="dropdown" to="/gallery">GALLERY</Link></td>
                                            					</tr>
                                            					<tr>
                                                					<td><Link className="dropdown" to="/activities">ACTIVITIES</Link></td>
                                            					</tr>
                                            					<tr>
                                                					<td><Link className="dropdown" to="/contact">CONTACT US</Link></td>
                                            					</tr>
                                            					<tr>
                                                					<td>SEARCH</td>
                                            					</tr>
                                					</table>
                                				</div>
                            				</div>
                        			</td>
                        			<td style={{ width: '75%', backgroundColor: 'white', textAlign: 'center' }}>
                            				<img width="85%" src={dulismalllogo} alt="Logo" />
                        			</td>
                    			</tr>
            			</table>
        		</header>
		</div>
	)
}

export default Header