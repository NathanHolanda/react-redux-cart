import { Icon, useTheme } from '@mui/material';
import { IoStorefrontSharp } from 'react-icons/io5';

export default function Logo() {
  const theme = useTheme();

  return (
    <Icon
      component={IoStorefrontSharp}
      sx={{ fontSize: '3rem', color: theme.palette.text.primary }}
    />
  );
}
