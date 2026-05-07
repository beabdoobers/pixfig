import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import "../styles/landing.css";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "Figurinhas da Copa em PDF — Imprima em Casa!" },
      {
        name: "description",
        content:
          "PDF completo com todas as figurinhas da Copa do Mundo em alta qualidade. Download imediato. Imprima quantas vezes quiser.",
      },
    ],
  }),
});

const CHECKOUT_URL = "https://pay.cakto.com.br/onhb3pg_843267";

const goToCheckout = () => {
  window.location.href = CHECKOUT_URL;
};

function TopBar() {
  return (
    <div className="topbar">
      <span className="topbar-text">
        🔥 OFERTA RELÂMPAGO • PDF COMPLETO COM TODAS AS FIGURINHAS
      </span>
      <button className="topbar-btn" onClick={goToCheckout}>
        BAIXAR AGORA
      </button>
    </div>
  );
}

function Particles() {
  const balls = Array.from({ length: 14 });
  return (
    <div className="particles" aria-hidden>
      {balls.map((_, i) => (
        <span
          key={i}
          className="ball"
          style={{
            left: `${(i * 7.3) % 100}%`,
            animationDelay: `${(i % 7) * 1.2}s`,
            animationDuration: `${12 + (i % 5) * 3}s`,
            fontSize: `${18 + (i % 4) * 8}px`,
          }}
        >
          ⚽
        </span>
      ))}
    </div>
  );
}

