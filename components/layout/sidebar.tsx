"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cairo } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import {
  X,
  LayoutDashboard,
  Users,
  Calendar,
  Calculator,
  Shield,
  Heart,
  Banknote,
  RefreshCw,
  Zap,
  AlertTriangle,
  Building,
  FileText,
  Clock,
  UserCheck,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Languages,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700"],
});

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  onToggleLanguage: () => void;
}

const menuGroups = [
  {
    title: "الرئيسية",
    items: [
      {
        title: "لوحة التحكم",
        href: "/",
        icon: LayoutDashboard,
        badge: null,
      },
    ],
  },
  {
    title: "إدارة الموظفين",
    items: [
      {
        title: "ملف الموظف",
        href: "/employee-file",
        icon: Users,
        badge: null,
      },
      {
        title: "الإجازات والعطل",
        href: "/leaves-vacations",
        icon: Calendar,
        badge: "12",
      },
      {
        title: "الخدمة الذاتية للموظفين",
        href: "/employee-self-service",
        icon: UserCheck,
        badge: null,
      },
    ],
  },
  {
    title: "القوانين والضرائب",
    items: [
      {
        title: "قانون الضرائب",
        href: "/tax-law",
        icon: Calculator,
        badge: null,
      },
      {
        title: "الضمان الاجتماعي",
        href: "/social-security",
        icon: Shield,
        badge: null,
      },
      {
        title: "التأمين الصحي",
        href: "/health-insurance",
        icon: Heart,
        badge: null,
      },
    ],
  },
  {
    title: "الرواتب والمعاملات",
    items: [
      {
        title: "حسابات الرواتب",
        href: "/salary-calculations",
        icon: Banknote,
        badge: null,
      },
      {
        title: "المعاملات القياسية",
        href: "/standard-transactions",
        icon: RefreshCw,
        badge: null,
      },
      {
        title: "المعاملات المتقدمة",
        href: "/advanced-transactions",
        icon: Zap,
        badge: null,
      },
    ],
  },
  {
    title: "الإدارة والتقارير",
    items: [
      {
        title: "الإجراءات التأديبية",
        href: "/disciplinary-actions",
        icon: AlertTriangle,
        badge: "3",
      },
      {
        title: "مركز التكلفة",
        href: "/cost-center",
        icon: Building,
        badge: null,
      },
      {
        title: "منشئ التقارير",
        href: "/report-generator",
        icon: FileText,
        badge: null,
      },
      {
        title: "الوقت والحضور",
        href: "/time-attendance",
        icon: Clock,
        badge: null,
      },
    ],
  },
];

export function Sidebar({
  isOpen,
  onClose,
  isCollapsed,
  onToggleCollapse,
  onToggleLanguage,
}: SidebarProps) {
  const pathname = usePathname();
  const [expandedGroups, setExpandedGroups] = useState<string[]>([
    "الرئيسية",
    "إدارة الموظفين",
  ]);

  const toggleGroup = (groupTitle: string) => {
    setExpandedGroups((prev) =>
      prev.includes(groupTitle)
        ? prev.filter((title) => title !== groupTitle)
        : [...prev, groupTitle]
    );
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          cairo.className,
          "fixed top-0 right-0 z-50 h-full bg-card border-l shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0",
          isOpen ? "translate-x-0" : "translate-x-full",
          isCollapsed ? "w-20" : "w-64"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-primary to-chart-2 flex items-center justify-center">
              <span className="text-white font-bold text-sm">HR</span>
            </div>
            {!isCollapsed && (
              <span className="font-semibold">نظام الموارد البشرية</span>
            )}
          </div>
          <div className="flex items-center gap-1">
            {/* Language switcher */}
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={onToggleLanguage}
              title="تغيير اللغة"
            >
              <Languages className="h-4 w-4" />
            </Button>
            {/* Collapse (desktop) */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden lg:inline-flex h-8 w-8"
              onClick={onToggleCollapse}
              title={isCollapsed ? "توسيع الشريط الجانبي" : "طي الشريط الجانبي"}
            >
              {isCollapsed ? (
                <ChevronRight className="h-4 w-4" />
              ) : (
                <ChevronLeft className="h-4 w-4" />
              )}
            </Button>
            {/* Close (mobile) */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden h-8 w-8"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Search */}
        {!isCollapsed && (
          <div className="px-4 pt-3">
            <Input placeholder="ابحث..." className="bg-muted/60 h-9" />
          </div>
        )}

        <ScrollArea
          className={cn(
            "p-4",
            isCollapsed ? "h-[calc(100vh-4rem)]" : "h-[calc(100vh-6.25rem)]"
          )}
        >
          <nav className="space-y-2">
            {menuGroups.map((group) => (
              <div key={group.title} className="space-y-1">
                <Collapsible
                  open={expandedGroups.includes(group.title)}
                  onOpenChange={() => toggleGroup(group.title)}
                >
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full px-2 py-2 h-auto text-sm text-muted-foreground hover:text-foreground",
                        isCollapsed ? "justify-center" : "justify-between"
                      )}
                    >
                      {!isCollapsed && (
                        <span className="font-medium">{group.title}</span>
                      )}
                      {!isCollapsed &&
                        (expandedGroups.includes(group.title) ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        ))}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-1">
                    {group.items.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={onClose}
                        >
                          <Button
                            variant={isActive ? "secondary" : "ghost"}
                            className={cn(
                              "w-full py-2 h-auto text-sm",
                              isCollapsed
                                ? "justify-center px-0"
                                : "justify-start px-6",
                              isActive &&
                                "bg-primary/10 text-primary font-medium"
                            )}
                          >
                            <item.icon
                              className={cn(
                                "h-4 w-4",
                                isCollapsed ? "" : "mr-3"
                              )}
                            />
                            {!isCollapsed && (
                              <span className="flex-1 text-right">
                                {item.title}
                              </span>
                            )}
                            {!isCollapsed && item.badge && (
                              <Badge variant="secondary" className="mr-2">
                                {item.badge}
                              </Badge>
                            )}
                          </Button>
                        </Link>
                      );
                    })}
                  </CollapsibleContent>
                </Collapsible>
              </div>
            ))}
          </nav>
        </ScrollArea>
      </div>
    </>
  );
}
