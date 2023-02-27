In linear regression, the goal is to find the line of best fit that minimizes the sum of squared errors between the predicted values and the actual values. 
## Variants
- [[Linear Least Squares]]: the baseline variant
- [[Robust Regression]]: makes the model less sensitive to outliers
- [[Brittle Regression]]: makes the model more sensitive to outliers
## Change of Basis
Linear regression can be used with nonlinear feature transforms, i.e. use $X$ to find $Z$, then used $Z$ and $y$ to find $v$ resulting in the objective function $f(v)=\frac 12 ||Zv - y||^2$. Notice that this is still linear with respect to $v$. 
### Examples
- [[Polynomial Transform]]
- Other transformations such as exp, log, trig, etc.
