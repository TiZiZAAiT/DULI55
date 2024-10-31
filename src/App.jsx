import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import SocialMediaBar from './components/SocialMediaBar'
import Home from './pages/Home'
import Restaurant from './pages/Restaurant'
import Resort from './pages/Resort'
import Activities from './pages/Activities'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Uc from './pages/Uc'

function App() {
	return (
		<Router>
            		<div className="App">
                		<Header />
                		<SocialMediaBar />
                		<Routes>
                    			<Route path="/" element={<Home/>}/>
                    			<Route path="/restaurant" element={<Restaurant/>}/>
					<Route path="/resort" element={<Resort/>}/>
					<Route path="/activities" element={<Activities/>}/>
					<Route path="/gallery" element={<Gallery/>}/>
					<Route path="/contact" element={<Contact/>}/>
					<Route path="/uc" element={<Uc/>}/>
                		</Routes>
                		<Footer />
            		</div>
        	</Router>
	)
}

export default App