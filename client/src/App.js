import React, { useState } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer"
import SearchBar from "./components/SearchBar";
import ViewBar from "./components/ViewBar";
import FontContainer from "./components/FontContainer"

function App() {
	const defaultFontStyle = { fontSize: 24, customText: "" };
	const [customText, setCustomText] = useState(defaultFontStyle.customText);
	const [fontSize, setFontSize] = useState(defaultFontStyle.fontSize);
	const [isList, setIsList] = useState(false);
	const [searchText, setSearchText] = useState("");

	function handleChangeSearchText(value) {
		setSearchText(value);
	}

	function handleChangeCustomText(value) {
		setCustomText(value);
	}

	function handleChangeFontSize(value) {
		setFontSize(value);
	}

	function handleView(isListView) {
		setIsList(isListView);
	}

	
	function handleReset() {
		setCustomText(defaultFontStyle.customText);
		setFontSize(defaultFontStyle.fontSize);
		setSearchText("");
	}

	
	return (
		<div>
			<Header />
			<div className="ctn-main">
				<SearchBar
					onChangeSearchText={handleChangeSearchText}
					onChangeCustomText={handleChangeCustomText}					
					onChangeFontSize={handleChangeFontSize}					
					onReset={handleReset}
					searchText={searchText}
					customText={customText}
					fontSize={fontSize}
				/>
				<ViewBar 
					onChangeView={handleView}
					isList={isList}
				/>
				<FontContainer
					searchText={searchText}
					customText={customText} 
					fontSize={fontSize}
					listView={isList}
				/>
			</div>
			<Footer />
		</div>
	);
}
export default App;
