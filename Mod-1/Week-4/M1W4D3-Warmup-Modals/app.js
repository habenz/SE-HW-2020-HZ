$(() => {

/* Exercise Begin */
console.log("IN JS");
	// Grabbing About the Game button
	const $openBtn = $('#open-modal');

	// Grabbing modal element
	const $modal = $('#modal');

	// Grabbing close button
	const $closeBtn = $('#close');

	// to open the modal
	const openModal = () => {
		$modal.show();
	}
	$openBtn.on('click', openModal);

	// to close the modal
	const closeModal = () => {
	  $modal.hide();
	}
	$closeBtn.on('click',closeModal);

	setTimeout(openModal, 5000);



/* Exercise End */

});
