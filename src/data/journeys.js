// Curated journeys — packaged, multi-day trips that can be browsed and
// booked. This is the "product catalogue" for the /trips marketplace,
// journey detail pages, and the homepage's Curated Journeys section.
// Distinct from src/data/bookings.js, which holds a signed-in traveller's
// own confirmed bookings.

export const journeys = [
  {
    id: 'kashmir-escape',
    name: 'The Kashmir Escape',
    destinationId: 'kashmir',
    destination: 'Kashmir',
    region: 'North India',
    experience: 'Mountains',
    image: '/image/kashmir.jpg',
    duration: '6 Days · 5 Nights',
    hotel: '4★ Houseboat & Srinagar Hotel',
    meals: 'Breakfast & Dinner Daily',
    sightseeing: 'Dal Lake, Gulmarg, Mughal Gardens',
    days: 6,
    price: 45999,
    rating: 4.9,
    reviews: 214,
    description: 'Shikara rides on Dal Lake, alpine meadows and evenings by the fire in Gulmarg.',
    highlights: [
      'Private shikara ride at sunrise on Dal Lake',
      'Overnight houseboat stay with home-cooked Kashmiri meals',
      'Gondola ride over the Gulmarg snowline',
      'Guided walk through Mughal gardens in Srinagar'
    ],
    inclusions: ['5 nights premium stay', 'Daily breakfast & dinner', 'Airport transfers', 'Licensed local guide'],
    itinerary: [
      { day: 1, title: 'Arrival in Srinagar', text: 'Land in Srinagar, transfer to your houseboat and settle in over an evening shikara ride.' },
      { day: 2, title: 'Dal Lake & Mughal Gardens', text: 'Sunrise on the lake, followed by Nishat and Shalimar gardens in the afternoon.' },
      { day: 3, title: 'Gulmarg', text: 'Drive to Gulmarg for gondola views of the Himalayas and a slow mountain afternoon.' },
      { day: 4, title: 'Pahalgam', text: 'Explore the Lidder river valley and the pine forests around Pahalgam.' },
      { day: 5, title: 'Leisure in Srinagar', text: 'A free day for old-city bazaars, saffron fields or simply resting by the water.' },
      { day: 6, title: 'Departure', text: 'Morning transfer to Srinagar airport.' }
    ],
    travelInfo: 'Best visited April–October. Warm layers recommended for evenings; the region sits at altitude and temperatures drop quickly after sunset.'
  },
  {
    id: 'royal-rajasthan',
    name: 'Royal Rajasthan Trail',
    destinationId: 'rajasthan',
    destination: 'Udaipur & Jaipur',
    region: 'North India',
    experience: 'Heritage',
    image: '/image/udaipur.jpg',
    duration: '7 Days · 6 Nights',
    hotel: 'Heritage Havelis & Lake Palaces',
    meals: 'Daily Breakfast',
    sightseeing: 'Amber Fort, City Palace, Lake Pichola',
    days: 7,
    price: 52999,
    rating: 4.8,
    reviews: 178,
    description: 'Palaces, painted havelis and a private lake-facing dinner in the City of Lakes.',
    highlights: [
      'Private dinner on a lake-facing terrace in Udaipur',
      'Guided tour of Amber Fort and the City Palace',
      'Heritage haveli walk through the Pink City bazaars',
      'Sunset boat ride on Lake Pichola'
    ],
    inclusions: ['6 nights heritage-property stay', 'Daily breakfast', 'Private car with driver', 'Fort & palace entry fees'],
    itinerary: [
      { day: 1, title: 'Arrival in Jaipur', text: 'Check in to a heritage haveli and ease into the Pink City at your own pace.' },
      { day: 2, title: 'Amber Fort & City Palace', text: 'A full day exploring Jaipur\'s forts, palaces and observatories.' },
      { day: 3, title: 'Bazaars & Crafts', text: 'Block-printing and gem-cutting workshops through the old city lanes.' },
      { day: 4, title: 'Drive to Udaipur', text: 'Scenic drive south, checking in to a lakeside property by evening.' },
      { day: 5, title: 'Lake Pichola', text: 'Boat ride to Jagmandir Island and a private lake-facing dinner.' },
      { day: 6, title: 'City Palace & Old Town', text: 'Udaipur\'s City Palace complex, followed by free time for the old town.' },
      { day: 7, title: 'Departure', text: 'Morning transfer to Udaipur airport.' }
    ],
    travelInfo: 'Best visited October–March, when daytime desert heat is mild. Modest dress recommended for temple visits.'
  },
  {
    id: 'kerala-backwaters',
    name: 'Kerala Backwater Retreat',
    destinationId: 'kerala',
    destination: 'Kerala',
    region: 'South India',
    experience: 'Nature',
    image: '/image/kerala.jpg',
    duration: '5 Days · 4 Nights',
    hotel: 'Resort Stay & Private Houseboat',
    meals: 'All Meals Aboard Houseboat',
    sightseeing: 'Backwaters, Tea Plantations, Fort Kochi',
    days: 5,
    price: 38999,
    rating: 4.9,
    reviews: 251,
    description: 'A private houseboat through the backwaters, tea plantations and a spice-garden trail.',
    highlights: [
      'One night aboard a private houseboat on the Alleppey backwaters',
      'Guided spice-garden and plantation walk',
      'Traditional Kerala sadhya lunch on banana leaf',
      'Sunset at a quiet, uncrowded backwater village'
    ],
    inclusions: ['4 nights stay incl. 1 houseboat night', 'All meals aboard the houseboat', 'Private transfers', 'Plantation guide'],
    itinerary: [
      { day: 1, title: 'Arrival in Kochi', text: 'Explore Fort Kochi\'s Chinese fishing nets and colonial streets.' },
      { day: 2, title: 'Onward to Munnar', text: 'Drive up through tea country to Munnar\'s rolling plantations.' },
      { day: 3, title: 'Munnar Tea Trails', text: 'A guided walk through tea estates and a visit to a spice garden.' },
      { day: 4, title: 'Alleppey Houseboat', text: 'Board a private houseboat and drift through the backwaters overnight.' },
      { day: 5, title: 'Departure', text: 'Disembark at sunrise and transfer to Kochi for departure.' }
    ],
    travelInfo: 'Pleasant year-round; June–September brings monsoon rain that makes the backwaters especially lush.'
  },
  {
    id: 'goa-coastal-unwind',
    name: 'Goa Coastal Unwind',
    destinationId: 'goa',
    destination: 'Goa',
    region: 'West India',
    experience: 'Beach',
    image: '/image/goa.jpg',
    duration: '4 Days · 3 Nights',
    hotel: 'Beachfront Resort',
    meals: 'Daily Breakfast',
    sightseeing: 'Old Goa Churches, Mandovi Cruise, Beaches',
    days: 4,
    price: 27999,
    rating: 4.7,
    reviews: 302,
    description: 'Quiet north-Goa beaches by day, beach-shack suppers and live music by night.',
    highlights: [
      'Beachfront stay steps from the sand',
      'Sunset cruise along the Mandovi river',
      'Old Goa heritage churches walking tour',
      'A curated beach-shack seafood trail'
    ],
    inclusions: ['3 nights beachfront stay', 'Daily breakfast', 'Airport transfers', 'Sunset river cruise'],
    itinerary: [
      { day: 1, title: 'Arrival & Beach Time', text: 'Settle in and spend the afternoon on the sand near your stay.' },
      { day: 2, title: 'Old Goa & River Cruise', text: 'Morning heritage churches, evening sunset cruise on the Mandovi.' },
      { day: 3, title: 'North Goa Beaches', text: 'A slow beach-hop between Vagator, Anjuna and Ashwem.' },
      { day: 4, title: 'Departure', text: 'Late check-out and transfer to Goa airport.' }
    ],
    travelInfo: 'Best November–February for cool, dry weather; avoid the June–September monsoon if beach time is the priority.'
  },
  {
    id: 'himalayan-manali-trail',
    name: 'Himalayan Manali Trail',
    destinationId: 'manali',
    destination: 'Manali',
    region: 'North India',
    experience: 'Adventure',
    image: '/image/manali.jpg',
    duration: '5 Days · 4 Nights',
    hotel: 'Riverside Boutique Stay',
    meals: 'Daily Breakfast',
    sightseeing: 'Solang Valley, Rohtang Pass, Old Manali',
    days: 5,
    price: 32999,
    rating: 4.8,
    reviews: 165,
    description: 'Riverside cafes, pine-forest hikes and a day trip to the high-altitude Rohtang Pass.',
    highlights: [
      'Guided hike through Solang Valley pine forests',
      'Day trip to Rohtang Pass (weather permitting)',
      'Riverside cafe evenings in Old Manali',
      'Optional white-water rafting on the Beas'
    ],
    inclusions: ['4 nights riverside stay', 'Daily breakfast', 'Rohtang Pass permit & transfer', 'Local trekking guide'],
    itinerary: [
      { day: 1, title: 'Arrival in Manali', text: 'Settle in and stroll through Old Manali\'s riverside cafes.' },
      { day: 2, title: 'Solang Valley', text: 'A guided forest hike with views of the surrounding peaks.' },
      { day: 3, title: 'Rohtang Pass', text: 'Full-day excursion to the high-altitude pass, snow permitting.' },
      { day: 4, title: 'Leisure & Adventure', text: 'Optional rafting on the Beas or a free day to explore at your pace.' },
      { day: 5, title: 'Departure', text: 'Morning transfer to Bhuntar (Kullu) airport.' }
    ],
    travelInfo: 'Best March–June and September–November. Rohtang Pass access depends on weather and seasonal permits.'
  },
  {
    id: 'andaman-island-hop',
    name: 'Andaman Island Escape',
    destinationId: 'andaman',
    destination: 'Andaman Islands',
    region: 'Islands',
    experience: 'Beach',
    image: '/image/andaman.jpg',
    duration: '6 Days · 5 Nights',
    hotel: 'Beachfront Resort',
    meals: 'Daily Breakfast',
    sightseeing: 'Radhanagar Beach, Coral Reefs, Neil Island',
    days: 6,
    price: 58999,
    rating: 4.8,
    reviews: 96,
    description: 'Turquoise water, coral reefs and a private-island afternoon away from the crowds.',
    highlights: [
      'Snorkelling over coral reefs at Havelock Island',
      'Sunset at Radhanagar Beach',
      'Glass-bottom boat ride to Neil Island',
      'A cellular-jail heritage evening in Port Blair'
    ],
    inclusions: ['5 nights beachfront stay', 'Daily breakfast', 'Inter-island ferry transfers', 'Snorkelling gear & guide'],
    itinerary: [
      { day: 1, title: 'Arrival in Port Blair', text: 'Evening light & sound show at the Cellular Jail memorial.' },
      { day: 2, title: 'Havelock Island', text: 'Ferry to Havelock, sunset at the famous Radhanagar Beach.' },
      { day: 3, title: 'Coral Reefs', text: 'A full morning snorkelling, afternoon free by the water.' },
      { day: 4, title: 'Neil Island', text: 'Glass-bottom boat ride and a quieter, less-crowded island day.' },
      { day: 5, title: 'Leisure Day', text: 'Free day to relax, dive, or explore at your own pace.' },
      { day: 6, title: 'Departure', text: 'Ferry back to Port Blair for your flight home.' }
    ],
    travelInfo: 'Best October–May. Seas can be rough during the June–September monsoon, affecting ferry schedules.'
  },
  {
    id: 'jaipur-pink-city',
    name: 'Jaipur Pink City Weekend',
    destinationId: 'jaipur',
    destination: 'Jaipur',
    region: 'North India',
    experience: 'Cultural',
    image: '/image/jaipur.jpg',
    duration: '3 Days · 2 Nights',
    hotel: 'Heritage Hotel',
    meals: 'Daily Breakfast',
    sightseeing: 'Amber Fort, Hawa Mahal, City Palace',
    days: 3,
    price: 18999,
    rating: 4.6,
    reviews: 143,
    description: 'A fast, immersive weekend through forts, bazaars and royal cuisine.',
    highlights: [
      'Sunrise elephant-free walking tour of Amber Fort',
      'Hands-on block-printing workshop',
      'Royal Rajasthani thali dinner',
      'Hawa Mahal & City Palace photo walk'
    ],
    inclusions: ['2 nights heritage stay', 'Daily breakfast', 'Airport transfers', 'Fort entry fees'],
    itinerary: [
      { day: 1, title: 'Arrival & City Palace', text: 'Check in, then explore the City Palace and Hawa Mahal at golden hour.' },
      { day: 2, title: 'Amber Fort & Bazaars', text: 'Morning fort tour followed by an afternoon in the Pink City bazaars.' },
      { day: 3, title: 'Departure', text: 'A relaxed morning before your onward journey.' }
    ],
    travelInfo: 'Best October–March. A compact weekend itinerary — ideal for a short getaway.'
  },
  {
    id: 'shimla-heritage-hills',
    name: 'Shimla Heritage Hills',
    destinationId: 'shimla',
    destination: 'Shimla',
    region: 'North India',
    experience: 'Mountains',
    image: '/image/shimla.jpg',
    duration: '4 Days · 3 Nights',
    hotel: 'Hillside Colonial-Era Hotel',
    meals: 'Daily Breakfast',
    sightseeing: 'The Ridge, Kufri, Kalka-Shimla Railway',
    days: 4,
    price: 24999,
    rating: 4.5,
    reviews: 88,
    description: 'Colonial-era charm, misty ridges and a toy-train ride through the pines.',
    highlights: [
      'Toy-train ride on the UNESCO-listed Kalka–Shimla railway',
      'Walk along The Ridge and Mall Road at dusk',
      'Day trip to the apple orchards of Kufri',
      'Colonial architecture heritage walk'
    ],
    inclusions: ['3 nights hillside stay', 'Daily breakfast', 'Toy-train tickets', 'Kufri excursion'],
    itinerary: [
      { day: 1, title: 'Arrival via Toy Train', text: 'The scenic Kalka–Shimla railway ride into town, then an evening on The Ridge.' },
      { day: 2, title: 'Heritage Shimla', text: 'A walking tour of colonial-era buildings and Mall Road.' },
      { day: 3, title: 'Kufri', text: 'A day trip to Kufri\'s orchards and viewpoints.' },
      { day: 4, title: 'Departure', text: 'Morning transfer to Chandigarh for onward travel.' }
    ],
    travelInfo: 'Best March–June for pleasant weather, or December–January for snowfall.'
  }
]

export function getJourneyById(id) {
  return journeys.find((j) => j.id === id)
}
