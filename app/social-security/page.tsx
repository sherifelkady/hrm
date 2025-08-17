"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Shield,
  Users,
  Calculator,
  FileText,
  TrendingUp,
  AlertCircle,
  Download,
  Plus,
  Settings,
} from "lucide-react";

export default function SocialSecurityPage() {
  const [settings, setSettings] = useState({
    minSalary: "1,500",
    maxSalary: "45,000",
  });

  const handleSettingChange = (field: string, value: string) => {
    setSettings((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">الضمان الاجتماعي</h1>
            <p className="text-muted-foreground">
              إدارة اشتراكات الضمان الاجتماعي ومتابعة المساهمات
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <Settings className="ml-2 h-4 w-4" />
              إعدادات الضمان
            </Button>
            <Button size="sm">
              <Plus className="ml-2 h-4 w-4" />
              تسجيل موظف جديد
            </Button>
          </div>
        </div>

        {/* Social Security Summary Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-500" />
                <div>
                  <div className="text-2xl font-bold">1,248</div>
                  <p className="text-sm text-muted-foreground">
                    الموظفون المسجلون
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-green-500" />
                <div>
                  <div className="text-2xl font-bold">450K</div>
                  <p className="text-sm text-muted-foreground">
                    إجمالي المساهمات الشهرية
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-orange-500" />
                <div>
                  <div className="text-2xl font-bold">22%</div>
                  <p className="text-sm text-muted-foreground">معدل المساهمة</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-red-500" />
                <div>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-sm text-muted-foreground">
                    تحديثات مطلوبة
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="employees" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="employees">الموظفون</TabsTrigger>
            <TabsTrigger value="calculator">حاسبة المساهمات</TabsTrigger>
            <TabsTrigger value="contributions">المساهمات</TabsTrigger>
            <TabsTrigger value="reports">التقارير</TabsTrigger>
            <TabsTrigger value="settings">الإعدادات</TabsTrigger>
          </TabsList>

          <TabsContent value="employees" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>الموظفون المسجلون في الضمان الاجتماعي</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "أحمد محمد علي",
                      id: "E001",
                      ssn: "1234567890",
                      salary: "15,000",
                      contribution: "3,300",
                      status: "active",
                    },
                    {
                      name: "فاطمة أحمد السيد",
                      id: "E002",
                      ssn: "2345678901",
                      salary: "12,000",
                      contribution: "2,640",
                      status: "active",
                    },
                    {
                      name: "محمد حسن إبراهيم",
                      id: "E003",
                      ssn: "3456789012",
                      salary: "18,000",
                      contribution: "3,960",
                      status: "suspended",
                    },
                    {
                      name: "مريم سالم العتيبي",
                      id: "E004",
                      ssn: "4567890123",
                      salary: "11,000",
                      contribution: "2,420",
                      status: "active",
                    },
                  ].map((employee, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="font-medium">{employee.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {employee.id} • رقم الهوية: {employee.ssn}
                          </p>
                        </div>
                      </div>
                      <div className="text-left">
                        <p className="font-medium">
                          راتب: {employee.salary} ريال
                        </p>
                        <p className="text-sm text-muted-foreground">
                          مساهمة: {employee.contribution} ريال
                        </p>
                      </div>
                      <Badge
                        variant={
                          employee.status === "active"
                            ? "default"
                            : "destructive"
                        }
                      >
                        {employee.status === "active" ? "نشط" : "متوقف"}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="calculator" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>حاسبة مساهمات الضمان الاجتماعي</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="basicSalary">الراتب الأساسي</Label>
                    <Input id="basicSalary" placeholder="15000" type="number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="housingAllowance">بدل السكن</Label>
                    <Input
                      id="housingAllowance"
                      placeholder="2000"
                      type="number"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="transportAllowance">بدل النقل</Label>
                    <Input
                      id="transportAllowance"
                      placeholder="500"
                      type="number"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="otherAllowances">بدلات أخرى</Label>
                    <Input
                      id="otherAllowances"
                      placeholder="300"
                      type="number"
                    />
                  </div>
                  <Button className="w-full">
                    <Calculator className="ml-2 h-4 w-4" />
                    حساب المساهمة
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>تفاصيل المساهمة</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg space-y-3">
                    <div className="flex justify-between">
                      <span>إجمالي الراتب الخاضع للضمان</span>
                      <span className="font-bold">17,800 ريال</span>
                    </div>
                    <div className="border-t pt-2">
                      <div className="flex justify-between text-sm">
                        <span>مساهمة الموظف (10%)</span>
                        <span>1,780 ريال</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>مساهمة صاحب العمل (12%)</span>
                        <span>2,136 ريال</span>
                      </div>
                    </div>
                    <div className="border-t pt-2">
                      <div className="flex justify-between font-bold text-primary">
                        <span>إجمالي المساهمة</span>
                        <span>3,916 ريال</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">تفاصيل التغطية:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• تأمين الشيخوخة والعجز والوفاة</li>
                      <li>• تأمين إصابات العمل</li>
                      <li>• تأمين البطالة (ساري)</li>
                      <li>• الأخطار المهنية</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="contributions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>سجل المساهمات الشهرية</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      month: "يناير 2024",
                      employees: "1,248",
                      totalContribution: "450,000",
                      status: "paid",
                    },
                    {
                      month: "ديسمبر 2023",
                      employees: "1,235",
                      totalContribution: "445,000",
                      status: "paid",
                    },
                    {
                      month: "نوفمبر 2023",
                      employees: "1,220",
                      totalContribution: "440,000",
                      status: "paid",
                    },
                    {
                      month: "أكتوبر 2023",
                      employees: "1,215",
                      totalContribution: "438,000",
                      status: "pending",
                    },
                  ].map((record, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div>
                        <p className="font-medium">{record.month}</p>
                        <p className="text-sm text-muted-foreground">
                          {record.employees} موظف • {record.totalContribution}{" "}
                          ريال
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge
                          variant={
                            record.status === "paid" ? "default" : "secondary"
                          }
                        >
                          {record.status === "paid" ? "مدفوع" : "في الانتظار"}
                        </Badge>
                        <Button variant="outline" size="sm">
                          <Download className="ml-2 h-4 w-4" />
                          تحميل
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
                <CardTitle>تقارير الضمان الاجتماعي</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    {
                      name: "تقرير المساهمات الشهري",
                      description: "يناير 2024",
                      type: "Excel",
                    },
                    {
                      name: "تقرير الموظفين المسجلين",
                      description: "قائمة شاملة",
                      type: "PDF",
                    },
                    {
                      name: "تقرير التغييرات",
                      description: "التحديثات الأخيرة",
                      type: "PDF",
                    },
                    {
                      name: "تقرير المطالبات",
                      description: "المطالبات المعلقة",
                      type: "Excel",
                    },
                  ].map((report, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="h-8 w-8 text-green-500" />
                        <div>
                          <p className="font-medium">{report.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {report.description} • {report.type}
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

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>إعدادات الضمان الاجتماعي</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>معدل مساهمة الموظف</Label>
                    <Input value="10%" readOnly />
                  </div>
                  <div className="space-y-2">
                    <Label>معدل مساهمة صاحب العمل</Label>
                    <Input value="12%" readOnly />
                  </div>
                  <div className="space-y-2">
                    <Label>الحد الأدنى للراتب الخاضع للضمان</Label>
                    <Input
                      value={settings.minSalary}
                      onChange={(e) =>
                        handleSettingChange("minSalary", e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>الحد الأقصى للراتب الخاضع للضمان</Label>
                    <Input
                      value={settings.maxSalary}
                      onChange={(e) =>
                        handleSettingChange("maxSalary", e.target.value)
                      }
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">
                        تسجيل الموظفين الجدد تلقائياً
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        تسجيل الموظفين الجدد في الضمان تلقائياً
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      تفعيل
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">إشعارات التحديثات</h4>
                      <p className="text-sm text-muted-foreground">
                        تلقي إشعارات عند تحديث قوانين الضمان
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      تفعيل
                    </Button>
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
