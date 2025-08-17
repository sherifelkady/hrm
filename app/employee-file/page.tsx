"use client";

import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { EmployeeForm } from '@/components/forms/employee-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Search, Plus, Filter, Download } from 'lucide-react';
import { DataTable } from '@/components/dashboard/data-table';

export default function EmployeeFilePage() {
  const handleEmployeeSubmit = (data: any) => {
    console.log('Employee data:', data);
    // Handle form submission
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">ملف الموظف</h1>
            <p className="text-muted-foreground">
              إدارة معلومات الموظفين والوثائق والعقود
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <Download className="ml-2 h-4 w-4" />
              تصدير
            </Button>
            <Button size="sm">
              <Plus className="ml-2 h-4 w-4" />
              موظف جديد
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-blue-600">1,248</div>
              <p className="text-sm text-muted-foreground">إجمالي الموظفين</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-green-600">1,156</div>
              <p className="text-sm text-muted-foreground">الموظفون النشطون</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-yellow-600">67</div>
              <p className="text-sm text-muted-foreground">في إجازة</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-red-600">25</div>
              <p className="text-sm text-muted-foreground">متوقفون</p>
            </CardContent>
          </Card>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="list" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="list">قائمة الموظفين</TabsTrigger>
            <TabsTrigger value="add">إضافة موظف</TabsTrigger>
            <TabsTrigger value="documents">الوثائق</TabsTrigger>
          </TabsList>

          <TabsContent value="list" className="space-y-6">
            {/* Filters */}
            <Card>
              <CardHeader>
                <CardTitle>البحث والتصفية</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 items-center">
                  <div className="relative flex-1">
                    <Search className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="البحث بالاسم، الرقم، أو القسم..." className="pr-10" />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="ml-2 h-4 w-4" />
                    تصفية
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Employee List */}
            <DataTable />
          </TabsContent>

          <TabsContent value="add" className="space-y-6">
            <EmployeeForm onSubmit={handleEmployeeSubmit} />
          </TabsContent>

          <TabsContent value="documents" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>إدارة الوثائق</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    قسم إدارة الوثائق والعقود سيكون متاحاً قريباً
                  </p>
                  <Button variant="outline" className="mt-4">
                    رفع وثيقة
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