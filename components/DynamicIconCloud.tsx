"use client";

import React from "react";
import {
  Cloud,
  renderSimpleIcon,
  fetchSimpleIcons,
} from "react-icon-cloud";

const useIcons = (slugs: string[]): React.ReactFragment => {
  const [icons, setIcons] = React.useState<any>(null);

  React.useEffect(() => {
    fetchSimpleIcons({ slugs }).then(setIcons);
  }, []);

  if (!icons) return [<span key="loading">Loading...</span>];

  return Object.values(icons.simpleIcons).map((icon: any) =>
    renderSimpleIcon({
      icon,
      size: 35,
      minContrastRatio: 1.5,
      aProps: {
        href: "#",
        onClick: (e: any) => e.preventDefault(),
      },
    })
  );
};

const slugs = [
  // AI assistants
  "openai",
  "claude",
  "githubcopilot",

  // Languages
  "python",
  "javascript",
  "typescript",
  "java",
  "c",
  "cplusplus",
  "csharp",
  "go",
  "rust",
  "php",
  "ruby",
  "swift",
  "kotlin",
  "scala",
  "r",
  "dart",

  // Frontend
  "html5",
  "css",
  "react",
  "vuedotjs",
  "angular",
  "svelte",
  "tailwindcss",
  "bootstrap",
  "nextdotjs",
  "redux",
  "react",

  // Backend
  "nodedotjs",
  "express",
  "django",
  "flask",
  "fastapi",
  "graphql",
  "laravel",
  "springboot",
  "dotnet",
  "openapiinitiative", // REST API
  "openid", // OAuth
  "jsonwebtokens", // JWT

  // Databases
  "postgresql",
  "mongodb",
  "mysql",
  "redis",
  "sqlite",
  "supabase",

  // DevOps / tools
  "docker",
  "kubernetes",
  "git",
  "githubactions",
  "linux",
  "visualstudiocode",
  "visualstudio",
  "postman",
  "figma",
  "npm",
  "yarn",
  "vercel",

  // Cloud
  "amazonaws",
  "microsoftazure",
  "googlecloud",

  // ML / AI
  "tensorflow",
  "pytorch",
  "scikitlearn",
  "huggingface",
  "opencv",
  "pandas",
  "numpy",
  "matplotlib",
  "jupyter",
  "langchain",

  // Web tooling
  "vite",
  "nginx",

  // OS
  "ubuntu",
  
  // Misc
  "unity",
  "firebase",
  "github",
  "gitlab",
  "vscode",
  "pycharm",
  "flutter",
];

export default function DynamicIconCloud() {
  const icons = useIcons(slugs);

  return (
    <div className="h-[min(88vw,620px)] w-full flex justify-center items-center">
      <Cloud
        canvasProps={{
          style: {
            width: "min(88vw, 620px)",
            height: "min(88vw, 620px)",
            display: "block",
          },
        }}
        options={{
          reverse: true,
          depth: 0.8,
          wheelZoom: false,
          pinchZoom: false,
          imageScale: 2.5,
          activeCursor: "grab",
          tooltip: "native",
          initial: [0.1, 0],
          clickToFront: 500,
          tooltipDelay: 0,
          outlineColour: "transparent",
          maxSpeed: 0.02,
          minSpeed: 0.01,
          shuffleTags: true,
          lock: "y",
        }}
      >
        {icons}
      </Cloud>
    </div>
  );
}
