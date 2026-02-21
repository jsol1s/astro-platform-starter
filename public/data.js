// PolyCribs shared data (static for now).
// Later, replace this with a real API without changing your UI much.
window.POLYCRIBS = window.POLYCRIBS || {};

POLYCRIBS.PROPERTIES = [
  {
    "id": "p01",
    "name": "Mustang Village",
    "area": "calpoly",
    "price": 1850,
    "beds": 2,
    "baths": 2,
    "rating": 4.5,
    "reviews": 24,
    "address": "120 Chorro St, San Luis Obispo, CA"
  },
  {
    "id": "p02",
    "name": "Downtown Lofts",
    "area": "downtown",
    "price": 2450,
    "beds": 1,
    "baths": 1,
    "rating": 4.3,
    "reviews": 18,
    "address": "945 Marsh St, San Luis Obispo, CA"
  },
  {
    "id": "p03",
    "name": "Laguna Lake Townhomes",
    "area": "laguna",
    "price": 3100,
    "beds": 3,
    "baths": 2,
    "rating": 3.8,
    "reviews": 15,
    "address": "518 Broad St, San Luis Obispo, CA"
  },
  {
    "id": "p04",
    "name": "Foothill Gardens",
    "area": "calpoly",
    "price": 2100,
    "beds": 2,
    "baths": 1,
    "rating": 3.6,
    "reviews": 12,
    "address": "455 Santa Rosa St, San Luis Obispo, CA"
  },
  {
    "id": "p05",
    "name": "Chorro Street Studios",
    "area": "downtown",
    "price": 1650,
    "beds": 0,
    "baths": 1,
    "rating": 5.0,
    "reviews": 9,
    "address": "455 Foothill Blvd, San Luis Obispo, CA"
  },
  {
    "id": "p06",
    "name": "Broad Street Commons",
    "area": "broad",
    "price": 1995,
    "beds": 2,
    "baths": 2,
    "rating": 2.0,
    "reviews": 11,
    "address": "455 Chorro St, San Luis Obispo, CA"
  },
  {
    "id": "p07",
    "name": "Johnson Ave Flats",
    "area": "johnson",
    "price": 2300,
    "beds": 2,
    "baths": 2,
    "rating": 4.1,
    "reviews": 7,
    "address": "945 Marsh St, San Luis Obispo, CA"
  },
  {
    "id": "p08",
    "name": "Irish Hills Cottages",
    "area": "irish",
    "price": 2800,
    "beds": 2,
    "baths": 1,
    "rating": 4.0,
    "reviews": 6,
    "address": "455 Marsh St, San Luis Obispo, CA"
  },
  {
    "id": "p09",
    "name": "Airport View Apartments",
    "area": "airport",
    "price": 2150,
    "beds": 2,
    "baths": 1,
    "rating": 3.7,
    "reviews": 5,
    "address": "455 Broad St, San Luis Obispo, CA"
  },
  {
    "id": "p10",
    "name": "Marsh Street Suites",
    "area": "downtown",
    "price": 2550,
    "beds": 2,
    "baths": 2,
    "rating": 4.2,
    "reviews": 10,
    "address": "340 Grand Ave, San Luis Obispo, CA"
  },
  {
    "id": "p11",
    "name": "Laguna Lake Condos",
    "area": "laguna",
    "price": 2250,
    "beds": 1,
    "baths": 1,
    "rating": 3.9,
    "reviews": 8,
    "address": "602 Johnson Ave, San Luis Obispo, CA"
  },
  {
    "id": "p12",
    "name": "Highland Dr Rooms",
    "area": "calpoly",
    "price": 1400,
    "beds": 1,
    "baths": 1,
    "rating": 3.5,
    "reviews": 4,
    "address": "518 Santa Rosa St, San Luis Obispo, CA"
  },
  {
    "id": "p13",
    "name": "Broad Street Bungalows",
    "area": "broad",
    "price": 2950,
    "beds": 3,
    "baths": 2,
    "rating": 4.0,
    "reviews": 3,
    "address": "715 Higuera St, San Luis Obispo, CA"
  },
  {
    "id": "p14",
    "name": "Johnson Ave Courtyard",
    "area": "johnson",
    "price": 1750,
    "beds": 1,
    "baths": 1,
    "rating": 3.8,
    "reviews": 6,
    "address": "602 Highland Dr, San Luis Obispo, CA"
  },
  {
    "id": "p15",
    "name": "Irish Hills Ridge",
    "area": "irish",
    "price": 3500,
    "beds": 4,
    "baths": 3,
    "rating": 4.4,
    "reviews": 5,
    "address": "602 Broad St, San Luis Obispo, CA"
  }
];

