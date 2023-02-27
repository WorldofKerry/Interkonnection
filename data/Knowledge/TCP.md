## Reliable Data Transfer (rdt)
### rdt1.0
- Sender and receiver do not know the state of each other, e.g. was the message received?
	- Solution is to use a FSM to specify sender, receiver
### rdt2.0 (stop-and-wait)
- How to recover from bit errors?
	- Receiver sends an acknowledgements (ACKs) if packet received OK
	- Receiver sends negative acknowledgements (NAKs) to tell sender packet had error, where sender retransmits packet. 
- But there's a flaw, what if the ACK/NAK is corrupted? Can't just retransmit, as there could be a possible duplicate. 
### rdt2.1
Sender handles garbled ACK/NAKs by adding a sequence number to each packet. 
Why do we need sequence number? 
	If receiver sends ACK, but it gets corrupted to sender, the sender needs to retransmit the packet to let receiver know that the ACK was corrupted. How does the receiver know if it's the old packet or a duplicate? Through the sequence number. 
#### Sender
Seq # added to packet, and only two seq # will suffice. Must check if ACK/NAK corrupted. Twice has many states, as needs to remember whether expected packet should have seq # of 0 or 1
#### Receiver
Must check if received packet is duplicate. State indicates whether 0 or 1 is expected packet seq #. 
### rdt2.2 (NAK-free protocol)
Instead of NAK, receiver sends ACK for last packet received okay with sequence number. Duplicate ACK at sender results in same action as NAK. 
### rdt3.0 (channels with errors and loss)
Underlying channel can also lose packets (data, ACKs). Sender waits a reasonable amount of time for ACK before retransmitting. It's important to have additional state logic to deal with premature timeout/delayed ACK. 
#### Performance
$U_{sender}$ is the utilization of the sender, or the fraction of time sender busy sending (vs waiting). 
##### Example
1Gbps link, 15ms prop. delay, 8000 bit packet. 
$D_{trans}=\frac LR =\frac {8000}{10^9}=.008ms$ . Then the ACK arrives at $t=RTT+L/R$. Such that $U_{sender}=\frac{L/R}{RTT+L/R}=\frac{.008}{15+15+.008}=0.00027$, which stinks!
Solution? Pipelining: sender allows multiple "in-flight", yet-to-be-acknowledged packets. 