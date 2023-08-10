import iContactFeature from "@/models/contactFeature";
import {
  faBoltLightning,
  faCalendar,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

const contactFeatures: iContactFeature[] = [
  {
    icon: faCalendar,
    title: "Available on Weekends",
    body: "We are available on weekends to help you with any issues or feedback you may have.",
  },
  {
    icon: faBoltLightning,
    title: "Quick Response",
    body: "You'll get a quick resopnse from us, that's our guarantee!.",
  },
  {
    icon: faComment,
    title: "Chat about anything",
    body: "Whether you need help with a technical issue, want to suggest a feature request, or simply want to chat about the app, feel free to reach out to us!",
  },
];

export default contactFeatures;
