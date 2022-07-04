

// Javascript program to find the length
// of the smallest substring consisting
// of maximum distinct characters
let NO_OF_CHARS = 256;

// Find maximum distinct characters
// in any string
function max_distinct_char(str, n)
{
	
	// Initialize all character's
	// count with 0
	let count = new Array(NO_OF_CHARS);
	for(let i = 0; i < count.length; i++)
	{
		count[i] = 0;
	}

	// Increase the count in array if a
	// character is found
	for(let i = 0; i < n; i++)
	{
		count[str[i].charCodeAt(0)]++;
	}

	let max_distinct = 0;
	for(let i = 0; i < NO_OF_CHARS; i++)
	{
		if (count[i] != 0)
		{
			max_distinct++;
		}
	}
	return max_distinct;
}

function smallesteSubstr_maxDistictChar(str)
{
	
	// Size of given string
	let n = str.length;

	// Find maximum distinct characters
	// in any string
	let max_distinct = max_distinct_char(str, n);
	
	// Result
	let minl = n;

	// Brute force approach to find all
	// substrings
	for(let i = 0; i < n; i++)
	{
		for(let j = 0; j < n; j++)
		{
			let subs = null;
			
			if (i < j)
				subs = str.substring(i, j);
			else
				subs = str.substring(j, i);
				
			let subs_lenght = subs.length;
			let sub_distinct_char = max_distinct_char(
				subs, subs_lenght);

			// We have to check here both conditions together
			// 1. substring's distinct characters is equal
			// to maximum distinct characters
			// 2. substring's length should be minimum
			if (subs_lenght < minl &&
				max_distinct == sub_distinct_char)
			{
				minl = subs_lenght;
			}
		}
	}
	return minl;
}

// Driver Code

