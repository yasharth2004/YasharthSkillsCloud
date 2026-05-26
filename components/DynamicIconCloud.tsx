"use client";

import React from "react";
import { Cloud } from "react-icon-cloud";

type SkillIcon = {
  title: string;
  src: string;
};

const devIcon = (name: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`;

const logoIcon = (slug: string) => `https://api.iconify.design/logos:${slug}.svg`;

const simpleIcon = (slug: string, color?: string) =>
  `https://cdn.simpleicons.org/${slug}${color ? `/${color}` : ""}`;

const icons: SkillIcon[] = [
  // AI assistants
  { title: "OpenAI", src: simpleIcon("openai", "10A37F") },
  { title: "Claude", src: simpleIcon("claude", "D97757") },
  { title: "GitHub Copilot", src: simpleIcon("githubcopilot", "8957E5") },

  // Languages
  { title: "Python", src: devIcon("python") },
  { title: "JavaScript", src: devIcon("javascript") },
  { title: "TypeScript", src: devIcon("typescript") },
  { title: "Java", src: devIcon("java") },
  { title: "C", src: devIcon("c") },
  { title: "C++", src: devIcon("cplusplus") },
  { title: "C#", src: devIcon("csharp") },
  { title: "Go", src: devIcon("go") },
  { title: "Rust", src: devIcon("rust") },
  { title: "PHP", src: devIcon("php") },
  { title: "Ruby", src: devIcon("ruby") },
  { title: "Swift", src: devIcon("swift") },
  { title: "Kotlin", src: devIcon("kotlin") },
  { title: "Scala", src: devIcon("scala") },
  { title: "R", src: devIcon("r") },
  { title: "Dart", src: devIcon("dart") },

  // Frontend
  { title: "HTML5", src: devIcon("html5") },
  { title: "CSS", src: devIcon("css3") },
  { title: "React / React Native", src: devIcon("react") },
  { title: "Vue.js", src: devIcon("vuejs") },
  { title: "Angular", src: logoIcon("angular-icon") },
  { title: "Svelte", src: devIcon("svelte") },
  { title: "Tailwind CSS", src: devIcon("tailwindcss") },
  { title: "Bootstrap", src: devIcon("bootstrap") },
  { title: "Next.js", src: simpleIcon("nextdotjs", "A3A3A3") },
  { title: "Redux", src: devIcon("redux") },

  // Backend
  { title: "Node.js", src: devIcon("nodejs") },
  { title: "Express", src: simpleIcon("express", "A3A3A3") },
  { title: "Django", src: devIcon("django", "plain") },
  { title: "Flask", src: simpleIcon("flask", "A3A3A3") },
  { title: "FastAPI", src: devIcon("fastapi") },
  { title: "GraphQL", src: devIcon("graphql", "plain") },
  { title: "Laravel", src: devIcon("laravel") },
  { title: "Spring Boot", src: devIcon("spring") },
  { title: ".NET", src: devIcon("dot-net") },
  { title: "REST API / OpenAPI", src: devIcon("swagger") },
  { title: "OAuth / OpenID", src: simpleIcon("openid", "F78C40") },
  { title: "JWT", src: logoIcon("jwt-icon") },

  // Databases
  { title: "PostgreSQL", src: devIcon("postgresql") },
  { title: "MongoDB", src: devIcon("mongodb") },
  { title: "MySQL", src: devIcon("mysql") },
  { title: "Redis", src: devIcon("redis") },
  { title: "SQLite", src: devIcon("sqlite") },
  { title: "Supabase", src: logoIcon("supabase-icon") },

  // DevOps / tools
  { title: "Docker", src: devIcon("docker") },
  { title: "Kubernetes", src: devIcon("kubernetes") },
  { title: "Git", src: devIcon("git") },
  { title: "GitHub Actions", src: logoIcon("github-actions") },
  { title: "Linux", src: logoIcon("linux-tux") },
  { title: "Visual Studio Code", src: devIcon("vscode") },
  { title: "Visual Studio", src: devIcon("visualstudio") },
  { title: "Postman", src: logoIcon("postman-icon") },
  { title: "Figma", src: devIcon("figma") },
  { title: "npm", src: devIcon("npm", "original-wordmark") },
  { title: "Yarn", src: devIcon("yarn") },
  { title: "Vercel", src: simpleIcon("vercel", "A3A3A3") },

  // Cloud
  { title: "AWS", src: simpleIcon("amazonaws", "FF9900") },
  { title: "Microsoft Azure", src: devIcon("azure") },
  { title: "Google Cloud", src: devIcon("googlecloud") },

  // ML / AI
  { title: "TensorFlow", src: devIcon("tensorflow") },
  { title: "PyTorch", src: devIcon("pytorch") },
  { title: "scikit-learn", src: devIcon("scikitlearn") },
  { title: "Hugging Face", src: simpleIcon("huggingface", "FFD21E") },
  { title: "OpenCV", src: devIcon("opencv") },
  { title: "Pandas", src: devIcon("pandas") },
  { title: "NumPy", src: devIcon("numpy") },
  { title: "Matplotlib", src: devIcon("matplotlib") },
  { title: "Jupyter", src: devIcon("jupyter") },
  { title: "LangChain", src: simpleIcon("langchain", "1C3C3C") },

  // Web tooling
  { title: "Vite", src: devIcon("vitejs") },
  { title: "Nginx", src: devIcon("nginx") },

  // OS
  { title: "Ubuntu", src: devIcon("ubuntu") },
  
  // Misc
  { title: "Unity", src: simpleIcon("unity", "A3A3A3") },
  { title: "Firebase", src: devIcon("firebase") },
  { title: "GitHub", src: simpleIcon("github", "A3A3A3") },
  { title: "GitLab", src: devIcon("gitlab") },
  { title: "PyCharm", src: devIcon("pycharm") },
  { title: "Flutter", src: devIcon("flutter") },
];

const renderedIcons: React.ReactFragment = icons.map((icon) => (
  <a
    key={icon.title}
    href="#"
    title={icon.title}
    onClick={(event) => event.preventDefault()}
  >
    <img
      alt={icon.title}
      height={30}
      width={30}
      src={icon.src}
    />
  </a>
));

const preloadIconImages = (items: SkillIcon[]) =>
  Promise.allSettled(
    items.map(
      (icon) =>
        new Promise<void>((resolve) => {
          const image = new Image();
          image.onload = () => resolve();
          image.onerror = () => resolve();
          image.src = icon.src;
        })
    )
  );

export default function DynamicIconCloud() {
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    let isMounted = true;

    preloadIconImages(icons).then(() => {
      if (isMounted) {
        setIsReady(true);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="h-[min(88vw,620px)] w-full flex justify-center items-center">
      {isReady ? (
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
          {renderedIcons}
        </Cloud>
      ) : null}
    </div>
  );
}
