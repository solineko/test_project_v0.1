let images=["https://via.placeholder.com/1280x720/f92525","https://via.placeholder.com/1280x720/4587f0","https://via.placeholder.com/1280x720/5dd054","https://via.placeholder.com/1280x720/080908","https://via.placeholder.com/1280x720/27ae1c"];

let timer=setInterval(function(){ChangeNextImage()},2000);
let CurrentPage=0;
let CarouselObj=document.getElementById("section_chief_carousel");
let ControllerListObj=document.getElementsByClassName("section_chief_carousel_controller_button");


function ChangePrevImage(){
	CurrentPage=CurrentPage-1;
	CheckResetPage();
	SetPage(CurrentPage);
}

function ChangeNextImage(){
	CurrentPage=CurrentPage+1;
	CheckResetPage();
	SetPage(CurrentPage);
}

function StopAutoChange(){
	clearInterval(timer);
}

function StartAutoChange(){
	timer=setInterval(function(){ChangeNextImage()},2000);
}

function CheckResetPage(){
	if(CurrentPage>(images.length-1)){
		CurrentPage=0;
	}
	if(CurrentPage<0){
		CurrentPage=(images.length-1);
	}
}

function SetPage(page){
	let temp='url('+'"'+images[page]+'"'+")";
	CarouselObj.style.backgroundImage=temp;
}

function JumpAssignationPage(event){
	let page=event.target.parentNode.value;
	SetPage(page);
}

document.getElementById("section_chief_carousel_controller_left").addEventListener("click",ChangePrevImage,false);
document.getElementById("section_chief_carousel_controller_right").addEventListener("click",ChangeNextImage,false);
document.getElementById("section_chief_carousel").addEventListener("mouseleave",StartAutoChange,false);
document.getElementById("section_chief_carousel").addEventListener("mouseenter",StopAutoChange,false);

for(let i=0;i<ControllerListObj.length;i++){
	ControllerListObj[i].addEventListener("click",JumpAssignationPage,false);
}


