## Concept
Select a scale and orientation at each detection. 
Use a descriptor to represent the local region robust to parallax, illumination change, etc.
## Steps
1. The detector
	1. Convolve image with a center-surround [[Laplacian]] / [[Difference of Gaussians (DoG)]] filter, finding local-maxima of the center surround response, with non-maximal suppression
	2. Scale selection is done by maximizing the DoG function in scale as well as space
	3. Build a histogram of the local orientation gradients, with the peak orientation as the selected orientation
2. The descriptor
	3. A gradient orientation histogram is constructed over each local region, divided into a 4 by 4 grid, with a histogram of 8 orientations each, resulting in a 128-dimension descriptor
	4. The descriptor is normalized to 1 to reduce effects of illumination change, where
		1. if brightness values are scaled/multiplied by a constant, gradients are scaled by same amount, and normalization cancels the change
		2. if brightness are increased/decreased/additive by a constant, gradients do not change