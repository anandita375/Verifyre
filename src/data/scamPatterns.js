const scamPatterns = [
  {
    id: 1,
    name: "Upfront Payment",
    description: "Job seeker is asked to pay before recruitment.",
    keywords: [
      "registration fee",
      "joining fee",
      "processing fee",
      "training fee",
      "security deposit",
      "pay"
    ],
    points: 30,
    severity: "HIGH"
  },

  {
    id: 2,
    name: "Urgency Pressure",
    description: "Student is pressured to act immediately.",
    keywords: [
      "urgent",
      "act now",
      "limited time",
      "within 2 hours",
      "pay today",
      "immediately"
    ],
    points: 15,
    severity: "MEDIUM"
  },

  {
    id: 3,
    name: "Sensitive Information Request",
    description: "Recruiter requests sensitive identity or financial information.",
    keywords: [
      "aadhaar",
      "pan card",
      "bank details",
      "account number",
      "identity proof",
      "passport"
    ],
    points: 25,
    severity: "HIGH"
  },

  {
    id: 4,
    name: "Guaranteed Job",
    description: "Offer makes unrealistic guarantees about employment.",
    keywords: [
      "guaranteed job",
      "guaranteed placement",
      "100% placement",
      "no interview"
    ],
    points: 20,
    severity: "MEDIUM"
  }
];

export default scamPatterns;