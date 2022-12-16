## Short Answers
Big punish for selecting incorrect options
Average-case for random algorithm is not dependent on input
Average-case for deterministic algorithm is dependent on input
## Prereqs
### Log Rules
$\log_a b^c = c \log_a b$; $\log_a b + \log_b c = \log_a c$ ; $\log_a b \cdot \log_b c = \log_a c$; $\frac{\log_a b}{\log_b c} = \log_c a$; $\log_a b^{-1} = - \log_a b$
### Exponential Rules
$a^{b + c} = a^b \cdot a^c$; ; $a^{b - c} = \frac{a^b}{a^c}$; $(a^b)^c = a^{b \cdot c}$; $a^{b \cdot c} = (a^b)^c$; $a^{b/c} = \sqrt[c]{a^b}$
### Geometric Series
- The formula for the sum of a finite geometric series with first term `a` and common ratio `r` is: $\sum_{i=0}^{n-1} ar^i = \frac{a(1-r^n)}{1-r}$
- The formula for the sum of an infinite geometric series with first term `a` and common ratio `r` is: $\sum_{i=0}^{\infty} ar^i = \frac{a}{1-r}$
If $|r| \ge 1$, then summation goes to infinity
### Probability
$nCr=\frac{n!}{r!(n-r)!}$     $nPr=\frac{n!}{(n-r)!}$
### Asympotic Growth Rates
$\mathcal{O}(1)$,  $\mathcal{O}(\log n)$,  $\mathcal{O}(n)$, $\mathcal{O}(n \log n)$,  $\mathcal{O}(n^2)$, $\mathcal{O}(n^3)$, $\mathcal{O}(2^n)$, $\mathcal{O}(n!)$
Let $n$, $m$ be num verticies and edges, then for $f(n)=n^2+2^{2+log_2n}$, we have $f(n)\in O(m^2)$ and $f(n)\in\Theta(n^2)$, as there is ratio between $n$ and $m$. 
## Gale-Shapely (SMP)
```
set all s ∈ S and e ∈ E to free
	while some free employer e hasn’t made an offer to every stude nt do 
		s ← the highest-ranking student e hasn’t made an offer to 
		if s is free then 
			hire(e, s) 
		else 
			e′ ← s’s current employer 
			if s prefers e to e′ then 
				set e′ to free hire(e, s) 
			endif 
		endif 
	endwhile 
return the set of pairs
```
Standard examples/counterexamples: 
- $e_1: [a_1, a_2], e_2: [a_2, a_1], a1: [e_2, e_1], a2: [e_1, e_2]$
- e1: a2 a1 a3, e2: a3 a2 a1, e3: a1 a3 a2, a1: e2 e1 e3, a2: e3 e2 e1, a3: e1 e3 e2
## Master Theorem
Let $a \ge 1, b \ge 1$ be real constants, let $f: N \rightarrow R^+$, and let $T(n)$ be defined by: 
$$T(n)=
\begin{cases}
aT(n/b)=f(n) \text{ if } n \ge n_0 \\
\Theta(1) \text{ if } n < n_0
\end{cases}$$
where $n/b$ might be either $\lfloor n / b \rfloor$ or $\lceil n / b \rceil$. Then
1. If $f(n) \in \mathcal{O}(n^{\log_ba-\epsilon})$ for some $\epsilon > 0$ then $T(n) \in \Theta(n^{\log_ba})$. 
2. If $f(n)\in\Theta(n^{\log_ba}\log^kn)$ for some $k \ge 0$ then $T(n) \in \Theta (n^{\log_ba}\log^{k+1}n)$. 
3. If $f(n)\in\Omega(n^{\log_ba+\epsilon})$ for some $\epsilon > 0$ and $af(n/b)<\delta f(n)$ for some $0<\delta<1$ (regularity condition) and all $n$ large enough, then $T(n)\in \Theta(f(n))$. 

