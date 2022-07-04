import { Icon } from '@mui/material';
import { grey } from '@mui/material/colors';
import { IoStorefrontSharp } from 'react-icons/io5';

export default function Logo() {
  return (
    <Icon
      component={IoStorefrontSharp}
      sx={{ fontSize: '3rem', color: grey[900] }}
    />
  );
}
