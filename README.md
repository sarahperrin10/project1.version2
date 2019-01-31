# This is my First Art Project
------

### My Art Project: The Duke Dunking Challenge
![Sarah Perrin](images/screenshot.png?raw=true "Sarah Perrin")

I wanted to create a piece that my audience could interact with in a game-like manner, and that was also topical to Duke students specifically. Since it was our first project, I also wanted to play around with various different functions both that we learned in class and that I have picked up from looking at other’s code online. In this piece, I developed a game in which the user must get Zion Williamson to “dunk” a basketball into the hoop. The hoop moves to a new position each time this task is completed. 

I had fun working on the expanding and contracting text, though I came across an issue in which the text would go upside-down with every other iteration. This was caused as a result of calling the cosine of a value in order to scale the text gradually. Because cosine has both positive and negative values, I figured out that I needed to apply the absolute value of the cosine to just take those positive values. One of the other major issues I came up against was in figuring out how to randomly move the hoop around when the mouse passed over it. Ultimately, I did this by constructing multiple "if" statements that had to do with the mouse’s distance to the current location of the hoop. In this case, if the mouse is less than 75 units away, that statement "isOverHoop" becomes true and the hoop will move.

