function Quiz(questions) {
    this.questions = questions;

    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        results(this.getQuestionIndex().getTitle(), this.getQuestionIndex().getText());
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
function Question(text, choices, answer, title, descr) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.title = title;
    this.descr = descr;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}

Question.prototype.getTitle = function() {
    return this.title;
}

Question.prototype.getText = function() {
    return this.descr;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        notQualified(); 
    }
    else {
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function results(title, text) {
    var gameOverHTML = "<h1>"+title+"</h1>";
    gameOverHTML += "<h2 id='score'> "+text+"</h2><button><button>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

function notQualified() {
    var gameOverHTML = "<h1>Not Qualified</h1>";
    gameOverHTML += "<h2 id='score'> For more information: blah blah blah </h2><button id=\"clickMe\">Click heere<button><script>document.getElementById(\"clickMe\").onclick = doFunction;</script>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 
 
// create questions here
var questions = [
    new Question("Did you leave your job voluntarily?", ["Yes", "No"], "Yes", "Maybe", "You will need to be reviewed by a claims examiner through a fact-finding interview. Your employer may also be contacted and the examineer will determine your eligibility."),
    new Question("Were you fired for misconduct?", ["Yes", "No"], "Yes", "Maybe", "You will need to be reviewed by a claims examiner through a fact-finding interview. Your employer may also be contacted and the examineer will determine your eligibility."),
    new Question("Do you meet the minimum earnings requirement of $10k during your regular base year period (first four of the last five completed calendar quarters) or $200/week for 20 weeks? Alternatively, you can evaluate your earning against the four most recently completed calendar quarters preceding the date of the claim or the three most recently completed calendar quarters preceding the date of claim, and weeks and wages in the filing quarter up to your last day of work (this will contain fewer than 52 weeks).", ["Yes", "No"], "No", "Unqualified", "If you don't meet the minimum earnings requirement, you do not qualify for unemployment benefits."),
    new Question("Are you a teacher or school employee?", ["Yes", "No"], "Yes", "Maybe", "If you have a claimed filed curing a recess period, only school wages in the base period of the claim, or an offer to return to work for a school employer when the recess period ends, you may not be eligibile, although eligibility depends on your unique situation."),
    new Question("Are you a corporate officer or business owner?", ["Yes", "No"], "Yes", "Maybe", "If you own more than a 5 percent equitable (you own more than 5% of the capital stock of the corporation, either by yourself or with your spouse) or debt interest and your claim is based on wages with the corproation, you will not be considered unemployed during your term of office or ownership."),
    new Question("Are you self-employed, a part-time worker, or an independent contractor?", ["Yes", "No"], "Yes", "Qualified", "You may qualify for unemployment under the national coronavirus releif act. You should apply for unemployment insurance."),
    new Question("Did your employer cease operations due to COVID-19?", ["Yes", "No"], "Yes", "Qualified", "You may qualify for unemployment under the national coronavirus releif act. You should apply for unemployment insurance."),
    new Question("Did you stop working to quarantine and expect to work after quarantine is over?", ["Yes", "No"], "Yes", "Qualified", "You may qualify for unemployment under the national coronavirus releif act. You should apply for unemployment insurance."),
    new Question("Did you stop working due to risk of exposure or to care for a family member?", ["Yes", "No"], "Yes", "Qualified", "You may qualify for unemployment under the national coronavirus releif act. You should apply for unemployment insurance."),
    new Question("Did the breadwinner in your household die from COVID-19?", ["Yes", "No"], "Yes", "Qualified", "You may qualify for unemployment under the national coronavirus releif act. You should apply for unemployment insurance."),
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();