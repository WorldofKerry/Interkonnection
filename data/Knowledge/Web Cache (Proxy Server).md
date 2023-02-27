Satisfy client request without involving origin server. Server tells cache about object's allowable caching in response header `Cache-Control: max-age=<seconds>`. 
## Calculations
Suppose:
- cache hit rate is 0.4
- access link utilization is 0.6
- average data rate to browsers is 1.5Mbps
- access link rate is 1.54Mbps

Then the data rate to browsers over access link is $0.6*1.5\text{Mbps}=0.9\text{Mbps}$. Which means the utilization is $\frac {0.9} {1.54}=0.58$. 
The total delay is $0.6*\text{(delay from origin servers)} + 0.4*\text{(delay when satisfied at cache)}$
$=0.6(2.01)+0.4(~\text{msec})\approx 1.2 sec$. 
This is more efficient than increasing the access link speed by 100x. 