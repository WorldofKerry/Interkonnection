1. Construct a visual dictionary using [[Visual Words]] and [[K-Means Clustering]]
2. Compute a histogram of the visual words for each image
3. Classify the visual word histograms with [[Support Vector Machines (SVM)]]

## The Algorithm
1. Initialize an empty K-bin histogram, where K is the number of codewords
2. Extract local descriptors (e.g. SIFT) from the image
3. For each local descriptor $x$
	1. Map (Quantize) $x$ to its closest codeword -> $c(x)$
	2. Increment the histogram bin for $c(x)$
4. Return histogram
The histogram can then be classified using a trained classifier (e.g SVM or k-Nearnest Neighbour). 