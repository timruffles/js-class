;(function(global) {

  global.quiz = mainQuiz;
  global._YOUR_ANSWER_ = {};


  var checkSpeciminAnswers = false;
  // checkSpeciminAnswers = true;

  var quizSuites = {
    "on JS variables": [
      "Arthur",
      "Zaphod",
      "Arthur",
      "Zaphod",
    ]
  } 

  function mainQuiz(name,defineQuiz) {

    var dsl = makeDsl(quizSuites[name]);

    describe("quiz " + name,function() {
      defineQuiz(dsl.question,dsl.valueOf);
    });

  }
  mainQuiz.test = function() {
    checkSpeciminAnswers = true;
  }

  function makeDsl(suite) {

    var answering;

    function answer(value,response) {
      if(answering == null) {
        throw new Error("answer needs to be called within a question block");
      }
      if(checkSpeciminAnswers) {
        return expect(suite[answering]).toEqual(value);
      }
      if(response === _YOUR_ANSWER_) {
        throw new Error("Not attempted");
      }
      expect(response === suite[answering]).toEqual(true,"Incorrect");
    }

    function question(nthQuestion,fn) {
      it("answer to question " + (nthQuestion + 1),function() {
        answering = nthQuestion;
        fn();
      });
    }

    var nthQuestion = 0;
    return {
      question: function(fn) {
        question(nthQuestion++,fn);
      },
      valueOf: function(val) {
        return {
          is: function(response) {
            answer(val,response);
          }
        }
      }
    }
  }


})(typeof window == "undefined" ? global : window);
