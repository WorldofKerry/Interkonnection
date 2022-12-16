## Types
- 2-rectangle: difference between equally sized regions
- 3-rectangle: difference between extremes and center region
- 4-rectangle: difference between diagonal pairs of rectangles
![[Pasted image 20221211171224.png]]
From this, we can build a simple classifier to takes a Harr Wavelet filter (top-left-most in above image) to see if response > 0.6, we have face, no face otherwise. 
## Boosting
Building a complex classifier using weighted combination of simple classifiers. 
How do we learn the parameters in $H(x)=\Sigma_j \alpha_j h_j (x)$?
- Randomly select a feature at a time
- Find the parameters for this feature that maximise classification performance using exponential loss, $J(\theta)=\sum_ke^{-y_kH(x_k)}$, with $\hat y_k=\text{sign}(H(x_k))$
- Mis-classified examples are weighted more strongly at each stage of classifier learning (the "boosting")