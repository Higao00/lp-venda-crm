import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import * as THREE from "three";
import * as S from './styles'

const NotFoundPage = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        if (!containerRef.current) return;

        // Cena, câmera e renderizador
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        // Habilitar fundo transparente no canvas
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // alpha: true para fundo transparente

        // Adicionar o canvas ao container do cubo
        containerRef.current.appendChild(renderer.domElement);

        // Definir o fundo do renderizador como transparente
        renderer.setClearColor(0x000000, 0);  // 0x000000 é o preto, e 0 é a opacidade (0 = totalmente transparente)
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Definir as 6 cores contrastantes para os quadradinhos
        const colors = ["#ff0000", "#01395C", "#0000ff", "#003C61", "#159781", "#FAFAFA"];  // Cores mais contrastantes

        // Função para criar os quadradinhos em cada face
        const createFace = (size: number, position: THREE.Vector3, rotation: THREE.Euler) => {
            const faceGroup = new THREE.Group();

            // Criar 9 quadradinhos em uma grid 3x3 (3 colunas e 3 linhas)
            const rows = 3;
            const cols = 3;
            const quadSize = size / 3; // Tamanho de cada quadradinho

            // Distribuir aleatoriamente as cores nos quadradinhos
            const randomColors = Array.from({ length: rows * cols }, () =>
                colors[Math.floor(Math.random() * colors.length)]
            );

            randomColors.forEach((color, index) => {
                const row = Math.floor(index / cols);
                const col = index % cols;

                const geometry = new THREE.PlaneGeometry(quadSize, quadSize);
                const material = new THREE.MeshBasicMaterial({
                    color,
                    side: THREE.DoubleSide, // Para garantir que as bordas fiquem visíveis
                });
                const square = new THREE.Mesh(geometry, material);

                // Adicionar uma borda sutil no quadradinho
                const borderMaterial = new THREE.LineBasicMaterial({ color: "#333", opacity: 0.5 });
                const borderGeometry = new THREE.EdgesGeometry(geometry);
                const border = new THREE.LineSegments(borderGeometry, borderMaterial);
                square.add(border);

                // Posicionar o quadradinho
                square.position.set(
                    (col - 1) * quadSize, // Eixo X (ajustado para centralizar)
                    (1 - row) * quadSize,  // Eixo Y (ajustado para centralizar)
                    0                      // Eixo Z
                );
                faceGroup.add(square);
            });

            // Posicionar e rotacionar a face
            faceGroup.position.copy(position);
            faceGroup.rotation.copy(rotation);

            return faceGroup;
        };

        // Criar cubo com 6 faces
        const cubeSize = 2; // Tamanho do cubo ajustado para não ficar muito grande
        const halfSize = cubeSize / 2;
        const faceOffset = halfSize + 0.05; // Pequeno ajuste para aproximar as faces

        const cube = new THREE.Group();

        // Adicionar as faces (6 faces)
        cube.add(createFace(cubeSize, new THREE.Vector3(0, 0, faceOffset), new THREE.Euler(0, 0, 0))); // Frente
        cube.add(createFace(cubeSize, new THREE.Vector3(0, 0, -faceOffset), new THREE.Euler(Math.PI, 0, 0))); // Trás
        cube.add(createFace(cubeSize, new THREE.Vector3(faceOffset, 0, 0), new THREE.Euler(0, Math.PI / 2, 0))); // Direita
        cube.add(createFace(cubeSize, new THREE.Vector3(-faceOffset, 0, 0), new THREE.Euler(0, -Math.PI / 2, 0))); // Esquerda
        cube.add(createFace(cubeSize, new THREE.Vector3(0, faceOffset, 0), new THREE.Euler(-Math.PI / 2, 0, 0))); // Cima
        cube.add(createFace(cubeSize, new THREE.Vector3(0, -faceOffset, 0), new THREE.Euler(Math.PI / 2, 0, 0))); // Baixo

        // Adicionando o cubo à cena
        scene.add(cube);

        // Configurar a câmera
        camera.position.z = 6;

        // Função de animação
        const animate = () => {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.02;
            cube.rotation.y += 0.02;
            renderer.render(scene, camera);
        };

        // Iniciar animação
        animate();

        // Função de redirecionamento após 5 segundos
        setTimeout(() => {
            router.push("/");  // Redireciona para a home
        }, 5000);

        return () => {
            // Limpeza do renderizador
            if (containerRef.current) {
                containerRef.current.removeChild(renderer.domElement);
            }
        };
    }, [router]);

    return (
        <S.PageContainer>
            <S.CubeContainer ref={containerRef} />

            <S.ContainerText>
                <S.Message>Página não encontrada</S.Message>
                <S.RedirectMessage>Redirecionando para a home...</S.RedirectMessage>
            </S.ContainerText>
        </S.PageContainer>
    );
};

export default NotFoundPage;
