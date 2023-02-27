[[Bagging]] with random trees as base classifiers. 
## Random Trees
For each tree, randomly sample a small number of features to be considered as candidates split variables. 
Given $n$ training examples, $d$ features, $m$ depth, $t$ test examples: 
1. What is the cost of fitting a random tree that uses $\sqrt d$ random features? $O(mn\log n d)$. 
2. What is the cost of predicting using a random tree? $O(mt)$. 