import { Box, Button, Grid, Typography, useTheme } from '@mui/material';
import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '../Input';

type Inputs = {
  customerName: string;
  customerEmail: string;
  customerAddress: string;
  customerCountry: string;
  customerState: string;
  customerZip: string;
  cardName: string;
  cardNumber: string;
  cardExpiration: string;
  cardCvv: string;
};

export default function index() {
  const theme = useTheme();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <Box
      component="form"
      textAlign={{ xs: 'center', sm: 'left' }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography
        component="h1"
        mb={3}
        color={theme.palette.text.primary}
        fontSize="2rem"
      >
        Billing address
      </Typography>
      <Grid
        container
        columns={{ sm: 9 }}
        rowSpacing={2}
        columnSpacing={2}
        justifyContent={{ xs: 'center', sm: 'flex-start' }}
      >
        <Grid item xs={5}>
          <Input
            label="Full name"
            type="text"
            error={errors.customerName?.message || ''}
            {...register('customerName', {
              required: { value: true, message: 'Name is required' },
              minLength: { value: 5, message: 'Invalid typed name' },
            })}
          />
        </Grid>
        <Grid item xs={4}>
          <Input
            label="E-mail"
            type="email"
            error={errors.customerEmail?.message || ''}
            {...register('customerEmail', {
              required: { value: true, message: 'Name is required' },
              pattern: {
                value: /^[\w.]+@[\w.]+\.[\w.]+/g,
                message: 'Invalid e-mail',
              },
            })}
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            label="Address"
            type="text"
            error={errors.customerAddress?.message || ''}
            {...register('customerAddress', {
              required: { value: true, message: 'Address is required' },
            })}
          />
        </Grid>
        <Grid item xs={3}>
          <Input
            label="Country"
            type="text"
            error={errors.customerCountry?.message || ''}
            {...register('customerCountry', {
              required: { value: true, message: 'Country is required' },
            })}
          />
        </Grid>
        <Grid item xs={3}>
          <Input
            label="State/Province"
            type="text"
            error={errors.customerState?.message || ''}
            {...register('customerState', {
              required: { value: true, message: 'State is required' },
            })}
          />
        </Grid>
        <Grid item xs={3}>
          <Input
            label="ZIP code"
            type="text"
            error={errors.customerZip?.message || ''}
            maskType="zipCode"
            {...register('customerZip', {
              required: { value: true, message: 'ZIP code is required' },
              pattern: {
                value: /\d{5}-\d{3,4}/,
                message: 'Invalid typed ZIP code',
              },
            })}
          />
        </Grid>
      </Grid>
      <Typography
        component="h1"
        mt={5}
        mb={3}
        color={theme.palette.text.primary}
        fontSize="2rem"
      >
        Payment
      </Typography>
      <Grid
        container
        columns={{ sm: 9 }}
        spacing={2}
        justifyContent={{ xs: 'center', sm: 'flex-start' }}
      >
        <Grid item xs={5}>
          <Input
            label="Name on card"
            type="text"
            error={errors.cardName?.message || ''}
            {...register('cardName', {
              required: { value: true, message: 'Name is required' },
            })}
          />
        </Grid>
        <Grid item xs={4}>
          <Input
            label="Card number"
            type="text"
            error={errors.cardNumber?.message || ''}
            maskType="cardNumber"
            {...register('cardNumber', {
              required: { value: true, message: 'Card number is required' },
              pattern: {
                value: /(\d{4} ){3}\d{4}/,
                message: 'Invalid typed card number',
              },
            })}
          />
        </Grid>
        <Grid item xs={2}>
          <Input
            label="Expiration date"
            type="text"
            error={errors.cardExpiration?.message || ''}
            maskType="cardExpiration"
            {...register('cardExpiration', {
              required: {
                value: true,
                message: 'Card expiration date is required',
              },
              pattern: {
                value: /\d{2}\/\d{4}/,
                message: 'Invalid typed card expiration date',
              },
            })}
          />
        </Grid>
        <Grid item xs={2}>
          <Input
            label="CVV"
            type="text"
            error={errors.cardCvv?.message || ''}
            maskType="cardCvv"
            {...register('cardCvv', {
              required: {
                value: true,
                message: 'Card CVV is required',
              },
              pattern: {
                value: /\d{3}/,
                message: 'Invalid typed card CVV',
              },
            })}
          />
        </Grid>
      </Grid>
      <Box mt={4} textAlign="right">
        <Button color="success" variant="outlined" type="submit">
          Confirm purchase
        </Button>
      </Box>
    </Box>
  );
}
