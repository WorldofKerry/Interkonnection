Each layer implements a service, via own internal-layer actions. Relies on services provided by layers below. 
## Internet Protocol Stack
1. Application: network applications, e.g. HTTP, IMAP, SMTP
2. Transport: process-process data transfer, e.g. TCP, UDP
3. Network: routing of datagrams from source to destination, e.g. IP, routing protocols
4. Link: data transfer between neighboring network elements, e.g. Ethernet, 802.11(WIFI), PPP
5. Physical: bits on the wire/median, e.g. twisted pair, coax