from flask import Flask
app = Flask(__name__)


@app.route("/")
def index():
    return "Bonjour depuis un container !"


@app.route("/hello/<name>")
def hello(name):
    return f"Salut {name} !"


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)
