$(() => {

	$("#add-button").on("click",()=>{
		// get the input
		const newItem = $("#task-input").val();
		//clear the input
		$('#task-input').val("");
		// add it to the todo list
		const $newListItem = $('<li>');
		$newListItem.addClass('to-do-item');
		$newListItem.text(newItem);
		$('#to-do-list').append($newListItem);

		// when you click it remove it and add it to the done list
		$newListItem.on('click', ()=>{
			$newListItem.detach().appendTo($('#done-list'));
			$newListItem.removeClass('to-do-item');
			$newListItem.addClass('done-item');
		});
	});

});