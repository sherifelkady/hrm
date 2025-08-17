"use client";

import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { StatsCards } from '@/components/dashboard/stats-cards';
import { ChartsSection } from '@/components/dashboard/charts-section';
import { DataTable } from '@/components/dashboard/data-table';
import { RecentActivity } from '@/components/dashboard/recent-activity';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">لوحة التحكم</h1>
          <p className="text-muted-foreground">
            مرحباً بك في نظام إدارة الموارد البشرية. نظرة شاملة على جميع العمليات والإحصائيات.
          </p>
        </div>

        {/* Stats Cards */}
        <StatsCards />

        {/* Charts Section */}
        <ChartsSection />

        {/* Data Tables and Activity */}
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <DataTable />
          </div>
          <div className="lg:col-span-1">
            <RecentActivity />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}