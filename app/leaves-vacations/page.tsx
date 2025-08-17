"use client";

import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Plus, Clock, CheckCircle, XCircle } from 'lucide-react';

export default function LeavesVacationsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">الإجازات والعطل</h1>
            <p className="text-muted-foreground">
              إدارة طلبات الإجازات ومتابعة حالات الموظفين
            </p>
          </div>
          <Button size="sm">
            <Plus className="ml-2 h-4 w-4" />
            طلب إجازة جديد
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-yellow-500" />
                <div>
                  <div className="text-2xl font-bold">23</div>
                  <p className="text-sm text-muted-foreground">في انتظار الموافقة</p>
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
                  <p className="text-sm text-muted-foreground">موافق عليها</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <XCircle className="h-5 w-5 text-red-500" />
                <div>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-sm text-muted-foreground">مرفوضة</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-blue-500" />
                <div>
                  <div className="text-2xl font-bold">67</div>
                  <p className="text-sm text-muted-foreground">موظف في إجازة</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="requests" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="requests">طلبات الإجازة</TabsTrigger>
            <TabsTrigger value="calendar">التقويم</TabsTrigger>
            <TabsTrigger value="policies">سياسات الإجازات</TabsTrigger>
            <TabsTrigger value="reports">التقارير</TabsTrigger>
          </TabsList>

          <TabsContent value="requests" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>طلبات الإجازة الحديثة</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: 'أحمد محمد', type: 'إجازة سنوية', from: '2024-02-15', to: '2024-02-20', status: 'pending' },
                    { name: 'فاطمة أحمد', type: 'إجازة مرضية', from: '2024-02-10', to: '2024-02-12', status: 'approved' },
                    { name: 'محمد حسن', type: 'إجازة طارئة', from: '2024-02-08', to: '2024-02-08', status: 'rejected' }
                  ].map((request, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="font-medium">{request.name}</p>
                          <p className="text-sm text-muted-foreground">{request.type}</p>
                        </div>
                        <div className="text-sm">
                          <p>{request.from} - {request.to}</p>
                        </div>
                      </div>
                      <Badge variant={
                        request.status === 'pending' ? 'secondary' :
                        request.status === 'approved' ? 'default' : 'destructive'
                      }>
                        {request.status === 'pending' ? 'في الانتظار' :
                         request.status === 'approved' ? 'موافق' : 'مرفوض'}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="calendar" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>تقويم الإجازات</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Calendar className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">
                    عرض التقويم التفاعلي سيكون متاحاً قريباً
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="policies" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>سياسات الإجازات</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">الإجازة السنوية</h4>
                    <p className="text-sm text-muted-foreground">
                      30 يوماً في السنة، يمكن ترحيل 5 أيام للسنة التالية
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">الإجازة المرضية</h4>
                    <p className="text-sm text-muted-foreground">
                      90 يوماً في السنة بشهادة طبية معتمدة
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">إجازة الأمومة</h4>
                    <p className="text-sm text-muted-foreground">
                      10 أسابيع براتب كامل وفقاً لقانون العمل
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">الإجازة الطارئة</h4>
                    <p className="text-sm text-muted-foreground">
                      5 أيام في السنة للحالات الطارئة
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>تقارير الإجازات</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    تقارير تفصيلية عن استخدام الإجازات والإحصائيات
                  </p>
                  <Button variant="outline" className="mt-4">
                    إنشاء تقرير
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}