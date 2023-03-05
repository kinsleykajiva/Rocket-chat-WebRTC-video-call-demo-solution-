// const socketX = io('http://localhost:5200');


let socket;

// socket = new WebSocket('ws://localhost:5200');
/*
socket.onmessage = (event) => {
	
	socket.onclose = () => {
		console.log('WebSocket disconnected');
	};
	const message = JSON.parse(event.data);
	console.log(12,message)
	if (message.type === 'userList') {
		const userList = document.getElementById('userList');
		userList.innerHTML = '';
		message.data.forEach((user) => {
			const li = document.createElement('li');
			li.innerText = user;
			userList.appendChild(li);
		});
	}
};*/
