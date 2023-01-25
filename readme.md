# Running the project

In your terminal run `npm i` and then `npm run start`. For node version latest LTS would probably work but I used 18.13.0

# Testing out functionalities of the component
* In index.html file you can change the automatic transition delay or remove it altogether
* In main.css you can change the size of carousel component. By default it will try to expand as much as possible
* There is a readme at each component of how I imagine it being used

# Caveats
* I conciously decided to try out styling the host tag directly instead of making a div inside. This leads to a broken component if the component is styled in a wrong way while using it. However this does leave flexibility of doing edge case styling without playing with `parts`
* With accesibility I used buttons to make keyboard navigation possible. I also added aria-label. What's lacking:
    * I'm guessing better screen reader support
    * Good touchscreen integration (swipe to change item)
    * Something else I don't know