import { FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";
import { AVAILABLE_LANGUAGES, getLanguageByCode } from "../../config/languages";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event: SelectChangeEvent) => {
    const newLanguage = event.target.value;
    i18n.changeLanguage(newLanguage);
  };

  const currentLanguage = getLanguageByCode(i18n.language);

  const FLAG_DIMENSIONS = {
    header: { width: '16px', height: '12px', marginRight: '6px' },
    dropdown: { width: '20px', height: '15px', marginRight: '8px' }
  } as const;

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
                ...FLAG_DIMENSIONS.header,
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
        {AVAILABLE_LANGUAGES.map((language) => (
          <MenuItem key={language.code} value={language.code}>
            <ReactCountryFlag
              countryCode={language.countryCode}
              svg
              style={{
                ...FLAG_DIMENSIONS.dropdown,
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