Less formally: 
1. $\log_ba>$ exponent of $n$ in $f(n)$
2. $\log_ba =$ exponent of $n$ in $f(n)$, without considering $\log$ or exponential components
3. $\log_ba<$ exponent of $n$ in $f(n)$, check regularity condition
## Standard Problems for Reduction
### Packing Problems
[[Independent Set]]: Given a graph G and a number k, does G contain an independent set of size at least k?
[[Set Packing]]: Given a set U of n elements, a collection S1,..., Sm of subsets of U, and a number k, does there exist a collection of at least k of these sets with the property that no two of them intersect?
### Covering Problems
[[Vertex Cover]]: Given a graph G and a number k, does G contain a vertex cover of size at most k?
[[Set Cover]]: Given a set U of n elements, a collection S1,..., Sm of subsets of U, and a number k, does there exist a collection of at most k of these sets whose union is equal to all of U?
### Partitioning Problems
[[3-Dimensional Matching]]: 3-Dimensional Matching: Given disjoint sets X, Y, and Z, each of size n, and given a set T ⊆ X × Y × Z of ordered triples, does there exist a set of n triples in T so that each element of X ∪ Y ∪ Z is contained in exactly one of these triples?
[[Graph Colouring]]: Given a graph G and a bound k, does G have a k-coloring?
### Sequencing Problems    
[[Hamiltonian Cycle]]: Given a directed graph G, does it contain a path that visits each vertex exactly once? With restrictions on ordering. 
[[Hamiltonian Path]]: Given a directed graph G, does it contain a cycle that visits each vertex exactly once?
[[Traveling Salesman]]: Given a set of distances on n cities, and a bound D, is there a tour of length at most D?
### Numerical Problems
[[Subset Sum]]: Given natural numbers w1,..., wn, and a target number W, is there a subset of {w1,..., wn} that adds up to precisely W?
### Constraint Satisfaction Problems
[[3-SAT]]: Given a set of clauses C1,..., Ck, each of length 3, over a set of variables X = {x1,..., xn}, does there exist a satisfying truth assignment?
### Others
[[Steiner Tree]]: finding the shortest possible tree that connects a given set of points (called terminals) in a network. The tree is allowed to include additional points (called Steiner points) that are not part of the original set of terminals.
## Greedy Proofs
### Stays Ahead (By induction)
Used when there is a “local optimality” property which can be checked. If one measures the greedy algorithm’s progress in a step-by-step fashion, one sees that it does better than any other algorithm at each step; it then follows that it produces an optimal solution.
    1. **Define Your Solution.** Your algorithm will produce some object $X$ and you will probably compare it against some optimal solution $X^*$. Introduce some variables denoting your algorithm's solution and the optimal solution.
    2. **Define Your Measure.** Your goal is to find a series of measurements you can make of your solution and the optimal solution. Define some series of measures $m₁(X), m₂(X), …,mₙ(X)$ such that $m₁(X^*), m₂(X^*), …, mₖ(X^*)$ is also defined for some choices of $m$ and $n$. Note that there might be a different number of measures for $X$ and $X^*$, since you can't assume at this point that $X$ is optimal.
    3. **Prove Greedy Stays Ahead.** Prove that $m_i(X) ≥ m_i(X^*)$ or that $m_i(X) ≤ m_i(X^*)$, whichever is appropriate, for all reasonable values of $i$. This argument is usually done inductively.
    4. **Prove Optimality.** Using the fact that greedy stays ahead, prove that the greedy algorithm must produce an optimal solution. This argument is often done by contradiction by assuming the greedy solution isn't optimal and using the fact that greedy stays ahead to derive a *contradiction*.
### Exchange Argument
Pick an arbitrary solution $S$ (not the same as our greedy solution $S_G$), we construct a set $S'$ which has 2 properties:
    1. $S'$ must be more similar to $S_G$ than $S$, for some definition of “more similar”. For instance, depending on the problem, more similar might mean $S'$ has more edges in common with $S_G$ than $S$, or $S'$ might have a longer initial sequence whose elements are the same as those of $S_G$ than $S$.
    2. $S'$ must be “at least as good” as $S$ with respect to the quantity we are trying to optimize.
## SAT
For each integer $a$ from $1$ to $k$, add the clause $X_{a_1}\lor X_{2,a}\lor ... X_{n,a}$ so that at least one vertex is in each position of the clique. 
For each pair of verticies $v_p$ and $v_q$ and for every $a$ in $1$ to $k$, add the clause: $\neg X_{p,a}\lor\neg X_{q,a}$ so that no more than one vertex is in each position of the clique. 
For each vertex $v_p$ and for every two distinct integers $a,b$ from $1$ to $k$, add the clause: $\neg X_{p_a} \lor \neg X_{p_b}$ so that no vertex can be in more than one position in the clique. 
For all pairs of verticies $v_p$ and $v_q$ that do not share an edge, for every $a$ and every $b$ between $1$ and $k$, add the clauses: $\neg X_{p,a} \lor \neg X_{q,b}$, so that the clique consists only of connected verticies. 

## Graphs
Split Graph: Partitioning graphs into 2 sets $V_1,V_2$, where $V_1$ is fully connected and $V_2$ is fully disconnected.
![[Pasted image 20221213015942.png]]
Bipartite Graph (Bigraph): A set of graph vertices decomposed into 2 disjoint sets s.t. no two graph vertices within the same set are adjacent.
![[Pasted image 20221213015952.png]]
Independent Set: Subset of vertices $S$ s.t. no two vertices in $S$ are adjacent/connected. 
![[Pasted image 20221213020103.png]]
Clique: Subset of vertices s.t. every two distinct vertices are adjacent (i.e. Largest fully connected subgraph). 
![[Pasted image 20221213020110.png]]
Vertex Cover: A subset of vertices that are atleast one endpoint of all edges in the graph. 
![[Pasted image 20221213020117.png]]
## Dynamic Programming
Does use a recurrence relation; not more efficient that optimal greedy solution
## Amortized Cost (Potential Method)
Potential: $\Phi(D_i)$ is the state of the algorithm after $i$ operations. i.e. How much you can spend on the next expensive operations (comparing it to a bank balance), where $\Phi(D_i)\ge0$ and $\Phi(D_i)=0$
Amortized Cost: $cost_{am}(op_i)=cost_{real}(op_i)+\Phi(D_i)-\Phi(D_{i-1})$
-   $op_i$ is the cost to perform $i$th operation.
-   $cost_{am}(op_i)$ should be relatively consistent (the amount you’re actually paying)
By definition $\sum_{i=1}^ncost_{real}(op_i)\le\sum_{i=1}^ncost_{am}(op_i)$
### Hashtable Example with **Insert**
With potential of $\Phi(H)=5\times$num operations since last reallocation, two cases: 
1. No reallocation, so real cost is 1, so $1+\Phi(D_i)-\Phi(D_{i-1})=6$
2. After previous reallocation, array is `60%` full, to reach `90%` full, need at least `30%s` insert operations, where `s` is size of array before reallocation. The real cost is $1.5s$, and $\Phi(D_i)-\Phi(D_{i-1})=0-5*0.3s=-1.5s$, hence amortized cost is $0$. 