(function($) {

	var fontSizeSpan = $("#showFontSize span"),
		generatedIcon = $('#generatedIcon'),
		showIconSizeSpan = $("#showIconSize span"),
		iconList = $('#iconList');

	// Preloading Animation
	$(window).on('load', function() {
		$('#status').fadeOut();
		$('#preloader').delay(350).fadeOut('slow');
		$('body').delay(350).css({
			'overflow': 'visible'
		});
	});

	// Init Power Range
	function initPowerRange(elem, opts) {
		new Powerange(elem, opts);
	}

	// Init color picker
	function initColorPicker(elem, opts) {
		elem.ColorPicker(opts);
	}

	// Icon range options
	var iconRange = document.querySelector('#iconRange');
	var icoRangeOpts = {
		min: 16,
		max: 512,
		start: 128,
		callback: displaySize
	};

	// Font range options
	var fontRange = document.querySelector('#fontRange');
	var fontRangeOpts = {
		min: 16,
		max: 256,
		start: 30,
		callback: displayFontSize
	};

	var initIconRange = new initPowerRange(iconRange, icoRangeOpts);
	var initFontRange = new initPowerRange(fontRange, fontRangeOpts);

	// Handle icon range change
	$(iconRange).on('change', function() {
		var value = 0;
		console.log('s');
		generatedIcon.css({
			'height': iconRange.value + 'px',
			'width': iconRange.value + 'px',
			'font-size': iconRange.value / 2 + 'px',
			'line-height': iconRange.value + 'px'
		});
		if ($('input:radio[name=icontype]:checked').val() == 'circle') {
			value = iconRange.value / 2;
		}
		generatedIcon.css('border-radius', value);
	});

	// Handle font range change
	$(fontRange).on('change', function() {
		generatedIcon.css('font-size', fontRange.value + "px");
	});

	// Display size
	function displaySize() {
		showIconSizeSpan.text(iconRange.value + ' x ' + iconRange.value);
		fontSizeSpan.text(iconRange.value / 2 + 'px');
	}

	// Display font size
	function displayFontSize() {
		fontSizeSpan.text(fontRange.value + 'px');
	}

	//Change the icon on select change
	iconList.on('change keyup', function() {
		selectedIcon = this.value;
		$("#generatedIcon span").html("&#x" + selectedIcon + ';');
		getIconName = $("#iconList option:selected").text();
		$("#showIconName span").html(getIconName);
	});

	// Color Picker Options
	var bgColorSelectorElem = $('#BgColorSelector'),
		iconColorSelectorElem = $('#IconColorSelector'),
		bgColorSelectorOpts = {
			color: '#0000ff',
			onShow: function(colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function(colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function(hsb, hex, rgb) {
				$('#BgColorSelector div').css('backgroundColor', '#' + hex);
				generatedIcon.css('backgroundColor', '#' + hex);
				$("#ShowIcoBgColor span").text('#' + hex);
			}
		},
		iconColorSelectorOpts = {
			color: '#0000ff',
			onShow: function(colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function(colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function(hsb, hex, rgb) {
				$("#IconColorSelector div").css('backgroundColor', '#' + hex);
				generatedIcon.css('color', '#' + hex);
				$("#ShowFontColor span").text('#' + hex);
			}
		};

	var bgColorSelector = new initColorPicker(bgColorSelectorElem, bgColorSelectorOpts);
	var iconColorSelector = new initColorPicker(iconColorSelectorElem, iconColorSelectorOpts);

	//Export the image button
	$('#exportBtn').on('click', function(event) {
		event.preventDefault();
		html2canvas(generatedIcon, {
			onrendered: function(canvas) {
				var img = canvas.toDataURL("image/png");
				window.open(img);
			}
		});
	});

	//Switch Icon Shape
	$('[name=icontype]').on('click', function() {
		var value = 0,
			ico = generatedIcon;
		if ($('input:radio[name=icontype]:checked').val() == 'circle') {
			value = ico.width() / 2;
		}
		ico.css('border-radius', value);
	});

	//Reset on Refresh
	$('input[name="icontype"]:eq(0)').prop('checked', true);
	iconList.prop('selectedIndex', 0);

	//Custom Scroll
	$("html").niceScroll({
		cursoropacitymin: 1,
		cursorborder: 0,
		cursorwidth: '3px',
		cursorborderradius: 0
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
		var appendData = this.value;
		var currentData = $(this).text();
		var newData = currentData + ' &#x' + appendData + ';';
		$(this).html(newData);
	});
}(jQuery));
