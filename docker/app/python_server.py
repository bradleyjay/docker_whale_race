import socketio

sio = socketio.Client()


@sio.event
def connect():
    print("connection established")


@sio.event
def my_message(data):
    print("message received with ", data)
    sio.emit("incoming data", data)


@sio.event
def disconnect():
    print("disconnected from server")


# io = require('socket.io')(server,{pingTimeout: 0, pingInterval: 500, origins: '*:*'});


sio.connect("http://localhost:4001")

results = {
    "word": "parabola",
    "cum_instances_found": 45,
    "new_instances_found": 0,
    "race_completed": False,
    "whalenumber": str(3),
}

# my_message({"val1": 123, "val2": 234})
my_message(results)
