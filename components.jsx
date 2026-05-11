/* global React */
const { useState } = React;

const Icon = ({ name, size = 20, stroke = 2, color = 'currentColor', ...rest }) => {
  const c = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: stroke, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, ...rest };
  switch (name) {
    case 'phone':        return <svg {...c}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
    case 'map-pin':      return <svg {...c}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
    case 'clock':        return <svg {...c}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
    case 'star':         return <svg {...c} fill={color} stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
    case 'star-outline': return <svg {...c}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
    case 'arrow':        return <svg {...c}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;
    case 'arrow-up-r':   return <svg {...c}><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>;
    case 'check':        return <svg {...c}><polyline points="20 6 9 17 4 12"/></svg>;
    case 'whatsapp':     return <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>;
    case 'paint':        return <svg {...c}><path d="M19 11h2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3h2"/><path d="M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"/><path d="M9 16v3a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-3"/></svg>;
    case 'zap':          return <svg {...c}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
    case 'droplet':      return <svg {...c}><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>;
    case 'wrench':       return <svg {...c}><path d="m15 12-8.5 8.5a2.12 2.12 0 1 1-3-3L12 9"/><path d="M17.64 15 22 10.64"/><path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91"/></svg>;
    case 'brick':        return <svg {...c}><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>;
    case 'flower':       return <svg {...c}><circle cx="12" cy="12" r="3"/><path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5"/><path d="M12 7.5a4.5 4.5 0 1 0-4.5 4.5"/><path d="M12 16.5a4.5 4.5 0 1 1-4.5-4.5"/><path d="M12 16.5a4.5 4.5 0 1 0 4.5-4.5"/></svg>;
    case 'lock':         return <svg {...c}><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
    case 'sparkles':     return <svg {...c}><path d="M12 3v3"/><path d="M12 18v3"/><path d="M3 12h3"/><path d="M18 12h3"/><path d="m5.6 5.6 2.1 2.1"/><path d="m16.3 16.3 2.1 2.1"/><path d="m5.6 18.4 2.1-2.1"/><path d="m16.3 7.7 2.1-2.1"/></svg>;
    case 'award':        return <svg {...c}><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>;
    case 'shield-check': return <svg {...c}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>;
    default: return null;
  }
};

const TILE_PALETTE = ['#C8A8C8','#8B6F8B','#E0CFA8','#C9A878','#84B8C8','#E8DFC9','#C95C3F','#A66060','#8B7CA8','#6BA89C','#E8DFC9','#B83A2F'];

const TileStripe = ({ bg = '#0E4B80', tileH = 16, gap = 4 }) => (
  <div style={{ background: bg, padding: '10px 0', display: 'flex', gap }}>
    {TILE_PALETTE.concat(TILE_PALETTE.slice(0,4)).map((c, i) => (
      <div key={i} style={{ flex: 1, height: tileH, background: c, outline: '2px solid #FDFCF8' }} />
    ))}
  </div>
);

/* ── Open/Closed badge ── */
const useOpenStatus = () => {
  const [now, setNow] = useState(new Date());
  React.useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(t);
  }, []);
  const uy = new Date(now.getTime() + (now.getTimezoneOffset() - 180) * 60000);
  const day = uy.getDay();
  const minutes = uy.getHours() * 60 + uy.getMinutes();
  let open = false, label = 'Cerrado · abre mañana';
  if (day >= 1 && day <= 5) {
    if (minutes >= 510 && minutes < 1170) { open = true; label = 'Abierto ahora · cierra a las 19:30'; }
    else if (minutes < 510) label = 'Cerrado · abre a las 8:30';
    else label = day === 5 ? 'Cerrado · abre sábado a las 9' : 'Cerrado · abre a las 8:30';
  } else if (day === 6) {
    if (minutes >= 540 && minutes < 840) { open = true; label = 'Abierto ahora · cierra a las 14'; }
    else if (minutes < 540) label = 'Cerrado · abre a las 9';
    else label = 'Cerrado · abre lunes 8:30';
  } else { label = 'Cerrado · abre lunes a las 8:30'; }
  return { open, label };
};

const OpenBadge = ({ dark = false }) => {
  const { open, label } = useOpenStatus();
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 12px 6px 10px', background: dark ? 'rgba(255,255,255,0.08)' : '#F8F4EA', border: `1px solid ${dark ? 'rgba(255,255,255,0.18)' : '#E3DACA'}`, borderRadius: 999, fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 11.5, letterSpacing: '0.06em', color: dark ? '#FDFCF8' : '#1A1410' }}>
      <span style={{ position: 'relative', display: 'inline-flex' }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: open ? '#2F7A3C' : '#B83A1F' }} />
        {open && <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#2F7A3C', animation: 'pulse 2s ease-out infinite' }} />}
      </span>
      <span style={{ textTransform: 'uppercase' }}>{label}</span>
    </span>
  );
};

