import { Box, Text, Stack, IconButton, Link } from '@chakra-ui/react';
// import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const SocialMediaLinks = () => {
  return (
    <Stack direction="row" spacing="4">
      <Link href="https://facebook.com" isExternal>
        <IconButton
          icon="https://cdn-icons-png.flaticon.com/512/124/124010.png"
          aria-label="Facebook"
          size="lg"
          variant="ghost"
        />
      </Link>
      <Link href="https://twitter.com" isExternal>
        <IconButton
          icon="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png"
          aria-label="Twitter"
          size="lg"
          variant="ghost"
        />
      </Link>
      <Link href="https://instagram.com" isExternal>
        <IconButton
          icon="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
          aria-label="Instagram"
          size="lg"
          variant="ghost"
        />
      </Link>
    </Stack>
  );
};

const PaymentLinks = () => {
  return (
    <Stack direction="row" spacing="4">
      <Link href="https://paytm.com" isExternal>
        Paytm
      </Link>
      <Link href="https://phonepe.com" isExternal>
        PhonePe
      </Link>
      <Link href="https://googlepay.com" isExternal>
        Google Pay
      </Link>
    </Stack>
  );
};

const LastSection = () => {
  return (
    <Box p="4">
      <Text as="h2" fontSize="2xl" fontWeight="bold" mb="4">
        Section 4 - Social Media Links
      </Text>
      <SocialMediaLinks />

      <Text as="h2" fontSize="2xl" fontWeight="bold" mb="4" mt="8">
        Section 5 - Query or Review
      </Text>
      <Box p="4" bg="white" borderRadius="md" boxShadow="md">
        <Text as="h2" fontSize="2xl" fontWeight="bold" mb="4">
          Submit Your Query or Review
        </Text>
        <form>
          <Stack spacing="4">
            <label>
              Name:
              <input type="text" />
            </label>
            <label>
              Phone Number:
              <input type="text" />
            </label>
            <button type="submit">Submit</button>
          </Stack>
        </form>
      </Box>

      <Text as="h2" fontSize="2xl" fontWeight="bold" mb="4" mt="8">
        Section 6 - Payment Links
      </Text>
      <PaymentLinks />
    </Box>
  );
};

export default LastSection;
