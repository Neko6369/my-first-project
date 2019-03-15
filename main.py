from flask import Flask, render_template

app = Flask(__name__)
app.debug = True


@app.route("/")
def index():
    return render_template('login.html')
@app.route('/upload', methods=['POST'])
def upload():
   return "Cuc"

if __name__ == '__main__':
    app.run(debug=True)
