// Mobile movement is deliberately more responsive than the tap tolerance.
// A gesture beginning over a TV retains the full tap slop to avoid accidental steering.
export const DRAG_START_SLOP=2;
export const STEER_GAIN=.026;
export const steeringThreshold=(startsOnTV,tvTapSlop)=>startsOnTV?tvTapSlop:DRAG_START_SLOP;
export const steerFromPixels=(playerX,deltaCssPx)=>Math.max(-3.5,Math.min(3.5,playerX+deltaCssPx*STEER_GAIN));
