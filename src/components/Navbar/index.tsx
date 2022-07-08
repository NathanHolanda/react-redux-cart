import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import { useLocation } from 'react-router-dom';
import LinkComponent from './LinkComponent';
import Logo from './Logo';
import ThemeSwitch from './ThemeSwitch';

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <Box
      component="nav"
      maxWidth="1200px"
      margin="0 auto"
      display="flex"
      p={4}
      borderBottom={`.125rem ${grey[500]} solid`}
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
