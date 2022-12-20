pipeline = [
    {"$set": {
       "ride_id": fakePaddedNumberAsText(16),                                                 // 16 digit textual ride id number
       "bike_id": fakePaddedNumberAsText(8),                                                  // 8 digit bike id number
       "bike_type": fakeValueFromList(["classic","eletric"]),
       "member": fakeBoolean(80),                                                             // 80% time True, rest of time False
       "name.first": fakeFirstName(),                                                         // Random first name
       "name.last": fakeLastName(),
       "gender": fakeValueFromList(["0","1","2","3"]),                                                           // Random last name
       "trip_duration_minutes":fakeNumberBounded(1,500),                                       // Random number between 1-500 minutes
       "start_station_id": fakeNumberBounded(1,5000),
       "end_station_id": fakeNumberBounded(1,5000)
    }},
]