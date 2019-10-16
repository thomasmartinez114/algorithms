// https://app.codesignal.com/company-challenges/uber/HNQwGHfKAoYsz9KX6

function fareEstimator() {
  // input int for ride_time
  // input int for ride_distance

  // ((cost per min * ride time) + (cost per mile * ride dist))

  let ridePrice = [];
  let ride_time = 30;
  let ride_distance = 7;
  let cost_per_minute = 10;
  let cost_per_mile = 1;

  let fare = cost_per_minute * ride_time + cost_per_mile * ride_distance;
  console.log(`Total cost for ride is: $${fare}`);
}

fareEstimator();
