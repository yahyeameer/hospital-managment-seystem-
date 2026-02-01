export default function BillingPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-[var(--color-text)]">Billing & Payments</h1>

            <div className="bg-white rounded-xl shadow-sm border border-zinc-100 p-8 text-center py-12">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💳</span>
                </div>
                <h2 className="text-xl font-semibold text-zinc-900">ZAAD & Sahar Integration</h2>
                <p className="text-zinc-500 mt-2 max-w-md mx-auto">
                    Seamless mobile money invoicing and revenue tracking for the clinic.
                    (Coming in Phase 2)
                </p>
            </div>
        </div>
    );
}
