import { m } from "framer-motion";
// @mui
import { Box, styled, Typography } from "@mui/material";

// components
import Slider from "react-slick";
import useLocales from "../../hooks/useLocales";
import { MotionViewport, varFade, varZoom } from "../animate";
import DefaultBtn from "../DefaultBtn";

// ----------------------------------------------------------------------

export default function Article() {
  const { translate } = useLocales();
  var settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    // dots: true,
    speed: 1400,
    autoplaySpeed: 2600,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const slideImages = [
    {
      src: "/assets/images/serge_article.png",
      title: "adf",
      date: "adf",
      desc: "asdf",
    },
    {
      src: "/assets/images/serge_article.png",
      title: "adf",
      date: "adf",
      desc: "asdf",
    },
    {
      src: "/assets/images/serge_article.png",
      title: "adf",
      date: "adf",
      desc: "asdf",
    },
    {
      src: "/assets/images/serge_article.png",
      title: "adf",
      date: "adf",
      desc: "asdf",
    },
    {
      src: "/assets/images/serge_article.png",
      title: "adf",
      date: "adf",
      desc: "asdf",
    },
    {
      src: "/assets/images/serge_article.png",
      title: "adf",
      date: "adf",
      desc: "asdf",
    },
    {
      src: "/assets/images/serge_article.png",
      title: "adf",
      date: "adf",
      desc: "asdf",
    },
    {
      src: "/assets/images/serge_article.png",
      title: "adf",
      date: "adf",
      desc: "asdf",
    },
    {
      src: "/assets/images/serge_article.png",
      title: "adf",
      date: "adf",
      desc: "asdf",
    },
    {
      src: "/assets/images/serge_article.png",
      title: "adf",
      date: "adf",
      desc: "asdf",
    },
    {
      src: "/assets/images/serge_article.png",
      title: "adf",
      date: "adf",
      desc: "asdf",
    },
    {
      src: "/assets/images/serge_article.png",
      title: "adf",
      date: "adf",
      desc: "asdf",
    },
  ];

  const BoxStyle = styled(Box)({
    "& .slick-slide": {
      padding: "0 8px",
    },
    "& .slick-list": {
      lineHeight: "0",
    },
    "& .slick-prev, .slick-next": {
      display: "none !important",
    },
    // "& .slick-track": {
    //   marginBottom: "24px",
    // },
    // "& .slick-dots li button:before": {
    //   fontSize: "24px",
    //   color: "#9C9EA1",
    // },
    // "& .slick-dots li.slick-active button:before": {
    //   color: "#745acb !important",
    // },
  });
  return (
    <MotionViewport>
      <BoxStyle px={3} id="article">
        <Box
          maxWidth="1140px"
          // py={{ xs: 6, md: 10 }}
          pt={16}
          mt={-16}
          pb={10}
          sx={{ mx: "auto" }}
        >
          <m.div variants={varFade({ durationIn: 1 }).inDown}>
            <Typography
              variant="h1"
              mb={4}
              textTransform="capitalize"
              textAlign="center"
            >
              {translate("article_section_title")}
            </Typography>
          </m.div>
          <Box>
            <m.div variants={varZoom({ durationIn: 1.2 }).in}>
              <Slider {...settings}>
                {slideImages.map((e, index) => (
                  <Box component="img" src={e.src} key={index} />
                ))}
              </Slider>
            </m.div>
          </Box>
          <m.div variants={varFade({ durationIn: 1.4 }).inRight}>
            <Box mt={{ xs: 3, sm: 5 }} textAlign="center">
              <DefaultBtn
                text="View All"
                icon="heroicons:arrow-long-right"
                href="#"
              />
            </Box>
          </m.div>
        </Box>
      </BoxStyle>
    </MotionViewport>
  );
}
