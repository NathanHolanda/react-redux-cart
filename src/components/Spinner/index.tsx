import { Box, BoxProps, styled } from '@mui/material';

const Spinner = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'relative',
  width: '3rem',
  height: '3rem',
  backgroundColor: 'transparent',
  borderWidth: '.5rem .25rem .125rem 0',
  borderStyle: 'solid',
  borderColor: theme.palette.text.secondary,
  borderRadius: '50%',
  animation: 'spin .5s infinite',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-2px',
    left: '-5px',
    width: '15px',
    height: '15px',
    transform: 'rotate(-45deg)',
    backgroundColor: theme.palette.primary.main,
  },

  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '25%': {
      transform: 'rotate(-90deg)',
    },
    '50%': {
      transform: 'rotate(-180deg)',
    },
    '75%': {
      transform: 'rotate(-270deg)',
    },
    '100%': {
      transform: 'rotate(-360deg)',
    },
  },
}));

export default function index() {
  return <Spinner />;
}
