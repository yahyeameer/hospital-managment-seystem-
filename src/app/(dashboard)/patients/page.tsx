export default function PatientsPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-[var(--color-text)]">Patients</h1>
                <button className="btn-primary bg-[var(--color-cta)] text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                    + New Patient
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-zinc-100 p-8 text-center py-12">
                <div className="h-16 w-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏥</span>
                </div>
                <h2 className="text-xl font-semibold text-zinc-900">Patient EMR Module</h2>
                <p className="text-zinc-500 mt-2 max-w-md mx-auto">
                    This module will handle SOAP notes, medical history, and appointment scheduling.
                    (Coming in Phase 2)
                </p>
            </div>
        </div>
    );
}
