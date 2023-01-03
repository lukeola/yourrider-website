from flask import Flask, jsonify, request
import datetime
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


# Connect database
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:''@localhost/yourrider'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)


class Articles(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    author = db.Column(db.String(100))
    body = db.Column(db.Text())
    date = db.Column(db.DateTime, default=datetime.datetime.now)

    def __init__(self, title, author, body):
        self.title = title
        self.author = author
        self.body = body


# Create Article Schema

class ArticleSchema(ma.Schema):
    class Meta:
        fields = ('id', 'title', 'author', 'body', 'date')


article_schema = ArticleSchema()
articles_schema = ArticleSchema(many=True)

# API Route


@app.route("/get", methods=['GET'])
def get_articles():
    all_articles = Articles.query.all()
    results = articles_schema.dump(all_articles)
    return jsonify(results)


@app.route("/get/<id>", methods=['GET'])
def article_details(id):
    articles = Articles.query.get(id)
    return article_schema.jsonify(articles)


@app.route("/update/<id>", methods=['PUT'])
def update_article(id):
    article = Articles.query.get(id)

    title = request.json['title']
    author = request.json['author']
    body = request.json['body']

    article.title = title
    article.author = author
    article.body = body

    db.session.commit()
    return article_schema.jsonify(article)


@app.route('/delete/<id>', methods=['DELETE'])
def article_delete(id):
    article = Articles.query.get(id)
    db.session.delete(article)
    db.session.commit()

    return article_schema.jsonify(article)


@app.route("/add", methods=['POST'])
def add_articles():
    title = request.json['title']
    author = request.json['author']
    body = request.json['body']

    articles = Articles(title, body)
    db.session.add(articles)
    db.session.commit()
    return article_schema.jsonify(articles)


if __name__ == "__main__":
    app.run(debug=True)
