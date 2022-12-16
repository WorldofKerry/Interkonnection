Spectral power distribution. 
Spectral albedo of natural surfaces. 
Addictive and Subtractive Colour (RGB vs CMYK). 
	i.e. when all the colours are combined, does it make white or black?
Human rod (~100 million, grey-scale vision, sensitive, poor spatial detail) vs human cone (~6 million, colour vision, in high light, less sensitive, higher resolution). 
## Metamers
Different spectral power distributions can give the same tristimulus values (e.g. perceived sunlight can be mimicked with matching light from tv, even though they have different spectral power distributions), as humans do not ‘see’ the spectral power distribution, but rather the cone response curves.
## Colour Matching
Three primaries work for most, provided allow subtractive matching. 
	some can match with two or only one primary
		most likely caused by biological differences
Most people make same matches. 
Negative matching is also possible. 
Some colours can’t be matched with only positive colours, so we write
	$M+aA=bB+cC$, interpreting as $(-a,b,c)$, for subtractive matching
Basically, when there’s a real life light source of some specific spectral power distribution, the computer must find rgb values that allows the spectral power distribution of the rgb LEDs to be perceived the same by human eyes. 
## Colour Spaces
RGB
CIE XYZ: primaries are imaginary, coordinates correspond to amount of each primary
CIE LAB (Uniform Colour Space): equal distances in space correspond to perceptually uniform colour differences (for humans)
HSV: hue saturation, value
YCbCr: separates luminance (Y) with opponent colours (CbCr)
	A linear transformation of RGB