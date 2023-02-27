## Packet Loss
Packets queue in router buffers. If the memory to hold queued packets fills up, packet loss occurs. This can lead to a queueing delay. 
May be retransmitted by previous node, source end system, or not at all. 
## Packet Delay
Four sources, where nodal delay = nodal processing delay + queueing delay + transmission delay + propagation delay, written as $d_{nodal} = d_{proc} + d_{queue} + d_{trans} + d_{prop}$.  
### Queuing Delay
If $La/R \approx 0$, avg. queuing delay small, if $=1$, avg. queuing delay large, if $>1$, then avg. queuing delay is infinite. 
Given transmission rate $R$, packet-length $L$, average rate of packets/second $a$, then traffic intensity is $I=La/R$, and queuing delay is $I(L/R)(1-I)\forall I < 1$. Number of packets left in buffer after 1 second is packets$-(60/$qdelay$)$ rounded down. Number of packets dropped is $a-$buffer size. 
## Throughput
Rate in bits/time unit. Either instantaneous or average. It is limited by the bottleneck link, the link on the end-to-end path that constrains end-end throughput. 
## The Math
Suppose we have a L-bit file, where path to source has transmission rate of R. Assume propagation speed is c, and distance between source and destination is d. 