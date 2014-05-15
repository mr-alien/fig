//Controls Icon Size
var elem = document.querySelector('#iconRange');
var init = new Powerange(elem, { min: 16, max: 512, start: 128, callback: displaySize });
var changeInput = document.querySelector('#iconRange');

$("#iconRange").on('change', function() {
	var value = 0, ico = $('#generatedIcon');
	ico.css({
		'height' : changeInput.value + 'px',
		'width' : changeInput.value + 'px',
		'font-size' : changeInput.value/2 + 'px',
		'line-height' : changeInput.value + 'px'
	});
    if($('input:radio[name=icontype]:checked').val() == 'circle') {
    	value = changeInput.value/2;
    }
    ico.css('border-radius', value);
});

function displaySize() {
	$("#showIconSize span").text(elem.value + ' x ' + elem.value);
	$("#showFontSize span").text(elem.value/2 + 'px');
}


//Controls Font Size
var elem2 = document.querySelector('#fontRange');
var init = new Powerange(elem2, { min: 16, max: 256, start: 30, callback: displayFontSize });
var changeFontSize = document.querySelector('#fontRange');

$("#fontRange").on('change', function() {
	$("#generatedIcon").css('font-size', changeFontSize.value + "px");
});

function displayFontSize() {
	$("#showFontSize span").text(elem2.value + 'px');
}


//Change the icon on select change
$('#iconList').bind('change keyup', function() {
	$selectedIcon = $(this).val();
	$("#generatedIcon span").html("&#x" + $selectedIcon + ';');


	$getIconName = $("#iconList option:selected").text();
	$("#showIconName span").html($getIconName);
});



//Color Picker
$('#BgColorSelector').ColorPicker({
	color: '#0000ff',
	onShow: function (colpkr) {
		$(colpkr).fadeIn(500);
		return false;
	},
	onHide: function (colpkr) {
		$(colpkr).fadeOut(500);
		return false;
	},
	onChange: function (hsb, hex, rgb) {
		$('#BgColorSelector div').css('backgroundColor', '#' + hex);
		$('#generatedIcon').css('backgroundColor', '#' + hex);
		$("#ShowIcoBgColor span").text('#' + hex);
	}
});



$('#IconColorSelector').ColorPicker({
	color: '#0000ff',
	onShow: function (colpkr) {
		$(colpkr).fadeIn(500);
		return false;
	},
	onHide: function (colpkr) {
		$(colpkr).fadeOut(500);
		return false;
	},
	onChange: function (hsb, hex, rgb) {
		$("#IconColorSelector div").css('backgroundColor', '#' + hex);
		$("#generatedIcon").css('color', '#' + hex);
		$("#ShowFontColor span").text('#' + hex);
	}
});


//Export the image button
$('#exportBtn').on('click', function(event) {
	event.preventDefault();
    html2canvas($('#generatedIcon'), {
      onrendered: function(canvas) {
        var img = canvas.toDataURL("image/png");
        window.open(img);
      }
    });
});

//Switch Icon Shape
$('[name=icontype]').on('click', function() {
	var value = 0, ico = $('#generatedIcon');
	if($('input:radio[name=icontype]:checked').val() == 'circle') {
		value = ico.width()/2;
	}
	ico.css('border-radius', value);
});

//Reset on Refresh
$('input[name="icontype"]:eq(0)').prop('checked', true);
$('#iconList').prop('selectedIndex',0);

//Custom Scroll
$("html").niceScroll({
	cursoropacitymin : 1,
	cursorborder : 0,
	cursorwidth : '3px',
	cursorborderradius : 0
});



//Modal Controller
$('.top-links li a:not([data-fork])').on('click', function(event) {
	event.preventDefault();
	$('div[data-modal=' + $(this).attr('data-link') + ']').fadeIn();
});

$('.icon-close').on('click', function() {
	$(this).parent().fadeOut();
});


$("#iconList option").each(function() {
	var appendData = $(this).val();
	var currentData = $(this).text();
	var newData = currentData + ' &#x' + appendData + ';';
	$(this).html(newData);
});