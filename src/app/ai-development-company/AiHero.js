"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";

export default function AIDevelopmentPage() {
    const mountRef = useRef(null);

    useEffect(() => {
        const container = mountRef.current;

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(
            75,
            container.clientWidth / container.clientHeight,
            0.1,
            1000
        );
        camera.position.z = 120;

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
        });

        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);

        // ---------------- PARTICLES ----------------
        const particlesCount = 120;
        const positions = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 250;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 150;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 150;
        }

        const particleGeometry = new THREE.BufferGeometry();
        particleGeometry.setAttribute(
            "position",
            new THREE.BufferAttribute(positions, 3)
        );

        const particleMaterial = new THREE.PointsMaterial({
            size: 2,
            color: "#ffffff",
            transparent: true,
            opacity: 0.9,
        });

        const particles = new THREE.Points(particleGeometry, particleMaterial);
        scene.add(particles);

        // ---------------- LINES ----------------
        const lineMaterial = new THREE.LineBasicMaterial({
            color: "#7aa2ff",
            transparent: true,
            opacity: 0.4,
        });

        const linePositions = [];

        for (let i = 0; i < particlesCount; i++) {
            for (let j = i + 1; j < particlesCount; j++) {
                const dx = positions[i * 3] - positions[j * 3];
                const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
                const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

                if (dist < 35) {
                    linePositions.push(
                        positions[i * 3],
                        positions[i * 3 + 1],
                        positions[i * 3 + 2],
                        positions[j * 3],
                        positions[j * 3 + 1],
                        positions[j * 3 + 2]
                    );
                }
            }
        }

        const lineGeometry = new THREE.BufferGeometry();
        lineGeometry.setAttribute(
            "position",
            new THREE.Float32BufferAttribute(linePositions, 3)
        );

        const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
        scene.add(lines);

        // ---------------- ANIMATION ----------------
        const animate = () => {
            requestAnimationFrame(animate);

            particles.rotation.y += 0.0008;
            lines.rotation.y += 0.0008;

            renderer.render(scene, camera);
        };

        animate();

        // ---------------- RESIZE ----------------
        const handleResize = () => {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            container.removeChild(renderer.domElement);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#0b0620] via-[#2a1a68] to-[#1c1b4d]">

            {/* Three.js Canvas */}
            <div ref={mountRef} className="absolute inset-0 z-0" />

            {/* Glow overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,120,255,0.25),transparent_60%)] z-0" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">

                <motion.div className="mb-6 px-5 py-2 rounded-full bg-white/10 backdrop-blur text-white text-sm">
                    ⚡ Next-Gen AI Technology
                </motion.div>

                <h1 className="text-2xl md:text-3xl text-white mt-2">
                    Artificial Intelligence
                </h1>

                <h2 className="text-2xl md:text-3xl text-white mt-2">
                    Development Platform
                </h2>

                <p className="text-gray-300 mt-6 max-w-2xl">
                    Harness the power of neural networks and machine learning to build the future of intelligent applications
                </p>

                <div className="flex gap-4 mt-8">
                    <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium">
                        Get Started
                    </button>

                    <button className="px-6 py-3 rounded-lg bg-white/10 backdrop-blur text-white">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
}
