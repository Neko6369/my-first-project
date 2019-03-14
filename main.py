from flask import Flask, render_template, request, abort, jsonify

app = Flask(__name__)
app.debug = True


@app.route("/")
def index():
    return render_template('login.html')


if __name__ == '__main__':
    app.run(debug=True)
