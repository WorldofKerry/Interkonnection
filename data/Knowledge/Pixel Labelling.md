## Semantic Segmentation
Designa  network as a number of convolutional layers with downsampling (pooling) and upsampling inside of the network. 
How to uppool when missing data? Copy from previous layers, resultin gin [[U-Net]]. 
## Single-View [[Depth Estimation]]
Uses a multi-scale architecture. 
## [[Super-Resolution]]
Increase spacial resolution of an image. Uses L2 loss. Trained by downsampling images. 
## Texture
Use simples features, then match texture statistics up to a level, then find more complex features. 