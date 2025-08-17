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
  AlertTriangle, 
  FileText, 
  Users, 
  Clock,
  CheckCircle,
  XCircle,
  Plus,
  Eye,
  Edit,
  Download
} from 'lucide-react';

export default function DisciplinaryActionsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">الإجراءات التأديبية</h1>
            <p className="text-muted-foreground">
              إدارة ومتابعة الإجراءات التأديبية والمخالفات
            </p>
          </div>
          <Button size="sm">
            <Plus className="ml-2 h-4 w-4" />
            إجراء تأديبي جديد
          </Button>
        </div>

        {/* Disciplinary Summary Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-500" />
                <div>
                  <div className="text-2xl font-bold">23</div>
                  <p className="text-sm text-muted-foreground">إجراءات نشطة</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-orange-500" />
                <div>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-sm text-muted-foreground">في انتظار المراجعة</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <div>
                  <div className="text-2xl font-bold">156</div>
                  <p className="text-sm text-muted-foreground">إجراءات مكتملة</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-500" />
                <div>
                  <div className="text-2xl font-bold">45</div>
                  <p className="text-sm text-muted-foreground">موظفون متأثرون</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="active" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="active">الإجراءات النشطة</TabsTrigger>
            <TabsTrigger value="new">إجراء جديد</TabsTrigger>
            <TabsTrigger value="policies">السياسات</TabsTrigger>
            <TabsTrigger value="history">السجل</TabsTrigger>
            <TabsTrigger value="reports">التقارير</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>الإجراءات التأديبية النشطة</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { 
                      id: 'DA-001',
                      employee: 'أحمد محمد علي', 
                      violation: 'تأخير متكرر',
                      action: 'إنذار كتابي',
                      date: '2024-02-15',
                      status: 'active',
                      severity: 'متوسط'
                    },
                    { 
                      id: 'DA-002',
                      employee: 'محمد حسن إبراهيم', 
                      violation: 'غياب بدون إذن',
                      action: 'خصم من الراتب',
                      date: '2024-02-10',
                      status: 'pending',
                      severity: 'عالي'
                    },
                    { 
                      id: 'DA-003',
                      employee: 'سارة أحمد السيد', 
                      violation: 'عدم الالتزام بقواعد الشركة',
                      action: 'تحذير شفهي',
                      date: '2024-02-08',
                      status: 'under_review',
                      severity: 'منخفض'
                    },
                    { 
                      id: 'DA-004',
                      employee: 'عبدالله يوسف القحطاني', 
                      violation: 'سوء السلوك المهني',
                      action: 'إيقاف مؤقت',
                      date: '2024-02-05',
                      status: 'active',
                      severity: 'عالي'
                    }
                  ].map((action, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-medium">{action.employee}</p>
                          <Badge variant={
                            action.severity === 'عالي' ? 'destructive' :
                            action.severity === 'متوسط' ? 'secondary' : 'outline'
                          }>
                            {action.severity}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">
                          {action.id} • {action.violation}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          الإجراء: {action.action} • {action.date}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant={
                          action.status === 'active' ? 'default' :
                          action.status === 'pending' ? 'secondary' : 'outline'
                        }>
                          {action.status === 'active' ? 'نشط' :
                           action.status === 'pending' ? 'في الانتظار' : 'قيد المراجعة'}
                        </Badge>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="new" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>إنشاء إجراء تأديبي جديد</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="employeeName">اسم الموظف</Label>
                    <select className="w-full p-2 border rounded-md">
                      <option>اختر الموظف</option>
                      <option>أحمد محمد علي</option>
                      <option>فاطمة أحمد السيد</option>
                      <option>محمد حسن إبراهيم</option>
                      <option>مريم سالم العتيبي</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="violationType">نوع المخالفة</Label>
                    <select className="w-full p-2 border rounded-md">
                      <option>اختر نوع المخالفة</option>
                      <option>تأخير متكرر</option>
                      <option>غياب بدون إذن</option>
                      <option>عدم الالتزام بقواعد الشركة</option>
                      <option>سوء السلوك المهني</option>
                      <option>إهمال في العمل</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="severity">درجة الخطورة</Label>
                    <select className="w-full p-2 border rounded-md">
                      <option>منخفض</option>
                      <option>متوسط</option>
                      <option>عالي</option>
                      <option>حرج</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="actionType">نوع الإجراء</Label>
                    <select className="w-full p-2 border rounded-md">
                      <option>تحذير شفهي</option>
                      <option>إنذار كتابي</option>
                      <option>خصم من الراتب</option>
                      <option>إيقاف مؤقت</option>
                      <option>فصل من العمل</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="incidentDate">تاريخ الحادثة</Label>
                  <Input id="incidentDate" type="date" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">وصف المخالفة</Label>
                  <Textarea 
                    id="description" 
                    placeholder="اكتب وصفاً تفصيلياً للمخالفة والظروف المحيطة بها..."
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="actionDetails">تفاصيل الإجراء</Label>
                  <Textarea 
                    id="actionDetails" 
                    placeholder="اكتب تفاصيل الإجراء التأديبي المتخذ..."
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="witnesses">الشهود (اختياري)</Label>
                  <Input id="witnesses" placeholder="أسماء الشهود إن وجدوا" />
                </div>

                <div className="flex items-center gap-2">
                  <input type="checkbox" id="notifyEmployee" />
                  <Label htmlFor="notifyEmployee">إشعار الموظف بالإجراء التأديبي</Label>
                </div>

                <div className="flex items-center gap-2">
                  <input type="checkbox" id="notifyManager" />
                  <Label htmlFor="notifyManager">إشعار المدير المباشر</Label>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button className="flex-1">
                    حفظ الإجراء التأديبي
                  </Button>
                  <Button variant="outline" className="flex-1">
                    إلغاء
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="policies" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>سياسات الإجراءات التأديبية</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    { 
                      title: 'التأخير المتكرر',
                      description: 'التأخير أكثر من 3 مرات في الشهر',
                      actions: ['تحذير شفهي', 'إنذار كتابي', 'خصم من الراتب']
                    },
                    { 
                      title: 'الغياب بدون إذن',
                      description: 'الغياب بدون إذن مسبق أو عذر مقبول',
                      actions: ['إنذار كتابي', 'خصم من الراتب', 'إيقاف مؤقت']
                    },
                    { 
                      title: 'عدم الالتزام بقواعد الشركة',
                      description: 'مخالفة قوانين وأنظمة الشركة',
                      actions: ['تحذير شفهي', 'إنذار كتابي', 'تدريب إضافي']
                    },
                    { 
                      title: 'سوء السلوك المهني',
                      description: 'سلوك غير لائق في بيئة العمل',
                      actions: ['إنذار كتابي', 'إيقاف مؤقت', 'فصل من العمل']
                    },
                    { 
                      title: 'الإهمال في العمل',
                      description: 'عدم أداء المهام بالجودة المطلوبة',
                      actions: ['تحذير شفهي', 'تدريب إضافي', 'إنذار كتابي']
                    },
                    { 
                      title: 'انتهاك السرية',
                      description: 'إفشاء معلومات سرية للشركة',
                      actions: ['إيقاف مؤقت', 'فصل من العمل', 'إجراءات قانونية']
                    }
                  ].map((policy, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">{policy.title}</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {policy.description}
                      </p>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">الإجراءات المتدرجة:</p>
                        {policy.actions.map((action, actionIndex) => (
                          <div key={actionIndex} className="flex items-center gap-2">
                            <span className="text-xs bg-muted px-2 py-1 rounded">
                              {actionIndex + 1}
                            </span>
                            <span className="text-sm">{action}</span>
                          </div>
                        ))}
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
                <CardTitle>سجل الإجراءات التأديبية</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { 
                      id: 'DA-045',
                      employee: 'خالد أحمد المطيري', 
                      violation: 'تأخير متكرر',
                      action: 'إنذار كتابي',
                      date: '2024-01-20',
                      status: 'completed',
                      outcome: 'تحسن الأداء'
                    },
                    { 
                      id: 'DA-044',
                      employee: 'نورا سعد العتيبي', 
                      violation: 'عدم الالتزام بقواعد الشركة',
                      action: 'تحذير شفهي',
                      date: '2024-01-15',
                      status: 'completed',
                      outcome: 'التزام بالقواعد'
                    },
                    { 
                      id: 'DA-043',
                      employee: 'عمر محمد الشهري', 
                      violation: 'غياب بدون إذن',
                      action: 'خصم من الراتب',
                      date: '2024-01-10',
                      status: 'completed',
                      outcome: 'انتظام في الحضور'
                    },
                    { 
                      id: 'DA-042',
                      employee: 'ريم عبدالله القحطاني', 
                      violation: 'سوء السلوك المهني',
                      action: 'إيقاف مؤقت',
                      date: '2024-01-05',
                      status: 'cancelled',
                      outcome: 'إلغاء الإجراء - عدم ثبوت المخالفة'
                    }
                  ].map((record, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{record.employee}</p>
                        <p className="text-sm text-muted-foreground mb-1">
                          {record.id} • {record.violation}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          الإجراء: {record.action} • {record.date}
                        </p>
                        <p className="text-sm text-green-600 mt-1">
                          النتيجة: {record.outcome}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant={record.status === 'completed' ? 'default' : 'secondary'}>
                          {record.status === 'completed' ? 'مكتمل' : 'ملغي'}
                        </Badge>
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
                <CardTitle>تقارير الإجراءات التأديبية</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    { name: 'تقرير الإجراءات الشهرية', description: 'يناير 2024', type: 'PDF' },
                    { name: 'تقرير المخالفات حسب النوع', description: 'تحليل المخالفات', type: 'Excel' },
                    { name: 'تقرير الموظفين المتكررين', description: 'الموظفون ذوو المخالفات المتكررة', type: 'PDF' },
                    { name: 'تقرير فعالية الإجراءات', description: 'تحليل نتائج الإجراءات', type: 'Excel' },
                    { name: 'تقرير الاتجاهات', description: 'اتجاهات المخالفات', type: 'PDF' },
                    { name: 'تقرير الأقسام', description: 'المخالفات حسب القسم', type: 'Excel' }
                  ].map((report, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="h-8 w-8 text-red-500" />
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