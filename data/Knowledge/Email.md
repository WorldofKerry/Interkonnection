## User Agents
The "mail reader", whose outgoing and incoming messages stored on server. 
## Mail Servers
- Mailbox: contains incoming messages for user
- Message queue: queue of outgoing mail messages
## Simple Mail Transfer Protocol (SMTP)
Between mail servers to send email messages
Ues TCP
## RFC 822
Standard format for text message format, includes: header lines (to, from ,subject) and body. 
## Sample Scenario
1. Alice uses user agent (UA) to send message to bob's email address, where here mail server places it in message queue
2. Client side of SMTP opens TCP connection to Bob's mail server
3. SMTP client sends Alice's message over TCP
4. Bob's mail server places message in Bob's mailbox, where he can invoke his UA to read message
## Improvements
### POP (Post Office Protocol)
authorization, download
### IMAP (Internet Mail Access Protocol)
more features, manipulation of stored messages on server
uses TCP
