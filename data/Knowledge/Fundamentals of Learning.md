## Notation
### Training Error
$E_{test}$ and $E_{train}$ are the test and training error respectively, such that we can formulate $E_{test}=(E_{test}-E_{train})+E_{train}$, where $E_{test}-E_{train}$ is the approximate error $E_{approx}$. 
## Concepts
### Bedrock Principle
Test data cannot influence the training phase in any way. This is especially important to make sure you don't cherry-pick the model that performs the best on the test set, as by chance, the model may have just happened to perform well on this particular test set. 
### Independent and Identically Distributed (IID) Random Variables Assumption
All examples from same distribution, are sampled independently
### Fundamental Trade-off
Training error starts high (underfitting) and decreases with training/tree depth; test error initially goes down, but eventually increases (overfitting). 
### Validation Set
Save part of training data to approximate test error
### Parameters and Hyper-Parameters
Parameters control how well we fit a dataset. Hyper-parameters control how complex the model is (can't train a hyper-parameter). 
### Optimization Bias
#### On Parameter Learning
Get lucky and find model with low training error by chance (overfitting of training error)
#### On Hyper-Parameter Tuning
One of the models might have low validation error by chance (overfitting of validation error)
## Cross-Validation
### 5-Fold
Train on 80% of data, validate on other 20%, repeat 5 times with different splits, and average score. I.e. split data into 5 folds, train on folds 1, 2, 3, 4, and compute error on fold 5, repeat for other combinations. This can be extrapolated to k-fold cross-validation. 
### Leave-one-out Cross-Validation
Train on all but one training example. 