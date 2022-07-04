import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import LinkComponent from './LinkComponent';
import Logo from './Logo';

export default function Navbar() {
  return (
    <Box
      component="nav"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p={4}
      borderBottom={`.125rem ${grey[500]} solid`}
      sx={{ backgroundColor: grey[200] }}
    >
      <Logo />
      <Box marginLeft="4rem">
        <LinkComponent url="/" name="Products" />
        <LinkComponent url="/cart" name="Cart" />
      </Box>
    </Box>
  );
}
