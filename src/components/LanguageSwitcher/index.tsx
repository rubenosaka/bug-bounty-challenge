import { FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event: SelectChangeEvent) => {
    const newLanguage = event.target.value;
    i18n.changeLanguage(newLanguage);
  };

  const languages = [
    { code: "en", name: "English", countryCode: "US" },
    { code: "de", name: "Deutsch", countryCode: "DE" }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <FormControl size="small" sx={{ minWidth: 120 }}>
      <Select
        value={i18n.language}
        onChange={handleLanguageChange}
        displayEmpty
        renderValue={(value) => (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ReactCountryFlag
              countryCode={currentLanguage.countryCode}
              svg
              style={{
                width: '16px',
                height: '12px',
                marginRight: '6px',
                borderRadius: '2px'
              }}
            />
            {currentLanguage.name}
          </div>
        )}
        sx={{
          color: "white",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255, 255, 255, 0.23)",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255, 255, 255, 0.5)",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
          "& .MuiSvgIcon-root": {
            color: "white",
          },
        }}
      >
        {languages.map((language) => (
          <MenuItem key={language.code} value={language.code}>
            <ReactCountryFlag
              countryCode={language.countryCode}
              svg
              style={{
                width: '20px',
                height: '15px',
                marginRight: '8px',
                borderRadius: '2px'
              }}
            />
            {language.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LanguageSwitcher;
