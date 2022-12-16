Initialize by choose $K$ random clusters, then alternatives between the two steps: 
1. Assume the cluster centers are known (fixed). Assign each point to the closest cluster center. 
2. Assume the assignment of points to clusters is known (fixed). Compute the best center for each cluster, as the mean of the points assigned to the cluster. 
This converges to a local min of the objective function, which is **initialization dependent**. 
An example objective function would be minimizing the representation error (or quantization error) in letting each data point be represented by some cluster center. 