var states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NM", "NJ", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];

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

    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

function redoQuiz(state="NY") {
    var element = document.getElementById("quiz");
    element.innerHTML = "<h1>Unemployment Qualification Test</h1><p id=\"question\"></p><div class=\"buttons\"><button id=\"btn0\"><span id=\"choice0\"></span></button><button id=\"btn1\"><span id=\"choice1\"></span></button></div>";

    switch(state) {
        case "AL":
            quiz = new Quiz(al);
            break;
        case "AK":
            quiz = new Quiz(ak);
            break;
        case "AZ":
            quiz = new Quiz(az);
            break;
        case "AR":
            quiz = new Quiz(ar);
            break;
        case "CA":
            quiz = new Quiz(ca);
            break;
        case "CO":
            quiz = new Quiz(co);
            break;
        case "CT":
            quiz = new Quiz(ct);
            break;
        case "DE":
            quiz = new Quiz(de);
            break;
        case "FL":
            quiz = new Quiz(fl);
            break
        case "GA":
            quiz = new Quiz(ga);
            break;
        case "HI":
            quiz = new Quiz(hi);
            break;
        case "ID":
            quiz = new Quiz(id);
            break;
        case "IL":
            quiz = new Quiz(il);
            break;
        case "IN":
            quiz = new Quiz(ind);
            break;
        case "IA":
            quiz = new Quiz(ia);
            break;
        case "KS":
            quiz = new Quiz(ks);
            break;
        case "KY":
            quiz = new Quiz(ky);
            break;
        case "LA":
            quiz = new Quiz(la);
            break;
        case "ME":
            quiz = new Quiz(me);
            break;
        case "MD":
            quiz = new Quiz(md);
            break;
        case "MA":
            quiz = new Quiz(ma);
            break;
        case "MI":
            quiz = new Quiz(mi);
            break;
        case "MN":
            quiz = new Quiz(mn);
            break;
        case "MS":
            quiz = new Quiz(ms);
            break;
        case "MO":
            quiz = new Quiz(mo);
            break;
        case "MT":
            quiz = new Quiz(mt);
            break;
        case "NE":
            quiz = new Quiz(ne);
            break
        case "NV":
            quiz = new Quiz(nv);
            break;
        case "NH":
            quiz = new Quiz(nh);
            break;
        case "NJ":
            quiz = new Quiz(nj);
            break;
        case "NM":
            quiz = new Quiz(nm);
            break;
        case "NY":
            quiz = new Quiz(ny);
            break;
        case "NC":
            quiz = new Quiz(nc);
            break;
        case "ND":
            quiz = new Quiz(nd);
            break;
        case "OH":
            quiz = new Quiz(oh);
            break;
        case "OK":
            quiz = new Quiz(ok);
            break;        
        case "OR":
            quiz = new Quiz(or);
            break;
        case "PA":
            quiz = new Quiz(pa);
            break;
        case "RI":
            quiz = new Quiz(ri);
            break;
        case "SC":
            quiz = new Quiz(sc);
            break;
        case "SD":
            quiz = new Quiz(sd);
            break;
        case "TN":
            quiz = new Quiz(tn);
            break;
        case "TX":
            quiz = new Quiz(tx);
            break
        case "UT":
            quiz = new Quiz(ut);
            break;
        case "VT":
            quiz = new Quiz(vt);
            break;
        case "VA":
            quiz = new Quiz(va);
            break;
        case "WA":
            quiz = new Quiz(wa);
            break;
        case "WV":
            quiz = new Quiz(wv);
            break;
        case "WI":
            quiz = new Quiz(wi);
            break;
        case "WY":
            quiz = new Quiz(wy);
            break;
        default:
            quiz = new Quiz(nj);
      } 

    populate();
}

function getStarted() {
    var element = document.getElementById("quiz");
    element.innerHTML = "<h1>Unemployment Qualification Test</h1><p id=\"question\"></p><div class=\"buttons\"><button id=\"btn0\" onclick=\"chooseLanguage()\">Get Started</div>";
}

function chooseLanguage() {
    var element = document.getElementById("quiz");
    element.innerHTML = "<h1>Unemployment Qualification Test</h1><p id=\"question\">Select your language</p><div class=\"buttons\"><button id=\"btn0\" onclick=\"chooseState();\"><span id=\"choice0\">English</span></button><button id=\"btn1\" onclick=\"chooseState();\"><span id=\"choice1\">Chinese</span></button></div>";
}

function chooseState() {
    var element = document.getElementById("quiz");

    var buttons = ''
    
    for (var i = 0; i < states.length; i++) {
        buttons += "<button id=\"btn0\" onclick=\"redoQuiz('" + states[i] + "');\"><span id=\"choice1\">" + states[i] + "</span></button>";
    }

    element.innerHTML = "<h1>Unemployment Qualification Test</h1><p id=\"question\">Select your language</p><div class=\"buttons\">" + buttons + "</div>";
}
 
