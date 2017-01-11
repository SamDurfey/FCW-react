# First City Wellness
***Author: Samuel Durfey***

#### This is the landing page for First City Wellness, an acupuncture and holistic medicine clinic. 
#### *\* It is currently a work in progress \**

### Setup:
- Download this repository to your machine.

I am not providing my Google Maps api key for security reasons. As such, this program will error 
out if run as is. Either remove or comment out the map code, or provide your own key:
- Create a file in `src/` named `env.js`
- Place this in `env.js`:
```
const MAPS_API_KEY = 'YOUR API KEY GOES HERE';
export default MAPS_API_KEY;
```
- In your command line, traverse to the root directory, then run:
    `npm install`
- This installs necessary dependencies. When that is complete, run:
    `npm start`
- Your machine should now be running the application on a local server in development mode.
- In your browser, navigate to `localhost:4000`


***This project is written in JavaScript (ECMAScript 6) with ReactJS***