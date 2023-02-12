function describe_city(city, country) {
    if (city === void 0) { city = "Karachi"; }
    if (country === void 0) { country = "Pakistan"; }
    console.log(city + " is in " + country);
}
describe_city("Karachi", "Pakistan");
describe_city("Madina", "Saudi Arabia");
describe_city("Isambul", "Turkey");
