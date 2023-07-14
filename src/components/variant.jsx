import Darkblue from '../assets/Dark_Blue_Shoes.png'
import Darkred from '../assets/Dark_Red_Shoes.png'
import Pink from '../assets/Pink_Shoes.png'

function Pricing(){
	const prices = [
		{name : 'Dark Blue', price : '$30', imgSrc : Darkblue},
		{name : 'Pink', price : '$30', imgSrc : Pink},
		{name : 'Dark Red', price : '$30', imgSrc : Darkred}
	];
	const cardlist = prices.map(item=>(
		<div id="card" key={item.name}>
			<div id="thumbnail">
				<img src={item.imgSrc}/>
			</div>
			<h3>{item.name}</h3>
			<p>Price: {item.price}</p>
		</div>
		));
	return(
		<div id="pricing">
			{cardlist}
		</div>
		);
}

export default Pricing;