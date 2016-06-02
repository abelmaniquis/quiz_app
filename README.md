1. How do we associate question objects with list elements?
2. How can I view changes in jQuery through Developer tools?


 http://megantaylor.github.io/Thinkful-Quiz/index.html
 
https://aric87.github.io/quiz/

http://keithlamar.github.io/videogamequiz/

http://mreiben.github.io/projects_page/coffeequiz/index.html

http://case-dubs.github.io/realitytvquiz/



5/4/2016

How App will behave:

1. Starting page loads
2.When player clicks start button game begins
3.for questions i, i < questions.length, i++){
        if question is correct
            score ++
        else
            score += 0
        continue to next question
}

4. Display Score, thank the user for playing.







6/1/2016:
REFACTORING FOR MVC:

score, 
currentQuestion, 
questionarray


functions:

initialState(): Creates front page upon opening the app.

clear(): Empties a section when it is done being used.

question(): Writes the question on the screen.

validate(): Checks to see if the question is correct, iterates question number,clears out question, and loads next question

endGame(): Displays finishing screen.

newGame(): starts game over, resets all parameters.



MODEL:
score
currentquestion
questionarray

VIEWS: