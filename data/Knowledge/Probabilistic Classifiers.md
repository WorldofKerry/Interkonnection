Related to [[Probability]]
## Naïve Bayes
Probabilistic classifier based on Bayes rule. Classifies $x_i$ as $y_i=1$ if $p(1|x_i))>p(~1|x_i)$, which allows you to cancel out the $p(x_i)$ terms in a single Bayes rule formula. For features $a, b, c$, we can make a big assumption that $p(a,b,c|1)\approx p(a|1)p(b|1)p(c|1)$, which assumes the features $a,b,c$ are conditionally independent given label $y_i$. 
### Laplace Smoothing
For the case where you have no examples of a features. Add 1 to numperator and 2 to denominator. 
## Decision Theory
Cost of a scenario differs, for TP, TN, FP, FN. 
Instead of using the most probable label, take the $\hat y_i$ that minimizes expected cost, with $\mathbb{E}[cost(\hat y_i, \tilde y_i)]$. 