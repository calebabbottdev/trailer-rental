// MUI
import { Box, Container as MUIContainer } from '@mui/material';

export default function Container({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <Box id={id}>
      <MUIContainer maxWidth='lg'>{children}</MUIContainer>
    </Box>
  );
}
