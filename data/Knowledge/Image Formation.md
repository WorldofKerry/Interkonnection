Uses [[Physics]] to form images. Includes topics of light, reflectance, lenses, pinhole, perspective, and projections. 
The spectral distribution of energy in a light ray determines is colour, this distribution is called the [[Spectral Power Distribution]]. 
## Reflection
- pure mirror reflects light along a line symmetrical about the surface of the normal
- pure diffuse surface (Lambertian Reflection) scattters light equally in all directions
- Specular surfaces directly reflect over a small angle
## Imaging
- Bare Sensor: all scene points contribute to all sensor pixels
- Pinhole Camera: most rays are blocked, so more clear image
	- Camera Obscura ("*Dark Chamber*") describes the darkness need for clear image
	- If pinhole too big, blurs; if pinhole too small, diffraction blurs; slow because only small amount of light from scene hits the image plane per unit time
## Projections
Focal length: for a fixed sensor size, focal length determins field of view. 
- Perspective: $x'=f'\frac{x}{z}, y'=f'\frac{y}{z}$, accurate for real scenes
	- Parallel lines meet at a vanishing point, with a horizon line
- Orthographic: $x'=x$, $y'=y$, accurate for small/distant objects, useful for recognition
- Weak: a combination of both, $x'=\frac{f'}{z_0}x$
For max accuracy, paramters of particular camera must be modelled. 
## Lenses
Snell's Law: $n_1\sin(\alpha_1)=n_2\sin(\alpha_2)$, with index of refraction $n$. 
Focuses raws from infinity at the focal length of the lens. 
Smaller aperature -> smaller blur, larger depth of field
Real len artifacts: 
- Spherical Aberration: outer parts of a lense do not bring light rays to the same focus as the central part
- Vignetting: in a two-lens system, outer edge of first lens never makes it to second lens, causes darkness on outer edges of image
- Chromatic Aberration: index of refraction dependent on wavelength, different colours follow different paths, not call colours can be in equal focus
- Scattering: some light is reflected at each lens surface
- Lens distortion: lines in the world are no longer lines on the image, become curved