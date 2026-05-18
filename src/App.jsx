import { useState, useEffect } from "react";

/* ═══════════════════════════════════════════
   DATA
═══════════════════════════════════════════ */
const NAME = "강민서";
const ROLE = "AX팀 AI 서비스 개발자 지원";
const GITHUB = "https://github.com/mingioes";
const AGE = "23세 (2004.01.15)";
const PHONE = "010-9625-2212";
const EMAIL = "vhehddl2212@naver.com";

const projects = [
  {
    num: "01",
    period: "2025.11 – 2025.12",
    category: "산학협력 프로젝트 (GS 네오텍 멘토링) · AWS 클라우드",
    name: "MusicRAG",
    subtitle: "RAG 기반 지능형 음악 정보 검색 및 분석 시스템",
    tags: ["Amazon Bedrock", "OpenSearch Serverless", "FastAPI", "Vue.js", "RAG 아키텍처"],
    bullets: [
      "S3 자동화 파이프라인 구축: 음악 데이터(JSON, PDF) 업로드 시 파싱, 청킹, Titan Embeddings v2를 이용한 인덱싱까지 전 과정 자동화",
      "3단계 Agentic RAG 구현: Amazon Nova Lite 모델을 통해 '질의 분석 → 벡터 검색 → 답변 생성'으로 이어지는 추론 체인 설계",
      "검색 완결성 확보: 내부 지식 DB에 정보가 부족할 경우 http_request 도구를 활용한 외부 인터넷 검색을 수행하도록 아키텍처 확장",
      "도메인 특화 검색 및 분석: 단순 가사 검색을 넘어 아티스트 스타일 분석, 장르별 트렌드 통계, 앨범 비교 분석 기능 구현",
      "비동기 풀스택 연동: FastAPI 비동기 서버와 Vue.js 프론트엔드를 연결하여 대규모 LLM 응답의 사용자 지연 시간 최소화",
    ],
    star: [
      { label: "S", title: "기존 LLM의 한계 극복", body: "기존 모델의 지식 컷오프(Knowledge Cutoff)로 인한 최신 음악 정보 부재와 가사/메타데이터의 환각(Hallucination) 현상을 해결해야 했습니다." },
      { label: "A", title: "UI 및 API 연동 아키텍처 설계", body: "사용자 질문을 처리하는 검색 UI를 제작하고, Bedrock 에이전트와 FastAPI 백엔드를 연결하여 실시간으로 데이터베이스를 검색하고 답변을 생성하는 인터페이스를 구축했습니다." },
      { label: "R", title: "최신성 유지 및 분석 생산성 향상", body: "S3 동기화만으로 최신 정보를 즉시 반영하여 컷오프 문제를 해결했으며, 음악 산업 종사자의 리서치 시간을 대폭 절감할 수 있는 분석 기반을 마련했습니다." },
    ],
    archImg: "./rag.png",
  },
  {
    num: "02",
    period: "2024.09 – 2025.05",
    category: "Qualcomm 기업연계 캡스톤",
    name: "Wakey Wakey",
    subtitle: "Snapdragon 8 Gen 3 NPU 기반 On-Device AI 스마트 앨범",
    tags: ["글로벌 협업", "이슈 트래킹", "AI 성능 최적화", "데이터 기반 검증"],
    bullets: [
      "SDK 호환성 이슈 10여 건을 4단계 트래킹 프로세스로 체계화 → 팀 공유 문서 관리, 중복 오류 0건",
      "Qualcomm 본사 엔지니어와 영어 슬랙 채널로 기술 질의·요구사항 조율",
      "NPU 파라미터 튜닝으로 객체 탐지 정확도 기존 대비 약 40% 이상 향상 — 매 변경마다 수치 검증",
      "벡터 DB 인덱싱 구조 개선으로 이미지 검색 응답 속도 약 20% 단축",
      "공동창업 경험 기반: 사용자 설문 직접 설계 → 자연어 검색 모델 개선 반영, 최종 발표에서 중소기업 대표들 출시 일정 문의",
    ],
    star: [
      { label: "S", title: "해결해야 했던 과제", body: "SDK 버전마다 다른 NPU 호환성 오류, 국내 레퍼런스 부재, 팀 내 중복 오류 발생 문제가 반복됐습니다." },
      { label: "A", title: "이슈 트래킹 체계 설계 & 글로벌 소통", body: "10여 건 이슈를 재현 → 로그 정리 → 해결책 검증 3단계로 체계화하고 노션에 누적 관리. 내부 해결 불가 이슈는 Qualcomm 본사에 영어로 직접 질의했습니다." },
      { label: "R", title: "데이터로 성능 지표 측정·개선", body: "'측정 → 개선 → 재측정' 반복 사이클로 협력사 운영 지표 관리 방법론을 체화했습니다. 최종 발표에서 중소기업 대표들로부터 출시 일정을 묻는 반응을 받았습니다." },
    ],
    award: "🏆 기업연계형 캡스톤 디자인 최우수상 (한성대학교, 2025.05) · 한국통신학회 학부생 캡스톤 경진대회 우수상 (2025.11)",
    archImg: "./wakey.png",
  },
  {
    num: "03",
    period: "2024.09 – 2024.12",
    category: "다우기술 기업연계 산학협력 프로젝트",
    name: "뿌리오 AI 마케팅 솔루션",
    subtitle: "AI 이미지 생성 모델 기반의 MMS 마케팅 이미지 자동 생성 및 검증 시스템",
    tags: ["DALL-E 3", "GPT-4", "Selenium", "프롬프트 엔지니어링"],
    bullets: [
      "MMS 발송 규격 12개 항목(파일 용량, 해상도, 확장자 등) 검증 체크리스트 수립 및 시나리오 6종 설계",
      "Selenium 기반의 자동화 테스트를 통해 규격 위반 가능성 3건(고해상도 이미지 처리 오류 등) 사전 발견 및 로직 개선",
      "DALL-E 3 기반 생성 이미지 품질을 5점 척도로 정량화하여 업종별(음식, 패션 등) 품질 편차 분석",
      "특정 업종의 낮은 채도/구도 왜곡 패턴을 분석하여 '부정 프롬프트(Negative Prompt)' 및 가중치 로직 추가로 품질 표준화",
    ],
    star: [
      { label: "S", title: "실제 발송 가능한 AI 이미지 품질 및 규격 확보", body: "AI가 생성한 이미지가 통신사별 MMS 발송 규격(12개 항목)을 100% 충족해야 했으며, 업종별로 생성 품질이 일정하지 않은 문제를 해결해야 했습니다." },
      { label: "A", title: "자동화 검증 체계 수립 및 데이터 기반 품질 개선", body: "Selenium을 활용해 전 단계 검증 시나리오를 자동화하고, 이미지 품질을 수치화하여 분석했습니다. 분석 결과를 바탕으로 프롬프트 로직을 고도화하여 최적의 생성 조건을 도출했습니다." },
      { label: "R", title: "운영 리스크 제로화 및 생성 품질 상향 평준화", body: "규격 미달로 인한 발송 실패 리스크를 사전에 차단하였으며, 하위 품질 업종의 만족도를 데이터 기반 프롬프트 튜닝으로 대폭 개선했습니다." },
    ],
    archImg: "./ppurio.png",
  },
];

