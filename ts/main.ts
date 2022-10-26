const helloWorlds = document.querySelectorAll('.hello-world');
let headerContent: string = 'Hello World';

helloWorlds.forEach(helloWorld => {
	helloWorld.textContent = headerContent;
});