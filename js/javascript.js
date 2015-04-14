            /*
			script for displaying clock on screen
			*/
function mytimer(){
     var d=new Date();
	 document.getElementById("display_time").innerHTML=d.toLocaleTimeString();
}
			/*
			script for starting the alarm.It takes the value of selected element and 
			sets the timer by converting the values of hours + minutes in milliseconds. 
			*/
			function startAlarm(){
		         var totalTime;var a;var b;var c;
                 var h = document.getElementById("hours");
                 hours = h.options[h.selectedIndex].value;
                 var m = document.getElementById("minutes");
                 minutes = m.options[m.selectedIndex].value;
				 var s = document.getElementById("seconds");
				 seconds = s.options[s.selectedIndex].value;
				 a=60*60*hours * 1000 ;
				 b=60*minutes * 1000 ;
				 c=seconds * 1000 ;
				 totalTime=a+b+c;
				 setTimeout(function(){
				      document.getElementById("message").style.display = 'none';
                      document.getElementById("audioTag").play();
				      alert("TIME UP!! Go back to WORK buddy!");
				},totalTime); 
				displayRemaining();
               			
			}
			/* TO Display Running time */
			function displayRemaining()
			{
                 
				 var remHr = hours;
				 var remMin = minutes;
				 var remSec = seconds;
				 document.getElementById("message").style.display = '';
				 setInterval(function(){
				      if(remSec==0&&remMin==0&&remHr==0) system.exit(0);
				      if(remSec==0&& remMin>0)
				      {
					      remMin--;
					      if(remMin==0&& remHr>0)
					      {
					          remHr--;
					          remMin=59;
					      }
					          remSec=59;
					
				      }
                     else  if(remSec==0&& remMin==0&&remHr>0)
				     {
					
					      if(remMin==0&& remHr>0)
					      {
					          remHr--;
					          remMin=59;
					      }
					     remSec=59;
					
				     } 				
				remSec--;
				document.getElementById("message").innerHTML = "Timer started for "+remHr+" hour " +remMin+" minutes " +remSec +" seconds !!";
			},1000);
			
			}
			