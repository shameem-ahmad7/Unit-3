let quizData = null;  // Holds the fetched quiz data

// Event listener to wait for the DOM to load before starting the quiz
document.addEventListener("DOMContentLoaded", function () {
    fetch('quiz-data.json')  // Fetch quiz data from an external JSON file
        .then(response => response.json())  // Convert the response to JSON format
        .then(data => {
            quizData = data;  // Store the fetched data in the global variable
        })
        .catch(error => console.error('Error fetching data:', error));  // Handle any errors during fetch
});

// Function to start the quiz, accepts the section index as a parameter
function startQuiz(index) {

    const currentQuestions = quizData.sections[index].questions;  // Fetch the list of questions for the selected section
    let currentQuestionsIndex = 0;  // Track the current question index
    let score = 0;  // Initialize the quiz score
    let answerSelected = false;  // Flag to track if an answer is selected

    // Display the question container and hide the quiz container
    document.getElementById('quiz-container').style.display = "none";
    document.getElementById('question-container').style.display = "block";
    document.getElementById('question-container').innerHTML = `
    <p id="score">Score:0</p>
      <div id="question"></div>
      <div id="options"></div>
      <button id="next-button">Next</button>
    `

    // Function to display the current question and answer options
    function showQuestion() {
        const question = currentQuestions[currentQuestionsIndex];  // Get the current question object
        const questionsElement = document.getElementById('question');  // DOM element to display the question
        const optionsElement = document.getElementById('options');  // DOM element to display the answer options

        questionsElement.textContent = question.question;  // Set the question text in the DOM
        optionsElement.innerHTML = '';  // Clear any previous options

        // If the question is multiple choice (MCQ)
        if (question.questionType === "mcq") {
            question.options.forEach((option, index) => {  // Loop through each option
                const optionElement = document.createElement('div');  // Create a div for each option
                optionElement.innerHTML += option;  // Set the option text
                optionElement.addEventListener('click', function () {  // Add click event listener for the option
                    if (!answerSelected) {  // Only allow one answer per question
                        answerSelected = true;  // Mark answer as selected
                        optionElement.classList.add('selected');  // Add class to highlight selected answer
                        checkAnswer(option, question.answer);  // Check if the selected answer is correct
                    }
                });
                optionsElement.appendChild(optionElement);  // Add the option to the DOM
            });
        }
        // If the question requires text or numeric input
        else {
            const inputELement = document.createElement('input');  // Create input field for answer
            inputELement.type = question.questionType === 'text' ? 'text' : 'number';  // Set input type based on question type
            const submitButton = document.createElement('button');  // Create submit button
            submitButton.textContent = "Submit Answer";  // Set button text
            submitButton.className = "submit-answer";  // Add class to submit button
            submitButton.onclick = () => {  // Onclick event for submit button
                if (!answerSelected) {  // Only allow one answer per question
                    answerSelected = true;  // Mark answer as selected
                    checkAnswer(inputELement.value.toString(), question.answer.toString());  // Check if the entered answer is correct
                };
            }
            optionsElement.appendChild(inputELement);  // Add input field to DOM
            optionsElement.appendChild(submitButton);  // Add submit button to DOM
        }

        // Function to check if the selected/entered answer is correct
        function checkAnswer(userAnswer, correctAnswer) {
            const FeedbackELement = document.createElement('div');  // Create a div to display feedback
            FeedbackELement.id = 'feedback';  // Set the feedback div ID
            if (userAnswer === correctAnswer || userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
                score++;  // Increment score if the answer is correct
                document.getElementById('score').textContent = "Score: " + score;  // Update the displayed score
                FeedbackELement.textContent = "Correct Answer";  // Display correct answer feedback
                FeedbackELement.style.color = "green";  // Set feedback color to green
            }
            else {
                FeedbackELement.textContent = `Wrong! The Correct Answer is ${correctAnswer}`;  // Display wrong answer feedback
                FeedbackELement.style.color = "red";  // Set feedback color to red
            }
            optionsElement.appendChild(FeedbackELement);  // Add feedback to the options container
        }
    }

    // Show the first question when the quiz starts
    showQuestion();

    // Event listener for the "Next" button
    document.getElementById('next-button').addEventListener('click', () => {
        currentQuestionsIndex++;  // Move to the next question
        answerSelected = false;  // Reset the answer selection flag
        if (currentQuestionsIndex < currentQuestions.length) {
            showQuestion();  // Display the next question
        } else {
            endQuiz();  // End the quiz and show results
        }
    });

    // Function to handle the end of the quiz and display the final score
    function endQuiz() {
        let questionContainer = document.getElementById('question-container');  // DOM element for question container
        let quizContainer = document.getElementById('quiz-container');  // DOM element for quiz container
        questionContainer.innerHTML = `
        <h1>Quiz Completed!</h1>
        <p>Your final score: ${score}/${currentQuestions.length}</p>
        <button id="home-button">Go to Home</button>
    `;

        // Event listener for the "Go to Home" button to return to quiz section selection
        document.getElementById('home-button').addEventListener('click', function () {
            quizContainer.style.display = 'grid';  // Show the quiz section container
            questionContainer.style.display = 'none';  // Hide the question container
        });
    }
}
