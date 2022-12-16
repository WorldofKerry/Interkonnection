The apparent motion of brightness patterns in the image. The goal is to determine how objects/camera move in the 3D world, by formulating motion analysis by finding (dense) point correspondences over time. 
## Constraint Equation
We generally assume there is brightness constancy (brightness of point remains same over time). With this, we have $I_xu+I_yv+I_t=0$, the sum of the spatial and temportal derivatives. $u,v$ here is the optical flow. 
## Flow Ambiguity
I.e. for a barber's pole, the stripes can be interpreted as moving vertically or horizontally. The component of velocity parallel to the edge is unknown. 
## Aperature Problem
Similar to flow ambiguity, without distinct features to track (i.e. a line), the true visual motion is ambiguous. Locally, one can only compute the component of the visual motion in the direction perpendicular to the contour. 
![[Pasted image 20221209214535.png]]
This can be solved by assuming that $u$ and $v$ are the same in both equations. 
## Key Assumptions (Lucas-Kanade)
1. Motion is slow enough and smooth enough that differential methods apply
2. The optical flow constraint equation holds
3. A window size is chosen so that motion $[u,v]$ is constant int he window
4. Windows are chose such that the rank of $A^TA$ is 2, where $A^TA$ is similar to the [[Harris Corners]] matrix. 

## Other Methods
Many methods trade off a 'departure from the optical flow constraint' cost with a 'departure from smoothness' cost. 
## Optical Flow vs 2D Motion
Motion is geometric, optical flow is radiometric. 
Optical flow with no motion: lights going on/off, shadows, inter-reflection
Motion with no optical flow: spinning cylinder/sphere
