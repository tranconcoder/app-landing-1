import './assets/scss/reset.scss';
import './assets/scss/variables.scss';
import './assets/scss/fonts.scss';
import './assets/scss/global.scss';

import Header from './components/Header';
import Banner from './components/Banner';
import Company from './components/Company';
import Features from './components/Features';
import Advantage from './components/Advantage';
import Design from './components/Design';
import ReasonChoose from './components/ReasonChoose';
import UltimateFeatures from './components/UltimateFeatures';
import Payment from './components/Payment';
import Customer from './components/Customer';
import Question from './components/Question';
import Download from './components/Download';
import Footer from './components/Footer';

function App() {
	return (
		<div className="app-container">
			<Header />
			<Banner />
			<Company />
			<Features />
			<Advantage />
			<Design />
			<ReasonChoose />
			<UltimateFeatures />
			<Payment />
			<Customer />
			<Question />
			<Download />
			<Footer />
		</div>
	);
}

export default App;
