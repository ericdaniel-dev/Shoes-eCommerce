import { useState } from 'react'
import Darkblue from '../assets/Dark_Blue_Shoes.png'
import Darkred from '../assets/Dark_Red_Shoes.png'
import Pink from '../assets/Pink_Shoes.png'


function Slider(){
	const [curr, setCurr] = useState(0);
	const [backgroundImages, setBackgroundImages] = useState(Darkblue);
	const images = [
		{pos: 1, imgSrc : Darkblue},
		{pos: 2, imgSrc : Darkred},
		{pos: 3, imgSrc : Pink}
	];
	function prev(e){
		if(curr==0){
			setCurr(2);
		}
		else{
			setCurr(curr-1);
		}
		setBackgroundImages(images[curr].imgSrc);
	}
	function next(){
		if(curr==2){
			setCurr(0);
		}
		else{
			setCurr(curr+1);
		}
		setBackgroundImages(images[curr].imgSrc);	
	}
	return(
		<div id="slider">
			<div id="showImage">
				<img src={backgroundImages}/>
			</div>
			<div id="choose">
				<button id="prevImg" onClick={prev}> ◄ </button>
				<button id="nextImg" onClick={next}> ► </button>
			</div>
		</div>
	);
}

export default Slider;