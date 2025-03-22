"use client"

import * as React from 'react';
import { useSpring, to, animated, config } from '@react-spring/web';
import { scale, dist } from 'vec-la';
import { useDrag } from 'react-use-gesture';

export default function App() {
  const [{ pos }, api] = useSpring(() => ({ pos: [0, 0] }));
  const [{ angle }, angleApi] = useSpring(() => ({
    angle: 0,
    config: config.wobbly,
  }));

  const bind = useDrag(
    ({ xy, previous, down, movement: pos, velocity, direction }) => {
      api.start({
        pos,
        immediate: down,
        config: { velocity: scale(direction, velocity), decay: true },
      });
      if (dist(xy, previous) > 10 || !down)
        angleApi.start({ angle: Math.atan2(direction[0], -direction[1]) });
    },
    { initial: () => pos.get() }
  );

  return (
    <animated.div
      {...bind()}
      className="w-[140px] h-[140px] bg-no-repeat bg-contain cursor-grab active:cursor-grabbing select-none "
      style={{
        backgroundImage: "url(/r.png)",
        transform: to(
          [pos, angle],
          ([x, y], a) => `translate3d(${x}px,${y}px,0) rotate(${a}rad)`
        ),
      }}
    />
  );
}