const overviewProjects = [
  {
    num: "01", period: "2025.11 – 2025.12", category: "산학협력 · AWS",
    name: "MusicRAG", subtitle: "RAG 기반 지능형 음악 정보 검색 및 분석 시스템",
    tags: ["Amazon Bedrock", "OpenSearch", "FastAPI", "RAG"], anchor: "project-01",
  },
  {
    num: "02", period: "2024.09 – 2025.05", category: "Qualcomm 기업연계",
    name: "Wakey Wakey", subtitle: "Snapdragon NPU 기반 On-Device AI 스마트 앨범",
    tags: ["On-Device AI", "NPU 최적화", "이슈 트래킹"], anchor: "project-02",
  },
  {
    num: "03", period: "2024.09 – 2024.12", category: "다우기술 기업연계",
    name: "뿌리오 AI 솔루션", subtitle: "MMS 마케팅 이미지 자동 생성 및 검증 시스템",
    tags: ["DALL-E 3", "GPT-4", "Selenium", "프롬프트 엔지니어링"], anchor: "project-03",
  },
];

const skills = [
  {
    icon: "🤖", title: "AI 서비스 개발",
    tags: [{ label: "LLM API", accent: true }, { label: "RAG 시스템 설계", accent: true }, { label: "Prompt Engineering", accent: true }, { label: "On-Device AI", accent: true }],
  },
  {
    icon: "☁️", title: "클라우드 · 인프라",
    tags: [{ label: "AWS (S3·Lambda·Bedrock)", accent: true }, { label: "OpenSearch Serverless", accent: true }, { label: "Docker · Linux" }, { label: "FastAPI · Vue.js" }],
  },
  {
    icon: "🔍", title: "이슈 트래킹",
    tags: [{ label: "4단계 체계 설계·운영" }, { label: "이슈 문서화·공유" }, { label: "리스크 사전 차단" }, { label: "Notion 기반 협업" }],
  },
  {
    icon: "🌐", title: "영어 커뮤니케이션",
    tags: [{ label: "Qualcomm 본사 직접 소통" }, { label: "영어 기술 문서 독해·작성" }, { label: "글로벌 파트너 조율" }],
  },
];

