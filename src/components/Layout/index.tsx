import { useColorMode, Box, Container } from '@chakra-ui/react';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout: React.FC = ({ children }) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: 'gray.50', dark: 'gray.900' };
  const color = { light: 'black', dark: 'whiteAlpha.900' };

  return (
    <Box bg={bgColor[colorMode]} color={color[colorMode]}>
      <Header />
      <Container as="main" maxWidth="container.md" minHeight="100vh">
        {children}
      </Container>
      <Footer />
    </Box>
  );
};
