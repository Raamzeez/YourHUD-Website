import iPolicySection from "@/models/policySection";

const privacyPolicyData: iPolicySection[] = [
  {
    title: "Introduction",
    messages: [
      "Welcome to YourHUD. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard the data we collect from users of the YourHUD. By accessing or using the app, you agree to the practices described in this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not use the app.",
    ],
  },
  {
    title: "Information We Collect",
    subsections: ["2.1 Location Data", "2.2 Miscellaneous Data"],
    messages: [
      "YourHUD collects and uses your device's location data only with your explicit permission. The app requests access to your location in order to provide location-based features such as HUD (Heads-Up Display) functionality, such as to display your speed and weather information. This data is used solely for the purpose of enhancing the functionality of the app and is not stored or shared with any third parties.",
      "In addition to location data, the app may collect certain user preferences and settings to enhance your experience. This may include preferences related to display settings, theme choices, and other customizable options within the app.",
    ],
  },
  {
    title: "How We Use Your Information",
    subsections: [
      "3.1 Location Data",
      "3.2 Miscellaneous Data",
      "3.3 Data Retention",
    ],
    messages: [
      "The location data collected by YourHUD is used solely for the purpose of providing the HUD functionality and enhancing your experience within the app. We do not use your location data for any other purpose, nor do we share it with third parties.",
      "The miscellaneous data collected, such as user preferences and settings, is used to customize the app's interface and functionality to align with your preferences. This data is stored locally on your device and is not transmitted to our servers or shared with third parties.",
      "YourHUD retains your location data and miscellaneous data only for the duration necessary to fulfill the purposes outlined in this Privacy Policy. Location data is stored temporarily and is not used for any tracking purposes beyond providing the HUD functionality",
    ],
  },
  {
    title: "Updates",
    messages: [
      'Changes to this Privacy Policy We may update this Privacy Policy from time to time. We will notify you of any changes by updating the "Effective Date" at the top of this policy. We encourage you to review this Privacy Policy periodically to stay informed about our data practices. Contact Us If you have any questions or concerns about this Privacy Policy or the data practices of YourHUD, please contact us at yourhud.communications@gmail.com By using the YourHUD App, you signify your acceptance of this Privacy Policy. If you do not agree to this policy, please do not use the app.',
    ],
  },
];

export default privacyPolicyData;
