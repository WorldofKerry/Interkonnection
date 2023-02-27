## Combinational Timing Constraints
- Gate propagation delay: time it takes for combinational gate output to change after its last input changes
- Critical path delay

## Sequential (Flip-Flop) Timing Constraints
- Clock-to-Q delay
- Setup time
- Hold time
![[Pasted image 20221220185030.png]]
## Circuit Speed
- Min clock period
- Max clock frequency

## Critcal Path Delay
$t_{ClockMin} \ge t_{CriticalPath}$ or $f_{Clock} < f_{ClockMax}$

## Setup Requirement
$t_{clock} \ge t_{clk-to-q max} + t_{CriticalPath} + t_{setup}$
After clock rising-edge, there must be enough time so that  
1. source flip-flop’s output can settle to correct value  
2. critical path can settle to correct value  
3. value arrives at destination flip-flop early enough for setup time

## Hold Requirement
$t_{clk-to-q min} + t_{path} \ge t_{hold}$
nput values of destination flop must not change for a  
short time after rising clock edge.

## Clock Skew
$t_{clock}\ge t_{clk-to-q} + t_{logic} + t_{setup} - D$