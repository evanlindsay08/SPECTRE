import * as React from 'react';
import Layout from '../components/Layout';
import DashboardCard from '../components/DashboardCard';
import Terminal from '../components/Terminal';

export default function Home() {
  return (
    <Layout>
      <DashboardCard title="Sentiment" status="loading">
        {/* Add visualization component here */}
      </DashboardCard>
      <DashboardCard title="Processes" status="running">
        {/* Add process list component here */}
      </DashboardCard>
      <DashboardCard title="Data" status="loading">
        {/* Add data visualization here */}
      </DashboardCard>
      <DashboardCard title="Seed">
        {/* Add seed visualization here */}
      </DashboardCard>
      <Terminal />
    </Layout>
  );
} 