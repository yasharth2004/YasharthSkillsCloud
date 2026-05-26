import DynamicIconCloud from '@/components/DynamicIconCloud';

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col items-center justify-center p-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h1>
        <p className="text-gray-300 text-lg">Interactive 3D cloud of my technical skills</p>
      </div>
      <DynamicIconCloud />
    </main>
  );
}
