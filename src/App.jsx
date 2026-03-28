import { useState, useEffect, useRef } from "react";

const BLUE = "#1a56db";
const BLUE_LIGHT = "#e8f0fe";
const BLUE_MID = "#3b82f6";
const NAVY = "#0f2a6e";

const data = {
  name: "강민서",
  age: "23세",
  birth: "2004.01.15",
  role: "Backend Developer",
  tagline: "사용자 경험을 설계하는 개발자",
  bio: "복잡한 문제를 단순하고 직관적인 인터페이스로 풀어내는 것을 좋아합니다. 협업을 중요하게 생각하며, 코드 품질과 사용성 모두를 챙기는 개발자를 지향합니다.",
  email: "minjun@email.com",
  github: "https://github.com/mingioes",
  linkedin: "https://linkedin.com/in/minjun",

  certifications: [
    { name: "리눅스마스터 2급", org: "한국산업인력공단", date: "2024.06" },
    { name: "SQLD", org: "한국데이터산업진흥원", date: "2023.12" },
    { name: "OPIc IM2", org: "ACTFL", date: "2023.08" },
  ],

  photo: "./민서증명사진.jpg",

  keywords: [
    "성실함",
    "빠른 학습",
    "협업 중시",
    "꼼꼼한 코드 리뷰",
    "문제 해결",
  ],
  targetRoles: ["Frontend Developer", "Web Developer", "React Developer"],

  education: [
    {
      school: "한성대학교 컴퓨터공학부 모바일소프트웨어/웹공학트랙",
      period: "2022.03 입학 — 2026.02 졸업",
      note: "졸업 · 학점 3.6 / 4.5",
    },
  ],

  awards: [
    {
      title: "2025 컴퓨터공학부 기업연계형 캡스톤디자인 최우수상",
      org: "한성대학교",
      year: "2025.05",
    },
    {
      title: "K-디지털 챌린지 본선 진출",
      org: "과학기술정보통신부",
      year: "2023",
    },
    {
      title: "2025 한국통신학회 추계학술대회 학부생 캡스톤디자인 경진대회",
      org: "한국통신학회",
      year: "2025.11",
    },
  ],

  skills: {
    Frontend: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Recoil"],
    Backend: ["Node.js", "Express", "Spring Boot", "MySQL", "Redis"],
    "DevOps / Tools": ["Git", "Docker", "AWS EC2", "Vercel", "Figma"],
  },

  projects: [
    {
      title: "Wakey Wakey",
      period: "2024.03 — 2024.06",
      desc: "팀 협업을 위한 실시간 태스크 관리 웹앱.",
      details:
        "Socket.io를 활용하여 팀원 간 실시간 알림 시스템을 구축했습니다. 드래그 앤 드롭 방식의 칸반 보드를 통해 업무 진행 상황을 직관적으로 관리할 수 있도록 설계했습니다.",
      tags: ["React", "Socket.io", "Node.js", "MongoDB"],
      link: "https://github.com",
      demo: "https://taskflow.vercel.app",
    },
    {
      title: "날씨 정보 시각화 서비스",
      period: "2023.09 — 2023.11",
      desc: "OpenWeather API를 활용한 실시간 날씨 앱.",
      details:
        "Chart.js를 사용하여 시간에 따른 기온 변화와 습도를 그래프로 시각화했습니다. 사용자의 현재 위치를 자동으로 파악하여 데이터를 대시보드 형태로 제공합니다.",
      tags: ["React", "Chart.js", "OpenAPI", "CSS Modules"],
      link: "https://github.com",
      demo: null,
    },
    {
      title: "다우기술 기업 연계형 프리캡스톤",
      period: "2023.03 — 2023.06",
      desc: "마크다운 기반 PDF 제작 서비스.",
      details:
        "Next.js의 SSG 방식을 적용하여 페이지 로딩 속도를 개선했습니다. 사용자가 실시간 프리뷰를 보며 문서를 편집하고 PDF로 추출할 수 있는 기능을 제공합니다.",
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      link: "https://github.com",
      demo: "https://devlog.vercel.app",
    },
  ],
};

// --- 공통 컴포넌트 ---
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function FadeUp({ children, delay = 0 }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s cubic-bezier(.4,0,.2,1) ${delay}s, transform 0.65s cubic-bezier(.4,0,.2,1) ${delay}s`,
      }}>
      {children}
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginBottom: 36,
      }}>
      <span
        style={{
          width: 32,
          height: 3,
          background: BLUE,
          borderRadius: 2,
          display: "inline-block",
        }}
      />
      <span
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: BLUE,
        }}>
        {children}
      </span>
    </div>
  );
}

function Tag({ label }) {
  return (
    <span
      style={{
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.06em",
        padding: "4px 10px",
        borderRadius: 20,
        background: BLUE_LIGHT,
        color: BLUE,
        border: `1px solid #c7d9f9`,
      }}>
      {label}
    </span>
  );
}

// 모달 컴포넌트
function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(15, 42, 110, 0.4)",
        backdropFilter: "blur(8px)",
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
      onClick={onClose}>
      <div
        style={{
          backgroundColor: "#fff",
          width: "100%",
          maxWidth: "600px",
          borderRadius: "24px",
          padding: "40px",
          position: "relative",
          boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
          animation: "modalSlideUp 0.3s ease-out",
        }}
        onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            border: "none",
            background: "none",
            fontSize: "24px",
            cursor: "pointer",
            color: "#94a3b8",
          }}>
          ✕
        </button>
        <span style={{ fontSize: "12px", color: BLUE, fontWeight: 700 }}>
          PROJECT DETAIL
        </span>
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "28px",
            color: NAVY,
            marginTop: "8px",
          }}>
          {project.title}
        </h2>
        <div
          style={{
            borderTop: "1px solid #f1f5f9",
            paddingTop: "24px",
            marginTop: "16px",
          }}>
          <p style={{ fontSize: "15px", color: "#475569", lineHeight: "1.8" }}>
            {project.details}
          </p>
        </div>
      </div>
      <style>{` @keyframes modalSlideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } } `}</style>
    </div>
  );
}

