
        const quizData = [
            { question: "What is the correct syntax to declare a variable in C?", answers: { a: "int x;", b: "x = int;", c: "variable x;" }, correct: "a" },
            { question: "Which of the following is a valid C data type?", answers: { a: "real", b: "int", c: "number" }, correct: "b" },
            { question: "Which symbol is used for single-line comments in C?", answers: { a: "//", b: "/* */", c: "#" }, correct: "a" },
            { question: "What is the size of an int in C?", answers: { a: "2 bytes", b: "4 bytes", c: "8 bytes" }, correct: "b" },
            { question: "Which of these is a looping construct in C?", answers: { a: "for", b: "while", c: "both" }, correct: "c" },
            { question: "Which function is used to print output in C?", answers: { a: "scanf", b: "printf", c: "print" }, correct: "b" },
            { question: "What is used to terminate a statement in C?", answers: { a: ";", b: ".", c: ":" }, correct: "a" },
            { question: "Which keyword is used to define a function in C?", answers: { a: "def", b: "func", c: "void" }, correct: "c" },
            { question: "What does 'return 0' signify in main()?", answers: { a: "Program ran successfully", b: "Error in execution", c: "Nothing" }, correct: "a" },
            { question: "Which header file is required for printf()?", answers: { a: "stdio.h", b: "stdlib.h", c: "conio.h" }, correct: "a" }
        ];

        let currentQuestionIndex = 0;
        let score = 0;
        const quizContainer = document.getElementById('quiz');
        const nextButton = document.getElementById('next');
        const resultsContainer = document.getElementById('results');

        function showQuestion() {
            const q = quizData[currentQuestionIndex];
            let answers = '';
            for (const [key, value] of Object.entries(q.answers)) {
                answers += `<label><input type='radio' name='question' value='${key}'> ${value}</label>`;
            }
            quizContainer.innerHTML = `<div class='question'><strong>${q.question}</strong></div><div class='answers'>${answers}</div>`;
        }

        nextButton.addEventListener('click', () => {
            const selectedOption = document.querySelector("input[name='question']:checked");
            if (selectedOption) {
                if (selectedOption.value === quizData[currentQuestionIndex].correct) {
                    score++;
                }
                if (currentQuestionIndex < quizData.length - 1) {
                    currentQuestionIndex++;
                    showQuestion();
                } else {
                    quizContainer.style.display = 'none';
                    resultsContainer.innerHTML = `<h2>Quiz Completed!</h2><p>Your score: ${score} / ${quizData.length}</p>`;
                    nextButton.style.display = 'none';
                }
            }
        });

        showQuestion();
