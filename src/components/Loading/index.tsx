import styled from 'styled-components';
import { motion } from 'framer-motion';

interface LoadingSkeletonProps {
    heightSize?: string;
}

export const LoadingSkeleton = styled(motion.div)<LoadingSkeletonProps>`
    width: 100%;
    height: ${props => props.heightSize || '20px'};
    background: linear-gradient(
        90deg,
        ${props => props.theme.colors.lightGray} 0%,
        ${props => props.theme.colors.darkGray} 50%,
        ${props => props.theme.colors.lightGray} 100%
    );
    border-radius: 4px;
    margin: 10px 0;
`;

export const LoadingContainer = styled.div`
    padding: 20px;
    width: 100%;
`;

const skeletonVariants = {
    initial: {
        opacity: 0.5,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse" as const
        }
    }
};

interface LoadingProps {
    lines?: number;
    height?: string;
}

export default function Loading({ lines = 3, height }: LoadingProps) {
    return (
        <LoadingContainer>
            {Array.from({ length: lines }).map((_, index) => (
                <LoadingSkeleton
                    key={index}
                    heightSize={height}
                    variants={skeletonVariants}
                    initial="initial"
                    animate="animate"
                />
            ))}
        </LoadingContainer>
    );
}
