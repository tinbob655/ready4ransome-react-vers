import React, {Component} from 'react';
import './politicalCompassStyles.scss';
import {getQuestions} from './getQuestions.js';
import { copyTextToClipboard } from '../../..';

var questions = getQuestions();     //gets questions from the JSON file via getQuestions.js

//function to display the user the question
var questionAsked:number = 0;
function askQuestion() {
    if (questionAsked >= 29) {
        testEnded();
        return '';
    } else {
        questionAsked++;
        return questions[questionAsked].question;
    };
};

//function to process the answer the user enters to a question
var opinions:object = {
    left: 0,
    right: 0,
    authoritarian: 0,
    libertarian: 0,
    conservative: 0,
    progressivist: 0
};
function answerEntered(intensity:number, type:string) {
    let opinionToAlter = questions[questionAsked][type];
    console.log(opinionToAlter, '     ', type, '        ', intensity)
    opinions[opinionToAlter] += intensity;
    const question:any = document.getElementById('question');
    question.classList.add('refreshing');
    setTimeout(() => {
        question.innerText = askQuestion();
        question.classList.remove('refreshing');
    }, 751);
};

function testEnded() {
    console.log(opinions)
    //end the test by displaying the results
    document.getElementById('allQuestionWrapper')?.classList.remove('shown');
    setTimeout(() => {
        document.getElementById('endScreen')?.classList.add('shown');
    }, 1001);

    //now load and render the political compass dot and the cons prog bar line
        //political compass dot
    const politicalCompassDot:any = document.getElementById('compassDot');
    politicalCompassDot.style.marginLeft = String(-(opinions['left'] * 9) + (opinions['right'] * 9) + 219) + 'px';
    politicalCompassDot.style.marginTop = String(-(opinions['authoritarian'] * 9) + (opinions['libertarian'] * 9) + 240) + 'px';

        //conservative progressive bar
    const consProgLine:any = document.getElementById('conservativeProgressiveLine');
    consProgLine.style.marginLeft = String(-(opinions['progressivist'] * 17) + (opinions['conservative'] * 16) + 350) + 'px';
        //render both results
    consProgLine.classList.add('shown');
    politicalCompassDot.classList.add('shown');
    
};

function shareResults() {
    //share the results using copyTextToClipboard()
    let results:string = '';
    results += 'I took the ready4ransome political compass test at https://www.ready4ransome.com!!! \n\n I am a:  ';
    results += opinions['left'] < opinions['right'] ? 'Left wing, ' : 'Right wing, ';
    results += opinions['authoritarian'] < opinions['libertarian'] ? 'Authoritarian ' : 'Libertarian ';
    results += opinions['conservative'] < opinions['progressivist'] ? 'Conservative' : 'Progressivist';
    copyTextToClipboard(results);
    document.getElementById('shareButton')?.classList.add('hidden');
};

class PoliticalCompass extends Component {

    render() {
        return (
            <React.Fragment>
                <h1>
                    Political Compass Test
                </h1>
                <div id="content">
                    <div id="startScreen">
                        <h2>
                            This is the all new ready4ransome political compass test
                        </h2>
                        <div className="contentSection"></div>
                        <button type="button" id="startButton" onClick={this.startTest}>
                            <p>
                                Click here to start the test
                            </p>
                        </button>
                    </div>
                    <div id="allQuestionWrapper">
                        <p id="question">
                            {questions[0].question}
                        </p>
                        <div className="contentSection"></div>
                        <div id="answerButtons">
                            <table>
                                <thead>
                                    <tr>
                                        <td>
                                            <button className="answerButton stronglyAgree" type="button" onClick={
                                                function() {answerEntered(2, 'agree')}}>
                                                Strongly Agree
                                            </button>
                                        </td>
                                        <td>
                                            <button className="answerButton agree" type="button" onClick={
                                                function() {answerEntered(1, 'agree')}}>
                                                Agree
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                            <button className="answerButton neutral" type="button" onClick={
                                                function() {answerEntered(0, 'neutral')}}>
                                                Neutral
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <button className="answerButton disagree" type="button" onClick={
                                                function() {answerEntered(1, 'disagree')}}>
                                                Disagree
                                            </button>
                                        </td>
                                        <td>
                                            <button className="answerButton stronglyDisagree" type="button" onClick={
                                                function() {answerEntered(2, 'disagree')}}>
                                                Strongly Disagree
                                            </button>
                                        </td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div id="endScreen">
                        <h2>
                            The results:
                        </h2>
                        <div className="contentSection"></div>
                        <p>
                            The red dot is where you lie on the political compass
                        </p>
                        <div id="politicalCompassResult">
                            <div id="compassDot"></div>
                        </div>
                        <div className="contentSection"></div>
                        <p>
                            This bar shows how conservative / progressive you are
                        </p>
                        <div id="conservativeProgressiveBar">
                            <div id="conservativeProgressiveLine"></div>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <td>
                                        <p className="consProgBar" style={{textAlign: 'left', float: 'left'}}>
                                            Progressive
                                        </p>
                                    </td>
                                    <td>
                                        <p className="consProgBar" style={{textAlign: 'right', float: 'right'}}>
                                            Conservative
                                        </p>
                                    </td>
                                </tr>
                            </thead>
                        </table>
                        <button type="button" id="shareButton" onClick={function() {shareResults()}}>
                            <h3 id="shareButtonText">
                                Copy results!!
                            </h3>
                        </button>
                    </div>
                </div>
            </React.Fragment>
        );
    };

    startTest() {
        document.getElementById('startScreen')?.classList.add('hidden');
        setTimeout(() => {
            const allQuestionWrapper:any = document.getElementById('allQuestionWrapper');
            allQuestionWrapper.classList.add('shown');
        }, 751);
    };
    
};

export default PoliticalCompass;