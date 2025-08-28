import Image, { ImageProps } from 'next/image';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoadingComplete' | 'loading'> {
    lowQualitySrc?: string;
}

const ImageWrapper = styled(motion.div)`
    position: relative;
    width: 100%;
    height: 100%;
`;

const BlurredImage = styled(Image)`
    filter: blur(10px);
    transform: scale(1.1);
`;

export default function OptimizedImage({
    src,
    alt,
    lowQualitySrc,
    ...props
}: OptimizedImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [showLowQuality, setShowLowQuality] = useState(true);

    useEffect(() => {
        // Pré-carrega a imagem de alta qualidade
        if (typeof window !== 'undefined') {
            const imgUrl = typeof src === 'string' ? src : src.toString();
            const img = new window.Image();
            img.src = imgUrl;
        }
    }, [src]);

    const handleLoadingComplete = () => {
        setIsLoaded(true);
        setTimeout(() => {
            setShowLowQuality(false);
        }, 500);
    };

    return (
        <ImageWrapper>
            <AnimatePresence>
                {showLowQuality && lowQualitySrc && (
                    <motion.div
                        style={{ position: 'absolute', inset: 0 }}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: isLoaded ? 0 : 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <BlurredImage
                            src={lowQualitySrc}
                            alt={alt}
                            {...props}
                            priority={true}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <Image
                src={src}
                alt={alt}
                {...props}
                onLoadingComplete={handleLoadingComplete}
                style={{
                    opacity: isLoaded ? 1 : 0,
                    transition: 'opacity 0.5s ease-in-out',
                    ...props.style,
                }}
            />
        </ImageWrapper>
    );
}
