//your JS code here. If required.
const result = "";
for(let i=1; i<=100; i++)
	{
		if(i % 3 === 0 && i % 5 === 0)
		{
			result+="FizzBuzz\n";
		}
		else if(i % 5 === 0)
		{
			result+="Buzz\n";
		}
		else if(i % 3 === 0)
		{
			result+="Fizz\n";
		}else
		{
			result+=i+ "\n";
		}
	}
alert(result);  