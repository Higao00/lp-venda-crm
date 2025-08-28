import { RefObject } from 'react';

interface TouchInteractionProps {
    ref: RefObject<HTMLElement>;
    onTouchStart?: (e: TouchEvent) => void;
    onTouchMove?: (e: TouchEvent) => void;
    onTouchEnd?: (e: TouchEvent) => void;
}

export const useTouchInteraction = ({
    ref,
    onTouchStart,
    onTouchMove,
    onTouchEnd
}: TouchInteractionProps) => {
    const startPos = { x: 0, y: 0 };

    const handleTouchStart = (e: TouchEvent) => {
        const touch = e.touches[0];
        startPos.x = touch.clientX;
        startPos.y = touch.clientY;
        onTouchStart?.(e);
    };

    const handleTouchMove = (e: TouchEvent) => {
        if (!e.touches[0]) return;

        const touch = e.touches[0];
        const deltaX = touch.clientX - startPos.x;
        const deltaY = touch.clientY - startPos.y;

        // Atualiza a posição inicial para o próximo movimento
        startPos.x = touch.clientX;
        startPos.y = touch.clientY;

        onTouchMove?.(e);
    };

    const handleTouchEnd = (e: TouchEvent) => {
        onTouchEnd?.(e);
    };

    // Adiciona os event listeners
    if (ref.current) {
        ref.current.addEventListener('touchstart', handleTouchStart, { passive: true });
        ref.current.addEventListener('touchmove', handleTouchMove, { passive: true });
        ref.current.addEventListener('touchend', handleTouchEnd);

        // Cleanup
        return () => {
            if (ref.current) {
                ref.current.removeEventListener('touchstart', handleTouchStart);
                ref.current.removeEventListener('touchmove', handleTouchMove);
                ref.current.removeEventListener('touchend', handleTouchEnd);
            }
        };
    }
};

// Constantes para thresholds de toque
export const TOUCH_CONSTANTS = {
    SWIPE_THRESHOLD: 50, // Distância mínima para considerar um swipe
    TAP_THRESHOLD: 10, // Distância máxima para considerar um tap
    LONG_PRESS_DELAY: 500, // Tempo em ms para considerar um long press
};
