'use strict';

module.exports = ($) => {
	$('#run').on("click", () => {
		const code = $('#code').val();
		const $div = `<p>${code}</p>`;
		$('#console').html('').append($div);
	});
}