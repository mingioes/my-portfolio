import { useState, useEffect, useRef } from "react";

/* ── 색상 팔레트 ── */
const C = {
  bg: "#f8f9fa",
  surface: "#ffffff",
  navy: "#202124",
  blue: "#1a73e8",
  blueLight: "#e8f0fe",
  blueMid: "#4285f4",
  sky: "#00b4d8",
  skyLight: "#e0f7fa",
  red: "#ea4335",
  redLight: "#fce8e6",
  yellow: "#fbbc04",
  yellowLight: "#fef9e7",
  muted: "#5f6368",
  border: "#dadce0",
  headerBg: "#1a73e8",
  headerBgSoft: "#5aa9ff",
  headerGlass: "rgba(255,255,255,0.16)",
  blueStrong: "#0b57d0",
  blueSoft: "rgba(37,99,235,0.08)",
  blueSoftMid: "rgba(37,99,235,0.14)",
  blueLine: "rgba(37,99,235,0.22)",
  textSoft: "#475569",
};

/* ── 데이터 ── */
const data = {
  name: "강민서",
  greeting: "백엔드 개발자",
  role: "Backend Developer",
  age: "23세",
  birth: "2004.01.15",
  photo: "./IMG_2124.jpg",

  contact: {
    email: "111111@naver.com",
    phone: "010-1111-1111",
    github: "github.com/mingioes",
    githubUrl: "https://github.com/",
  },

  education: [
    {
      school: "한국대학교 컴퓨터공학부",
      track: "모바일소프트웨어/웹공학 트랙",
      period: "2022.03 ~ 2026.02",
      note: "졸업 · 학점 3.6 / 4.5",
    },
  ],

  awards: [
    {
      title: "컴퓨터공학부 기업연계형 캡스톤디자인 최우수상",
      org: "한성대학교",
      date: "2025.05",
    },
    {
      title: "한국통신학회 학부생 캡스톤 경진대회 우수상",
      org: "한국통신학회",
      date: "2025.11",
    },
    {
      title: "공학경진대회 컴퓨터공학부 본선진출",
      org: "한성대학교",
      date: "2025.9",
    },
    {
      title: "AI/SW 창업프로젝트",
      org: "한성대학교",
      date: "2025.9",
    },
  ],

  certifications: [
    { name: "리눅스마스터 2급", org: "한국산업인력공단", date: "2024.06" },
    { name: "SQLD", org: "한국데이터산업진흥원", date: "2023.12" },
    { name: "정보처리기능사", org: "한국산업인력관리공단", date: "2023.08" },
    { name: "TRIZ level 1", org: "한국트리즈협회", date: "2023.08" },
    { name: "Toeic Speaking(진)", org: "ETS", date: "2023.08" },
    { name: "정보처리기사(진)", org: "한국산업인력관리공단", date: "2023.08" },
  ],

  skills: {
    Frontend: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Recoil"],
    Backend: ["Node.js", "Java", "Spring Boot", "MySQL", "Redis"],
    "DevOps / Tools": [
      "Git",
      "Docker",
      "AWS RDS",
      "AWS VPC",
      "AWS EC2",
      "AWS S3",
      "Linux",
      "Figma",
      "IntelliJ",
    ],
  },

  projects: [
    {
      title: "1. Wakey Wakey (with Qualcomm)",
      subtitle:
        "Qualcomm AI Hub의 Snapdragon 8 Gen 3 NPU 기반 On-Device AI 인생발자취 및 스마트 앨범 서비스",
      role: "Backend & AI Model Integration",
      period: "2025.02 ~ 2025.05",
      overview:
        "Qualcomm 및 한성대학교 기업연계형 프로젝트로, Snapdragon 8 Gen 3의 NPU 가속을 활용해 서버 통신 없이 모든 AI 연산을 기기 내에서 처리하는(On-Device) 보안 특화 스마트 앨범 솔루션을 개발했습니다.",
      responsibilities: [
        "Qualcomm AI Hub 글로벌 슬랙 채널을 통한 엔지니어 기술 질의 및 이슈 트래킹",
        "YOLOv8, MobileNet v3, CLIP 모델의 TFLite 변환 및 NPU 최적화 이식",
        "벡터 임베딩 기반 자연어 이미지 검색 알고리즘 및 타임라인 자동 생성 로직 설계",
        "ESRGAN 모델 활용 저화질 이미지 업스케일링 파이프라인 구축",
      ],
      details: [
        "Qualcomm 본사 엔지니어들과 실시간 영어 슬랙 채널로 소통하며, 모델 변환 과정의 트러블슈팅과 SDK 호환성 문제를 직접 해결했습니다.",
        "Snapdragon 8 Gen 3 NPU를 활용하여 서버 없이 기기 내에서 실시간 객체 탐지 및 자연어 검색이 가능하도록 성능을 최적화했습니다.",
        "인터넷 연결이 제한된 환경에서도 프라이버시를 보장하며 작동하는 검색 엔진을 구현했습니다.",
        "이러한 기술적 도전과 글로벌 협업 성과를 인정받아 기업연계형 캡스톤 디자인 최우수상을 수상했습니다.",
      ],
      tags: [
        "Qualcomm AI Hub",
        "Slack Collaboration",
        "MobileNet v3",
        "OpenAI CLIP",
        "Yolo v11 Detection",
        "Java",
        "Android",
      ],
      github: "https://github.com/mingioes",
      demo: "https://youtu.be/GG55KUtXJIg?si=G75WDKJ1eZXje_tv",
    },
    {
      title: "2. WorkHub",
      subtitle: "Notion 데이터 기반 업무 자동 요약 및 협업 관리 시스템",
      role: "Backend Developer (Solo Project)",
      period: "2026.01 ~ Present",
      overview:
        "방대한 Notion 기록을 Google Gemini API를 통해 핵심 요약하여 업무 생산성을 극대화하는 서비스입니다. Spring Boot 3.4와 Java 21을 기반으로 보안성과 확장성을 갖춘 백엔드 아키텍처를 설계하고 있습니다.",
      responsibilities: [
        "Google Gemini API 연동을 통한 실시간 문서 요약 및 텍스트 데이터 정제 로직 구현",
        "Spring Boot 3.4 및 Java 21 최신 기능을 활용한 견고한 백엔드 시스템 구축",
        "Spring Security 및 JWT를 도입한 무상태(Stateless) 인증 체계 및 데이터 보안 강화",
        "Docker 기반의 MySQL 인프라 환경 구축 및 JPA를 이용한 효율적인 데이터 모델링",
      ],
      details: [
        "Notion API로 추출한 비정형 데이터를 Gemini 모델에 최적화된 프롬프트로 전달하여 요약 정확도를 높였습니다.",
        "도커 컨테이너를 활용해 로컬 개발 환경과 DB 설정을 표준화하여 개발 효율을 개선했습니다.",
        "@RestControllerAdvice 기반의 전역 예외 처리로 일관된 API 응답 규격을 설계했습니다.",
        "추후 Swagger(SpringDoc)를 통해 API 명세 자동화를 구축하여 프론트엔드와의 협업 준비를 마칠 예정입니다.",
      ],
      tags: [
        "Java 21",
        "Spring Boot",
        "Gemini API",
        "Spring Security",
        "JPA",
        "MySQL",
        "Docker",
      ],
      github: "https://github.com/mingioes/workhub",
      demo: null,
    },
    {
      title: "3. 다우기술 기업연계형 프리캡스톤",
      subtitle: "뿌리오(Ppurio) 서비스 연계 마케팅 이미지 자동 생성 솔루션",
      role: "AI Image Engine & Backend Logic Design",
      period: "2024.03 ~ 2024.06",
      overview:
        "다우기술의 기업 메시징 플랫폼 '뿌리오'의 사용자 경험을 개선하기 위해, 텍스트 홍보 콘텐츠를 분석하여 고품질 마케팅 포스터로 자동 변환하는 이미지 생성 엔진 및 백엔드 시스템을 개발했습니다.",
      responsibilities: [
        "다우기술 뿌리오 MMS 서비스 규격에 최적화된 이미지 생성 및 가공 파이프라인 설계",
        "LLM 기반 컨텍스트 분석을 통한 마케팅 키워드 추출 및 시각화 프롬프트 자동화 엔진 구축",
        "Node.js 환경에서 다중 AI 모델(Text-to-Image) 연동을 통한 비즈니스 로직 구현",
        "Canvas 및 Sharp 라이브러리를 활용한 동적 텍스트 합성 및 마케팅 배너 레이아웃 자동화",
      ],
      details: [
        "기존 텍스트 중심 홍보 메시지의 한계를 극복하기 위해, 기업 맞춤형 시각 자료를 실시간으로 생성하여 광고 도달률을 높이는 솔루션을 제안했습니다.",
        "사용자의 입력 의도를 분석하여 AI 모델이 최적의 결과물을 낼 수 있도록 돕는 프롬프트 엔지니어링 레이어를 백엔드에 구현했습니다.",
        "실제 유기 화학 워크숍, 사내 행사 등 비즈니스 시나리오를 바탕으로 포스터 생성부터 MMS 발송 규격 준수까지 전체 워크플로우를 검증했습니다.",
        "다우기술 멘토진으로부터 실제 서비스 환경(뿌리오)에 적용 가능한 기술적 창의성과 실용성을 인정받아 우수한 평가를 받았습니다.",
      ],
      tags: [
        "Node.js",
        "AI Integration",
        "Prompt Engineering",
        "Image Processing",
        "Express",
      ],
      github: "https://github.com/mingioes",
      demo: null,
    },
  ],
};

