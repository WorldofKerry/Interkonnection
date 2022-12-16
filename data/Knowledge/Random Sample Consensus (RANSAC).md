Is a way to figure out which set of equations gives us the most correct result. Algorithm: 
1. Match feature points between 2 views
2. Select minimal subset of matches (e.g. min num needed for the transformation)
3. Compute transformation $T$ using minimal subset
4. For every point $p_1, p_2$ on view 1/2 respectively, check if $||distance(p_1T, p_2) < threshold||$, if so, then it is an inlier
5. Repeat steps 2-4 to maximize number of inliers
How many samples do we need to find a good solution? 
![[Pasted image 20221209183555.png]]
Using $p=0.99$, for probability of inlier $p_i$, then the probability of fail $p_f=0.01 > (1-p_i^n)^k$, such that $k>\frac{\log(0.01)}{\log(1-p_i^n)}$. 