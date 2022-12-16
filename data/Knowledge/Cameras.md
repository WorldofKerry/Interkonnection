## Demosaicing

Cameras use RGB channels, which when checkered, results in an uneven balance of the three colours, and there being unknown areas for a specific channel as there is a different channel sensor there.

Therefore bilinear interpolation is used, using the four neighbours. The more densely sampled green channel is often used for the edge detection.

## White Balancing

Humans good at adapting to global illumination conditions (e.g. white object looks white whether under blue sky or candle light. However, if the pictured is viewed later (e.g. on a monitor) the viewer no longer corrects for the environment and the illuminant colour appears too strong.

An example algorithm would be “greyworld”, which assumes the average pixel in an image is grey.

This is related to [[Colour]]

## Gamma Correction

Equal steps in luminance $\ne$ perceived brightness (the brightness we see is not linear with the number of photons). Can be corrected with $L=V^\gamma$, where $L$ is the raw luminance, $V$ is gamma corrected encoding (which allocates more bits to smaller values), and $\gamma$ is the correction constant, usually $2.2$.

## Contrast Sensitivity

Human visual system is most sensitive to mid-frequencies. High amplitude high frequency, and high amplitude low frequency data can be discarded. Discrete cosine transform and coefficient quantisation can be used to improve algorithm efficiency and compression.