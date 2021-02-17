	<!-- Dynamic footer section -->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <!--JavaScript at end of body for optimized loading-->
    <script src="<?php echo base_url();?>assets/js/app.js?rndstr=<%= getRandomStr() %>"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
	<!-- GetButton.io widget --><?php $url = $this->router->fetch_class();?>
	<?php if($url=="beranda"){ ?>
	<script type="text/javascript">
		(function () {
			var options = {
				whatsapp: "+6281365068548", // WhatsApp number
				call_to_action: "Hubungi via WhatsApp", // Call to action
				position: "right", // Position may be 'right' or 'left'
			};
			var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
			var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
			s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
			var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
		})();
	</script>
	<!-- /GetButton.io widget -->
	<?php } ?>
</body>
</html>