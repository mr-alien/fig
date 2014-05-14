$(document).ready(function() {
	//Controls Icon Size
	var elem = document.querySelector('#iconRange');
	var init = new Powerange(elem, { min: 16, max: 512, start: 128, callback: displaySize });
	var changeInput = document.querySelector('#iconRange');

	changeInput.onchange = function() {
		document.getElementById('generatedIcon').style.height= changeInput.value + "px";
		document.getElementById('generatedIcon').style.width= changeInput.value + "px";
		document.getElementById('generatedIcon').style.fontSize= changeInput.value/2 + "px";
        document.getElementById('generatedIcon').style.lineHeight= changeInput.value + "px";
	};

	function displaySize() {
		document.querySelector('#showIconSize span').innerHTML = elem.value + ' x ' + elem.value;
		document.querySelector('#showFontSize span').innerHTML = elem.value/2 + 'px ';
	}


	//Controls Font Size
	var elem2 = document.querySelector('#fontRange');
	var init = new Powerange(elem2, { min: 16, max: 256, start: 30, callback: displayFontSize });
	var changeFontSize = document.querySelector('#fontRange');

	changeFontSize.onchange = function() {
		document.getElementById('generatedIcon').style.fontSize= changeFontSize.value + "px";
	};

	function displayFontSize() {
		document.querySelector('#showFontSize span').innerHTML = elem2.value + 'px ';
	}



	//Change the icon on select change
	$('#iconList').bind('change keyup', function() {
		$selectedIcon = $(this).val();
		$("#generatedIcon span").html("&#x" + $selectedIcon + ';');


		$getIconName = $("#iconList option:selected").text();
		$("#showIconName span").text($getIconName);
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
			$('#IconColorSelector div').css('backgroundColor', '#' + hex);
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
		if($('input:radio[name=icontype]:checked').val() == 'circle') {
			$('#generatedIcon').css('border-radius', '50%');
		} else {
			$('#generatedIcon').css('border-radius', '0');
		}
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
	$('.top-links li a').on('click', function(event) {
		event.preventDefault();
		$('div[data-modal=' + $(this).attr('data-link') + ']').fadeIn();
	});

	$('.icon-close').on('click', function() {
		$(this).parent().fadeOut();
	});
});