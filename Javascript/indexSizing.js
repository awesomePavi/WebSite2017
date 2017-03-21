function fixDivs(){

	//$("#headerRight").css('padding-top', (($('#headerLeft').height() - $("#headerRight").height()))/2+'px');
	
	var aligned = $(".aligned");
	var alignTo = $(".alignTo");
	for (var i =0; i<alignTo.length;i++){
		$(aligned[i]).css('padding-top', (($(alignTo[i]).height() - $(aligned[i]).height()))/2+'px');
	}

	var scaled = $(".scaled");
	var scaleTo = $(".scaleTo");
	for (var i =0; i<scaleTo.length;i++){
		// console.log($(scaleTo[i]).height());
		// console.log($(scaled[i]).height());
		$(scaled[i]).height($(scaleTo[i]).height());
		$(scaled[i]).width($(scaleTo[i]).height());
	}



	var skillbar = $(".skillbar-title");
	var longest =0;
	for (var i =0; i<skillbar.length;i++){
		if ($(skillbar[i]).width() > longest){
			longest = $(skillbar[i]).width();
		}
	}

	for (var i =0; i<skillbar.length;i++){
		$(skillbar[i]).width(longest);
	}

	var skillbarData = $(".skillbar");
	var skillbarTitle = $(".skillbar-title");
	var skillbar = $(".skillbar-bar");
	var skillbarPercent = $(".skill-bar-percent");

	var colourCodes = {}

	for (var i =0; i<skillbarData.length;i++){
		var percentage = $(skillbarData[i]).attr('data-percent');
		$(skillbarPercent[i]).html(percentage);
		
		var colourUse = getColourBars(parseFloat(percentage));
		$(skillbarTitle[i]).css('background',colourUse);
		$(skillbar[i]).css('background',colourUse);

	}
}

function getColourBars(percentAmount){
	var tmp = Math.floor(percentAmount/10);
	switch(tmp) {
	case 10:
        return "#88cd2a";
    case 9:
        return "#88cd2a";
    case 8:
        return "#00a8ff";
    case 7:
        return "#00a8ff";
    case 6:
        return "#FF5700";
    case 5:
        return "#CD2A36";
    case 4:
        return "#CD2A36";
    case 3:
        return "#FFFFFF";
    case 2:
        return "#FFFFFF";
    case 1:
        return "#FFFFFF";
    case 0:
        return "#FFFFFF";
    default:
        return "#00a8ff";
	}
    
}