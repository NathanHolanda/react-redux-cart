import { useTheme } from '@mui/material';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

type LinkProps = {
  url: string;
  name: string;
  active: boolean;
};

export default function LinkComponent({ url, name, active }: LinkProps) {
  const theme = useTheme();

  return (
    <Link
      component={RouterLink}
      to={url}
      color={theme.palette.text.secondary}
      fontWeight="700"
      fontSize="1.5rem"
      sx={{
        textDecoration: active ? 'underline' : 'none',
        textDecorationColor: active ? theme.palette.success.main : 'none',
        transition: '.2s',
        '&:hover': { opacity: '.6' },
        '&:not(:last-of-type)': { marginRight: '1rem' },
      }}
    >
      {name}
    </Link>
  );
}
