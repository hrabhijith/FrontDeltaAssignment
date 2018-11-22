Hi Deltax,

This is the front end code for the assignment given for 'IMDB' like website.

Unfortunately, i could not develop MVC server side web API due to lack of resource (My PC coudn't support VS 2017 hence few ASP.net Core modules). I usually work on front end and have all the required resource for even backend in my office PC. Moreover, i don't have hands-on experience on ASP.net or C#. I have experience in Angular 5 or 6 and and knowledge on its counterpart Node.js for backend (In our project we are not using Node.js RESTful APIs). I thought i can give a try for atleast front end. I have tried to cover all the front end requirements mentioned in the assignment. For backend i have used Google's Firebase and hosted this application in AWS S3 for ease of access.

Application setup and description:

1. Checkout the entire code to a desired folder.
2. Open the folder in some code editor. (VS code is better)
3. Must have Node 8 or more installed.
4. In the terminal of VS code, inside the folder path, run 'npm install' This will install all required node_modules.
5. Then if everything goes fine, run 'ng serve'.
6. Open the Chrome, and open 'http://localhost:4200'

If this is tedious or encounter any problem, use the link mentioned in the mail to see the hosted application.

Validations:

1. The app is authenticated by Email and password.
2. Edit, delete or adding new movies can be possible only by logging in.
3. Try editing or adding a movie, you will be redirected to signup page.
4. Signup and signin, use valid email ids.
5. after signing in, movies can be edited, can add actors.
6. Can be logged out.
7. Edit or new movie form has all mandatory fields, if not filled you cant save the form.
8. if you touch an input and leave without entering, it will be highlighted in red.
9. There is a preview for movie poster while adding movies. Please use direct link of any image from web.

Any details needed, feel free to mail me.

Thanks...
