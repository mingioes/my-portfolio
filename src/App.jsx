import { useState, useEffect, useRef } from "react";

const C = {
  bg: "#f8f9fa",
  surface: "#ffffff",
  navy: "#202124",
  blue: "#1a73e8",
  blueLight: "#e8f0fe",
  blueMid: "#4285f4",
  muted: "#5f6368",
  border: "#dadce0",
  headerBg: "#1557b0",
  headerBgSoft: "#1a73e8",
  blueStrong: "#0b57d0",
  blueSoft: "rgba(37,99,235,0.08)",
  blueSoftMid: "rgba(37,99,235,0.14)",
  blueLine: "rgba(37,99,235,0.18)",
  textSoft: "#475569",
};

const data = {
  name: "강민서",
  greeting: "데이터 기반 운영 지원",
  tagline: '"데이터로 문제를 발견하고, 협력하며 해결하는 사람"',
  role: "Operation Support",
  age: "23세",
  birth: "2004.01.15",
  photo: "./IMG_2124.jpg",

  contact: {
    email: "vhehddl2212@naver.com",
    phone: "010-9625-2212",
  },

  education: [
    {
      school: "한성대학교 컴퓨터공학부",
      track: "모바일소프트웨어/웹공학 트랙",
      period: "2022.03 ~ 2026.02",
      note: "졸업 · 학점 3.6 / 4.5",
    },
  ],

  // ── 수상: 2개만 ──
  awards: [
    {
      title: "기업연계형 캡스톤디자인 최우수상",
      org: "한성대학교",
      date: "2025.05",
    },
    {
      title: "한국통신학회 학부생 캡스톤 경진대회 우수상",
      org: "한국통신학회",
      date: "2025.11",
    },
  ],

  // ── 자격증: 토익스피킹·정보처리기사 제외 ──
  certifications: [
    { name: "SQLD", org: "한국데이터산업진흥원", date: "2026.03" },
    { name: "리눅스마스터 2급", org: "정보통신기술자격검정", date: "2026.04" },
    { name: "정보처리기능사", org: "한국산업인력공단", date: "2024.12" },
    { name: "TRIZ Level 1", org: "한국트리즈협회", date: "2025.09" },
  ],

  // ── 역량: 영어 항목 보강, 인프라 중복 정리 ──
  capabilities: [
    {
      icon: "📊",
      label: "데이터 분석",
      items: [
        "SQL (SQLD)",
        "Python",
        "운영 지표 추출 · 정량화",
        "비정형 데이터 정제",
      ],
    },
    {
      icon: "🔍",
      label: "이슈 트래킹",
      items: [
        "4단계 체계 설계 · 운영",
        "Slack 기반 협업",
        "이슈 문서화 · 공유",
        "리스크 사전 차단",
      ],
    },
    {
      icon: "🌐",
      label: "영어 커뮤니케이션",
      items: [
        "Qualcomm 본사 실시간 슬랙 대응",
        "영어 기술 문서 독해 · 작성",
        "글로벌 파트너 요구사항 조율",
      ],
    },
    {
      icon: "🖥",
      label: "인프라 이해",
      items: [
        "Linux · Docker · AWS",
        "서버 로그 조회 · 1차 진단",
        "개발팀과 기술 소통 가능",
      ],
    },
  ],

  projects: [
    {
      num: "01",
      title: "Wakey Wakey",
      org: "Qualcomm 기업연계 캡스톤",
      subtitle: "Snapdragon 8 Gen 3 NPU 기반 On-Device AI 스마트 앨범",
      period: "2025.02 ~ 2025.05",
      tags: [
        "글로벌 협업",
        "이슈 트래킹",
        "AI 성능 최적화",
        "데이터 기반 검증",
      ],
      github: "https://github.com/HSU-Wakey/WakeyApp",
      demo: "https://youtu.be/GG55KUtXJIg?si=G75WDKJ1eZXje_tv",
      highlights: [
        "SDK 호환성 이슈 10여 건을 4단계 트래킹 프로세스로 체계화 → 팀 전체 공유 문서로 관리, 중복 오류 발생 0건",
        "Qualcomm 본사 엔지니어와 영어 슬랙 채널로 기술 질의 · 요구사항 조율 (글로벌 파트너 소통 경험)",
        "NPU 파라미터 튜닝으로 객체 탐지 정확도 기존 대비 약 40% 이상 향상 — 매 변경마다 수치로 검증",
        "벡터 DB 인덱싱 구조 개선으로 이미지 검색 응답 속도 약 20% 단축",
      ],
      stories: [
        {
          step: "상황",
          title: "해결해야 했던 과제",
          body: "Snapdragon NPU에서 AI 모델을 구동하려면 SDK 버전마다 다른 호환성 오류를 해결해야 했습니다. 공식 문서만으로는 해결이 안 되는 케이스가 반복됐고, 같은 오류가 팀원 사이에서 중복 발생하는 비효율이 있었습니다.",
        },
        {
          step: "행동",
          title: "이슈 트래킹 체계 설계 & 글로벌 파트너 소통",
          body: "총 10여 건의 SDK 이슈를 ① 이슈 재현 → ② 로그·환경 정보 정리 → ③ 영어로 Qualcomm 엔지니어에게 질의 → ④ 해결책 검증·문서화의 4단계로 체계화했습니다. 팀 공유 노션 문서에 이슈별 원인·해결책을 누적 관리하여 같은 오류의 중복 발생을 원천 차단했습니다. 협업 과정에서 Qualcomm 본사 엔지니어의 요구사항과 기술 피드백을 영어로 정확히 파악하고, 팀 내 한국어로 재정리하여 공유하는 커뮤니케이션 허브 역할도 수행했습니다.",
        },
        {
          step: "분석",
          title: "데이터로 성능 지표를 측정 · 개선",
          body: "모델 최적화 과정에서 감이 아닌 수치로 판단하기 위해 테스트 케이스를 직접 설계하고 매 변경마다 정확도·응답 속도를 기록했습니다. NPU 파라미터 튜닝으로 객체 탐지 정확도를 기존 대비 약 40% 이상 향상시켰고, 벡터 DB 인덱싱 구조 개선으로 검색 응답 속도를 약 20% 단축했습니다. '측정 → 개선 → 재측정'의 반복 사이클이 협력사 운영 지표 관리와 동일한 방법론임을 이 프로젝트에서 체화했습니다.",
        },
      ],
      result:
        "기업연계형 캡스톤 디자인 최우수상 (한성대학교, 2025.05)  |  한국통신학회 학부생 캡스톤 경진대회 우수상 (2025.11)",
    },
    {
      num: "02",
      title: "뿌리오 마케팅 솔루션",
      org: "다우기술 기업연계",
      subtitle: "텍스트 콘텐츠 분석 기반 마케팅 이미지 자동 생성 엔진",
      period: "2024.09 ~ 2024.12",
      tags: [
        "요구사항 분석",
        "운영 기준 설계",
        "품질 지표 관리",
        "워크플로우 검증",
      ],
      github: "https://github.com/SWPC-caffeine",
      demo: null,
      highlights: [
        "MMS 발송 규격 12개 항목을 체크리스트로 정의 → 전 단계 직접 검증, 규격 미준수 리스크 사전 차단",
        "실제 비즈니스 시나리오(유기화학 워크숍·사내 행사 등) 기반 요구사항 도출 및 기능 명세화",
        "LLM 출력 품질을 업종·이벤트 유형 6가지로 분류·측정 → 인과관계 데이터로 추적하며 반복 개선",
        "다우기술 멘토진으로부터 '실제 서비스 적용 가능' 우수 평가 획득",
      ],
      stories: [
        {
          step: "상황",
          title: "해결해야 했던 과제",
          body: "기업 메시징 플랫폼 뿌리오는 MMS 발송 규격(해상도·용량·포맷 등 12개 항목)이 엄격히 정해져 있었습니다. 마케팅 이미지를 자동 생성하되 이 운영 규격을 100% 준수해야만 실제 서비스에 적용 가능했고, 하나라도 어긋나면 발송 자체가 불가능했습니다.",
        },
        {
          step: "행동",
          title: "요구사항 분석 → 운영 기준 체크리스트 설계",
          body: "뿌리오 MMS 발송 규격 12개 항목을 하나씩 분석하여 체크리스트로 문서화했습니다. 이후 유기화학 워크숍·사내 행사·소매 할인 이벤트 등 실제 비즈니스 시나리오 6가지를 직접 설계하고, 각 시나리오마다 이미지 생성부터 발송 규격 준수 여부까지 전 단계를 검증했습니다. 이 과정에서 규격 위반 가능성이 있는 3개 경우를 사전에 발견하고 로직을 수정하여 운영 리스크를 차단했습니다.",
        },
        {
          step: "분석",
          title: "품질 지표를 데이터로 추적 · 개선",
          body: "LLM이 생성한 마케팅 이미지 품질을 입력 데이터 유형(업종·이벤트 종류) 6가지로 분류하고 품질 편차를 수치로 측정했습니다. '어떤 입력이 어떤 품질의 출력을 만드는가'를 데이터로 추적한 결과, 특정 업종 입력에서 품질이 일관되게 낮아지는 패턴을 발견했습니다. 이를 바탕으로 해당 케이스 전용 프롬프트 로직을 추가하여 품질 편차를 줄였습니다.",
        },
      ],
      result: "다우기술 멘토진으로부터 '실제 서비스 적용 가능' 우수 평가 획득",
    },
  ],
};

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

