export default function SkeletonProjects() {
    return (
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-[400px] w-full rounded-xl bg-slate-200 animate-pulse" aria-hidden="true" />
          ))}
        </div>
      </div>
    )
  }
  
  