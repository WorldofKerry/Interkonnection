People: many identifiers, e.g. SSN, name, passport #. 
Internet hosts, routers: IP address for addressing datagrams, or "name" used by humans. 
A distributed database with a hierarchy of many name servers. 
Hosts and name servers communicate to resolve names. 
## Top-level Domain (TLD) Servers
Responsible for com, org, net, edu, countries, etc.
## Authoritative DNS Servers
Organization's own DNS server(s), providing authoritative hostname to IP mappings for organization's named hosts. 
## Local DNS Name Server
Each ISP has one
## Resolution
### Iterative Query
Contacted server replies with name of server to contact
### Recursive Query
Puts burden of name resolution on contacted name server
## Caching/Updating Records
Name servers cache mappings once learning them. They may be out-of-date until all TTLs expire. 
DNS record types (resource records (RR)): A, NS, CNAME, MX
## Attacks
DDoS attacks, redirect attacks, exploit DNS for DDoS
## Topics
- [[DNS Records]]