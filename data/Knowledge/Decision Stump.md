A decision stump is a type of decision tree that consists of a single decision node and two or more leaf nodes, which represent the predicted classes. It is a simple and interpretable model that can be used as a baseline or building block for more complex models.
## Learning
Compute error using base line rule, that is number of times $y_i$ does not equal most common value. 
For each feature $j$: 
	For each threshold $t$: 
		set y-yes to most common label of objects $i$ satisfying rule $x_{ij}>t$
		set y-no to most common label of objects not satisfying rule
		set $\hat y$ to be our predictions for each object $i$ based on the rule
		compute error $E$, the number of objects where $\hat y_i\ne y_i$
		store the rule if it has the lowest error so far
output the best rule
## Cost
With $n$ examples, $d$ features, $k$ thresholds for each feature. 
- Computing the score of one rule costs $O(n)$. We need to go through all $n$ examples to find most common labels and go through all $n$ examples again to compute accuracy. We compute score up to $k*d$ rules. Therefore total cost of fitting a stump is $O(ndk$). 