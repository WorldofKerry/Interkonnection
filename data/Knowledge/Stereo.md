How do we transfer points between 2 views? In the planar case, we can d a one-to-one mapping via plane (homography). I.e. where the two lines cross in the two perspectives. The non-planar point depends on the depth of the 3D point. 
![[Pasted image 20221209212639.png]]
A point in left image gives a line in right image. Triangulation can be used to find the 3D point. 
## Stereo Matching
A standard stereo setup has cameras related by a translation in the $x$ direction, resulting in horizontal epipolar lines. Algorithms can search the scanlines for matches. The difference in $x$ coordinate for a corresponding feature is called disparity.  The best match is at min of SSD function along scanline. 
![[Pasted image 20221209213112.png]]
This extends to anaglyph (images encoded in different colour channels), and field sequential glasses that transmit alternative left/right images. Lenticular lenses send different images directly to each eye, without need for glasses. 
Larger windows -> smoothed result. 
![[Pasted image 20221209213404.png]]
## Problems with Stereo Matching
Occlusions and depth discontinuities Causes gaps in the stereo reconstruction. Matching is difficult as aggregation windows often overlap with occluded region. 
![[Pasted image 20221209213557.png]]
Segmentation-based stereo approaches aim to solve this by trying to guess the depth edges. 
There is also the problem of ordering constraint, where the order of the points is not always deterministic due to occlusions/depth discontinuities. 
![[Pasted image 20221209213757.png]]