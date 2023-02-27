- polynomial basis represents function as sum of global polynomials
	- becomes polynomial away from data (at left/right end)
- gaussian RBFs represent function as sum of local "bumps"
	- therefore they  are universal approximators and can approximate any continuous function to arbitrary precision and achieve optimal test error as $n$ goes to infinity
	- goes to zero away from data (at left/right end)
## Radial Basis Functions (RBFs)
- A set of non-parametric bases that depend on distances to training points
## Gaussian RBF
$g(\epsilon) = \exp(-\frac {\epsilon^2}{2\sigma^2})$, where $\sigma^2$ controls the "width"
### Parameters
- We use $n$ bumps (non-parametric basis)
- Each bump centered on one training example $x_i$
- Fitting regression weights $w$ gives us the heights and signs
- The width is a hyper-parameter (narrow bumps == complicated model)