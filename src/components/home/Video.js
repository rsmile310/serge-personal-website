import { m } from "framer-motion";
// @mui
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Image from "../Image";
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
              <Image src="http://greensensitive.com/assets/images/other/video-coming-soon.gif" />
            </Box>
          </m.div>
        </Box>
      </BoxStyle>
    </MotionViewport>
  );
}
