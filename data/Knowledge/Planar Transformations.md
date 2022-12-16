## 2D Transformations
![[Pasted image 20221209181702.png]]
### Linear Transformations
Where $I$ is the identity matrix. $t$ represents the 2D translation vector $[x, y]$. $R$ represents a matrix of rotations $[[cos(\theta), -\sin(\theta)], [\sin(\theta), \cos(\theta)]]$. $s$ is a scale factor. $A$ is a more general $sR$. In cases where the matrix is $2\times 3$, then the last row vector is implied to be $[0, 0, 1]$ (acts as identity). 
2 points for similarity transform, 3 points need for affine transform. 
### Projective Transformation
4 points are needed to compute the homography $H$. To convert back to 2D coordinates, divide the first two rows by the third row. 
## Image Alignment
In the SIFT matching from [[Local Image Features]], we can expect many noisy correspondences and outliers. To solve for the transform, we have a linear system with more equations than unknowns (overconstrained), and subject to outliers. 
### [[Random Sample Consensus (RANSAC)]]
A technique to solve the overconstrained and outlier problem. 