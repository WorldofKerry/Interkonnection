Linear least squares is a mathematical method used to find the best-fit line or plane for a set of data points by minimizing the [[Sum of Squared Residuals]] between the actual and predicted values. It is commonly used in regression analysis to estimate the coefficients of a linear equation that best describes the relationship between two or more variables.
## Summation Notation
- $f(w_1,w_2,...,w_d)=\frac 12 \sum_{i=0}^n(\sum_{j=1}^dw_jx_{ij}-y_i)^2$
- Partial derivative with respect to $w_j$ for general $n$ is $\frac{\partial f}{\partial w_j} = \sum_{i=0}^n(\sum_{j'=1}^dw_{j'}x_{ij'}-y_i)x_{ij}$. 
## Matrix Notation
- $f(w)=||Xw-y||^2$
- $\hat y = Xw$, for $n$ predictions
- $r=Xw-y$, the residual vector (difference between prediction and actual)
- $\nabla f(w)=X^Tr$
- $X^TXw=X^Ty$, for finding the critical points, as it is solution to $X^Tr=0$. 
	- Solution may not be unique because of collinearity, but any solution is optimal because of convexity
### Helpful Equalities
- $\sum_{j=1}^dw_jx_{ij}=w^Tx_i$. 
- $\sum_{i=1}^nr_i^2=||r||^2$. 
## Cost (Solving Normal Equations)
Forming $X^Ty$ costs $O(nd)$. 
Forming matrix $X^TX$ costs $O(nd^2)$. 
Solving a $d$ x $d$ system of equations costs $O(d^3)$. 
Overall cost is $O(nd^2+d^3)$. 
### Helpful Runtimes
- Runtime of forming matrix of $a\times b$ with $b \times c$ takes $O(abc)$ time. 
- Solving a $a \times a$ system of equations takes $O(a^3)$ runtime
## Outliers
Least squares are very sensitive to outliers, as they are squared errors. 
[[Robust regression]] can be used to focus less on large errors (outliers), by e.g. using absolute error instead of squared error. 
## Math Proofs
### 1-Dimension
Objective function: $f(w)=\sum_{i=1}^n(wx_i-y_i)^2$
We look for a $W$ that makes the [[Residual]]s close to zero. Many models minimize the [[Sum of Squared Residuals]]. Given $f(w)=\sum_{i=1}^n(wx_i-y_i)^2=\frac{w^2}2a-wb+c$, whose derivative is $f'(w)=wa-b$, and when set to zero solves for $w=\frac{\sum_{i=0}^nx_iy_i}{\sum_{i=0}^nx_i^2}$, which is well defined if we have at least one non-zero feature. If the second derivative $f''(w)=\sum_{i=1}^nx_i^2\ge 0$, we know $w$ is a minimizer. 
### N-Dimension
We can predict using $\hat y_i=\sum_{j=1}^dw_jx_{ij}$, and can again use $w$ to minimize sum of squared residuals $f(w_1,w_2,...,w_d)=\frac12 \sum_{i=1}^n(\sum_{j=1}^dw_jx_{ij}-y_i)^2$. Then $f'(w_j)=\sum_{i=1}^n(\sum_{j'=1}^dw_jx_{ij'}-y_i)x_{ij}$. Therefore, we get a set of $d$ linear equations, with $d$ unknowns $w_1,w_2,...,w_d$, which can be solved with Gaussian elimination. 
