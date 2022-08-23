// console.log("Order placed");
let orderStatus = document.getElementsByClassName("order-status-block");

const executeOrder = () => {  
	let orderID = document.getElementById("order-id-input").value;
	
	document.getElementById("order-id-display").innerText = `Order Status for ID: ${orderID}`;
	document.getElementById("order-id-input").value = "";
	orderStatus[0].classList.remove("btn-light");
	orderStatus[0].classList.add("btn-success");


	chefReceived()
		.then(pizzaSauceAdded)
		.then(firstLayerOfCheezeAdded)
		.then(toppingsAdded)
		.then(secondLayerOfCheezeAdded)
		.then(pizzaBaked)
		.then(oreganoAddedAndPacked)
		.then(packageReceivedAtCounter)
		.then(handedOver)
		.catch((err) => console.log("error"));
}


const chefReceived = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			orderStatus[1].classList.remove("btn-light");
			orderStatus[1].classList.add("btn-success");
			resolve()
		}, 2000)
	})
}

const pizzaSauceAdded = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			orderStatus[2].classList.remove("btn-light");
			orderStatus[2].classList.add("btn-success");
			resolve()
		}, 10000)
	})
}

const firstLayerOfCheezeAdded = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			orderStatus[3].classList.remove("btn-light");
			orderStatus[3].classList.add("btn-success");
			resolve()
		}, 5000)
	})
}

const toppingsAdded = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			orderStatus[4].classList.remove("btn-light");
			orderStatus[4].classList.add("btn-success");
			resolve()
		}, 12000)
	})
}

const secondLayerOfCheezeAdded = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			orderStatus[5].classList.remove("btn-light");
			orderStatus[5].classList.add("btn-success");
			resolve()
		}, 5000)
	})
}

const pizzaBaked = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			orderStatus[6].classList.remove("btn-light");
			orderStatus[6].classList.add("btn-success");
			resolve()
		}, 15000)
	})
}

const oreganoAddedAndPacked = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			orderStatus[7].classList.remove("btn-light");
			orderStatus[7].classList.add("btn-success");
			resolve()
		}, 8000)
	})
}

const packageReceivedAtCounter = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			orderStatus[8].classList.remove("btn-light");
			orderStatus[8].classList.add("btn-success");
			resolve()
		}, 2000)
	})
}

const handedOver = () => {
	return new Promise((resolve, reject) => {
		setTimeout(()=>{
			orderStatus[9].classList.remove("btn-light");
			orderStatus[9].classList.add("btn-success");
			resolve();
		}, 1000)
	})
}


