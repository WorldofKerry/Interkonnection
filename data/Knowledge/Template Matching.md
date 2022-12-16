Correlating an image with a template will return a result that enhances areas of the image that are similar to that of the template. This allows us to find the local maxima, use non-max suppression, and a threshold to find things similar to the template in an image.

Template matching might fail for: different scales, orientation, lighting conditions, occlusions, motion/blur, mirrored (e.g. left vs right hand).

### Multi-Scale Template Matching

With a fixed-size template, correlation only is able to find at specific scales. Therefore the correlation should be ran on various resizing of the image.

## Normalized Correlation

The dot product of the image patch and the template by be large simply because the image region is bright. This can be fixed by normalizing: NCORR$(I,J)=\frac{I^TJ}{|I||J|} = \frac I {|I|} \cdot \frac J {|J|}=\cos \theta$, where $|I|=(\sum_iI_i^2)^{\frac 1 2}$, allowing the correlation to be robust to change in brightness. Normalized correlation varies between -1 and 1, and gets the value 1 when the filter and image region are identical.

### Efficient Implementation

Rather than doing the NCORR with each patch with template, for template $J$ and image $I$, to efficiently compute $|I|$:

Compute the $I^2$, then apply a box filter, where the output of the box filter is $\sum_i I_i^2$, then $|I|$ can be computed in each location

In summary, this is convolving squared image with box filter

## Sum Squared Difference

SSD$(I,J)=|I-J|^2=(I-J)^T(I-J)=|I|^2+|J|^2-2I^TJ$, where the latter half is similar to that of correlation. If $|I|=|J|=1$, then SSD$=2-2$CORR.

# Detection Performance

Correlation response graphs can be to see the effect of threshold.

Receiver Operating Characteristic (ROC) curve can also be used.

Precision and recall curves can also be used.