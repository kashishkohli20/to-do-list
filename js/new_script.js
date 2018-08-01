function add_item(){
	var task = document.querySelector("#data").value;

	const list = document.querySelector("#dynamic-list");
	list.innerHTML+="<li class='list-group-item' onclick='cut(this)'><span class='trash' onclick='remove_item(this)'><i class='fa fa-trash'></i></span>"+task+"</li>"
}
function add_item_enter(event){
	if (event.which==13) {
		add_item();
	}
}
function remove_item(item){
			item.parentNode.remove(item);
}
function cut(item){
			item.style.textDecoration='line-through';
}
