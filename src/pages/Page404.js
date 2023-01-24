import { m } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
import { Button, Typography, Container } from "@mui/material";
// components
import Page from "../components/Page";
import { MotionContainer, varBounce } from "../components/animate";
// assets
import { PageNotFoundIllustration } from "../assets";
import DefaultBtn from "../components/DefaultBtn";
import Image from "../components/Image";

// ----------------------------------------------------------------------

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Page404() {
  return (
    <Page title="404 Page Not Found">
      <Container component={MotionContainer}>
        <ContentStyle sx={{ textAlign: "center", alignItems: "center" }}>
          <m.div variants={varBounce().in}>
            <Typography variant="h3" paragraph>
              Sorry, page not found!
            </Typography>
          </m.div>

          <m.div variants={varBounce().in}>
            <Typography sx={{ color: "text.secondary" }}>
              Sorry, we couldn’t find the page you’re looking for. Perhaps
              you’ve mistyped the URL? Be sure to check your spelling.
            </Typography>
          </m.div>

          <m.div variants={varBounce().in}>
            {/* <PageNotFoundIllustration sx={{ height: 260, my: { xs: 5, sm: 10 } }} /> */}
            <Image
              src="/assets/images/404.png"
              sx={{ height: 260, my: { xs: 5, sm: 10 } }}
            />
          </m.div>
          <DefaultBtn href="/" text="Go to Home" />
        </ContentStyle>
      </Container>
    </Page>
  );
}
