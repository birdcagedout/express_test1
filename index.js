const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// 6. CORS 설치(npm install cors) + CORS 모두 허용 설정
app.use(cors());


// 1. 기본 라우팅
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// 2. /dog 라우팅 + json 전송
app.get('/dog', (req, res) => {
	res.json({'sound': '멍멍'});
});

// 3. GET + param
app.get('/user/:id', (req, res) => {
	const param = req.params;
	res.json({'ID': param.id});
});

// 4. GET + query
app.get('/search/:queries', (req, res) => {																						// http://localhost:3000/search/token?id=muzom9723&pw=1111&name=kim&age=45
	const param = req.params;
	const query = req.query;
	console.log(`queries: ${param.queries}`);																						// queries: token
	res.json({'ID': query.id, 'PW': query.pw, 'name': query.name, 'age': query.age});		// {"ID":"muzom9723","PW":"1111","name":"kim","age":"45"}
});

// 5. 동물에 따라 소리 다르게 출력 ==> '/sound/동물이름'에 따라 출력되는 동물울음소리 다르게 출력
app.get('/sound/:name', (req, res) => {
	const {name} = req.params;									// req.params = {name: 'dog'}이면 name변수 = 'dog'값을 할당하는 것과 같은 효과

	if (name == 'dog') {
		sound = '멍멍';
	} else if (name == 'cat') {
		sound = '냐옹';
	} else if (name == 'pig') {
		sound = '꿀꿀';
	} else {
		sound = '모름';
	}
	res.json({'sound': sound});
	console.log('요청을 처리하였습니다.');
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
