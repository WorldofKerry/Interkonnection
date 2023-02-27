Robust regression is a method used to make linear regression models less sensitive to outliers in the data. It achieves this by minimizing a different cost function, such as the absolute deviation or Huber loss, which gives less weight to outliers.
## Absolute Error (L1)
Minimizing absolute error ([[L1 Norm]]) is harder, as absolute value is non-differentiable at 0. It is also more difficult to minimize non-smooth functions, as gradient may not get smaller nearer minimizer. Absolute error is the most robust convex loss function. 
## Huber Error
Where $f(w)=\sum_{i=1}^nh(w^tx_i-y_i)$, where $h(r_i)=\frac 12 r_i^2$ for $|r_i| \le \epsilon$ and $\epsilon (|r_i|-\frac 12 \epsilon)$ otherwise. Basically absolute error away from zero and squared error near zero. Note that $h$ is differentiable, as  $h'(\epsilon)=\epsilon$ and $h'(-\epsilon)=\epsilon$. While $f$ is convex, setting $\nabla f(x)=0$ does not give a linear system. We can still minimize the Huber loss using [[gradient descent]]. 
## Non-convex Errors
E.g. square root error $\sum \sqrt r_i$ is very robust, but it is [[Non-Convex]] so finding global min is hard. 
There are downsides however, such as
![[Pasted image 20230210142125.png]]