/* ── NavBar ── */
const NavBar = () => (
  <div style={{ position: 'sticky', top: 0, zIndex: 100, background: '#FDFCF8' }}>
    <div style={navStyles.ticker} className="v2-ticker">
      <span style={navStyles.tickerItem}>POCITOS · MONTEVIDEO</span>
      <span style={navStyles.tickerDot} />
      <span style={navStyles.tickerItem}>FUNDADA EN 1961</span>
      <span style={navStyles.tickerDot} />
      <span style={navStyles.tickerItem}>LUN A VIE 8:30 – 19:30 · SÁB 9 – 14</span>
      <span style={navStyles.tickerDot} />
      <span style={navStyles.tickerItem}>2709 2414</span>
      <span style={navStyles.tickerDot} />
      <span style={navStyles.tickerItem}>WHATSAPP 099 913 909</span>
    </div>
    <nav style={navStyles.nav} className="v2-nav">
      <a href="#" style={navStyles.brand}>
        <img src="./logo.svg" alt="Achalay" style={{ width: 52, height: 52 }} />
        <div>
          <div style={navStyles.brandName}>Achalay</div>
          <div style={navStyles.brandSub}>FERRETERÍA · PEDRO F. BERRO 1174</div>
        </div>
      </a>
      <div style={navStyles.links} className="v2-nav-links">
        <a href="#rubros" style={navStyles.link}>Rubros</a>
        <a href="#historia" style={navStyles.link}>Historia</a>
        <a href="#resenas" style={navStyles.link}>Reseñas</a>
        <a href="#contacto" style={navStyles.link}>Contacto</a>
      </div>
      <a href="https://wa.me/59899913909" style={navStyles.cta}>
        <Icon name="whatsapp" size={16} color="#F07820" />
        <span>Escribinos</span>
        <span style={navStyles.ctaArrow}><Icon name="arrow" size={14} color="#F07820" stroke={2.5} /></span>
      </a>
    </nav>
  </div>
);

