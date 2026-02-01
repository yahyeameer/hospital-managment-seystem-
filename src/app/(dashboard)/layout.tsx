"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import {
    LayoutDashboard,
    Users,
    Pill,
    CreditCard,
    Menu
} from "lucide-react";
import { useState } from "react";

const navigation = [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { name: "Patients", href: "/patients", icon: Users },
    { name: "Pharmacy", href: "/pharmacy", icon: Pill },
    { name: "Billing", href: "/billing", icon: CreditCard },
];

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[var(--color-background)] flex flex-col md:flex-row">
            {/* Mobile Header */}
            <div className="md:hidden bg-white border-b border-zinc-200 p-4 flex justify-between items-center">
                <span className="text-xl font-bold text-[var(--color-primary)]">MediNexus</span>
                <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <Menu className="h-6 w-6 text-zinc-600" />
                </button>
            </div>

            {/* Sidebar */}
            <aside
                className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-zinc-200 transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
            >
                <div className="p-6 border-b border-zinc-100 flex justify-between items-center">
                    <span className="text-2xl font-bold text-[var(--color-primary)]">MediNexus AI</span>
                    {/* Mobile close button could go here, but clicking overlay is standard */}
                </div>

                <nav className="p-4 space-y-1">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors
                  ${isActive
                                        ? "bg-cyan-50 text-[var(--color-primary)]"
                                        : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"}
                `}
                                onClick={() => setIsSidebarOpen(false)}
                            >
                                <item.icon className={`h-5 w-5 ${isActive ? "text-[var(--color-primary)]" : "text-zinc-400"}`} />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-zinc-100">
                    <div className="flex items-center gap-3 px-4 py-2">
                        <UserButton />
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-zinc-900">My Account</span>
                            <span className="text-xs text-zinc-500">Manage Profile</span>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Overlay for mobile */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/20 z-40 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Main Content */}
            <main className="flex-1 p-6 md:p-8 overflow-y-auto">
                {children}
            </main>
        </div>
    );
}
