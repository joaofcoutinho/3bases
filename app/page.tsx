import Image from "next/image";

const BG = "#111111";

export default function Home() {
  return (
    <main
      className="min-h-screen"
      style={{ background: BG, fontFamily: "var(--font-barlow)" }}
    >
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/fundo4.png"
            alt=""
            fill
            className="object-cover object-right"
            priority
          />
          <div className="absolute inset-0" style={{ background: "rgba(17,17,17,0.62)" }} />
        </div>

        {/* Nav — só data, sem logo (logo vai pro centro) */}
        <nav className="relative z-10 flex items-center justify-end px-6 md:px-16 pt-8 pb-0">
          <span
            className="hidden md:block text-[10px] uppercase tracking-[0.32em]"
            style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-barlow)" }}
          >
            Maio · 2025
          </span>
        </nav>

        {/* Content — centralizado */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 md:px-16 pb-16 text-center">

          {/* Logo acima do título */}
          <Image
            src="/logo.png"
            alt="As Três Bases"
            width={260}
            height={58}
            className="brightness-0 invert mb-2 anim-fade-in"
            style={{ opacity: 0, animationDelay: "0s", animationFillMode: "forwards" }}
          />

          <p
            className="text-[11px] uppercase tracking-[0.3em] font-semibold mb-3 anim-fade-in"
            style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-barlow)", opacity: 0, animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            21 de Maio · Centro de Convenções de Vitória
          </p>

          <div
            className="flex items-center gap-3 mb-7 anim-fade-up"
            style={{ animationDelay: "0.25s" }}
          >
            <span
              className="h-px w-5 flex-shrink-0 anim-line"
              style={{ background: "linear-gradient(to right, #4B8EDB, #C84B1F)", animationDelay: "0.5s" }}
            />
            <p
              className="text-[10px] uppercase tracking-[0.35em] font-semibold"
              style={{ color: "#ffffff", fontFamily: "var(--font-barlow)" }}
            >
              Lista VIP · Save the Date
            </p>
            <span
              className="h-px w-5 flex-shrink-0 anim-line"
              style={{ background: "linear-gradient(to left, #4B8EDB, #C84B1F)", animationDelay: "0.5s" }}
            />
          </div>

          <h1
            className="font-extrabold uppercase leading-[0.92] mb-6 anim-fade-up"
            style={{
              fontFamily: "var(--font-barlow-condensed)",
              fontSize: "clamp(2.6rem, 6vw, 4.8rem)",
              color: "white",
              animationDelay: "0.4s",
            }}
          >
            Entre para
            <br />a Lista VIP
            <br />
            <span
              style={{
                background: "linear-gradient(to right, #4B8EDB, #9B4CB8, #C84B1F)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              As Três Bases.
            </span>
          </h1>

          <p
            className="text-base md:text-lg leading-relaxed mb-10 max-w-md anim-fade-up"
            style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-barlow)", animationDelay: "0.58s" }}
          >
            O encontro para quem quer clareza, direção e aplicação —{" "}
            e prefere{" "}
            <strong style={{ color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>
              método a modismo.
            </strong>
          </p>

          <a
            href="#inscricao"
            className="inline-flex items-center gap-3 font-bold uppercase tracking-widest text-[11px] px-8 py-3.5 transition-colors duration-150 bg-[#C84B1F] hover:bg-[#B33F18] text-white anim-fade-up"
            style={{ fontFamily: "var(--font-barlow)", animationDelay: "0.72s" }}
          >
            Quero entrar na Lista VIP <span>→</span>
          </a>
        </div>

        <div
          className="absolute bottom-0 inset-x-0 h-28 pointer-events-none"
          style={{ background: `linear-gradient(to top, ${BG}, transparent)` }}
        />
      </section>


      {/* ── FAIXA CONTEXTO ───────────────────────────────────────── */}
      <section
        className="anim-fade-in"
        style={{
          background: "rgba(85, 85, 85, 0.03)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          animationDelay: "1s",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 md:px-16 py-10 md:py-12">
          <p
            className="text-base md:text-xl leading-relaxed font-light text-center"
            style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-barlow)" }}
          >
            O empresário hoje vive cercado por{" "}
            <span style={{ color: "rgba(255,255,255,0.88)", fontWeight: 600 }}>excesso de conteúdo</span>
            {" "}e{" "}
            <span style={{ color: "rgba(255,255,255,0.88)", fontWeight: 600 }}>pouca direção.</span>
            {" "}
            <span style={{ color: "rgba(253, 253, 253, 0.6)" }}>
              As Três Bases existe para devolver estrutura ao que importa:{" "}
            </span>
            <span style={{ color: "#C84B1F", fontWeight: 600 }}>Liderança, Gestão e Mercado</span>
            <span style={{ color: "rgba(255, 255, 255, 0.56)", fontStyle: "italic" }}>{" "}— na ordem certa.</span>
          </p>
        </div>
      </section>


{/* ── BENEFÍCIOS ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: BG }}>
        <div className="max-w-5xl mx-auto px-6 md:px-16 pt-20 md:pt-28 pb-20 md:pb-28">

          {/* Cabeçalho da seção */}
          <div
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.18)" }}
          >
            <p
              className="text-sm uppercase tracking-[0.3em] font-semibold"
              style={{ color: "rgba(255,255,255,0.88)", fontFamily: "var(--font-barlow)" }}
            >
              Lista VIP
            </p>
            <h2
              className="font-extrabold uppercase leading-[0.88] text-right"
              style={{
                fontFamily: "var(--font-barlow-condensed)",
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                color: "rgba(255,255,255,0.88)",
              }}
            >
              O que você garante
              <br />
              <span style={{ color: "#C84B1F" }}>ao entrar agora</span>
            </h2>
          </div>

          {/* Grid 2×2 */}
          <div
            className="grid md:grid-cols-2"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.18)" }}
          >
            {[
              {
                title: "Informação em primeira mão",
                text: "Você é o primeiro a saber das atualizações oficiais do evento — antes de qualquer anúncio público.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="g1" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#4B8EDB"/>
                        <stop offset="50%" stopColor="#9B4CB8"/>
                        <stop offset="100%" stopColor="#C84B1F"/>
                      </linearGradient>
                    </defs>
                    <path d="M14 3C14 3 7 8 7 15.5C7 19.09 10.13 22 14 22C17.87 22 21 19.09 21 15.5C21 8 14 3 14 3Z" stroke="url(#g1)" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M14 22V25" stroke="url(#g1)" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M11 25H17" stroke="url(#g1)" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="14" cy="15" r="2" fill="url(#g1)" fillOpacity="0.5"/>
                  </svg>
                ),
              },
              {
                title: "Prioridade no lançamento",
                text: "Acesso ao lote de abertura antes do público geral, com a melhor posição de compra disponível.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="g2" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#4B8EDB"/>
                        <stop offset="50%" stopColor="#9B4CB8"/>
                        <stop offset="100%" stopColor="#C84B1F"/>
                      </linearGradient>
                    </defs>
                    <path d="M14 4L17.5 11.5L26 12.5L20 18.5L21.5 26L14 22L6.5 26L8 18.5L2 12.5L10.5 11.5L14 4Z" stroke="url(#g2)" strokeWidth="1.5" strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                title: "Condição especial de pré-venda",
                text: "Uma condição real, limitada e legítima — para quem decidiu antes dos outros.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="g3" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#4B8EDB"/>
                        <stop offset="50%" stopColor="#9B4CB8"/>
                        <stop offset="100%" stopColor="#C84B1F"/>
                      </linearGradient>
                    </defs>
                    <rect x="3" y="8" width="22" height="14" rx="1.5" stroke="url(#g3)" strokeWidth="1.5"/>
                    <path d="M3 13H25" stroke="url(#g3)" strokeWidth="1.5"/>
                    <path d="M8 17H12" stroke="url(#g3)" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M8 6L8 10" stroke="url(#g3)" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M20 6L20 10" stroke="url(#g3)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                title: "Grupo VIP no WhatsApp",
                text: "Comunicados diretos, sem ruído. Só o que importa, quando importa.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="g4" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#4B8EDB"/>
                        <stop offset="50%" stopColor="#9B4CB8"/>
                        <stop offset="100%" stopColor="#C84B1F"/>
                      </linearGradient>
                    </defs>
                    <path d="M4 4H24V20H16L10 24V20H4V4Z" stroke="url(#g4)" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M9 12H19" stroke="url(#g4)" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M9 8H15" stroke="url(#g4)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="relative p-8 md:p-10 flex flex-col gap-8"
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.18)",
                  borderRight: i % 2 === 0 ? "1px solid rgba(255,255,255,0.18)" : undefined,
                  minHeight: "220px",
                }}
              >
                {/* Ícone */}
                <div
                  className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(75,142,219,0.06), rgba(200,75,31,0.06))",
                    border: "1px solid rgba(155,76,184,0.25)",
                  }}
                >
                  {item.icon}
                </div>

                {/* Conteúdo */}
                <div>
                  <p
                    className="font-bold uppercase leading-tight mb-3"
                    style={{
                      fontFamily: "var(--font-barlow-condensed)",
                      fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)",
                      color: "rgba(255,255,255,0.88)",
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.38)", fontFamily: "var(--font-barlow)" }}
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ── PARA QUEM É ──────────────────────────────────────────── */}
      <section style={{ background: "#0D0D0D", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-5xl mx-auto px-6 md:px-16 py-20 md:py-28">

          {/* Título */}
          <div className="mb-16">
            <p
              className="text-[9px] uppercase tracking-[0.4em] font-semibold mb-4"
              style={{ color: "rgba(233, 233, 233, 0.76)", fontFamily: "var(--font-barlow)" }}
            >
              Critério
            </p>
            <h2
              className="font-extrabold uppercase leading-[0.9]"
              style={{
                fontFamily: "var(--font-barlow-condensed)",
                fontSize: "clamp(2.8rem, 6vw, 5rem)",
                color: "rgba(255,255,255,0.92)",
              }}
            >
              A Lista VIP
              <br />
              <span style={{ color: "#C84B1F" }}>é para:</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-0">

            {/* COLUNA ESQUERDA — Para quem É */}
            <div className="md:pr-16 pb-14 md:pb-0" style={{ borderRight: "1px solid rgba(255,255,255,0.08)" }}>
              <p
                className="text-sm uppercase tracking-[0.3em] font-semibold mb-8"
                style={{ color: "#ffffff", fontFamily: "var(--font-barlow)" }}
              >
                — Para quem é
              </p>

              <ul className="flex flex-col">
                {[
                  {
                    text: "Empresários, diretores e profissionais que ocupam cargos de lideranças",
                    icon: (
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <rect x="3" y="8" width="16" height="11" rx="1.5" stroke="#C84B1F" strokeWidth="1.4"/>
                        <path d="M7 8V6a4 4 0 0 1 8 0v2" stroke="#C84B1F" strokeWidth="1.4" strokeLinecap="round"/>
                        <circle cx="11" cy="13.5" r="1.5" fill="#C84B1F" fillOpacity="0.6"/>
                      </svg>
                    ),
                  },
                  {
                    text: "Empreendedores e times de alta performance",
                    icon: (
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <circle cx="11" cy="11" r="8" stroke="#C84B1F" strokeWidth="1.4"/>
                        <circle cx="11" cy="11" r="4" stroke="#C84B1F" strokeWidth="1.4" strokeOpacity="0.5"/>
                        <circle cx="11" cy="11" r="1.5" fill="#C84B1F"/>
                      </svg>
                    ),
                  },
                  {
                    text: "Quem busca excelência de dentro pra fora e um plano claro de negócios",
                    icon: (
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M11 2L13.5 8.5H20.5L14.5 12.5L16.5 19L11 15L5.5 19L7.5 12.5L1.5 8.5H8.5L11 2Z" stroke="#C84B1F" strokeWidth="1.4" strokeLinejoin="round"/>
                      </svg>
                    ),
                  },
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-5 py-6"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <span
                      className="flex-shrink-0 mt-0.5 flex items-center justify-center w-9 h-9"
                      style={{
                        background: "rgba(200,75,31,0.07)",
                        border: "1px solid rgba(200,75,31,0.18)",
                      }}
                    >
                      {item.icon}
                    </span>
                    <p
                      className="font-semibold leading-snug"
                      style={{
                        fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                        color: "rgba(255,255,255,0.92)",
                        fontFamily: "var(--font-barlow)",
                      }}
                    >
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUNA DIREITA — Para quem NÃO é */}
            <div className="md:pl-16 pt-14 md:pt-0">
              <p
                className="text-sm uppercase tracking-[0.3em] font-semibold mb-2"
                style={{ color: "rgb(255, 255, 255)", fontFamily: "var(--font-barlow)" }}
              >
                — Para quem não é
              </p>
              <p
                className="text-sm mb-8"
                style={{ color: "rgb(255, 255, 255)", fontFamily: "var(--font-barlow)" }}
              >
                Se você busca:
              </p>

              <ul className="flex flex-col mb-0">
                {[
                  'Atalhos, fórmulas rápidas e "segredos"',
                  "Inspiração vazia",
                  "Evento genérico",
                ].map((text, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-5 py-6"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <span
                      className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full"
                      style={{ background: "rgba(200,75,31,0.12)", border: "1px solid rgba(200,75,31,0.35)" }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <line x1="2" y1="2" x2="8" y2="8" stroke="#C84B1F" strokeWidth="1.5" strokeLinecap="round"/>
                        <line x1="8" y1="2" x2="2" y2="8" stroke="#C84B1F" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </span>
                    <span
                      className="font-semibold line-through"
                      style={{
                        fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                        color: "rgba(255,255,255,0.45)",
                        textDecorationColor: "rgba(200,75,31,0.35)",
                        fontFamily: "var(--font-barlow)",
                      }}
                    >
                      {text}
                    </span>
                  </li>
                ))}
              </ul>

              <div
                className="mt-10 px-6 py-5"
                style={{ background: "rgba(200,75,31,0.07)", borderLeft: "2px solid #C84B1F" }}
              >
                <p
                  className="font-medium leading-relaxed"
                  style={{ fontSize: "clamp(0.9rem, 1.4vw, 1rem)", color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-barlow)" }}
                >
                  Este não é o seu lugar.{" "}
                  <span style={{ color: "rgba(255,255,255,0.88)", fontWeight: 700 }}>
                    A Lista VIP é para quem já decidiu que quer mais estrutura, não mais conteúdo.
                  </span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      
      {/* ── CTA FINAL ────────────────────────────────────────────── */}
      <section 
        id="inscricao" 
        style={{ 
          // Mantemos o BG original como fallback e adicionamos a imagem com overlay
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url('/foto-palco3.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          
          backgroundColor: BG // Fallback caso a imagem falhe
        }}
      >
        <div className="max-w-5xl mx-auto px-6 md:px-16 py-24 md:py-32 text-center">
          <p
            className="font-bold uppercase leading-none mb-3"
            style={{
              fontFamily: "var(--font-barlow-condensed)",
              fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
              color: "rgba(255, 255, 255, 0.81)",
            }}
          >
            Não é sobre aprender mais.
          </p>
          <p
            className="font-extrabold uppercase leading-none mb-12"
            style={{
              fontFamily: "var(--font-barlow-condensed)",
              fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
              background: "linear-gradient(to right, #4B8EDB, #9B4CB8, #C84B1F)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            É sobre decidir melhor.
          </p>

          <p
            className="text-[10px] uppercase tracking-[0.4em] font-semibold mb-2"
            style={{ color: "#ffffff", fontFamily: "var(--font-barlow)" }}
          >
            As Três Bases — Maio
          </p>

          <p
            className="text-[10px] uppercase tracking-[0.3em] font-semibold mb-10"
            style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-barlow)" }}
          >
            21 de Maio · Centro de Convenções de Vitória
          </p>

          <a
            href="https://forms.kommo.com/rcwdzcz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-bold uppercase tracking-widest text-[11px] px-10 py-4 transition-colors duration-150 bg-[#C84B1F] hover:bg-[#B33F18] text-white"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Quero entrar na Lista VIP <span>→</span>
          </a>

          <p
            className="text-xs mt-8 leading-relaxed max-w-xs mx-auto"
            style={{ color: "rgba(236, 236, 236, 0.6)", fontFamily: "var(--font-barlow)" }} // Aumentei um pouco a opacidade para ler melhor sobre a foto
          >
            Após se inscrever, você será direcionado para o grupo VIP no WhatsApp.
            <br />
            <span style={{ color: "rgba(255,255,255,0.3)" }}>
              Sem spam. Só informações oficiais.
            </span>
          </p>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────── */}
      <footer
        className="py-7 px-6 md:px-16"
        style={{ background: "#0A0A0A", borderTop: "1px solid rgba(255,255,255,0.04)" }}
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Image
            src="/logo.png"
            alt="As Três Bases"
            width={200}
            height={20}
            className="brightness-0 invert"
            style={{ opacity: 1.18 }}
          />
          <p
            className="text-[20px] tracking-widest uppercase"
            style={{ color: "rgba(255, 255, 255, 0.93)", fontFamily: "var(--font-barlow)" }}
          >
            2026
          </p>
        </div>
      </footer>
    </main>
  );
}
