import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ERoute } from "../../types/global";

interface LanguageRouterProps {
  children: React.ReactNode;
}

const LanguageRouter: React.FC<LanguageRouterProps> = ({ children }) => {
  const history = useHistory();
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const currentPath = location.pathname;

    if (currentPath === ERoute.HOME_EN) {
      i18n.changeLanguage("en");
      history.replace(ERoute.ROOT);
    } else if (currentPath === ERoute.HOME_DE) {
      i18n.changeLanguage("de");
      history.replace(ERoute.ROOT);
    } else if (currentPath === ERoute.HOME) {
      i18n.changeLanguage("en");
      history.replace(ERoute.ROOT);
    }
  }, [location.pathname, history, i18n]);

  return <>{children}</>;
};

export default LanguageRouter;
