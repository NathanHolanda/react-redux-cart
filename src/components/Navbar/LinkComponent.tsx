import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import { grey } from '@mui/material/colors';

type LinkProps = {
  url: string;
  name: string;
};

export default function LinkComponent({ url, name }: LinkProps) {
  return (
    <Link
      component={RouterLink}
      to={url}
      color={grey[700]}
      fontWeight="700"
      fontSize="1.5rem"
      sx={{
        textDecoration: 'none',
        transition: '.2s',
        '&:hover': { opacity: '.6' },
        '&:not(:last-of-type)': { marginRight: '1rem' },
      }}
    >
      {name}
    </Link>
  );
}
