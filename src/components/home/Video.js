import { m } from "framer-motion";
// @mui
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
// components
import useLocales from "../../hooks/useLocales";
import { MotionViewport, varFade } from "../animate";
import Slider from "react-slick";

// ----------------------------------------------------------------------

const BoxStyle = styled(Box)({
  position: "relative",
  background:
    "linear-gradient(261.46deg, #101322 0%, rgba(116, 90, 203, 0.18) 101.6%)",
  boxShadow: "0px 4px 48px rgba(0, 0, 0, 0.15)",
  zIndex: "1",
  "& .video-wrapper": {
    position: "relative",
    paddingBottom: "56.25%",
    paddingTop: "25px",
    height: "0",
  },
  "& .video-wrapper iframe": {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    borderRadius: "24px",
  },
});

// ----------------------------------------------------------------------

export default function Video() {
  const { translate } = useLocales();
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // dots: true,
    speed: 1400,
    autoplaySpeed: 2600,
  };
  const videoData = [
    {
      img: "/assets/images/serge_article.png",
      title: "Amazing First Title",
      date: "Jan 29, 2018",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Est pariatur nemo tempore repellat? Ullam sed officia iure
      architecto deserunt distinctio, pariatur`,
      url: "/article/1",
    },
    {
      img: "/assets/images/serge_article.png",
      title: "Amazing First Title",
      date: "Jan 29, 2018",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Est pariatur nemo tempore repellat? Ullam sed officia iure
      architecto deserunt distinctio, pariatur`,
      url: "/article/2",
    },
    {
      img: "/assets/images/serge_article.png",
      title: "Amazing First Title",
      date: "Jan 29, 2018",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Est pariatur nemo tempore repellat? Ullam sed officia iure
      architecto deserunt distinctio, pariatur`,
      url: "/article/3",
    },
    {
      img: "/assets/images/serge_article.png",
      title: "Amazing First Title",
      date: "Jan 29, 2018",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Est pariatur nemo tempore repellat? Ullam sed officia iure
      architecto deserunt distinctio, pariatur`,
      url: "/article/4",
    },
    {
      img: "/assets/images/serge_article.png",
      title: "Amazing First Title",
      date: "Jan 29, 2018",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Est pariatur nemo tempore repellat? Ullam sed officia iure
      architecto deserunt distinctio, pariatur`,
      url: "/article/5",
    },
    {
      img: "/assets/images/serge_article.png",
      title: "Amazing First Title",
      date: "Jan 29, 2018",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Est pariatur nemo tempore repellat? Ullam sed officia iure
      architecto deserunt distinctio, pariatur`,
      url: "/article/6",
    },
  ];
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
              maxWidth="1140px"
              mx="auto"
              sx={{ borderRadius: "16px", overflow: "hidden" }}
            >
              {/* <iframe
                frameborder="0"
                allowfullscreen="1"
                title=" "
                width="560"
                height="315"
                src="https://www.youtube.com/embed/xPpQISVvQWI?autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fsergenew-gamma.vercel.app&amp;widgetid=3"
              ></iframe> */}
              <Slider {...settings}>
                {videoData.map((e, index) => (
                  <Box className="video-wrapper">
                    <iframe
                      frameborder="0"
                      allowfullscreen="1"
                      allow=" "
                      title=" "
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/xPpQISVvQWI?autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fsergenew-gamma.vercel.app&amp;widgetid=3"
                      id="widget4"
                    ></iframe>
                  </Box>
                ))}
              </Slider>
            </Box>
          </m.div>
        </Box>
      </BoxStyle>
    </MotionViewport>
  );
}
