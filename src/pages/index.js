import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { Budget } from '../components/dashboard/budget';
import { LatestOrders } from '../components/dashboard/latest-orders';
import { LatestProducts } from '../components/dashboard/latest-products';
import { Sales } from '../components/dashboard/sales';
import { TasksProgress } from '../components/dashboard/tasks-progress';
import { TotalCustomers } from '../components/dashboard/total-customers';
import { TotalProfit } from '../components/dashboard/total-profit';
import { TrafficByDevice } from '../components/dashboard/traffic-by-device';
import { DashboardLayout } from '../components/dashboard-layout';
import { Login } from '@mui/icons-material';
import Link from 'next/link';

const Page = () => (
  <>
    <Head>
      <title>Dashboard | Mental Health</title>
    </Head>
    <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
      <Container maxWidth={false}>
        <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
          <Grid item xs={12} sm={6} md={3}>
            <Link href="/psicologos" passHref>
              <Budget />
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Link href="/agendamentospage" passHref>
              <TasksProgress />
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TotalProfit sx={{ height: '100%' }} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Sales />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <TrafficByDevice sx={{ height: '100%' }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
