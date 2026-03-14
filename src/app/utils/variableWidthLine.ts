/**
 * Variable-width line utility using svg-variable-width-line.
 * Builds points along a path and applies a width profile (taper / spindle / uniform)
 * to approximate Figma-style stroke width profiles.
 */

import * as svgVariableWidthLine from 'svg-variable-width-line';

export type WidthProfile = 'uniform' | 'taper' | 'spindle';

export interface VariableWidthLineOptions {
  /** Number of points along the line (more = smoother) */
  points?: number;
  /** Maximum half-width (radius) of the stroke in the same units as x,y */
  strokeWidth?: number;
  /** Width profile: uniform, taper (thick→thin), or spindle (thin→thick→thin) */
  profile?: WidthProfile;
}

/**
 * Build an array of { x, y, w } points for a horizontal line from (0, 0) to (length, 0)
 * with the given width profile applied to w.
 */
export function buildVariableWidthPoints(
  length: number,
  options: VariableWidthLineOptions = {}
): Array<{ x: number; y: number; w: number }> {
  const {
    points: numPoints = 32,
    strokeWidth = 8,
    profile = 'uniform',
  } = options;

  const result: Array<{ x: number; y: number; w: number }> = [];
  for (let i = 0; i <= numPoints; i++) {
    const t = i / numPoints;
    const x = t * length;
    const y = 0;

    let w: number;
    switch (profile) {
      case 'taper':
        // Thick at start, thin at end (or vice versa)
        w = strokeWidth * (1 - t);
        break;
      case 'spindle':
        // Thin at ends, thick in middle (smooth curve)
        w = strokeWidth * (1 - 4 * (t - 0.5) ** 2);
        w = Math.max(w, strokeWidth * 0.2);
        break;
      case 'uniform':
      default:
        w = strokeWidth;
        break;
    }

    result.push({ x, y, w });
  }
  return result;
}

/**
 * Generate SVG path `d` for a variable-width line from (0,0) to (length,0)
 * with the given profile. Uses svg-variable-width-line under the hood.
 */
export function getVariableWidthPath(
  length: number,
  options: VariableWidthLineOptions = {}
): string {
  const pts = buildVariableWidthPoints(length, options);
  const { d } = (svgVariableWidthLine as { compute: (...p: typeof pts) => { d: string } }).compute(...pts);
  return d;
}
