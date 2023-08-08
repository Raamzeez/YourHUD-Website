import iProfileFeature from "@/models/profileFeature";

const profileFeatures: iProfileFeature[] = [
  {
    profile: "default",
    features: [
      "Heading Letters",
      "Heading Number",
      "Outside Temperature",
      "Weather Icon",
      "Speedometer",
      "Clock",
      "City Name",
    ],
  },
  {
    profile: "sports",
    features: [
      "Car Logo",
      "Checkered Background",
      "Icons",
      "G-Force Gauge",
      "Max Speed Reading",
      "Speedometer",
      "Visibility",
      "Humidity",
      "Temperature",
      "Wind Speed",
      "Wind Direction",
      "Atmospheric Reading",
    ],
  },
  {
    profile: "chill",
    features: ["Time", "Weather Conditions", "Compass", "Speedometer"],
  },
  {
    profile: "offroad",
    features: [
      "Speedometer",
      "Vertical Angle",
      "Horizontal Angle",
      "Temperature",
      "Coordinates",
      "Heading",
    ],
  },
];

export default profileFeatures;
