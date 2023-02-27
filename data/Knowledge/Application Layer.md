## Client-Server Paradigm
### Server
- always-on host
- permanent IP address
- in data centers for scaling
### Clients
- may be intermittently connected
- may have dynamic IP address
- do not directly communicate with each other
## P2P Architecture
Peers request service from other peers, provide service in return to other peers. Peers intermittently connected and change IP addresses. 
## Processes
Client process initiates communication, server process waits to be contacted. Processes exchange messages. Within same host, two process communicate with inter-process communication (defined by OS). 
## Sockets
Processes send/receives messages to/from socket between application/session and transport layer. 
## App-layer Protocol Defines
- types of messages exchanged (e.g. request, response)
- message syntax and semantics (what fields, how delineated, mean of info in fields)
- rules for when/how processes send & respond to messages
- open protocols defined in RFCs, allowing for interoperability (e.g. HTTP, SMTP), as well as proprietary protocols (e.g. Skype)
## Topics
- [[HTTP]]
## Use Cases
- [[Email]]
- [[Domain Name System (DNS)]]
- [[Peer-to-Peer (P2P)]]