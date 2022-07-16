const express = require("express");			// 프레임워크
const app = express();						
const bodyParser = require("body-parser");  // 데이터 추출
const morgan = require("morgan");			// log
const cors = require("cors");				// cross-origin HTTP(cors)
const ejs = require('ejs');					// ejs
const routes = require("./routes/routes"); 

require("dotenv").config();					// 환경변수
const port = process.env.MYSQL_PORT;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/views"));
app.use(routes);




//https 서버연결
app.listen(port, () => {
	console.log(`서버연결:` + port);
});

