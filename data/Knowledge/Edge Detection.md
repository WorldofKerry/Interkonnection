## Derivative Definition

For 1D:

$\frac{\partial I}{\partial x} = \lim_{\partial x \rightarrow 0} \frac {I(x + \partial x, y) - I(x,y)} {\partial x}$

For 2D:

Take two one dimensional derivatives

Filters for estimating derivatives need to sum to 0 (e.g. so that a constant image gets a correct derivative of zero). For instance, a $[-1,1]$ filter can be used to get derivative.

However, this doesn’t work well if there is noise. Solution?

Smooth, then take derivative. A trick is to take derivative of the smoothing filter first (e.g. derivative of a gaussian filter), then convolve with original image, getting the same result. This derivative will be the partial derivative of the gaussian filter for 1D.

Derivative can be approximated using the forward, backward, and centered approaches.

## Sobel Edge Detector

Uses central differencing to compute gradient image, which is more accurate. Uses a threshold on the gradient to obtain the edges.

## 2D Image Gradient

$\triangledown f = [\frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}]$, with the gradient direction given as $\theta = \arctan (\frac{\partial f}{\partial x}/ \frac{\partial f}{\partial y})$. The edge strength is given by the gradient magnitude $= ||\triangledown f|| = \sqrt {(\frac{\partial f}{\partial x})^2 + (\frac{\partial f}{\partial y})^2}$.

## Canny Edge Detector

A “local extrema of a first derivative operator” approach

Design Criteria:

1.  Good Detection
    1.  low error rate for omissions (missed edges)
    2.  low error rate for commissions (false positive)
2.  Good Localization
3.  One (single) response to a given edge (eliminate multiple responses to a single edge)

Steps:

1.  Apply directional derivatives of Gaussian
2.  Compute gradient magnitude and gradient direction
3.  Non-maximum suppression (thin multi-pixel wide “ridges” down to a single pixel width)
4.  Linking and thresholding
    1.  Low, high edge-strength thresholds
    2.  Accept all edges over low threshold that are connected to edge over high threshold

### Edge Hysteresis

One way to deal with broken edge chains is to use hysteresis (a lag or momentum factor)

Maintain two thresholds $k_{high}$ and $k_{low}$. Use $k_{high}$ t find string edges to start edge chain, and use $k_{low}$ to find weak edges which continue edge chain. Typical ratio is $\frac {k_{high}} {k_{low}}=2$. Basically, edges start at edge locations past high threshold, then continue tracing edge until magnitude falls below low threshold.