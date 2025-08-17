"use client";

import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  RefreshCw, 
  Plus, 
  Edit, 
  Trash2,
  FileText,
  Clock,
  CheckCircle,
  AlertTriangle,
  Download,
  Settings
} from 'lucide-react';

export default function StandardTransactionsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">المعاملات القياسية</h1>
            <p className="text-muted-foreground">
              إدارة المعاملات المالية الروتينية والتلقائية للموظفين
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <Settings className="ml-2 h-4 w-4" />
              إعدادات المعاملات
            </Button>
            <Button size="sm">
              <Plus className="ml-2 h-4 w-4" />
              معاملة جديدة
            </Button>
          </div>
        </div>

        {/* Transaction Summary Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <RefreshCw className="h-5 w-5 text-blue-500" />
                <div>
                  <div className="text-2xl font-bold">156</div>
                  <p className="text-sm text-muted-foreground">المعاملات النشطة</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <div>
                  <div className="text-2xl font-bold">1,248</div>
                  <p className="text-sm text-muted-foreground">معاملات مكتملة</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-orange-500" />
                <div>
                  <div className="text-2xl font-bold">23</div>
                  <p className="text-sm text-muted-foreground">في انتظار المعالجة</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-500" />
                <div>
                  <div className="text-2xl font-bold">5</div>
                  <p className="text-sm text-muted-foreground">معاملات فاشلة</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="active" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="active">المعاملات النشطة</TabsTrigger>
            <TabsTrigger value="templates">قوالب المعاملات</TabsTrigger>
            <TabsTrigger value="schedule">الجدولة</TabsTrigger>
            <TabsTrigger value="history">السجل</TabsTrigger>
            <TabsTrigger value="reports">التقارير</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>المعاملات النشطة</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { 
                      name: 'راتب شهر يناير 2024', 
                      type: 'راتب شهري',
                      employees: '1,248',
                      amount: '2,400,000',
                      status: 'processing',
                      date: '2024-01-31'
                    },
                    { 
                      name: 'بدل السكن - الربع الأول', 
                      type: 'بدل ربع سنوي',
                      employees: '1,248',
                      amount: '750,000',
                      status: 'pending',
                      date: '2024-03-31'
                    },
                    { 
                      name: 'مكافأة الأداء السنوية', 
                      type: 'مكافأة',
                      employees: '856',
                      amount: '1,200,000',
                      status: 'scheduled',
                      date: '2024-12-31'
                    },
                    { 
                      name: 'استقطاع قروض الموظفين', 
                      type: 'استقطاع شهري',
                      employees: '125',
                      amount: '45,000',
                      status: 'processing',
                      date: '2024-01-31'
                    }
                  ].map((transaction, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{transaction.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {transaction.type} • {transaction.employees} موظف • {transaction.date}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-left">
                          <p className="font-medium">{transaction.amount} ريال</p>
                          <Badge variant={
                            transaction.status === 'processing' ? 'default' :
                            transaction.status === 'pending' ? 'secondary' : 'outline'
                          }>
                            {transaction.status === 'processing' ? 'قيد المعالجة' :
                             transaction.status === 'pending' ? 'في الانتظار' : 'مجدولة'}
                          </Badge>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="templates" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  قوالب المعاملات
                  <Button size="sm">
                    <Plus className="ml-2 h-4 w-4" />
                    قالب جديد
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    { 
                      name: 'راتب شهري أساسي', 
                      description: 'الراتب الأساسي + البدلات الثابتة',
                      frequency: 'شهري',
                      employees: '1,248'
                    },
                    { 
                      name: 'بدل السكن الربع سنوي', 
                      description: 'بدل السكن كل 3 أشهر',
                      frequency: 'ربع سنوي',
                      employees: '1,248'
                    },
                    { 
                      name: 'مكافأة الأداء السنوية', 
                      description: 'مكافأة نهاية السنة حسب التقييم',
                      frequency: 'سنوي',
                      employees: '856'
                    },
                    { 
                      name: 'استقطاع القروض', 
                      description: 'استقطاع أقساط قروض الموظفين',
                      frequency: 'شهري',
                      employees: '125'
                    },
                    { 
                      name: 'بدل المواصلات', 
                      description: 'بدل المواصلات الشهري',
                      frequency: 'شهري',
                      employees: '1,100'
                    },
                    { 
                      name: 'مكافأة العيد', 
                      description: 'مكافأة الأعياد والمناسبات',
                      frequency: 'حسب المناسبة',
                      employees: '1,248'
                    }
                  ].map((template, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{template.name}</h4>
                        <Badge variant="outline">{template.frequency}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {template.description}
                      </p>
                      <p className="text-sm text-muted-foreground mb-3">
                        الموظفون: {template.employees}
                      </p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Edit className="ml-2 h-4 w-4" />
                          تعديل
                        </Button>
                        <Button size="sm" className="flex-1">
                          <RefreshCw className="ml-2 h-4 w-4" />
                          تشغيل
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedule" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>جدولة المعاملات</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { 
                      name: 'راتب شهر فبراير 2024', 
                      template: 'راتب شهري أساسي',
                      scheduledDate: '2024-02-28',
                      nextRun: '2024-02-28 23:59',
                      status: 'scheduled'
                    },
                    { 
                      name: 'بدل السكن - الربع الثاني', 
                      template: 'بدل السكن الربع سنوي',
                      scheduledDate: '2024-06-30',
                      nextRun: '2024-06-30 23:59',
                      status: 'scheduled'
                    },
                    { 
                      name: 'استقطاع قروض فبراير', 
                      template: 'استقطاع القروض',
                      scheduledDate: '2024-02-15',
                      nextRun: '2024-02-15 12:00',
                      status: 'scheduled'
                    },
                    { 
                      name: 'مكافأة عيد الفطر', 
                      template: 'مكافأة العيد',
                      scheduledDate: '2024-04-10',
                      nextRun: '2024-04-10 10:00',
                      status: 'scheduled'
                    }
                  ].map((schedule, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{schedule.name}</p>
                        <p className="text-sm text-muted-foreground">
                          القالب: {schedule.template}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          التشغيل التالي: {schedule.nextRun}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline">مجدولة</Badge>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>سجل المعاملات</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { 
                      name: 'راتب شهر ديسمبر 2023', 
                      type: 'راتب شهري',
                      amount: '2,350,000',
                      date: '2023-12-31',
                      status: 'completed',
                      employees: '1,235'
                    },
                    { 
                      name: 'مكافأة نهاية السنة 2023', 
                      type: 'مكافأة',
                      amount: '1,800,000',
                      date: '2023-12-25',
                      status: 'completed',
                      employees: '856'
                    },
                    { 
                      name: 'بدل السكن - الربع الرابع', 
                      type: 'بدل ربع سنوي',
                      amount: '740,000',
                      date: '2023-12-31',
                      status: 'completed',
                      employees: '1,235'
                    },
                    { 
                      name: 'استقطاع قروض ديسمبر', 
                      type: 'استقطاع شهري',
                      amount: '42,000',
                      date: '2023-12-15',
                      status: 'failed',
                      employees: '120'
                    }
                  ].map((transaction, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{transaction.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {transaction.type} • {transaction.employees} موظف • {transaction.date}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-left">
                          <p className="font-medium">{transaction.amount} ريال</p>
                          <Badge variant={transaction.status === 'completed' ? 'default' : 'destructive'}>
                            {transaction.status === 'completed' ? 'مكتملة' : 'فاشلة'}
                          </Badge>
                        </div>
                        <Button variant="outline" size="sm">
                          <FileText className="ml-2 h-4 w-4" />
                          التفاصيل
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>تقارير المعاملات</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    { name: 'تقرير المعاملات الشهرية', description: 'يناير 2024', type: 'Excel' },
                    { name: 'تقرير الأداء', description: 'كفاءة المعاملات', type: 'PDF' },
                    { name: 'تقرير الأخطاء', description: 'المعاملات الفاشلة', type: 'PDF' },
                    { name: 'تقرير التكاليف', description: 'تكلفة المعاملات', type: 'Excel' },
                    { name: 'تقرير الجدولة', description: 'المعاملات المجدولة', type: 'PDF' },
                    { name: 'تقرير الإحصائيات', description: 'إحصائيات شاملة', type: 'Excel' }
                  ].map((report, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="h-8 w-8 text-blue-500" />
                        <div>
                          <p className="font-medium">{report.name}</p>
                          <p className="text-sm text-muted-foreground">{report.description} • {report.type}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="ml-2 h-4 w-4" />
                        تحميل
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}