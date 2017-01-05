//http://codepen.io/ugross/pen/zAitb
function animate(){
jQuery('.skillbar').each(function(){
	jQuery(this).find('.skillbar-bar').animate({
		width:jQuery(this).attr('data-percent')
	},2000);
});
}