function results(title, text) {
    var gameOverHTML = "<h1>"+title+"</h1>";
    gameOverHTML += "<h2 id='score'> "+text+"</h2> <div class=\"buttons\"><center><button id=\"btn2\" onclick=\"getStarted(); \">Take the quiz again</button></center>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

function notQualified() {
    var gameOverHTML = "<h1>Not Qualified</h1>";
    gameOverHTML += "<h2 id='score'> For more information: blah blah blah </h2><div class=\"buttons\"><center><button id=\"btn2\" onclick=\"getStarted(); \">Take the quiz again</button></center>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

var base = [
    new Question("Did you leave your job voluntarily?", ["Yes", "No"], "Yes", "Maybe Qualified", "You will need to be reviewed by a claims examiner through a fact-finding interview. Your employer may also be contacted and the examineer will determine your eligibility."),
    new Question("Were you fired for misconduct?", ["Yes", "No"], "Yes", "Maybe Qualified", "You will need to be reviewed by a claims examiner through a fact-finding interview. Your employer may also be contacted and the examineer will determine your eligibility."),
    new Question("Do you meet the minimum earnings requirement of $10k during (a) your regular base year period (first four of the last five completed calendar quarters) or $200/week for 20 weeks, (b) the four most recently completed calendar quarters preceding the date of the claim, or (c) the three most recently completed calendar quarters preceding the date of claim, and weeks and wages in the filing quarter up to your last day of work?", ["Yes", "No"], "No", "Not Qualified", "If you don't meet the minimum earnings requirement, you do not qualify for unemployment benefits."),
    new Question("Are you a teacher or school employee?", ["Yes", "No"], "Yes", "Maybe Qualified", "If you have a claimed filed curing a recess period, only school wages in the base period of the claim, or an offer to return to work for a school employer when the recess period ends, you may not be eligibile, although eligibility depends on your unique situation."),
    new Question("Are you a corporate officer or business owner?", ["Yes", "No"], "Yes", "Maybe Qualified", "If you own more than a 5 percent equitable (you own more than 5% of the capital stock of the corporation, either by yourself or with your spouse) or debt interest and your claim is based on wages with the corproation, you will not be considered unemployed during your term of office or ownership."),
    new Question("Are you self-employed, a part-time worker, or an independent contractor?", ["Yes", "No"], "Yes", "Qualified", "You may qualify for unemployment under the national coronavirus releif act. You should apply for unemployment insurance."),
    new Question("Did your employer cease operations due to COVID-19?", ["Yes", "No"], "Yes", "Qualified", "You may qualify for unemployment under the national coronavirus releif act. You should apply for unemployment insurance."),
    new Question("Did you stop working to quarantine and expect to work after quarantine is over?", ["Yes", "No"], "Yes", "Qualified", "You may qualify for unemployment under the national coronavirus releif act. You should apply for unemployment insurance."),
    new Question("Did you stop working due to risk of exposure or to care for a family member?", ["Yes", "No"], "Yes", "Qualified", "You may qualify for unemployment under the national coronavirus releif act. You should apply for unemployment insurance."),
    new Question("Did the breadwinner in your household die from COVID-19?", ["Yes", "No"], "Yes", "Qualified", "You may qualify for unemployment under the national coronavirus releif act. You should apply for unemployment insurance."),
];

al = base;
ak = base;
az = base;
ar = base;
ca = base;
co = base;
ct = base;
de = base;
fl = base;
ga = base;
hi = base;
id = base;
il = base;
ind = base;
ia = base;
ks = base;
ky = base;
la = base;
me = base;
md = base;
ma = base;
mi = base;
mn = base;
ms = base;
mo = base;
mt = base;
ne = base;
nv = base;
nh = base;
nm = base;
nj = base;
ny = base;
nc = base;
nd = base;
oh = base;
ok = base;
or = base;
pa = base;
ri = base;
sc = base;
sd = base;
tn = base;
tx = base;
ut = base;
vt = base;
va = base;
wa = base;
wv = base;
wi = base;
wy = base;

al[2] = new Question("Do you meet the minimum earnings requirement of having worked in at least two quarters of the earliest four of the five complete quarters before your claim, and have earned at least 1.5x your earnings in the highest paid quarter of the period, and have average quarterly earnings during the two highest paid quarters of at least $1157.01?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
ak[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
az[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
ar[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
ca[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
co[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
ct[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
de[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
fl[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
ga[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
hi[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
id[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
il[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
ind[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
ia[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
ks[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
ky[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
la[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
me[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
md[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
ma[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
mi[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
mn[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
ms[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
mo[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
mt[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
ne[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
nv[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
nh[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
nm[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")

// Skipping nj because it is used for the base

ny[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
nc[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
nd[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
oh[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
ok[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
or[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
pa[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
ri[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
sc[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
sd[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
tn[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
tx[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
ut[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
vt[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
va[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
wa[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
wv[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
wi[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")
wy[2] = new Question("Do you meet the minimum earnings requirement of having earned wages in at least two quarters of the base period and having earned at least $780 in one of the last two quarters of the base period?", ["Yes", "No"], "No", "Not Qualified", "If you do not meet the minimum earnings requirement, you do not qualify for unemployment benefits.")


getStarted();