import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import { useCallback, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import LinkComponent from './LinkComponent';
import Logo from './Logo';
import ThemeSwitch from './ThemeSwitch';

export default function Navbar() {
  const { pathname } = useLocation();
  const theme = useTheme();

  const navbarRef = useRef<HTMLDivElement>(null);

  const animateNavbarOnScroll = useCallback(() => {
    const yPosition =
      document.body.scrollTop || document.documentElement.scrollTop;

    const navbar = navbarRef.current;

    if (navbar) {
      if (yPosition >= 145) {
        navbar.style.position = 'fixed';
        navbar.style.top = '0px';
        navbar.style.maxWidth = 'none';
      } else {
        navbar.style.position = 'static';
        navbar.style.top = '-145px';
        navbar.style.maxWidth = '1200px';
      }
    }
  }, []);

  useEffect(() => {
    window.onscroll = animateNavbarOnScroll;
  }, []);

  return (
    <Box
      ref={navbarRef}
      component="nav"
      maxWidth="1200px"
      margin="0 auto"
      display="flex"
      height="8rem"
      width="100%"
      p={4}
      borderBottom={`.125rem ${grey[500]} solid`}
      sx={{
        backgroundColor: theme.palette.primary.main,
        top: '-145px',
        zIndex: '10',
        transition: 'top 2s',
      }}
    >
      <Box margin="auto" display="flex" alignItems="center">
        <Logo />
        <Box marginLeft="4rem">
          <LinkComponent active={pathname === '/'} url="/" name="Products" />
          <LinkComponent
            active={pathname === '/cart'}
            url="/cart"
            name="Cart"
          />
        </Box>
      </Box>
      <ThemeSwitch sx={{ justifySelf: 'flex-end' }} />
    </Box>
  );
}
