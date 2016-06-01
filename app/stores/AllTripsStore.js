import alt from '../alt';

class AllTripsStore {
	constructor() {
		this.trips = [
		{ title: "Ultimate Japan Hike", user: "adam", start: "Tokyo", end:"Kyoto", likes: 32918 }, 
		{ title: "Handgliding Through South Japan", user: "ben", start: "Tokyo", end:"Kyoto", likes: 28074 },
		{ title: "Swimming With The Sharks", user: "jesus", start: "Shizouka", end:"Tokyo", likes: 24414 },
		{ title: "How To Meet Friends In Tokyo", user: "tim", start: "Tokyo", end:"Akita", likes: 28074 },
		{ title: "The Holy Path To Japan's Best Temples", user: "bogart", start: "Tokyo", end:"Matsumoto", likes: 22214 },
		{ title: "How To Ramen Like A Pro", user: "albert", start: "Tokyo", end:"Fukoka", likes: 19087 },
		{ title: "Getting Lost In Upper Japan", user: "megan", start: "Tokyo", end:"Tokyo", likes: 17762 },
		{ title: "Best View of Mt Fuji", user: "fran", start: "Tokyo", end: "Shizouka", likes: 13304 },
		{ title: "Izakaa And Where To Go", user: "sarah", start: "Tokyo", end:"Kyoto", likes: 10098 },
		{ title: "Top Ten Parks", user: "robert", start: "Tokyo", end:"Akita", likes: 9003 },
		{ title: "Hiking Through Northern Japan", user: "tim", start: "Tokyo", end:"Fukoka", likes: 8331 },
		{ title: "What to Do In Kyoto", user: "bob", start: "Kyoto", end:"Kyoto", likes: 4042 }
		];
	}
}

export default alt.createStore(AllTripsStore);