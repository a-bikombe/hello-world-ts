const helloWorlds = document.querySelectorAll('.hello-world');
let headerContent = 'Hello World';

helloWorlds.forEach(helloWorld => {
	helloWorld.textContent = headerContent;
});