// 네비게이션
function Nav({ active, setActive }) {
  const items = ["about", "skills", "background", "projects"];
  const labels = {
    about: "소개",
    skills: "기술",
    background: "학력/수상",
    projects: "프로젝트",
  };
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid #e2e8f0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 clamp(20px,5vw,80px)",
        height: 60,
      }}>
      <span
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 17,
          fontWeight: 700,
          color: NAVY,
        }}>
        {data.name}
        <span style={{ color: BLUE }}>.</span>
      </span>
      <div style={{ display: "flex", gap: 2 }}>
        {items.map((item) => (
          <button
            key={item}
            onClick={() => {
              setActive(item);
              document
                .getElementById(item)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              background: active === item ? BLUE : "transparent",
              color: active === item ? "#fff" : "#64748b",
              border: "none",
              borderRadius: 8,
              padding: "6px 14px",
              fontSize: 13,
              fontWeight: 500,
              cursor: "pointer",
            }}>
            {labels[item]}
          </button>
        ))}
      </div>
    </nav>
  );
}

// 소개 섹션
function HeroSection() {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "#fff",
        position: "relative",
        padding: "100px clamp(20px,8vw,120px) 60px",
      }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "60px",
          flexWrap: "wrap",
          zIndex: 1,
        }}>
        <div style={{ flex: "1 1 400px" }}>
          <FadeUp>
            <h1
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(40px,7vw,72px)",
                fontWeight: 800,
                color: NAVY,
              }}>
              {data.name}
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p style={{ color: BLUE, fontWeight: 600, fontSize: "20px" }}>
              {data.tagline}
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p style={{ color: "#475569", lineHeight: 1.8 }}>{data.bio}</p>
          </FadeUp>
        </div>
        <FadeUp delay={0.1}>
          <div
            style={{
              width: 200,
              height: 260,
              borderRadius: 20,
              overflow: "hidden",
              border: `4px solid ${BLUE_LIGHT}`,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            }}>
            <img
              src={data.photo}
              alt="Profile"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

// ✅ Skills 섹션 (위로 이동)
function SkillsSection() {
  return (
    <section
      id="skills"
      style={{ background: "#f8faff", padding: "100px clamp(20px,8vw,120px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <FadeUp>
          <SectionLabel>Skills</SectionLabel>
        </FadeUp>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
          }}>
          {Object.entries(data.skills).map(([cat, items], ci) => (
            <FadeUp key={cat} delay={ci * 0.1}>
              <div
                style={{
                  background: "#fff",
                  border: "1px solid #e2e8f0",
                  borderRadius: 16,
                  padding: "24px",
                }}>
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: BLUE,
                    marginBottom: "16px",
                  }}>
                  {cat}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {items.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        fontSize: 13,
                        background: "#f0f4ff",
                        padding: "6px 12px",
                        borderRadius: 8,
                      }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// 메인 포트폴리오
export default function Portfolio() {
  const [active, setActive] = useState("about");
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div style={{ fontFamily: "'DM Sans', 'Pretendard', sans-serif" }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@800&family=DM+Sans:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <Nav active={active} setActive={setActive} />

      <HeroSection />

      {/* 순서 변경됨: Skills가 위로! */}
      <SkillsSection />

      {/* 학력/수상 섹션 */}
      <section
        id="background"
        style={{ padding: "100px clamp(20px,8vw,120px)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <FadeUp>
            <SectionLabel>Background</SectionLabel>
          </FadeUp>
          <div
            style={{
              background: "#fff",
              border: "1px solid #e2e8f0",
              borderRadius: 16,
              padding: "30px",
            }}>
            <h3 style={{ color: BLUE, fontSize: "14px", marginBottom: "20px" }}>
              Education
            </h3>
            {data.education.map((ed, i) => (
              <div key={i}>
                <p style={{ fontWeight: 700, color: NAVY }}>{ed.school}</p>
                <p style={{ fontSize: "13px", color: "#64748b" }}>
                  {ed.period} | {ed.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 프로젝트 섹션 */}
      <section
        id="projects"
        style={{
          background: "#f8faff",
          padding: "100px clamp(20px,8vw,120px)",
        }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <FadeUp>
            <SectionLabel>Projects</SectionLabel>
          </FadeUp>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {data.projects.map((p, i) => (
              <div
                key={i}
                onClick={() => setSelectedProject(p)}
                style={{
                  background: "#fff",
                  padding: "30px",
                  borderRadius: 18,
                  border: "1px solid #e2e8f0",
                  cursor: "pointer",
                }}>
                <h3 style={{ color: NAVY }}>
                  {p.title}{" "}
                  <span style={{ fontSize: "12px", color: BLUE }}>
                    자세히 보기 →
                  </span>
                </h3>
                <p style={{ fontSize: "14px", color: "#475569" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <footer
        style={{
          background: NAVY,
          color: "#fff",
          textAlign: "center",
          padding: "40px",
        }}>
        <p>© 2025 {data.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}
