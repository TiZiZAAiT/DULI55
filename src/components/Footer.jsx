import sigill from '../pictures/sigill.png'
import sigill2 from '../pictures/sigill2.png'

function Footer() {
	return (
		<div>
            		<footer className="big" style={{ position: 'fixed', bottom: 0 }}>
                		<table style={{ width: '100%', paddingTop: '10px', paddingBottom: '10px' }}>
                        		<tr>
                            			<td style={{ width: '30%', textAlign: 'right' }}>
                                			<img width="50" height="50" src={sigill} alt="Sigil 1" />
                            			</td>
                            			<td style={{ width: '40%', textAlign: 'center' }}>
                                			<p style={{ marginTop: '2px', marginBottom: '2px' }}>
                                    				Accredited by the Philippines Department of Tourism
                                			</p>
                                			<p style={{ marginTop: '2px', marginBottom: '2px' }}>
                                    				Official Tourism Partner of the Local Government Unit of El Nido
                                			</p>
                            			</td>
                            			<td style={{ textAlign: 'left' }}>
                                			<img width="50" height="50" src={sigill2} alt="Sigil 2" />
                            			</td>
                        		</tr>
                		</table>
            		</footer>

            		<footer className="small" style={{ position: 'fixed', bottom: 0 }}>
                		<table style={{ width: '100%', paddingTop: '5px', paddingBottom: '5px' }}>
                        		<tr>
                            			<td style={{ width: '14%', textAlign: 'right' }}>
                                			<img width="90%" src={sigill} alt="Sigil 1" />
                            			</td>
                            			<td style={{ width: '72%', textAlign: 'center' }}>
                                			<p style={{ marginTop: '2px', marginBottom: '2px' }}>
                                    				Accredited by the Philippines Department of Tourism
                                			</p>
                                			<p style={{ marginTop: '2px', marginBottom: '2px' }}>
                                    				Official Tourism Partner of the Local Government Unit of El Nido
                                			</p>
                            			</td>
                            			<td style={{ textAlign: 'left' }}>
                                			<img width="90%" src={sigill2} alt="Sigil 2" />
                            			</td>
                        		</tr>
                		</table>
            		</footer>
        	</div>
	)
}
export default Footer;