"use client";

import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  FileText, 
  BarChart3, 
  Download, 
  Play,
  Clock,
  CheckCircle,
  Settings,
  Plus,
  Filter,
  Calendar
} from 'lucide-react';

export default function ReportGeneratorPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">منشئ التقارير</h1>
            <p className="text-muted-foreground">
              إنشاء وإدارة التقارير المخصصة والتلقائية لجميع وحدات الموارد البشرية
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <Settings className="ml-2 h-4 w-4" />
              إعدادات التقارير
            </Button>
            <Button size="sm">
              <Plus className="ml-2 h-4 w-4" />
              تقرير جديد
            </Button>
          </div>
        </div>

        {/* Report Summary Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-500" />
                <div>
                  <div className="text-2xl font-bold">156</div>
                  <p className="text-sm text-muted-foreground">التقارير المتاحة</p>
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
                  <p className="text-sm text-muted-foreground">تقارير مجدولة</p>
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
                  <p className="text-sm text-muted-foreground">تقارير مكتملة</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-purple-500" />
                <div>
                  <div className="text-2xl font-bold">45</div>
                  <p className="text-sm text-muted-foreground">قوالب مخصصة</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="builder" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="builder">منشئ التقارير</TabsTrigger>
            <TabsTrigger value="templates">القوالب</TabsTrigger>
            <TabsTrigger value="scheduled">التقارير المجدولة</TabsTrigger>
            <TabsTrigger value="history">السجل</TabsTrigger>
            <TabsTrigger value="analytics">التحليلات</TabsTrigger>
          </TabsList>

          <TabsContent value="builder" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>إنشاء تقرير جديد</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="reportName">اسم التقرير</Label>
                    <Input id="reportName" placeholder="تقرير الرواتب الشهري" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="reportType">نوع التقرير</Label>
                    <select className="w-full p-2 border rounded-md">
                      <option>تقرير الموظفين</option>
                      <option>تقرير الرواتب</option>
                      <option>تقرير الإجازات</option>
                      <option>تقرير الحضور</option>
                      <option>تقرير الأداء</option>
                      <option>تقرير التكاليف</option>
                      <option>تقرير مخصص</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dataSource">مصدر البيانات</Label>
                    <select className="w-full p-2 border rounded-md">
                      <option>جميع الموظفين</option>
                      <option>قسم محدد</option>
                      <option>موظفون محددون</option>
                      <option>حسب التاريخ</option>
                      <option>حسب الحالة</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dateRange">الفترة الزمنية</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <Input type="date" placeholder="من تاريخ" />
                      <Input type="date" placeholder="إلى تاريخ" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="format">تنسيق التقرير</Label>
                    <select className="w-full p-2 border rounded-md">
                      <option>PDF</option>
                      <option>Excel</option>
                      <option>CSV</option>
                      <option>Word</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label>الحقول المطلوبة</Label>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {[
                        'الاسم الكامل', 'رقم الموظف', 'القسم', 'المنصب',
                        'الراتب الأساسي', 'البدلات', 'الاستقطاعات', 'الراتب الصافي',
                        'تاريخ الانضمام', 'الحالة', 'رقم الهاتف', 'البريد الإلكتروني'
                      ].map((field, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <input type="checkbox" id={`field-${index}`} defaultChecked={index < 4} />
                          <Label htmlFor={`field-${index}`} className="text-sm">{field}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full">
                    <Play className="ml-2 h-4 w-4" />
                    إنشاء التقرير
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>معاينة التقرير</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="text-center mb-4">
                      <h3 className="font-bold text-lg">تقرير الرواتب الشهري</h3>
                      <p className="text-sm text-muted-foreground">يناير 2024</p>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="grid grid-cols-4 gap-2 font-medium border-b pb-2">
                        <span>الاسم</span>
                        <span>القسم</span>
                        <span>المنصب</span>
                        <span>الراتب</span>
                      </div>
                      {[
                        ['أحمد محمد', 'IT', 'مطور', '15,000'],
                        ['فاطمة أحمد', 'HR', 'أخصائي', '12,000'],
                        ['محمد حسن', 'المالية', 'محاسب', '13,500']
                      ].map((row, index) => (
                        <div key={index} className="grid grid-cols-4 gap-2 py-1">
                          {row.map((cell, cellIndex) => (
                            <span key={cellIndex}>{cell}</span>
                          ))}
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 pt-2 border-t text-center">
                      <p className="text-xs text-muted-foreground">
                        إجمالي الموظفين: 1,248 • إجمالي الرواتب: 2,400,000 ريال
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="templates" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  قوالب التقارير
                  <Button size="sm">
                    <Plus className="ml-2 h-4 w-4" />
                    قالب جديد
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    { 
                      name: 'تقرير الرواتب الشهري',
                      description: 'تقرير شامل للرواتب والبدلات والاستقطاعات',
                      category: 'الرواتب',
                      usage: '156 مرة'
                    },
                    { 
                      name: 'تقرير الحضور والانصراف',
                      description: 'تقرير تفصيلي لحضور الموظفين',
                      category: 'الحضور',
                      usage: '89 مرة'
                    },
                    { 
                      name: 'تقرير الإجازات',
                      description: 'تقرير أرصدة واستخدام الإجازات',
                      category: 'الإجازات',
                      usage: '67 مرة'
                    },
                    { 
                      name: 'تقرير الموظفين الجدد',
                      description: 'تقرير الموظفين المنضمين حديثاً',
                      category: 'الموظفين',
                      usage: '45 مرة'
                    },
                    { 
                      name: 'تقرير التكاليف',
                      description: 'تقرير تكاليف الموارد البشرية',
                      category: 'التكاليف',
                      usage: '34 مرة'
                    },
                    { 
                      name: 'تقرير الأداء السنوي',
                      description: 'تقرير تقييمات الأداء السنوية',
                      category: 'الأداء',
                      usage: '23 مرة'
                    }
                  ].map((template, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{template.name}</h4>
                        <Badge variant="outline">{template.category}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {template.description}
                      </p>
                      <p className="text-xs text-muted-foreground mb-3">
                        استُخدم {template.usage}
                      </p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Play className="ml-2 h-4 w-4" />
                          تشغيل
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          تعديل
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="scheduled" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>التقارير المجدولة</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { 
                      name: 'تقرير الرواتب الشهري',
                      schedule: 'شهرياً في اليوم الأخير',
                      nextRun: '2024-02-29 23:59',
                      recipients: 'المدير المالي، مدير الموارد البشرية',
                      status: 'active'
                    },
                    { 
                      name: 'تقرير الحضور الأسبوعي',
                      schedule: 'أسبوعياً يوم الأحد',
                      nextRun: '2024-02-18 08:00',
                      recipients: 'مديري الأقسام',
                      status: 'active'
                    },
                    { 
                      name: 'تقرير الإجازات الربع سنوي',
                      schedule: 'ربع سنوي',
                      nextRun: '2024-03-31 12:00',
                      recipients: 'الإدارة العليا',
                      status: 'active'
                    },
                    { 
                      name: 'تقرير التكاليف الشهري',
                      schedule: 'شهرياً في اليوم الخامس',
                      nextRun: '2024-03-05 09:00',
                      recipients: 'المدير المالي',
                      status: 'paused'
                    }
                  ].map((report, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{report.name}</p>
                        <p className="text-sm text-muted-foreground mb-1">
                          الجدولة: {report.schedule}
                        </p>
                        <p className="text-sm text-muted-foreground mb-1">
                          التشغيل التالي: {report.nextRun}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          المستلمون: {report.recipients}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant={report.status === 'active' ? 'default' : 'secondary'}>
                          {report.status === 'active' ? 'نشط' : 'متوقف'}
                        </Badge>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Settings className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Play className="h-4 w-4" />
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
                <CardTitle>سجل التقارير</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { 
                      name: 'تقرير الرواتب - يناير 2024',
                      type: 'PDF',
                      size: '2.5 MB',
                      generated: '2024-01-31 23:59',
                      generatedBy: 'النظام (مجدول)',
                      downloads: '15'
                    },
                    { 
                      name: 'تقرير الحضور الأسبوعي',
                      type: 'Excel',
                      size: '1.8 MB',
                      generated: '2024-02-11 08:00',
                      generatedBy: 'أحمد محمد علي',
                      downloads: '8'
                    },
                    { 
                      name: 'تقرير الموظفين الجدد - Q1',
                      type: 'PDF',
                      size: '1.2 MB',
                      generated: '2024-02-10 14:30',
                      generatedBy: 'فاطمة أحمد السيد',
                      downloads: '12'
                    },
                    { 
                      name: 'تقرير التكاليف - يناير',
                      type: 'Excel',
                      size: '3.1 MB',
                      generated: '2024-02-05 09:15',
                      generatedBy: 'محمد حسن إبراهيم',
                      downloads: '6'
                    }
                  ].map((report, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="h-8 w-8 text-blue-500" />
                        <div>
                          <p className="font-medium">{report.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {report.type} • {report.size} • {report.generated}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            بواسطة: {report.generatedBy} • تم التحميل {report.downloads} مرة
                          </p>
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

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>إحصائيات الاستخدام</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                      <h4 className="font-medium text-blue-600">التقارير الأكثر استخداماً</h4>
                      <p className="text-2xl font-bold">تقرير الرواتب الشهري</p>
                      <p className="text-sm text-muted-foreground">156 مرة هذا الشهر</p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                      <h4 className="font-medium text-green-600">متوسط وقت الإنشاء</h4>
                      <p className="text-2xl font-bold">2.3 دقيقة</p>
                      <p className="text-sm text-muted-foreground">للتقرير الواحد</p>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                      <h4 className="font-medium text-orange-600">التقارير المجدولة النشطة</h4>
                      <p className="text-2xl font-bold">23</p>
                      <p className="text-sm text-muted-foreground">تقرير مجدول</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>التقارير حسب النوع</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { type: 'تقارير الرواتب', count: '45', percentage: '35%' },
                      { type: 'تقارير الحضور', count: '32', percentage: '25%' },
                      { type: 'تقارير الموظفين', count: '28', percentage: '22%' },
                      { type: 'تقارير الإجازات', count: '18', percentage: '14%' },
                      { type: 'تقارير أخرى', count: '5', percentage: '4%' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div>
                          <p className="font-medium">{item.type}</p>
                          <p className="text-sm text-muted-foreground">{item.count} تقرير</p>
                        </div>
                        <Badge variant="outline">{item.percentage}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}