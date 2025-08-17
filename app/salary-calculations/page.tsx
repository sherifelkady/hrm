"use client";

import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Banknote, 
  Calculator, 
  TrendingUp, 
  Users,
  FileText,
  AlertCircle,
  Download,
  Plus,
  Settings,
  Play
} from 'lucide-react';

export default function SalaryCalculationsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">حسابات الرواتب</h1>
            <p className="text-muted-foreground">
              معالجة وحساب رواتب الموظفين والبدلات والاستقطاعات
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <Settings className="ml-2 h-4 w-4" />
              إعدادات الرواتب
            </Button>
            <Button size="sm">
              <Play className="ml-2 h-4 w-4" />
              تشغيل الرواتب
            </Button>
          </div>
        </div>

        {/* Salary Summary Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Banknote className="h-5 w-5 text-green-500" />
                <div>
                  <div className="text-2xl font-bold">2.4M</div>
                  <p className="text-sm text-muted-foreground">إجمالي الرواتب الشهرية</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-500" />
                <div>
                  <div className="text-2xl font-bold">1,248</div>
                  <p className="text-sm text-muted-foreground">الموظفون النشطون</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-orange-500" />
                <div>
                  <div className="text-2xl font-bold">320K</div>
                  <p className="text-sm text-muted-foreground">إجمالي البدلات</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-red-500" />
                <div>
                  <div className="text-2xl font-bold">180K</div>
                  <p className="text-sm text-muted-foreground">إجمالي الاستقطاعات</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="calculator" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="calculator">حاسبة الراتب</TabsTrigger>
            <TabsTrigger value="payroll">كشف الرواتب</TabsTrigger>
            <TabsTrigger value="allowances">البدلات</TabsTrigger>
            <TabsTrigger value="deductions">الاستقطاعات</TabsTrigger>
            <TabsTrigger value="reports">التقارير</TabsTrigger>
          </TabsList>

          <TabsContent value="calculator" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>حاسبة الراتب الشامل</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="basicSalary">الراتب الأساسي</Label>
                    <Input id="basicSalary" placeholder="15000" type="number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="housingAllowance">بدل السكن</Label>
                    <Input id="housingAllowance" placeholder="2000" type="number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="transportAllowance">بدل النقل</Label>
                    <Input id="transportAllowance" placeholder="500" type="number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="otherAllowances">بدلات أخرى</Label>
                    <Input id="otherAllowances" placeholder="300" type="number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="overtime">ساعات إضافية</Label>
                    <Input id="overtime" placeholder="20" type="number" />
                  </div>
                  <Button className="w-full">
                    <Calculator className="ml-2 h-4 w-4" />
                    حساب الراتب الصافي
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>تفاصيل الراتب</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg space-y-3">
                    <h4 className="font-medium text-green-600">الإجمالي</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>الراتب الأساسي</span>
                        <span>15,000 ريال</span>
                      </div>
                      <div className="flex justify-between">
                        <span>بدل السكن</span>
                        <span>2,000 ريال</span>
                      </div>
                      <div className="flex justify-between">
                        <span>بدل النقل</span>
                        <span>500 ريال</span>
                      </div>
                      <div className="flex justify-between">
                        <span>بدلات أخرى</span>
                        <span>300 ريال</span>
                      </div>
                      <div className="flex justify-between">
                        <span>ساعات إضافية</span>
                        <span>1,000 ريال</span>
                      </div>
                      <div className="flex justify-between font-medium border-t pt-2">
                        <span>إجمالي الراتب</span>
                        <span>18,800 ريال</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg space-y-3">
                    <h4 className="font-medium text-red-600">الاستقطاعات</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>الضمان الاجتماعي (10%)</span>
                        <span>1,880 ريال</span>
                      </div>
                      <div className="flex justify-between">
                        <span>ضريبة الدخل</span>
                        <span>200 ريال</span>
                      </div>
                      <div className="flex justify-between">
                        <span>التأمين الصحي</span>
                        <span>450 ريال</span>
                      </div>
                      <div className="flex justify-between font-medium border-t pt-2">
                        <span>إجمالي الاستقطاعات</span>
                        <span>2,530 ريال</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-primary/10 rounded-lg">
                    <div className="flex justify-between items-center text-lg font-bold text-primary">
                      <span>الراتب الصافي</span>
                      <span>16,270 ريال</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="payroll" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  كشف رواتب يناير 2024
                  <Button variant="outline" size="sm">
                    <Download className="ml-2 h-4 w-4" />
                    تصدير
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { 
                      name: 'أحمد محمد علي', 
                      id: 'E001', 
                      basic: '15,000',
                      allowances: '2,800',
                      deductions: '2,530',
                      net: '15,270'
                    },
                    { 
                      name: 'فاطمة أحمد السيد', 
                      id: 'E002', 
                      basic: '12,000',
                      allowances: '2,200',
                      deductions: '2,020',
                      net: '12,180'
                    },
                    { 
                      name: 'محمد حسن إبراهيم', 
                      id: 'E003', 
                      basic: '18,000',
                      allowances: '3,500',
                      deductions: '3,150',
                      net: '18,350'
                    },
                    { 
                      name: 'مريم سالم العتيبي', 
                      id: 'E004', 
                      basic: '11,000',
                      allowances: '1,800',
                      deductions: '1,780',
                      net: '11,020'
                    }
                  ].map((employee, index) => (
                    <div key={index} className="grid grid-cols-6 gap-4 p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{employee.name}</p>
                        <p className="text-sm text-muted-foreground">{employee.id}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">الأساسي</p>
                        <p className="font-medium">{employee.basic}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">البدلات</p>
                        <p className="font-medium text-green-600">{employee.allowances}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">الاستقطاعات</p>
                        <p className="font-medium text-red-600">{employee.deductions}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">الصافي</p>
                        <p className="font-bold text-primary">{employee.net}</p>
                      </div>
                      <div className="text-center">
                        <Button variant="outline" size="sm">
                          <FileText className="ml-2 h-4 w-4" />
                          كشف
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="allowances" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  أنواع البدلات
                  <Button size="sm">
                    <Plus className="ml-2 h-4 w-4" />
                    إضافة بدل
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    { name: 'بدل السكن', type: 'ثابت', amount: '2,000', employees: '1,248' },
                    { name: 'بدل النقل', type: 'ثابت', amount: '500', employees: '1,248' },
                    { name: 'بدل الهاتف', type: 'ثابت', amount: '200', employees: '856' },
                    { name: 'بدل الوجبات', type: 'ثابت', amount: '300', employees: '1,100' },
                    { name: 'ساعات إضافية', type: 'متغير', amount: 'حسب الساعة', employees: '450' },
                    { name: 'بدل المناوبة', type: 'متغير', amount: '150/يوم', employees: '200' }
                  ].map((allowance, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{allowance.name}</h4>
                        <Badge variant="outline">{allowance.type}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">
                        المبلغ: {allowance.amount} ريال
                      </p>
                      <p className="text-sm text-muted-foreground">
                        الموظفون: {allowance.employees}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="deductions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  أنواع الاستقطاعات
                  <Button size="sm">
                    <Plus className="ml-2 h-4 w-4" />
                    إضافة استقطاع
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    { name: 'الضمان الاجتماعي', type: 'إجباري', rate: '10%', amount: '180,000' },
                    { name: 'ضريبة الدخل', type: 'إجباري', rate: 'متغير', amount: '25,000' },
                    { name: 'التأمين الصحي', type: 'إجباري', rate: 'ثابت', amount: '65,000' },
                    { name: 'قرض الموظفين', type: 'اختياري', rate: 'ثابت', amount: '15,000' },
                    { name: 'صندوق التوفير', type: 'اختياري', rate: '5%', amount: '45,000' },
                    { name: 'غياب بدون إذن', type: 'متغير', rate: 'يومي', amount: '8,000' }
                  ].map((deduction, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{deduction.name}</h4>
                        <Badge variant={deduction.type === 'إجباري' ? 'destructive' : 'secondary'}>
                          {deduction.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">
                        المعدل: {deduction.rate}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        الإجمالي الشهري: {deduction.amount} ريال
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>تقارير الرواتب</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    { name: 'تقرير الرواتب الشهري', description: 'يناير 2024', type: 'Excel' },
                    { name: 'تقرير البدلات', description: 'تفصيل البدلات', type: 'PDF' },
                    { name: 'تقرير الاستقطاعات', description: 'تحليل الاستقطاعات', type: 'Excel' },
                    { name: 'تقرير التكاليف', description: 'تكلفة الرواتب', type: 'PDF' },
                    { name: 'تقرير الضرائب', description: 'ضرائب الرواتب', type: 'Excel' },
                    { name: 'تقرير الضمان الاجتماعي', description: 'مساهمات الضمان', type: 'PDF' }
                  ].map((report, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="h-8 w-8 text-green-500" />
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