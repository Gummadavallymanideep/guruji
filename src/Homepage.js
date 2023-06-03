import { Box, Button, Flex, Heading, Image, SimpleGrid, Skeleton, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Query from './Query';

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState([]);

  useEffect(() => {
    // Simulate content loading
    setTimeout(() => {
      setIsLoading(false);
      setContent(generateContent());
    }, 2000);
  }, []);

  const generateContent = () => {
    const sections = [
      {
        title: 'Guruji Astro',
        actionText: 'Contact Now',
        actionLink: '/contact',
        user: {
          name: 'Manideep',
          photo: 'https://media.licdn.com/dms/image/C5103AQFMC3naV-Snkg/profile-displayphoto-shrink_800_800/0/1580121249199?e=2147483647&v=beta&t=KssYtYpdOPJ_g4ZLLCWwpKU2h-z3HYNe4Mm5guHOwQ4',
        },
        logo: 'https://play-lh.googleusercontent.com/hFA7RhJKGBsmoPIhTskv-LOG3q8RjqvBj_AH2WUXFnVb32kiGSTx9lur_BahD68qT6aG',
        links: ['Home', 'Call with Astrologer', 'Live'],
        content: 'Your Name is a Vedia Astrologer and has expertise in vaastu and Mantra Therapy',
      },
      {
        title: 'Section 2',
        actionText: 'Explore',
        actionLink: '/section2',
        videos: [
          {
            title: 'Video 4',
            src: 'https://www.youtube.com/embed/video4',
          },
          {
            title: 'Video 5',
            src: 'https://www.youtube.com/embed/video5',
          },
          {
            title: 'Video 6',
            src: 'https://www.youtube.com/embed/video6',
          },
        ],
      },
      {
        title: 'Section 3',
        actionText: 'Explore',
        actionLink: '/section3',
        Astrologer: [
          {
            id: 1,
            name: 'Pandit Raj Kumar',
            specialization: 'Horoscope Reading',
            image: 'https://www.forbesindia.com/media/images/2019/Nov/img_124197_panditrajkm900x600.jpg',
          },
          {
            id: 2,
            name: 'Dr. Sundeep Kochar',
            specialization: 'Tarot Card Reading',
            image: 'https://planetbollywood.com/wp/wp-content/uploads/2020/12/SundeepKochar1.jpg',
          },
          {
            id: 3,
            name: 'KN Rao',
            specialization: 'Numerology',
            image: 'https://www.astrojyoti.com/images/knraoastrologer.JPG',
          },
        ],
      },
    ];
    

    return sections.map((section, index) => ({
      ...section,
      id: index,
    }));
  };

  const renderSkeletons = () => {
    return Array.from({ length: 4 }, (_, index) => (
      <Flex
        key={index}
        direction="column"
        alignItems="center"
        justify="center"
        p="4"
        bg="white"
        borderRadius="md"
        boxShadow="md"
        w={{ base: '100%', md: '48%' }}
        h="200px"
        my="4"
      >
        <Skeleton height="20px" width="80%" mb="2" />
        <Skeleton height="12px" width="100%" />
      </Flex>
    ));
  };

  return (
    <VStack spacing="6" p="4" align="center">
      {isLoading ? (
        renderSkeletons()
      ) : (
        content.map((sections) => (
          <Box
          key={sections.id}
          p="4"
          bgImage="url('https://img.freepik.com/free-vector/gradient-numerology-background_23-2150001903.jpg')"
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          borderRadius="md"
          boxShadow="lg"
          w={{ base: '100%', md: '48%' }}
          my="4"
          >
            {sections.id === 0 && (
              <Flex align="center" justify="center" mb="4" color="white">
                <Image src={sections.logo} alt="Section Logo" boxSize="40px" mr="2" />
                <Heading as="h2" size="lg">
                  {sections.title}
                </Heading>
              </Flex>
            )}
            {sections.user && (
              <Flex align="center" mb="4">
                <Image src={sections.user.photo} alt="User Photo" boxSize="30px" borderRadius="full" mr="2" />
                <Text color="white">{sections.user.name}</Text>
              </Flex>
            )}
            {sections.id === 0 && (
              <Heading as="h3" size="md" textAlign="center" mb="4" color="white">
                Astrology for Clarity
              </Heading>
            )}
            <Text color="white" textAlign={sections.id === 0 ? "center" : "left"}>{sections.description}</Text>
            {sections.content && (
              <Text mt="4" color="white" textAlign={sections.id === 0 ? "center" : "left"}>{sections.content}</Text>
            )}
            {sections.id === 1 && sections.videos.length > 0 &&(
              <Carousel showArrows={true} showThumbs={false} showStatus={false}>
                {sections.videos.map((video, index) => (
                  <div key={index}>
                    <iframe 
                      title={video.title}
                      width="100%"
                      height="400"
                      src={video.src}
                      frameBorder="0"
                      allowFullScreen
                    />
                  </div>
                ))}
              </Carousel>
            )}
            {sections.id === 2 && sections.Astrologer.length > 0 &&(
              <SimpleGrid column={{ base:1, md: 3}} spacing="4">
                {sections.Astrologer.map((astrologer) => (
                  <Box
                  key={astrologer.id}
                  p="4"
                  bg="white"
                  borderRadius="md"
                  boxShadow="md"
                >
                  <Box
                    bgImage={`url(${astrologer.image})`}
                    bgSize="cover"
                    bgPosition="center"
                    borderRadius="md"
                    boxSize="200px"
                    mb="4"
                  />
                  <Text fontWeight="bold">{astrologer.name}</Text>
                  <Text fontSize="sm" color="gray.500" mt="2">
                    {astrologer.specialization}
                  </Text>
                </Box>
                ))}
              </SimpleGrid>
            )}
            <Text color="white">{sections.description}</Text>
            {sections.links && (
              <Flex align="center" justify="center" mt="4" color="white">
                {sections.links.map((link, index) => (
                  <Button key={index} variant="ghost" as="a" href={link} mr="2">
                    {link}
                  </Button>
                ))}
              </Flex>
            )}
            {sections.id === 0 && (
              <Button colorScheme="blue" align="center" justify="center" color="white" mt="4" as="a" href={sections.actionLink}>
                {sections.actionText}
              </Button>
            )}
            <Query />
          </Box>
        ))
      )}
    </VStack>
  );
};

export default Homepage;
