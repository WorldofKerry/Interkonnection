## Protocols
No delay nor bandwidth guarantees
### [[TCP]]
A reliable transport with control flow, congestion control, is connection-orientated, and does not provide timing, min throughput, nor security. 
Demultiplexes using 4-tuple of source IP & port, and destination IP & port. 
### [[UDP]]
Unreliable data transfer, does not provide reliability, control flow, congestion control, timing, throughput guarantee, security, nor connection setup. 
Demultiplexes using destination port number only. 
## Security
Vanilla TCP & UDP offer no encryption
### Transport Layer Security (TLS)
Provides encrypted TCP connections with data integrity, and end-point authentication. Implemented inside the application layer. 
## Multiplexing / Demultiplexing
### Multiplexing as Sender
Handle data from multiple sockets, add transport header
### Demultiplexing as Receiver
Use header info to deliver received segments to correct socket. Host receives IP datagrams and uses the IP addresses and port numbers to direct segment to appropriate socket. 
## Transport
On send side, app layer messages are broken into segments that pass to the network layer. On receive side, reassembles segments into messages and passes to app layer. 
