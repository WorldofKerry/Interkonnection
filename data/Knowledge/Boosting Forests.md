## Simple Features
Quite a few simple features that are computationally fast. For example, we have [[Boxlet Features]]. 
## Viola Jones Face Detection
Initial stages have a high true positive rate, with high false positive rate, to reject non-faces quickly. Later stages use more processing to reduce false positives. 
To efficiently compute boxlet features, we can use an [[Integral Image]]s, to compute in $O(1)$ time. 