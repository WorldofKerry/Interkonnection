Given a dataset and 2 linear regression models, if they have the same training error? which one to pick? You should pick the one with the smaller slope, as a smaller change in $x_i$ has a smaller change in prediction $y_i$. 
Related to [[Search and Score Methods]]
## L2-Regularization
$f(w)=\frac 12||X_w-y||^2+\frac\lambda 2 || w || ^2$, where $\lambda$ is in range of $O(1)$ to $O(\sqrt n)$. 
Gradient descent iterations: $w^{t+1}=w^t-\alpha^t[X^T(Xw^t-y)+\lambda w^t]$, where the terms in $[]=\nabla f(w^t)$.  
- This is not convex
## L1-Regularization
$f(w)=\frac 12 || Xw-y||^2 + \lambda ||w||_1$. 
- convex, improves test error, encourages elements of $w$ to be exactly zero. 
- simultaneously regularizes and selects features
## Sparsity
- L1-regularization gives sparsity but L2-regularization does not. 
- the penalty of $\lambda$ encourages the following: 
	- L0: encourages $w_i$ to be exactly zero
	- L2: asymptotically vanishes as $w_i$ approaches zero (no incentive for exact zeroes)
	- L1: proportional to how far away $w_j$ is from zero
