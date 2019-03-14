let NavMenuItemMarkObj=null;


function SetNavMenuItemListener(){
	let NavMenuItems;
	NavMenuItems=GetNavMenuItems();
	for(let i=0;i<NavMenuItems.length;i++){
		NavMenuItems[i].addEventListener("mouseenter",HandleNavMenuItemMouseEnterEvent,false);
		NavMenuItems[i].addEventListener("mouseleave",HandleNavMenuItemMouseLeaveEvent,false);
		NavMenuItems[i].addEventListener("click",HandleNavMenuItemClickEvent,false);
	}
}

function GetNavMenuItems(){
	return document.getElementsByClassName("nav_menu_item_url");
}

function ShowNavMenuItemMark(obj){
	obj.parentNode.style.borderWidth="0.125rem";
}

function HideNavMenuItemMark(obj){
	obj.parentNode.style.borderWidth="0rem";
}


function HandleNavMenuItemMouseEnterEvent(event){
	ShowNavMenuItemMark(event.target);
}

function HandleNavMenuItemMouseLeaveEvent(event){
	if(event.target!=NavMenuItemMarkObj){
		HideNavMenuItemMark(event.target);
	}
}

function HandleNavMenuItemClickEvent(event){
	if(event.target!=NavMenuItemMarkObj&&NavMenuItemMarkObj!=null){
		HideNavMenuItemMark(NavMenuItemMarkObj);
	}
	ShowNavMenuItemMark(event.target);
	NavMenuItemMarkObj=event.target;
}

SetNavMenuItemListener();