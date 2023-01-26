import { m } from "framer-motion";
// @mui
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
// components
import useLocales from "../../hooks/useLocales";
import { MotionViewport, varFade } from "../animate";

// ----------------------------------------------------------------------

const BoxStyle = styled(Box)({
  position: "relative",
  background:
    "linear-gradient(261.46deg, #101322 0%, rgba(116, 90, 203, 0.18) 101.6%)",
  boxShadow: "0px 4px 48px rgba(0, 0, 0, 0.15)",
  zIndex: "1",
});

// ----------------------------------------------------------------------

export default function Video() {
  const { translate } = useLocales();

  return (
    <MotionViewport>
      <BoxStyle id="video" px={3}>
        <Box
          pb={{ xs: 6, md: 10 }}
          pt={{ xs: 12, md: 16 }}
          mt={-6}
          maxWidth="1140px"
          sx={{ mx: "auto" }}
        >
          <m.div variants={varFade({ durationIn: 1 }).inUp}>
            <Typography
              variant="h1"
              textAlign="center"
              textTransform="capitalize"
              mb={4}
            >
              {translate("video_section_title")}
            </Typography>
          </m.div>
          <m.div variants={varFade({ durationIn: 1.2 }).inUp}>
            <Box
              maxWidth="700px"
              mx="auto"
              sx={{ borderRadius: "16px", overflow: "hidden" }}
            >
              <div class="">
                <iframe
                  frameborder="0"
                  allowfullscreen="1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  title="Interview SAPIAN GROUP with Serge Maurice Lobréau I Dubai Universal Exhibition | French"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/xPpQISVvQWI?autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fsergenew-gamma.vercel.app&amp;widgetid=3"
                  id="widget4"
                ></iframe>
              </div>
            </Box>
          </m.div>
        </Box>
      </BoxStyle>
    </MotionViewport>
  );
}
