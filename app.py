from flask import Flask, send_file, render_template
app = Flask(__name__)

@app.route('/')
def hello():
	return render_template('index.html')

@app.route('/download/build-flask-app-deb/')
def downloadApp():
	path = "./package/build-flask-app_1.0_all.deb"
	return send_file(path, as_attachment=True)

if __name__ == '__main__':
	app.run(debug=True, host='0.0.0.0')