function SectionTitle({ children }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 14,
      }}>
      <div
        style={{
          width: 3,
          height: 16,
          background: C.navy,
          borderRadius: 2,
          flexShrink: 0,
        }}
      />
      <h2
        style={{
          fontSize: 13,
          fontWeight: 700,
          color: C.navy,
          margin: 0,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          fontFamily: "'Noto Sans KR', sans-serif",
        }}>
        {children}
      </h2>
    </div>
  );
}

function DateBadge({ children }) {
  return (
    <span
      style={{
        fontSize: 11,
        fontWeight: 600,
        background: "#f1f3f5",
        color: C.muted,
        padding: "3px 9px",
        borderRadius: 6,
        whiteSpace: "nowrap",
        display: "inline-flex",
        alignItems: "center",
        flexShrink: 0,
        height: 22,
      }}>
      {children}
    </span>
  );
}

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
        background: scrolled ? "rgba(255,255,255,0.96)" : "transparent",
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
          color: scrolled ? C.navy : C.navy,
        }}>
        {data.name}
        <span style={{ color: C.blue }}>.</span>
      </span>
      <div style={{ display: "flex", gap: 4 }}>
        {[
          ["소개", "#intro"],
          ["역량", "#capabilities"],
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
              color: scrolled ? C.muted : C.muted,
              textDecoration: "none",
              transition: "all 0.15s",
            }}
            onMouseEnter={(e) => (e.target.style.color = C.blue)}
            onMouseLeave={(e) => (e.target.style.color = C.muted)}>
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}

