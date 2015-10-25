import hammersley from "hammersley";
const PI = Math.PI;

export function hemisphereSampleUniform(i, N) {
  const hPoint = hammersley(i, N);
  const u = hPoint[0];
  const v = hPoint[1];
  const phi = v * 2 * PI;
  const cosTheta = 1 - u;
  const sinTheta = Math.sqrt(1 - cosTheta * cosTheta);
  return [Math.cos(phi) * sinTheta, Math.sin(phi) * sinTheta, cosTheta];
}

export function hemisphereSampleCos(i, N) {
  const hPoint = hammersley(i, N);
  const u = hPoint[0];
  const v = hPoint[1];
  const phi = v * 2 * PI;
  const cosTheta = Math.sqrt(1 - u);
  const sinTheta = Math.sqrt(1 - cosTheta * cosTheta);
  return [Math.cos(phi) * sinTheta, Math.sin(phi) * sinTheta, cosTheta];
}
