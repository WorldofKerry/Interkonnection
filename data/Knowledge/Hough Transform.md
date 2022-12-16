For each token / data point vote for all models to which it could belong. Return models that get many votes / distribution of possible models. E.g., for each point, vote for all lines that could pass through it; the true lines will pass thrugh many points and so receive many votes. 
## Line Detection
![[Pasted image 20221209210817.png]]
Let the be a vote matrix with one axis being $\rho$ and the other being $\theta$, initialized to 0s. 
For a point/token $(x,y)$, create a paramter $x\sin(\theta)+y\cos(\theta)=\rho$ . Then increment cell $(\rho, \theta)$. Usually its best to vote for the two closest bins/cells as bin boundaries are arbitrary.  
Challenges: how many cells should the vote matrix have? We don't want to merge different lines, nor want noise to play a large factor. 
How many lines? Count the peaks in the Hough array, treat adjacent peaks as a single peak. 
## Transformation Space Voting
Sometimes a single point / measurement can vote on the entire transformation. In this case, the votes of each sample can be seen as a distribution in the parameter space of the transformation. This prevents noise distribution, e.g. edge dtections with orientation can vote on single lines rather than all lines that pass through a point. 
![[Pasted image 20221209212213.png]]
The most concentrated area of red dots can then be deemed as the center of the cow. 
![[Pasted image 20221209212250.png]]
![[Pasted image 20221209212311.png]]
Another example with [[Visual Words]]
![[Pasted image 20221209212400.png]]
![[Pasted image 20221209212411.png]]