/* ── 유틸 훅 ── */
function useInView(threshold = 0.1) {
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

function FadeUp({ children, delay = 0, style = {} }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
        ...style,
      }}>
      {children}
    </div>
  );
}

function SectionTitle({ icon, children, color }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 14,
      }}>
      <span style={{ fontSize: 18 }}>{icon}</span>
      <h2
        style={{
          fontSize: 19,
          fontWeight: 700,
          color: color || C.navy,
          margin: 0,
          fontFamily: "'Noto Sans KR', sans-serif",
        }}>
        {children}
      </h2>
    </div>
  );
}

/* ── 네비 ── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? `1px solid ${C.border}` : "none",
        transition: "all 0.3s ease",
        padding: "0 clamp(16px,6vw,80px)",
        height: 56,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
      <span
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: 16,
          color: scrolled ? C.navy : "#fff",
        }}>
        {data.name}
        <span style={{ color: C.yellow }}>.</span>
      </span>
      <div style={{ display: "flex", gap: 4 }}>
        {[
          ["소개", "#intro"],
          ["스킬", "#skills"],
          ["프로젝트", "#projects"],
        ].map(([label, href]) => (
          <a
            key={href}
            href={href}
            style={{
              fontSize: 15,
              fontWeight: 600,
              padding: "6px 14px",
              borderRadius: 6,
              color: scrolled ? C.muted : "rgba(255,255,255,0.85)",
              textDecoration: "none",
              transition: "all 0.15s",
            }}
            onMouseEnter={(e) =>
              (e.target.style.color = scrolled ? C.blue : "#fff")
            }
            onMouseLeave={(e) =>
              (e.target.style.color = scrolled
                ? C.muted
                : "rgba(255,255,255,0.85)")
            }>
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}

/* ── 헤더 배너 ── */
function Header() {
  return (
    <header
      style={{
        background: `linear-gradient(135deg, ${C.headerBg} 0%, ${C.headerBgSoft} 48%, #8fd0ff 78%, #ffffff 100%)`,
        padding: "74px clamp(20px,4vw,60px) 30px",
        position: "relative",
      }}>
      {/* 배경 장식 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}>
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: C.headerGlass,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: "20%",
            width: 240,
            height: 240,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.10)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "35%",
            right: "12%",
            width: 130,
            height: 130,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.16)",
          }}
        />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1140,
          margin: "0 auto",
          paddingLeft: 8,
        }}>
        <div style={{ fontSize: 34, marginBottom: 12 }}>💻</div>
        <h1
          style={{
            fontFamily: "'Noto Sans KR', sans-serif",
            fontSize: "clamp(34px, 4.8vw, 56px)",
            fontWeight: 800,
            color: "#ffffff",
            margin: "0 0 8px",
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
          }}>
          <span style={{ color: "rgba(255,255,255,0.96)" }}>
            {data.greeting}
          </span>{" "}
          <span style={{ color: "#0b57d0" }}>{data.name}</span>
          <span style={{ color: "rgba(255,255,255,0.96)" }}>입니다.</span>
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginTop: 10,
            flexWrap: "wrap",
          }}>
          <span
            style={{
              fontSize: 13,
              fontWeight: 700,
              padding: "5px 14px",
              borderRadius: 20,
              background: "rgba(255,255,255,0.14)",
              color: "#fff",
            }}>
            Backend Developer
          </span>
          <span
            style={{
              fontSize: 13,
              fontWeight: 700,
              padding: "5px 14px",
              borderRadius: 20,
              background: "rgba(255,255,255,0.08)",
              color: "rgba(255,255,255,0.8)",
              border: "1px solid rgba(255,255,255,0.25)",
            }}>
            React · Spring Boot · AWS
          </span>
        </div>
      </div>
    </header>
  );
}

/* ── 소개 섹션 ── */
function IntroSection() {
  const card = {
    background: C.surface,
    border: `1px solid ${C.border}`,
    borderRadius: 12,
    padding: "14px 18px",
    minWidth: 0,
  };

  const row = {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 10,
    paddingBottom: 8,
    marginBottom: 8,
    borderBottom: `1px solid #f3f4f6`,
  };

  const badgeRed = {
    fontSize: 11,
    fontWeight: 700,
    background: C.redLight,
    color: C.red,
    padding: "4px 10px",
    borderRadius: 8,
    whiteSpace: "nowrap",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: 1,
    alignSelf: "flex-start",
    flexShrink: 0,
    minWidth: 62,
    height: 24,
    boxSizing: "border-box",
  };

  const badgeYellow = {
    fontSize: 11,
    fontWeight: 700,
    background: C.yellowLight,
    color: "#92400e",
    padding: "4px 10px",
    borderRadius: 8,
    whiteSpace: "nowrap",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: 1,
    alignSelf: "flex-start",
    flexShrink: 0,
    minWidth: 62,
    height: 24,
    boxSizing: "border-box",
  };

  return (
    <section
      id="intro"
      style={{ background: C.bg, padding: "20px clamp(18px,3.6vw,54px) 8px" }}>
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.02fr 0.86fr 230px",
          gridTemplateRows: "auto auto",
          gap: 18,
          alignItems: "start",
          justifyContent: "center",
        }}>
        {/* 왼쪽 상단: 학력 */}
        <FadeUp style={{ gridColumn: "1 / 2", gridRow: "1 / 2" }}>
          <div style={card}>
            <SectionTitle icon="🎓" color={C.blue}>
              학력
            </SectionTitle>
            {data.education.map((ed, i) => (
              <div key={i}>
                <p
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: C.navy,
                    margin: "0 0 2px",
                    fontFamily: "'Noto Sans KR', sans-serif",
                  }}>
                  {ed.school}
                </p>
                <p style={{ fontSize: 14, color: C.muted, margin: "0 0 2px" }}>
                  {ed.track}
                </p>
                <p style={{ fontSize: 13, color: C.muted, margin: "0 0 4px" }}>
                  {ed.period}
                </p>
                <span style={{ fontSize: 13, fontWeight: 600, color: C.blue }}>
                  {ed.note}
                </span>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* 가운데 세로: 자격증 */}
        <FadeUp delay={0.08} style={{ gridColumn: "2 / 3", gridRow: "1 / 3" }}>
          <div style={{ ...card, height: "100%" }}>
            <SectionTitle icon="🪪" color="#b45309">
              자격증
            </SectionTitle>
            {data.certifications.map((c, i) => (
              <div
                key={i}
                style={{
                  ...row,
                  ...(i === data.certifications.length - 1
                    ? {
                        borderBottom: "none",
                        paddingBottom: 0,
                        marginBottom: 0,
                      }
                    : {}),
                }}>
                <div style={{ minWidth: 0, paddingRight: 8 }}>
                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: C.navy,
                      margin: "0 0 2px",
                      fontFamily: "'Noto Sans KR', sans-serif",
                    }}>
                    {c.name}
                  </p>
                  <p style={{ fontSize: 13, color: C.muted, margin: 0 }}>
                    {c.org}
                  </p>
                </div>
                <span style={badgeYellow}>{c.date}</span>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* 왼쪽 하단: 수상 */}
        <FadeUp delay={0.06} style={{ gridColumn: "1 / 2", gridRow: "2 / 3" }}>
          <div style={card}>
            <SectionTitle icon="🥇" color={C.red}>
              수상
            </SectionTitle>
            {data.awards.map((a, i) => (
              <div
                key={i}
                style={{
                  ...row,
                  ...(i === data.awards.length - 1
                    ? {
                        borderBottom: "none",
                        paddingBottom: 0,
                        marginBottom: 0,
                      }
                    : {}),
                }}>
                <div style={{ flex: 1, minWidth: 0, paddingRight: 8 }}>
                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: C.navy,
                      margin: "0 0 2px",
                      fontFamily: "'Noto Sans KR', sans-serif",
                      lineHeight: 1.4,
                    }}>
                    {a.title}
                  </p>
                  <p style={{ fontSize: 13, color: C.muted, margin: 0 }}>
                    {a.org}
                  </p>
                </div>
                <span style={badgeRed}>{a.date}</span>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* 오른쪽: 사진 + 연락처 */}
        <div
          style={{
            gridColumn: "3 / 4",
            gridRow: "1 / 3",
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            justifySelf: "start",
            width: "100%",
          }}>
          <FadeUp delay={0.05}>
            <div
              style={{
                borderRadius: 10,
                overflow: "hidden",
                border: `2px solid ${C.border}`,
                boxShadow: "0 4px 20px rgba(0,0,0,0.10)",
                background:
                  "linear-gradient(180deg, rgba(37,99,235,0.06) 0%, rgba(37,99,235,0.02) 100%)",
                aspectRatio: "3/4.25",
                width: "100%",
                maxWidth: 230,
                marginLeft: 0,
              }}>
              <img
                src={data.photo}
                alt="프로필"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/240x320?text=Photo";
                }}
              />
            </div>

            <div
              style={{
                background: C.surface,
                border: `1px solid ${C.border}`,
                borderRadius: 12,
                padding: "14px 16px",
                marginTop: 10,
                display: "flex",
                flexDirection: "column",
                gap: 9,
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                width: "100%",
                maxWidth: 230,
              }}>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: C.muted,
                  margin: "0 0 2px",
                }}>
                Contact
              </p>
              {[
                { icon: "🎂", label: `${data.age} (${data.birth})` },
                { icon: "✉️", label: data.contact.email },
                { icon: "📞", label: data.contact.phone },
                {
                  icon: "🐙",
                  label: data.contact.github,
                  href: data.contact.githubUrl,
                },
              ].map(({ icon, label, href }) => (
                <div
                  key={label}
                  style={{ display: "flex", alignItems: "center", gap: 9 }}>
                  <span
                    style={{
                      fontSize: 14,
                      flexShrink: 0,
                      width: 18,
                      textAlign: "center",
                    }}>
                    {icon}
                  </span>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        fontSize: 13,
                        color: C.blue,
                        textDecoration: "none",
                        fontWeight: 600,
                        wordBreak: "break-all",
                      }}>
                      {label}
                    </a>
                  ) : (
                    <span
                      style={{
                        fontSize: 13,
                        color: C.navy,
                        wordBreak: "break-all",
                      }}>
                      {label}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>

      {/* 첫 화면 하단에 Skills 제목만 살짝 보이게 */}
      <div
        style={{
          maxWidth: 1180,
          margin: "14px auto 0",
          padding: "0 2px",
        }}>
        <FadeUp delay={0.1}>
          <a
            href="#skills"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontSize: 20,
              fontWeight: 800,
              color: C.navy,
              textDecoration: "none",
              fontFamily: "'Noto Sans KR', sans-serif",
            }}>
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: C.sky,
                display: "inline-block",
              }}
            />
          </a>
        </FadeUp>
      </div>
    </section>
  );
}

