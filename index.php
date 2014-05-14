<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Online Flat Icon Generator</title>
		<link rel="stylesheet" href="css/default.css" />
		<meta name="description" content="Onlines First Flat Icon Generator" />
		<meta name="keywords" content="Flat Design, CSS, HTML, Flat Icons, Icon Generator, Icon Creator, Flat, Minimal" />
		<meta name="author" content="Vaibhav Mehta (Mr. Alien)" />
	</head>
	<body>
		<div id="wrapper">
			<header class="clear">
				<h1 class="logo">Flat Icon Generator <sup>Beta</sup></h1>
				<ul class="top-links">
					<li><a href="#" data-link="about">About</a></li>
					<li><a href="#" data-link="license">License</a></li>
					<li><a href="#" data-link="credits">Credits</a></li>
				</ul>
			</header>

			<div id="contentWrap" class="clear">
				<div id="leftPanel">
					<ul id="controls">
						<li>
							<h3>Select Icon</h3>
							<div class="custom-dropdown">
								<select id="iconList">
									<option value="e000">Mobile</option>
									<option value="e001">Laptop</option>
									<option value="e002">Desktop</option>
									<option value="e003">Tablet</option>
									<option value="e004">Phone</option>
									<option value="e005">Document</option>
									<option value="e006">Documents</option>
									<option value="e007">Search</option>
									<option value="e008">Clipboard</option>
									<option value="e009">Newspaper</option>
									<option value="e00a">Notebook</option>
									<option value="e00b">Book (Open)</option>
									<option value="e00c">Browser</option>
									<option value="e00d">Calendar</option>
									<option value="e00e">Presentation</option>
									<option value="e00f">Picture</option>
									<option value="e010">Pictures</option>
									<option value="e011">Video</option>
									<option value="e012">Camera</option>
									<option value="e013">Printer</option>
									<option value="e014">Toolbox</option>
									<option value="e015">Briefcase</option>
									<option value="e016">Wallet</option>
									<option value="e017">Gift</option>
									<option value="e018">Bar Graph</option>
									<option value="e019">Grid</option>
									<option value="e01a">Expand</option>
								</select>
							</div>
						</li>
						<li>
							<h3>Icon Size <span title="When you set the icon size, the icon glyph will re adjust the size proportionally and hence will reset the Custom Font Size.">?</span></h3>
							<input type="text" id="iconRange" />
						</li>
						<li>
							<h3>Font Size <span title="Make sure you set the size of the icon before setting up the font size as resetting the Icon size will lead to Reset of Custom Font Size.">?</span></h3>
							<input type="text" id="fontRange" />
						</li>
						<li>
							<h3>Colors</h3>
							<ul id="selectColors">
								<li><div id="BgColorSelector"><div style="background-color: #017afd"></div></div> <span>Background Color</span></li>
								<li><div id="IconColorSelector"><div style="background-color: #ffffff"></div></div> <span>Icon Color</span></li>
							</ul>
						</li>
						<li>
							<h3>Icon Shape</h3>
							<div class="control-group">
							  <input id="square" type="radio" value="square" name="icontype" checked />
							  <label for="square">Square Icon</label>
							</div>

							<div class="control-group">
							  <input id="circle" type="radio" value="circle" name="icontype" />
							  <label for="circle">Round Icon</label>
							</div>
						</li>
					</ul>
				</div>

				<div id="rightPanel">
					<div id="iconWrapper">
						<div id="iconInfo" class="clear">
							<h3 class="clear">Generated Icon <a class="btn" id="exportBtn" href="#">Get Icon</a></h3>
							<ul>
								<li id="showIconSize">Size : <span></span></li>
								<li id="showIconName">Name : <span>Mobile</span></li>
								<li id="ShowIcoBgColor">Background : <span>#017AFD</span></li>
								<li id="ShowFontColor">Color : <span>#FFFFFF</span></li>
								<li id="showFontSize">Font Size : <span>60px</span></li>
							</ul>
						</div>
						<div id="generatedIcon">
							<span style="font-family: icomoon;">&#xe000;</span>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div data-modal="about">
			<span class="icon-close"></span>
			<div class="modal-wrap">
				<h1 class="logo">Flat Icon Generator <sup>Beta</sup></h1>
				<p>Flat Icon Generator <sup>Beta</sup> can be used to generate Flat Icons with an ease and can be exported as .png images.</p>

				<p>As of now I've not covered the features extensively but are on my list and will be added soon.</p>

				<h3>Current Features</h3>
				<ul>
					<li>Select Icons (more than 1500 icons)</li>
					<li>Set the Icon Size</li>
					<li>Set the Font Size</li>
					<li>Custom Background Colors</li>
					<li>Custom Font Colors</li>
					<li>Icon Shape [Square, Circle]</li>
				</ul>
				<br>
				<p>Developed by <a href="http://stackoverflow.com/users/1542290/mr-alien" target="_blank">Mr. Alien</a></p>
			</div>
		</div>

		<div data-modal="license">
			<span class="icon-close"></span>
			<div class="modal-wrap">
				<h1 class="logo">Flat Icon Generator <sup>Beta</sup></h1>
				<p>Flat Icon Generator is Licensed Under <a href="http://www.apache.org/licenses/LICENSE-2.0.html" target="_blank">Apache License v2.0</a></p>
				<br>
				<p>As far as the Redistribution goes, refer Point 4 "Redistribution"</p>
				<p>You may reproduce and distribute copies of the Work or Derivative Works thereof in any medium, with or without modifications, and in Source or Object form, provided that You meet the following conditions:</p>
				<ul>
					<li>You must give any other recipients of the Work or Derivative Works a copy of this License; and</li>
					<li>You must cause any modified files to carry prominent notices stating that You changed the files; and</li>
					<li>You must retain, in the Source form of any Derivative Works that You distribute, all copyright, patent, trademark, and attribution notices from the Source form of the Work, excluding those notices that do not pertain to any part of the Derivative Works; and</li>
					<li>If the Work includes a "NOTICE" text file as part of its distribution, then any Derivative Works that You distribute must include a readable copy of the attribution notices contained within such NOTICE file, excluding those notices that do not pertain to any part of the Derivative Works, in at least one of the following places: within a NOTICE text file distributed as part of the Derivative Works; within the Source form or documentation, if provided along with the Derivative Works; or, within a display generated by the Derivative Works, if and wherever such third-party notices normally appear. The contents of the NOTICE file are for informational purposes only and do not modify the License. You may add Your own attribution notices within Derivative Works that You distribute, alongside or as an addendum to the NOTICE text from the Work, provided that such additional attribution notices cannot be construed as modifying the License.</li>
				</ul>
				<p>You may add Your own copyright statement to Your modifications and may provide additional or different license terms and conditions for use, reproduction, or distribution of Your modifications, or for any such Derivative Works as a whole, provided Your use, reproduction, and distribution of the Work otherwise complies with the conditions stated in this License.</p>
				<br>
				<p><b>Please DO NOT use this for any Commercial Purposes</b></p><br>
				<p>Information of the License for the plugins used can be found on their respective Git Hub Pages...</p>
				<br>
			</div>
		</div>

		<div data-modal="credits">
			<span class="icon-close"></span>
			<div class="modal-wrap">
				<h1 class="logo">Flat Icon Generator <sup>Beta</sup></h1>
				<h3>Credits</h3>
				<ul>
					<li><a href="http://icomoon.io/" target="_blank">IcoMoon for Glyphs</a></li>
					<li><a href="https://github.com/abpetkov/powerange" target="_blank">Powerange jQuery Plugin</a></li>
					<li><a href="http://www.eyecon.ro/colorpicker/#about" target="_blank">Eyecon jQuery Color Picker Plugin</a></li>
					<li><a href="https://github.com/niklasvh/html2canvas" target="_blank">HTML2Canvas for Image Exporting</a></li>
				</ul>
			</div>
		</div>
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
		<script src="js/powerange.js"></script>
		<script src="js/colorpicker.js"></script>
		<script src="js/html2canvas.js"></script>
		<script src="js/jquery.nicescroll.min.js"></script>
		<script src="js/module.js"></script>
	</body>
</html>






