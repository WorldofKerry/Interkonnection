An iterative optimization algorithm
1. starts with a guess $w^t$ with $t=0$
2. use the gradient $\nabla f(w^{t})$ to generate a better guess $w^{t+1}$
3. repeat step 2 for $t=t+1$
4. stop when the limit of $w^t$ as $t$ goes to $\infty$ has $\nabla f(w^t)=0$. 
More formally, $w^{t+1}=w^t-\alpha^t\nabla f(w^t)$, for $t=1,2,3...$, until $||\nabla f(w^t)|| \le \epsilon$. Where $\alpha$ is the learning rate, and we decrease $\alpha$ if it increases $f$. 