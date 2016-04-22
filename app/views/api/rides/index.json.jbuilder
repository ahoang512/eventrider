json.array!(@rides) do |ride|
  json.id ride.id
  json.seats ride.seats
  json.photo ride.user.photo
  json.city ride.city
end
