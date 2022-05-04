from flask import Flask, render_template, url_for, request, redirect
from flaskext.mysql import MySQL

# initiallization app
app = Flask(__name__)

# initiallization of mysql server
mysql = MySQL()

# initiallization of host and server
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_DB'] = 'loginSystem'
app.config['MYSQL_DATABASE_PASSWORD'] = ''
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
mysql.init_app(app)


@app.route('/')
def signup():
    return render_template("signup.html")


@app.route('/', methods = ['GET', 'POST'])
def signupBtn():
    if request.method == "POST":
        if request.form.get('register'):
            userEmail = request.form['gmail']
            userFname = request.form['fName']
            userLname = request.form['lName']
            userPswd = request.form['passWord']
            userGender = request.form['gndr']
            userDob = request.form['dateOfBirth']
            userCourse = request.form['corse']
            userAddress = request.form['adrs']
            con = mysql.connect()
            cur = con.cursor()
            cur.execute("INSERT INTO signup(email, fname, lname, password, gender, dob, course, address)"
                        " values(%s, %s, %s, %s, %s, %s, %s, %s)", (userEmail, userFname, userLname,
                                                                    userPswd, userGender, userDob,
                                                                    userCourse, userAddress))
            cur.execute("INSERT INTO login(email, password) values(%s, %s)",(userEmail, userPswd))
            con.commit()
            return render_template("login.html")
    return render_template("signup.html")


@app.route('/login')
def login():
    return render_template("login.html")


@app.route('/login', methods=['GET', 'POST'])
def log():
    if request.method == 'POST':
        if request.form.get('login'):
            mail = request.form['email']
            pswrd = request.form['pswd']
            con = mysql.connect()
            cur = con.cursor()
            cur.execute("select * from login where email = '"+mail+"' and password = '"+pswrd+"'")
            data = cur.fetchall()
            r = request.form['email'].upper()
            count = cur.rowcount
            if count == 1:
                return render_template('welcome.html', data=data)
            else:
                message = "Either your email or password is wrong !"
                return render_template('login.html', msg=message)
        return render_template("login.html")


@app.route('/welcome')
def welcome():
    return render_template("welcome.html")


if __name__ == "__main__":
    app.run(debug=True)