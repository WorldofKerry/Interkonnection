Initialize by choose $K$ random clusters, then alternatives between the two steps: 
1. Assume the cluster centers are known (fixed). Assign each point to the closest cluster center. 
2. Assume the assignment of points to clusters is known (fixed). Compute the best center for each cluster, as the mean of the points assigned to the cluster. 
This converges to a local min of the objective function, which is **initialization dependent**. 
An example objective function would be minimizing the representation error (or quantization error) in letting each data point be represented by some cluster center. 
## Calculations
Minimizing $f(w_1,...,w_k,\hat y_1, ..., \hat y_n)=\sum\limits_{i=1}^n||w_{\hat y_i}-x_i||^2$ for each $x_i$ to each mean $w_c$ for a $d$-dimensional vector, where one iteration runs in $O(d)$. We need to compute distance from $n$ examples to $k$ clusters, totaling $O(ndk)$ runtime. 
## Vector Quantization
Having one point summarize/represent many
## Shapes of K-Means Clusters
The regions are [[Convex Set]]s (a line between two points stays in the set). Therefore K-Means cannot separate some non-convex clusters. 

