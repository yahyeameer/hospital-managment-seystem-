export default function PharmacyPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-[var(--color-text)]">Pharmacy</h1>

            <div className="bg-white rounded-xl shadow-sm border border-zinc-100 p-8 text-center py-12">
                <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💊</span>
                </div>
                <h2 className="text-xl font-semibold text-zinc-900">Drug Verification & Stock</h2>
                <p className="text-zinc-500 mt-2 max-w-md mx-auto">
                    AI-powered vision checkout and inventory management for safe medicine dispensing.
                    (Coming in Phase 3)
                </p>
            </div>
        </div>
    );
}
