(function ($) {
	"use strict";

	function $_GET(param) {
		var vars = {};
		window.location.href.replace( location.hash, '' ).replace(
			/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
			function( m, key, value ) { // callback
				vars[key] = value !== undefined ? value : '';
			}
		);

		if ( param ) {
			return vars[param] ? vars[param] : null;
		}
		return vars;
	}

	var qrcode = new QRCode('qrcode', {
		text: 'bitcoin:'+$_GET('addr')+'?amount='+$_GET('amount'),
		width: 250,
		height: 250,
		colorDark : '#000000',
		colorLight : '#ffffff',
		correctLevel : QRCode.CorrectLevel.H
	});

	$('.btcaddr').text($_GET('addr'));
	$('.wallet').attr('href', 'bitcoin:'+$_GET('addr'));

})(jQuery);
