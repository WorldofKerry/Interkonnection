## Info
- No connection establishment (can avoid RTT delay)
- simple, no connection state at sender/receiver
- small header size
- NO congestion control
- Segments may be lost or delivered out-of-order to app
## Use Cases
- Streaming multimedia
- DNS
- SNMP
- HTTP/3 (if reliable transfer needed over UDP, add needed reliability and congestion control at app layer)
## Segment Format
Source port, destination port, length, [[checksum]], application data payload