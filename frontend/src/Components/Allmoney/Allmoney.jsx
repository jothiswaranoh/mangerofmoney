import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import React from 'react';

import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

const CustomPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  margin: 0,
  flexGrow: 1,
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' ? '#12161b' : '#f0f0f0',
  },
}));

const NameSection = styled('div')({
  backgroundColor: 'black',
  borderRadius: '50%',
  width: 100,
  height: 100,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 20,
});

const BoxComponent = ({ loan }) => {
  return (
    <Grid item xs={12} sm={4}>
      <CustomPaper>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12}>
            <NameSection>
              <Typography variant="h5" color="white">
                JS
              </Typography>
            </NameSection>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" color="primary">
              Loan Details
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Name:</strong> {loan.name}
            </Typography>
            <Typography variant="body1">
              <strong>Loan Amount:</strong> ${loan.loanAmount}
            </Typography>
            <Typography variant="body1">
              <strong>Amount Payable:</strong> ${loan.amountPayable}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">
              <strong>User ID:</strong> {loan.userID}
            </Typography>
            <Typography variant="body2">
              <strong>Late Charges:</strong> ${loan.lateCharges}
            </Typography>
            <Typography variant="body2">
              <strong>Total Amount:</strong> ${loan.totalAmount}
            </Typography>
            <Typography variant="body2">
              <strong>Loan Date:</strong> {loan.loanDate}
            </Typography>
            <Typography variant="body2">
              <strong>Pay On:</strong> {loan.payOn}
            </Typography>
            <Typography variant="body2">
              <strong>Due:</strong> {loan.due}
            </Typography>
          </Grid>
        </Grid>
      </CustomPaper>
    </Grid>
  );
};

const Allmoney = () => {
  // Sample loan data
  const loan = {
    userID: 101,
    name: 'Vasanth',
    loanAmount: 500,
    amountPayable: 550,
    lateCharges: 50,
    totalAmount: 600,
    loanDate: '05-05-2024',
    payOn: '05-06-2024',
    due: 1,
  };

  return (
    <Grid container spacing={2}>
      {[...Array(12)].map((_, index) => (
        <BoxComponent key={index} loan={loan} />
      ))}
    </Grid>
  );
};

export default Allmoney;
