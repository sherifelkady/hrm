"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Users,
  Calendar,
  Banknote,
  Clock,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

const stats = [
  {
    title: 'إجمالي الموظفين',
    value: '1,248',
    change: '+12',
    changeType: 'increase' as const,
    changePercent: '+2.1%',
    description: 'من الشهر الماضي',
    icon: Users,
    color: 'bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400'
  },
  {
    title: 'طلبات الإجازة',
    value: '23',
    change: '+5',
    changeType: 'increase' as const,
    changePercent: '+27.8%',
    description: 'في انتظار الموافقة',
    icon: Calendar,
    color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400'
  },
  {
    title: 'إجمالي الرواتب',
    value: '2.4M',
    change: '-50K',
    changeType: 'decrease' as const,
    changePercent: '-2.0%',
    description: 'هذا الشهر',
    icon: Banknote,
    color: 'bg-orange-50 text-orange-600 dark:bg-orange-950 dark:text-orange-400'
  },
  {
    title: 'معدل الحضور',
    value: '94.2%',
    change: '+1.2%',
    changeType: 'increase' as const,
    changePercent: '+1.3%',
    description: 'هذا الأسبوع',
    icon: Clock,
    color: 'bg-purple-50 text-purple-600 dark:bg-purple-950 dark:text-purple-400'
  }
];

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="relative overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <div className={`p-2 rounded-lg ${stat.color}`}>
              <stat.icon className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
              <Badge 
                variant={stat.changeType === 'increase' ? 'default' : 'destructive'}
                className="flex items-center gap-1 px-2 py-0.5"
              >
                {stat.changeType === 'increase' ? (
                  <ArrowUpRight className="h-3 w-3" />
                ) : (
                  <ArrowDownRight className="h-3 w-3" />
                )}
                {stat.changePercent}
              </Badge>
              <span>{stat.description}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}