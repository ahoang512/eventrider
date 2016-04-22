# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

anthony = User.create(fb_id: "10153429560556872", name: "Anthony Hoang");

event1 = Event.create(name: 'Outside Lands',
                      location: "San Francisco",
                      date: 'August 5-7, 2016',
image_url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1459892755/osl_vsjvtd.jpg"
)
event2 = Event.create(name: 'Electric Daisy Carnival',
                      location: "Las Vegas",
                      date: 'June 17-19, 2016',
image_url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1459893106/edc_oddr9p.jpg"
)

event3 = Event.create(name: 'G-Eazy & Logic',
                      location: "Mountain View",
                      date: 'July 8, 2016',
image_url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1460504526/13001159_992850854116676_5923063616234206268_n_xopt9o.jpg"
)

event4 = Event.create(name: 'Copa America : USA vs Colombia',
                      location: "Santa Clara",
                      date: 'June 3, 2016',
image_url: "http://res.cloudinary.com/dayd3nm4v/image/upload/v1460566845/Copa-US-Colombia-2-650x326_nkkco2.png"
)

ride1 = Ride.create(user_id: 1, event_id: event1.id, seats: 10);
ride2 = Ride.create(user_id: 1, event_id: event2.id, seats: 7);
ride3 = Ride.create(user_id: 1, event_id: event2.id, seats: 6);
ride4 = Ride.create(user_id: 1, event_id: event2.id, seats: 3);
ride5 = Ride.create(user_id: 1, event_id: event2.id, seats: 5);
ride6 = Ride.create(user_id: 1, event_id: event2.id, seats: 4);
