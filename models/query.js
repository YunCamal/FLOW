"use strict";
// 쿼리
const mysql = require("./db");
const entity = require("./entity");


  // 확장자 리스트
  entity.findAll = function (result) {
    mysql.query("SELECT * FROM PROJECT", function (err, results, field) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("DB get list : ", results);
        result(null, results);
      }
    });
  };

  // 확장자 조회
  entity.findOne = function(exten_text, result) {
    mysql.query("SELECT * FROM PROJECT WHERE EXTEN_TEXT = (?)", exten_text, function (err, results, field) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("DB get list : ", results);
        result(null, results);
      }
    });
  }

  // 확장자 등록
  entity.create = function (exten_text, useyn, result) {
    mysql.query("INSERT INTO PROJECT (EXTEN_TEXT,USEYN) VALUE(?,?)", [exten_text, useyn], function (err, results, field) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log("DB insert : ", results);
        result(null, results);
      }
    });
  };


  // 확장자 삭제
  entity.delete = function (exten_text, result) {
    mysql.query("DELETE FROM PROJECT WHERE EXTEN_TEXT = ?", exten_text, function (err, results, field) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("DB delete : ", results);
        result(null, results);
      }
    });
  };

  // 확장자 사용유무
  entity.update = function (useyn, exten_text, result) {
    mysql.query("UPDATE PROJECT SET USEYN = ? WHERE EXTEN_TEXT = ?", [useyn, exten_text], function (err, results ,field) {
        if (err) {
          console.log("error: ", err);
          result(null, err);
        } else {
          console.log("DB update : ", results);
          result(null, results);
        }
      }
    );
  };

  module.exports = entity;