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
			
			var urlval=document.URL.search("www.searce.invoize.org");
			var urlval2=document.URL.search("www.ceva.invoize.org");
			
			if(urlval>0)
			{
				window.location.assign("www.searce.invoize.org");
			}
			else if(urlval2>0)
			{
				window.location.assign("www.ceva.invoize.org");
			}
			else
			{
				window.location.assign("www.invoize.org");
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
			var urlval=document.URL.search("prototype");
			if(urlval>1)
			{
			window.location.assign("http://abc.invoize.org/prototype/wizard/wizard.html");
			}
			else
			{
			window.location.assign("http://invoize.org/wizard/wizard.html");
			}
		}
		
	