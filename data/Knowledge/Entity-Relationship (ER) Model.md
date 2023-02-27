## Cardinality Constraint
For relationship set $R$ between entity sets $A$ and $B$, we can have the following cardinalities: 
- one-to-one
- one-to-many
- many-to-one
- many-to-many
Where if there is an arrow from $A$ to $B$, then there can be multiple $A$ for each $B$. If there are not arrows, then it is a many-to-many. 
## Participation Constraint
To enforce that every entity $A$ has an associated $B$. A bold line is used to indicate that participation is required. 
## Weak Entities
Can be identified uniquely only by considering the primary key of another (owner) entity. Weak entities sets and their identifying relationship are show with thick lines. 
## ISA ('is a') Hierarchies
If we declare $A$ ISA $B$, then every $A$ is also considered a $B$. Note that there can be overlap constraints (e.g. for $A$ ISA $C$ and $B$ ISA $C$, can Joe be both $A$ and $B$?), and covering constraints (e.g. from prev. example, does every $C$ have to be either $A$ or $B$?). 