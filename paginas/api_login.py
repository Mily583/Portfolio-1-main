from flask import Flask, request, jsonify

app = Flask(__name__)

usuarios = []

@app.route('/login', methods=['POST'])
def login():
    datos_formulario = request.json

    username = datos_formulario.get('username')
    password = datos_formulario.get('password')
    remember = datos_formulario.get('remember')



    usuarios.append({'username': username, 'password': password, 'remember': remember})

    return jsonify({'message': 'Usuario registrado correctamente'}), 201

if __name__ == '__main__':
    app.run(debug=True)
