var express = require('express');
var router = express.Router();


var quizController = require('../controllers/quiz_controller');
var commentController = require('../controllers/comment_controller');
var sessionController = require('../controllers/session_controller');


/// GET home page. 
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz',errors: []});
}); 

//autoload cd commandos con quizId
router.param('quizId',quizController.load);

//definicion de rutas de session
router.get('/login',sessionController.new);  //formulario login
router.post('/login',sessionController.create); // crear session
router.get('/logout',sessionController.destroy);  //destruir session


router.get('/quizes',quizController.index);
router.get('/quizes/:quizId(\\d+)',quizController.show);
router.get('/quizes/:quizId(\\d+)/answer',quizController.answer);
router.get('/author',quizController.author);
router.get('/quizes/buscar',quizController.buscar);
router.get('/quizes/new',quizController.new);
router.post('/quizes/create',quizController.create);
router.get('/quizes/:quizId(\\d+)/edit',quizController.edit);
router.put('/quizes/:quizId(\\d+)',quizController.update);
router.delete('/quizes/:quizId(\\d+)',quizController.destroy);
router.get('/quizes/statistics',quizController.statistics);


router.get('/quizes/:quizId(\\d+)/comments/new',commentController.new);
router.post('/quizes/:quizId(\\d+)/comments',commentController.create);

module.exports = router;
