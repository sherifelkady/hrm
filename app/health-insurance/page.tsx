"use client";

import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Heart, 
  Users, 
  Calculator, 
  FileText,
  Activity,
  AlertCircle,
  Download,
  Plus,
  Settings,
  Shield
} from 'lucide-react';

export default function HealthInsurancePage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">التأمين الصحي</h1>
            <p className="text-muted-foreground">
              إدارة التأمين الصحي للموظفين ومتابعة التغطية والمطالبات
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <Settings className="ml-2 h-4 w-4" />
              إعدادات التأمين
            </Button>
            <Button size="sm">
              <Plus className="ml-2 h-4 w-4" />
              إضافة مطالبة
            </Button>
          </div>
        </div>

        {/* Health Insurance Summary Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-500" />
                <div>
                  <div className="text-2xl font-bold">1,248</div>
                  <p className="text-sm text-muted-foreground">الموظفون المؤمنون</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-green-500" />
                <div>
                  <div className="text-2xl font-bold">180K</div>
                  <p className="text-sm text-muted-foreground">إجمالي الأقساط الشهرية</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-orange-500" />
                <div>
                  <div className="text-2xl font-bold">45</div>
                  <p className="text-sm text-muted-foreground">المطالبات النشطة</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-red-500" />
                <div>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-sm text-muted-foreground">مطالبات تحتاج مراجعة</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="employees" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="employees">الموظفون</TabsTrigger>
            <TabsTrigger value="plans">خطط التأمين</TabsTrigger>
            <TabsTrigger value="claims">المطالبات</TabsTrigger>
            <TabsTrigger value="reports">التقارير</TabsTrigger>
            <TabsTrigger value="settings">الإعدادات</TabsTrigger>
          </TabsList>

          <TabsContent value="employees" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>الموظفون المشتركون في التأمين الصحي</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { 
                      name: 'أحمد محمد علي', 
                      id: 'E001', 
                      plan: 'الخطة الذهبية', 
                      premium: '450',
                      dependents: '3',
                      status: 'active'
                    },
                    { 
                      name: 'فاطمة أحمد السيد', 
                      id: 'E002', 
                      plan: 'الخطة الفضية', 
                      premium: '320',
                      dependents: '2',
                      status: 'active'
                    },
                    { 
                      name: 'محمد حسن إبراهيم', 
                      id: 'E003', 
                      plan: 'الخطة البرونزية', 
                      premium: '250',
                      dependents: '1',
                      status: 'suspended'
                    },
                    { 
                      name: 'مريم سالم العتيبي', 
                      id: 'E004', 
                      plan: 'الخطة الذهبية', 
                      premium: '450',
                      dependents: '4',
                      status: 'active'
                    }
                  ].map((employee, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="font-medium">{employee.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {employee.id} • {employee.plan}
                          </p>
                        </div>
                      </div>
                      <div className="text-left">
                        <p className="font-medium">قسط: {employee.premium} ريال</p>
                        <p className="text-sm text-muted-foreground">المعالين: {employee.dependents}</p>
                      </div>
                      <Badge variant={employee.status === 'active' ? 'default' : 'destructive'}>
                        {employee.status === 'active' ? 'نشط' : 'متوقف'}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="plans" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-orange-500" />
                    الخطة البرونزية
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">250 ريال</div>
                    <p className="text-sm text-muted-foreground">شهرياً للموظف</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">التغطية تشمل:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• العيادات الخارجية</li>
                      <li>• الأدوية الأساسية</li>
                      <li>• الفحوصات الدورية</li>
                      <li>• طوارئ محدودة</li>
                    </ul>
                  </div>
                  <Button variant="outline" className="w-full">عرض التفاصيل</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-gray-500" />
                    الخطة الفضية
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">320 ريال</div>
                    <p className="text-sm text-muted-foreground">شهرياً للموظف</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">التغطية تشمل:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• جميع مزايا البرونزية</li>
                      <li>• التنويم لمدة 30 يوم</li>
                      <li>• العمليات البسيطة</li>
                      <li>• تغطية الأسنان الأساسية</li>
                    </ul>
                  </div>
                  <Button variant="outline" className="w-full">عرض التفاصيل</Button>
                </CardContent>
              </Card>

              <Card className="border-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-yellow-500" />
                    الخطة الذهبية
                    <Badge className="mr-2">الأكثر شعبية</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">450 ريال</div>
                    <p className="text-sm text-muted-foreground">شهرياً للموظف</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">التغطية تشمل:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• جميع مزايا الفضية</li>
                      <li>• تغطية شاملة للعائلة</li>
                      <li>• العمليات الكبرى</li>
                      <li>• تغطية الأمومة</li>
                      <li>• العلاج الطبيعي</li>
                    </ul>
                  </div>
                  <Button className="w-full">عرض التفاصيل</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="claims" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>المطالبات الأخيرة</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { 
                      employee: 'أحمد محمد علي', 
                      claimId: 'CLM-001', 
                      type: 'عيادة خارجية',
                      amount: '850',
                      date: '2024-02-15',
                      status: 'approved'
                    },
                    { 
                      employee: 'فاطمة أحمد السيد', 
                      claimId: 'CLM-002', 
                      type: 'أدوية',
                      amount: '320',
                      date: '2024-02-14',
                      status: 'pending'
                    },
                    { 
                      employee: 'محمد حسن إبراهيم', 
                      claimId: 'CLM-003', 
                      type: 'فحوصات',
                      amount: '1,200',
                      date: '2024-02-13',
                      status: 'rejected'
                    },
                    { 
                      employee: 'مريم سالم العتيبي', 
                      claimId: 'CLM-004', 
                      type: 'طوارئ',
                      amount: '2,500',
                      date: '2024-02-12',
                      status: 'approved'
                    }
                  ].map((claim, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{claim.employee}</p>
                        <p className="text-sm text-muted-foreground">
                          {claim.claimId} • {claim.type} • {claim.date}
                        </p>
                      </div>
                      <div className="text-left">
                        <p className="font-medium">{claim.amount} ريال</p>
                        <Badge variant={
                          claim.status === 'approved' ? 'default' :
                          claim.status === 'pending' ? 'secondary' : 'destructive'
                        }>
                          {claim.status === 'approved' ? 'موافق' :
                           claim.status === 'pending' ? 'في الانتظار' : 'مرفوض'}
                        </Badge>
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
                <CardTitle>تقارير التأمين الصحي</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    { name: 'تقرير الأقساط الشهرية', description: 'يناير 2024', type: 'Excel' },
                    { name: 'تقرير المطالبات', description: 'تحليل المطالبات', type: 'PDF' },
                    { name: 'تقرير التغطية', description: 'نسب التغطية', type: 'PDF' },
                    { name: 'تقرير الاستخدام', description: 'إحصائيات الاستخدام', type: 'Excel' }
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

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>إعدادات التأمين الصحي</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>شركة التأمين</Label>
                    <Input value="شركة التأمين الطبي المتحدة" />
                  </div>
                  <div className="space-y-2">
                    <Label>رقم البوليصة</Label>
                    <Input value="POL-2024-001" />
                  </div>
                  <div className="space-y-2">
                    <Label>تاريخ بداية التغطية</Label>
                    <Input value="2024-01-01" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label>تاريخ انتهاء التغطية</Label>
                    <Input value="2024-12-31" type="date" />
                  </div>
                </div>
                
                <div className="space-y-4 pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">تسجيل الموظفين الجدد تلقائياً</h4>
                      <p className="text-sm text-muted-foreground">إضافة الموظفين الجدد للتأمين تلقائياً</p>
                    </div>
                    <Button variant="outline" size="sm">تفعيل</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">إشعارات المطالبات</h4>
                      <p className="text-sm text-muted-foreground">تلقي إشعارات عند تقديم مطالبات جديدة</p>
                    </div>
                    <Button variant="outline" size="sm">تفعيل</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">تجديد تلقائي</h4>
                      <p className="text-sm text-muted-foreground">تجديد البوليصة تلقائياً عند انتهائها</p>
                    </div>
                    <Button variant="outline" size="sm">تفعيل</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}