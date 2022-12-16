Texture is widespread, easy to recognize, hard to define. 
Used for object identity (for distinctive material properties), object’s shape . (deformation of texture from point to point). 
“Shape from texture”: estimating surface orientation or shape from texture. 
Texture analysis: represent/recognize texture. 
Texture synthesis: generate new examples of a texture. 
## Texture Representations
### Filter Banks
A collection of common textures as filters. Match texture to a response. Great for finding common textures (e.g. spots and bars).
Graph the data with mean d/dx and mean d/dy values. Further points means more dissimilar textures. 
### Oriented Pyramid
Apply oriented filter at each layer. Represent image at particular scale and orientation. 
### Patches / Texton Distribution
Textures characterized by repetition of basic elements (textons). Form distribution of quantised patches of images, ignoring spatial information. 
## Non-parametric Sampling
Data-driven approach to generating new examples of a texture, using an image of texture as source of probability model. 
	Draw samples directly from actual texture. 
	Accounts for more types of structure. 
	Success depends on choose correct “distance”. 
### Efros and Leung: Synthesizing One Pixel
Take a pixel, pick a random matching neighbourhood using SSD error, weighted by Gaussian to emphasize local structure, take all samples within some distance from that match. 
### Inpainting with Big Data
Hays and Efros:
1.  Create a short list of a few hundred “best matching” images based on global image statistics
2.  Find patches in the short list that match the context surrounding the image region we want to fill
3.  Blend the match into the original image
## Statistics of Filter Banks / CNN Activations
Texture Synthesis with [[Convolutional Neural Network (CNN)]]s (Gatys et al 2015):
- Start from noise, match statistics of neural net activations at multiple levels
- Use correlation of activations (Gram Matrix) and a CNN pre-trained for visual recognition
## Texture Synthesis
To fill holes in images (inpainting). 
To produce large quantities of texture for computer graphics. 