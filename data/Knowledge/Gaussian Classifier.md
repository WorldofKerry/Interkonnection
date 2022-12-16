A [[Gaussian]] probability density is used to estimate the probabily of data $x$, given parameters $m, \Sigma$, by maximizing probability $p(x|m,\Sigma)=\frac{1}{2\pi \Sigma}^{\frac 1 2} e^{-\frac 1 2 (x-m)^T\Sigma^-1(x-m)}$.  
## [[Maximum Likelihood Classifier]]
Choose class $c_1$ if $p(x|c_1)>p(x|c_2)$. 
What is more of $c_1$ than $c_2$? 
## [[Maximum a posteriori (MAP)]]
Weight each likelihood by prior probabilities $p(c_1), p(c_2)$, such that the decision rule for a MAP classifier is choose class $c_1$ if $p(x|c_1)p(c_1)>p(x|c_2)p(c_2)$. 