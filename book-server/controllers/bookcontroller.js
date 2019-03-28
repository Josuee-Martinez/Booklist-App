var router = require('express').Router();
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var Book = sequelize.import('../models/book');

router.get('/', function (req, res){
    let userid = req.user.id;

    Book.findAll({where: {owner: userid}})
        .then(
            function findAllSuccess(data){
                res.json(data);
            },
            function findAllError(err){
                res.send(500, err.message);
            }
        )
})

router.post('/', function (req, res){
    let author = req.body.book.author;
    let isbn = req.body.book.isbn;
    let book = req.body.book.book;
    let owner = req.user.id;

    Book
    .create({
        author: author,
        isbn: isbn,
        book: book,
        owner: owner
    })
    .then(
        function createSuccess(logdata){
            res.json({
                logdata: logdata
            })
        },
        function createError(err){
            res.send(500, err.message);
        }
    )
})

router.get('/:id', function(req, res){
    let data = req.params.id;
    let userid = req.user.id;

    Book
        .findOne({
            where: {id: data, owner: userid}
        }).then(
            function findOneSuccess(data){
                res.json(data);
            },
            function findOneError(err){
                res.send(500, err.message);
            }
        )
})

router.put('/:id', function(req, res){
    let updateId = req.params.id;
    let updateAuthor = req.body.book.author;
    let updateIsbn = req.body.book.isbn;
    let updateBook = req.body.book.book;
    let updateOwner = req.user.id;

    Book
        .update({
            author: updateAuthor,
            isbn: updateIsbn,
            book: updateBook,
            owner: updateOwner
        }, {where: {id: updateId}})
        .then(
            function updateSuccess(){
                res.json({
                    author: updateAuthor,
                    isbn: updateIsbn,
                    book: updateBook,
                    owner: updateOwner
                })
            }, 
            function updateError(err){
                res.send(500, err.message);
            }
        )
})

router.delete('/:id', function (req, res){
    let data = req.params.id;
    let userId = req.user.id;

    Book
        .destroy({
            where: {id: data, owner: userId}
        })
        .then(
            function deleteLogSuccess(){
                res.send("you removed a log");
            },
            function deleteLogError(err){
                res.send(500, err.message);
            }
        )
})

module.exports = router;