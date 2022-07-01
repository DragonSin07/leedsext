let mylead= []
let count =0
const inputel = document.getElementById("text-el")
const inpbtn = document.getElementById("save-inp")
const clrb = document.getElementById("clr")
const svtb = document.getElementById("sv-tab")
const ulel= document.getElementById("ul-el")
const leadsl= JSON.parse(localStorage.getItem("mylead"))
if (leadsl) {
	mylead= leadsl
	render()
}
svtb.addEventListener("click", function() {
	chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
		mylead.push(tabs[0].url)
		localStorage.setItem("mylead", JSON.stringify(mylead))
		render()
	})
})
clrb.addEventListener("click", function() {
	localStorage.clear()
	mylead= [ ]
	render()
	})
inpbtn.addEventListener("click", function() {
	mylead.push(inputel.value)
	inputel.value= ""
	localStorage.setItem("mylead", JSON.stringify(mylead))
	render();

})
function render() 
{	let il = ""
	for (let i = 0; i<mylead.length;i++) 
	{
	il += `<li>
				<a target='_blank' href='${mylead[i]}'>
					${mylead[i]}
				</a>
			</li>`
	/*const li= document.createElement("li")
	li.textContent= mylead[i]
	ulel.append(li)*/
	}
	ulel.innerHTML = il
}