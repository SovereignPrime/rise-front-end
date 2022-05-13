import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import person1 from "../../styles/assets/person1.jpg";
import person2 from "../../styles/assets/person2.jpg";
import person3 from "../../styles/assets/person3.jpg";
import person4 from "../../styles/assets/person4.jpg";
import person5 from "../../styles/assets/person5.jpg";
import person6 from "../../styles/assets/person6.jpg";
import person7 from "../../styles/assets/person7.jpg";

const Matching = () => {
	return (
		<div className="wrapper">
			<div className="head">
				<h1>Start to Connect </h1>
				<hr className="solid" style={{ width: "800px" }}></hr>
			</div>
			<h1 className="matchingWord">
				<span className="wordM">M</span>
				<span className="worda">a</span>
				<span className="wordt">t</span>
				<span className="wordc">c</span>
				<span className="wordh">h</span>
				<span className="wordi">i</span>
				<span className="wordg">g</span>
				<span className="word1dot">.</span>
				<span className="word2dot">.</span>
				<span className="word3dot">.</span>
			</h1>
			<div className="MatchingCanvas overlayCanvas">
				<img
					src={person1}
					alt="person1"
					width={"90px"}
					height={"90px"}
					className="picsBig"
				/>
				<img
					src={person2}
					alt="person2"
					width={"200px"}
					height={"200px"}
					className="pics1"
				/>
				<img
					src={person6}
					alt="person6"
					width={"150px"}
					height={"150px"}
					className="pics2"
				/>

				<img
					src={person3}
					alt="person3"
					width={"250px"}
					height={"250px"}
					className="pics3"
				/>
				<img
					src={person4}
					alt="person4"
					width={"150px"}
					height={"150px"}
					className="pics4"
				/>
				<img
					src={person5}
					alt="person5"
					width={"70px"}
					height={"70px"}
					className="pics5"
				/>
				<img
					src={person7}
					alt="person7"
					width={"200px"}
					height={"200px"}
					className="pics6"
				/>
			</div>
		</div>
	);
};
export default Matching;
