import React from 'react';

import Header from './components/Header/Header';
import Poster from './components/Poster/Poster';
import Content from './components/Content/Content';

const App: React.FC = () => {
	return (
		<>
			<Header />
			<Poster />
			<Content />
		</>
	);
};

export default App;