/* ── 스킬 섹션 ── */
function SkillsSection() {
  return (
    <section
      id="skills"
      style={{
        background: C.skyLight,
        padding: "18px clamp(20px,4.4vw,64px) 40px",
        borderTop: `1px solid ${C.border}`,
      }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeUp>
          <h2
            style={{
              fontSize: 24,
              fontWeight: 800,
              color: C.navy,
              margin: "0 0 28px",
              fontFamily: "'Noto Sans KR', sans-serif",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}>
            Skills{" "}
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: C.sky,
                display: "inline-block",
              }}
            />
          </h2>
        </FadeUp>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))",
            gap: 18,
          }}>
          {Object.entries(data.skills).map(([cat, items], ci) => (
            <FadeUp key={cat} delay={ci * 0.08}>
              <div
                style={{
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  borderRadius: 12,
                  padding: "22px 24px",
                }}>
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: C.sky,
                    margin: "0 0 16px",
                  }}>
                  {cat}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                  {items.map((s) => (
                    <span
                      key={s}
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: C.navy,
                        background: C.bg,
                        border: `1px solid ${C.border}`,
                        padding: "6px 12px",
                        borderRadius: 8,
                      }}>
                      {s}
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

/* ── 프로젝트 카드 ── */
function ProjectCard({ p, index }) {
  const accent = C.blueStrong;

  const subHead = (color) => ({
    fontSize: 13,
    fontWeight: 700,
    color,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    margin: "0 0 10px",
    display: "flex",
    alignItems: "center",
    gap: 6,
  });

  const dot = (color) => ({
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: color,
    flexShrink: 0,
  });

  return (
    <FadeUp delay={index * 0.06}>
      <div
        style={{
          background: C.surface,
          border: `1px solid ${C.border}`,
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(15,23,42,0.06)",
        }}>
        {/* 카드 헤더 */}
        <div
          style={{
            borderBottom: `1px solid ${C.blueLine}`,
            padding: "26px 30px 22px",
            background:
              "linear-gradient(180deg, rgba(37,99,235,0.08) 0%, rgba(37,99,235,0.03) 100%)",
          }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 12,
            }}>
            <div>
              <span
                style={{
                  fontSize: 11,
                  color: C.muted,
                  fontFamily: "'DM Mono', monospace",
                  letterSpacing: "0.04em",
                }}>
                {p.period}
              </span>

              <h3
                style={{
                  fontSize: 24,
                  fontWeight: 800,
                  color: C.navy,
                  margin: "4px 0 6px",
                  fontFamily: "'Noto Sans KR', sans-serif",
                  lineHeight: 1.3,
                  letterSpacing: "-0.01em",
                }}>
                {p.title}
              </h3>

              <p
                style={{
                  fontSize: 16,
                  color: accent,
                  fontWeight: 500,
                  margin: "0 0 10px",
                  fontFamily: "'Noto Sans KR', sans-serif",
                }}>
                {p.subtitle}
              </p>

              <span
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  background: "rgba(15,23,42,0.92)",
                  color: "#fff",
                  padding: "4px 12px",
                  borderRadius: 20,
                }}>
                {p.role}
              </span>
            </div>

            <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    padding: "8px 16px",
                    background: "rgba(37,99,235,0.92)",
                    color: "#fff",
                    borderRadius: 8,
                    textDecoration: "none",
                  }}>
                  Live Demo ↗
                </a>
              )}

              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  padding: "7px 16px",
                  background: "rgba(255,255,255,0.72)",
                  color: accent,
                  border: `1px solid ${C.blueLine}`,
                  borderRadius: 8,
                  textDecoration: "none",
                }}>
                Code ↗
              </a>
            </div>
          </div>

          {/* 태그 */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 6,
              marginTop: 14,
            }}>
            {p.tags.map((t) => (
              <span
                key={t}
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: accent,
                  background: "rgba(37,99,235,0.08)",
                  border: `1px solid ${C.blueLine}`,
                  padding: "3px 10px",
                  borderRadius: 20,
                }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* 세로 본문 */}
        <div
          style={{
            padding: "26px 30px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}>
          <div>
            <p style={subHead(accent)}>
              <span style={dot(accent)} />
              프로젝트 개요
            </p>
            <p
              style={{
                fontSize: 15,
                color: C.textSoft,
                lineHeight: 1.85,
                margin: 0,
                fontFamily: "'Noto Sans KR',sans-serif",
                paddingLeft: 12,
                borderLeft: `3px solid ${C.blueSoftMid}`,
              }}>
              {p.overview}
            </p>
          </div>

          <div style={{ height: 1, background: C.blueSoftMid }} />

          <div>
            <p style={subHead(accent)}>
              <span style={dot(accent)} />
              담당 역할
            </p>
            <ul
              style={{
                margin: 0,
                padding: 0,
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}>
              {p.responsibilities.map((r, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                  }}>
                  <span
                    style={{
                      color: accent,
                      fontSize: 14,
                      flexShrink: 0,
                      marginTop: 1,
                    }}>
                    ▸
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      color: C.textSoft,
                      lineHeight: 1.65,
                      fontFamily: "'Noto Sans KR',sans-serif",
                    }}>
                    {r}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ height: 1, background: C.blueSoftMid }} />

          <div>
            <p style={subHead(accent)}>
              <span style={dot(accent)} />
              주요 구현 내용
            </p>
            <ul
              style={{
                margin: 0,
                padding: 0,
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}>
              {p.details.map((d, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                  }}>
                  <span
                    style={{
                      color: accent,
                      fontSize: 14,
                      flexShrink: 0,
                      marginTop: 1,
                    }}>
                    ▸
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      color: C.textSoft,
                      lineHeight: 1.7,
                      fontFamily: "'Noto Sans KR',sans-serif",
                    }}>
                    {d}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </FadeUp>
  );
}

