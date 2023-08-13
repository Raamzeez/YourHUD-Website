import iFeature from "@/models/feature";
import {
  faArrowsRotate,
  faCar,
  faClock,
  faCloudSun,
  faCompass,
  faCrosshairs,
  faGauge,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";

const features: iFeature[] = [
  {
    icon: faGauge,
    title: "Speedometer",
    smallTitle: "Speed",
  },
  { icon: faCloudSun, title: "Weather", smallTitle: "Weather" },
  { icon: faCompass, title: "Heading & Compass", smallTitle: "Compass" },
  { icon: faMapPin, title: "Coordinates", smallTitle: "Coordinates" },
  { icon: faCrosshairs, title: "G-Force Gauge", smallTitle: "G-Force" },
  {
    icon: faArrowsRotate,
    title: "Pitch & Roll Readings",
    smallTitle: "Pitch & Roll",
  },
  { icon: faClock, title: "Clock", smallTitle: "Clock" },
  { icon: faCar, title: "Car Logo", smallTitle: "Logo" },
];

export default features;
