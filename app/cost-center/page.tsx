"use client";

import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Building, 
  DollarSign, 
  TrendingUp, 
  Users,
  PieChart,
  BarChart3,
  Plus,
  Edit,
  Download,
  Settings
} from 'lucide-react';

export default function CostCenterPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">مركز التكلفة</h1>
            <p className="text-muted-foreground">
              إدارة وتتبع تكاليف الأقسام والمشاريع والموارد البشرية
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <Settings className="ml-2 h-4 w-4" />
              إعدادات التكلفة
            </Button>
            <Button size="sm">
              <Plus className="ml-2 h-4 w-4" />
              مركز تكلفة جديد
            </Button>
          </div>
        </div>

        {/* Cost Center Summary Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-green-500" />
                <div>
                  <div className="text-2xl font-bold">2.8M</div>
                  <p className="text-sm text-muted-foreground">إجمالي التكاليف الشهرية</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Building className="h-5 w-5 text-blue-500" />
                <div>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-sm text-muted-foreground">مراكز التكلفة النشطة</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-orange-500" />
                <div>
                  <div className="text-2xl font-bold">+5.2%</div>
                  <p className="text-sm text-muted-foreground">نمو التكاليف الشهرية</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-purple-500" />
                <div>
                  <div className="text-2xl font-bold">1,248</div>
                  <p className="text-sm text-muted-foreground">الموظفون المخصصون</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="centers" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="centers">مراكز التكلفة</TabsTrigger>
            <TabsTrigger value="allocation">التخصيص</TabsTrigger>
            <TabsTrigger value="analysis">التحليل</TabsTrigger>
            <TabsTrigger value="budget">الميزانية</TabsTrigger>
            <TabsTrigger value="reports">التقارير</TabsTrigger>
          </TabsList>

          <TabsContent value="centers" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  مراكز التكلفة النشطة
                  <Button size="sm">
                    <Plus className="ml-2 h-4 w-4" />
                    مركز جديد
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { 
                      name: 'تكنولوجيا المعلومات',
                      code: 'IT-001',
                      manager: 'أحمد محمد علي',
                      employees: '125',
                      monthlyCost: '450,000',
                      budget: '500,000',
                      utilization: '90%'
                    },
                    { 
                      name: 'الموارد البشرية',
                      code: 'HR-001',
                      manager: 'فاطمة أحمد السيد',
                      employees: '45',
                      monthlyCost: '180,000',
                      budget: '200,000',
                      utilization: '90%'
                    },
                    { 
                      name: 'المالية والمحاسبة',
                      code: 'FIN-001',
                      manager: 'محمد حسن إبراهيم',
                      employees: '67',
                      monthlyCost: '220,000',
                      budget: '250,000',
                      utilization: '88%'
                    },
                    { 
                      name: 'التسويق والمبيعات',
                      code: 'MKT-001',
                      manager: 'مريم سالم العتيبي',
                      employees: '89',
                      monthlyCost: '320,000',
                      budget: '350,000',
                      utilization: '91%'
                    },
                    { 
                      name: 'العمليات والإنتاج',
                      code: 'OPS-001',
                      manager: 'عبدالله يوسف القحطاني',
                      employees: '456',
                      monthlyCost: '1,200,000',
                      budget: '1,300,000',
                      utilization: '92%'
                    }
                  ].map((center, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-medium">{center.name}</p>
                          <Badge variant="outline">{center.code}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">
                          المدير: {center.manager}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          الموظفون: {center.employees} • التكلفة الشهرية: {center.monthlyCost} ريال
                        </p>
                      </div>
                      <div className="text-left">
                        <p className="text-sm text-muted-foreground">الميزانية</p>
                        <p className="font-medium">{center.budget} ريال</p>
                        <Badge variant={
                          parseFloat(center.utilization) > 95 ? 'destructive' :
                          parseFloat(center.utilization) > 85 ? 'secondary' : 'default'
                        }>
                          {center.utilization} مستخدم
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <BarChart3 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="allocation" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>تخصيص التكاليف</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="costType">نوع التكلفة</Label>
                    <select className="w-full p-2 border rounded-md">
                      <option>رواتب ومزايا</option>
                      <option>تكاليف تشغيلية</option>
                      <option>معدات وأجهزة</option>
                      <option>تدريب وتطوير</option>
                      <option>مصاريف إدارية</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="amount">المبلغ</Label>
                    <Input id="amount" placeholder="50000" type="number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="allocationMethod">طريقة التخصيص</Label>
                    <select className="w-full p-2 border rounded-md">
                      <option>حسب عدد الموظفين</option>
                      <option>حسب النسبة المئوية</option>
                      <option>مبلغ ثابت</option>
                      <option>حسب الاستخدام</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="period">الفترة</Label>
                    <select className="w-full p-2 border rounded-md">
                      <option>شهري</option>
                      <option>ربع سنوي</option>
                      <option>نصف سنوي</option>
                      <option>سنوي</option>
                    </select>
                  </div>
                  <Button className="w-full">
                    تطبيق التخصيص
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>توزيع التكاليف الحالي</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { category: 'رواتب ومزايا', amount: '2,100,000', percentage: '75%' },
                      { category: 'تكاليف تشغيلية', amount: '420,000', percentage: '15%' },
                      { category: 'معدات وأجهزة', amount: '168,000', percentage: '6%' },
                      { category: 'تدريب وتطوير', amount: '84,000', percentage: '3%' },
                      { category: 'مصاريف إدارية', amount: '28,000', percentage: '1%' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div>
                          <p className="font-medium">{item.category}</p>
                          <p className="text-sm text-muted-foreground">{item.amount} ريال</p>
                        </div>
                        <Badge variant="outline">{item.percentage}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analysis" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>تحليل التكاليف حسب القسم</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { department: 'العمليات والإنتاج', cost: '1,200,000', change: '+3.2%', trend: 'up' },
                      { department: 'تكنولوجيا المعلومات', cost: '450,000', change: '+8.5%', trend: 'up' },
                      { department: 'التسويق والمبيعات', cost: '320,000', change: '-2.1%', trend: 'down' },
                      { department: 'المالية والمحاسبة', cost: '220,000', change: '+1.8%', trend: 'up' },
                      { department: 'الموارد البشرية', cost: '180,000', change: '+0.5%', trend: 'up' }
                    ].map((dept, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">{dept.department}</p>
                          <p className="text-sm text-muted-foreground">{dept.cost} ريال</p>
                        </div>
                        <div className="text-left">
                          <Badge variant={dept.trend === 'up' ? 'destructive' : 'default'}>
                            {dept.change}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>مؤشرات الأداء الرئيسية</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                      <h4 className="font-medium text-blue-600">التكلفة لكل موظف</h4>
                      <p className="text-2xl font-bold">2,244 ريال</p>
                      <p className="text-sm text-muted-foreground">متوسط شهري</p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                      <h4 className="font-medium text-green-600">كفاءة استخدام الميزانية</h4>
                      <p className="text-2xl font-bold">91%</p>
                      <p className="text-sm text-muted-foreground">من الميزانية المخصصة</p>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                      <h4 className="font-medium text-orange-600">نمو التكاليف</h4>
                      <p className="text-2xl font-bold">+5.2%</p>
                      <p className="text-sm text-muted-foreground">مقارنة بالشهر الماضي</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                      <h4 className="font-medium text-purple-600">العائد على الاستثمار</h4>
                      <p className="text-2xl font-bold">15.8%</p>
                      <p className="text-sm text-muted-foreground">ROI سنوي</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="budget" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>مقارنة الميزانية والتكاليف الفعلية</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { 
                      center: 'تكنولوجيا المعلومات',
                      budget: '500,000',
                      actual: '450,000',
                      variance: '-50,000',
                      percentage: '90%'
                    },
                    { 
                      center: 'الموارد البشرية',
                      budget: '200,000',
                      actual: '180,000',
                      variance: '-20,000',
                      percentage: '90%'
                    },
                    { 
                      center: 'المالية والمحاسبة',
                      budget: '250,000',
                      actual: '220,000',
                      variance: '-30,000',
                      percentage: '88%'
                    },
                    { 
                      center: 'التسويق والمبيعات',
                      budget: '350,000',
                      actual: '320,000',
                      variance: '-30,000',
                      percentage: '91%'
                    },
                    { 
                      center: 'العمليات والإنتاج',
                      budget: '1,300,000',
                      actual: '1,200,000',
                      variance: '-100,000',
                      percentage: '92%'
                    }
                  ].map((item, index) => (
                    <div key={index} className="grid grid-cols-5 gap-4 p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{item.center}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">الميزانية</p>
                        <p className="font-medium">{item.budget}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">الفعلي</p>
                        <p className="font-medium">{item.actual}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">الانحراف</p>
                        <p className="font-medium text-green-600">{item.variance}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">النسبة</p>
                        <Badge variant="default">{item.percentage}</Badge>
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
                <CardTitle>تقارير مركز التكلفة</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    { name: 'تقرير التكاليف الشهرية', description: 'يناير 2024', type: 'Excel' },
                    { name: 'تقرير مقارنة الميزانية', description: 'الميزانية مقابل الفعلي', type: 'PDF' },
                    { name: 'تقرير تحليل الاتجاهات', description: 'اتجاهات التكاليف', type: 'Excel' },
                    { name: 'تقرير الكفاءة', description: 'كفاءة استخدام الموارد', type: 'PDF' },
                    { name: 'تقرير التوزيع', description: 'توزيع التكاليف', type: 'Excel' },
                    { name: 'تقرير المؤشرات', description: 'مؤشرات الأداء الرئيسية', type: 'PDF' }
                  ].map((report, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <PieChart className="h-8 w-8 text-blue-500" />
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