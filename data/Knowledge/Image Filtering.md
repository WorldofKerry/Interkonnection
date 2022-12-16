Images are 2D functions, therefore matrix operations such as addition, [[Convolution]]s and [[Correlation]]s can be applied to them. 
## Addition
Generally, addition images can cause artifacts. Since brightness has a [[Range]], adding two of very bright pixels whose sum to falls outside of that range is undefined. 
## Point Processing / Point Operation
Functions that are applied to individual pixels. For instance, lighten/darken (addition/subtraction), linear/nonlinear lower/raise contrast (multiplication/division/polynomial with [[Normalization]]), inversion. 
## Filtering / Neighbourhood Operation
### Linear Filters
#### 2D Box Filter
A Square
Seperable
#### 2D Pillbox Filter
A circle
Rotationally invariant
#### Gaussian Filter
A 2d gaussian distribution
Seperable and rotationally invariant
#### Low Pass Filters
Filters out all of the high frequency content of the image, only low frequencies remain
#### High Pass FIlters
Filters out all of the low frequency content of the image, only high frequencies remain
### Non-Linear Filters
#### Median Filter
Takes the [[Median]] value in a kernel
#### Bilateral Filter / Edge Preserve Smooth
A filter that both smoothes and retains edges
#### [[Canny Edges]]
A multi-stage algorithm that detects a wide range of edges in images
### Properties of Linear Filters
Superposition, scaling, shift invariance (output is local)
