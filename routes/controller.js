"use strict";
// 컨트롤러
const Entity = require("../models/query");
const Views = '../views'

// 전체 리스트(default)
exports.findAll = function (req, res) {
  Entity.findAll(function (err, results, field) {
      console.log("controller");
      if (err) res.send(err);
      console.log("res", results);
      res.render(Views+'/index.ejs',{results:results})
    });
};


// 등록
exports.create = function (req, res) {
  let exten_text = req.body.exten_text;
  let useyn = 1;


  // validation(확장자 조회)
  Entity.findOne(exten_text,function (err, results, field) {
    if(results.length == 0){
        if (req.body.constructor === Object && Object.keys(req.body.exten_text.trim()).length === 0) {
          return res.status(400).render('alert', {error: '확장자 값이 없습니다.'});
        } else {

          // 확장자 등록
          Entity.create(exten_text, useyn, function (err, results, field) {
            if (err) res.send(err);
            res.redirect(301, '/');
          });
        }

    } else{
        return res.status(400).render('alert', {error: '값이 이미 있습니다.'});
    }
  });
  
};

// 확장자 삭제
exports.delete = function (req, res) {
  let exten_text = req.body.exten_text;

  console.log("exten_text : "+exten_text);

  Entity.delete(exten_text, function (err, results, field) {
    if (err) res.send(err);
    res.redirect(200, '/');
  });
  
};

// 확장자 수정
exports.update = function (req, res) {
  let useyn = req.body.useyn;
  let exten_text = req.body.exten_text;

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    return res.status(400).send({ error: true, message: "수정할 값이 없습니다." });
  } else {
    Entity.update(useyn, exten_text, function (err, results, field) {
      if (err) res.send(err);
      
    });
  }
};