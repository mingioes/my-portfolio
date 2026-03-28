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
  github: "https://github.com",
  linkedin: "https://linkedin.com/in/minjun",

  certifications: [
    { name: "리눅스마스터 2급", org: "한국산업인력공단", date: "2024.06" },
    { name: "SQLD", org: "한국데이터산업진흥원", date: "2023.12" },
    { name: "OPIc IM2", org: "ACTFL", date: "2023.08" },
  ],

  photo: "my-portfolio/public/민서증명사진.jpg", // 증명사진 URL을 여기에 넣으세요. 예: "/photo.jpg"

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
      school: "한국대학교 컴퓨터공학과",
      period: "2020 — 2025",
      note: "졸업 예정 · GPA 4.1 / 4.5",
    },
  ],

  awards: [
    { title: "교내 해커톤 최우수상", org: "한국대학교", year: "2024" },
    {
      title: "K-디지털 챌린지 본선 진출",
      org: "과학기술정보통신부",
      year: "2023",
    },
    { title: "SW 캡스톤 우수상", org: "컴퓨터공학과", year: "2023" },
  ],

  skills: {
    Frontend: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Recoil"],
    Backend: ["Node.js", "Express", "Spring Boot", "MySQL", "Redis"],
    "DevOps / Tools": ["Git", "Docker", "AWS EC2", "Vercel", "Figma"],
  },

  projects: [
    {
      title: "TaskFlow",
      period: "2024.03 — 2024.06",
      desc: "팀 협업을 위한 실시간 태스크 관리 웹앱. 드래그앤드롭 칸반 보드와 Socket.io 기반 실시간 알림 기능을 구현했습니다.",
      tags: ["React", "Socket.io", "Node.js", "MongoDB"],
      link: "https://github.com",
      demo: "https://taskflow.vercel.app",
    },
    {
      title: "WeatherNow",
      period: "2023.09 — 2023.11",
      desc: "OpenWeather API를 활용한 날씨 앱. 위치 기반 날씨 정보와 7일 예보, 대기질 지수를 Chart.js로 시각화했습니다.",
      tags: ["React", "Chart.js", "OpenAPI", "CSS Modules"],
      link: "https://github.com",
      demo: null,
    },
    {
      title: "DevLog",
      period: "2023.03 — 2023.06",
      desc: "마크다운 기반 개발 블로그 플랫폼. 커스텀 에디터와 태그 검색, SSG 기반 정적 생성 최적화를 직접 설계했습니다.",
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      link: "https://github.com",
      demo: "https://devlog.vercel.app",
    },
  ],
};

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

function Nav({ active, setActive }) {
  const items = ["about", "background", "projects", "skills"];
  const labels = {
    about: "소개",
    background: "학력/수상",
    projects: "프로젝트",
    skills: "기술",
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
          letterSpacing: "-0.02em",
        }}>
        {data.name}
        <span style={{ color: BLUE, marginLeft: 2 }}>.</span>
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
              transition: "all 0.18s",
            }}>
            {labels[item]}
          </button>
        ))}
      </div>
    </nav>
  );
}

