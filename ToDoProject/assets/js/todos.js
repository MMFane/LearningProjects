$("ul").on("click", "li", markDone);
$("ul").on("click", "span", deleteToDo);
$("input[type='text']").keypress(addToDo);
$("#toggle-form").click(toggleForm);
$(".delete-all").click(deleteAllToDo);

function markDone(event) {
	$(this).toggleClass("done");
	if ($(this).parent().is("#main-list")) {
		$("#done-list").append("<li class='done'><span><i class='far fa-trash-alt'></i></span> " + $(this).text() + "</li>");
		$(this).fadeOut(500);
		$(this).remove();
	} else {
		$("#main-list").append("<li><span><i class='far fa-trash-alt'></i></span> " + $(this).text() + "</li>");
		$(this).fadeOut(500);
		$(this).remove();
	}
	event.stopPropagation();
}

function deleteToDo(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
}

function deleteAllToDo(event) {
	$(this).parent().siblings().find("li").fadeOut(500, function() {
		$(this).remove();
	});

	// animate trash can icon
	// $(this).find("i").animate([
	// 		//keyframes
	// 		{dataFaTransform: "shrink-8"},
	// 		{dataFaTransform: "grow-8"}
	// 	], 500);
	event.stopPropagation();
}

function addToDo(event) {
	if (event.which === 13) {
		$("#main-list").append("<li><span><i class='far fa-trash-alt'></i></span> " + $(this).val() + "</li>");
		$(this).val("");
	}
}

function toggleForm() {
	$("input[type='text']").fadeToggle();
	toggleIcon($(this));
}

function toggleIcon(elem) {
	if (elem.hasClass("open")) {
		elem.addClass("closed");
		elem.removeClass("open");
	} else {
		elem.removeClass("closed");
		elem.addClass("open");
	}
}