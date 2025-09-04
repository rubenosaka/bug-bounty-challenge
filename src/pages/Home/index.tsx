import { Box, Container, Typography } from "@mui/material";
import { observer } from "mobx-react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useTranslation, Trans } from "react-i18next";
import { useEffect } from "react";

interface Issue {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const Home = () => {
  const { t, i18n } = useTranslation("app");
  const issues: Issue[] = t("home.issues", { returnObjects: true });

  const setDefaultLanguage = () => {
    if (i18n.language !== "en" && i18n.language !== "de") {
      i18n.changeLanguage("en");
    }
  };

  useEffect(() => {
    setDefaultLanguage();
  }, [i18n]);

  return (
    <Box p={2} maxHeight="calc(100vh - 64px)" overflow={["auto", "auto"]}>
      <Container>
        <Typography variant="h1" textAlign="center">
          {t("home.welcome")}
        </Typography>
        <Typography variant="subtitle1" textAlign="center">
          <Trans i18nKey="home.intro" components={{ b: <b /> }} />
        </Typography>
        <Typography variant="body2" textAlign="center" color="text.secondary">
          {t("home.sidenote")}
        </Typography>
        <List>
          {issues.map((issue) => (
            <ListItem key={issue.id}>
              <Typography variant="h5" sx={{ p: 2 }}>
                {issue.icon}
              </Typography>
              <ListItemText
                primary={issue.title}
                secondary={issue.description}
              />
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );
};

export default observer(Home);
