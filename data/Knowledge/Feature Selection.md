- Feature selection is the process of identifying and selecting the most relevant and informative features (also known as variables or predictors) from a larger set of input features to improve model performance or reduce complexity.
- Relevant features help predict $y_i$ from $x_i$. 
	- In the example of food allergies, we want to know which foods are making you sick? Rather than a black box that tells you if you are sick. 
## "Association" Approach
- For each feature $j$, compute correlation between feature values $x^j$ and $y$, and say that $j$ is relevant if correlation is above 0.5 or below -0.5. 
- This usually gives unsatisfactory results as it ignores variable interactions
	- E.g. there may be a taco Tuesday, and if tacos make you sick, it will say Tuesday is relevant, but Tuesday itself is an irrelevant variable
	- E.g. diet coke and Mentos together make you sick, but not on their own so they might be deemed irrelevant on their own
## "Regression Weight" Approach
- Fit regression weights $w$ based on all features, and take features $j$ where weight $|w_j|$ is greater than a threshold. 
- Major problems with collinearity
	- E.g. if Tuesday variable always equals taco variable, it could say that Tuesdays are relevant but tacos are not
	- E.g. with two copies of irrelevant feature, it can take both irrelevant copies, such that $\hat y_i=0*a+0*b=100*a+-100*b$, where both $a$,$b$ are irrelevant
## Finding Feature Combinations
- [[Search and Score Methods]]