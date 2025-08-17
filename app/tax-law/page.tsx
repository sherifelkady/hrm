"use client";

import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Calculator, 
  FileText, 
  TrendingUp, 
  AlertTriangle,
  Download,
  Settings,
  Plus
} from 'lucide-react';

export default function TaxLawPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">قانون الضرائب</h1>
            <p className="text-muted-foreground">
              إدارة الضرائب وحساب الاستقطاعات الضريبية للموظفين
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <Settings className="ml-2 h-4 w-4" />
              إعدادات الضرائب
            </Button>
            <Button size="sm">
              <Plus className="ml-2 h-4 w-4" />
              حساب ضريبة جديد
            </Button>
          </div>
        </div>

        {/* Tax Summary Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-blue-500" />
                <div>
                  <div className="text-2xl font-bold">2.4M</div>
                  <p className="text-sm text-muted-foreground">إجمالي الضرائب المحسوبة</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-500" />
                <div>
                  <div className="text-2xl font-bold">180K</div>
                  <p className="text-sm text-muted-foreground">ضرائب هذا الشهر</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-orange-500" />
                <div>
                  <div className="text-2xl font-bold">1,248</div>
                  <p className="text-sm text-muted-foreground">الموظفون الخاضعون للضريبة</p>
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
                  <p className="text-sm text-muted-foreground">تحديثات قانونية مطلوبة</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="calculator" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="calculator">حاسبة الضرائب</TabsTrigger>
            <TabsTrigger value="rates">معدلات الضرائب</TabsTrigger>
            <TabsTrigger value="employees">الموظفون</TabsTrigger>
            <TabsTrigger value="reports">التقارير</TabsTrigger>
            <TabsTrigger value="settings">الإعدادات</TabsTrigger>
          </TabsList>

          <TabsContent value="calculator" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>حاسبة ضريبة الدخل</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="salary">الراتب الشهري</Label>
                    <Input id="salary" placeholder="15000" type="number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="allowances">البدلات</Label>
                    <Input id="allowances" placeholder="2000" type="number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="deductions">الخصومات</Label>
                    <Input id="deductions" placeholder="500" type="number" />
                  </div>
                  <Button className="w-full">
                    <Calculator className="ml-2 h-4 w-4" />
                    حساب الضريبة
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>نتيجة الحساب</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span>إجمالي الدخل الشهري</span>
                      <span className="font-bold">16,500 ريال</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span>الدخل السنوي</span>
                      <span className="font-bold">198,000 ريال</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span>الشريحة الضريبية</span>
                      <Badge>5%</Badge>
                    </div>
                    <div className="flex justify-between items-center text-lg font-bold text-primary">
                      <span>الضريبة السنوية</span>
                      <span>2,400 ريال</span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>الضريبة الشهرية</span>
                      <span>200 ريال</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="rates" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>شرائح ضريبة الدخل</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { range: '0 - 60,000', rate: '0%', description: 'معفى من الضريبة' },
                    { range: '60,001 - 100,000', rate: '5%', description: 'الشريحة الأولى' },
                    { range: '100,001 - 200,000', rate: '10%', description: 'الشريحة الثانية' },
                    { range: '200,001 - 400,000', rate: '15%', description: 'الشريحة الثالثة' },
                    { range: '400,001 - 600,000', rate: '20%', description: 'الشريحة الرابعة' },
                    { range: '600,001+', rate: '25%', description: 'الشريحة العليا' }
                  ].map((bracket, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{bracket.range} ريال</p>
                        <p className="text-sm text-muted-foreground">{bracket.description}</p>
                      </div>
                      <Badge variant="outline" className="text-lg font-bold">
                        {bracket.rate}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="employees" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>الموظفون الخاضعون للضريبة</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: 'أحمد محمد علي', salary: '15,000', tax: '200', bracket: '5%' },
                    { name: 'فاطمة أحمد السيد', salary: '12,000', tax: '0', bracket: '0%' },
                    { name: 'محمد حسن إبراهيم', salary: '18,000', tax: '600', bracket: '10%' },
                    { name: 'مريم سالم العتيبي', salary: '11,000', tax: '0', bracket: '0%' },
                    { name: 'عبدالله يوسف القحطاني', salary: '25,000', tax: '1,250', bracket: '15%' }
                  ].map((employee, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{employee.name}</p>
                        <p className="text-sm text-muted-foreground">راتب: {employee.salary} ريال</p>
                      </div>
                      <div className="text-left">
                        <p className="font-medium">{employee.tax} ريال</p>
                        <Badge variant="outline">{employee.bracket}</Badge>
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
                <CardTitle>تقارير الضرائب</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    { name: 'تقرير الضرائب الشهري', description: 'يناير 2024', type: 'PDF' },
                    { name: 'تقرير الضرائب السنوي', description: '2023', type: 'Excel' },
                    { name: 'تقرير الشرائح الضريبية', description: 'تحليل الموظفين', type: 'PDF' },
                    { name: 'تقرير الإعفاءات', description: 'الموظفون المعفيون', type: 'Excel' }
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
                <CardTitle>إعدادات الضرائب</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">تطبيق الضريبة تلقائياً</h4>
                      <p className="text-sm text-muted-foreground">حساب الضرائب تلقائياً عند معالجة الرواتب</p>
                    </div>
                    <Button variant="outline" size="sm">تفعيل</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">إشعارات التحديثات القانونية</h4>
                      <p className="text-sm text-muted-foreground">تلقي إشعارات عند تحديث قوانين الضرائب</p>
                    </div>
                    <Button variant="outline" size="sm">تفعيل</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">تقارير دورية</h4>
                      <p className="text-sm text-muted-foreground">إرسال تقارير الضرائب شهرياً</p>
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