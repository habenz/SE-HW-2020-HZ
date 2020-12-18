const button = document.getElementById("change-button");
button.onclick = changeColors;

function changeColors() {
	let headings = document.getElementsByClassName("changing-heading");
	for (heading of headings){
		const randomColor = Math.floor(Math.random()*16777215).toString(16);
		heading.style.color = "#" + randomColor;
	}
}


const head1 = document.getElementById("head1");
head1.onclick = () => hideMe(head1);

function hideMe(element){
	element.style.display = "none";
}


const head2 = document.getElementById("head2");
head2.onclick = () => head2.style.fontSize = "150%";


const reloadButton = document.getElementById("reset-button");
reloadButton.onclick = () => {window.location.reload; };