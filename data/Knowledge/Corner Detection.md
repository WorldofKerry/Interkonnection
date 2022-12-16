Image structure:

1.  0D Structure, not useful for matching
2.  1D Structure: edge, can be localized to one direction, difficult to find location along edge
3.  2D Structure: corner, or interest point, can be localized in both directions, good for matching

Sum squared difference between patch and its local neighbourhood with a clear peak suggests that there is a corner.

## Harris Corners

SSD $= \sum _R|I(x) - I(x+ \triangle x)|^2=\triangle x^TH \triangle x$, where $H=\sum_R[[I_x^2, I_xI_y],[I_xI_y,I^2_y]]$, which is the Harris Or 2nd moment matrix. This simplification is possible with Taylor expansion and using the lemma that $|a|^2=a^Ta$.

SSD function must be large for all shifts $\triangle x$ for a corner / 2D structure. Therefore both eigenvalues of $H$ must be large.

As a review, for Harris corners:

1.  Filter image with Gaussian
2.  Compute the magnitude of the x and y gradients at each pixel
3.  Construct C in a window around each pixel
    1.  Harris uses Gaussian window
4.  Compute the Harris corner strength function $det(C)-\kappa trace^2(C)$
5.  Threshold corner strength function, optionally apply non-maximal suppression

Covariance matrix and gradient vector are used such that for $\triangledown I=(I_x,I_y)$, then $C=\sum_i\triangledown I \triangledown I^T$.

## Difference of Gaussian

DoG = center-surround filter

Find local-maxima of the center surround response in both position and scale