function LiveCounter() {
  const [n, setN] = useState(37);
  useEffect(() => {
    const id = setInterval(() => {
      setN((v) => Math.max(12, v + (Math.random() > 0.5 ? 1 : -1)));
    }, 2200);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="live">
      <span className="live-dot" /> <strong>{n} pessoas</strong> comprando agora
    </div>
  );
}

function Countdown() {
  const [t, setT] = useState({ h: 1, m: 47, s: 12 });
  useEffect(() => {
    const id = setInterval(() => {
      setT((p) => {
        let { h, m, s } = p;
        s -= 1;
        if (s < 0) {
          s = 59;
          m -= 1;
        }
        if (m < 0) {
          m = 59;
          h -= 1;
        }
        if (h < 0) {
          h = 1;
          m = 59;
          s = 59;
        }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <div className="countdown">
      <div className="cd-label">⏰ A oferta termina em:</div>
      <div className="cd-boxes">
        <div className="cd-box">
          <span>{pad(t.h)}</span>
          <small>horas</small>
        </div>
        <div className="cd-box">
          <span>{pad(t.m)}</span>
          <small>min</small>
        </div>
        <div className="cd-box">
          <span>{pad(t.s)}</span>
          <small>seg</small>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="stadium-bg" aria-hidden />
      <Particles />
      <div className="hero-inner">
        <div className="badges">
          <span className="badge gold">🏆 EDIÇÃO COPA DO MUNDO</span>
          <span className="badge green">⚡ DOWNLOAD IMEDIATO</span>
        </div>

        <h1 className="hero-title">
          IMPRIMA TODAS AS <span className="hl-yellow">FIGURINHAS DA COPA</span>{" "}
          <br /> EM <span className="hl-green">CASA!</span>
        </h1>
        <p className="hero-sub">
          PDF completo em alta qualidade pronto para imprimir. Todas as seleções,
          todos os jogadores, organizados como o álbum oficial.
        </p>

        <LiveCounter />

        <button className="cta cta-glow" onClick={goToCheckout}>
          ⚽ QUERO MEU PDF AGORA
          <span className="cta-sub">Acesso liberado em segundos</span>
        </button>

        <div className="trust">
          <span>✅ Pagamento seguro</span>
          <span>✅ +5.000 downloads</span>
          <span>✅ Garantia 7 dias</span>
        </div>

        <div className="mockups">
          <div className="card-fig fig1">
            <div className="fig-inner">
              <div className="fig-flag" style={{ background: "#009c3b" }} />
              <img src="/images/vini.png" alt="Jogador" className="player-image"/>
              <div className="fig-name">BRASIL</div>
              <div className="fig-num">#10</div>
            </div>
          </div>
          <div className="card-fig fig2">
            <div className="fig-inner">
              <div className="fig-flag" style={{ background: "#0055A4" }} />
              <img src="/images/kilian.png" alt="Jogador" className="player-image"/>
              <div className="fig-name">FRANÇA</div>
              <div className="fig-num">#7</div>
            </div>
          </div>
          <div className="card-fig fig3">
            <div className="fig-inner">
              <div className="fig-flag" style={{ background: "#C60B1E" }} />
              <img src="/images/yamal.png" alt="Jogador" className="player-image"/>
              <div className="fig-name">ESPANHA</div>
              <div className="fig-num">#9</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const benefits = [
  { icon: "🖨️", title: "Alta qualidade para impressão", desc: "Arquivos em 300dpi prontos para impressão nítida." },
  { icon: "🌍", title: "Todas as seleções", desc: "Todos os times participantes da Copa." },
  { icon: "📁", title: "Arquivos organizados", desc: "Separados por país e numerados." },
  { icon: "⚡", title: "Download imediato", desc: "Receba o PDF na hora, no seu e-mail." },
  { icon: "♾️", title: "Imprima quantas vezes quiser", desc: "Sem limites — imprima para toda a família." },
  { icon: "🖥️", title: "Compatível com impressoras comuns", desc: "Funciona em qualquer impressora caseira." },
];

function Benefits() {
  return (
    <section className="section">
      <h2 className="section-title">
        Por que esse <span className="hl-yellow">PDF</span> é o melhor da Copa?
      </h2>
      <div className="grid">
        {benefits.map((b) => (
          <div className="benefit" key={b.title}>
            <div className="benefit-icon">{b.icon}</div>
            <h3>{b.title}</h3>
            <p>{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const stickers = [
  { c: "BRASIL", n: "10", bg: "#009c3b", txt: "#FEDF00", img: "/images/vini.png" },
  { c: "ARGENTINA", n: "10", bg: "#74ACDF", txt: "#FFFFFF", img: "/images/messi.png" },
  { c: "FRANÇA", n: "7", bg: "#0055A4", txt: "#FFFFFF", img: "/images/kilian.png" },
  { c: "PORTUGAL", n: "7", bg: "#006600", txt: "#FF0000", img: "/images/cris.png" },
  { c: "INGLATERRA", n: "9", bg: "#FFFFFF", txt: "#C8102E", img: "/images/bellingham.jpeg" },
  { c: "ESPANHA", n: "9", bg: "#C60B1E", txt: "#FFC400", img: "/images/yamal.png" },
  { c: "URUGUAI", n: "21", bg: "#5CBFEB", txt: "#FFFFFF", img: "/images/uru.png" },
];

function Preview() {
  return (
    <section className="section">
      <h2 className="section-title">
        Veja as <span className="hl-green">figurinhas</span>
      </h2>

      <div className="album-grid">
        {stickers.map((s, i) => (
          <div key={s.c} className={`card-fig fig${i + 1}`}>
            <div className="fig-inner">

              <div
                className="fig-flag"
                style={{ background: s.bg }}
              />

              <img
                src={s.img}
                alt={s.c}
                className="player-image"
              />

              <div
                className="fig-name"
                style={{ color: s.txt }}
              >
                {s.c}
              </div>

              <div
                className="fig-num"
                style={{ color: s.txt }}
              >
                #{s.n}
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhatYouGet() {
  const items = [
    "📘 Álbum completo em PDF (mais de 600 figurinhas)",
    "🌟 Bônus: Capa do álbum personalizada",
    "🥇 Bônus: Figurinhas Lendárias (douradas)",
    "📋 Lista de troca para organizar",
    "🎯 Guia de impressão passo a passo",
    "💬 Suporte por e-mail",
  ];
  return (
    <section className="section dark">
      <h2 className="section-title light">
        O QUE VOCÊ VAI <span className="hl-yellow">RECEBER</span>
      </h2>
      <div className="bonus-list">
        {items.map((i) => (
          <div key={i} className="bonus-item">
            <span className="check">✔</span>
            {i}
          </div>
        ))}
      </div>
    </section>
  );
}

function Offer() {
  return (
    <section className="section offer">
      <div className="offer-card">
        <div className="urgent">🔥 PROMOÇÃO POR TEMPO LIMITADO</div>
        <h2 className="offer-title">PDF COMPLETO DA COPA</h2>
        <p className="offer-desc">Acesso vitalício • Download imediato • Imprima sem limites</p>
        <div className="prices">
          <div className="old">DE R$ 97,00</div>
          <div className="new">
            POR <strong>R$ 19,90</strong>
          </div>
          <div className="install">ou 3x de R$ 7,30</div>
        </div>
        <Countdown />
        <button className="cta cta-glow big" onClick={goToCheckout}>
          ⚽ GARANTIR MEU PDF AGORA
        </button>
        <div className="badge-row">
          <span className="mini-badge">🛡️ Compra 100% segura</span>
          <span className="mini-badge">⏱️ Acesso em segundos</span>
        </div>
      </div>
    </section>
  );
}

const reviews = [
  { n: "Carla M.", t: "Meus filhos amaram! Imprimi pra eles e foi um sucesso, super econômico.", c: "#e94560" },
  { n: "Rodrigo S.", t: "Qualidade incrível. Parece o álbum oficial. Recomendo demais!", c: "#0f3460" },
  { n: "Patrícia L.", t: "Comprei e em 1 minuto já estava imprimindo. Vale cada centavo!", c: "#f7931e" },
  { n: "João P.", t: "Show de bola! Coleção completa, organizada e linda.", c: "#16a085" },
];

function Testimonials() {
  return (
    <section className="section">
      <h2 className="section-title">
        Quem já comprou <span className="hl-yellow">aprovou</span>
      </h2>
      <div className="reviews">
        {reviews.map((r) => (
          <div className="review" key={r.n}>
            <div className="review-head">
              <div className="avatar" style={{ background: r.c }}>
                {r.n[0]}
              </div>
              <div>
                <div className="rev-name">{r.n}</div>
                <div className="stars">★★★★★</div>
              </div>
            </div>
            <p>"{r.t}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const faqs = [
  { q: "Como recebo o PDF?", a: "Após o pagamento, o link de download é liberado imediatamente e enviado para seu e-mail." },
  { q: "Posso imprimir em casa?", a: "Sim! O PDF foi feito para impressão caseira em qualquer impressora comum." },
  { q: "Qual papel devo usar?", a: "Recomendamos papel adesivo A4 ou papel sulfite 120g. Funciona muito bem em ambos." },
  { q: "O download é imediato?", a: "Sim, em segundos após a confirmação do pagamento você já pode baixar." },
  { q: "Funciona no celular?", a: "Sim! Você pode baixar e visualizar pelo celular, e enviar para impressão." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section">
      <h2 className="section-title">
        Perguntas <span className="hl-green">frequentes</span>
      </h2>
      <div className="faq">
        {faqs.map((f, i) => (
          <div className={`faq-item ${open === i ? "open" : ""}`} key={f.q}>
            <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
              <span>{f.q}</span>
              <span className="faq-toggle">{open === i ? "−" : "+"}</span>
            </button>
            {open === i && <div className="faq-a">{f.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="final">
      <div className="stadium-bg" aria-hidden />
      <Particles />
      <div className="final-inner">
        <span className="badge gold pulse">🏆 +5.000 DOWNLOADS</span>
        <h2 className="final-title">
          NÃO FIQUE DE FORA DA <span className="hl-yellow">COPA!</span>
        </h2>
        <p className="final-sub">
          Imprima, colecione e reviva cada momento. Acesso imediato por apenas{" "}
          <strong>R$ 19,90</strong>.
        </p>
        <button className="cta cta-glow huge" onClick={goToCheckout}>
          ⚽ QUERO MEU PDF AGORA
        </button>
        <div className="trust center">
          <span>✅ Pagamento seguro</span>
          <span>✅ Garantia 7 dias</span>
          <span>✅ Suporte rápido</span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Álbum da Copa PDF — Todos os direitos reservados.</p>
      <p className="small">
        Este produto não é afiliado a nenhuma entidade oficial de futebol.
      </p>
    </footer>
  );
}

function Landing() {
  return (
    <div className="landing">
      <TopBar />
      <Hero />
      <Benefits />
      <Preview />
      <WhatYouGet />
      <Offer />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
