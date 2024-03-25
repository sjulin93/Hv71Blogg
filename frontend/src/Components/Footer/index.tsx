import {
  Stack,
  HStack,
  Link,
  Divider,
  IconButton,
  LinkProps,
} from "@chakra-ui/react";

import { FaLinkedin, FaTwitter } from "react-icons/fa";

const links = ["Blogg", "Om oss", "Podd", "Kontakta oss"];
const accounts = [
  {
    url: "https://twitter.com/",
    label: "Twitter Account",
    type: "twitter",
    icon: <FaTwitter />,
  },
  {
    url: "https://linkedin.com/in/",
    label: "LinkedIn Account",
    type: "linkedin",
    icon: <FaLinkedin />,
  },
];

const Footer = () => {
  return (
    
      <Stack
        maxW="5xl"
        marginInline="auto"
        p={8}
        spacing={{ base: 8, md: 0 }}
        justifyContent="space-between"
        alignItems="center"
        direction={{ base: "column", md: "row" }}
        marginTop='auto'
        bg="blue.hvBlue" 
        minWidth="100%"
        color="white"
      >
        <HStack
          spacing={4}
          alignItems="center"
          display={{ base: "none", md: "flex" }}
        >
          {links.map((link, index) => (
            <CustomLink key={index}>{link}</CustomLink>
          ))}
        </HStack>

        {/* Mobile and Tablet Screens */}
        <Stack display={{ base: "flex", md: "none" }} alignItems="center">
          <HStack alignItems="center">
            <Divider h="1rem" orientation="vertical" />
            <CustomLink>Blog</CustomLink>
            <Divider h="1rem" orientation="vertical" />
            <CustomLink>Om oss</CustomLink>
          </HStack>
          <HStack alignItems="center">
            <CustomLink>Podd</CustomLink>
            <Divider h="1rem" orientation="vertical" />
            <CustomLink>Kontakta oss</CustomLink>
          </HStack>
        </Stack>

        <Stack
          direction="row"
          spacing={5}
          pt={{ base: 4, md: 0 }}
          alignItems="center"
        >
          {accounts.map((sc, index) => (
            <IconButton
              key={index}
              as={Link}
              isExternal
              href={sc.url}
              aria-label={sc.label}
              colorScheme={sc.type}
              icon={sc.icon}
              rounded="md"
            />
          ))}
        </Stack>
      </Stack>
    
  );
};

const CustomLink = ({ children, ...props }: LinkProps) => {
  return (
    <Link
      href="#"
      fontSize="sm"
      _hover={{ textDecoration: "underline" }}
      {...props}
    >
      {children}
    </Link>
  );
};

export default Footer;
