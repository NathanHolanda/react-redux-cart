import { styled, TextField, Typography } from '@mui/material';
import {
  forwardRef,
  ForwardRefRenderFunction,
  useEffect,
  useMemo,
  useState,
} from 'react';

type InputProps = {
  label: string;
  type: string;
  error: string;
  maskType?: 'zipCode' | 'cardNumber' | 'cardExpiration' | 'cardCvv';
};

const StyledInput = styled(TextField)(({ theme, error }) => ({
  width: '100%',

  '& .MuiInputLabel-root': {
    color:
      theme.palette.mode === 'dark'
        ? theme.palette.grey[500]
        : theme.palette.grey[600],
    '&.Mui-focused': {
      color: theme.palette.text.primary,
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: error ? theme.palette.error.main : theme.palette.text.primary,
  },
  '& .MuiOutlinedInput-root.Mui-focused': {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: error
        ? theme.palette.error.main
        : theme.palette.text.primary,
    },
  },
}));

const Base: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, type, maskType, error, ...rest }: InputProps,
  ref
) => {
  const [value, setValue] = useState<string>('');
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    if (error) setHasError(true);
  }, [error]);

  const mask = useMemo(
    () => ({
      zipCode(value: string): string {
        return value
          .replace(/\D/g, '')
          .replace(/(\d{5})(\d)/, '$1-$2')
          .replace(/(\d{5}-\d{4})\d+$/, '$1');
      },
      cardNumber(value: string): string {
        return value
          .replace(/\D/g, '')
          .replace(/(\d{4})(\d)/, '$1 $2')
          .replace(/(\d{4})(\d)/, '$1 $2')
          .replace(/(\d{4})(\d)/, '$1 $2')
          .replace(/((\d{4} ){3}\d{4})\d+$/, '$1');
      },
      cardExpiration(value: string): string {
        return value
          .replace(/\D/g, '')
          .replace(/(\d{2})(\d)/, '$1/$2')
          .replace(/(\d{2}\/\d{4})\d+$/, '$1');
      },
      cardCvv(value: string): string {
        return value.replace(/\D/, '').replace(/(\d{3})\d+$/, '$1');
      },
    }),
    [maskType]
  );

  return (
    <>
      <StyledInput
        {...rest}
        ref={ref}
        type={type}
        label={label}
        value={value}
        error={hasError}
        onChange={(event) => {
          setHasError(false);

          const { value } = event.target;
          if (maskType) {
            const masked = mask[maskType](value);
            setValue(masked);
          } else setValue(value);
        }}
        variant="outlined"
      />
      {hasError && (
        <Typography color="error" fontSize=".75rem" component="small">
          {error}
        </Typography>
      )}
    </>
  );
};

const Input = forwardRef(Base);

export default Input;
