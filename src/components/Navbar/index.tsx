import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import LinkComponent from './LinkComponent';
import Logo from './Logo';
import ThemeSwitch from './ThemeSwitch';

export default function Navbar() {
  return (
    <Box
      component="nav"
      width="100%"
      display="flex"
      p={4}
      borderBottom={`.125rem ${grey[500]} solid`}
    >
      <Box margin="auto" display="flex" alignItems="center">
        <Logo />
        <Box marginLeft="4rem">
          <LinkComponent url="/" name="Products" />
          <LinkComponent url="/cart" name="Cart" />
        </Box>
      </Box>
      <ThemeSwitch sx={{ justifySelf: 'flex-end' }} />
    </Box>
  );
}
