Solves the problem of there being multiple boundaries that can seperate datapoints. The distance from the boundary can be defined as $d_i=y_i(w^Tx_i+w_0)$, where $d_i$ can be arbitrarily large for large $w$. 
Given a seperation between classes (a  margin), maximize the min distance for fixed $|w|$ in $w*=\arg\max_w\min_iy_i(w^Tx_i+w_0)$ s.t. $|w|^2=1$. 
The active constraints are due to the data that define the classification boundary, called support vectors. 
This also works for non-linear data, by replacing the inner product with a kernel. 