$("ul").on("click", "li", markDone);
$("ul").on("click", "li span", deleteToDo);
$("input[type='text']").keypress(addToDo);

function markDone(event) {
	$(this).toggleClass("done");
	event.stopPropagation();
}
function deleteToDo(event) {
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
}

function addToDo(event) {
	if (event.which === 13) {
		$("ul").append("<li><span>X</span> " + $(this).val() + "</li>");
		$(this).val("");
	}
}