/* ═══════════════════════════════════════════
   DESIGN TOKENS
═══════════════════════════════════════════ */
const FF = "'Noto Sans KR','Apple SD Gothic Neo','Malgun Gothic',sans-serif";
const MONO = "'Courier New',Courier,monospace";
const ACCENT = "#4f7bff";
const DARK = "#0f172a";
const starColor = { S: "#1e293b", A: "#1d4ed8", R: "#065f46" };
const starLabel = { S: "상황", A: "행동", R: "결과" };

/* ═══════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════ */
function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function Tag({ children, accent }) {
  return (
    <span style={{
      display: "inline-block", padding: "4px 11px", borderRadius: 99,
      fontSize: 11, fontWeight: 500,
      background: accent ? "#eef2ff" : "#f3f4f6",
      color: accent ? "#4338ca" : "#4b5563",
      border: `1px solid ${accent ? "#c7d2fe" : "#e5e7eb"}`,
    }}>
      {children}
    </span>
  );
}

function StarBadge({ label }) {
  return (
    <span style={{
      display: "inline-block", fontSize: 10, fontWeight: 700,
      letterSpacing: "0.07em", padding: "2px 8px", borderRadius: 4,
      background: starColor[label], color: "#fff", fontFamily: MONO, marginBottom: 5,
    }}>
      {starLabel[label]}
    </span>
  );
}

/* ═══════════════════════════════════════════
   NAVBAR
═══════════════════════════════════════════ */
function Navbar({ scrolled }) {
  const light = !scrolled;
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, height: 60,
      background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid #e5e7eb" : "none",
      display: "flex", alignItems: "center", padding: "0 5%", transition: "all 0.3s",
    }}>
      <span style={{ fontWeight: 800, fontSize: 17, color: light ? "#fff" : DARK, letterSpacing: "-0.3px", marginRight: "auto", fontFamily: FF }}>
        {NAME}
      </span>
      <div style={{ display: "flex", gap: 32, marginRight: 28 }}>
        {[["about","About"],["skills","Skills"],["projects","Projects"],["contact","Contact"]].map(([id, lbl]) => (
          <button key={id} onClick={() => scrollTo(id)} style={{
            background: "none", border: "none", cursor: "pointer", padding: 0,
            fontSize: 13, fontWeight: 600, fontFamily: FF,
            color: light ? "rgba(255,255,255,0.78)" : "#374151", transition: "color 0.2s",
          }}>
            {lbl}
          </button>
        ))}
      </div>
      <a href={GITHUB} target="_blank" rel="noreferrer" style={{
        fontSize: 12, fontWeight: 600, fontFamily: MONO, padding: "6px 16px",
        borderRadius: 8, textDecoration: "none",
        border: `1.5px solid ${light ? "rgba(255,255,255,0.4)" : "#d1d5db"}`,
        color: light ? "#fff" : DARK, transition: "all 0.2s",
      }}>
        GitHub ↗
      </a>
    </nav>
  );
}

