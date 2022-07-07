//37 sample documents, originating from 4 different sensors and 2 different sensor types:

const MultipleDocs = [
    {"metadata":{
        "sensorId":52396,
        "type":"windspeed2"
    },
    "ts":new Date("2021-07-10T00:00:02Z"),
    "value":20.263742590570686
    },
    {"metadata":{"sensorId":31096,"type":"windspeed"},"ts":new Date("2021-07-10T00:00:03Z"),"value":32.53987084180961},
    {"metadata":{"sensorId":52396,"type":"windspeed"},"ts":new Date("2021-07-10T00:00:03Z"),"value":18.106480571706808},
    {"metadata":{"sensorId":62088,"type":"windspeed"},"ts":new Date("2021-07-10T00:00:04Z"),"value":20.306831899199864},
    {"metadata":{"sensorId":31096,"type":"windspeed"},"ts":new Date("2021-07-10T00:00:04Z"),"value":0.6909954039798452},
    {"metadata":{"sensorId":62088,"type":"windspeed"},"ts":new Date("2021-07-10T00:00:06Z"),"value":0.031065898581725086},
    {"metadata":{"sensorId":27470,"type":"windspeed"},"ts":new Date("2021-07-10T00:00:07Z"),"value":6.878726412679837},
    {"metadata":{"sensorId":31096,"type":"windspeed"},"ts":new Date("2021-07-10T00:00:07Z"),"value":3.9089926192773534},
    {"metadata":{"sensorId":52396,"type":"windspeed"},"ts":new Date("2021-07-10T00:00:07Z"),"value":28.03679268099916},
    {"metadata":{"sensorId":52396,"type":"windspeed"},"ts":new Date("2021-07-10T00:00:07Z"),"value":1.0575968433736358},
    {"metadata":{"sensorId":31096,"type":"windspeed2"},"ts":new Date("2021-07-10T00:00:03Z"),"value":32.53987084180961},
    {"metadata":{"sensorId":52396,"type":"windspeed2"},"ts":new Date("2021-07-10T00:00:03Z"),"value":19.106480571706808},
    {"metadata":{"sensorId":62088,"type":"windspeed2"},"ts":new Date("2021-07-10T00:00:04Z"),"value":18.306831899199864},
    {"metadata":{"sensorId":31096,"type":"windspeed2"},"ts":new Date("2021-07-10T00:00:04Z"),"value":2.6909954039798452},
    {"metadata":{"sensorId":62088,"type":"windspeed2"},"ts":new Date("2021-07-10T00:00:06Z"),"value":1.031065898581725086},
    {"metadata":{"sensorId":27470,"type":"windspeed2"},"ts":new Date("2021-07-10T00:00:07Z"),"value":7.878726412679837},
    {"metadata":{"sensorId":31096,"type":"windspeed2"},"ts":new Date("2021-07-10T00:00:07Z"),"value":2.9089926192773534},
    {"metadata":{"sensorId":52396,"type":"windspeed2"},"ts":new Date("2021-07-10T00:00:07Z"),"value":29.03679268099916},
    {"metadata":{"sensorId":52396,"type":"windspeed2"},"ts":new Date("2021-07-10T00:00:07Z"),"value":3.0575968433736358},
    {"metadata":{"sensorId":52396,"type":"windspeed2"},"ts":new Date("2021-07-11T00:00:02Z"),"value":20.263742590570686},
    {"metadata":{"sensorId":31096,"type":"windspeed"},"ts":new Date("2021-07-11T00:00:03Z"),"value":32.53987084180961},
    {"metadata":{"sensorId":52396,"type":"windspeed"},"ts":new Date("2021-07-11T00:00:03Z"),"value":18.106480571706808},
    {"metadata":{"sensorId":62088,"type":"windspeed"},"ts":new Date("2021-07-11T00:00:04Z"),"value":20.306831899199864},
    {"metadata":{"sensorId":31096,"type":"windspeed"},"ts":new Date("2021-07-11T00:00:04Z"),"value":0.6909954039798452},
    {"metadata":{"sensorId":62088,"type":"windspeed"},"ts":new Date("2021-07-11T00:00:06Z"),"value":0.031065898581725086},
    {"metadata":{"sensorId":27470,"type":"windspeed"},"ts":new Date("2021-07-11T00:00:07Z"),"value":6.878726412679837},
    {"metadata":{"sensorId":31096,"type":"windspeed"},"ts":new Date("2021-07-11T00:00:07Z"),"value":3.9089926192773534},
    {"metadata":{"sensorId":52396,"type":"windspeed"},"ts":new Date("2021-07-11T00:00:07Z"),"value":28.03679268099916},
    {"metadata":{"sensorId":52396,"type":"windspeed"},"ts":new Date("2021-07-11T00:00:07Z"),"value":1.0575968433736358},
    {"metadata":{"sensorId":31096,"type":"windspeed2"},"ts":new Date("2021-07-11T00:00:03Z"),"value":32.53987084180961},
    {"metadata":{"sensorId":52396,"type":"windspeed2"},"ts":new Date("2021-07-11T00:00:03Z"),"value":19.106480571706808},
    {"metadata":{"sensorId":62088,"type":"windspeed2"},"ts":new Date("2021-07-11T00:00:04Z"),"value":18.306831899199864},
    {"metadata":{"sensorId":31096,"type":"windspeed2"},"ts":new Date("2021-07-11T00:00:04Z"),"value":2.6909954039798452},
    {"metadata":{"sensorId":62088,"type":"windspeed2"},"ts":new Date("2021-07-11T00:00:06Z"),"value":1.031065898581725086},
    {"metadata":{"sensorId":27470,"type":"windspeed2"},"ts":new Date("2021-07-11T00:00:07Z"),"value":7.878726412679837},
    {"metadata":{"sensorId":31096,"type":"windspeed2"},"ts":new Date("2021-07-11T00:00:07Z"),"value":2.9089926192773534},
    {"metadata":{"sensorId":52396,"type":"windspeed2"},"ts":new Date("2021-07-11T00:00:07Z"),"value":29.03679268099916},
    {"metadata":{"sensorId":52396,"type":"windspeed2"},"ts":new Date("2021-07-11T00:00:07Z"),"value":3.0575968433736358}

 ]

 module.exports = MultipleDocs;