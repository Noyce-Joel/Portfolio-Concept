## Portfolio Concept

This project serves as an example of what one can do with Three.js to create an intereactive personal website.

I enabled the user to navigate the canvas by manipulating camera controls with event listeners and R3F;
and I incorporated HTML using Drei to display copy. This allows users to choose a box and explore it's contents in 360 degrees. 

One of the challenges I faced in this build was reducing large amounts of prop drilling. 
I decided to refactor and adopt the simplest solution: to use React's Context API to manage global state variables. 
This helped to clean up the code, making it easier to read as the project continued to grow in size. 

Visit the site here: concept-for-portfolio.vercel.app