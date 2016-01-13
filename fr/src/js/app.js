$(function() {
	$('.gear_item').hover(function(){
		$('.gear_hover .thumbnail[data-gear-id="' + this.dataset.gearId + '"]').toggle()
	});
})