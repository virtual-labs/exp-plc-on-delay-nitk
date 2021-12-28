var count=0,trackCounter=0;

function start()
{
	document.getElementById("mainOff").style.visibility="hidden";
	document.getElementById("mainOn").style.visibility="visible";
	document.getElementById("mon").style.backgroundColor="#FFFF00";
	document.getElementById("moff").style.backgroundColor="#996600";
	document.getElementById("bit4").style.backgroundColor="#FF0000";
	document.getElementById("on6").style.visibility="hidden";
	for(i=1;i<=3;i++)
	{
		document.getElementById("bit"+i).style.backgroundColor="#009900";
	}
	for(i=1;i<=5;i++)
	{
		if(i==2);
		else
		{
			document.getElementById("on"+i).style.visibility="visible";
		}
	}
	trackCounter=setInterval(function()
	{
		count++;
		document.getElementById("accum").innerHTML=count;
		doneCounting(count);
	},750);
	document.getElementById("arrow").style.visibility="visible";
	document.getElementById("arrow").style.transformOrigin="50% 50%";
	document.getElementById("arrow").style.animation="rotate 1.25s linear infinite";
}

function stop()
{
	count=0;
	document.getElementById("accum").innerHTML=count;
	clearInterval(trackCounter);
	document.getElementById("arrow").style.visibility="hidden";
	document.getElementById("arrow").style.animation="";
	document.getElementById("moff").style.backgroundColor="#FFFF00";
	document.getElementById("mon").style.backgroundColor="#996600";
	document.getElementById("dt").style.backgroundColor="#996600";
	document.getElementById("mainOff").style.visibility="visible";
	document.getElementById("mainOn").style.visibility="hidden";
	for(i=1;i<=5;i++)
	{
		if(i==4)
		{
			document.getElementById("bit"+i).style.backgroundColor="#009900";
		}
		else
		{
			document.getElementById("bit"+i).style.backgroundColor="#FF0000";
		}
	}
	for(i=1;i<=7;i++)
	{
		if(i==6)
		{
			document.getElementById("on"+i).style.visibility="visible";
		}
		else
		{
			document.getElementById("on"+i).style.visibility="hidden";
		}
	}
}

function doneCounting(count)
{
	if(count==20)
	{
		document.getElementById("arrow").style.visibility="hidden";
		document.getElementById("arrow").style.animation="";
		clearInterval(trackCounter);
		document.getElementById("mon").style.backgroundColor="#996600";
		document.getElementById("dt").style.backgroundColor="#FFFF00";
		document.getElementById("moff").style.backgroundColor="#FFFF00";
		for(i=1;i<=5;i++)
		{
			if(i==3)
			{
				document.getElementById("bit"+i).style.backgroundColor="#FF0000";
			}
			else
			{
				document.getElementById("bit"+i).style.backgroundColor="#009900";
			}
		}
		for(i=1;i<=7;i++)
		{
			if(i==4 || i==5)
			{
				document.getElementById("on"+i).style.visibility="hidden";
			}
			else
			{
				document.getElementById("on"+i).style.visibility="visible";
			}
		}
	}
}