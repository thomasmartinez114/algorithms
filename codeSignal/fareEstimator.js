// https://app.codesignal.com/company-challenges/uber/HNQwGHfKAoYsz9KX6

function fareEstimator(ride_time, ride_distance, cost_per_minute, cost_per_mile) {
  // input int for ride_time
  // input int for ride_distance

  // ((cost per min * ride time) + (cost per mile * ride dist))
  // cost per min & cost per mile depend on car type

  let ridePrice = [];
  let ride_time = 30;
  let ride_distance = 7;
  let cost_per_minute = 10;
  let cost_per_mile = 1;

  let fare = cost_per_minute * ride_time + cost_per_mile * ride_distance;
  console.log(fare);

  for (let carMin = 0; carMin < cost_per_minute.length; carMin++) {
    console.log(cost_per_minute[carMin]);
  }

  for (let carMil = 0; carMil < cost_per_mile.length; carMil++) {
    let mileage = cost_per_mile[carMil];
    console.log(mileage);
  }
}

fareEstimator(10, 5, 1.5, 1.0);
