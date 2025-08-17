"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';

const attendanceData = [
  { month: 'يناير', attendance: 92, absence: 8 },
  { month: 'فبراير', attendance: 94, absence: 6 },
  { month: 'مارس', attendance: 91, absence: 9 },
  { month: 'أبريل', attendance: 95, absence: 5 },
  { month: 'مايو', attendance: 93, absence: 7 },
  { month: 'يونيو', attendance: 96, absence: 4 }
];

const payrollData = [
  { month: 'يناير', salary: 2300000, bonus: 150000 },
  { month: 'فبراير', salary: 2350000, bonus: 180000 },
  { month: 'مارس', salary: 2400000, bonus: 120000 },
  { month: 'أبريل', salary: 2450000, bonus: 200000 },
  { month: 'مايو', salary: 2500000, bonus: 160000 },
  { month: 'يونيو', salary: 2550000, bonus: 190000 }
];

const leaveData = [
  { name: 'إجازة سنوية', value: 45, color: '#3B82F6' },
  { name: 'إجازة مرضية', value: 23, color: '#10B981' },
  { name: 'إجازة طارئة', value: 15, color: '#F59E0B' },
  { name: 'إجازة أمومة', value: 8, color: '#EF4444' },
  { name: 'أخرى', value: 9, color: '#8B5CF6' }
];

export function ChartsSection() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Attendance Chart */}
      <Card className="col-span-1 lg:col-span-2">
        <CardHeader>
          <CardTitle>معدل الحضور والغياب</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="attendance" fill="#3B82F6" name="الحضور %" />
              <Bar dataKey="absence" fill="#EF4444" name="الغياب %" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Leave Types Pie Chart */}
      <Card>
        <CardHeader>
          <CardTitle>أنواع الإجازات</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={leaveData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {leaveData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Payroll Trend */}
      <Card className="col-span-1 lg:col-span-3">
        <CardHeader>
          <CardTitle>اتجاه الرواتب والمكافآت</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={payrollData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip 
                formatter={(value: number) => [
                  new Intl.NumberFormat('ar-EG').format(value),
                  ''
                ]}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="salary" 
                stroke="#10B981" 
                strokeWidth={3}
                name="الرواتب"
              />
              <Line 
                type="monotone" 
                dataKey="bonus" 
                stroke="#F59E0B" 
                strokeWidth={3}
                name="المكافآت"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}