const navStyles = {
  ticker: { background: '#1A1410', color: '#F0E9D8', padding: '8px 24px', fontFamily: "'Archivo', sans-serif", fontWeight: 600, fontSize: 11, letterSpacing: '0.16em', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, overflow: 'hidden', whiteSpace: 'nowrap' },
  tickerItem: { flexShrink: 0 },
  tickerDot: { width: 4, height: 4, borderRadius: '50%', background: '#F07820', flexShrink: 0 },
  nav: { borderBottom: '1px solid #E3DACA', padding: '14px clamp(20px, 4vw, 40px)', display: 'grid', gridTemplateColumns: 'auto 1fr auto', alignItems: 'center', gap: 24 },
  brand: { display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none' },
  brandName: { fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: 26, letterSpacing: '-0.02em', color: '#1A1410', lineHeight: 1 },
  brandSub: { fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 10, letterSpacing: '0.16em', color: '#7A6E62', marginTop: 5 },
  links: { display: 'flex', justifyContent: 'center', gap: 32 },
  link: { fontFamily: "'Archivo', sans-serif", fontWeight: 600, fontSize: 14, color: '#1A1410', textDecoration: 'none' },
  cta: { background: '#1565A8', color: '#F07820', fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 14, padding: '12px 8px 12px 18px', borderRadius: 4, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10 },
  ctaArrow: { background: '#FDFCF8', width: 28, height: 28, borderRadius: 2, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginLeft: 4 },
};

/* ── Hero ── */
const Hero = () => (
  <section style={heroStyles.section}>
    <div style={heroStyles.grid} className="v2-hero-grid">
      <div style={heroStyles.left}>
        <div style={heroStyles.metaRow}>
          <OpenBadge />
          <span style={heroStyles.metaLine} />
          <span style={heroStyles.year}>EST. 1961</span>
        </div>
        <h1 style={heroStyles.title}>
          <span style={heroStyles.line1}>Ferretería</span>
          <span style={heroStyles.line2}>
            <span style={{ color: '#1565A8' }}>de</span>
            <span style={heroStyles.amp}>&amp;</span>
            <span style={{ color: '#F07820' }}>barrio</span>
          </span>
          <span style={heroStyles.line3}>desde hace</span>
          <span style={heroStyles.line4}>seis décadas</span>
        </h1>
        <div style={heroStyles.body}>
          <p style={heroStyles.lead}>
            Herramientas, pintura, plomería, electricidad y todo lo que un proyecto necesita. En Pedro F.&nbsp;Berro desde que esto era barrio de tranvías.
          </p>
          <div style={heroStyles.actions}>
            <a href="https://wa.me/59899913909" style={heroStyles.btnPrimary}>
              <Icon name="whatsapp" size={18} color="#F07820" />
              <span>Consultá por WhatsApp</span>
            </a>
            <a href="#contacto" style={heroStyles.btnGhost}>
              Cómo llegar <Icon name="arrow" size={15} stroke={2.5} />
            </a>
          </div>
        </div>
      </div>
      <div style={heroStyles.right}>
        <div style={heroStyles.photoWrap}>
          <img src="./foto-fachada.jpg" alt="Fachada de Ferretería Achalay en Pedro F. Berro" style={heroStyles.photo} />
          <div style={heroStyles.photoBadge}>
            <div style={heroStyles.photoBadgeTop}>EL LOCAL</div>
            <div style={heroStyles.photoBadgeBig}>1174</div>
            <div style={heroStyles.photoBadgeBot}>Pedro F. Berro</div>
          </div>
          <div style={heroStyles.photoTag}>
            <Icon name="map-pin" size={14} color="#F07820" />
            <span>Pocitos · Montevideo</span>
          </div>
        </div>
        <div style={heroStyles.gridStats}>
          <div style={heroStyles.stat}>
            <div style={heroStyles.statNum}>65<span style={heroStyles.statSub}>años</span></div>
            <div style={heroStyles.statLbl}>Atendiendo al barrio</div>
          </div>
          <div style={heroStyles.stat}>
            <div style={heroStyles.statNum}>4.4<span style={heroStyles.statStar}><Icon name="star" size={20} color="#F07820"/></span></div>
            <div style={heroStyles.statLbl}>234 reseñas Google</div>
          </div>
          <div style={heroStyles.stat}>
            <div style={heroStyles.statNum}>8<span style={heroStyles.statSub}>rubros</span></div>
            <div style={heroStyles.statLbl}>Bajo un mismo techo</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const heroStyles = {
  section: { background: '#FDFCF8', padding: 'clamp(40px, 6vw, 72px) clamp(20px, 4vw, 40px) 0' },
  grid: { maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 'clamp(28px, 4vw, 56px)', alignItems: 'start' },
  left: { paddingTop: 12 },
  metaRow: { display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 },
  year: { fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 12, letterSpacing: '0.18em', color: '#F07820' },
  metaLine: { flex: '0 0 48px', height: 1, background: '#C9BFA9' },
  title: { display: 'block', fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: 'clamp(56px, 8vw, 124px)', lineHeight: 0.92, letterSpacing: '-0.035em', color: '#1A1410', margin: 0 },
  line1: { display: 'block' },
  line2: { display: 'flex', alignItems: 'center', gap: 14 },
  amp: { fontFamily: "'Libre Franklin', sans-serif", fontStyle: 'italic', fontWeight: 400, fontSize: '0.55em', color: '#7A6E62', marginTop: '-0.05em' },
  line3: { display: 'block', fontFamily: "'Libre Franklin', sans-serif", fontStyle: 'italic', fontWeight: 400, fontSize: '0.42em', color: '#4A3F36', letterSpacing: '-0.005em', marginTop: 18, paddingLeft: 6 },
  line4: { display: 'block', fontStyle: 'italic', fontFamily: "'Libre Franklin', sans-serif", fontWeight: 400, fontSize: '0.58em', color: '#1A1410', letterSpacing: '-0.01em', paddingLeft: 6, marginTop: 2 },
  body: { marginTop: 36, maxWidth: 460 },
  lead: { fontFamily: "'Libre Franklin', sans-serif", fontSize: 17, lineHeight: 1.6, color: '#4A3F36', marginBottom: 24 },
  actions: { display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' },
  btnPrimary: { background: '#1565A8', color: '#F07820', textDecoration: 'none', padding: '14px 22px', borderRadius: 4, fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 15, display: 'inline-flex', alignItems: 'center', gap: 10 },
  btnGhost: { color: '#1A1410', textDecoration: 'none', fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: '0.02em', display: 'inline-flex', alignItems: 'center', gap: 8, borderBottom: '1.5px solid #1A1410', paddingBottom: 2 },
  right: { position: 'relative' },
  photoWrap: { position: 'relative', borderRadius: 6, overflow: 'hidden', aspectRatio: '4/5' },
  photo: { width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'contrast(1.03) saturate(1.05)' },
  photoBadge: { position: 'absolute', top: 20, left: 20, background: '#F07820', color: 'white', padding: '10px 14px', borderRadius: 4, boxShadow: '4px 4px 0 #1A1410', textAlign: 'center' },
  photoBadgeTop: { fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 9.5, letterSpacing: '0.18em' },
  photoBadgeBig: { fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: 32, lineHeight: 1, letterSpacing: '-0.02em', margin: '2px 0' },
  photoBadgeBot: { fontFamily: "'Libre Franklin', sans-serif", fontStyle: 'italic', fontSize: 11, lineHeight: 1 },
  photoTag: { position: 'absolute', bottom: 16, left: 16, background: '#FDFCF8', padding: '7px 12px', borderRadius: 999, display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.08em', color: '#1A1410' },
  gridStats: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: '#E3DACA', border: '1px solid #E3DACA', borderRadius: 6, overflow: 'hidden', marginTop: 14 },
  stat: { background: '#FDFCF8', padding: '16px 14px' },
  statNum: { fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: 36, lineHeight: 1, color: '#1A1410', display: 'flex', alignItems: 'baseline', gap: 6 },
  statSub: { fontFamily: "'Libre Franklin', sans-serif", fontStyle: 'italic', fontWeight: 400, fontSize: 13, color: '#7A6E62' },
  statStar: { display: 'inline-flex', alignSelf: 'center' },
  statLbl: { fontFamily: "'Archivo', sans-serif", fontWeight: 600, fontSize: 11.5, letterSpacing: '0.06em', color: '#4A3F36', marginTop: 8 },
};

/* ── Section header ── */
const SectionHeader = ({ num, kicker, title, lead, align = 'left', titleColor = '#1A1410' }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: align === 'center' ? 'center' : 'flex-start', textAlign: align, gap: 14, marginBottom: 36, maxWidth: align === 'center' ? 720 : '100%', marginLeft: align === 'center' ? 'auto' : 0, marginRight: align === 'center' ? 'auto' : 0 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <span style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 12, letterSpacing: '0.2em', color: '#F07820' }}>{num}</span>
      <span style={{ width: 28, height: 1, background: '#C9BFA9' }} />
      <span style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: '0.18em', color: '#1565A8', textTransform: 'uppercase' }}>{kicker}</span>
    </div>
    <h2 style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: 'clamp(36px, 4.5vw, 60px)', lineHeight: 1.0, letterSpacing: '-0.025em', color: titleColor, margin: 0 }}>{title}</h2>
    {lead && <p style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: 17, lineHeight: 1.65, color: titleColor === '#FDFCF8' ? '#E0CFA8' : '#4A3F36', margin: 0, maxWidth: 580 }}>{lead}</p>}
  </div>
);

