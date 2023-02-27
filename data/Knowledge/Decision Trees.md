Decision trees are a type of supervised learning algorithm that uses a tree-like structure to model decisions and their possible consequences. They work by recursively partitioning the input data into smaller subsets based on the values of input features, until a prediction or decision can be made for each data point.
## Decision Stump
Multiple [[Decision Stump]]s are used to build a decision tree. 
## Greedy Recursive Splitting
Recursively split the data such that each stumps' child's data satisfies the stump's conditions. 
## Pros
- Useful for when there's a lot of labeled data
- Easy to implement, interpretable, learning/prediction fast
- Elegantly handle small number of missing values during training
## Cons
- Problems too complicated to write a program ourselves
- Human expert can't explain why you assign certain labels
- Hard to find optimal set of rules
- Greedy splitting often not accurate, and requires deep trees
## Score Function
### Accuracy
If we use this rule, how many examples do we label correctly?
### Information Gain / Entropy
Choose split that decreases [[Entropy]] of labels the most, and thus maximizing information gain. 
Information gain = entropy(y) - $\frac {n_{leaf1}} n$entropy($y_{leaf1}$) - $\frac {n_{leaf2}} n$entropy($y_{leaf2}$). 
Where 
## Random Forest
[[Random Forests]] use a distribution over class at the leaves of the tree, combining predictions from multiple trees ([[Ensemble Methods]]) to give a final classification. 