export interface LanguageConfig {
  code: string;
  name: string;
  countryCode: string;
}

export const AVAILABLE_LANGUAGES: LanguageConfig[] = [
  { code: "en", name: "English", countryCode: "US" },
  { code: "de", name: "Deutsch", countryCode: "DE" }
];

export const DEFAULT_LANGUAGE = "en";

export const getLanguageByCode = (code: string): LanguageConfig => {
  return AVAILABLE_LANGUAGES.find(lang => lang.code === code) || 
         AVAILABLE_LANGUAGES.find(lang => lang.code === DEFAULT_LANGUAGE)!;
};
