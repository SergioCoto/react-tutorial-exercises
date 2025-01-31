import React from "react";
import ReactDOM from "react-dom";

const animals = ["Horse", "Turtle", "Elephant", "Monkey"];

/**
 * change the content inside the map function
 **/
const animalsInHTML = animals.map((singleAnimal, i) => {
	return <li key={i}>{singleAnimal}</li>;
	/**  return <li>{singleAnimal}</li>;    **/
	/**return <li>{animals[i]}</li>;**/
});

ReactDOM.render(<ul>{animalsInHTML}</ul>, document.querySelector("#myDiv"));