/* ═══════════════════════════════════════════
   HERO
═══════════════════════════════════════════ */
function Hero() {
  const competencies = [
    { icon: "🤖", label: "RAG 시스템 설계", sub: "Amazon Bedrock · OpenSearch" },
    { icon: "⚡", label: "On-Device AI", sub: "Snapdragon NPU · 파라미터 튜닝" },
    { icon: "✍️", label: "Prompt Engineering", sub: "품질 측정 · 편차 개선" },
    { icon: "☁️", label: "AWS 클라우드", sub: "S3 · Lambda · Bedrock" },
    { icon: "🔍", label: "이슈 트래킹", sub: "4단계 체계 · 리스크 차단" },
    { icon: "🌐", label: "글로벌 소통", sub: "Qualcomm 본사 영어 협업" },
  ];

  return (
    <section style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr", fontFamily: FF }}>
      {/* 왼쪽: 흰 배경 */}
      <div style={{
        background: "#fff", display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "100px 48px 64px 120px", borderRight: "1px solid #f1f5f9",
      }}>
        {/* 증명사진 */}
        <div style={{
          width: 200, height: 252, borderRadius: 18, overflow: "hidden",
          background: "#f1f5f9", border: "1px solid #e2e8f0", marginBottom: 28, flexShrink: 0,
        }}>
          <img src="./IMG_2124.jpg" alt="강민서 증명사진"
            style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>

        {/* 직군 뱃지 */}
        <div style={{
          display: "inline-block", width: "fit-content", marginBottom: 14,
          fontSize: 13, fontFamily: MONO, fontWeight: 700, letterSpacing: "0.05em",
          color: ACCENT, background: "#eef2ff", border: "1px solid #c7d2fe",
          borderRadius: 99, padding: "7px 18px",
        }}>
          {ROLE}
        </div>

        {/* 이름 */}
        <h1 style={{ fontSize: 56, fontWeight: 800, color: "#0f172a", margin: "0 0 28px", letterSpacing: "-2px", lineHeight: 1.05 }}>
          {NAME}
        </h1>

        {/* 신상정보 */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 40 }}>
          {[
            { icon: "🎂", label: "나이", val: AGE },
            { icon: "📱", label: "연락처", val: PHONE },
            { icon: "✉️", label: "이메일", val: EMAIL },
          ].map((item) => (
            <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{
                width: 34, height: 34, borderRadius: 9, background: "#f8fafc",
                border: "1px solid #e2e8f0", display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: 15, flexShrink: 0,
              }}>
                {item.icon}
              </div>
              <div>
                <div style={{ fontSize: 9, fontFamily: MONO, color: "#94a3b8", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 1 }}>
                  {item.label}
                </div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#1e293b", fontFamily: MONO }}>
                  {item.val}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", gap: 10 }}>
          <button onClick={() => scrollTo("projects")} style={{
            background: ACCENT, color: "#fff", border: "none", cursor: "pointer",
            fontFamily: MONO, fontWeight: 700, fontSize: 12, padding: "11px 22px", borderRadius: 9,
          }}>
            프로젝트 보기 ↓
          </button>
          <a href={GITHUB} target="_blank" rel="noreferrer" style={{
            background: "#fff", color: "#374151", border: "1.5px solid #d1d5db",
            borderRadius: 9, fontFamily: MONO, fontWeight: 600, fontSize: 12,
            padding: "11px 22px", textDecoration: "none", display: "inline-block",
          }}>
            GitHub ↗
          </a>
        </div>
      </div>

      {/* 오른쪽: 다크 배경 + 역량 카드 */}
      <div style={{
        background: `linear-gradient(145deg, ${DARK} 0%, #1e1b4b 60%, #0f172a 100%)`,
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "100px 56px 64px", position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: "10%", right: "-5%", width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle,rgba(79,123,255,.15) 0%,transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "8%", left: "-5%", width: 220, height: 220, borderRadius: "50%", background: "radial-gradient(circle,rgba(129,140,248,.10) 0%,transparent 65%)", pointerEvents: "none" }} />

        <p style={{ margin: "0 0 10px", fontSize: 10, fontFamily: MONO, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(79,123,255,.8)", zIndex: 1 }}>
          ── Core Competencies
        </p>
        <div style={{ width: 36, height: 3, borderRadius: 2, background: "linear-gradient(90deg,#4f7bff,#818cf8)", marginBottom: 36, zIndex: 1 }} />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, zIndex: 1 }}>
          {competencies.map((c) => (
            <div key={c.label} style={{
              background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 16, padding: "18px", backdropFilter: "blur(8px)", transition: "background 0.2s",
            }}>
              <div style={{ fontSize: 22, marginBottom: 8 }}>{c.icon}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", marginBottom: 4, lineHeight: 1.3 }}>{c.label}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", fontFamily: MONO, lineHeight: 1.4 }}>{c.sub}</div>
            </div>
          ))}
        </div>

        <div onClick={() => scrollTo("about")} style={{
          marginTop: 40, display: "flex", alignItems: "center", gap: 8, cursor: "pointer",
          color: "rgba(255,255,255,.25)", fontSize: 10, fontFamily: MONO,
          letterSpacing: "0.14em", textTransform: "uppercase", zIndex: 1,
          animation: "hb 2.4s ease-in-out infinite",
        }}>
          <span>scroll down</span><span style={{ fontSize: 13 }}>↓</span>
        </div>
        <style>{`@keyframes hb{0%,100%{opacity:.25;transform:translateY(0)}50%{opacity:.5;transform:translateY(5px)}}`}</style>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   PROJECTS OVERVIEW
═══════════════════════════════════════════ */
function ProjectsOverview() {
  return (
    <section style={{ background: "#f8fafc", borderTop: "1px solid #f1f5f9" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "72px 40px 80px" }}>
        <div style={{ marginBottom: 36 }}>
          <p style={{ margin: "0 0 8px", fontSize: 11, fontFamily: MONO, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: ACCENT }}>
            ── Projects Overview
          </p>
          <div style={{ width: 40, height: 3, borderRadius: 2, background: `linear-gradient(90deg,${ACCENT},#818cf8)`, marginBottom: 14 }} />
          <p style={{ margin: 0, fontSize: 12, fontFamily: MONO, color: "#94a3b8" }}>
            총 {overviewProjects.length}개 프로젝트 · 클릭하면 상세 내용으로 이동합니다
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {overviewProjects.map((proj) => <OverviewCard key={proj.num} proj={proj} />)}
        </div>
      </div>
    </section>
  );
}

function OverviewCard({ proj }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={() => scrollTo(proj.anchor)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        border: `1.5px solid ${hovered ? ACCENT : "#c7d2fe"}`,
        borderRadius: 18, padding: "22px 24px", cursor: "pointer",
        transform: hovered ? "translateY(-3px)" : "none",
        boxShadow: hovered ? "0 8px 28px rgba(79,123,255,0.10)" : "none",
        transition: "all 0.2s ease",
      }}>
      <p style={{ margin: "0 0 12px", fontSize: 11, fontFamily: MONO, fontWeight: 700, color: "#94a3b8", letterSpacing: "0.04em" }}>
        #{proj.num} · {proj.period}
      </p>
      <p style={{ margin: "0 0 4px", fontSize: 19, fontWeight: 800, color: "#0f172a", letterSpacing: "-0.3px" }}>
        {proj.name}
      </p>
      <p style={{ margin: "0 0 14px", fontSize: 11, color: ACCENT, fontWeight: 500, lineHeight: 1.5 }}>
        {proj.subtitle}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
        {proj.tags.map((t) => (
          <span key={t} style={{ fontSize: 10, background: "#f8fafc", color: "#475569", border: "1px solid #e2e8f0", borderRadius: 99, padding: "2px 9px", fontFamily: MONO }}>
            {t}
          </span>
        ))}
      </div>
      <div style={{ marginTop: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 10, fontFamily: MONO, color: "#94a3b8" }}>{proj.category}</span>
        <span style={{ fontSize: 11, fontFamily: MONO, fontWeight: 700, color: ACCENT }}>자세히 보기 ↓</span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   SECTION WRAPPER & HEADING
═══════════════════════════════════════════ */
function Section({ id, bg, children }) {
  return (
    <section id={id} style={{ background: bg || "#f8fafc", borderTop: "1px solid #f1f5f9" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "96px 40px 88px" }}>
        {children}
      </div>
    </section>
  );
}

function SectionHeading({ children }) {
  return (
    <div style={{ marginBottom: 48 }}>
      <p style={{ margin: "0 0 8px", fontSize: 11, fontFamily: MONO, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: ACCENT }}>
        ── {children}
      </p>
      <div style={{ width: 40, height: 3, borderRadius: 2, background: `linear-gradient(90deg,${ACCENT},#818cf8)` }} />
    </div>
  );
}

/* ═══════════════════════════════════════════
   ABOUT
═══════════════════════════════════════════ */
function About() {
  const cardBase = { background: "#fff", border: "1px solid #e2e8f0", borderRadius: 18, padding: "28px 26px" };
  const cardLabel = { fontSize: 10, fontFamily: MONO, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: ACCENT, marginBottom: 14, display: "flex", alignItems: "center", gap: 6 };
  const Dot = () => <span style={{ display: "inline-block", width: 3, height: 13, background: ACCENT, borderRadius: 2 }} />;

  return (
    <Section id="about" bg="#f8fafc">
      <SectionHeading>About</SectionHeading>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr 1.5fr", gap: 18 }}>
        <div style={cardBase}>
          <div style={cardLabel}><Dot />학력</div>
          <p style={{ margin: "0 0 4px", fontSize: 15, fontWeight: 700, color: "#0f172a" }}>한성대학교</p>
          <p style={{ margin: "0 0 2px", fontSize: 13, fontWeight: 600, color: "#334155" }}>컴퓨터공학부</p>
          <p style={{ margin: "0 0 14px", fontSize: 12, color: "#94a3b8" }}>모바일소프트웨어 / 웹공학 트랙</p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 11, fontFamily: MONO, color: "#94a3b8" }}>2022.03 → 2026.02</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: ACCENT }}>학점 3.6 / 4.5</span>
          </div>
        </div>

        <div style={cardBase}>
          <div style={cardLabel}><Dot />수상</div>
          {[
            { name: "기업연계형 캡스톤디자인 최우수상", org: "한성대학교", date: "2025.05" },
            { name: "한국통신학회 학부생 캡스톤 경진대회 우수상", org: "한국통신학회", date: "2025.11" },
          ].map((a) => (
            <div key={a.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 18, paddingBottom: 18, borderBottom: "1px solid #f1f5f9" }}>
              <div>
                <p style={{ margin: "0 0 4px", fontSize: 13, fontWeight: 600, color: "#0f172a" }}>{a.name}</p>
                <p style={{ margin: 0, fontSize: 11, color: "#94a3b8" }}>{a.org}</p>
              </div>
              <span style={{ flexShrink: 0, fontSize: 10, fontFamily: MONO, background: "#eef2ff", color: "#4338ca", borderRadius: 6, padding: "3px 9px", marginTop: 2 }}>{a.date}</span>
            </div>
          ))}
        </div>

        <div style={cardBase}>
          <div style={cardLabel}><Dot />자격증</div>
          {[
            { name: "SQLD", org: "한국데이터산업진흥원", date: "2026.03" },
            { name: "리눅스마스터 2급", org: "정보통신기술자격검정", date: "2026.04" },
            { name: "정보처리기능사", org: "한국산업인력공단", date: "2024.12" },
            { name: "TRIZ Level 1", org: "한국트리즈협회", date: "2025.09" },
          ].map((c) => (
            <div key={c.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, marginBottom: 13 }}>
              <div>
                <p style={{ margin: "0 0 2px", fontSize: 13, fontWeight: 600, color: "#0f172a" }}>{c.name}</p>
                <p style={{ margin: 0, fontSize: 11, color: "#94a3b8" }}>{c.org}</p>
              </div>
              <span style={{ flexShrink: 0, fontSize: 10, fontFamily: MONO, color: "#94a3b8" }}>{c.date}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════
   SKILLS
═══════════════════════════════════════════ */
function Skills() {
  return (
    <Section id="skills" bg="#fff">
      <SectionHeading>Skills</SectionHeading>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
        {skills.map((s) => (
          <div key={s.title} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 18, padding: "26px 20px" }}>
            <div style={{ fontSize: 28, marginBottom: 12 }}>{s.icon}</div>
            <p style={{ margin: "0 0 14px", fontSize: 14, fontWeight: 700, color: "#0f172a" }}>{s.title}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {s.tags.map((t) => <Tag key={t.label} accent={t.accent}>{t.label}</Tag>)}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════
   PROJECT CARD
═══════════════════════════════════════════ */
function ProjectCard({ proj }) {
  return (
    <div id={`project-${proj.num}`} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 20, overflow: "hidden" }}>
      <div style={{ padding: "32px 36px 24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
          <span style={{ fontSize: 24, fontWeight: 700, color: "#cbd5e1", fontFamily: MONO, letterSpacing: "-1px" }}>#{proj.num}</span>
          <span style={{ fontSize: 11, fontFamily: MONO, color: "#94a3b8" }}>{proj.period}</span>
          <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
            <a href={GITHUB} target="_blank" rel="noreferrer" style={{ fontSize: 11, fontWeight: 600, fontFamily: MONO, padding: "5px 13px", borderRadius: 7, textDecoration: "none", background: DARK, color: "#fff", border: `1.5px solid ${DARK}` }}>Code ↗</a>
            <a href={GITHUB} target="_blank" rel="noreferrer" style={{ fontSize: 11, fontWeight: 600, fontFamily: MONO, padding: "5px 13px", borderRadius: 7, textDecoration: "none", background: "#fff", color: "#374151", border: "1.5px solid #d1d5db" }}>Demo ↗</a>
          </div>
        </div>
        <p style={{ margin: "0 0 4px", fontSize: 10, fontFamily: MONO, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#94a3b8" }}>{proj.category}</p>
        <p style={{ margin: "0 0 4px", fontSize: 28, fontWeight: 800, color: "#0f172a", letterSpacing: "-0.5px" }}>{proj.name}</p>
        <p style={{ margin: "0 0 18px", fontSize: 13, color: ACCENT, fontWeight: 500 }}>{proj.subtitle}</p>
        <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
          {proj.tags.map((t) => <Tag key={t}>{t}</Tag>)}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderTop: "1px solid #f1f5f9" }}>
        <div style={{ padding: "24px 32px", background: "#fafbfc" }}>
          <p style={{ margin: "0 0 12px", fontSize: 10, fontFamily: MONO, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#94a3b8" }}>주요 기여</p>
          {proj.bullets.map((b, i) => (
            <div key={i} style={{ display: "flex", gap: 10, marginBottom: 10 }}>
              <span style={{ flexShrink: 0, marginTop: 3, width: 5, height: 5, borderRadius: "50%", background: ACCENT, display: "block" }} />
              <p style={{ margin: 0, fontSize: 12.5, color: "#334155", lineHeight: 1.75 }}>{b}</p>
            </div>
          ))}
        </div>
        <div style={{ padding: "24px 32px", borderLeft: "1px solid #f1f5f9", display: "flex", flexDirection: "column", gap: 12 }}>
          {proj.star.map((s) => (
            <div key={s.label} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 12, padding: "14px 16px", flex: 1 }}>
              <StarBadge label={s.label} />
              <p style={{ margin: "0 0 5px", fontSize: 12, fontWeight: 700, color: "#0f172a" }}>{s.title}</p>
              <p style={{ margin: 0, fontSize: 11.5, color: "#475569", lineHeight: 1.7 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>

      {proj.archImg && (
        <div style={{ borderTop: "1px solid #f1f5f9", padding: "22px 32px 26px" }}>
          <p style={{ margin: "0 0 12px", fontSize: 10, fontFamily: MONO, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#94a3b8" }}>시스템 구조도</p>
          <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #e2e8f0", background: "#f8fafc" }}>
            <img src={proj.archImg} alt={`${proj.name} 구조도`} style={{ width: "100%", height: "auto", display: "block", maxHeight: 340, objectFit: "contain" }} />
          </div>
        </div>
      )}

      {proj.award && (
        <div style={{ padding: "12px 36px", background: "#eff6ff", borderTop: "1px solid #bfdbfe", fontSize: 12.5, color: "#1d4ed8", fontWeight: 500 }}>
          {proj.award}
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════
   CONTACT
═══════════════════════════════════════════ */
function Contact() {
  const items = [
    { icon: "📱", label: "Phone", val: PHONE, href: `tel:${PHONE.replace(/-/g, "")}` },
    { icon: "✉️", label: "Email", val: EMAIL, href: `mailto:${EMAIL}` },
  ];
  return (
    <Section id="contact" bg="#f8fafc">
      <SectionHeading>Contact</SectionHeading>
      <p style={{ margin: "0 0 36px", fontSize: 15, color: "#475569", lineHeight: 1.8 }}>
        새로운 기회나 협업 제안은 언제나 환영합니다.<br />
        아래 채널로 편하게 연락해 주세요.
      </p>
      <div style={{ display: "flex", gap: 16, maxWidth: 480 }}>
        {items.map((item) => (
          <div key={item.label} style={{ flex: 1, background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: "24px 26px", display: "flex", alignItems: "center", gap: 18 }}>
            <div style={{ flexShrink: 0, width: 48, height: 48, borderRadius: 13, background: "#eef2ff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>
              {item.icon}
            </div>
            <div style={{ minWidth: 0 }}>
              <p style={{ margin: "0 0 4px", fontSize: 10, fontFamily: MONO, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: "#94a3b8" }}>{item.label}</p>
              <a href={item.href} style={{ display: "block", fontSize: 14, fontWeight: 700, color: "#0f172a", textDecoration: "none", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {item.val}
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════ */
function Footer() {
  return (
    <footer style={{ background: DARK, padding: "32px 40px", textAlign: "center" }}>
      <p style={{ margin: "0 0 6px", fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,.65)", fontFamily: FF }}>{NAME}</p>
      <p style={{ margin: 0, fontSize: 11, color: "rgba(255,255,255,.25)", fontFamily: MONO, lineHeight: 1.9 }}>강민서 포트폴리오</p>
    </footer>
  );
}

/* ═══════════════════════════════════════════
   ROOT
═══════════════════════════════════════════ */
export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div style={{ fontFamily: FF, color: "#0f172a", fontSize: 14, lineHeight: 1.6, background: "#f8fafc" }}>
      <Navbar scrolled={scrolled} />
      <Hero />
      <ProjectsOverview />
      <About />
      <Skills />
      <Section id="projects" bg="#f8fafc">
        <SectionHeading>Projects</SectionHeading>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {projects.map((p) => <ProjectCard key={p.num} proj={p} />)}
        </div>
      </Section>
      <Contact />
      <Footer />
    </div>
  );
}