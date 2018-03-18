import React from 'react';
import classes from './Slider.css';

const slider = ( props ) => (

	<div className={classes.DisplaySlidersWrapper}>

<div className={classes.row}>
	<div className={classes.Title}>
		<h2>Help <span>Today</span></h2>
	</div>
</div>
	<div className={classes.displayslider}>
		<div className={classes.dsdiv}>
			<p>Image 1</p>
		</div>
		<div className={classes.dsdiv}>
			<p>Image 2</p>
		</div>
		<div className={classes.dsdiv}>
			<p>Image 3</p>
		</div>
		<div className={classes.dsdiv}>
			<p>Image 4</p>
		</div>
	</div>

<div className={classes.row}>
	<div className={classes.Title}>
		<h2>Urgent <span>Help</span></h2>
	</div>
</div>
	<div className={classes.displayslider}>
		<div className={classes.dsdiv}>
			<p>Image 1</p>
		</div>
		<div className={classes.dsdiv}>
			<p>Image 2</p>
		</div>
		<div className={classes.dsdiv}>
			<p>Image 3</p>
		</div>
		<div className={classes.dsdiv}>
			<p>Image 4</p>
		</div>
	</div>


	<div className={classes.row}>
	<div className={classes.Title}>
		<h2>Awareness <span>Campaigns</span></h2>
	</div>
</div>
	<div className={classes.displayslider}>
		<div className={classes.dsdiv}>
			<p>Image 1</p>
		</div>
		<div className={classes.dsdiv}>
			<p>Image 2</p>
		</div>
		<div className={classes.dsdiv}>
			<p>Image 3</p>
		</div>
		<div className={classes.dsdiv}>
			<p>Image 4</p>
		</div>
	</div>



	</div>
 
	
   
);

export default slider;