/* ── 프로젝트 섹션 ── */
function ProjectsSection() {
  return (
    <section
      id="projects"
      style={{
        background: C.bg,
        padding: "40px clamp(20px,4.4vw,64px)",
        borderTop: `1px solid ${C.border}`,
      }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeUp>
          <h2
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: C.navy,
              margin: "0 0 28px",
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontFamily: "'Noto Sans KR', sans-serif",
            }}>
            Projects{" "}
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: C.red,
                display: "inline-block",
              }}
            />
          </h2>
        </FadeUp>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {data.projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 푸터 ── */
function Footer() {
  return (
    <footer
      style={{
        background: "#ffffff",
        borderTop: `1px solid ${C.border}`,
        padding: "22px clamp(20px,4vw,60px)",
      }}>
      <div
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          flexWrap: "wrap",
        }}>
        <p
          style={{
            margin: 0,
            fontSize: 13,
            color: C.muted,
            fontFamily: "'Noto Sans KR', sans-serif",
          }}>
          © 2025 {data.name}. All rights reserved.
        </p>
        <a
          href={data.contact.githubUrl}
          target="_blank"
          rel="noreferrer"
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: C.blue,
            textDecoration: "none",
            fontFamily: "'Noto Sans KR', sans-serif",
          }}>
          GitHub ↗
        </a>
      </div>
    </footer>
  );
}

/* ── 메인 앱 ── */
export default function Portfolio() {
  return (
    <div
      style={{
        fontFamily: "'DM Sans','Noto Sans KR',sans-serif",
        background: C.bg,
        color: C.navy,
        lineHeight: 1.6,
      }}>
      <Nav />
      <Header />
      <IntroSection />
      <SkillsSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}
