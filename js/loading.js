jQuery(document).ready(function($) {

	/* Loading functions */

	function loadingStart() {
		$('body').loading({
			message: '<img class="loading-image" src="img/loading.svg"><strong>Cargando…</strong>',
		});
		console.log('Loading called');
	}

	function loadingStop() {
		$('body').loading('stop');
		console.log('Loading stopped');
	}

	/* Button click to load */

	$('#loading-button').click(function () {
		loadingStart();
		setTimeout(function() {
		  loadingStop();
		}, 5000);
	});

});
