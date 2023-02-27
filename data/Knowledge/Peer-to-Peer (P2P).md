No always-on server, arbitrary end systems directly communicate, peers are intermittently connected and change IP addresses. 
## Speed Comparison
Given server upload speed $u_s$, and client download/upload $d_i$, $u_i$. 
### Client-Server
Time to distribute $F$ to $N$ clients is $D_{C-S}\ge \max\{NF/u_s,F/d_{min}\}$, which increases linearly in $N$. 
### P2P
Time to distribute $F$ to $N$ clients is $D_{P2P}\ge\max\{F/u_s,F/d_{min},NF/(u_s+\sum_{i=1}^N u_i)\}$, which increases linearly with $N$, but so does the term $\sum u_i$. 