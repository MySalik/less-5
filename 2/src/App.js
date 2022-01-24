import React from "react"
import MainPage from "./page/MainPage"
import "./App.css"
import data from "./data.json"

function App() {
	return (
		<MainPage data={data} />
	);
}

export default App;
