Benefits: locality, distinctiveness, quantity, efficency
Recall from [[Edge Detection]] and [[Corner Detection]] that we can use a local [[Sum Squared Difference]] on a patch with its neighbourhood to find structures (edges/corners/interest points). 
[[Maximally Stable Extremal Regions (MSERS)]] finds regions of high contrast using a watershed approach, and are stable accross a range of thresholds. 
## Invariance
Patch matching can be improved by using scale/orientation and brightness normalization. For instance, [[Harris Corners]] are used at multiple scales and aligned to the local gradient. 
[[Scale Invariant Feature Transform (SIFT)]] is a technique to create features that are invariant to translation, rotation, and scale, with slow variation in perspective and 3D distortion. 
### SIFT Matching
Extract and match all SIFT descriptors from both images. Nearest-neighbour matching is used, with linear-time approximation algorithms existing as well. 
Given feature $F$ with nearest neighbours $A, B, C,...$
	A match ratio test is used to compare the distance $d()$ of the nearest neighbour $A$ to the second nearest neighbour $B$ such that if $d(F,A)<0.8d(F,B)$, then there is a good match between $F$ and $A$. 
When does this fail? 
- Repetitive structures (e.g. lots of the same brick pattern in a house)
- Significant portions of the object are occluded
### Shape Context
For matching contours. Usually for vector graphics. Steps: 
1. Finding a list of points on shape edges
2. Computing the shape context
3. Computing the cost matrix
4. Finding the matching that minimizes total cost
5. Modeling transformation
6. Computing the shape distance