import scamPatterns from "../data/scamPatterns";

export function analyzeOffer(text) {

  const lowerText = text.toLowerCase();

  let score = 0;

  const warnings = [];

  scamPatterns.forEach((pattern) => {

    const matchedKeywords = pattern.keywords.filter(
      (keyword) => lowerText.includes(keyword)
    );

    if (matchedKeywords.length > 0) {

      score += pattern.points;

      warnings.push({
        title: pattern.name,
        description: pattern.description,
        severity: pattern.severity,
        matchedKeywords
      });
    }
  });


  // Keep score between 0 and 100

  score = Math.min(score, 100);


  let level;

  if (score >= 60) {
    level = "HIGH RISK";
  }
  else if (score >= 30) {
    level = "MEDIUM RISK";
  }
  else {
    level = "LOW RISK";
  }


  return {
    score,
    level,
    warnings
  };
}