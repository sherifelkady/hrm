"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Calendar,
  UserPlus,
  DollarSign,
  Clock,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'leave_request',
    user: 'أحمد محمد علي',
    action: 'قدم طلب إجازة سنوية',
    time: 'منذ دقيقتين',
    status: 'pending',
    icon: Calendar,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ahmed'
  },
  {
    id: 2,
    type: 'employee_added',
    user: 'فاطمة أحمد',
    action: 'تم إضافة موظف جديد',
    time: 'منذ 15 دقيقة',
    status: 'completed',
    icon: UserPlus,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=fatima'
  },
  {
    id: 3,
    type: 'salary_processed',
    user: 'محمد حسن',
    action: 'تم معالجة راتب الشهر',
    time: 'منذ 30 دقيقة',
    status: 'completed',
    icon: DollarSign,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=mohamed'
  },
  {
    id: 4,
    type: 'attendance',
    user: 'مريم سالم',
    action: 'سجلت دخول متأخر',
    time: 'منذ ساعة',
    status: 'warning',
    icon: Clock,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=mariam'
  },
  {
    id: 5,
    type: 'disciplinary',
    user: 'عبدالله يوسف',
    action: 'إجراء تأديبي - تحذير',
    time: 'منذ ساعتين',
    status: 'alert',
    icon: AlertTriangle,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=abdullah'
  },
  {
    id: 6,
    type: 'leave_approved',
    user: 'نورا أحمد',
    action: 'تم الموافقة على طلب الإجازة',
    time: 'منذ 3 ساعات',
    status: 'completed',
    icon: CheckCircle,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=nora'
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'completed':
      return <Badge className="bg-success text-white">مكتمل</Badge>;
    case 'pending':
      return <Badge variant="secondary">في انتظار</Badge>;
    case 'warning':
      return <Badge className="bg-warning text-white">تحذير</Badge>;
    case 'alert':
      return <Badge variant="destructive">تنبيه</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>النشاطات الأخيرة</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={activity.avatar} alt={activity.user} />
                  <AvatarFallback>
                    {activity.user.split(' ')[0].charAt(0) + activity.user.split(' ')[1].charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <activity.icon className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium text-sm">{activity.user}</span>
                    {getStatusBadge(activity.status)}
                  </div>
                  <p className="text-sm text-muted-foreground">{activity.action}</p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}