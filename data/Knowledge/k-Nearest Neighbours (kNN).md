Gain robustness to noise by voting over multiple neighbours. 
Given a new data point, find the k nearest training examples. Assign the label by majority vote. 
Works well if distance measure correctly weighs the various dimensions. 
For large data sets, as k increases, kNN approaches optimality in terms of minimizing probability of error. 
How this compares to [[Nearest Neighbour Classification]]: 
![[Pasted image 20221210135330.png]]
This technique gets large in space when trying to store all of the data points. This can be solved with [[N-class Linear Classification]]. 
As $k$ grows, training error tends to increase, as $k$ grows, approximation error tends to decrease. 
## Curse of Dimensionality
Volume grows exponentially with dimension. Problematic if features have very different scales. 