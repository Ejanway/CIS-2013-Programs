var $ = function (id) 
{
    return document.getElementById(id);
};

doStuffComputer = function()
{
	whileFunction();
	forFunction();
	doWhileFunction();
};


function whileFunction()
{
	var counter = 1;
	var output = "";	

	while(counter<=90)
	{
		if(counter % 15===0)
		{
			output = output + "FizzBuzz\n";
			counter++;
		}
		else if(counter % 5===0)
		{
			output = output + "Buzz\n";
			counter++;
		}
		else if(counter % 3===0)
		{
			output = output + "Fizz\n"
			counter++;
		}
			else
			{
				output = output + counter+"\n"
				counter++;
			}
		}
		alert(output);
	};

	function forFunction()
	{
		var counter = 1;
		var output = "";	
	
		for(var counter=1; counter <= 100; counter++)
		{
			if(counter % 15===0)
			{
				output = output + "FizzBuzz\n";
				//counter++;
			}
			else if(counter % 5===0)
			{
				output = output + "Buzz\n";
				//counter++;
			}
			else if(counter % 3===0)
			{
				output = output + "Fizz\n"
				//counter++;
			}
				else
				{
					output = output + counter+"\n"
					//counter++;
				}
			}
			alert(output);
		};

		
		function doWhileFunction()
		{
			var counter = 1;
			var output = "";	
		
			do
			{
				if(counter % 15===0)
				{
					output = output + "FizzBuzz\n";
					counter++;
				}
				else if(counter % 5===0)
				{
					output = output + "Buzz\n";
					counter++;
				}
				else if(counter % 3===0)
				{
					output = output + "Fizz\n"
					counter++;
				}
					else
					{
						output = output + counter+"\n"
						counter++;
					}
				}
				while(counter<=100)

		alert(output);
	};
		
window.onload = function()
{
	$("doIt").onclick = doStuffComputer;
};