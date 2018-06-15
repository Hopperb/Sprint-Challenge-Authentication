<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
    -Middleware in express is responsible for handling access to the req, res, and next in the middleware function. Middleware executes the code and make changes to the req and res objs.

    -Sessions in express are place to hold datat and you can acess the data by requests. Each time there is visit then you recived a uniqes session ie cookies. Sessions also helps manage the state of web APIs
    
    -bcrypt hashes passwords and sends a long string and its up to the User to provide to make request.

    -jwt are for users to provide when making a request

2.  What does bcrypt do in order to prevent attacks?

    Bcrypt hash passwords and makes it longer to hack 

3.  What are the three parts of the JSON Web Token?
    Header, signatures, payload
