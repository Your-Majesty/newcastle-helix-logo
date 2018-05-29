const TemperatureAnalizer = (() => {

  const controller = {}
  const temperatureList = [{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-01 05:40:00","Value":4.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-01 11:16:00","Value":4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-01 16:55:00","Value":3.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-01 22:34:00","Value":4.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-02 04:27:00","Value":1.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-02 10:06:00","Value":0.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-02 16:08:00","Value":2.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-02 21:53:00","Value":2.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-03 03:35:00","Value":4.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-03 09:13:00","Value":6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-03 14:51:00","Value":7.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-03 20:32:00","Value":7.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-04 02:05:00","Value":7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-04 07:58:00","Value":3.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-04 13:34:00","Value":4.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-04 19:19:00","Value":3.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-05 01:00:00","Value":2.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-05 06:52:00","Value":1.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-05 12:42:00","Value":4.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-05 18:32:00","Value":1.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-06 00:34:00","Value":2.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-06 06:18:00","Value":2.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-06 12:00:00","Value":7.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-06 17:49:00","Value":7.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-06 23:25:00","Value":9.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-07 05:11:00","Value":8.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-07 10:57:00","Value":8.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-07 16:46:00","Value":7.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-07 22:29:00","Value":7.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-08 04:31:00","Value":7.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-08 10:35:00","Value":6.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-08 16:22:00","Value":8.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-08 22:15:00","Value":7.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-09 03:43:00","Value":10},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-09 09:22:00","Value":9.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-09 15:04:00","Value":6.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-09 21:24:00","Value":5.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-10 04:23:00","Value":6.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-10 10:25:00","Value":7.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-10 18:12:00","Value":9.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-11 18:16:00","Value":4.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-12 00:08:00","Value":3.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-12 06:08:00","Value":2.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-12 12:43:00","Value":3.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-12 21:28:00","Value":0.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-13 07:13:00","Value":3.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-13 12:51:00","Value":3.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-13 18:41:00","Value":0.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-14 01:05:00","Value":1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-14 06:54:00","Value":1.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-14 12:38:00","Value":3.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-14 18:19:00","Value":2.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-15 00:12:00","Value":2.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-15 06:22:00","Value":4.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-15 11:58:00","Value":8.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-15 17:35:00","Value":9.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-15 23:24:00","Value":7.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-16 05:02:00","Value":7.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-16 10:33:00","Value":8.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-16 16:26:00","Value":8.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-16 22:05:00","Value":6.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-17 03:40:00","Value":5.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-17 09:29:00","Value":6.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-17 15:14:00","Value":10.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-17 20:57:00","Value":8.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-18 02:36:00","Value":7.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-18 08:26:00","Value":7.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-18 14:01:00","Value":8.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-18 19:46:00","Value":7.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-19 01:30:00","Value":6.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-19 07:13:00","Value":5.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-19 13:05:00","Value":8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-19 18:45:00","Value":6.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-20 00:43:00","Value":5.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-20 06:24:00","Value":4.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-20 12:12:00","Value":4.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-20 18:19:00","Value":5.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-21 00:08:00","Value":3.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-21 05:41:00","Value":2.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-21 11:31:00","Value":2.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-21 17:08:00","Value":4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-23 16:19:00","Value":5.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-23 22:01:00","Value":3.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-24 04:02:00","Value":1.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-24 09:36:00","Value":3.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-24 15:22:00","Value":6.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-24 21:03:00","Value":5.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-25 02:44:00","Value":7.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-25 08:31:00","Value":4.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-25 14:25:00","Value":7.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-25 20:11:00","Value":3.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-26 02:08:00","Value":1.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-26 13:06:00","Value":0},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-27 18:11:00","Value":1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-28 00:11:00","Value":1.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-28 06:12:00","Value":2.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-28 11:53:00","Value":4.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-28 17:26:00","Value":4.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-28 23:34:00","Value":3.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-29 05:04:00","Value":1.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-29 10:54:00","Value":4.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-29 16:24:00","Value":5.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-29 22:22:00","Value":2.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-30 04:13:00","Value":1.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-30 10:22:00","Value":5.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-30 16:05:00","Value":5.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-30 21:43:00","Value":5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-31 03:33:00","Value":4.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-31 09:20:00","Value":4.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-31 15:30:00","Value":4.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-01-31 21:59:00","Value":5.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-01 04:02:00","Value":5.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-01 13:30:00","Value":7.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-01 19:10:00","Value":7.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-02 00:53:00","Value":8.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-02 06:34:00","Value":9.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-02 12:21:00","Value":10.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-02 18:07:00","Value":10.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-02 23:48:00","Value":10.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-03 05:19:00","Value":8.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-03 10:56:00","Value":8.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-03 16:37:00","Value":8.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-03 22:14:00","Value":6.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-04 03:45:00","Value":3.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-04 09:34:00","Value":4.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-04 15:09:00","Value":7.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-04 21:12:00","Value":3.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-05 02:52:00","Value":3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-05 08:41:00","Value":3.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-05 14:24:00","Value":6.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-05 19:56:00","Value":5.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-06 01:43:00","Value":1.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-06 10:13:00","Value":2.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-06 16:28:00","Value":4.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-06 21:58:00","Value":3.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-07 03:35:00","Value":3.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-07 09:12:00","Value":4.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-07 15:01:00","Value":7.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-07 20:52:00","Value":5.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-08 02:33:00","Value":4.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-08 08:34:00","Value":3.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-08 14:22:00","Value":2.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-08 20:09:00","Value":1.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-09 02:00:00","Value":1.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-09 07:40:00","Value":1.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-09 13:45:00","Value":2.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-09 20:03:00","Value":1.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-10 01:44:00","Value":1.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-10 07:38:00","Value":2.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-10 13:19:00","Value":2.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-10 19:11:00","Value":2.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-11 01:03:00","Value":2.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-11 06:40:00","Value":3.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-11 12:28:00","Value":4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-11 18:14:00","Value":4.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-11 23:56:00","Value":4.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-12 05:42:00","Value":1.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-12 11:26:00","Value":2.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-12 16:59:00","Value":3.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-12 22:41:00","Value":4.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-13 04:27:00","Value":4.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-13 10:20:00","Value":4.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-13 16:22:00","Value":5.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-13 22:12:00","Value":5.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-14 03:49:00","Value":5.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-14 09:37:00","Value":5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-14 15:20:00","Value":6.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-14 21:11:00","Value":5.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-15 03:03:00","Value":6.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-15 08:36:00","Value":5.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-15 14:24:00","Value":9.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-15 20:11:00","Value":7.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-16 01:57:00","Value":8.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-16 07:36:00","Value":7.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-16 13:09:00","Value":9.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-16 18:53:00","Value":8.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-17 00:36:00","Value":7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-17 06:17:00","Value":5.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-17 12:13:00","Value":10.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-17 17:45:00","Value":9.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-17 23:36:00","Value":8.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-18 05:30:00","Value":8.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-18 11:01:00","Value":11.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-18 16:39:00","Value":9.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-18 22:32:00","Value":9.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-19 04:29:00","Value":7.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-19 10:24:00","Value":9.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-19 16:05:00","Value":10.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-19 21:37:00","Value":11},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-20 03:19:00","Value":11.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-20 08:57:00","Value":13},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-20 14:37:00","Value":12.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-20 20:20:00","Value":9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-21 02:00:00","Value":7.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-21 07:36:00","Value":6.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-21 13:18:00","Value":9.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-21 18:58:00","Value":12.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-22 00:31:00","Value":11.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-22 06:08:00","Value":6.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-22 11:35:00","Value":7.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-22 17:13:00","Value":7.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-22 22:51:00","Value":6.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-23 04:52:00","Value":3.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-23 10:34:00","Value":8.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-23 16:13:00","Value":3.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-23 21:56:00","Value":3.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-24 03:36:00","Value":3.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-24 09:41:00","Value":3.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-24 15:13:00","Value":6.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-24 21:00:00","Value":4.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-25 02:29:00","Value":8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-25 08:20:00","Value":9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-25 13:55:00","Value":11.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-25 19:36:00","Value":9.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-26 01:18:00","Value":6.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-26 06:51:00","Value":6.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-26 12:22:00","Value":10.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-26 17:57:00","Value":9.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-26 23:36:00","Value":5.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-27 05:17:00","Value":4.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-27 10:58:00","Value":5.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-27 16:34:00","Value":5.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-27 22:20:00","Value":2.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-28 04:11:00","Value":1.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-28 10:02:00","Value":3.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-28 15:45:00","Value":6.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-02-28 21:29:00","Value":3.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-01 03:38:00","Value":1.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-01 09:07:00","Value":3.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-01 14:44:00","Value":7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-01 20:37:00","Value":3.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-02 02:14:00","Value":3.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-02 07:51:00","Value":2.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-02 13:29:00","Value":7.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-02 19:07:00","Value":6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-03 00:58:00","Value":4.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-03 06:37:00","Value":4.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-03 12:26:00","Value":7.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-03 18:15:00","Value":4.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-03 23:54:00","Value":5.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-04 05:38:00","Value":6.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-04 11:19:00","Value":7.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-04 16:48:00","Value":9.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-04 22:20:00","Value":6.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-05 04:10:00","Value":4.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-05 09:50:00","Value":6.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-05 15:43:00","Value":8.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-05 21:29:00","Value":5.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-06 03:22:00","Value":4.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-06 08:48:00","Value":4.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-06 14:33:00","Value":8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-06 20:08:00","Value":5.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-07 01:39:00","Value":4.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-07 07:25:00","Value":3.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-07 13:18:00","Value":8.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-07 18:50:00","Value":7.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-08 00:42:00","Value":5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-08 06:14:00","Value":4.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-08 11:55:00","Value":10.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-08 17:30:00","Value":10.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-08 23:03:00","Value":8.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-09 04:44:00","Value":8.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-09 10:22:00","Value":9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-09 16:01:00","Value":11},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-09 21:47:00","Value":6.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-10 03:43:00","Value":4.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-10 09:41:00","Value":6.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-10 15:23:00","Value":11.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-10 21:11:00","Value":9.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-11 03:00:00","Value":9.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-11 08:30:00","Value":9.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-11 14:14:00","Value":10.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-11 20:01:00","Value":9.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-12 01:52:00","Value":9.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-12 07:38:00","Value":9.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-12 13:19:00","Value":13.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-12 19:08:00","Value":9.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-13 00:48:00","Value":6.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-13 06:37:00","Value":5.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-13 12:25:00","Value":11},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-13 18:02:00","Value":10.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-13 23:56:00","Value":11.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-14 05:31:00","Value":11.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-14 11:10:00","Value":12.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-14 16:49:00","Value":11.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-14 22:27:00","Value":7.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-15 04:12:00","Value":6.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-15 10:17:00","Value":8.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-15 16:05:00","Value":12.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-15 21:48:00","Value":8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-16 03:45:00","Value":10.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-16 09:29:00","Value":10.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-16 15:04:00","Value":11.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-16 20:45:00","Value":5.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-17 02:28:00","Value":5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-17 08:04:00","Value":5.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-17 13:48:00","Value":9.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-17 19:32:00","Value":9.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-18 01:17:00","Value":9.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-18 06:52:00","Value":5.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-18 12:36:00","Value":10.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-18 18:22:00","Value":10},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-19 00:02:00","Value":9.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-19 05:39:00","Value":11.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-19 11:25:00","Value":13.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-19 16:59:00","Value":11.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-19 22:31:00","Value":7.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-20 04:07:00","Value":8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-20 09:40:00","Value":10},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-20 15:45:00","Value":8.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-20 21:39:00","Value":4.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-21 03:20:00","Value":2.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-21 09:10:00","Value":4.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-21 14:39:00","Value":7.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-21 20:15:00","Value":4.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-22 02:14:00","Value":2.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-22 07:56:00","Value":3.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-22 13:41:00","Value":7.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-23 13:31:00","Value":7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-23 19:17:00","Value":6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-24 00:57:00","Value":4.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-24 06:51:00","Value":3.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-24 12:39:00","Value":10.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-24 18:19:00","Value":8.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-25 00:03:00","Value":6.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-25 05:51:00","Value":3.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-25 11:29:00","Value":14.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-25 17:12:00","Value":14},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-25 22:58:00","Value":6.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-26 04:36:00","Value":3.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-26 10:32:00","Value":11.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-26 16:29:00","Value":10.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-26 22:05:00","Value":6.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-27 03:55:00","Value":3.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-27 09:52:00","Value":6.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-27 15:32:00","Value":8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-27 21:10:00","Value":6.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-28 03:03:00","Value":6.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-28 08:30:00","Value":5.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-28 14:13:00","Value":10.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-28 20:02:00","Value":9.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-29 01:54:00","Value":9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-29 07:30:00","Value":7.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-29 13:13:00","Value":12.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-29 18:59:00","Value":12.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-30 00:59:00","Value":12.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-30 06:50:00","Value":12.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-30 12:19:00","Value":15.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-30 18:16:00","Value":14.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-31 00:15:00","Value":13.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-31 06:08:00","Value":12.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-31 11:50:00","Value":14.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-31 17:26:00","Value":13.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-03-31 23:19:00","Value":10.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-01 04:56:00","Value":9.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-01 10:35:00","Value":12.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-01 16:17:00","Value":10.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-01 21:53:00","Value":8.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-02 03:37:00","Value":7.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-02 09:21:00","Value":9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-02 14:56:00","Value":11.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-02 20:41:00","Value":8.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-03 02:25:00","Value":5.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-03 08:08:00","Value":6.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-03 13:42:00","Value":15.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-03 19:31:00","Value":12.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-04 01:22:00","Value":10.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-04 07:07:00","Value":10.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-04 13:00:00","Value":12.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-04 18:44:00","Value":10.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-05 00:33:00","Value":7.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-05 06:32:00","Value":7.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-05 12:11:00","Value":11.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-05 17:52:00","Value":11.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-05 23:28:00","Value":7.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-06 05:00:00","Value":4.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-06 10:53:00","Value":8.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-06 16:19:00","Value":11.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-06 22:03:00","Value":8.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-07 03:39:00","Value":7.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-07 09:27:00","Value":9.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-07 15:01:00","Value":10.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-07 20:51:00","Value":7.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-08 02:28:00","Value":4.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-08 08:08:00","Value":6.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-08 14:00:00","Value":15.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-08 19:50:00","Value":14.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-09 01:26:00","Value":10.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-09 07:20:00","Value":10.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-09 12:54:00","Value":19.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-09 18:39:00","Value":12},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-10 00:27:00","Value":6.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-10 09:17:00","Value":9.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-10 14:58:00","Value":9.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-10 20:42:00","Value":8.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-11 02:27:00","Value":5.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-11 08:05:00","Value":8.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-11 13:32:00","Value":10.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-11 19:16:00","Value":10.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-12 00:58:00","Value":9.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-12 06:53:00","Value":9.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-12 12:38:00","Value":11.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-12 19:03:00","Value":9.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-13 00:55:00","Value":5.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-13 06:49:00","Value":6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-13 12:39:00","Value":10.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-18 15:16:00","Value":8.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-18 20:56:00","Value":6.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-19 02:49:00","Value":5.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-19 08:35:00","Value":6.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-19 14:25:00","Value":12},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-19 20:07:00","Value":10.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-20 01:47:00","Value":10.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-20 07:35:00","Value":10.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-20 13:17:00","Value":15.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-20 19:03:00","Value":12.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-21 00:47:00","Value":11.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-21 06:27:00","Value":10.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-21 12:03:00","Value":13},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-21 17:42:00","Value":7.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-21 23:36:00","Value":7.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-22 05:12:00","Value":6.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-22 10:59:00","Value":8.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-22 16:41:00","Value":8.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-22 22:23:00","Value":7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-23 04:06:00","Value":5.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-23 09:42:00","Value":9.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-23 15:36:00","Value":12.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-23 21:12:00","Value":8.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-24 02:55:00","Value":8.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-24 08:28:00","Value":6.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-24 14:18:00","Value":9.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-24 19:55:00","Value":3.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-25 01:40:00","Value":0.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-25 07:35:00","Value":3.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-25 13:02:00","Value":6.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-25 19:03:00","Value":4.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-26 00:42:00","Value":2.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-26 06:33:00","Value":2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-26 12:13:00","Value":6.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-26 17:58:00","Value":6.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-26 23:42:00","Value":5.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-27 05:34:00","Value":5.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-27 11:21:00","Value":9.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-27 17:09:00","Value":8.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-27 23:07:00","Value":5.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-28 04:50:00","Value":4.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-28 10:33:00","Value":8.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-28 16:22:00","Value":8.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-28 22:12:00","Value":7.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-29 03:59:00","Value":6.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-29 09:52:00","Value":9.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-29 15:27:00","Value":11},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-29 21:15:00","Value":10},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-30 02:56:00","Value":7.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-30 08:29:00","Value":9.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-30 14:07:00","Value":9.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-04-30 19:41:00","Value":8.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-01 01:23:00","Value":9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-01 07:07:00","Value":9.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-01 12:52:00","Value":10},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-01 18:45:00","Value":9.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-02 00:24:00","Value":8.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-02 06:02:00","Value":7.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-02 11:37:00","Value":10.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-02 17:30:00","Value":9.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-02 23:09:00","Value":7.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-03 05:01:00","Value":7.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-03 10:47:00","Value":11.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-03 16:23:00","Value":11.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-03 22:04:00","Value":7.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-04 03:43:00","Value":7.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-04 09:33:00","Value":10.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-04 14:56:00","Value":10.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-04 20:34:00","Value":8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-05 02:09:00","Value":6.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-05 07:52:00","Value":10},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-05 13:33:00","Value":12},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-05 19:28:00","Value":8.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-06 01:03:00","Value":7.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-06 06:51:00","Value":8.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-06 12:44:00","Value":9.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-06 18:33:00","Value":8.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-07 00:14:00","Value":7.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-07 05:55:00","Value":7.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-07 11:43:00","Value":8.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-07 17:39:00","Value":9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-07 23:13:00","Value":7.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-08 05:03:00","Value":7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-08 11:17:00","Value":8.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-08 17:01:00","Value":8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-08 22:45:00","Value":6.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-09 04:51:00","Value":6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-09 10:40:00","Value":8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-09 16:39:00","Value":13.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-09 22:22:00","Value":8.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-10 03:55:00","Value":5.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-10 09:59:00","Value":12.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-10 15:45:00","Value":12.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-10 21:24:00","Value":8.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-11 03:37:00","Value":6.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-11 09:19:00","Value":13.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-11 14:58:00","Value":12.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-11 20:38:00","Value":8.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-12 02:22:00","Value":8.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-12 07:55:00","Value":9.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-12 13:34:00","Value":11.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-12 19:19:00","Value":10.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-13 00:59:00","Value":9.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-13 06:36:00","Value":11.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-13 12:04:00","Value":11.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-13 17:34:00","Value":15.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-13 23:20:00","Value":11.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-14 05:00:00","Value":10.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-14 10:45:00","Value":15},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-14 16:16:00","Value":16.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-14 21:55:00","Value":11.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-15 03:35:00","Value":9.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-15 09:25:00","Value":11},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-15 15:02:00","Value":14.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-15 20:49:00","Value":16.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-16 02:20:00","Value":16},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-16 08:02:00","Value":17},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-16 13:50:00","Value":18.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-16 19:21:00","Value":16},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-17 01:17:00","Value":11.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-17 06:57:00","Value":13.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-17 12:51:00","Value":15.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-17 18:34:00","Value":14},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-18 00:11:00","Value":8.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-18 06:00:00","Value":9.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-18 11:54:00","Value":15.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-18 17:28:00","Value":13.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-18 23:01:00","Value":11},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-19 04:37:00","Value":8.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-19 10:33:00","Value":10.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-19 16:31:00","Value":10},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-19 22:04:00","Value":8.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-20 03:53:00","Value":8.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-20 09:46:00","Value":12.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-20 15:24:00","Value":11.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-20 21:21:00","Value":10.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-21 03:08:00","Value":9.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-21 08:51:00","Value":13.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-21 14:35:00","Value":15.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-21 20:10:00","Value":15},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-22 01:55:00","Value":11.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-22 07:57:00","Value":12.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-22 13:38:00","Value":18},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-22 19:12:00","Value":17.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-23 00:56:00","Value":12.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-23 06:49:00","Value":12.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-23 12:35:00","Value":16.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-23 17:53:00","Value":16.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-23 23:34:00","Value":14.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-24 05:25:00","Value":14.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-24 10:59:00","Value":20.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-24 16:23:00","Value":20.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-24 21:49:00","Value":16.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-25 03:49:00","Value":12.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-25 09:27:00","Value":20.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-25 14:47:00","Value":20.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-25 20:19:00","Value":17.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-26 01:52:00","Value":16.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-26 07:44:00","Value":18.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-26 13:15:00","Value":22.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-26 18:43:00","Value":20.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-27 00:30:00","Value":15.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-27 06:16:00","Value":15},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-27 11:45:00","Value":19.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-27 17:17:00","Value":19.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-27 22:58:00","Value":15.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-28 04:39:00","Value":14.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-28 10:10:00","Value":16},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-28 15:45:00","Value":20.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-28 21:22:00","Value":12.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-29 03:06:00","Value":11.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-29 08:40:00","Value":10.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-29 14:21:00","Value":11.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-29 19:56:00","Value":11.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-30 01:50:00","Value":12},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-30 07:52:00","Value":15.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-30 13:32:00","Value":17.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-30 19:23:00","Value":15.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-31 01:12:00","Value":9.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-31 07:02:00","Value":10.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-31 12:42:00","Value":15},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-31 18:09:00","Value":13.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-05-31 23:55:00","Value":14.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-01 06:05:00","Value":13.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-01 11:30:00","Value":20.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-01 17:07:00","Value":20.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-01 22:45:00","Value":16.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-02 04:27:00","Value":13.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-02 10:03:00","Value":13.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-02 15:57:00","Value":17.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-02 21:31:00","Value":14.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-03 03:17:00","Value":9.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-03 09:09:00","Value":16.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-03 14:47:00","Value":18.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-03 20:15:00","Value":14.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-04 02:06:00","Value":10.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-04 08:00:00","Value":13.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-04 13:38:00","Value":16.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-04 19:33:00","Value":14.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-05 01:13:00","Value":10.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-05 06:52:00","Value":9.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-05 12:27:00","Value":12.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-05 18:03:00","Value":14},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-06 00:03:00","Value":11.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-06 05:51:00","Value":11.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-06 11:28:00","Value":12.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-06 17:05:00","Value":11.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-06 22:36:00","Value":10.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-07 04:15:00","Value":9.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-07 09:50:00","Value":12.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-07 15:21:00","Value":15.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-07 20:55:00","Value":12.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-08 02:54:00","Value":10.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-08 08:33:00","Value":12.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-08 14:29:00","Value":15.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-08 20:21:00","Value":15},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-09 02:04:00","Value":12.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-09 08:20:00","Value":14.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-09 13:55:00","Value":17.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-09 19:31:00","Value":16.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-10 01:17:00","Value":13.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-10 06:59:00","Value":11.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-10 12:43:00","Value":14.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-10 18:18:00","Value":19.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-10 23:53:00","Value":14.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-11 05:28:00","Value":14.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-11 11:05:00","Value":16.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-11 16:48:00","Value":15.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-11 22:22:00","Value":13.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-12 03:59:00","Value":12.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-12 09:35:00","Value":14.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-12 14:59:00","Value":15.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-12 20:39:00","Value":13.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-13 02:13:00","Value":11.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-13 07:58:00","Value":15.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-13 14:02:00","Value":17.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-13 19:36:00","Value":16.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-14 01:24:00","Value":13.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-14 07:14:00","Value":14.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-14 13:12:00","Value":21.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-14 18:40:00","Value":21.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-15 00:21:00","Value":17.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-15 06:04:00","Value":14.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-15 11:46:00","Value":17.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-15 17:18:00","Value":16.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-15 22:53:00","Value":12.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-16 04:37:00","Value":12},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-16 10:07:00","Value":15.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-16 15:32:00","Value":17.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-16 21:30:00","Value":17.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-17 03:19:00","Value":16.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-17 08:49:00","Value":20.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-17 14:12:00","Value":25.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-17 19:39:00","Value":21.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-18 01:17:00","Value":16.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-18 07:06:00","Value":18.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-18 12:36:00","Value":25.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-18 18:03:00","Value":23.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-18 23:26:00","Value":18.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-19 05:17:00","Value":15.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-19 10:41:00","Value":23.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-19 16:07:00","Value":24.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-19 21:50:00","Value":14.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-20 03:33:00","Value":13.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-20 09:22:00","Value":16},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-21 13:06:00","Value":18.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-22 18:05:00","Value":18.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-22 23:54:00","Value":14.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-23 05:34:00","Value":15.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-23 11:04:00","Value":17.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-23 16:40:00","Value":14.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-23 22:31:00","Value":14.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-24 04:39:00","Value":11.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-24 10:05:00","Value":15.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-24 15:44:00","Value":16.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-24 21:10:00","Value":13.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-25 02:54:00","Value":11.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-25 08:24:00","Value":13.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-25 14:03:00","Value":16.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-25 19:44:00","Value":14.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-26 01:24:00","Value":9.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-26 07:03:00","Value":12.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-26 12:54:00","Value":14.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-26 18:27:00","Value":13.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-27 00:22:00","Value":11.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-27 06:07:00","Value":10.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-27 11:58:00","Value":11.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-27 17:43:00","Value":11.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-27 23:32:00","Value":11.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-28 05:16:00","Value":11.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-28 10:52:00","Value":12.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-28 16:25:00","Value":10.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-28 22:05:00","Value":10.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-29 03:36:00","Value":10.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-29 09:18:00","Value":12.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-29 15:10:00","Value":12.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-29 21:02:00","Value":12.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-30 02:32:00","Value":12.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-30 08:24:00","Value":13.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-30 14:32:00","Value":13.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-06-30 20:24:00","Value":12.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-01 02:15:00","Value":12.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-01 08:00:00","Value":14.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-01 13:31:00","Value":18},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-01 19:10:00","Value":15.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-02 00:49:00","Value":12.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-02 06:23:00","Value":12.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-02 12:04:00","Value":15.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-02 17:40:00","Value":16.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-02 23:29:00","Value":13.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-03 05:16:00","Value":13.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-03 11:10:00","Value":16},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-03 16:52:00","Value":17.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-03 22:52:00","Value":12.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-04 04:22:00","Value":10.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-04 10:13:00","Value":11.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-04 15:56:00","Value":12.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-04 21:48:00","Value":12.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-05 03:23:00","Value":11.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-05 09:15:00","Value":11.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-05 15:19:00","Value":13.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-05 20:58:00","Value":12.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-06 02:42:00","Value":12.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-06 08:36:00","Value":13.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-06 14:05:00","Value":19.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-06 19:58:00","Value":18.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-07 01:49:00","Value":15.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-07 07:52:00","Value":17.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-07 13:31:00","Value":19.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-07 19:00:00","Value":16.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-08 00:38:00","Value":11.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-08 06:18:00","Value":10.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-08 12:11:00","Value":15.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-08 17:32:00","Value":17.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-08 23:10:00","Value":13},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-09 04:46:00","Value":11.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-09 10:28:00","Value":19.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-09 15:57:00","Value":20.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-09 21:46:00","Value":15.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-10 03:32:00","Value":13.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-10 09:41:00","Value":15},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-10 15:20:00","Value":14.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-10 21:23:00","Value":12.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-11 03:09:00","Value":11.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-11 09:09:00","Value":13.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-11 14:57:00","Value":13.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-11 20:32:00","Value":13.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-12 02:21:00","Value":10.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-12 08:09:00","Value":13.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-12 13:54:00","Value":16.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-12 19:35:00","Value":14.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-13 01:06:00","Value":12.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-13 07:03:00","Value":13.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-13 12:34:00","Value":19.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-13 18:00:00","Value":17.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-13 23:51:00","Value":13.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-14 05:32:00","Value":12},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-14 11:05:00","Value":16.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-14 16:42:00","Value":17},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-14 22:18:00","Value":12.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-15 03:50:00","Value":13.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-15 09:39:00","Value":14.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-15 15:04:00","Value":19.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-15 20:44:00","Value":19.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-16 02:12:00","Value":15.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-16 08:02:00","Value":15},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-16 13:34:00","Value":17.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-16 19:04:00","Value":17.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-17 00:40:00","Value":12.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-17 06:15:00","Value":13.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-17 12:01:00","Value":19.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-17 17:26:00","Value":21.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-17 23:09:00","Value":16.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-18 04:54:00","Value":13.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-18 10:41:00","Value":19.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-18 16:01:00","Value":18.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-18 21:33:00","Value":14.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-19 03:15:00","Value":14.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-19 08:59:00","Value":15.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-19 14:37:00","Value":17.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-19 20:16:00","Value":16.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-20 02:06:00","Value":15.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-20 07:52:00","Value":14.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-20 13:37:00","Value":14.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-20 19:26:00","Value":15.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-21 01:07:00","Value":10.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-21 06:42:00","Value":13.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-21 12:23:00","Value":18.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-21 17:52:00","Value":16.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-21 23:30:00","Value":14.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-22 05:07:00","Value":14.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-22 10:42:00","Value":15.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-22 16:22:00","Value":16},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-22 21:59:00","Value":14.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-23 03:42:00","Value":12.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-23 09:04:00","Value":17.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-23 14:39:00","Value":15.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-23 20:15:00","Value":13.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-24 01:48:00","Value":12.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-24 07:50:00","Value":12.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-24 13:40:00","Value":14.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-24 19:22:00","Value":13.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-25 01:04:00","Value":12.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-25 06:45:00","Value":12.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-25 12:42:00","Value":15.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-25 18:28:00","Value":14.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-26 00:16:00","Value":12.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-26 05:58:00","Value":13.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-26 11:52:00","Value":15.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-26 17:15:00","Value":19.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-26 22:44:00","Value":13.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-27 04:36:00","Value":11.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-27 10:34:00","Value":14.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-27 16:24:00","Value":14.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-27 22:06:00","Value":13.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-28 04:16:00","Value":12.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-28 09:58:00","Value":16.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-28 15:39:00","Value":17.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-28 21:10:00","Value":14.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-29 02:58:00","Value":12.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-29 08:27:00","Value":15.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-29 14:03:00","Value":18.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-29 19:40:00","Value":16.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-30 01:29:00","Value":13.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-30 07:11:00","Value":13.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-30 12:41:00","Value":18.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-30 18:27:00","Value":16.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-31 00:09:00","Value":13.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-31 05:58:00","Value":12.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-31 11:54:00","Value":17.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-31 17:25:00","Value":18.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-07-31 23:14:00","Value":14.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-01 04:57:00","Value":12.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-01 10:55:00","Value":16.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-01 16:26:00","Value":18.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-01 22:01:00","Value":13.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-02 03:55:00","Value":12.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-02 09:46:00","Value":17.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-02 15:32:00","Value":15},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-02 21:08:00","Value":17},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-03 02:45:00","Value":14},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-03 08:47:00","Value":14.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-03 14:24:00","Value":19},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-03 19:54:00","Value":16.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-04 01:26:00","Value":14.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-04 07:02:00","Value":14.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-04 12:23:00","Value":17.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-04 18:01:00","Value":17},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-04 23:43:00","Value":12.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-05 05:38:00","Value":11.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-05 11:21:00","Value":15.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-05 16:59:00","Value":13.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-05 22:58:00","Value":12.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-06 04:47:00","Value":10.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-06 10:37:00","Value":17.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-06 16:28:00","Value":15.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-06 22:18:00","Value":14.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-07 04:06:00","Value":12},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-07 10:01:00","Value":14.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-07 15:32:00","Value":17.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-07 21:32:00","Value":14.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-08 03:10:00","Value":11.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-08 08:47:00","Value":14.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-08 14:39:00","Value":12.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-08 20:27:00","Value":12},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-09 02:10:00","Value":13.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-09 07:54:00","Value":13.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-09 13:28:00","Value":15.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-09 19:27:00","Value":14},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-10 01:20:00","Value":11},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-10 07:08:00","Value":12.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-10 12:31:00","Value":19},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-10 18:03:00","Value":18},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-10 23:48:00","Value":11.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-11 05:28:00","Value":10.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-11 11:05:00","Value":15.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-11 16:38:00","Value":18.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-11 22:10:00","Value":16.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-12 03:53:00","Value":13},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-12 09:40:00","Value":15.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-12 15:30:00","Value":14.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-12 21:12:00","Value":13},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-13 03:05:00","Value":10.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-13 08:48:00","Value":13.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-13 14:22:00","Value":18.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-13 19:52:00","Value":14.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-14 01:46:00","Value":13.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-14 07:28:00","Value":13.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-14 13:04:00","Value":18.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-14 18:38:00","Value":18.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-15 00:26:00","Value":15.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-15 06:09:00","Value":14.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-15 11:51:00","Value":17.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-15 17:21:00","Value":18.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-15 23:05:00","Value":13.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-16 05:05:00","Value":11.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-16 10:48:00","Value":17.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-16 16:16:00","Value":19.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-16 21:52:00","Value":17.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-17 03:29:00","Value":14.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-17 09:23:00","Value":19.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-17 14:29:00","Value":21.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-17 19:56:00","Value":17.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-18 01:34:00","Value":14},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-18 07:13:00","Value":13.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-18 12:55:00","Value":15.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-18 18:37:00","Value":14.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-19 00:31:00","Value":13.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-19 06:09:00","Value":12.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-19 11:50:00","Value":16},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-19 17:20:00","Value":15.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-19 23:00:00","Value":13.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-20 04:49:00","Value":12.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-20 10:28:00","Value":15.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-20 15:55:00","Value":17.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-20 21:43:00","Value":13.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-21 03:27:00","Value":9.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-21 09:11:00","Value":15.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-21 14:53:00","Value":18.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-21 20:38:00","Value":16.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-22 02:34:00","Value":15.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-22 08:26:00","Value":16.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-22 14:09:00","Value":18.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-22 19:51:00","Value":17.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-23 01:32:00","Value":15.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-23 07:15:00","Value":15.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-23 13:04:00","Value":18.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-23 18:36:00","Value":17.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-24 00:32:00","Value":13.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-24 06:41:00","Value":14.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-24 12:20:00","Value":17.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-24 17:55:00","Value":17.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-24 23:35:00","Value":14.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-25 05:12:00","Value":15.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-25 10:53:00","Value":18.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-25 16:32:00","Value":17.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-25 22:06:00","Value":14.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-26 03:46:00","Value":13.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-26 09:26:00","Value":16.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-26 14:59:00","Value":17.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-26 20:40:00","Value":14.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-27 02:22:00","Value":12.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-27 08:18:00","Value":14.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-27 13:56:00","Value":20.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-27 19:24:00","Value":18.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-28 01:10:00","Value":16.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-28 06:45:00","Value":16.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-28 12:20:00","Value":19.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-28 17:45:00","Value":18.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-28 23:32:00","Value":17.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-29 05:38:00","Value":13.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-29 11:24:00","Value":14.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-29 17:09:00","Value":13.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-29 22:40:00","Value":11.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-30 04:26:00","Value":10.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-30 10:06:00","Value":14.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-30 15:49:00","Value":16.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-30 21:26:00","Value":13},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-31 03:15:00","Value":10.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-31 09:10:00","Value":13.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-31 15:01:00","Value":16.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-08-31 21:00:00","Value":13.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-01 02:46:00","Value":10.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-01 08:44:00","Value":12.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-01 15:05:00","Value":15.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-01 20:39:00","Value":13},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-02 02:25:00","Value":9.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-02 08:12:00","Value":11.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-02 13:48:00","Value":17.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-02 19:35:00","Value":15.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-03 01:14:00","Value":12.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-03 07:18:00","Value":11.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-03 12:56:00","Value":17.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-03 18:35:00","Value":15.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-04 00:17:00","Value":13.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-04 06:14:00","Value":12.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-04 12:06:00","Value":16.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-04 17:44:00","Value":18.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-04 23:42:00","Value":15.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-05 05:26:00","Value":15.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-05 11:12:00","Value":14},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-05 16:50:00","Value":16.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-05 22:45:00","Value":12.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-06 04:30:00","Value":11},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-06 10:15:00","Value":14.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-06 16:05:00","Value":14.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-06 21:46:00","Value":12.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-07 03:35:00","Value":12.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-07 09:31:00","Value":14.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-07 15:20:00","Value":15.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-07 21:06:00","Value":13.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-08 02:48:00","Value":13},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-08 08:19:00","Value":12.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-08 15:23:00","Value":15.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-08 21:09:00","Value":12.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-09 02:59:00","Value":10.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-09 08:41:00","Value":13.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-09 14:26:00","Value":16.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-09 20:04:00","Value":12.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-10 01:48:00","Value":11.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-10 07:39:00","Value":11},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-10 13:31:00","Value":15.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-10 19:13:00","Value":11.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-11 00:55:00","Value":9.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-11 06:42:00","Value":10.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-11 12:16:00","Value":15.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-11 18:07:00","Value":14},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-11 23:47:00","Value":11.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-12 05:28:00","Value":11.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-12 11:30:00","Value":14.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-12 17:01:00","Value":13.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-12 22:56:00","Value":10},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-13 04:53:00","Value":8.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-13 10:30:00","Value":11.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-13 16:15:00","Value":11.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-13 22:02:00","Value":9.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-14 03:38:00","Value":8.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-14 09:15:00","Value":12.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-14 14:54:00","Value":13.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-14 20:32:00","Value":10.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-15 02:23:00","Value":10.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-15 07:56:00","Value":10.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-15 13:29:00","Value":13.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-15 19:09:00","Value":11.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-16 01:01:00","Value":9.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-16 06:43:00","Value":9.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-16 12:31:00","Value":11.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-16 18:11:00","Value":10.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-17 00:06:00","Value":10.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-17 05:40:00","Value":11.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-17 11:34:00","Value":13.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-17 17:27:00","Value":12.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-17 23:29:00","Value":11.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-18 05:07:00","Value":9.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-18 10:46:00","Value":12.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-18 16:56:00","Value":10.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-18 22:33:00","Value":8.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-19 04:23:00","Value":6.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-19 10:04:00","Value":11.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-19 16:13:00","Value":15.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-19 21:56:00","Value":10.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-20 03:37:00","Value":9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-20 09:16:00","Value":14},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-20 14:48:00","Value":17},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-20 20:57:00","Value":15.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-21 02:31:00","Value":14.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-21 08:22:00","Value":14.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-21 14:16:00","Value":14.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-21 19:58:00","Value":12.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-22 01:36:00","Value":9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-22 07:27:00","Value":8.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-22 13:20:00","Value":13.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-22 19:14:00","Value":12.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-23 00:59:00","Value":11.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-23 06:47:00","Value":11.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-23 12:20:00","Value":16.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-23 18:09:00","Value":15.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-23 23:54:00","Value":15},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-24 05:37:00","Value":12.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-24 11:23:00","Value":16},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-24 16:59:00","Value":15.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-24 22:44:00","Value":13.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-25 04:24:00","Value":12.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-25 10:11:00","Value":14.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-25 15:52:00","Value":15.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-25 21:37:00","Value":13.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-26 03:20:00","Value":12.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-26 08:59:00","Value":13},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-26 14:41:00","Value":15.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-26 20:32:00","Value":12.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-27 02:12:00","Value":13.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-27 07:53:00","Value":13.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-27 13:45:00","Value":15},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-27 19:25:00","Value":13.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-28 04:58:00","Value":13.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-28 12:53:00","Value":19.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-28 18:36:00","Value":15.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-29 00:16:00","Value":13},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-29 06:12:00","Value":12.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-29 11:57:00","Value":13.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-29 17:41:00","Value":14.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-29 23:47:00","Value":10.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-30 05:24:00","Value":9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-30 11:03:00","Value":12.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-30 16:59:00","Value":12.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-09-30 22:50:00","Value":8.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-01 04:33:00","Value":8.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-01 10:12:00","Value":12.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-01 15:53:00","Value":16.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-01 21:44:00","Value":14.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-02 03:22:00","Value":12.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-02 08:56:00","Value":13.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-02 14:34:00","Value":13.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-02 20:22:00","Value":11.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-03 02:00:00","Value":10.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-03 07:49:00","Value":10.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-03 13:25:00","Value":12.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-03 19:12:00","Value":10.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-04 00:55:00","Value":10.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-04 06:30:00","Value":11.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-04 12:09:00","Value":11.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-04 17:52:00","Value":11.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-04 23:35:00","Value":12.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-05 05:09:00","Value":8.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-05 10:44:00","Value":12.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-05 16:10:00","Value":13.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-05 22:12:00","Value":9.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-06 03:58:00","Value":6.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-06 09:39:00","Value":9.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-06 15:15:00","Value":11.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-06 20:51:00","Value":10.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-07 02:40:00","Value":14},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-07 08:26:00","Value":13},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-07 14:01:00","Value":14},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-07 19:47:00","Value":12.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-08 01:44:00","Value":11},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-08 07:22:00","Value":11.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-08 13:09:00","Value":15},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-08 18:54:00","Value":13.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-09 00:38:00","Value":12.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-09 06:20:00","Value":12},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-09 13:27:00","Value":14.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-09 19:10:00","Value":13.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-10 00:53:00","Value":13},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-10 07:00:00","Value":12.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-10 12:37:00","Value":13.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-10 18:25:00","Value":13.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-11 00:11:00","Value":13.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-11 05:50:00","Value":15.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-11 11:43:00","Value":13.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-11 17:09:00","Value":14.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-11 22:58:00","Value":10.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-12 04:31:00","Value":9.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-12 10:14:00","Value":11.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-12 16:01:00","Value":13.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-12 21:39:00","Value":13.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-13 03:14:00","Value":16.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-13 08:59:00","Value":18.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-13 14:33:00","Value":18.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-13 20:04:00","Value":17.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-14 01:41:00","Value":14},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-14 07:27:00","Value":13.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-14 13:17:00","Value":16.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-14 18:49:00","Value":16.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-15 00:19:00","Value":14.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-15 06:06:00","Value":14.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-15 11:39:00","Value":17.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-15 17:12:00","Value":15.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-15 22:51:00","Value":14.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-16 04:57:00","Value":11.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-16 10:48:00","Value":12.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-16 17:01:00","Value":16.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-16 22:42:00","Value":13.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-17 04:23:00","Value":12.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-17 10:07:00","Value":12.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-17 15:54:00","Value":12.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-17 21:37:00","Value":11},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-18 03:28:00","Value":9.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-18 09:07:00","Value":10.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-18 14:42:00","Value":11.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-18 20:11:00","Value":10.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-19 01:50:00","Value":11},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-19 07:42:00","Value":10.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-19 13:18:00","Value":12.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-19 19:25:00","Value":12.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-20 01:12:00","Value":13.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-20 07:12:00","Value":12.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-20 12:59:00","Value":14.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-20 18:45:00","Value":13.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-21 00:29:00","Value":10.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-21 06:28:00","Value":11.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-21 12:29:00","Value":12.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-21 18:13:00","Value":11.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-21 23:52:00","Value":11.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-22 05:25:00","Value":10.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-22 10:59:00","Value":10.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-22 16:40:00","Value":11.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-22 22:20:00","Value":8.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-23 03:57:00","Value":8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-23 09:47:00","Value":9.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-23 15:28:00","Value":13.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-23 21:12:00","Value":14.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-24 03:05:00","Value":12.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-24 08:48:00","Value":12.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-24 14:38:00","Value":16.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-24 20:16:00","Value":13},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-25 02:11:00","Value":10.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-25 07:52:00","Value":11},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-25 13:42:00","Value":13.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-25 19:33:00","Value":11.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-26 01:13:00","Value":11.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-26 07:06:00","Value":11.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-26 13:00:00","Value":12.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-26 18:36:00","Value":11.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-27 00:19:00","Value":9.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-27 06:01:00","Value":6.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-27 11:51:00","Value":10},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-27 17:25:00","Value":10.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-27 23:10:00","Value":9.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-28 04:47:00","Value":9.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-28 10:32:00","Value":12.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-28 15:58:00","Value":13.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-28 21:32:00","Value":13.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-29 02:02:00","Value":11.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-29 07:34:00","Value":6.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-29 13:18:00","Value":8.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-29 19:00:00","Value":6.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-30 00:37:00","Value":4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-30 06:17:00","Value":3.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-30 11:56:00","Value":7.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-30 17:30:00","Value":8.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-30 23:03:00","Value":8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-31 04:53:00","Value":11},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-31 10:34:00","Value":12.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-31 16:25:00","Value":13.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-10-31 22:07:00","Value":13.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-01 03:50:00","Value":12.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-01 09:29:00","Value":12.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-01 15:19:00","Value":12.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-01 21:06:00","Value":11},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-02 03:01:00","Value":10.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-02 08:47:00","Value":7.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-02 14:26:00","Value":9.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-02 20:10:00","Value":8.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-03 01:46:00","Value":6.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-03 07:27:00","Value":7.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-03 13:03:00","Value":9.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-03 18:54:00","Value":9.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-04 00:37:00","Value":8.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-04 06:39:00","Value":8.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-04 12:28:00","Value":9.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-04 18:08:00","Value":7.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-04 23:42:00","Value":4.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-05 05:19:00","Value":4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-05 10:53:00","Value":6.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-05 16:34:00","Value":6.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-05 22:08:00","Value":3.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-06 03:47:00","Value":2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-06 09:31:00","Value":3.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-06 15:10:00","Value":8.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-06 20:49:00","Value":8.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-07 02:36:00","Value":8.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-07 08:20:00","Value":9.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-07 14:10:00","Value":7.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-07 19:44:00","Value":7.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-08 01:31:00","Value":4.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-08 07:13:00","Value":3.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-08 12:56:00","Value":8.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-08 18:41:00","Value":7.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-09 00:26:00","Value":10},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-09 06:05:00","Value":12.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-09 11:56:00","Value":10.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-09 17:32:00","Value":8.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-09 23:11:00","Value":8.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-10 05:00:00","Value":8.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-10 10:41:00","Value":7.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-10 16:27:00","Value":6.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-10 22:16:00","Value":5.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-11 04:10:00","Value":5.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-11 09:50:00","Value":4.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-11 15:35:00","Value":6.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-11 21:29:00","Value":3.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-12 03:29:00","Value":2.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-12 09:07:00","Value":2.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-12 14:50:00","Value":6.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-12 20:28:00","Value":3.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-13 01:59:00","Value":2.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-13 07:42:00","Value":2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-13 13:45:00","Value":4.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-13 19:32:00","Value":5.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-14 01:27:00","Value":10.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-14 06:57:00","Value":11.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-14 12:56:00","Value":11.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-14 19:11:00","Value":9.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-15 00:43:00","Value":8.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-15 06:21:00","Value":5.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-15 12:00:00","Value":7.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-15 17:39:00","Value":7.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-15 23:27:00","Value":7.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-16 05:07:00","Value":9.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-16 10:48:00","Value":9.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-16 16:22:00","Value":7.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-16 22:02:00","Value":4.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-17 03:54:00","Value":3.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-17 09:38:00","Value":6.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-17 15:20:00","Value":8.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-17 20:59:00","Value":7.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-18 02:29:00","Value":7.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-18 08:15:00","Value":6.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-18 14:07:00","Value":6.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-18 19:56:00","Value":3.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-19 01:33:00","Value":2.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-19 07:15:00","Value":1.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-19 13:06:00","Value":4.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-19 18:47:00","Value":4.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-20 00:22:00","Value":4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-20 06:06:00","Value":4.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-20 11:44:00","Value":10.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-20 17:29:00","Value":11.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-20 23:09:00","Value":8.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-21 04:35:00","Value":8.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-21 10:10:00","Value":10},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-21 15:53:00","Value":12.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-21 21:33:00","Value":13.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-22 03:08:00","Value":11.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-22 09:03:00","Value":10.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-22 14:35:00","Value":13.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-22 20:10:00","Value":8.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-23 02:03:00","Value":7.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-23 07:38:00","Value":4.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-23 13:34:00","Value":4.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-23 19:21:00","Value":4.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-24 01:15:00","Value":2.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-24 07:01:00","Value":1.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-24 12:48:00","Value":5.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-24 18:22:00","Value":3.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-25 00:15:00","Value":1.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-25 06:04:00","Value":1.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-25 11:43:00","Value":3.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-25 17:20:00","Value":3.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-25 22:54:00","Value":3.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-26 04:28:00","Value":2.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-26 10:14:00","Value":3.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-26 16:01:00","Value":4.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-26 21:44:00","Value":5.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-27 03:35:00","Value":7.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-27 09:14:00","Value":5.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-27 14:52:00","Value":5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-27 20:34:00","Value":4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-28 02:22:00","Value":3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-28 08:12:00","Value":1.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-28 13:53:00","Value":4.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-28 19:34:00","Value":3.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-29 01:19:00","Value":2.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-29 07:16:00","Value":2.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-29 12:53:00","Value":3.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-29 18:31:00","Value":2.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-30 00:12:00","Value":1.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-30 05:49:00","Value":0.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-30 11:42:00","Value":1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-30 17:37:00","Value":1.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-11-30 23:14:00","Value":2.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-01 04:53:00","Value":2.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-01 10:43:00","Value":3.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-01 16:18:00","Value":3.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-01 21:57:00","Value":3.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-02 03:42:00","Value":3.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-02 09:39:00","Value":5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-02 15:16:00","Value":6.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-02 20:58:00","Value":6.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-03 02:55:00","Value":7.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-03 08:42:00","Value":7.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-03 14:24:00","Value":7.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-03 20:17:00","Value":4.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-04 01:58:00","Value":4.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-04 07:43:00","Value":6.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-04 13:18:00","Value":8.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-04 19:11:00","Value":7.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-05 01:01:00","Value":7.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-05 06:37:00","Value":7.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-05 12:16:00","Value":8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-05 17:55:00","Value":7.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-05 23:29:00","Value":8.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-06 05:11:00","Value":9.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-06 10:53:00","Value":10.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-06 16:44:00","Value":11.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-06 22:33:00","Value":10.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-07 04:22:00","Value":13.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-07 10:17:00","Value":7.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-07 16:17:00","Value":4.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-07 23:20:00","Value":2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-08 05:27:00","Value":1.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-08 15:36:00","Value":1.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-09 01:10:00","Value":0.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-09 10:07:00","Value":0.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-09 15:48:00","Value":1.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-10 14:51:00","Value":0.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-11 17:58:00","Value":0.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-11 23:42:00","Value":0.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-12 06:30:00","Value":0},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-12 13:53:00","Value":3.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-12 19:56:00","Value":2.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-13 01:47:00","Value":5.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-13 07:18:00","Value":5.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-13 13:04:00","Value":4.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-13 18:57:00","Value":2.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-14 00:26:00","Value":2.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-14 06:25:00","Value":2.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-14 11:57:00","Value":4.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-14 17:46:00","Value":3.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-14 23:32:00","Value":1.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-15 05:13:00","Value":2.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-15 10:53:00","Value":4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-15 16:37:00","Value":3.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-15 22:19:00","Value":1.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-16 04:01:00","Value":1.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-16 10:11:00","Value":0.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-16 16:08:00","Value":1.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-16 22:01:00","Value":0},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-17 03:48:00","Value":0},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-17 10:40:00","Value":3.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-17 16:09:00","Value":9.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-17 21:52:00","Value":4.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-18 03:48:00","Value":2.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-18 09:31:00","Value":3.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-18 15:11:00","Value":5.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-18 21:00:00","Value":6.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-19 02:47:00","Value":6.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-19 08:37:00","Value":7.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-19 14:11:00","Value":10.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-19 20:14:00","Value":8.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-20 02:00:00","Value":7.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-20 07:40:00","Value":11.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-20 13:14:00","Value":11.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-20 18:58:00","Value":9.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-21 00:37:00","Value":8.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-21 06:26:00","Value":7.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-21 11:50:00","Value":9.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-21 17:36:00","Value":9.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-21 23:15:00","Value":8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-22 05:07:00","Value":7.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-22 10:47:00","Value":7.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-22 16:25:00","Value":9.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-22 22:02:00","Value":10.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-23 03:39:00","Value":9.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-23 09:10:00","Value":10.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-23 14:40:00","Value":12.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-23 20:38:00","Value":11.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-24 02:15:00","Value":10.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-24 07:58:00","Value":11.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-24 13:30:00","Value":12.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-24 19:21:00","Value":11},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-25 01:03:00","Value":11.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-25 06:58:00","Value":10.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-25 12:55:00","Value":11},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-25 18:44:00","Value":6.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-26 00:30:00","Value":2.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-26 06:23:00","Value":3.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-26 12:08:00","Value":3.6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-26 17:54:00","Value":2.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-26 23:35:00","Value":0.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-27 05:13:00","Value":1.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-27 11:12:00","Value":1.3},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-27 16:53:00","Value":1.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-27 23:07:00","Value":0.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-28 04:47:00","Value":0.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-28 10:27:00","Value":2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-28 16:11:00","Value":2.4},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-28 21:50:00","Value":0.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-29 06:53:00","Value":0},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-29 13:07:00","Value":0.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-29 18:55:00","Value":0.8},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-30 00:32:00","Value":4.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-30 06:09:00","Value":1.2},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-30 11:58:00","Value":1.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-30 17:44:00","Value":6.9},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-30 23:39:00","Value":6.5},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-31 05:11:00","Value":6},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-31 10:34:00","Value":7.7},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-31 16:04:00","Value":7.1},{"Sensor Name":"eml_sensors3_164118","Variable":"Temperature","Units":"Celsius","Timestamp":"2017-12-31 21:36:00","Value":5.8}]

