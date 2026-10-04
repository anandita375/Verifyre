import companies from "../data/companies";

export function findCompany(text) {

  const lowerText = text.toLowerCase();

  const company = companies.find((company) =>
    company.keywords.some((keyword) =>
      lowerText.includes(keyword)
    )
  );

  return company || null;
}
