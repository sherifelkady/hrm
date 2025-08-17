"use client";

import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Zap, 
  Upload, 
  Download, 
  History,
  Users,
  FileSpreadsheet,
  AlertTriangle,
  CheckCircle,
  Clock,
  Settings,
  Play
} from 'lucide-react';

export default function AdvancedTransactionsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">المعاملات المتقدمة</h1>
            <p className="text-muted-foreground">
              معالجة المعاملات المجمعة والاستيراد والمعاملات الرجعية
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <Settings className="ml-2 h-4 w-4" />
              إعدادات متقدمة
            </Button>
            <Button size="sm">
              <Upload className="ml-2 h-4 w-4" />
              استيراد ملف
            </Button>
          </div>
        </div>

        {/* Advanced Transaction Summary Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-500" />
                <div>
                  <div className="text-2xl font-bold">2,456</div>
                  <p className="text-sm text-muted-foreground">معاملات مجمعة</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="h-5 w-5 text-green-500" />
                <div>
                  <div className="text-2xl font-bold">156</div>
                  <p className="text-sm text-muted-foreground">ملفات مستوردة</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <History className="h-5 w-5 text-orange-500" />
                <div>
                  <div className="text-2xl font-bold">89</div>
                  <p className="text-sm text-muted-foreground">معاملات رجعية</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-500" />
                <div>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-sm text-muted-foreground">معاملات فاشلة</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="bulk" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="bulk">المعاملات المجمعة</TabsTrigger>
            <TabsTrigger value="import">الاستيراد</TabsTrigger>
            <TabsTrigger value="retroactive">المعاملات الرجعية</TabsTrigger>
            <TabsTrigger value="history">السجل</TabsTrigger>
          </TabsList>

          <TabsContent value="bulk" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>إنشاء معاملة مجمعة جديدة</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="transactionName">اسم المعاملة</Label>
                    <Input id="transactionName" placeholder="مكافأة الأداء الربع سنوية" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="transactionType">نوع المعاملة</Label>
                    <select className="w-full p-2 border rounded-md">
                      <option>مكافأة</option>
                      <option>بدل</option>
                      <option>استقطاع</option>
                      <option>تعديل راتب</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="amount">المبلغ</Label>
                    <Input id="amount" placeholder="5000" type="number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="department">القسم</Label>
                    <select className="w-full p-2 border rounded-md">
                      <option>جميع الأقسام</option>
                      <option>تكنولوجيا المعلومات</option>
                      <option>الموارد البشرية</option>
                      <option>المالية</option>
                      <option>التسويق</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="effectiveDate">تاريخ السريان</Label>
                    <Input id="effectiveDate" type="date" />
                  </div>
                  <Button className="w-full">
                    <Play className="ml-2 h-4 w-4" />
                    تنفيذ المعاملة المجمعة
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>المعاملات المجمعة النشطة</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { 
                        name: 'مكافأة الأداء Q1 2024', 
                        type: 'مكافأة',
                        employees: '856',
                        amount: '4,280,000',
                        status: 'processing'
                      },
                      { 
                        name: 'تعديل رواتب قسم IT', 
                        type: 'تعديل راتب',
                        employees: '125',
                        amount: '187,500',
                        status: 'pending'
                      },
                      { 
                        name: 'بدل المواصلات الإضافي', 
                        type: 'بدل',
                        employees: '1,248',
                        amount: '624,000',
                        status: 'scheduled'
                      }
                    ].map((transaction, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{transaction.name}</h4>
                          <Badge variant={
                            transaction.status === 'processing' ? 'default' :
                            transaction.status === 'pending' ? 'secondary' : 'outline'
                          }>
                            {transaction.status === 'processing' ? 'قيد المعالجة' :
                             transaction.status === 'pending' ? 'في الانتظار' : 'مجدولة'}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">
                          النوع: {transaction.type}
                        </p>
                        <p className="text-sm text-muted-foreground mb-1">
                          الموظفون: {transaction.employees}
                        </p>
                        <p className="text-sm font-medium">
                          المبلغ الإجمالي: {transaction.amount} ريال
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="import" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>استيراد ملف المعاملات</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                    <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                    <p className="text-lg font-medium mb-2">اسحب الملف هنا أو انقر للتحديد</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      يدعم ملفات Excel (.xlsx, .xls) و CSV
                    </p>
                    <Button variant="outline">
                      <Upload className="ml-2 h-4 w-4" />
                      اختيار ملف
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>نوع الاستيراد</Label>
                    <select className="w-full p-2 border rounded-md">
                      <option>رواتب شهرية</option>
                      <option>بدلات</option>
                      <option>استقطاعات</option>
                      <option>مكافآت</option>
                      <option>تعديلات رواتب</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="validateData" />
                    <Label htmlFor="validateData">التحقق من صحة البيانات قبل الاستيراد</Label>
                  </div>
                  
                  <Button className="w-full" disabled>
                    <FileSpreadsheet className="ml-2 h-4 w-4" />
                    معاينة البيانات
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>قوالب الاستيراد</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: 'قالب الرواتب الشهرية', description: 'استيراد رواتب جميع الموظفين', format: 'Excel' },
                      { name: 'قالب البدلات', description: 'استيراد البدلات المختلفة', format: 'Excel' },
                      { name: 'قالب الاستقطاعات', description: 'استيراد الاستقطاعات والخصومات', format: 'Excel' },
                      { name: 'قالب المكافآت', description: 'استيراد المكافآت والحوافز', format: 'Excel' },
                      { name: 'قالب تعديل الرواتب', description: 'استيراد تعديلات الرواتب', format: 'Excel' }
                    ].map((template, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">{template.name}</p>
                          <p className="text-sm text-muted-foreground">{template.description}</p>
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
            </div>

            <Card>
              <CardHeader>
                <CardTitle>سجل الاستيراد الأخير</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { 
                      filename: 'salaries_january_2024.xlsx', 
                      type: 'رواتب شهرية',
                      records: '1,248',
                      success: '1,245',
                      failed: '3',
                      date: '2024-01-31 14:30',
                      status: 'completed'
                    },
                    { 
                      filename: 'allowances_q1_2024.xlsx', 
                      type: 'بدلات',
                      records: '856',
                      success: '856',
                      failed: '0',
                      date: '2024-01-15 10:15',
                      status: 'completed'
                    },
                    { 
                      filename: 'bonuses_2023.xlsx', 
                      type: 'مكافآت',
                      records: '1,100',
                      success: '1,095',
                      failed: '5',
                      date: '2024-01-05 16:45',
                      status: 'completed'
                    }
                  ].map((import_record, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{import_record.filename}</p>
                        <p className="text-sm text-muted-foreground">
                          {import_record.type} • {import_record.date}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {import_record.records} سجل • نجح: {import_record.success} • فشل: {import_record.failed}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="default">مكتمل</Badge>
                        <Button variant="outline" size="sm">
                          <FileSpreadsheet className="ml-2 h-4 w-4" />
                          التفاصيل
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="retroactive" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>إنشاء معاملة رجعية</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="retroName">اسم المعاملة الرجعية</Label>
                    <Input id="retroName" placeholder="تعديل راتب رجعي - ترقية" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="retroType">نوع المعاملة</Label>
                    <select className="w-full p-2 border rounded-md">
                      <option>تعديل راتب</option>
                      <option>بدل رجعي</option>
                      <option>مكافأة رجعية</option>
                      <option>استقطاع رجعي</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="effectiveFromDate">ساري من تاريخ</Label>
                    <Input id="effectiveFromDate" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="effectiveToDate">ساري حتى تاريخ</Label>
                    <Input id="effectiveToDate" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="retroAmount">المبلغ الشهري</Label>
                    <Input id="retroAmount" placeholder="2000" type="number" />
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="calculateBackpay" />
                    <Label htmlFor="calculateBackpay">حساب المتأخرات تلقائياً</Label>
                  </div>
                  <Button className="w-full">
                    <History className="ml-2 h-4 w-4" />
                    إنشاء المعاملة الرجعية
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>حاسبة المتأخرات</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-medium mb-3">مثال: تعديل راتب رجعي</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>الراتب القديم</span>
                        <span>15,000 ريال</span>
                      </div>
                      <div className="flex justify-between">
                        <span>الراتب الجديد</span>
                        <span>17,000 ريال</span>
                      </div>
                      <div className="flex justify-between">
                        <span>الفرق الشهري</span>
                        <span>2,000 ريال</span>
                      </div>
                      <div className="flex justify-between">
                        <span>عدد الأشهر</span>
                        <span>6 أشهر</span>
                      </div>
                      <div className="flex justify-between font-medium border-t pt-2">
                        <span>إجمالي المتأخرات</span>
                        <span>12,000 ريال</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">تأثير على الاستقطاعات:</h4>
                    <div className="text-sm space-y-1 text-muted-foreground">
                      <div className="flex justify-between">
                        <span>ضمان اجتماعي إضافي</span>
                        <span>1,200 ريال</span>
                      </div>
                      <div className="flex justify-between">
                        <span>ضريبة دخل إضافية</span>
                        <span>300 ريال</span>
                      </div>
                      <div className="flex justify-between font-medium">
                        <span>صافي المتأخرات</span>
                        <span>10,500 ريال</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>المعاملات الرجعية النشطة</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { 
                      name: 'تعديل راتب - ترقيات Q4 2023', 
                      employees: '45',
                      period: '2023-10-01 إلى 2023-12-31',
                      backpay: '540,000',
                      status: 'processing'
                    },
                    { 
                      name: 'بدل سكن رجعي - موظفين جدد', 
                      employees: '23',
                      period: '2023-11-01 إلى 2024-01-31',
                      backpay: '138,000',
                      status: 'pending'
                    },
                    { 
                      name: 'مكافأة أداء رجعية - مبيعات', 
                      employees: '67',
                      period: '2023-07-01 إلى 2023-12-31',
                      backpay: '402,000',
                      status: 'completed'
                    }
                  ].map((retro, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{retro.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {retro.employees} موظف • {retro.period}
                        </p>
                        <p className="text-sm font-medium">
                          إجمالي المتأخرات: {retro.backpay} ريال
                        </p>
                      </div>
                      <Badge variant={
                        retro.status === 'processing' ? 'default' :
                        retro.status === 'pending' ? 'secondary' : 'outline'
                      }>
                        {retro.status === 'processing' ? 'قيد المعالجة' :
                         retro.status === 'pending' ? 'في الانتظار' : 'مكتملة'}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>سجل المعاملات المتقدمة</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { 
                      name: 'مكافأة نهاية السنة 2023 - مجمعة', 
                      type: 'معاملة مجمعة',
                      employees: '1,235',
                      amount: '6,175,000',
                      date: '2023-12-31',
                      status: 'completed'
                    },
                    { 
                      name: 'استيراد رواتب ديسمبر 2023', 
                      type: 'استيراد',
                      employees: '1,235',
                      amount: '2,470,000',
                      date: '2023-12-28',
                      status: 'completed'
                    },
                    { 
                      name: 'تعديل رواتب رجعي - IT', 
                      type: 'معاملة رجعية',
                      employees: '125',
                      amount: '750,000',
                      date: '2023-12-15',
                      status: 'completed'
                    },
                    { 
                      name: 'بدلات Q4 2023 - مجمعة', 
                      type: 'معاملة مجمعة',
                      employees: '1,235',
                      amount: '1,852,500',
                      date: '2023-12-01',
                      status: 'failed'
                    }
                  ].map((transaction, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{transaction.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {transaction.type} • {transaction.employees} موظف • {transaction.date}
                        </p>
                        <p className="text-sm font-medium">
                          المبلغ: {transaction.amount} ريال
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant={transaction.status === 'completed' ? 'default' : 'destructive'}>
                          {transaction.status === 'completed' ? 'مكتملة' : 'فاشلة'}
                        </Badge>
                        <Button variant="outline" size="sm">
                          <FileSpreadsheet className="ml-2 h-4 w-4" />
                          التفاصيل
                        </Button>
                      </div>
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