import { Box, Button } from '@mui/material';
import { useCallback, useRef, useState } from 'react';
import QuickPinchZoom, { make3dTransformValue } from 'react-quick-pinch-zoom';

const Figure = ({ src }: { src: string }) => {
  const quickPinchZoomRef = useRef<QuickPinchZoom>(null);
  const [position, setPosition] = useState({ x: 0, y: 0, scale: 1 });
  const [pointerDown, setPointerDown] = useState(false);

  const onUpdate = useCallback(
    (position: { x: number; y: number; scale: number }) => {
      setPosition(position);
    },
    [setPosition],
  );

  const reset = useCallback(() => {
    quickPinchZoomRef.current?.alignCenter({ x: 0, y: 0, scale: 1 });
  }, [quickPinchZoomRef]);

  const onPointerDown = useCallback(() => {
    setPointerDown(true);
  }, [setPointerDown]);

  const onPointerUp = useCallback(() => {
    setPointerDown(false);
  }, [setPointerDown]);

  return (
    <Box maxWidth={'xl'} sx={{ display: 'flex', flexDirection: 'column' }}>
      <Button onClick={reset}>Re-Center</Button>
      <QuickPinchZoom containerProps={{ style: { display: 'flex' } }} onUpdate={onUpdate} ref={quickPinchZoomRef}>
        <img
          style={{
            width: '100%',
            transform: make3dTransformValue(position),
            cursor: pointerDown ? 'grabbing' : 'grab',
          }}
          src={src}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
        />
      </QuickPinchZoom>
    </Box>
  );
};

export default Figure;
