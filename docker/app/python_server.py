import socketio

sio = socketio.Client()

@sio.event
def connect():
    print('connection established')

@sio.event
def my_message(data):
    print('message received with ', data)
    sio.emit('incoming data', data)

@sio.event
def disconnect():
    print('disconnected from server')

# io = require('socket.io')(server,{pingTimeout: 0, pingInterval: 500, origins: '*:*'});


sio.connect('http://localhost:4001')

my_message({'val1': 123, 'val2': 234})

# import eventlet
# import socketio
#
# sio = socketio.Server()
# app = socketio.WSGIApp(sio, static_files={
#     '/': {'content_type': 'text/html', 'filename': 'index.html'}
# })
#
# @sio.event
# def connect(sid, environ):
#     print('connect ', sid)
#
# @sio.event
# def my_message(sid, data):
#     print('message ', data)
#
# @sio.event
# def disconnect(sid):
#     print('disconnect ', sid)
#
# if __name__ == '__main__':
#     eventlet.wsgi.server(eventlet.listen(('', 4001)), app)
#     sio.emit('incoming data', {'data': 'foobar'})
#     # my_message('incoming data', {'val1':136, 'val2':287})
