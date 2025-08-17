"use client";

import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Clock, 
  Users, 
  Calendar, 
  TrendingUp,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Download,
  Settings,
  Play,
  Pause
} from 'lucide-react';

export default function TimeAttendancePage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">الوقت والحضور</h1>
            <p className="text-muted-foreground">
              إدارة ومتابعة أوقات الحضور والانصراف والساعات الإضافية
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <Settings className="ml-2 h-4 w-4" />
              إعدادات الحضور
            </Button>
            <Button size="sm">
              <Download className="ml-2 h-4 w-4" />
              تصدير التقرير
            </Button>
          </div>
        </div>

        {/* Attendance Summary Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <div>
                  <div className="text-2xl font-bold">1,156</div>
                  <p className="text-sm text-muted-foreground">حاضر اليوم</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <XCircle className="h-5 w-5 text-red-500" />
                <div>
                  <div className="text-2xl font-bold">67</div>
                  <p className="text-sm text-muted-foreground">غائب اليوم</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-orange-500" />
                <div>
                  <div className="text-2xl font-bold">25</div>
                  <p className="text-sm text-muted-foreground">متأخر اليوم</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-500" />
                <div>
                  <div className="text-2xl font-bold">94.2%</div>
                  <p className="text-sm text-muted-foreground">معدل الحضور</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="today" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="today">حضور اليوم</TabsTrigger>
            <TabsTrigger value="tracking">تتبع الوقت</TabsTrigger>
            <TabsTrigger value="overtime">الساعات الإضافية</TabsTrigger>
            <TabsTrigger value="schedules">الجداول</TabsTrigger>
            <TabsTrigger value="reports">التقارير</TabsTrigger>
          </TabsList>

          <TabsContent value="today" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  حضور اليوم - {new Date().toLocaleDateString('ar-SA')}
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Download className="ml-2 h-4 w-4" />
                      تصدير
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { 
                      name: 'أحمد محمد علي',
                      id: 'E001',
                      department: 'تكنولوجيا المعلومات',
                      checkIn: '08:00',
                      checkOut: '17:00',
                      totalHours: '9:00',
                      status: 'present',
                      overtime: '0:00'
                    },
                    { 
                      name: 'فاطمة أحمد السيد',
                      id: 'E002',
                      department: 'الموارد البشرية',
                      checkIn: '08:15',
                      checkOut: '17:15',
                      totalHours: '9:00',
                      status: 'late',
                      overtime: '0:15'
                    },
                    { 
                      name: 'محمد حسن إبراهيم',
                      id: 'E003',
                      department: 'المالية',
                      checkIn: '--',
                      checkOut: '--',
                      totalHours: '0:00',
                      status: 'absent',
                      overtime: '0:00'
                    },
                    { 
                      name: 'مريم سالم العتيبي',
                      id: 'E004',
                      department: 'التسويق',
                      checkIn: '07:45',
                      checkOut: '18:30',
                      totalHours: '10:45',
                      status: 'present',
                      overtime: '1:45'
                    },
                    { 
                      name: 'عبدالله يوسف القحطاني',
                      id: 'E005',
                      department: 'العمليات',
                      checkIn: '08:30',
                      checkOut: '17:30',
                      totalHours: '9:00',
                      status: 'late',
                      overtime: '0:00'
                    }
                  ].map((employee, index) => (
                    <div key={index} className="grid grid-cols-8 gap-4 p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{employee.name}</p>
                        <p className="text-sm text-muted-foreground">{employee.id}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">القسم</p>
                        <p className="text-sm">{employee.department}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">دخول</p>
                        <p className="font-medium">{employee.checkIn}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">خروج</p>
                        <p className="font-medium">{employee.checkOut}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">الساعات</p>
                        <p className="font-medium">{employee.totalHours}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">إضافي</p>
                        <p className="font-medium">{employee.overtime}</p>
                      </div>
                      <div className="text-center">
                        <Badge variant={
                          employee.status === 'present' ? 'default' :
                          employee.status === 'late' ? 'secondary' : 'destructive'
                        }>
                          {employee.status === 'present' ? 'حاضر' :
                           employee.status === 'late' ? 'متأخر' : 'غائب'}
                        </Badge>
                      </div>
                      <div className="text-center">
                        <Button variant="outline" size="sm">
                          تفاصيل
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tracking" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>تسجيل الحضور اليدوي</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="employeeId">رقم الموظف</Label>
                    <Input id="employeeId" placeholder="E001" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="actionType">نوع العملية</Label>
                    <select className="w-full p-2 border rounded-md">
                      <option>تسجيل دخول</option>
                      <option>تسجيل خروج</option>
                      <option>بداية استراحة</option>
                      <option>نهاية استراحة</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timestamp">الوقت</Label>
                    <Input id="timestamp" type="datetime-local" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reason">السبب (اختياري)</Label>
                    <Input id="reason" placeholder="تسجيل متأخر بسبب..." />
                  </div>
                  <Button className="w-full">
                    <Clock className="ml-2 h-4 w-4" />
                    تسجيل الحضور
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>الحضور المباشر</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-4">
                    <div className="text-6xl font-bold text-primary">
                      {new Date().toLocaleTimeString('ar-SA', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </div>
                    <p className="text-muted-foreground">
                      {new Date().toLocaleDateString('ar-SA', { 
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                    
                    <div className="space-y-2">
                      <Button size="lg" className="w-full">
                        <Play className="ml-2 h-5 w-5" />
                        تسجيل دخول
                      </Button>
                      <Button size="lg" variant="outline" className="w-full">
                        <Pause className="ml-2 h-5 w-5" />
                        تسجيل خروج
                      </Button>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <p className="text-sm text-muted-foreground mb-2">آخر نشاط:</p>
                      <p className="font-medium">تسجيل دخول - 08:00 ص</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>سجل الحضور الأخير</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { employee: 'أحمد محمد علي', action: 'تسجيل دخول', time: '08:00', date: 'اليوم' },
                    { employee: 'فاطمة أحمد السيد', action: 'تسجيل خروج', time: '17:15', date: 'أمس' },
                    { employee: 'محمد حسن إبراهيم', action: 'بداية استراحة', time: '12:00', date: 'اليوم' },
                    { employee: 'مريم سالم العتيبي', action: 'نهاية استراحة', time: '13:00', date: 'اليوم' }
                  ].map((record, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div>
                        <p className="font-medium">{record.employee}</p>
                        <p className="text-sm text-muted-foreground">{record.action}</p>
                      </div>
                      <div className="text-left">
                        <p className="font-medium">{record.time}</p>
                        <p className="text-sm text-muted-foreground">{record.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="overtime" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>الساعات الإضافية</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { 
                      name: 'مريم سالم العتيبي',
                      department: 'التسويق',
                      date: '2024-02-15',
                      regularHours: '9:00',
                      overtimeHours: '2:30',
                      rate: '1.5x',
                      amount: '375'
                    },
                    { 
                      name: 'عبدالله يوسف القحطاني',
                      department: 'العمليات',
                      date: '2024-02-14',
                      regularHours: '9:00',
                      overtimeHours: '3:00',
                      rate: '1.5x',
                      amount: '450'
                    },
                    { 
                      name: 'أحمد محمد علي',
                      department: 'تكنولوجيا المعلومات',
                      date: '2024-02-13',
                      regularHours: '9:00',
                      overtimeHours: '1:45',
                      rate: '1.5x',
                      amount: '262'
                    },
                    { 
                      name: 'فاطمة أحمد السيد',
                      department: 'الموارد البشرية',
                      date: '2024-02-12',
                      regularHours: '9:00',
                      overtimeHours: '1:15',
                      rate: '1.5x',
                      amount: '187'
                    }
                  ].map((overtime, index) => (
                    <div key={index} className="grid grid-cols-7 gap-4 p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{overtime.name}</p>
                        <p className="text-sm text-muted-foreground">{overtime.department}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">التاريخ</p>
                        <p className="font-medium">{overtime.date}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">ساعات عادية</p>
                        <p className="font-medium">{overtime.regularHours}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">ساعات إضافية</p>
                        <p className="font-medium text-orange-600">{overtime.overtimeHours}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">المعدل</p>
                        <Badge variant="outline">{overtime.rate}</Badge>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">المبلغ</p>
                        <p className="font-medium text-green-600">{overtime.amount} ريال</p>
                      </div>
                      <div className="text-center">
                        <Button variant="outline" size="sm">
                          تفاصيل
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedules" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>جداول العمل</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    { 
                      name: 'الدوام الصباحي',
                      startTime: '08:00',
                      endTime: '17:00',
                      breakTime: '12:00 - 13:00',
                      employees: '856',
                      days: 'الأحد - الخميس'
                    },
                    { 
                      name: 'الدوام المسائي',
                      startTime: '14:00',
                      endTime: '23:00',
                      breakTime: '18:00 - 19:00',
                      employees: '125',
                      days: 'الأحد - الخميس'
                    },
                    { 
                      name: 'دوام نهاية الأسبوع',
                      startTime: '09:00',
                      endTime: '15:00',
                      breakTime: '12:00 - 12:30',
                      employees: '67',
                      days: 'الجمعة - السبت'
                    },
                    { 
                      name: 'الدوام المرن',
                      startTime: '07:00 - 10:00',
                      endTime: '15:00 - 18:00',
                      breakTime: 'مرن',
                      employees: '200',
                      days: 'الأحد - الخميس'
                    }
                  ].map((schedule, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium">{schedule.name}</h4>
                        <Badge variant="outline">{schedule.employees} موظف</Badge>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>وقت البداية:</span>
                          <span className="font-medium">{schedule.startTime}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>وقت النهاية:</span>
                          <span className="font-medium">{schedule.endTime}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>وقت الاستراحة:</span>
                          <span className="font-medium">{schedule.breakTime}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>أيام العمل:</span>
                          <span className="font-medium">{schedule.days}</span>
                        </div>
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
                <CardTitle>تقارير الحضور والوقت</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    { name: 'تقرير الحضور اليومي', description: 'تقرير حضور اليوم', type: 'PDF' },
                    { name: 'تقرير الحضور الأسبوعي', description: 'تقرير الأسبوع الحالي', type: 'Excel' },
                    { name: 'تقرير الحضور الشهري', description: 'يناير 2024', type: 'PDF' },
                    { name: 'تقرير الساعات الإضافية', description: 'الساعات الإضافية الشهرية', type: 'Excel' },
                    { name: 'تقرير التأخير والغياب', description: 'تحليل التأخير والغياب', type: 'PDF' },
                    { name: 'تقرير الإنتاجية', description: 'تحليل ساعات العمل', type: 'Excel' }
                  ].map((report, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Clock className="h-8 w-8 text-blue-500" />
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