POLYCRIBS.REVIEWS = [
  {
    "id": "p01-r1",
    "property_id": "p01",
    "rating": 4,
    "text": "Noise issues on weekends, but landlord is communicative.",
    "author": "Verified Tenant",
    "date": "1 week ago",
    "verified": false
  },
  {
    "id": "p01-r2",
    "property_id": "p01",
    "rating": 5,
    "text": "Clean unit on move-in and quick repairs.",
    "author": "Cal Poly Student",
    "date": "2 weeks ago",
    "verified": true
  },
  {
    "id": "p01-r3",
    "property_id": "p01",
    "rating": 4,
    "text": "Quiet neighborhood and friendly neighbors.",
    "author": "Cal Poly Student",
    "date": "5 days ago",
    "verified": true
  },
  {
    "id": "p02-r1",
    "property_id": "p02",
    "rating": 5,
    "text": "Great value for the location. Would rent again.",
    "author": "Cal Poly Student",
    "date": "2 days ago",
    "verified": false
  },
  {
    "id": "p02-r2",
    "property_id": "p02",
    "rating": 4,
    "text": "Parking is tight, but overall solid place.",
    "author": "SLO Renter",
    "date": "1 month ago",
    "verified": true
  },
  {
    "id": "p02-r3",
    "property_id": "p02",
    "rating": 4,
    "text": "Felt overpriced for what you get.",
    "author": "Cal Poly Student",
    "date": "1 month ago",
    "verified": false
  },
  {
    "id": "p03-r1",
    "property_id": "p03",
    "rating": 5,
    "text": "Quiet neighborhood and friendly neighbors.",
    "author": "SLO Renter",
    "date": "1 month ago",
    "verified": true
  },
  {
    "id": "p03-r2",
    "property_id": "p03",
    "rating": 4,
    "text": "Responsive maintenance and fair deposit return.",
    "author": "Verified Tenant",
    "date": "2 weeks ago",
    "verified": false
  },
  {
    "id": "p03-r3",
    "property_id": "p03",
    "rating": 5,
    "text": "Responsive maintenance and fair deposit return.",
    "author": "Cal Poly Student",
    "date": "5 days ago",
    "verified": false
  },
  {
    "id": "p04-r1",
    "property_id": "p04",
    "rating": 2,
    "text": "Felt overpriced for what you get.",
    "author": "Recent Tenant",
    "date": "1 month ago",
    "verified": true
  },
  {
    "id": "p04-r2",
    "property_id": "p04",
    "rating": 4,
    "text": "Quiet neighborhood and friendly neighbors.",
    "author": "Former Tenant",
    "date": "2 weeks ago",
    "verified": true
  },
  {
    "id": "p04-r3",
    "property_id": "p04",
    "rating": 4,
    "text": "Parking is tight, but overall solid place.",
    "author": "Former Tenant",
    "date": "2 weeks ago",
    "verified": true
  },
  {
    "id": "p05-r1",
    "property_id": "p05",
    "rating": 5,
    "text": "Great value for the location. Would rent again.",
    "author": "Verified Tenant",
    "date": "1 month ago",
    "verified": true
  },
  {
    "id": "p05-r2",
    "property_id": "p05",
    "rating": 4,
    "text": "Quiet neighborhood and friendly neighbors.",
    "author": "SLO Renter",
    "date": "2 days ago",
    "verified": false
  },
  {
    "id": "p05-r3",
    "property_id": "p05",
    "rating": 3,
    "text": "Noise issues on weekends, but landlord is communicative.",
    "author": "Former Tenant",
    "date": "5 days ago",
    "verified": true
  },
  {
    "id": "p06-r1",
    "property_id": "p06",
    "rating": 2,
    "text": "Management was slow to fix hot water issues.",
    "author": "Recent Tenant",
    "date": "2 days ago",
    "verified": false
  },
  {
    "id": "p06-r2",
    "property_id": "p06",
    "rating": 5,
    "text": "Great value for the location. Would rent again.",
    "author": "Verified Tenant",
    "date": "2 days ago",
    "verified": false
  },
  {
    "id": "p06-r3",
    "property_id": "p06",
    "rating": 2,
    "text": "Management was slow to fix hot water issues.",
    "author": "Verified Tenant",
    "date": "2 days ago",
    "verified": false
  },
  {
    "id": "p07-r1",
    "property_id": "p07",
    "rating": 3,
    "text": "Noise issues on weekends, but landlord is communicative.",
    "author": "Former Tenant",
    "date": "5 days ago",
    "verified": true
  },
  {
    "id": "p07-r2",
    "property_id": "p07",
    "rating": 3,
    "text": "Noise issues on weekends, but landlord is communicative.",
    "author": "SLO Renter",
    "date": "2 weeks ago",
    "verified": false
  },
  {
    "id": "p07-r3",
    "property_id": "p07",
    "rating": 2,
    "text": "Felt overpriced for what you get.",
    "author": "Cal Poly Student",
    "date": "1 month ago",
    "verified": true
  },
  {
    "id": "p08-r1",
    "property_id": "p08",
    "rating": 4,
    "text": "Clean unit on move-in and quick repairs.",
    "author": "Recent Tenant",
    "date": "5 days ago",
    "verified": true
  },
  {
    "id": "p08-r2",
    "property_id": "p08",
    "rating": 4,
    "text": "Great value for the location. Would rent again.",
    "author": "Recent Tenant",
    "date": "1 week ago",
    "verified": true
  },
  {
    "id": "p08-r3",
    "property_id": "p08",
    "rating": 4,
    "text": "Felt overpriced for what you get.",
    "author": "Verified Tenant",
    "date": "2 days ago",
    "verified": true
  },
  {
    "id": "p09-r1",
    "property_id": "p09",
    "rating": 3,
    "text": "Quiet neighborhood and friendly neighbors.",
    "author": "Former Tenant",
    "date": "1 month ago",
    "verified": false
  },
  {
    "id": "p09-r2",
    "property_id": "p09",
    "rating": 3,
    "text": "Parking is tight, but overall solid place.",
    "author": "Verified Tenant",
    "date": "5 days ago",
    "verified": false
  },
  {
    "id": "p09-r3",
    "property_id": "p09",
    "rating": 5,
    "text": "Parking is tight, but overall solid place.",
    "author": "Verified Tenant",
    "date": "1 week ago",
    "verified": true
  },
  {
    "id": "p10-r1",
    "property_id": "p10",
    "rating": 4,
    "text": "Responsive maintenance and fair deposit return.",
    "author": "Recent Tenant",
    "date": "5 days ago",
    "verified": false
  },
  {
    "id": "p10-r2",
    "property_id": "p10",
    "rating": 5,
    "text": "Parking is tight, but overall solid place.",
    "author": "Recent Tenant",
    "date": "2 days ago",
    "verified": false
  },
  {
    "id": "p10-r3",
    "property_id": "p10",
    "rating": 5,
    "text": "Responsive maintenance and fair deposit return.",
    "author": "Former Tenant",
    "date": "2 days ago",
    "verified": true
  },
  {
    "id": "p11-r1",
    "property_id": "p11",
    "rating": 4,
    "text": "Parking is tight, but overall solid place.",
    "author": "Verified Tenant",
    "date": "1 week ago",
    "verified": true
  },
  {
    "id": "p11-r2",
    "property_id": "p11",
    "rating": 3,
    "text": "Noise issues on weekends, but landlord is communicative.",
    "author": "Verified Tenant",
    "date": "1 month ago",
    "verified": true
  },
  {
    "id": "p11-r3",
    "property_id": "p11",
    "rating": 4,
    "text": "Responsive maintenance and fair deposit return.",
    "author": "SLO Renter",
    "date": "5 days ago",
    "verified": true
  },
  {
    "id": "p12-r1",
    "property_id": "p12",
    "rating": 4,
    "text": "Felt overpriced for what you get.",
    "author": "Former Tenant",
    "date": "5 days ago",
    "verified": false
  },
  {
    "id": "p12-r2",
    "property_id": "p12",
    "rating": 3,
    "text": "Quiet neighborhood and friendly neighbors.",
    "author": "Recent Tenant",
    "date": "5 days ago",
    "verified": true
  },
  {
    "id": "p12-r3",
    "property_id": "p12",
    "rating": 4,
    "text": "Great value for the location. Would rent again.",
    "author": "Former Tenant",
    "date": "2 weeks ago",
    "verified": false
  },
  {
    "id": "p13-r1",
    "property_id": "p13",
    "rating": 1,
    "text": "Management was slow to fix hot water issues.",
    "author": "SLO Renter",
    "date": "2 weeks ago",
    "verified": false
  },
  {
    "id": "p13-r2",
    "property_id": "p13",
    "rating": 5,
    "text": "Great value for the location. Would rent again.",
    "author": "SLO Renter",
    "date": "1 week ago",
    "verified": true
  },
  {
    "id": "p13-r3",
    "property_id": "p13",
    "rating": 5,
    "text": "Responsive maintenance and fair deposit return.",
    "author": "Verified Tenant",
    "date": "1 week ago",
    "verified": false
  },
  {
    "id": "p14-r1",
    "property_id": "p14",
    "rating": 5,
    "text": "Responsive maintenance and fair deposit return.",
    "author": "Recent Tenant",
    "date": "5 days ago",
    "verified": true
  },
  {
    "id": "p14-r2",
    "property_id": "p14",
    "rating": 3,
    "text": "Felt overpriced for what you get.",
    "author": "Cal Poly Student",
    "date": "1 month ago",
    "verified": false
  },
  {
    "id": "p14-r3",
    "property_id": "p14",
    "rating": 2,
    "text": "Management was slow to fix hot water issues.",
    "author": "SLO Renter",
    "date": "2 weeks ago",
    "verified": false
  },
  {
    "id": "p15-r1",
    "property_id": "p15",
    "rating": 3,
    "text": "Parking is tight, but overall solid place.",
    "author": "Former Tenant",
    "date": "5 days ago",
    "verified": false
  },
  {
    "id": "p15-r2",
    "property_id": "p15",
    "rating": 3,
    "text": "Felt overpriced for what you get.",
    "author": "Recent Tenant",
    "date": "5 days ago",
    "verified": false
  },
  {
    "id": "p15-r3",
    "property_id": "p15",
    "rating": 5,
    "text": "Clean unit on move-in and quick repairs.",
    "author": "Former Tenant",
    "date": "2 weeks ago",
    "verified": true
  }
];
