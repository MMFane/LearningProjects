$("ul").on("click", "li", markDone);
$("ul").on("click", "span", deleteToDo);
$("input[type='text']").keypress(addToDo);
$("#toggle-form").click(toggleForm);

function markDone(event) {
	$(this).toggleClass("done");
	event.stopPropagation();
}
function deleteToDo(event) {
	console.log("deleting");
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
}

function addToDo(event) {
	if (event.which === 13) {
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + $(this).val() + "</li>");
		$(this).val("");
	}
}

function toggleForm() {
	$("input[type='text']").fadeToggle();
	if ($("h1 span").class === "rotate") {
		$("h1 span").addClass("unrotate");
		$("h1 span").removeClass("rotate");
	} else {
		$("h1 span").removeClass("unrotate");
		$("h1 span").addClass("rotate");
	}

}