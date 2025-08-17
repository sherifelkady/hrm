"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MoreHorizontal, Eye, Edit, Trash2 } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const recentEmployees = [
  {
    id: 'E001',
    name: 'أحمد محمد علي',
    department: 'تكنولوجيا المعلومات',
    position: 'مطور برمجيات',
    status: 'نشط',
    joinDate: '2024-01-15',
    salary: '15,000',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ahmed'
  },
  {
    id: 'E002',
    name: 'فاطمة أحمد السيد',
    department: 'الموارد البشرية',
    position: 'أخصائي موارد بشرية',
    status: 'نشط',
    joinDate: '2023-11-20',
    salary: '12,000',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=fatima'
  },
  {
    id: 'E003',
    name: 'محمد حسن إبراهيم',
    department: 'المالية',
    position: 'محاسب أول',
    status: 'في إجازة',
    joinDate: '2023-08-10',
    salary: '13,500',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=mohamed'
  },
  {
    id: 'E004',
    name: 'مريم سالم العتيبي',
    department: 'التسويق',
    position: 'منسق تسويق',
    status: 'نشط',
    joinDate: '2024-02-01',
    salary: '11,000',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=mariam'
  },
  {
    id: 'E005',
    name: 'عبدالله يوسف القحطاني',
    department: 'العمليات',
    position: 'مشرف عمليات',
    status: 'متوقف',
    joinDate: '2022-05-15',
    salary: '16,000',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=abdullah'
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'نشط':
      return <Badge className="bg-success text-white">نشط</Badge>;
    case 'في إجازة':
      return <Badge variant="secondary">في إجازة</Badge>;
    case 'متوقف':
      return <Badge variant="destructive">متوقف</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

export function DataTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          الموظفون الجدد
          <Button variant="outline" size="sm">
            عرض الكل
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-right">الموظف</TableHead>
              <TableHead className="text-right">القسم</TableHead>
              <TableHead className="text-right">المنصب</TableHead>
              <TableHead className="text-right">الحالة</TableHead>
              <TableHead className="text-right">تاريخ الانضمام</TableHead>
              <TableHead className="text-right">الراتب</TableHead>
              <TableHead className="text-right">الإجراءات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentEmployees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={employee.avatar} alt={employee.name} />
                      <AvatarFallback>
                        {employee.name.split(' ')[0].charAt(0) + employee.name.split(' ')[1].charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{employee.name}</p>
                      <p className="text-sm text-muted-foreground">{employee.id}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{employee.department}</TableCell>
                <TableCell>{employee.position}</TableCell>
                <TableCell>{getStatusBadge(employee.status)}</TableCell>
                <TableCell>{employee.joinDate}</TableCell>
                <TableCell className="font-medium">{employee.salary} ريال</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="ml-2 h-4 w-4" />
                        عرض التفاصيل
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="ml-2 h-4 w-4" />
                        تعديل
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="ml-2 h-4 w-4" />
                        حذف
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}