/* ── Trust band ── */
const TrustBand = () => {
  const items = [
    { kicker: 'Trayectoria', value: '65', unit: 'años',   desc: 'Tres generaciones en el mismo local de Pedro F. Berro.' },
    { kicker: 'Reseñas',     value: '4.4', unit: '/5',    desc: '234 opiniones reales de vecinos en Google Maps.' },
    { kicker: 'Horario',     value: '11', unit: 'h/día',  desc: 'Abiertos lunes a viernes 8:30 – 19:30, sábados hasta las 14.' },
    { kicker: 'Stock',       value: '8',  unit: 'rubros', desc: 'De la canilla que pierde al adhesivo que falta para terminar la obra.' },
  ];
  return (
    <section style={{ background: '#0E4B80', color: 'white' }}>
      <TileStripe bg="#0E4B80" tileH={14} />
      <div style={{ padding: 'clamp(48px, 6vw, 80px) clamp(20px, 4vw, 40px)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }} className="v2-trust-grid">
            {items.map((it, i) => (
              <div key={i} style={{ padding: '0 28px', borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.15)' }}>
                <div style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.2em', color: '#F07820', textTransform: 'uppercase', marginBottom: 12 }}>{it.kicker}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 12 }}>
                  <div style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: 80, lineHeight: 0.85, letterSpacing: '-0.04em', color: 'white' }}>{it.value}</div>
                  <div style={{ fontFamily: "'Libre Franklin', sans-serif", fontStyle: 'italic', fontSize: 18, color: '#A8D0E8' }}>{it.unit}</div>
                </div>
                <p style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: 14, lineHeight: 1.55, color: '#D4E3F0', margin: 0 }}>{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── Categories ── */
const Categories = () => {
  const cats = [
    { icon: 'paint',    name: 'Pintura',      brands: 'Sinteplast · Rex · Alba',          stock: '120+ tonos' },
    { icon: 'zap',      name: 'Electricidad', brands: 'Cables · tableros · llaves',       stock: '60+ referencias' },
    { icon: 'droplet',  name: 'Plomería',     brands: 'Grifería · sellos · caños',        stock: '90+ referencias' },
    { icon: 'brick',    name: 'Construcción', brands: 'Adhesivos · membranas · yeso',     stock: 'A pedido' },
    { icon: 'flower',   name: 'Jardín',       brands: 'Regaderas · mangueras · tijeras',  stock: 'Por temporada' },
    { icon: 'lock',     name: 'Cerrajería',   brands: 'Cerraduras · candados · bisagras', stock: '40+ referencias' },
    { icon: 'sparkles', name: 'Limpieza',     brands: 'Artículos para el hogar',          stock: 'Marcas locales' },
  ];
  return (
    <section id="rubros" style={{ background: '#FDFCF8', padding: 'clamp(64px, 8vw, 112px) clamp(20px, 4vw, 40px)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionHeader num="01" kicker="Lo que encontrás" title={<>Todo lo que el oficio<br/>necesita, en un solo lugar.</>} lead="Ocho rubros, stock permanente y la atención de alguien que sabe explicarte qué tornillo va, sin venderte lo que no necesitás." />
        <div style={catStyles.grid} className="v2-cat-grid">
          <a href="#contacto" style={catStyles.featureCard}>
            <div style={catStyles.featureLabel}>HERRAMIENTAS</div>
            <div style={catStyles.featureTitle}>De mano,<br/>eléctricas<br/>&amp; <i>STIHL</i>.</div>
            <div style={catStyles.featureFoot}>
              <span>Marcas profesionales</span>
              <Icon name="arrow-up-r" size={20} stroke={2} color="#F07820" />
            </div>
            <div style={catStyles.featureIcon}><Icon name="wrench" size={120} stroke={1.5} color="rgba(255,255,255,0.15)" /></div>
          </a>
          {cats.map((c, i) => (
            <a key={i} href="#contacto" style={catStyles.card}>
              <div style={catStyles.cardTop}>
                <div style={catStyles.cardIco}><Icon name={c.icon} size={26} stroke={1.8} color="#1565A8" /></div>
                <div style={catStyles.cardArrow}><Icon name="arrow-up-r" size={16} stroke={2} color="#7A6E62" /></div>
              </div>
              <div style={catStyles.cardName}>{c.name}</div>
              <div style={catStyles.cardBrands}>{c.brands}</div>
              <div style={catStyles.cardStock}>{c.stock}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const catStyles = {
  grid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridAutoRows: 'minmax(190px, auto)', gap: 14 },
  featureCard: { gridColumn: 'span 2', gridRow: 'span 2', background: '#1A1410', color: 'white', padding: '28px 28px 24px', borderRadius: 6, textDecoration: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' },
  featureLabel: { fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.22em', color: '#F07820', position: 'relative', zIndex: 1 },
  featureTitle: { fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: 'clamp(40px, 4.5vw, 64px)', lineHeight: 0.95, letterSpacing: '-0.03em', position: 'relative', zIndex: 1, margin: '12px 0' },
  featureFoot: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.18)', paddingTop: 18, fontFamily: "'Libre Franklin', sans-serif", fontStyle: 'italic', fontSize: 14, color: '#E0CFA8', position: 'relative', zIndex: 1 },
  featureIcon: { position: 'absolute', right: -20, top: -10, transform: 'rotate(-15deg)' },
  card: { background: '#F8F4EA', borderRadius: 6, padding: '18px 18px 16px', textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: 6, position: 'relative', border: '1px solid #E3DACA' },
  cardTop: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 },
  cardIco: { width: 44, height: 44, borderRadius: 4, background: '#FDFCF8', border: '1px solid #E3DACA', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  cardArrow: { opacity: 0.5 },
  cardName: { fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: 22, lineHeight: 1, letterSpacing: '-0.01em', color: '#1A1410' },
  cardBrands: { fontFamily: "'Libre Franklin', sans-serif", fontSize: 13, color: '#4A3F36', lineHeight: 1.4 },
  cardStock: { marginTop: 'auto', paddingTop: 10, fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 10.5, letterSpacing: '0.14em', color: '#F07820', textTransform: 'uppercase' },
};

/* ── About ── */
const About = () => (
  <section id="historia" style={{ background: '#F8F4EA' }}>
    <TileStripe bg="#F8F4EA" tileH={12} />
    <div style={{ padding: 'clamp(72px, 9vw, 120px) clamp(20px, 4vw, 40px)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={aboutStyles.grid} className="v2-about-grid">
          <div style={aboutStyles.left} className="v2-about-left">
            <SectionHeader num="02" kicker="Nuestra historia" title={<>Pedro F. Berro,<br/>esquina de siempre.</>} />
            <p style={aboutStyles.lead}>
              Abrimos en <strong>1961</strong>, cuando Pocitos todavía tenía obras nuevas en cada cuadra y los albañiles cruzaban a comprar tornillos sueltos. Sesenta y cinco años después, seguimos en el mismo local.
            </p>
            <p style={aboutStyles.body}>
              No somos una cadena. No tenemos catálogo online infinito. Lo que tenemos es lo que la gente del barrio nos pide hace décadas: stock real de las marcas que se usan en serio, y alguien atrás del mostrador que distingue un tornillo Phillips de un Pozidriv.
            </p>
            <ul style={aboutStyles.list}>
              {[
                ['Atención', 'Te explican qué necesitás antes de cobrarte.'],
                ['Stock', 'Marcas profesionales, no las del supermercado.'],
                ['Servicio', 'Respondemos consultas por WhatsApp en el día.'],
              ].map(([k, v], i) => (
                <li key={i} style={aboutStyles.li}>
                  <span style={aboutStyles.liNum}>0{i+1}</span>
                  <div>
                    <div style={aboutStyles.liK}>{k}</div>
                    <div style={aboutStyles.liV}>{v}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div style={aboutStyles.right}>
            <div style={aboutStyles.bigPhoto}>
              <img src="./foto-interior.jpg" alt="Interior de Ferretería Achalay" style={aboutStyles.img} />
              <div style={aboutStyles.pullQuote}>
                <span style={aboutStyles.pullMark}>"</span>
                <p style={aboutStyles.pullTxt}>Venís con el problema. Te vas con la solución.</p>
                <div style={aboutStyles.pullSig}>— Una promesa, no un slogan</div>
              </div>
            </div>
            <div style={aboutStyles.smallPhotoRow}>
              <div style={aboutStyles.smallPhoto}>
                <img src="./foto-fachada.jpg" alt="Fachada azul ornamentada del local" style={aboutStyles.img} />
                <div style={aboutStyles.smallCap}>LA FACHADA ICÓNICA</div>
              </div>
              <div style={aboutStyles.smallPhoto}>
                <img src="./foto-exterior-cartel.jpg" alt="Cartel de Ferretería Achalay" style={aboutStyles.img} />
                <div style={aboutStyles.smallCap}>60 AÑOS EN EL BARRIO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const aboutStyles = {
  grid: { display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' },
  left: { position: 'sticky', top: 100 },
  lead: { fontFamily: "'Libre Franklin', sans-serif", fontSize: 19, lineHeight: 1.6, color: '#1A1410', margin: '0 0 16px' },
  body: { fontFamily: "'Libre Franklin', sans-serif", fontSize: 16, lineHeight: 1.7, color: '#4A3F36', margin: '0 0 32px' },
  list: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 18, borderTop: '1px solid #C9BFA9', paddingTop: 24 },
  li: { display: 'flex', gap: 18, alignItems: 'baseline' },
  liNum: { fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 12, letterSpacing: '0.2em', color: '#F07820', flexShrink: 0 },
  liK: { fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: 18, color: '#1A1410', marginBottom: 3 },
  liV: { fontFamily: "'Libre Franklin', sans-serif", fontSize: 14.5, color: '#4A3F36', lineHeight: 1.5 },
  right: { display: 'flex', flexDirection: 'column', gap: 14 },
  bigPhoto: { position: 'relative', borderRadius: 6, overflow: 'hidden', aspectRatio: '4/4.4' },
  img: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
  pullQuote: { position: 'absolute', left: 24, right: 24, bottom: 24, background: '#F07820', color: 'white', padding: '22px 26px 20px', borderRadius: 4, boxShadow: '5px 5px 0 rgba(26,20,16,0.85)' },
  pullMark: { fontFamily: 'Georgia, serif', fontSize: 56, lineHeight: 0.5, position: 'absolute', top: 30, left: 18, opacity: 0.6 },
  pullTxt: { fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: 22, lineHeight: 1.15, letterSpacing: '-0.01em', margin: '0 0 8px 28px' },
  pullSig: { fontFamily: "'Libre Franklin', sans-serif", fontStyle: 'italic', fontSize: 12, opacity: 0.9, marginLeft: 28 },
  smallPhotoRow: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 },
  smallPhoto: { position: 'relative', borderRadius: 6, overflow: 'hidden', aspectRatio: '4/3' },
  smallCap: { position: 'absolute', bottom: 10, left: 10, background: '#1A1410', color: '#F0E9D8', padding: '5px 10px', borderRadius: 2, fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 9.5, letterSpacing: '0.16em' },
};

/* ── Reviews ── */
const Reviews = () => (
  <section id="resenas" style={{ background: '#FDFCF8', padding: 'clamp(72px, 9vw, 120px) clamp(20px, 4vw, 40px)' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <SectionHeader num="03" kicker="Lo que dicen" title={<>Reseñas de vecinos<br/>y profesionales.</>} lead="Más de doscientos clientes nos puntuaron en Google Maps. Acá un par de cosas que escribieron." />
      <div style={revStyles.layout} className="v2-rev-layout">
        <div style={revStyles.scoreCard}>
          <div style={revStyles.scoreTop}>EN GOOGLE MAPS</div>
          <div style={revStyles.scoreBig} className="v2-score-big">4.4</div>
          <div style={revStyles.scoreStars}>
            {[1,2,3,4].map(i => <Icon key={i} name="star" size={22} color="#F07820" />)}
            <Icon name="star-outline" size={22} color="#F07820" />
          </div>
          <div style={revStyles.scoreMeta}>234 reseñas</div>
          <a href="https://maps.google.com/?q=Ferreteria+Achalay+Pocitos+Montevideo" target="_blank" rel="noopener" style={revStyles.scoreLink}>Ver en Google Maps <Icon name="arrow-up-r" size={13} stroke={2.5} /></a>
        </div>
        <div style={revStyles.quotes} className="v2-rev-quotes">
          {[
            { q: 'Muy buena atención, tienen de todo y a buen precio. El personal siempre dispuesto a ayudar y orientar.', a: 'M. González', t: 'Vecina de Pocitos · ★★★★★', bg: '#F8F4EA' },
            { q: 'Voy desde hace años. Te asesoran bien, no te venden lo que no necesitás. Una ferretería como las de antes.', a: 'R. Pereyra', t: 'Plomero · ★★★★★', bg: '#FFF5EB' },
            { q: 'Encontré un repuesto que no encontraba en ningún lado. Te conocen y te resuelven.', a: 'L. Méndez', t: 'Cliente Google · ★★★★', bg: '#EDF3F9' },
          ].map((r, i) => (
            <figure key={i} style={{ ...revStyles.quote, background: r.bg }}>
              <blockquote style={revStyles.quoteTxt}>"{r.q}"</blockquote>
              <figcaption style={revStyles.quoteCap}>
                <div style={revStyles.quoteAuthor}>{r.a}</div>
                <div style={revStyles.quoteRole}>{r.t}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const revStyles = {
  layout: { display: 'grid', gridTemplateColumns: '0.7fr 1.3fr', gap: 28, alignItems: 'stretch' },
  scoreCard: { background: '#1A1410', color: '#FDFCF8', padding: '36px 32px', borderRadius: 6, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
  scoreTop: { fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.22em', color: '#F07820' },
  scoreBig: { fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: 160, lineHeight: 0.82, letterSpacing: '-0.05em', color: '#FDFCF8', margin: '24px 0 12px' },
  scoreStars: { display: 'flex', gap: 4, marginBottom: 8 },
  scoreMeta: { fontFamily: "'Libre Franklin', sans-serif", fontStyle: 'italic', fontSize: 16, color: '#E0CFA8', marginBottom: 20 },
  scoreLink: { color: '#F07820', textDecoration: 'none', fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: '0.08em', display: 'inline-flex', alignItems: 'center', gap: 8, borderTop: '1px solid rgba(255,255,255,0.18)', paddingTop: 18 },
  quotes: { display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto', gap: 14 },
  quote: { padding: '24px 26px', borderRadius: 6, border: '1px solid #E3DACA', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 16, margin: 0 },
  quoteTxt: { fontFamily: "'Libre Franklin', sans-serif", fontStyle: 'italic', fontSize: 17, lineHeight: 1.5, color: '#1A1410', margin: 0 },
  quoteCap: { display: 'flex', flexDirection: 'column', gap: 2 },
  quoteAuthor: { fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: 16, color: '#1A1410' },
  quoteRole: { fontFamily: "'Archivo', sans-serif", fontWeight: 600, fontSize: 11.5, letterSpacing: '0.06em', color: '#7A6E62' },
};

/* ── Contact + custom map ── */
const MapGraphic = () => (
  <div style={mapStyles.wrap}>
    <div style={mapStyles.grid}>
      <div style={{ ...mapStyles.street, top: '38%', left: 0, right: 0, height: 22, transform: 'rotate(-2deg)' }} />
      <div style={{ ...mapStyles.street, top: 0, bottom: 0, left: '34%', width: 18 }} />
      <div style={{ ...mapStyles.street, top: 0, bottom: 0, left: '72%', width: 14, opacity: 0.7 }} />
      <div style={{ ...mapStyles.street, top: '72%', left: 0, right: 0, height: 12, opacity: 0.7 }} />
      {[ [4,4,26,30],[34,4,34,30],[70,4,25,30],[4,42,26,28],[38,42,30,28],[70,42,25,28],[4,74,26,22],[38,74,34,22],[76,74,18,22] ].map((b,i) => (
        <div key={i} style={{ position: 'absolute', left: `${b[0]}%`, top: `${b[1]}%`, width: `${b[2]}%`, height: `${b[3]}%`, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 2 }} />
      ))}
      <div style={mapStyles.pinAnchor}>
        <div style={mapStyles.pinPulse} />
        <div style={mapStyles.pin}><Icon name="map-pin" size={20} color="white" /></div>
        <div style={mapStyles.pinLabel}>ACHALAY</div>
      </div>
      <div style={{ ...mapStyles.streetLbl, top: '34%', left: '6%', transform: 'rotate(-2deg)' }}>PEDRO F. BERRO</div>
      <div style={{ ...mapStyles.streetLbl, top: '8%', left: '38%' }}>26 DE MARZO</div>
      <div style={{ ...mapStyles.streetLbl, top: '8%', left: '74%' }}>MASSINI</div>
    </div>
    <div style={mapStyles.footer}>
      <div>
        <div style={mapStyles.footerLbl}>UBICACIÓN</div>
        <div style={mapStyles.footerVal}>Pedro F. Berro &amp; 26 de Marzo</div>
      </div>
      <a href="https://maps.google.com/?q=Pedro+F+Berro+1174+Pocitos+Montevideo" target="_blank" rel="noopener" style={mapStyles.footerLink}>
        Abrir en Google Maps <Icon name="arrow-up-r" size={13} stroke={2.5} />
      </a>
    </div>
  </div>
);

const mapStyles = {
  wrap: { background: '#1565A8', borderRadius: 6, overflow: 'hidden', height: '100%', minHeight: 520, display: 'flex', flexDirection: 'column', border: '1px solid rgba(255,255,255,0.12)' },
  grid: { flex: 1, position: 'relative', overflow: 'hidden', backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.05) 0, transparent 60%)' },
  street: { position: 'absolute', background: '#F0E9D8', opacity: 0.85 },
  pinAnchor: { position: 'absolute', left: '38%', top: '36%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, zIndex: 10 },
  pinPulse: { position: 'absolute', top: -8, width: 48, height: 48, borderRadius: '50%', background: 'rgba(240,120,32,0.35)', animation: 'pulse 2.4s ease-out infinite' },
  pin: { width: 38, height: 38, borderRadius: '50%', background: '#F07820', boxShadow: '3px 3px 0 #1A1410, 0 0 0 4px #FDFCF8', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' },
  pinLabel: { background: '#1A1410', color: '#FDFCF8', padding: '4px 9px', borderRadius: 2, fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 10, letterSpacing: '0.18em' },
  streetLbl: { position: 'absolute', fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 9, letterSpacing: '0.16em', color: '#FDFCF8', opacity: 0.5 },
  footer: { background: '#FDFCF8', color: '#1A1410', padding: '16px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 },
  footerLbl: { fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 10, letterSpacing: '0.18em', color: '#7A6E62' },
  footerVal: { fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: 17, marginTop: 2, color: '#1A1410' },
  footerLink: { background: '#1565A8', color: '#FDFCF8', padding: '10px 14px', borderRadius: 4, fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: '0.06em', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 },
};

const Contact = () => (
  <section id="contacto" style={{ background: '#0E4B80', color: '#FDFCF8' }}>
    <TileStripe bg="#0E4B80" tileH={14} />
    <div style={{ padding: 'clamp(64px, 8vw, 100px) clamp(20px, 4vw, 40px)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionHeader num="04" kicker="Vení al local" title={<>Pedro F. Berro 1174,<br/>esquina de barrio.</>} lead="Estamos abiertos seis días por semana, hablamos por teléfono y respondemos WhatsApp en el día." titleColor="#FDFCF8" />
        <div style={ctcStyles.layout} className="v2-ctc-layout">
          <div style={ctcStyles.left}>
            <div style={ctcStyles.row} className="v2-ctc-row">
              <div>
                <div style={ctcStyles.lbl}>Dirección</div>
                <a href="https://maps.google.com/?q=Pedro+F+Berro+1174+Pocitos" target="_blank" rel="noopener" style={ctcStyles.val}>Pedro F. Berro 1174</a>
                <div style={ctcStyles.sub}>Pocitos, Montevideo</div>
              </div>
              <div>
                <div style={ctcStyles.lbl}>Teléfono</div>
                <a href="tel:+59827092414" style={ctcStyles.val}>2709 2414</a>
                <div style={ctcStyles.sub}>también 2709 3827</div>
              </div>
            </div>
            <div style={{ ...ctcStyles.row, borderBottom: 'none' }} className="v2-ctc-row">
              <div>
                <div style={ctcStyles.lbl}>WhatsApp</div>
                <a href="https://wa.me/59899913909" style={ctcStyles.val}>099 913 909</a>
                <div style={ctcStyles.sub}>respuesta en el día</div>
              </div>
              <div>
                <div style={ctcStyles.lbl}>Horario</div>
                <div style={{ ...ctcStyles.val, cursor: 'default' }}>Lun–Vie 8:30–19:30</div>
                <div style={ctcStyles.sub}>Sábado 9:00–14:00</div>
              </div>
            </div>
            <div style={ctcStyles.actions}>
              <a href="https://wa.me/59899913909?text=Hola%2C%20quisiera%20consultar%20sobre%20un%20producto" target="_blank" rel="noopener" style={ctcStyles.btnPrimary}>
                <Icon name="whatsapp" size={18} color="#F07820" /> Escribir por WhatsApp
              </a>
              <a href="tel:+59827092414" style={ctcStyles.btnOutline}>
                <Icon name="phone" size={15} color="#FDFCF8" /> Llamar al local
              </a>
            </div>
          </div>
          <div style={ctcStyles.mapWrap}>
            <MapGraphic />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ctcStyles = {
  layout: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(24px, 4vw, 56px)', alignItems: 'stretch' },
  left: { display: 'flex', flexDirection: 'column', gap: 28 },
  row: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, paddingBottom: 24, borderBottom: '1px solid rgba(255,255,255,0.16)' },
  lbl: { fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.2em', color: '#F07820', marginBottom: 8, textTransform: 'uppercase' },
  val: { fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: 26, color: '#FDFCF8', textDecoration: 'none', letterSpacing: '-0.01em', display: 'block' },
  sub: { fontFamily: "'Libre Franklin', sans-serif", fontStyle: 'italic', fontSize: 13, color: '#A8C0DC', marginTop: 4 },
  actions: { display: 'flex', gap: 14, flexWrap: 'wrap' },
  btnPrimary: { background: '#FDFCF8', color: '#1565A8', textDecoration: 'none', padding: '14px 22px', borderRadius: 4, fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 10 },
  btnOutline: { background: 'transparent', color: '#FDFCF8', textDecoration: 'none', padding: '13px 22px', borderRadius: 4, fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 10, border: '1.5px solid rgba(255,255,255,0.45)' },
  mapWrap: { display: 'flex' },
};

/* ── Footer ── */
const Footer = () => (
  <footer style={ftStyles.footer}>
    <div style={ftStyles.inner} className="v2-ft-inner">
      <div>
        <div style={ftStyles.brandRow}>
          <img src="./logo.svg" alt="" style={{ width: 56, height: 56 }} />
          <div>
            <div style={ftStyles.brandName}>Achalay</div>
            <div style={ftStyles.brandTag}>Ferretería · Pocitos · 1961</div>
          </div>
        </div>
        <p style={ftStyles.brandQuote}>
          "Una ferretería de barrio, soluciones de verdad." — Pedro F. Berro 1174, Montevideo, Uruguay.
        </p>
      </div>
      <div style={ftStyles.colsRow}>
        <div>
          <div style={ftStyles.colTitle}>Sitio</div>
          <a href="#rubros" style={ftStyles.colLink}>Rubros</a>
          <a href="#historia" style={ftStyles.colLink}>Historia</a>
          <a href="#resenas" style={ftStyles.colLink}>Reseñas</a>
          <a href="#contacto" style={ftStyles.colLink}>Contacto</a>
        </div>
        <div>
          <div style={ftStyles.colTitle}>Contacto</div>
          <a href="tel:+59827092414" style={ftStyles.colLink}>2709 2414</a>
          <a href="tel:+59827093827" style={ftStyles.colLink}>2709 3827</a>
          <a href="https://wa.me/59899913909" style={ftStyles.colLink}>099 913 909</a>
        </div>
      </div>
    </div>
    <div style={ftStyles.bottom} className="v2-ft-bottom">
      <span>© 2025 Ferretería Achalay</span>
      <span>Diseñado en Montevideo · UY</span>
    </div>
  </footer>
);

const ftStyles = {
  footer: { background: '#1A1410', color: '#F0E9D8', padding: 'clamp(48px, 6vw, 80px) clamp(20px, 4vw, 40px) 24px' },
  inner: { maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48, paddingBottom: 32, borderBottom: '1px solid rgba(255,255,255,0.12)' },
  brandRow: { display: 'flex', alignItems: 'center', gap: 16, marginBottom: 18 },
  brandName: { fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: 32, letterSpacing: '-0.02em', color: '#FDFCF8', lineHeight: 1 },
  brandTag: { fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.16em', color: '#F07820', marginTop: 6, textTransform: 'uppercase' },
  brandQuote: { fontFamily: "'Libre Franklin', sans-serif", fontStyle: 'italic', fontSize: 15, lineHeight: 1.6, color: '#A89C8E', maxWidth: 480 },
  colsRow: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 },
  colTitle: { fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.2em', color: '#7A6E62', marginBottom: 14, textTransform: 'uppercase' },
  colLink: { display: 'block', fontFamily: "'Fredoka', sans-serif", fontWeight: 500, fontSize: 16, color: '#F0E9D8', textDecoration: 'none', padding: '4px 0' },
  bottom: { maxWidth: 1280, margin: '24px auto 0', display: 'flex', justifyContent: 'space-between', fontFamily: "'Archivo', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', color: '#7A6E62', textTransform: 'uppercase' },
};

/* ── WhatsApp FAB ── */
const WhatsAppFAB = () => (
  <a href="https://wa.me/59899913909" target="_blank" rel="noopener" style={{ position: 'fixed', right: 22, bottom: 22, zIndex: 200, width: 60, height: 60, borderRadius: '50%', background: '#1565A8', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px rgba(21,101,168,0.45), 4px 4px 0 #1A1410', textDecoration: 'none' }} aria-label="Escribir por WhatsApp">
    <Icon name="whatsapp" size={28} color="#F07820" />
  </a>
);

/* ── App ── */
const LandingPage = () => (
  <div>
    <NavBar />
    <Hero />
    <TrustBand />
    <Categories />
    <About />
    <Reviews />
    <Contact />
    <Footer />
    <WhatsAppFAB />
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(<LandingPage />);
