/**
 * QuestionController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

module.exports = {
    form: function (req, res) {
        Language.find().done(function(err, langs) {

            res.view('./question/form.ejs', {
                title: "Form Domand",
                languages: langs
            });
        })
    },

    estingui: function(req, res) {
      Question.find().exec(function (err, questions) {

          questions.forEach(function(question) {
              question.destroy(function(err) {
              })
          });

      })


      res.send('ok')
  	}

};
