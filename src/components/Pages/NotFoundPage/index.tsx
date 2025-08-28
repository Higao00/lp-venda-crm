'use client';

import { useLayoutEffect, useRef } from 'react';
// App Router: use 'next/navigation'
import { useRouter } from 'next/router';
import * as THREE from 'three';
import * as S from './styles';

export default function NotFoundPage() {
    const router = useRouter();
    const wrapRef = useRef<HTMLDivElement>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const cubeRef = useRef<THREE.Group | null>(null);
    const roRef = useRef<ResizeObserver | null>(null);

    useLayoutEffect(() => {
        const wrap = wrapRef.current;
        if (!wrap) return;

        // ---------- Renderer ----------
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
            // preserveDrawingBuffer: false (default)
        });
        // canvas ocupa o container 100%
        renderer.domElement.style.width = '100%';
        renderer.domElement.style.height = '100%';
        renderer.setClearColor(0x000000, 0);

        // DPR seguro
        const isMobile = () =>
            typeof window !== 'undefined' && matchMedia('(max-width: 860px)').matches;
        const getSafeDPR = () => {
            const dpr = window.devicePixelRatio || 1;
            return Math.min(isMobile() ? 1.5 : 2, dpr);
        };
        renderer.setPixelRatio(getSafeDPR());

        wrap.appendChild(renderer.domElement);

        // ---------- Scene / Camera ----------
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(70, 1, 0.1, 1000);
        camera.position.set(0, 0, 6);

        rendererRef.current = renderer;
        sceneRef.current = scene;
        cameraRef.current = camera;

        // ---------- Cube ----------
        const colors = ['#0F172A', '#01395C', '#0EA5A6', '#1F2937', '#334155', '#E5E7EB'];

        const createFace = (size: number, position: THREE.Vector3, rotation: THREE.Euler) => {
            const faceGroup = new THREE.Group();
            const rows = 3, cols = 3;
            const quadSize = size / 3;

            const picked = Array.from({ length: rows * cols }, () =>
                colors[Math.floor(Math.random() * colors.length)]
            );

            picked.forEach((color, idx) => {
                const row = Math.floor(idx / cols);
                const col = idx % cols;

                const geom = new THREE.PlaneGeometry(quadSize, quadSize);
                const mat = new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide });
                const square = new THREE.Mesh(geom, mat);

                const egeom = new THREE.EdgesGeometry(geom);
                const emat = new THREE.LineBasicMaterial({
                    color: '#0B1220',
                    opacity: 0.35,
                    transparent: true
                });
                square.add(new THREE.LineSegments(egeom, emat));

                square.position.set((col - 1) * quadSize, (1 - row) * quadSize, 0);
                faceGroup.add(square);
            });

            faceGroup.position.copy(position);
            faceGroup.rotation.copy(rotation);
            return faceGroup;
        };

        const cubeSize = 2.1;
        const offset = cubeSize / 2 + 0.05;
        const cube = new THREE.Group();
        cube.add(createFace(cubeSize, new THREE.Vector3(0, 0, offset), new THREE.Euler(0, 0, 0)));
        cube.add(createFace(cubeSize, new THREE.Vector3(0, 0, -offset), new THREE.Euler(Math.PI, 0, 0)));
        cube.add(createFace(cubeSize, new THREE.Vector3(offset, 0, 0), new THREE.Euler(0, Math.PI / 2, 0)));
        cube.add(createFace(cubeSize, new THREE.Vector3(-offset, 0, 0), new THREE.Euler(0, -Math.PI / 2, 0)));
        cube.add(createFace(cubeSize, new THREE.Vector3(0, offset, 0), new THREE.Euler(-Math.PI / 2, 0, 0)));
        cube.add(createFace(cubeSize, new THREE.Vector3(0, -offset, 0), new THREE.Euler(Math.PI / 2, 0, 0)));
        scene.add(cube);
        cubeRef.current = cube;

        // ---------- Size helpers ----------
        const sizeToContainer = () => {
            if (!wrap || !rendererRef.current || !cameraRef.current) return;
            const rect = wrap.getBoundingClientRect();
            let w = Math.max(1, Math.floor(rect.width));
            let h = Math.max(1, Math.floor(rect.height));

            // fallback em iOS quando altura vem 0
            if (!w || !h) {
                w = Math.max(1, Math.floor(window.innerWidth * 0.9));
                h = Math.max(200, Math.floor(window.innerHeight * (isMobile() ? 0.35 : 0.6)));
            }

            rendererRef.current.setSize(w, h, true); // TRUE = ajusta canvas style tbm
            cameraRef.current.aspect = w / h;
            cameraRef.current.updateProjectionMatrix();
        };

        // dimensiona antes do primeiro paint
        sizeToContainer();

        // observa mudanças de tamanho do container
        const ro = new ResizeObserver(() => sizeToContainer());
        ro.observe(wrap);
        roRef.current = ro;

        // DPR/orientation updates
        const onOrientation = () => {
            renderer.setPixelRatio(getSafeDPR());
            sizeToContainer();
        };
        window.addEventListener('orientationchange', onOrientation);

        // ---------- Animation ----------
        const clock = new THREE.Clock();
        renderer.setAnimationLoop(() => {
            const dt = clock.getDelta();
            // velocidade suave e constante
            cube.rotation.x += dt * 0.6;
            cube.rotation.y += dt * 0.72;
            renderer.render(scene, camera);
        });

        setInterval(() => {
            window.location.href = '/';
        }, 5000)

        // ---------- Cleanup ----------
        return () => {
            window.removeEventListener('orientationchange', onOrientation);
            roRef.current?.disconnect();
            renderer.setAnimationLoop(null);

            scene.traverse((obj) => {
                const mesh = obj as THREE.Mesh;
                if (mesh.geometry) mesh.geometry.dispose();
                const mat = mesh.material as THREE.Material | THREE.Material[] | undefined;
                if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
                else mat?.dispose?.();
            });

            renderer.dispose();
            if (wrap && renderer.domElement.parentElement === wrap) {
                wrap.removeChild(renderer.domElement);
            }
        };

    }, []);

    return (
        <S.Page>
            <S.Wrapper>
                <S.CanvasPane>
                    <S.CanvasWrap ref={wrapRef} />
                </S.CanvasPane>

                <S.Content>
                    <S.Code>404</S.Code>
                    <S.Title>Página não encontrada</S.Title>
                    <S.Subtitle>
                        A página que você procura pode ter sido movida, renomeada ou não existe.
                    </S.Subtitle>

                    <S.Actions>
                        <S.PrimaryButton onClick={() => router.push('/')}>Voltar para a Home</S.PrimaryButton>
                        <S.SecondaryLink href="mailto:contato@projetive.com.br">Falar com o suporte</S.SecondaryLink>
                    </S.Actions>
                </S.Content>
            </S.Wrapper>
        </S.Page>
    );
}
