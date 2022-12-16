## Multiview Image Alignment
1. Find all matches between images using [[Scale Invariant Feature Transform (SIFT)]]
2. Remove incorrect matches using [[Random Sample Consensus (RANSAC)]]
## Structure from Motion
A combination of SIFT/RANSAC with triangulation can be used to compute 3D structure from 2 views. 
The use of pairwise alignment (concatenation of pairwise $R,t$ estimates results in drift). Therefore, global alignment and bundle adjustment (minimising errors projecting 3D points to all images) is used to align the cameras globally. 
With bundle adjustment, the steps for adding cameras are as follows: 
1. Select and initialization set (e.g. 3 images) with lots of matches and good baseline (parallax)
2. Jointly optimize cameras $R,t$ and structure $X$ for this set
4. Add a new camera and estimate pose $R,t$ by minimising projection errors with existing $X$
5. Add 3D points corresponding to the new view and optimize
6. Bundle adjust optimizing over all cameras and structure
7. Repeat steps 4-6 for more cameras
A real-world project using this is ["Building Rome in a Day"]([Building Rome in a Day (washington.edu)](https://grail.cs.washington.edu/rome/)). 