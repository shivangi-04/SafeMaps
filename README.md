# SafeMaps
_Your safer way Home_

https://safemaps.co/

# Description

On usual maps we can see the traffic and types of places. But as a traveller, especially if in a foreign city more important than traffic is to know which streets and areas to avoid. If you are woman, alone at night in the city, you would certainly wish you knew the safest route to your destination. Our application exists to serve that purpose. We have demonstrated the crime density of the frequency of crimes committed in San Francisco. The density was computed by the data found from San Francisco crime dataset from Kaggle.

# Tech Stack
Data Visualization using HTML and Python
Sorted data according to the crimes listed in the data set and grouped them by cumulative frequency 
Usage of Google API services
Geospatial Visualization using GeoJSON Data
Deploying and hosting the prototype on Firebase


# Challenges
i) The first challenge was to find a suitable database. We did not find a suitable and complete database of any Indian Metropolitan City, but did find San Francisco's. As a future prospect we are planning to collect or web scrape data for more major cities.

ii) Our second challenge was to get the heat map onto the web app prototype. We have only ever worked on data visualization on python notebooks, so combining HTML and python was certainly an unfamiliar territory for us.

iii) After getting the map, we were able to visualize to the coordinates at which the crimes have occured, but to show them as a cumulative density was an arduous task.

iv) The next challenge, a very unexpected and silly one was making the webpages and dealing with CSS.

v) Our final challenge, which took us the longest to resolve was deploying and hosting the prototype. We first tried doing it by Heroku but ran into many errors, in the end we were successfully able to deploy it on Firebase.

vi) We are also having some issues with deploying the prototype on the custom domain (safemaps.co), but we have provided the working firebase one.

vii) As this is a prototype right now and we could not find much data to work with, we planned in future after gathering surplus data and having a big enough density map we will introduce GPS feature and user authentication both using google firebase and cloud services. We will also add an SOS button for sending emergency texts, if the user ever finds themselves stranded.

# Screenshots
<img width="1552" alt="Screenshot 2021-03-14 at 3 47 47 AM" src="https://user-images.githubusercontent.com/56034404/111057500-04860500-84ae-11eb-9102-4d0bcbd6452f.png">

<img width="1552" alt="Screenshot 2021-03-14 at 4 11 36 AM" src="https://user-images.githubusercontent.com/56034404/111057410-5aa67880-84ad-11eb-809f-d87a53af8ac6.png">

