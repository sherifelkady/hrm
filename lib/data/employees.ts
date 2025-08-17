export const departments = [
  'تكنولوجيا المعلومات',
  'الموارد البشرية',
  'المالية',
  'التسويق',
  'العمليات',
  'المبيعات',
  'خدمة العملاء',
  'الإدارة العليا'
];

export const positions = [
  'مطور برمجيات',
  'محلل أنظمة',
  'مصمم جرافيك',
  'أخصائي موارد بشرية',
  'محاسب',
  'منسق تسويق',
  'مشرف عمليات',
  'ممثل خدمة عملاء',
  'مدير',
  'نائب مدير'
];

export const employeeStatuses = [
  { value: 'active', label: 'نشط', color: 'success' },
  { value: 'on_leave', label: 'في إجازة', color: 'warning' },
  { value: 'suspended', label: 'متوقف', color: 'destructive' },
  { value: 'terminated', label: 'منتهي الخدمة', color: 'secondary' }
];

export const leaveTypes = [
  { value: 'annual', label: 'إجازة سنوية', days: 30 },
  { value: 'sick', label: 'إجازة مرضية', days: 90 },
  { value: 'maternity', label: 'إجازة أمومة', days: 70 },
  { value: 'emergency', label: 'إجازة طارئة', days: 5 },
  { value: 'unpaid', label: 'إجازة بدون راتب', days: 0 }
];

export const mockEmployees = [
  {
    id: 'E001',
    firstName: 'أحمد',
    lastName: 'محمد علي',
    email: 'ahmed.mohamed@company.com',
    phone: '+966501234567',
    nationalId: '1234567890',
    department: 'تكنولوجيا المعلومات',
    position: 'مطور برمجيات',
    status: 'active',
    joinDate: '2024-01-15',
    salary: 15000,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ahmed'
  },
  {
    id: 'E002',
    firstName: 'فاطمة',
    lastName: 'أحمد السيد',
    email: 'fatima.ahmed@company.com',
    phone: '+966502345678',
    nationalId: '2345678901',
    department: 'الموارد البشرية',
    position: 'أخصائي موارد بشرية',
    status: 'active',
    joinDate: '2023-11-20',
    salary: 12000,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=fatima'
  },
  {
    id: 'E003',
    firstName: 'محمد',
    lastName: 'حسن إبراهيم',
    email: 'mohamed.hassan@company.com',
    phone: '+966503456789',
    nationalId: '3456789012',
    department: 'المالية',
    position: 'محاسب أول',
    status: 'on_leave',
    joinDate: '2023-08-10',
    salary: 13500,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=mohamed'
  }
];