# sislive
This is the test by Derek Coleman for sis live

I chose flux/react as the front end. I had a lot of trouble installing flux and its dependencies. I chose the npm/gulp route because
I'm a fan of the modularity of require and module.exports. Also jsx makes the code much more readable.

I created the Add repository as a separate view with the itention of demonstrating how flux is really good at communicating between views

I built the back end using a common interface library so that the cod could be tested

Things I didn't do ....
1) finish the get requests - the date does get passed in but nothing is done with it
2) finish the post request - the plumbling ts there, I just didn't join the dots
3) implement the put request (add a feedback item)
4) style it - sorry - it looks horrendous
5) tidy it up - there's some places where the conventions have gone a bit nuts - plus the dates aren't properly populated
6) set up DI

I hope there's enough there to get an idea of the structure I was going for. I've had to abandon it as I could carry on working on it for
ever.

Once you pulled it from GitHub, it should run in Visual Studio with no special treatment. If the client side is failing then you can run
NPM install
and then
gulp

at the root

Enjoy
