import * as amenitiesAPI from "./fakeAmenityService";
import PortolaHotel from "../../assets/images/Portola Hotel & Spa/shelborne-south-beach.jpg";

const properties = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Portola Hotel & Spa",
    amenity: { _id: "5b21ca3eeb7f6fbccd471818", name: "Free Parking" },
    rooms: 6,
    price: 750,

    liked: true,

    AvailableFrom: "2018-01-03T19:04:28.809Z",
    bookmark: undefined,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Arcadian Riverside Adventure Resort",
    amenity: { _id: "5b21ca3eeb7f6fbccd471818", name: "Free Parking" },
    rooms: 5,
    price: 950,

    bookmark: "",
    liked: false,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "The Motel Royal Fantasy",
    amenity: { _id: "5b21ca3eeb7f6fbccd471820", name: "Meeting Rooms" },
    rooms: 8,
    price: 600,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Ramada by Wyndham",
    amenity: { _id: "5b21ca3eeb7f6fbccd471814", name: "Free Breakfast" },
    rooms: 7,
    price: 700,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Zifan Hotel & Suites",
    amenity: { _id: "5b21ca3eeb7f6fbccd471814", name: "Free Breakfast" },
    rooms: 7,
    price: 800,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Beach Luxury Hotel",
    amenity: { _id: "5b21ca3eeb7f6fbccd471814", name: "Free Breakfast" },
    rooms: 7,
    price: 900,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Karachi Marriott Hotel",
    amenity: { _id: "5b21ca3eeb7f6fbccd471820", name: "Meeting Rooms" },
    rooms: 7,
    price: 450,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "The Sixth Sense",
    amenity: { _id: "5b21ca3eeb7f6fbccd471820", name: "Meeting Rooms" },
    rooms: 4,
    price: 650,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "The Nishat Hotel Johar Town",
    amenity: { _id: "5b21ca3eeb7f6fbccd471818", name: "Free Parking" },
    rooms: 7,
    price: 350,
  },
];

export function getProperties() {
  return properties;
}

export function getProperty(id) {
  return properties.find((p) => p._id === id);
}

export function saveProperty(property) {
  let propertyInDb = properties.find((p) => p._id === property._id) || {};

  propertyInDb.title = property.title;
  propertyInDb.amenity = amenitiesAPI.amenities.find(
    (h) => h._id === property.amenityId
  );
  propertyInDb.rooms = property.rooms;
  propertyInDb.price = property.price;

  if (!propertyInDb._id) {
    propertyInDb._id = Date.now().toString();
    properties.push(propertyInDb);
  }

  return propertyInDb;
}

export function deleteProperty(id) {
  let propertyInDb = properties.find((m) => m._id === id);
  properties.splice(properties.indexOf(propertyInDb), 1);
  return propertyInDb;
}
