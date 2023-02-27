- Linear regression can overfit with large $d$, therefore we can view the "number of features" as a hyper-parameter. 
## Framework
1. Define score function $f(S)$ that measures the quality of a set of features $S$. 
2. Now search for variables $S$ with the best score. 
## Score Functions
- Cannot be training error, as it goes down as you add features, we will select all features
- More logical score is validation error, but due to large number of sets of variables
	- with $d$ variables, there are $2^d$ sets of variables
	- optimization bias is high due to optimizing over $2^d$ models, which is prone to false positives
		- This can be helped again with [[Complexity Penalties]], by using $score(S)=\frac 12 \sum_{i=1}^n(w_s^Tx_{iS}-y_i)^2+\lambda size(S)$, where $x_{iS}$ is features $S$ of example $x_i$. Often "L0-norm" is written instead of $size(S)$. 
## L0-Norm and L0-penalty
- Is number of non-zero values $||w||_0=size(S)$, which is not a true norm. a small L0-norm means it does not use many features. 
- L0-norm penalty for feature selection: $f(w)=\frac 12 || X_w-y||^2 + \lambda ||w||_0$. 
## Forward Selection (Greedy Search Heuristic)
### Algorithm
1. Start with an empty set of features $S$
2. For each possible feature $j$, compute scores of features $S$ combined with feature $j$
3. Find the $j$ that has the best score when added to $S$
4. Check if $\{S\cup j\}$ improves on the best score found so far
5. Add $j$ to $S$ and go back to step 2 (potentially stop if no $j$ improves score over just using $S$). 
### Runtime
We fit $O(d^2)$ models out of the $2^d$ possible models with different features. 