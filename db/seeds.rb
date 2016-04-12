# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

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
