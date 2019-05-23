import React from "react";
import 'tachyons';

const green = '#39D1B4';

const background = {
	backgroundColor: green
};

const MyInfo = () => 
  (
  	<body style={background}>
	  	<div>
	  		<h1 className="tc">Charlie Fitzgerald</h1>
	  		<hr/>
	  		<p className="tc">Hi, I'm learning React so I can get a job, and not die from starvation. Look at me! Weeeeeee</p>
	  		<hr />
	  		<div className="tc">
		  		<ol>
						<li>Let's go to Thailand</li>
						<li>I want to visit Korea</li>
						<li>Me want go back to Japan</li>
		  		</ol>
	  		</div>
	  	</div>
  	</body>
	);

	export default MyInfo;