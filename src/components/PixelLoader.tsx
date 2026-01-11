export function PixelLoader() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-12">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-1 animate-pulse">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="bg-accent"
              style={{
                animationDelay: `${i * 0.05}s`,
                animationDuration: '1s'
              }}
            />
          ))}
        </div>
      </div>
      <p className="pixel-font text-xs text-accent animate-pulse">ANALYZING...</p>
    </div>
  )
}
