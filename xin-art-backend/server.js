import express from 'express';
import mongodb from 'mongodb';
import bodyParser from 'body-parser';
import assert from 'assert';

const app = express();
const dbUrl = "mongodb://localhost";

//解析application/json
app.use(bodyParser.json());

//解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))


mongodb.MongoClient.connect(dbUrl,{ useNewUrlParser: true }, (err, client) => {
  if (err) throw err;
  console.log("Connected successfully to server");
  const db = client.db('xinart');

  //api左边的右划线不要忘记！！！
  app.post('/api/login', (req, res) => {
    const {username, password} = req.body;
    db.collection('account').countDocuments({username, password}, (err, r) => {
      if (r === 1) {
        res.send("ok")
      }else {
        res.send("Your username or password is wrong")
      }
    })
  }) 

  app.post('/api/addAlbum', (req, res) => {
    const { imgurl, song, album, singer, lyricist, composer, release } = req.body;
        db.collection('albumList').insertOne({ imgurl, song, album, singer, lyricist, composer, release }, (err, result) => {
          if (err) {
            res.status(500).json({ errors: { global: "Something went wrong" } });
          } else {
            res.send({ albumList: result.ops[0] });
          }
        });
  })

  app.get('/api/deleteAlbum/:_id', (req, res) => {
    var obj_id = new mongodb.ObjectID(req.params._id);
    db.collection('albumList').deleteOne({"_id": obj_id}, (err, r) => {
      assert.equal(null, err);
      assert.equal(1, r.deletedCount);
      //发送一个res回去，以便前端收到res以后执行then()函数 Axios.get().then()
      res.send({deletedCount: r.deletedCount})
    })
  })

  app.get('/api/albumList', (req, res) => {
    db.collection('albumList').find({}).toArray((err, albumList) => {
      res.json({ albumList });
    })
  });

  app.get('/api/articleList', (req, res) => {
    db.collection('articleList').find({}).toArray((err, articleList) => {
      res.json({ articleList });
    })
  });

  app.get('/work/detail/:_id', (req, res) => {
    // key _id 对应的 value 值比较特殊，他是一个对象而不是字符串
    //所以这里我们需要新建一个对象
    var obj_id = new mongodb.ObjectID(req.params._id);
    db.collection('articleList').find({"_id": obj_id}).toArray((err, articleList) => {
      res.json({ articleList });
    })
  })

  app.post('/api/addArticle', (req, res) => {
    const { time, tag, title, imgurl, desc, detail } = req.body;
        db.collection('articleList').insertOne({ time, tag, title, imgurl, desc, detail }, (err, result) => {
          if (err) {
            res.status(500).json({ errors: { global: "Something went wrong" } });
          } else {
            res.send({ articleList: result.ops[0] });
          }
        });
  })

  app.get('/api/deleteArticle/:_id', (req, res) => {
    var obj_id = new mongodb.ObjectID(req.params._id);
    db.collection('articleList').deleteOne({"_id": obj_id}, (err, r) => {
      assert.equal(null, err);
      assert.equal(1, r.deletedCount);
      //发送一个res回去，以便前端收到res以后执行then()函数 Axios.get().then()
      res.send({deletedCount: r.deletedCount})
    })
  })

  app.get('/api/drawingList', (req, res) => {
    db.collection('drawingList').find({}).toArray((err, drawingList) => {
      res.json({ drawingList });
    })
  });

  app.post('/api/addDrawing', (req, res) => {
    const { imgurl, title, desc } = req.body;
        db.collection('drawingList').insertOne({ imgurl, title, desc }, (err, result) => {
          if (err) {
            res.status(500).json({ errors: { global: "Something went wrong" } });
          } else {
            res.send({ drawingList: result.ops[0] });
          }
        });
  })

  app.get('/api/deleteDrawing/:_id', (req, res) => {
    var obj_id = new mongodb.ObjectID(req.params._id);
    db.collection('drawingList').deleteOne({"_id": obj_id}, (err, r) => {
      assert.equal(null, err);
      assert.equal(1, r.deletedCount);
      //发送一个res回去，以便前端收到res以后执行then()函数 Axios.get().then()
      res.send({deletedCount: r.deletedCount})
    })
  })

  app.get('/api/postList', (req, res) => {
    db.collection('postList').find({}).toArray((err, postList) => {
      res.json({ postList });
    })
  })

  app.post('/api/addPost', (req, res) => {
    const { post, time} = req.body;
        db.collection('postList').insertOne({ post, time }, (err, result) => {
          if (err) {
            res.status(500).json({ errors: { global: "Something went wrong" } });
          } else {
            res.send({ postList: result.ops[0] });
          }
        });
  })

  app.get('/api/deletePost/:_id', (req, res) => {
    var obj_id = new mongodb.ObjectID(req.params._id);
    db.collection('postList').deleteOne({"_id": obj_id}, (err, r) => {
      assert.equal(null, err);
      assert.equal(1, r.deletedCount);
      //发送一个res回去，以便前端收到res以后执行then()函数 Axios.get().then()
      res.send({deletedCount: r.deletedCount})
    })
  })

  app.post('/api/addAboutMe', (req, res) => {
    const { aboutMe } = req.body;
        db.collection('aboutMeList').insertOne({ aboutMe }, (err, result) => {
          if (err) {
            res.status(500).json({ errors: { global: "Something went wrong" } });
          } else {
            res.send({ aboutMeList: result.ops[0] });
          }
        });
  })

  app.get('/api/aboutMeList', (req, res) => {
    db.collection('aboutMeList').find({}).toArray((err, aboutMeList) => {
      res.json({ aboutMeList });
    })
  })

  app.get('/api/deleteAboutMe/:_id', (req, res) => {
    var obj_id = new mongodb.ObjectID(req.params._id);
    db.collection('aboutMeList').deleteOne({"_id": obj_id}, (err, r) => {
      assert.equal(null, err);
      assert.equal(1, r.deletedCount);
      //发送一个res回去，以便前端收到res以后执行then()函数 Axios.get().then()
      res.send({deletedCount: r.deletedCount})
    })
  })

  app.listen(8080, () => console.log('Server is running on localhost:8080'));

});