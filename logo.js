		function logorun()
		{
			var urlval1=document.URL.search("searce.invoize.org");
			var urlval2=document.URL.search("ceva.invoize.org");
			if (urlval1>0)
			{
				
				document.getElementById("logo1").style.display="block";
				document.getElementById("Reg_link").style.display="none";
				
			}
			else if(urlval2>0)
			{
				document.getElementById("logo2").style.display="block";
				document.getElementById("Reg_link").style.display="none";
			}
			else
			{
				document.getElementById("Reg_link").style.display="block";
			}
		}
		function goto()
		{
			
			var urlval=document.URL.search("searce.invoize.org");
			var urlval2=document.URL.search("ceva.invoize.org");
			
			if(urlval>0)
			{
				window.location.assign("http://searce.invoize.org/prototype/index.html");
			}
			else if(urlval2>0)
			{
				window.location.assign("http://ceva.invoize.org/prototype/index.html");
			}
			else
			{
				window.location.assign("http://abc.invoize.org/prototype/index.html");
			}
		}	
		function signup()
		{
			document.getElementById("registration").style.display="block";
		}
		function Cancel_signup()
		{
			document.getElementById("registration").style.display="none";
		}
		function help_block()
		{
			document.getElementById("help").style.display="block";
			document.getElementById("help_text").style.color="#fff";
		}
		function help_none()
		{
			document.getElementById("help").style.display="none";
			document.getElementById("help_text").style.color="#999";
		}
		function wizard_page()
		{
			window.location.assign("http://searce.invoize.org/prototype/wizard/wizard.html");
		}
		
	