function InfoRow({ icon, label, value, href }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <span
        style={{
          fontSize: 13,
          color: "#94a3b8",
          minWidth: 16,
          textAlign: "center",
        }}>
        {icon}
      </span>
      <span style={{ fontSize: 12, color: "#94a3b8", minWidth: 40 }}>
        {label}
      </span>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          style={{
            fontSize: 14,
            color: BLUE,
            fontWeight: 500,
            textDecoration: "none",
          }}>
          {value} ↗
        </a>
      ) : (
        <span style={{ fontSize: 14, color: "#334155", fontWeight: 500 }}>
          {value}
        </span>
      )}
    </div>
  );
}

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
        overflow: "hidden",
        padding: "100px clamp(20px,8vw,120px) 60px",
      }}>
      <div
        style={{
          position: "absolute",
          top: -120,
          right: -120,
          width: 480,
          height: 480,
          borderRadius: "50%",
          background: BLUE_LIGHT,
          opacity: 0.5,
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: -60,
          width: 220,
          height: 220,
          borderRadius: "50%",
          background: "#dbeafe",
          opacity: 0.4,
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "clamp(32px,6vw,80px)",
          flexWrap: "wrap",
        }}>
        {/* 왼쪽: 텍스트 */}
        <div style={{ flex: "1 1 340px", minWidth: 0 }}>
          <FadeUp>
            <h1
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(40px,7vw,72px)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                color: NAVY,
                margin: "0 0 10px",
              }}>
              {data.name}
            </h1>
          </FadeUp>
          <FadeUp delay={0.08}>
            <p
              style={{
                fontSize: "clamp(16px,2vw,20px)",
                fontWeight: 500,
                color: BLUE,
                margin: "0 0 20px",
                letterSpacing: "-0.01em",
              }}>
              {data.tagline}
            </p>
          </FadeUp>
          <FadeUp delay={0.14}>
            <p
              style={{
                fontSize: 15,
                color: "#475569",
                lineHeight: 1.85,
                margin: "0 0 28px",
              }}>
              {data.bio}
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 9,
                padding: "18px 22px",
                background: BLUE_LIGHT,
                borderRadius: 14,
                border: "1px solid #dbeafe",
              }}>
              <InfoRow
                icon="🎂"
                label="나이"
                value={`${data.age} (${data.birth})`}
              />
              <div style={{ height: 1, background: "#c7d9f9" }} />
              <InfoRow icon="✉" label="이메일" value={data.email} />
              <div style={{ height: 1, background: "#c7d9f9" }} />
              <InfoRow
                icon="🐙"
                label="GitHub"
                value="github.com/minjun"
                href={data.github}
              />
            </div>
          </FadeUp>
        </div>

        {/* 오른쪽: 사진 + 키워드 + 희망직무 */}
        <div
          style={{
            flex: "0 0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
          }}>
          <FadeUp delay={0.1}>
            {/* 증명사진 */}
            <div
              style={{
                width: 200,
                height: 260,
                borderRadius: 20,
                border: `2.5px solid ${BLUE_LIGHT}`,
                overflow: "hidden",
                background: BLUE_LIGHT,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: `0 8px 32px ${BLUE}18`,
                flexShrink: 0,
              }}>
              {data.photo ? (
                <img
                  src={data.photo}
                  alt="증명사진"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 40, marginBottom: 8 }}>🧑‍💻</div>
                  <p
                    style={{
                      fontSize: 11,
                      color: BLUE,
                      fontWeight: 600,
                      margin: 0,
                    }}>
                    증명사진
                  </p>
                  <p
                    style={{
                      fontSize: 10,
                      color: "#94a3b8",
                      margin: "4px 0 0",
                    }}>
                    photo 필드에 URL 입력
                  </p>
                </div>
              )}
            </div>
          </FadeUp>

          {/* 희망 직무 */}
          <FadeUp delay={0.18}>
            <div style={{ width: 200 }}>
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#94a3b8",
                  margin: "0 0 8px",
                  textAlign: "center",
                }}>
                희망 직무
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 6,
                  justifyContent: "center",
                }}>
                {data.targetRoles.map((r) => (
                  <span
                    key={r}
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#fff",
                      background: BLUE,
                      padding: "5px 11px",
                      borderRadius: 20,
                    }}>
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* 키워드 태그 */}
          <FadeUp delay={0.24}>
            <div style={{ width: 200 }}>
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#94a3b8",
                  margin: "0 0 8px",
                  textAlign: "center",
                }}>
                키워드
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 6,
                  justifyContent: "center",
                }}>
                {data.keywords.map((k) => (
                  <span
                    key={k}
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: BLUE,
                      background: BLUE_LIGHT,
                      padding: "5px 11px",
                      borderRadius: 20,
                      border: "1px solid #c7d9f9",
                    }}>
                    {k}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function BackgroundSection() {
  const cardStyle = {
    background: "#fff",
    border: "1px solid #e2e8f0",
    borderRadius: 16,
    padding: "24px 28px",
  };
  const labelStyle = {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: BLUE,
    margin: "0 0 16px",
  };
  const rowStyle = (last) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: last ? 0 : 14,
    paddingBottom: last ? 0 : 14,
    borderBottom: last ? "none" : "1px solid #f1f5f9",
  });
  const badgeStyle = {
    fontSize: 11,
    background: BLUE_LIGHT,
    color: BLUE,
    padding: "3px 8px",
    borderRadius: 6,
    fontWeight: 700,
    whiteSpace: "nowrap",
  };

  return (
    <section
      id="background"
      style={{ background: "#f8faff", padding: "100px clamp(20px,8vw,120px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <FadeUp>
          <SectionLabel>Background</SectionLabel>
        </FadeUp>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 20,
          }}>
          {/* 1. 수상 */}
          <FadeUp delay={0}>
            <div style={cardStyle}>
              <p style={labelStyle}>Awards</p>
              {data.awards.map((a, i) => (
                <div key={i} style={rowStyle(i === data.awards.length - 1)}>
                  <div>
                    <p
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: NAVY,
                        margin: "0 0 2px",
                      }}>
                      {a.title}
                    </p>
                    <p style={{ fontSize: 12, color: "#94a3b8", margin: 0 }}>
                      {a.org}
                    </p>
                  </div>
                  <span style={badgeStyle}>{a.year}</span>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* 2. 자격증 */}
          <FadeUp delay={0.1}>
            <div style={cardStyle}>
              <p style={labelStyle}>Certifications</p>
              {data.certifications.map((c, i) => (
                <div
                  key={i}
                  style={rowStyle(i === data.certifications.length - 1)}>
                  <div>
                    <p
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: NAVY,
                        margin: "0 0 2px",
                      }}>
                      {c.name}
                    </p>
                    <p style={{ fontSize: 12, color: "#94a3b8", margin: 0 }}>
                      {c.org}
                    </p>
                  </div>
                  <span style={badgeStyle}>{c.date}</span>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* 3. 학력 */}
          <FadeUp delay={0.2}>
            <div style={cardStyle}>
              <p style={labelStyle}>Education</p>
              {data.education.map((ed, i) => (
                <div key={i}>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: NAVY,
                      margin: "0 0 4px",
                    }}>
                    {ed.school}
                  </p>
                  <p
                    style={{
                      fontSize: 13,
                      color: "#64748b",
                      margin: "0 0 4px",
                    }}>
                    {ed.period}
                  </p>
                  <p
                    style={{
                      fontSize: 12,
                      color: BLUE,
                      fontWeight: 600,
                      margin: 0,
                    }}>
                    {ed.note}
                  </p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p, index }) {
  const [hov, setHov] = useState(false);
  return (
    <FadeUp delay={index * 0.1}>
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          background: "#fff",
          border: `1.5px solid ${hov ? BLUE_MID : "#e2e8f0"}`,
          borderRadius: 18,
          padding: "28px 32px",
          transition: "border-color 0.25s, box-shadow 0.25s",
          boxShadow: hov ? `0 8px 32px ${BLUE}18` : "none",
        }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 14,
          }}>
          <div>
            <span
              style={{
                fontSize: 11,
                fontFamily: "'DM Mono', monospace",
                color: "#94a3b8",
              }}>
              {p.period}
            </span>
            <h3
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 20,
                fontWeight: 800,
                color: NAVY,
                margin: "6px 0 0",
                letterSpacing: "-0.02em",
              }}>
              {p.title}
            </h3>
          </div>
          <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
            {p.demo && (
              <a
                href={p.demo}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#fff",
                  background: BLUE,
                  padding: "6px 14px",
                  borderRadius: 8,
                  textDecoration: "none",
                }}>
                Live ↗
              </a>
            )}
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: BLUE,
                background: BLUE_LIGHT,
                padding: "6px 14px",
                borderRadius: 8,
                textDecoration: "none",
              }}>
              Code
            </a>
          </div>
        </div>
        <p
          style={{
            fontSize: 14,
            color: "#475569",
            lineHeight: 1.8,
            margin: "0 0 18px",
          }}>
          {p.desc}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
          {p.tags.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>
      </div>
    </FadeUp>
  );
}

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
                  padding: "24px 28px",
                }}>
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: BLUE,
                    margin: "0 0 16px",
                  }}>
                  {cat}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {items.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        fontSize: 13,
                        fontWeight: 500,
                        color: NAVY,
                        background: "#f0f4ff",
                        padding: "6px 12px",
                        borderRadius: 8,
                        border: "1px solid #dbeafe",
                      }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.2}>
          <div
            style={{
              marginTop: 48,
              background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 100%)`,
              borderRadius: 20,
              padding: "40px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 24,
            }}>
            <div>
              <p
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: 22,
                  fontWeight: 800,
                  color: "#fff",
                  margin: "0 0 8px",
                }}>
                함께 일하고 싶으신가요?
              </p>
              <p style={{ fontSize: 14, color: "#bfdbfe", margin: 0 }}>
                현재 신입 포지션을 적극 지원 중입니다.
              </p>
            </div>
            <a
              href={`mailto:${data.email}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#fff",
                color: BLUE,
                padding: "13px 28px",
                borderRadius: 10,
                fontSize: 14,
                fontWeight: 700,
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}>
              연락하기 →
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = ["about", "background", "projects", "skills"];
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { threshold: 0.3 },
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div
      style={{
        fontFamily: "'DM Sans', 'Pretendard', sans-serif",
        background: "#fff",
        minHeight: "100vh",
        color: "#1e293b",
      }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <Nav active={active} setActive={setActive} />
      <HeroSection />
      <BackgroundSection />
      <section
        id="projects"
        style={{ background: "#fff", padding: "100px clamp(20px,8vw,120px)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <FadeUp>
            <SectionLabel>Projects</SectionLabel>
          </FadeUp>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {data.projects.map((p, i) => (
              <ProjectCard key={p.title} p={p} index={i} />
            ))}
          </div>
        </div>
      </section>
      <SkillsSection />
      <footer
        style={{
          background: NAVY,
          color: "#94a3b8",
          textAlign: "center",
          padding: "32px 20px",
          fontSize: 13,
        }}>
        <p style={{ margin: 0 }}>
          © 2025{" "}
          <span style={{ color: "#fff", fontWeight: 600 }}>{data.name}</span> ·
          Built with React
        </p>
      </footer>
    </div>
  );
}
