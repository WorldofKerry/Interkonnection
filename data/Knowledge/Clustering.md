Goal is the solve the problem where [[K-Means Clustering]] fails in situations where proximity to mean is not indicative of class, even if pairwise proximity makes class memberships clear. 
## Agglomerative Clustering: 
Each data point starts as a separate cluster. Clusters are recursively merged.
1. Make each point a seperate cluster
2. Until the clustering is satisfactory, merge the two clusters with the smallest inter-cluster distance
## Divisive Clustering
The entire data set starts as a single cluster. Clusters are recursively split. 
1. Construct a single cluster containing all points
2. Until the clustering is satisfactory: 
	1. Split the cluster that yields the two components with th elargest inter-cluster distance
## Inter-Cluster Distance
### Single-link Clustering
The distance between the closest members in seperate sets
### Complte-Link Clustering
The distance between the farthest members in seperate sets
### Group Average Clustering
An average of distances between members of the two sets
## [[Dendrogram]]
A visual representation of what the algorithm does, similar to a tree but notes the time in which the node divides. 
![[Pasted image 20221211173039.png]]