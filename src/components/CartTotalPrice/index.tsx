import { Box, Typography, useTheme } from '@mui/material';

type CartTotalPriceProps = {
  total: number;
};

export default function index({ total }: CartTotalPriceProps) {
  const theme = useTheme();

  return (
    <Box>
      <Typography
        fontSize="1.8rem"
        fontWeight="bold"
        color={theme.palette.text.primary}
        textAlign="right"
      >
        Total:&nbsp;
        {Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(total)}
      </Typography>
    </Box>
  );
}
