Find observations that are "unusually different" from the others. 
## Model-Based
Fit a probabilistic model. Outliers are examples with low density. However, mean and variance are sensitive to outliers, and z-score assumes data is unimodal. Regardless, it's really difficult to define whether or not a point is a global or local outlier. 
## Graphical
Look at a plot of data and human decides if data is an outlier. 
For example: 
- a box and whiskers plot with median and percentiles
- scatterplot/scatterplot array
## Cluster-Based
Cluster the data, find points that do not belong to clusters. For example: k-means, density-based, hierarchical
## Distance-Based
Approach based on distances. For example: 
- KNN: where the "outlier-ness" of example $i$ is $\frac{\text{avg dist of i to its KNNs}}{\text{avg dist of neighbours of i to their KNNs}}$. 
## Supervised
Use our methods for supervised learning, but needs supervision. 