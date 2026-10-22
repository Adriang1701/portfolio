type Point = { x: number; y: number };

const directions: Record<string, Point> = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
};

export const isArrowKey = (key: string) => key in directions;

export function nearestInDirection(from: Point, points: Point[], key: string): number {
  const dir = directions[key];
  let best = -1;
  let bestScore = Infinity;
  points.forEach((p, i) => {
    const dx = p.x - from.x;
    const dy = p.y - from.y;
    const along = dx * dir.x + dy * dir.y;
    if (along <= 1) return;
    const score = along + Math.abs(dx * dir.y + dy * dir.x) * 2;
    if (score < bestScore) {
      bestScore = score;
      best = i;
    }
  });
  return best;
}
