// key listener reference: https://www.techiedelight.com/detect-enter-key-press-javascript/#:~:text=In%20plain%20JavaScript%2C%20you%20can,an%20Enter%20key%20is%20pressed.

$(() => {

	// add item on press enter
	$('#task-input').on('keydown',(e)=>{
		if (e.which === 13) {
			$('#add-button').click();
		}
	});
	// adding items to the list
	$("#add-button").on("click",()=>{
		// get the input
		const newItem = $("#task-input").val();
		//clear the input
		$('#task-input').val("");
		// add it to the todo list
		const $newListItem = $('<li>');
		$newListItem.addClass('to-do-item');
		$newListItem.addClass('list-item');
		$newListItem.append($('<span>').text(newItem));
		// $newListItem.text(newItem);
		// add a button to mark as done as well
		const $doneButton = $('<button>');
		$doneButton.addClass('list-item-control');
		$doneButton.text('Mark Done');
		// consider only having a single event handler on the whole list
		// https://ehsangazar.com/optimizing-javascript-event-listeners-for-performance-e28406ad406c
		$doneButton.on('click', ()=>{
			$newListItem.detach().appendTo($('#done-list'));
			$newListItem.removeClass('to-do-item');
			$newListItem.addClass('done-item');

			$doneButton.text('Remove Item');
			// doing this inside really seems wrong
			// I could remove the original button and add a new one  
			$doneButton.on('click', ()=>{
				$newListItem.remove();
			});
		});

		$newListItem.append($doneButton);

		$('#to-do-list').append($newListItem);

	});

});