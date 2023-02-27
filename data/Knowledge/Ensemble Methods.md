Classifiers that have classifiers as input. E.g. have a decision tree, naïve Bayes and k-nearest neighbours at the same time. 
## Methods
- Voting: take mode of the predictions across classifiers
- Stacking: fit another classifier that uses the prediction as features (e.g. voting + followed by decision tree)
- Random Forests: take vote from a set of deep decision trees
	- Bootstrapping: a way to generate different versions of your dataset
	- Random trees: a way to grow decision trees incorporating randomness
	- [[Bagging]] ("bootstrap-aggregating"): ensemble where you apply same classifier to different bootstraps
	- [[Boosting]]: improves training error of classifiers with high $E_\text{train}$