function Header() {
  return (
    <header
      style={{
        background: `linear-gradient(160deg, #ffffff 0%, #f0f6ff 50%, #dbeafe 100%)`,
        padding: "110px clamp(20px,4vw,60px) 80px",
        position: "relative",
      }}>
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
            top: -80,
            right: -80,
            width: 340,
            height: 340,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.10)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -40,
            left: "22%",
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.07)",
          }}
        />
      </div>
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1140,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 40,
        }}>
        <div style={{ flex: 1 }}>
          <p
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: C.blue,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              margin: "0 0 16px",
            }}>
            Operation Support
          </p>
          <h1
            style={{
              fontFamily: "'Noto Sans KR', sans-serif",
              fontSize: "clamp(26px, 3.6vw, 46px)",
              fontWeight: 800,
              color: C.navy,
              margin: "0 0 10px",
              letterSpacing: "-0.02em",
              lineHeight: 1.25,
            }}>
            안녕하세요, <span style={{ color: C.blue }}>{data.name}</span>
            입니다.
          </h1>
          <p
            style={{
              fontSize: 15,
              color: C.muted,
              margin: "0 0 24px",
              fontFamily: "'Noto Sans KR', sans-serif",
              lineHeight: 1.7,
            }}>
            {data.tagline}
          </p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {[
              "SQL",
              "Python",
              "이슈 트래킹",
              "영어 커뮤니케이션",
              "데이터 기반 운영",
            ].map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  padding: "5px 13px",
                  borderRadius: 4,
                  background: C.blueLight,
                  color: C.blueStrong,
                  border: `1px solid ${C.blueLine}`,
                }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div
          style={{
            flexShrink: 0,
            width: 180,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}>
          <div
            style={{
              borderRadius: 10,
              overflow: "hidden",
              border: `1.5px solid ${C.border}`,
              aspectRatio: "3/4",
              width: "100%",
              boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
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
                e.target.src = "https://via.placeholder.com/180x240?text=Photo";
              }}
            />
          </div>
          <div
            style={{
              background: "#ffffff",
              border: `1px solid ${C.border}`,
              borderRadius: 10,
              padding: "12px 14px",
              display: "flex",
              flexDirection: "column",
              gap: 7,
              boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            }}>
            <p
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: C.muted,
                margin: "0 0 3px",
              }}>
              Contact
            </p>
            {[
              { label: `${data.age} · ${data.birth}` },
              { label: data.contact.email },
              { label: data.contact.phone },
              { label: data.contact.github, href: data.contact.githubUrl },
            ].map(({ label, href }) => (
              <div key={label}>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontSize: 12,
                      color: C.blue,
                      textDecoration: "none",
                      fontWeight: 600,
                      wordBreak: "break-all",
                      lineHeight: 1.5,
                    }}>
                    {label}
                  </a>
                ) : (
                  <span
                    style={{
                      fontSize: 12,
                      color: C.navy,
                      wordBreak: "break-all",
                      lineHeight: 1.5,
                    }}>
                    {label}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

function AboutSection() {
  return (
    <section
      style={{
        background: C.surface,
        borderBottom: `1px solid ${C.border}`,
        padding: "36px clamp(20px,4vw,60px)",
      }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <FadeUp>
          <div style={{ display: "flex", gap: 20, alignItems: "stretch" }}>
            <div
              style={{
                width: 4,
                borderRadius: 4,
                background: `linear-gradient(180deg, #1557b0 0%, #4285f4 100%)`,
                flexShrink: 0,
              }}
            />
            <p
              style={{
                fontSize: 15,
                color: C.textSoft,
                lineHeight: 2,
                margin: 0,
                fontFamily: "'Noto Sans KR', sans-serif",
                maxWidth: 780,
              }}>
              컴퓨터공학을 전공하며 두 번의 기업연계 프로젝트에서
              <strong style={{ color: C.navy, fontWeight: 700 }}>
                {" "}
                이슈 트래킹 체계 설계, 운영 지표 수치화, 파트너사 커뮤니케이션
              </strong>
              을 직접 담당했습니다. 개발 배경 덕분에 서버 로그를 직접 조회하고
              엔지니어링 팀과 기술적으로 소통할 수 있어,
              <strong style={{ color: C.navy, fontWeight: 700 }}>
                {" "}
                운영 현장에서 개발팀과의 가교 역할
              </strong>
              을 할 수 있습니다. 데이터로 문제를 발견하고, 협력하며 해결하는
              방식으로 우아한청년들의 협력사 운영 효율화에 기여하고 싶습니다.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function IntroSection() {
  const card = {
    background: C.surface,
    border: `1px solid ${C.border}`,
    borderRadius: 10,
    padding: "18px 20px",
    minWidth: 0,
  };
  const row = {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 10,
    paddingBottom: 10,
    marginBottom: 10,
    borderBottom: `1px solid #f1f3f5`,
  };
  return (
    <section
      id="intro"
      style={{ background: C.bg, padding: "40px clamp(18px,3.6vw,54px) 32px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <FadeUp>
          <h2
            style={{
              fontSize: 18,
              fontWeight: 800,
              color: C.navy,
              margin: "0 0 20px",
              fontFamily: "'Noto Sans KR', sans-serif",
            }}>
            기본 정보
          </h2>
        </FadeUp>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 16,
            alignItems: "start",
          }}>
          <FadeUp delay={0.04}>
            <div style={card}>
              <SectionTitle>학력</SectionTitle>
              {data.education.map((ed, i) => (
                <div key={i}>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: C.navy,
                      margin: "0 0 3px",
                      fontFamily: "'Noto Sans KR', sans-serif",
                    }}>
                    {ed.school}
                  </p>
                  <p
                    style={{ fontSize: 13, color: C.muted, margin: "0 0 2px" }}>
                    {ed.track}
                  </p>
                  <p
                    style={{ fontSize: 12, color: C.muted, margin: "0 0 8px" }}>
                    {ed.period}
                  </p>
                  <span
                    style={{ fontSize: 13, fontWeight: 600, color: C.blue }}>
                    {ed.note}
                  </span>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <div style={card}>
              <SectionTitle>수상</SectionTitle>
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
                        fontSize: 13,
                        fontWeight: 600,
                        color: C.navy,
                        margin: "0 0 2px",
                        fontFamily: "'Noto Sans KR', sans-serif",
                        lineHeight: 1.45,
                      }}>
                      {a.title}
                    </p>
                    <p style={{ fontSize: 12, color: C.muted, margin: 0 }}>
                      {a.org}
                    </p>
                  </div>
                  <DateBadge>{a.date}</DateBadge>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.12}>
            <div style={card}>
              <SectionTitle>자격증</SectionTitle>
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
                        fontSize: 13,
                        fontWeight: 600,
                        color: C.navy,
                        margin: "0 0 2px",
                        fontFamily: "'Noto Sans KR', sans-serif",
                      }}>
                      {c.name}
                    </p>
                    <p style={{ fontSize: 12, color: C.muted, margin: 0 }}>
                      {c.org}
                    </p>
                  </div>
                  <DateBadge>{c.date}</DateBadge>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      style={{
        background: C.bg,
        padding: "32px clamp(20px,4.4vw,64px) 40px",
        borderTop: `1px solid ${C.border}`,
      }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeUp>
          <h2
            style={{
              fontSize: 18,
              fontWeight: 800,
              color: C.navy,
              margin: "0 0 22px",
              fontFamily: "'Noto Sans KR', sans-serif",
            }}>
            핵심 역량
          </h2>
        </FadeUp>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
            gap: 14,
          }}>
          {data.capabilities.map((cap, ci) => (
            <FadeUp key={cap.label} delay={ci * 0.07}>
              <div
                style={{
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  borderRadius: 10,
                  padding: "18px 20px",
                }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 12,
                  }}>
                  <span style={{ fontSize: 16 }}>{cap.icon}</span>
                  <p
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      color: C.navy,
                      margin: 0,
                      textTransform: "uppercase",
                    }}>
                    {cap.label}
                  </p>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {cap.items.map((s) => (
                    <span
                      key={s}
                      style={{
                        fontSize: 12,
                        fontWeight: 500,
                        color: C.textSoft,
                        background: C.bg,
                        border: `1px solid ${C.border}`,
                        padding: "4px 10px",
                        borderRadius: 6,
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

function ProjectCard({ p, index }) {
  const accent = C.blueStrong;
  const stepColor = { 상황: C.muted, 행동: C.blue, 분석: "#0f9d58" };
  return (
    <FadeUp delay={index * 0.06}>
      <div
        style={{
          background: C.surface,
          border: `1px solid ${C.border}`,
          borderRadius: 14,
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(15,23,42,0.05)",
        }}>
        <div
          style={{
            borderBottom: `1px solid ${C.blueLine}`,
            padding: "24px 28px 20px",
            background:
              "linear-gradient(180deg, rgba(37,99,235,0.06) 0%, rgba(37,99,235,0.02) 100%)",
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 4,
                }}>
                <span
                  style={{
                    fontSize: 26,
                    fontWeight: 800,
                    color: C.border,
                    fontFamily: "'DM Mono', monospace",
                  }}>
                  #{p.num}
                </span>
                <span
                  style={{
                    fontSize: 11,
                    color: C.muted,
                    fontFamily: "'DM Mono', monospace",
                    letterSpacing: "0.04em",
                  }}>
                  {p.period}
                </span>
              </div>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: C.muted,
                  margin: "0 0 4px",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}>
                {p.org}
              </p>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  color: C.navy,
                  margin: "0 0 5px",
                  fontFamily: "'Noto Sans KR', sans-serif",
                  lineHeight: 1.3,
                }}>
                {p.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: accent,
                  fontWeight: 500,
                  margin: "0 0 12px",
                  fontFamily: "'Noto Sans KR', sans-serif",
                }}>
                {p.subtitle}
              </p>
            </div>
            <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    padding: "7px 14px",
                    background: C.navy,
                    color: "#fff",
                    borderRadius: 7,
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
                  padding: "6px 14px",
                  background: C.surface,
                  color: accent,
                  border: `1px solid ${C.blueLine}`,
                  borderRadius: 7,
                  textDecoration: "none",
                }}>
                Code ↗
              </a>
            </div>
          </div>
          <div
            style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8 }}>
            {p.tags.map((t) => (
              <span
                key={t}
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: C.textSoft,
                  background: "rgba(37,99,235,0.06)",
                  border: `1px solid ${C.blueLine}`,
                  padding: "3px 10px",
                  borderRadius: 20,
                }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {p.highlights && (
          <div
            style={{
              padding: "16px 28px",
              borderBottom: `1px solid ${C.border}`,
              background: "#fafbfc",
            }}>
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: C.muted,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                margin: "0 0 10px",
              }}>
              주요 기여
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              {p.highlights.map((h, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                  }}>
                  <span
                    style={{
                      fontSize: 10,
                      color: C.blue,
                      marginTop: 5,
                      flexShrink: 0,
                    }}>
                    ▸
                  </span>
                  <span
                    style={{
                      fontSize: 13,
                      color: C.textSoft,
                      lineHeight: 1.6,
                      fontFamily: "'Noto Sans KR', sans-serif",
                    }}>
                    {h}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div
          style={{
            padding: "24px 28px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}>
          {p.stories.map((s, i) => (
            <div key={i}>
              {i > 0 && (
                <div
                  style={{ height: 1, background: "#f1f3f5", marginBottom: 20 }}
                />
              )}
              <div
                style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#fff",
                    background: stepColor[s.step] || C.muted,
                    padding: "3px 9px",
                    borderRadius: 5,
                    whiteSpace: "nowrap",
                    marginTop: 2,
                    letterSpacing: "0.04em",
                  }}>
                  {s.step}
                </span>
                <div>
                  <p
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: C.navy,
                      margin: "0 0 5px",
                      fontFamily: "'Noto Sans KR', sans-serif",
                    }}>
                    {s.title}
                  </p>
                  <p
                    style={{
                      fontSize: 14,
                      color: C.textSoft,
                      lineHeight: 1.8,
                      margin: 0,
                      fontFamily: "'Noto Sans KR', sans-serif",
                    }}>
                    {s.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div
            style={{
              marginTop: 4,
              background: C.blueLight,
              border: `1px solid ${C.blueLine}`,
              borderRadius: 8,
              padding: "11px 16px",
              display: "flex",
              alignItems: "flex-start",
              gap: 10,
            }}>
            <span style={{ fontSize: 14, flexShrink: 0 }}>🏆</span>
            <p
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: C.blueStrong,
                margin: 0,
                lineHeight: 1.6,
                fontFamily: "'Noto Sans KR', sans-serif",
              }}>
              {p.result}
            </p>
          </div>
        </div>
      </div>
    </FadeUp>
  );
}

function ProjectsSection() {
  return (
    <section
      id="projects"
      style={{
        background: C.bg,
        padding: "36px clamp(20px,4.4vw,64px)",
        borderTop: `1px solid ${C.border}`,
      }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeUp>
          <h2
            style={{
              fontSize: 18,
              fontWeight: 800,
              color: C.navy,
              margin: "0 0 22px",
              fontFamily: "'Noto Sans KR', sans-serif",
            }}>
            Projects
          </h2>
        </FadeUp>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {data.projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

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
          }}>
          GitHub ↗
        </a>
      </div>
    </footer>
  );
}

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
      <AboutSection />
      <IntroSection />
      <CapabilitiesSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}
