var problem1 = function()
{
	// sum added up by checking the modulo of the ith character and 3/5
	var sum = 0;

	for (var i = 0; i < 1000; i++)
	{
		if ((i % 3 === 0) || (i % 5 === 0))
		{
			sum += i;
		}
	}
	return sum;
}

var problem2 = function()
{
	// sum added up
	var sum = 0;
	// first and second numbers
	var numOne = 1;
	var numTwo = 2;
	var numTemp = 0;

	// make sure that numOne is less than 4 million
	while (numOne <= 4000000)
	{
		// if numOne is even, add it to the sum
		if (numOne % 2 === 0)
		{
			sum += numOne;
		} 

		// holding onto numOne in numTemp to add it later to establish new numTemp
		numTemp = numOne;	
		// setting new first & second number
		numOne = numTwo;
		numTwo = numTemp + numTwo;	
	}
	return sum;
}

var problem3 = function()
{
	// setting number question asks for 
	var primeNum = 600851475143;
	// setting init i value 
	var i = 2;

	while (i <= primeNum)
	{
		if (primeNum % i === 0 && primeNum / i !== 1)
		{
			primeNum /= i;
		}
		else 
		{
			i++;
		}
	}

	return primeNum;
}


console.log("Problem 1 - The sum is: " + problem1());
console.log("Problem 2 - The sum is: " + problem2());
console.log("Problem 3 - The prime number is: " + problem3());
