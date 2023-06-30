import questions from './questions.json';

export function getQuestions() {
    //assign all questions to a variable
    let baseQuestions = [];
    let questionTypes = ['leftOrRightQuestions', 'authoritarianOrLibertarianQuestions', 'conservativeOrProgressiveQuestions'];
    for (let i = 0; i < 3; i++) {
        for (let a = 1; a <= 10; a++) {
            baseQuestions.push(questions.questions[questionTypes[i]]['q'+a]);
        };
    };
    //randomly order the questions
    var finalQuestions = [];
    while (finalQuestions.length < 30) {
        let selectedQuestion = Math.floor(Math.random() * 30);
        if (baseQuestions[selectedQuestion] != null) {
            finalQuestions.push(baseQuestions[selectedQuestion]);
            baseQuestions[selectedQuestion] = null;
        };
    };
    //return the now ordered questions
    return finalQuestions;
};