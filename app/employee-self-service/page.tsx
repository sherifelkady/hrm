"use client";

import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  User, 
  Calendar, 
  FileText, 
  Clock, 
  Download, 
  Edit,
  Bell,
  CreditCard,
  Shield,
  Settings
} from 'lucide-react';

export default function EmployeeSelfServicePage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">الخدمة الذاتية للموظفين</h1>
            <p className="text-muted-foreground">
              إدارة معلوماتك الشخصية وطلباتك بسهولة
            </p>
          </div>
          <Button size="sm">
            <Edit className="ml-2 h-4 w-4" />
            تحديث الملف الشخصي
          </Button>
        </div>

        {/* Employee Profile Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-6">
              <Avatar className="h-20 w-20">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=ahmed" alt="أحمد محمد" />
                <AvatarFallback className="text-lg">أم</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-2xl font-bold">أحمد محمد علي</h2>
                <p className="text-muted-foreground">مطور برمجيات - تكنولوجيا المعلومات</p>
                <div className="flex items-center gap-4 mt-2">
                  <Badge className="bg-success text-white">نشط</Badge>
                  <span className="text-sm text-muted-foreground">رقم الموظف: E001</span>
                  <span className="text-sm text-muted-foreground">تاريخ الانضمام: 15 يناير 2024</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-4 text-center">
              <Calendar className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h3 className="font-medium">طلب إجازة</h3>
              <p className="text-sm text-muted-foreground">تقديم طلب إجازة جديد</p>
            </CardContent>
          </Card>
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-4 text-center">
              <Clock className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h3 className="font-medium">سجل الحضور</h3>
              <p className="text-sm text-muted-foreground">عرض سجل الحضور والانصراف</p>
            </CardContent>
          </Card>
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-4 text-center">
              <CreditCard className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h3 className="font-medium">كشف الراتب</h3>
              <p className="text-sm text-muted-foreground">تحميل كشوف الرواتب</p>
            </CardContent>
          </Card>
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-4 text-center">
              <FileText className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h3 className="font-medium">الوثائق</h3>
              <p className="text-sm text-muted-foreground">عرض وتحميل الوثائق</p>
            </CardContent>
          </Card>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="profile">الملف الشخصي</TabsTrigger>
            <TabsTrigger value="leaves">الإجازات</TabsTrigger>
            <TabsTrigger value="payroll">الرواتب</TabsTrigger>
            <TabsTrigger value="attendance">الحضور</TabsTrigger>
            <TabsTrigger value="documents">الوثائق</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>المعلومات الشخصية</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">الاسم الكامل</label>
                    <p className="text-sm">أحمد محمد علي</p>
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">البريد الإلكتروني</label>
                    <p className="text-sm">ahmed.mohamed@company.com</p>
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">رقم الهاتف</label>
                    <p className="text-sm">+966 50 123 4567</p>
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">رقم الهوية</label>
                    <p className="text-sm">1234567890</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>معلومات العمل</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">القسم</label>
                    <p className="text-sm">تكنولوجيا المعلومات</p>
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">المنصب</label>
                    <p className="text-sm">مطور برمجيات</p>
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">المدير المباشر</label>
                    <p className="text-sm">محمد أحمد السيد</p>
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">تاريخ الانضمام</label>
                    <p className="text-sm">15 يناير 2024</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="leaves" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>رصيد الإجازات</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium text-green-600">الإجازة السنوية</h4>
                    <p className="text-2xl font-bold">22</p>
                    <p className="text-sm text-muted-foreground">يوم متبقي من 30</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium text-blue-600">الإجازة المرضية</h4>
                    <p className="text-2xl font-bold">85</p>
                    <p className="text-sm text-muted-foreground">يوم متبقي من 90</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium text-orange-600">الإجازة الطارئة</h4>
                    <p className="text-2xl font-bold">3</p>
                    <p className="text-sm text-muted-foreground">يوم متبقي من 5</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>طلبات الإجازة الأخيرة</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { type: 'إجازة سنوية', from: '2024-02-15', to: '2024-02-20', status: 'approved' },
                    { type: 'إجازة مرضية', from: '2024-01-10', to: '2024-01-12', status: 'approved' },
                    { type: 'إجازة طارئة', from: '2024-01-05', to: '2024-01-05', status: 'pending' }
                  ].map((leave, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{leave.type}</p>
                        <p className="text-sm text-muted-foreground">{leave.from} - {leave.to}</p>
                      </div>
                      <Badge variant={leave.status === 'approved' ? 'default' : 'secondary'}>
                        {leave.status === 'approved' ? 'موافق' : 'في الانتظار'}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payroll" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>كشوف الرواتب</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { month: 'يناير 2024', amount: '15,000', status: 'paid' },
                    { month: 'ديسمبر 2023', amount: '15,000', status: 'paid' },
                    { month: 'نوفمبر 2023', amount: '15,000', status: 'paid' }
                  ].map((payslip, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{payslip.month}</p>
                        <p className="text-sm text-muted-foreground">{payslip.amount} ريال</p>
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

          <TabsContent value="attendance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>سجل الحضور هذا الأسبوع</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { day: 'الأحد', date: '2024-02-11', checkIn: '08:00', checkOut: '17:00', hours: '9:00' },
                    { day: 'الاثنين', date: '2024-02-12', checkIn: '08:15', checkOut: '17:15', hours: '9:00' },
                    { day: 'الثلاثاء', date: '2024-02-13', checkIn: '08:00', checkOut: '17:00', hours: '9:00' },
                    { day: 'الأربعاء', date: '2024-02-14', checkIn: '08:30', checkOut: '17:30', hours: '9:00' },
                    { day: 'الخميس', date: '2024-02-15', checkIn: '08:00', checkOut: '17:00', hours: '9:00' }
                  ].map((record, index) => (
                    <div key={index} className="grid grid-cols-5 gap-4 p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{record.day}</p>
                        <p className="text-sm text-muted-foreground">{record.date}</p>
                      </div>
                      <div>
                        <p className="text-sm">دخول</p>
                        <p className="font-medium">{record.checkIn}</p>
                      </div>
                      <div>
                        <p className="text-sm">خروج</p>
                        <p className="font-medium">{record.checkOut}</p>
                      </div>
                      <div>
                        <p className="text-sm">الساعات</p>
                        <p className="font-medium">{record.hours}</p>
                      </div>
                      <div>
                        <Badge className="bg-success text-white">حاضر</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>الوثائق المتاحة</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    { name: 'عقد العمل', type: 'PDF', size: '2.5 MB' },
                    { name: 'شهادة الخبرة', type: 'PDF', size: '1.2 MB' },
                    { name: 'تأمين صحي', type: 'PDF', size: '800 KB' },
                    { name: 'بيانات الضمان الاجتماعي', type: 'PDF', size: '1.1 MB' }
                  ].map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="h-8 w-8 text-red-500" />
                        <div>
                          <p className="font-medium">{doc.name}</p>
                          <p className="text-sm text-muted-foreground">{doc.type} • {doc.size}</p>
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