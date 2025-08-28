import React, { Component, ErrorInfo, ReactNode } from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
    padding: 20px;
    margin: 20px;
    border: 1px solid ${props => props.theme.colors.orange};
    border-radius: 8px;
    background-color: rgba(255, 68, 68, 0.1);
    text-align: center;

    h2 {
        color: ${props => props.theme.colors.orange};
        margin-bottom: 10px;
    }

    p {
        color: ${props => props.theme.colors.darkGray};
        margin-bottom: 15px;
    }

    button {
        background: ${props => props.theme.colors.green};
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.2s;

        &:hover {
            background: ${props => props.theme.colors.greenHover};
        }
    }
`;

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Error caught by ErrorBoundary:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <ErrorContainer>
                    <h2>Ops! Algo deu errado.</h2>
                    <p>
                        Desculpe pelo inconveniente. Nossa equipe foi notificada e está trabalhando na solução.
                    </p>
                    <button
                        onClick={() => this.setState({ hasError: false, error: null })}
                    >
                        Tentar Novamente
                    </button>
                </ErrorContainer>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