let temperatureAverage = {
  '01-01': {
    'values' : ['4.7',
    '4.0',
    '3.8',
    '4.9']
  },
  '01-02' : {
    'values' : [
    '1.4',
    '0.7',
    '2.3',
    '2.1'
    ]
  },
  '01-03' : {
    'values' : [
    '4.9',
    '6.0',
    '7.4',
    '7.1'
    ]
  },
  '01-04' : {
    'values' : [
    '7.0',
    '3.9',
    '4.5',
    '3.3'
    ]
  },
  '01-05' : {
    'values' : [
    '2.6',
    '1.3',
    '4.4',
    '1.6'
    ]
  },
  '01-06' : {
    'values' : [
    '2.5',
    '2.3',
    '7.7',
    '7.8',
    '9.2'
    ]
  },
  '01-07' : {
    'values' : [
    '8.3',
    '8.4',
    '7.9',
    '7.5'
    ]
  },
 '01-08' : {
    'values' : [
    '7.5',
    '6.4',
    '8.5',
    '7.2'
    ]
  },
  '01-09' : {
    'values' : [
    '10.0',
    '9.4',
    '6.9',
    '5.8'
    ]
  },
  '01-10' : {
    'values' : [
    '6.1',
    '7.6',
    '9.2'
    ]
  },
  '01-11' : {
    'values' : [
    '4.1'
    ]
  },
  '01-12' : {
    'values' : [
    '3.2',
    '2.4',
    '3.6',
    '0.4'
    ]
  },
  '01-13' : {
    'values' : [
    '3.1',
    '3.6',
    '0.9'
    ]
  },
  '01-14' : {
    'values' : [
    '1.0',
    '1.3',
    '3.9',
    '2.3'
    ]
  },
  '01-15' : {
    'values' : [
    '2.6',
    '4.8',
    '8.5',
    '9.1',
    '7.6'
    ]
  },
  '01-16' : {
    'values' : [
    '7.9',
    '8.5',
    '8.8',
    '6.8'
    ]
  },
  '01-17' : {
    'values' : [
    '5.3',
    '6.3',
    '10.2',
    '8.3'
    ]
  },
  '01-18' : {
    'values' : [
    '7.3',
    '7.5',
    '8.7',
    '7.7'
    ]
  },
  '01-19' : {
    'values' : [
    '6.3',
    '5.9',
    '8.0',
    '6.8'
    ]
  },
  '01-20' : {
    'values' : [
    '5.9',
    '4.7',
    '4.4',
    '5.5'
    ]
  },
  '01-21' : {
    'values' : [
    '3.4',
    '2.2',
    '2.9',
    '4.0'
    ]
  },
  '01-22' : {
    'values' : [

    ]
  },
  '01-23' : {
    'values' : [
    '5.9',
    '3.9'
    ]
  },
  '01-24' : {
    'values' : [
    '1.9',
    '3.6',
    '6.3',
    '5.7'
    ]
  },
  '01-25' : {
    'values' : [
    '7.3',
    '4.4',
    '7.3',
    '3.3'
    ]
  },
  '01-26' : {
    'values' : [
    '1.8',
    '0.0'
    ]
  },
  '01-27' : {
    'values' : [
    '1.0'
    ]
  },
  '01-28' : {
    'values' : [
    '1.8',
    '2.8',
    '4.2',
    '4.3',
    '3.1'
    ]
  },
  '01-29' : {
    'values' : [
    '1.5',
    '4.5',
    '5.4',
    '2.1'
    ]
  },
  '01-30' : {
    'values' : [
    '1.2',
    '5.1',
    '5.7',
    '5.0'
    ]
  },
  '01-31' : {
    'values' : [
    '4.2',
    '4.2',
    '4.5',
    '5.7'
    ]
  },
  '02-01': {
    'values' : [
    '5.5',
    '7.4',
    '7.9'
    ]
  },
  '02-02' : {
    'values' : [
    '8.4',
    '9.2',
    '10.8',
    '10.8',
    '10.3'
    ]
  },
  '02-03' : {
    'values' : [
    '8.5',
    '8.2',
    '8.1',
    '6.9'
    ]
  },
  '02-04' : {
    'values' : [
    '3.9',
    '4.8',
    '7.2',
    '3.4'
    ]
  },
  '02-05' : {
    'values' : [
    '3.0',
    '3.3',
    '6.2',
    '5.1'
    ]
  },
  '02-06' : {
    'values' : [
    '1.8',
    '2.6',
    '4.8',
    '3.2'
    ]
  },
  '02-07' : {
    'values' : [
    '3.6',
    '4.1',
    '7.1',
    '5.6'
    ]
  },
 '02-08' : {
    'values' : [
    '4.7',
    '3.4',
    '2.9',
    '1.9'
    ]
  },
  '02-09' : {
    'values' : [
    '1.6',
    '1.9',
    '2.5',
    '1.6'
    ]
  },
  '02-10' : {
    'values' : [
    '1.5',
    '2.3',
    '2.5',
    '2.6'
    ]
  },
  '02-11' : {
    'values' : [
    '2.2',
    '3.6',
    '4.0',
    '4.2',
    '4.3'
    ]
  },
  '02-12' : {
    'values' : [
    '1.9',
    '2.9',
    '3.3',
    '4.3'
    ]
  },
  '02-13' : {
    'values' : [
    '4.2',
    '4.5',
    '5.4',
    '5.6'
    ]
  },
  '02-14' : {
    'values' : [
    '5.3',
    '5.0',
    '6.1',
    '5.6'
    ]
  },
  '02-15' : {
    'values' : [
    '6.1',
    '5.5',
    '9.8',
    '7.9'
    ]
  },
  '02-16' : {
    'values' : [
    '8.4',
    '7.1',
    '9.3',
    '8.4'
    ]
  },
  '02-17' : {
    'values' : [
    '7.0',
    '5.6',
    '10.2',
    '9.8',
    '8.6'
    ]
  },
  '02-18' : {
    'values' : [
    '8.8',
    '11.4',
    '9.7',
    '9.6'
    ]
  },
  '02-19' : {
    'values' : [
    '7.8',
    '9.5',
    '10.4',
    '11.0'
    ]
  },
  '02-20' : {
    'values' : [
    '11.8',
    '13.0',
    '12.2',
    '9.0'    
    ]
  },
  '02-21' : {
    'values' : [
    '7.3',
    '6.1',
    '9.7',
    '12.4'
    ]
  },
  '02-22' : {
    'values' : [
    '11.2',
    '6.3',
    '7.4',
    '7.2',
    '6.1'
    ]
  },
  '02-23' : {
    'values' : [
    '3.8',
    '8.9',
    '3.5',
    '3.3'
    ]
  },
  '02-24' : {
    'values' : [
    '3.4',
    '3.9',
    '6.8',
    '4.8'
    ]
  },
  '02-25' : {
    'values' : [
    '8.0',
    '9.0',
    '11.4',
    '9.4'
    ]
  },
  '02-26' : {
    'values' : [
    '6.6',
    '6.8',
    '10.5',
    '9.9',
    '5.6'
    ]
  },
  '02-27' : {
    'values' : [
    '4.2',
    '5.4',
    '5.8',
    '2.4'
    ]
  },
  '02-28' : {
    'values' : [
    '1.3',
    '3.7',
    '6.3',
    '3.6'
    ]
  },
  '03-01': {
    'values' : [
    '1.8',
    '3.4',
    '7.0',
    '3.4'
    ]
  },
  '03-02' : {
    'values' : [
    '3.2',
    '2.6',
    '7.9',
    '6.0'
    ]
  },
  '03-03' : {
    'values' : [
    '4.4',
    '4.9',
    '7.3',
    '4.5',
    '5.7'
    ]
  },
  '03-04' : {
    'values' : [
    '6.4',
    '7.4',
    '9.2',
    '6.2'
    ]
  },
  '03-05' : {
    'values' : [
    '4.9',
    '6.7',
    '8.2',
    '5.2'
    ]
  },
  '03-06' : {
    'values' : [
    '4.8',
    '4.8',
    '8.0',
    '5.7'
    ]
  },
  '03-07' : {
    'values' : [
    '4.6',
    '3.6',
    '8.2',
    '7.6'
    ]
  },
 '03-08' : {
    'values' : [
    '5.0',
    '4.9',
    '10.5',
    '10.5',
    '8.7'
    ]
  },
  '03-09' : {
    'values' : [
    '8.9',
    '9.0',
    '11.',
    '6.5'
    ]
  },
  '03-10' : {
    'values' : [
    '4.6',
    '6.2',
    '11.',
    '9.6'
    ]
  },
  '03-11' : {
    'values' : [
    '9.1',
    '9.3',
    '10.',
    '9.9'
    ]
  },
  '03-12' : {
    'values' : [
    '9.2',
    '9.2',
    '13.',
    '9.7'
    ]
  },
  '03-13' : {
    'values' : [
    '6.4',
    '5.7',
    '11.',
    '10.',
    '11.'
    ]
  },
  '03-14' : {
    'values' : [
    '11.4',
    '12.4',
    '11.9',
    '7.8'  
    ]
  },
  '03-15' : {
    'values' : [
    '6.6',
    '8.5',
    '12.5',
    '8.0'
    ]
  },
  '03-16' : {
    'values' : [
    '10.',
    '10.',
    '11.',
    '5.6'
    ]
  },
  '03-17' : {
    'values' : [
    '5.0',
    '5.7',
    '9.3',
    '9.9'
    ]
  },
  '03-18' : {
    'values' : [
    '9.8',
    '5.9',
    '10.',
    '10.'
    ]
  },
  '03-19' : {
    'values' : [
    '9.1',
    '11.',
    '13.',
    '11.',
    '7.7'
    ]
  },
  '03-20' : {
    'values' : [
    '8.0',
    '10.',
    '8.9',
    '4.7'
    ]
  },
  '03-21' : {
    'values' : [
    '2.5',
    '4.7',
    '7.1',
    '4.3'
    ]
  },
  '03-22' : {
    'values' : [
    '2.7',
    '3.6',
    '7.1'
    ]
  },
  '03-23' : {
    'values' : [
    '7.0',
    '6.0'
    ]
  },
  '03-24' : {
    'values' : [
    '4.6',
    '3.6',
    '10.',
    '8.3'
    ]
  },
  '03-25' : {
    'values' : [
    '6.1',
    '3.5',
    '14.',
    '14.',
    '6.9'
    ]
  },
  '03-26' : {
    'values' : [
    '3.9',
    '11.',
    '10.',
    '6.6'
    ]
  },
  '03-27' : {
    'values' : [
    '3.7',
    '6.9',
    '8.0',
    '6.7'
    ]
  },
  '03-28' : {
    'values' : [
    '6.2',
    '5.6',
    '10.',
    '9.2'
    ]
  },
  '03-29' : {
    'values' : [
    '9.0',
    '7.4',
    '12.',
    '12.'
    ]
  },
  '03-30' : {
    'values' : [
    '12.8',
    '12.6',
    '15.7',
    '14.1'
    ]
  },
  '03-31' : {
    'values' : [
    '13.3',
    '12.2',
    '14.8',
    '13.8',
    '10.3'
    ]
  },
  '04-01': {
    'values' : [
    '9.8',
    '12.',
    '10.',
    '8.6'
    ]
  },
  '04-02' : {
    'values' : [
    '7.7',
    '9.0',
    '11.',
    '8.9'
    ]
  },
  '04-03' : {
    'values' : [
    '5.7',
    '6.4',
    '15.',
    '12.'
    ]
  },
  '04-04' : {
    'values' : [
    '10.5',
    '10.1',
    '12.6',
    '10.3'
    ]
  },
  '04-05' : {
    'values' : [
    '7.8',
    '7.6',
    '11.',
    '11.',
    '7.4'
    ]
  },
  '04-06' : {
    'values' : [
    '4.8',
    '8.9',
    '11.',
    '8.7'
    ]
  },
  '04-07' : {
    'values' : [
      '7.9',
      '9.1',
      '10.',
      '7.9'
    ]
  },
 '04-08' : {
    'values' : [
    '4.5',
    '6.7',
    '15.',
    '14.'
    ]
  },
  '04-09' : {
    'values' : [
    '10.9',
    '10.7',
    '19.3',
    '12.0'
    ]
  },
  '04-10' : {
    'values' : [
    '6.1',
    '9.3',
    '9.7',
    '8.5'
    ]
  },
  '04-11' : {
    'values' : [
    '5.9',
    '8.5',
    '10.',
    '10.'
    ]
  },
  '04-12' : {
    'values' : [
    '9.2',
    '9.1',
    '11.',
    '9.5'
    ]
  },
  '04-13' : {
    'values' : [
    '5.4',
    '6.0',
    '10.'
    ]
  },
  '04-14' : {
    'values' : [
    '1.0',
    '1.3',
    '3.9',
    '2.3'
    ]
  },
  '04-15' : {
    'values' : [
    '2.6',
    '4.8',
    '8.5',
    '9.1',
    '7.6'
    ]
  },
  '04-16' : {
    'values' : [
    '7.9',
    '8.5',
    '8.8',
    '6.8'
    ]
  },
  '04-17' : {
    'values' : [
    '5.3',
    '6.3',
    '10.2',
    '8.3'
    ]
  },
  '04-18' : {
    'values' : [
    '8.1',
    '6.1'
    ]
  },
  '04-19' : {
    'values' : [
    '5.3',
    '6.7',
    '12.',
    '10.'
    ]
  },
  '04-20' : {
    'values' : [
    '10.1',
    '10.7',
    '15.2',
    '12.3'
    ]
  },
  '04-21' : {
    'values' : [
    '11.',
    '10.',
    '13.',
    '7.3',
    '7.4'
    ]
  },
  '04-22' : {
    'values' : [
    '6.1',
    '8.4',
    '8.1',
    '7.0'
    ]
  },
  '04-23' : {
    'values' : [
    '5.4',
    '9.8',
    '12.',
    '8.6'
    ]
  },
  '04-24' : {
    'values' : [
    '8.2',
    '6.5',
    '9.4',
    '3.9'
    ]
  },
  '04-25' : {
    'values' : [
    '0.5',
    '3.5',
    '6.6',
    '4.2'
    ]
  },
  '04-26' : {
    'values' : [
    '2.1',
    '2.0',
    '6.5',
    '6.1',
    '5.2'
    ]
  },
  '04-27' : {
    'values' : [
    '5.4',
    '9.6',
    '8.1',
    '5.6'
    ]
  },
  '04-28' : {
    'values' : [

    '4.3',
    '8.8',
    '8.7',
    '7.1'
    ]
  },
  '04-29' : {
    'values' : [
    '6.7',
    '9.6',
    '11.',
    '10.'
    ]
  },
  '04-30' : {
    'values' : [
    '7.8',
    '9.2',
    '9.8',
    '8.8'
    ]
  },
  '05-01': {
    'values' : [
    '9.0',
    '9.6',
    '10.',
    '9.2'
    ]
  },
  '05-02' : {
    'values' : [
    '8.5',
    '7.4',
    '10.',
    '9.1',
    '7.5'
    ]
  },
  '05-03' : {
    'values' : [
    '7.1',
    '11.',
    '11.',
    '7.8'
    ]
  },
  '05-04' : {
    'values' : [
    '7.6',
    '10.',
    '10.',
    '8.0'
    ]
  },
  '05-05' : {
    'values' : [
    '6.9',
    '10.',
    '12.',
    '8.9'
    ]
  },
  '05-06' : {
    'values' : [
    '7.2',
    '8.6',
    '9.8',
    '8.2'
    ]
  },
  '05-07' : {
    'values' : [
    '7.1',
    '7.9',
    '8.5',
    '9.0',
    '7.5'
    ]
  },
 '05-08' : {
    'values' : [
    '7.0',
    '8.1',
    '8.0',
    '6.9'
    ]
  },
  '05-09' : {
    'values' : [
    '6.0',
    '8.0',
    '13.',
    '8.3'
    ]
  },
  '05-10' : {
    'values' : [
    '5.7',
    '12.',
    '12.',
    '8.6'
    ]
  },
  '05-11' : {
    'values' : [
    '6.3',
    '13.',
    '12.',
    '8.8'
    ]
  },
  '05-12' : {
    'values' : [
    '8.6',
    '9.8',
    '11.',
    '10.'
    ]
  },
  '05-13' : {
    'values' : [
    '9.7',
    '11.',
    '11.',
    '15.',
    '11.'
    ]
  },
  '05-14' : {
    'values' : [
    '10.1',
    '15.0',
    '16.7',
    '11.3'
    ]
  },
  '05-15' : {
    'values' : [
    '9.6',
    '11.',
    '14.',
    '16.'
    ]
  },
  '05-16' : {
    'values' : [
    '16.0',
    '17.0',
    '18.2',
    '16.0'
    ]
  },
  '05-17' : {
    'values' : [

    '11.8',
    '13.2',
    '15.8',
    '14.0'
    ]
  },
  '05-18' : {
    'values' : [
    '8.8',
    '9.3',
    '15.',
    '13.',
    '11.'
    ]
  },
  '05-19' : {
    'values' : [
    '8.8',
    '10.',
    '10.',
    '8.6'
    ]
  },
  '05-20' : {
    'values' : [
    '8.3',
    '12.',
    '11.',
    '10.'
    ]
  },
  '05-21' : {
    'values' : [
    '9.7',
    '13.',
    '15.',
    '15.'
    ]
  },
  '05-22' : {
    'values' : [
    '11.3',
    '12.7',
    '18.0',
    '17.4'
    ]
  },
  '05-23' : {
    'values' : [
    '12.3',
    '12.2',
    '16.7',
    '16.5',
    '14.6'
    ]
  },
  '05-24' : {
    'values' : [
    '14.7',
    '20.5',
    '20.5',
    '16.5'
    ]
  },
  '05-25' : {
    'values' : [
    '12.9',
    '20.3',
    '20.7',
    '17.1'
    ]
  },
  '05-26' : {
    'values' : [
    '16.7',
    '18.6',
    '22.8',
    '20.5'
    ]
  },
  '05-27' : {
    'values' : [
    '15.2',
    '15.0',
    '19.5',
    '19.6',
    '15.9'
    ]
  },
  '05-28' : {
    'values' : [
    '14.5',
    '16.0',
    '20.6',
    '12.3'
    ]
  },
  '05-29' : {
    'values' : [
    '11.1',
    '10.5',
    '11.3',
    '11.3'
    ]
  },
  '05-30' : {
    'values' : [
    '12.0',
    '15.1',
    '17.5',
    '15.1'
    ]
  },
  '05-31' : {
    'values' : [
    '9.5',
    '10.',
    '15.',
    '13.',
    '14.'
    ]
  },
  '06-01': {
    'values' : [
    '13.6',
    '20.4',
    '20.4',
    '16.5'
    ]
  },
  '06-02' : {
    'values' : [
    '13.4',
    '13.5',
    '17.2',
    '14.9'
    ]
  },
  '06-03' : {
    'values' : [
    '9.6',
    '16.',
    '18.',
    '14.'
    ]
  },
  '06-04' : {
    'values' : [

    '10.1',
    '13.7',
    '16.2',
    '14.7'
    ]
  },
  '06-05' : {
    'values' : [
    '10.',
    '9.8',
    '12.',
    '14.'
    ]
  },
  '06-06' : {
    'values' : [
    '11.6',
    '11.5',
    '12.9',
    '11.3',
    '10.3'
    ]
  },
  '06-07' : {
    'values' : [
    '9.2',
    '12.',
    '15.',
    '12.'
    ]
  },
 '06-08' : {
    'values' : [
    '10.7',
    '12.5',
    '15.8',
    '15.0'
    ]
  },
  '06-09' : {
    'values' : [
    '12.7',
    '14.8',
    '17.8',
    '16.1'
    ]
  },
  '06-10' : {
    'values' : [
    '13.1',
    '11.6',
    '14.5',
    '19.5',
    '14.9'
    ]
  },
  '06-11' : {
    'values' : [
    '14.6',
    '16.4',
    '15.9',
    '13.7'
    ]
  },
  '06-12' : {
    'values' : [
    '12.7',
    '14.1',
    '15.5',
    '13.5'
    ]
  },
  '06-13' : {
    'values' : [
    '11.8',
    '15.1',
    '17.8',
    '16.7'
    ]
  },
  '06-14' : {
    'values' : [
    '13.2',
    '14.8',
    '21.4',
    '21.5'
    ]
  },
  '06-15' : {
    'values' : [
    '17.9',
    '14.8',
    '17.4',
    '16.1',
    '12.5'
    ]
  },
  '06-16' : {
    'values' : [
    '12.0',
    '15.3',
    '17.3',
    '17.5'
    ]
  },
  '06-17' : {
    'values' : [
    '16.1',
    '20.8',
    '25.3',
    '21.2'
    ]
  },
  '06-18' : {
    'values' : [
    '16.1',
    '18.3',
    '25.1',
    '23.9',
    '18.1'
    ]
  },
  '06-19' : {
    'values' : [
    '15.7',
    '23.3',
    '24.9',
    '14.1'
    ]
  },
  '06-20' : {
    'values' : [
    '13.2',
    '16.0'
    ]
  },
  '06-21' : {
    'values' : [
    '18.8'
    ]
  },
  '06-22' : {
    'values' : [
    '18.2',
    '14.6'
    ]
  },
  '06-23' : {
    'values' : [
    '15.4',
    '17.5',
    '14.8',
    '14.2'
    ]
  },
  '06-24' : {
    'values' : [
    '11.5',
    '15.4',
    '16.9',
    '13.9'
    ]
  },
  '06-25' : {
    'values' : [
    '11.3',
    '13.5',
    '16.3',
    '14.1'
    ]
  },
  '06-26' : {
    'values' : [
    '9.7',
    '12.',
    '14.',
    '13.'
    ]
  },
  '06-27' : {
    'values' : [
    '11.8',
    '10.9',
    '11.8',
    '11.3',
    '11.3'
    ]
  },
  '06-28' : {
    'values' : [
    '11.1',
    '12.3',
    '10.6',
    '10.1'
    ]
  },
  '06-29' : {
    'values' : [
    '10.4',
    '12.2',
    '12.8',
    '12.9'
    ]
  },
  '06-30' : {
    'values' : [
    '12.9',
    '13.2',
    '13.5',
    '12.2'
    ]
  },
  '07-01': {
    'values' : [
    '12.1',
    '14.3',
    '18.0',
    '15.7'
    ]
  },
  '07-02' : {
    'values' : [
    '12.1',
    '12.5',
    '15.9',
    '16.7',
    '13.7'
    ]
  },
  '07-03' : {
    'values' : [
    '13.9',
    '16.0',
    '17.3',
    '12.8'
    ]
  },
  '07-04' : {
    'values' : [
    '10.8',
    '11.1',
    '12.7',
    '12.1'
    ]
  },
  '07-05' : {
    'values' : [
    '11.2',
    '11.7',
    '13.5',
    '12.8'
    ]
  },
  '07-06' : {
    'values' : [
    '12.6',
    '13.6',
    '19.7',
    '18.5'
    ]
  },
  '07-07' : {
    'values' : [
    '15.6',
    '17.3',
    '19.1',
    '16.7'
    ]
  },
 '07-08' : {
    'values' : [
    '11.6',
    '10.7',
    '15.7',
    '17.5',
    '13.0'
    ]
  },
  '07-09' : {
    'values' : [
    '11.8',
    '19.7',
    '20.3',
    '15.5'
    ]
  },
  '07-10' : {
    'values' : [
    '13.5',
    '15.0',
    '14.7',
    '12.5'
    ]
  },
  '07-11' : {
    'values' : [
    '11.1',
    '13.5',
    '13.8',
    '13.1'
    ]
  },
  '07-12' : {
    'values' : [
    '10.1',
    '13.4',
    '16.1',
    '14.8'
    ]
  },
  '07-13' : {
    'values' : [
    '12.1',
    '13.1',
    '19.7',
    '17.4',
    '13.7'
    ]
  },
  '07-14' : {
    'values' : [
    '12.0',
    '16.5',
    '17.0',
    '12.8'
    ]
  },
  '07-15' : {
    'values' : [
    '13.5',
    '14.9',
    '19.3',
    '19.2'
    ]
  },
  '07-16' : {
    'values' : [
    '15.1',
    '15.0',
    '17.7',
    '17.2'
    ]
  },
  '07-17' : {
    'values' : [
    '12.9',
    '13.6',
    '19.4',
    '21.3',
    '16.1'
    ]
  },
  '07-18' : {
    'values' : [
    '13.6',
    '19.6',
    '18.8',
    '14.8'
    ]
  },
  '07-19' : {
    'values' : [
    '14.8',
    '15.3',
    '17.3',
    '16.5'
    ]
  },
  '07-20' : {
    'values' : [
    '15.8',
    '14.3',
    '14.6',
    '15.2'
    ]
  },
  '07-21' : {
    'values' : [
    '10.8',
    '13.4',
    '18.3',
    '16.8',
    '14.5'
    ]
  },
  '07-22' : {
    'values' : [
    '14.6',
    '15.1',
    '16.0',
    '14.8'
    ]
  },
  '07-23' : {
    'values' : [
    '12.5',
    '17.3',
    '15.1',
    '13.8'
    ]
  },
  '07-24' : {
    'values' : [
    '12.5',
    '12.5',
    '14.5',
    '13.6'
    ]
  },
  '07-25' : {
    'values' : [
    '12.7',
    '12.8',
    '15.3',
    '14.8'
    ]
  },
  '07-26' : {
    'values' : [
    '12.8',
    '13.5',
    '15.8',
    '19.1'
    ]
  },
  '07-27' : {
    'values' : [
    '11.8',
    '14.9',
    '14.5',
    '13.7'
    ]
  },
  '07-28' : {
    'values' : [
    '12.7',
    '16.6',
    '17.9',
    '14.1'
    ]
  },
  '07-29' : {
    'values' : [
    '12.9',
    '15.9',
    '18.8',
    '16.3'
    ]
  },
  '07-30' : {
    'values' : [
    '13.8',
    '13.5',
    '18.3',
    '16.6'
    ]
  },
  '07-31' : {
    'values' : [
    '13.8',
    '12.5',
    '17.3',
    '18.3',
    '14.1'
    ]
  },
  '08-01': {
    'values' : [
    '12.4',
    '16.6',
    '18.5',
    '13.8'
    ]
  },
  '08-02' : {
    'values' : [
    '12.4',
    '17.7',
    '15.0',
    '17.0'
    ]
  },
  '08-03' : {
    'values' : [
    '14.0',
    '14.4',
    '19.0',
    '16.5'
    ]
  },
  '08-04' : {
    'values' : [
    '14.7',
    '14.4',
    '17.5',
    '17.0',
    '12.5'
    ]
  },
  '08-05' : {
    'values' : [
    '11.8',
    '15.8',
    '13.3',
    '12.1'
    ]
  },
  '08-06' : {
    'values' : [
    '10.4',
    '17.7',
    '15.5',
    '14.1'
    ]
  },
  '08-07' : {
    'values' : [
    '12.0',
    '14.9',
    '17.6',
    '14.1'
    ]
  },
 '08-08' : {
    'values' : [
    '11.3',
    '14.3',
    '12.7',
    '12.0'
    ]
  },
  '08-09' : {
    'values' : [
    '13.2',
    '13.8',
    '15.9',
    '14.0'
    ]
  },
  '08-10' : {
    'values' : [
    '11.0',
    '12.1',
    '19.0',
    '18.0',
    '11.9'
    ]
  },
  '08-11' : {
    'values' : [
    '10.9',
    '15.7',
    '18.3',
    '16.6'
    ]
  },
  '08-12' : {
    'values' : [
    '13.0',
    '15.4',
    '14.4',
    '13.0'
    ]
  },
  '08-13' : {
    'values' : [
    '10.1',
    '13.2',
    '18.6',
    '14.8'
    ]
  },
  '08-14' : {
    'values' : [
    '13.3',
    '13.2',
    '18.7',
    '18.4'
    ]
  },
  '08-15' : {
    'values' : [
    '15.3',
    '14.9',
    '17.8',
    '18.1',
    '13.4'
    ]
  },
  '08-16' : {
    'values' : [
    '11.6',
    '17.5',
    '19.2',
    '17.7'
    ]
  },
  '08-17' : {
    'values' : [
    '14.5',
    '19.2',
    '21.5',
    '17.2'
    ]
  },
  '08-18' : {
    'values' : [
    '14.0',
    '13.4',
    '15.7',
    '14.6'
    ]
  },
  '08-19' : {
    'values' : [
    '13.3',
    '12.6',
    '16.0',
    '15.6',
    '13.4'
    ]
  },
  '08-20' : {
    'values' : [
    '12.6',
    '15.9',
    '17.3',
    '13.8'
    ]
  },
  '08-21' : {
    'values' : [
    '9.8',
    '15.',
    '18.',
    '16.'
    ]
  },
  '08-22' : {
    'values' : [
    '15.4',
    '16.5',
    '18.5',
    '17.1'
    ]
  },
  '08-23' : {
    'values' : [
    '15.5',
    '15.3',
    '18.5',
    '17.7'
    ]
  },
  '08-24' : {
    'values' : [
    '13.1',
    '14.2',
    '17.3',
    '17.7',
    '14.9'
    ]
  },
  '08-25' : {
    'values' : [
    '15.3',
    '18.4',
    '17.4',
    '14.7'
    ]
  },
  '08-26' : {
    'values' : [
    '13.6',
    '16.9',
    '17.8',
    '14.7'
    ]
  },
  '08-27' : {
    'values' : [
    '12.7',
    '14.4',
    '20.5',
    '18.3'
    ]
  },
  '08-28' : {
    'values' : [
    '16.8',
    '16.5',
    '19.5',
    '18.6',
    '17.5'
    ]
  },
  '08-29' : {
    'values' : [
    '13.5',
    '14.8',
    '13.7',
    '11.7'
    ]
  },
  '08-30' : {
    'values' : [

    '10.9',
    '14.7',
    '16.6',
    '13.0'
    ]
  },
  '08-31' : {
    'values' : [
    '10.7',
    '13.9',
    '16.8',
    '13.3'
    ]
  },
  '09-01': {
    'values' : [
    '10.6',
    '12.4',
    '15.6',
    '13.0'
    ]
  },
  '09-02' : {
    'values' : [
    '9.4',
    '11.',
    '17.',
    '15.'
    ]
  },
  '09-03' : {
    'values' : [
    '12.1',
    '11.8',
    '17.1',
    '15.3'
    ]
  },
  '09-04' : {
    'values' : [
    '13.6',
    '12.9',
    '16.9',
    '18.3',
    '15.6'
    ]
  },
  '09-05' : {
    'values' : [
    '15.3',
    '14.0',
    '16.3',
    '12.6'
    ]
  },
  '09-06' : {
    'values' : [
    '11.0',
    '14.5',
    '14.9',
    '12.9'
    ]
  },
  '09-07' : {
    'values' : [
    '12.1',
    '14.6',
    '15.5',
    '13.5'
    ]
  },
 '09-08' : {
    'values' : [
    '13.0',
    '12.5',
    '15.2',
    '12.3'
    ]
  },
  '09-09' : {
    'values' : [
    '10.8',
    '13.1',
    '16.1',
    '12.7'
    ]
  },
  '09-10' : {
    'values' : [
    '11.4',
    '11.0',
    '15.2',
    '11.5'
    ]
  },
  '09-11' : {
    'values' : [
    '9.7',
    '10.',
    '15.',
    '14.',
    '11.'
    ]
  },
  '09-12' : {
    'values' : [
    '11.2',
    '14.3',
    '13.1',
    '10.0'
    ]
  },
  '09-13' : {
    'values' : [
    '8.4',
    '11.',
    '11.',
    '9.2'
    ]
  },
  '09-14' : {
    'values' : [
    '8.7',
    '12.',
    '13.',
    '10.'
    ]
  },
  '09-15' : {
    'values' : [
    '10.1',
    '10.7',
    '13.9',
    '11.2'
    ]
  },
  '09-16' : {
    'values' : [
    '9.9',
    '9.2',
    '11.',
    '10.'
    ]
  },
  '09-17' : {
    'values' : [
    '10.2',
    '11.1',
    '13.6',
    '12.7',
    '11.5'
    ]
  },
  '09-18' : {
    'values' : [
    '9.2',
    '12.',
    '10.',
    '8.6'
    ]
  },
  '09-19' : {
    'values' : [
    '6.5',
    '11.',
    '15.',
    '10.'
    ]
  },
  '09-20' : {
    'values' : [
    '9.0',
    '14.',
    '17.',
    '15.'
    ]
  },
  '09-21' : {
    'values' : [
    '14.5',
    '14.5',
    '14.2',
    '12.1'
    ]
  },
  '09-22' : {
    'values' : [
    '9.0',
    '8.3',
    '13.',
    '12.'
    ]
  },
  '09-23' : {
    'values' : [
    '11.6',
    '11.6',
    '16.1',
    '15.6',
    '15.0'
    ]
  },
  '09-24' : {
    'values' : [
    '12.2',
    '16.0',
    '15.7',
    '13.6'
    ]
  },
  '09-25' : {
    'values' : [
    '12.9',
    '14.3',
    '15.1',
    '13.6'
    ]
  },
  '09-26' : {
    'values' : [
    '12.3',
    '13.0',
    '15.8',
    '12.2'
    ]
  },
  '09-27' : {
    'values' : [
    '13.1',
    '13.2',
    '15.0',
    '13.6'
    ]
  },
  '09-28' : {
    'values' : [
    '13.5',
    '19.3',
    '15.5'
    ]
  },
  '09-29' : {
    'values' : [
    '13.0',
    '12.6',
    '13.2',
    '14.3',
    '10.5'
    ]
  },
  '09-30' : {
    'values' : [
    '9.0',
    '12.',
    '12.',
    '8.5'
    ]
  },
  '10-01': {
    'values' : [
    '8.8',
    '12.',
    '16.',
    '14.'
    ]
  },
  '10-02' : {
    'values' : [
    '12.4',
    '13.7',
    '13.8',
    '11.3'
    ]
  },
  '10-03' : {
    'values' : [
    '10.5',
    '10.5',
    '12.2',
    '10.5'
    ]
  },
  '10-04' : {
    'values' : [
    '10.9',
    '11.8',
    '11.5',
    '11.7',
    '12.4'
    ]
  },
  '10-05' : {
    'values' : [
    '8.1',
    '12.',
    '13.',
    '9.4'
    ]
  },
  '10-06' : {
    'values' : [
    '6.9',
    '9.5',
    '11.',
    '10.'
    ]
  },
  '10-07' : {
    'values' : [
    '14.0',
    '13.0',
    '14.0',
    '12.3'
    ]
  },
 '10-08' : {
    'values' : [
    '11.0',
    '11.5',
    '15.0',
    '13.4'
    ]
  },
  '10-09' : {
    'values' : [
    '12.5',
    '12.0',
    '14.6',
    '13.6'
    ]
  },
  '10-10' : {
    'values' : [
    '13.0',
    '12.5',
    '13.4',
    '13.6'
    ]
  },
  '10-11' : {
    'values' : [
    '13.5',
    '15.7',
    '13.8',
    '14.9',
    '10.9'
    ]
  },
  '10-12' : {
    'values' : [
    '9.9',
    '11.',
    '13.',
    '13.'
    ]
  },
  '10-13' : {
    'values' : [
    '16.4',
    '18.1',
    '18.8',
    '17.4'
    ]
  },
  '10-14' : {
    'values' : [
    '14.0',
    '13.4',
    '16.6',
    '16.2'
    ]
  },
  '10-15' : {
    'values' : [
    '14.6',
    '14.6',
    '17.3',
    '15.6',
    '14.9'
    ]
  },
  '10-16' : {
    'values' : [
    '11.9',
    '12.9',
    '16.9',
    '13.9'
    ]
  },
  '10-17' : {
    'values' : [
    '12.7',
    '12.4',
    '12.7',
    '11.0'
    ]
  },
  '10-18' : {
    'values' : [
    '9.9',
    '10.',
    '11.',
    '10.'
    ]
  },
  '10-19' : {
    'values' : [
    '11.0',
    '10.5',
    '12.8',
    '12.4'
    ]
  },
  '10-20' : {
    'values' : [
    '13.1',
    '12.7',
    '14.2',
    '13.3'
    ]
  },
  '10-21' : {
    'values' : [
    '10.3',
    '11.5',
    '12.8',
    '11.6',
    '11.2'
    ]
  },
  '10-22' : {
    'values' : [
    '10.',
    '10.',
    '11.',
    '8.6'
    ]
  },
  '10-23' : {
    'values' : [

    '8.0',
    '9.7',
    '13.',
    '14.'
    ]
  },
  '10-24' : {
    'values' : [
    '12.2',
    '12.1',
    '16.8',
    '13.0'
    ]
  },
  '10-25' : {
    'values' : [
    '10.3',
    '11.0',
    '13.1',
    '11.8'
    ]
  },
  '10-26' : {
    'values' : [
    '11.5',
    '11.4',
    '12.3',
    '11.3'
    ]
  },
  '10-27' : {
    'values' : [
    '9.1',
    '6.7',
    '10.',
    '10.',
    '9.1'
    ]
  },
  '10-28' : {
    'values' : [
    '9.8',
    '12.',
    '13.',
    '13.'
    ]
  },
  '10-29' : {
    'values' : [
    '11.',
    '6.9',
    '8.5',
    '6.8'
    ]
  },
  '10-30' : {
    'values' : [
    '4.0',
    '3.5',
    '7.5',
    '8.3',
    '8.0'
    ]
  },
  '10-31' : {
    'values' : [
    '11.0',
    '12.9',
    '13.7',
    '13.6'
    ]
  },
  '11-01': {
    'values' : [
    '12.7',
    '12.2',
    '12.8',
    '11.0'
    ]
  },
  '11-02' : {
    'values' : [
    '10.',
    '7.5',
    '9.7',
    '8.1'
    ]
  },
  '11-03' : {
    'values' : [
    '6.7',
    '7.1',
    '9.3',
    '9.5'
    ]
  },
  '11-04' : {
    'values' : [
    '8.9',
    '8.3',
    '9.3',
    '7.1',
    '4.8'
    ]
  },
  '11-05' : {
    'values' : [

    '4.0',
    '6.5',
    '6.7',
    '3.5'
    ]
  },
  '11-06' : {
    'values' : [
    '2.0',
    '3.4',
    '8.9',
    '8.2'
    ]
  },
  '11-07' : {
    'values' : [
    '8.2',
    '9.9',
    '7.9',
    '7.3'
    ]
  },
 '11-08' : {
    'values' : [
    '4.4',
    '3.3',
    '8.1',
    '7.1'
    ]
  },
  '11-09' : {
    'values' : [
    '10.',
    '12.',
    '10.',
    '8.4',
    '8.8'
    ]
  },
  '11-10' : {
    'values' : [
    '8.9',
    '7.2',
    '6.4',
    '5.4'
    ]
  },
  '11-11' : {
    'values' : [
    '5.2',
    '4.3',
    '6.5',
    '3.5'
    ]
  },
  '11-12' : {
    'values' : [
    '2.9',
    '2.7',
    '6.5',
    '3.8'
    ]
  },
  '11-13' : {
    'values' : [
    '2.7',
    '2.0',
    '4.3',
    '5.7'
    ]
  },
  '11-14' : {
    'values' : [
    '10.',
    '11.',
    '11.',
    '9.5'
    ]
  },
  '11-15' : {
    'values' : [
    '8.3',
    '5.4',
    '7.4',
    '7.4',
    '7.4'
    ]
  },
  '11-16' : {
    'values' : [

    '9.8',
    '9.1',
    '7.1',
    '4.9'
    ]
  },
  '11-17' : {
    'values' : [
    '3.7',
    '6.1',
    '8.1',
    '7.3'
    ]
  },
  '11-18' : {
    'values' : [
    '7.5',
    '6.3',
    '6.5',
    '3.7'
    ]
  },
  '11-19' : {
    'values' : [
    '2.2',
    '1.7',
    '4.9',
    '4.1'
    ]
  },
  '11-20' : {
    'values' : [
    '4.0',
    '4.6',
    '10.',
    '11.',
    '8.4'
    ]
  },
  '11-21' : {
    'values' : [
    '8.9',
    '10.',
    '12.',
    '13.'
    ]
  },
  '11-22' : {
    'values' : [
    '11.',
    '10.',
    '13.',
    '8.7'
    ]
  },
  '11-23' : {
    'values' : [
    '7.7',
    '4.9',
    '4.6',
    '4.5'
    ]
  },
  '11-24' : {
    'values' : [
    '2.3',
    '1.8',
    '5.4',
    '3.5'
    ]
  },
  '11-25' : {
    'values' : [
    '1.1',
    '1.9',
    '3.8',
    '3.9',
    '3.6'
    ]
  },
  '11-26' : {
    'values' : [
    '2.5',
    '3.3',
    '4.7',
    '5.2'
    ]
  },
  '11-27' : {
    'values' : [
    '7.8',
    '5.9',
    '5.0',
    '4.0'
    ]
  },
  '11-28' : {
    'values' : [
    '3.0',
    '1.9',
    '4.5',
    '3.5'
    ]
  },
  '11-29' : {
    'values' : [
    '2.5',
    '2.4',
    '3.9',
    '2.1'
    ]
  },
  '11-30' : {
    'values' : [
    '1.2',
    '0.8',
    '1.0',
    '1.1',
    '2.1'
    ]
  },
  '12-01': {
    'values' : [
    '2.5',
    '3.2',
    '3.2',
    '3.2'
    ]
  },
  '12-02' : {
    'values' : [

    '3.9',
    '5.0',
    '6.8',
    '6.7'
    ]
  },
  '12-03' : {
    'values' : [
    '7.5',
    '7.6',
    '7.9',
    '4.6'
    ]
  },
  '12-04' : {
    'values' : [
    '4.4',
    '6.9',
    '8.5',
    '7.7'
    ]
  },
  '12-05' : {
    'values' : [
    '7.4',
    '7.4',
    '8.0',
    '7.9',
    '8.5'
    ]
  },
  '12-06' : {
    'values' : [
    '9.7',
    '10.',
    '11.',
    '10.'
    ]
  },
  '12-07' : {
    'values' : [
    '13.',
    '7.6',
    '4.7',
    '2.0'
    ]
  },
 '12-08' : {
    'values' : [
    '1.1',
    '1.3'
    ]
  },
  '12-09' : {
    'values' : [
    '0.3',
    '0.1',
    '1.4'
    ]
  },
  '12-10' : {
    'values' : [
    '0.4'
    ]
  },
  '12-11' : {
    'values' : [
    '0.7',
    '0.6'
    ]
  },
  '12-12' : {
    'values' : [
    '0.0',
    '3.7',
    '2.4'
    ]
  },
  '12-13' : {
    'values' : [
    '5.2',
    '5.6',
    '4.7',
    '2.5'
    ]
  },
  '12-14' : {
    'values' : [
    '2.1',
    '2.6',
    '4.4',
    '3.2',
    '1.3'
    ]
  },
  '12-15' : {
    'values' : [
    '2.7',
    '4.0',
    '3.4',
    '1.5'
    ]
  },
  '12-16' : {
    'values' : [
    '1.2',
    '0.7',
    '1.6',
    '0.0'
    ]
  },
  '12-17' : {
    'values' : [
    '0.0',
    '3.2',
    '9.2',
    '4.3'
    ]
  },
  '12-18' : {
    'values' : [
    '2.9',
    '3.8',
    '5.8',
    '6.3'
    ]
  },
  '12-19' : {
    'values' : [
    '6.1',
    '7.7',
    '10.',
    '8.3'
    ]
  },
  '12-20' : {
    'values' : [
    '7.8',
    '11.',
    '11.',
    '9.2'
    ]
  },
  '12-21' : {
    'values' : [
    '8.4',
    '7.5',
    '9.2',
    '9.1',
    '8.0'
    ]
  },
  '12-22' : {
    'values' : [
    '7.5',
    '7.8',
    '9.8',
    '10.'
    ]
  },
  '12-23' : {
    'values' : [
    '9.5',
    '10.',
    '12.',
    '11.'
    ]
  },
  '12-24' : {
    'values' : [
    '10.6',
    '11.2',
    '12.4',
    '11.0'
    ]
  },
  '12-25' : {
    'values' : [
    '11.',
    '10.',
    '11.',
    '6.2'
    ]
  },
  '12-26' : {
    'values' : [
    '2.5',
    '3.2',
    '3.6',
    '2.1',
    '0.4'
    ]
  },
  '12-27' : {
    'values' : [
    '1.4',
    '1.3',
    '1.4',
    '0.5'
    ]
  },
  '12-28' : {
    'values' : [
    '0.9',
    '2.0',
    '2.4',
    '0.9'
    ]
  },
  '12-29' : {
    'values' : [
    '0.0',
    '0.7',
    '0.8'
    ]
  },
  '12-30' : {
    'values' : [
    '4.7',
    '1.2',
    '1.7',
    '6.9',
    '6.5'
    ]
  },
  '12-31' : {
    'values' : [
    '6.0',
    '7.7',
    '7.1',
    '5.8'
    ]
  }
}
  console.log(temperatureList)
  console.log(temperatureAverage)
  
  controller.calculateDate = (date) => {


  } 

  return controller
})()
