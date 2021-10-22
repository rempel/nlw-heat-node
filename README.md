# NLW Heat

NLW Heat Node

The project will be hosted in the local environment at port 4000.

http://localhost:4000

### Routes

* GET [/github](http://localhost:4000/github)
* GET [/signin/callback](http://localhost:4000/signin/callback)
* POST [/authenticate](http://localhost:4000/authenticate)
* POST [/messages](http://localhost:4000/messages)
* GET [/messages/last3](http://localhost:4000/messages/last3)
* GET [/profile](http://localhost:4000/profile)

## Notes
### Yarn run application:

`yarn dev`

### Prisma

#### Generate a migration

`yarn prisma migrate dev`

#### Run studio

`yarn prisma studio`