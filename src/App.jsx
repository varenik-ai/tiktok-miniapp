import { useEffect, useState } from "react";

const tg = window?.Telegram?.WebApp;

const CATEGORIES = [
  { id: "foryou",   label: "Для тебя",    icon: "⚡", url: "https://www.tiktok.com/foryou" },
  { id: "trending", label: "Тренды",      icon: "🔥", url: "https://www.tiktok.com/trending" },
  { id: "music",    label: "Музыка",      icon: "🎵", url: "https://www.tiktok.com/music" },
  { id: "sport",    label: "Спорт",       icon: "⚽", url: "https://www.tiktok.com/sports" },
  { id: "food",     label: "Еда",         icon: "🍜", url: "https://www.tiktok.com/food" },
  { id: "travel",   label: "Путешествия", icon: "✈️", url: "https://www.tiktok.com/travel" },
];

export default function App() {
  const [autoNext, setAutoNext] = useState(true);
  const [selected, setSelected] = useState("foryou");
  const [launched, setLaunched] = useState(false);

  useEffect(() => {
    if (tg) {
      tg.ready?.();
      tg.expand?.();
      try { tg.setHeaderColor?.("#000000"); } catch {}
      try { tg.setBackgroundColor?.("#000000"); } catch {}
    }
  }, []);

  function openTikTok() {
    const cat = CATEGORIES.find(c => c.id === selected);
    const url = cat?.url ?? "https://www.tiktok.com/foryou";
    setLaunched(true);
    if (tg?.openLink) {
      tg.openLink(url, { try_instant_view: false });
    } else {
      window.open(url, "_blank");
    }
    setTimeout(() => setLaunched(false), 2000);
  }

  return (
    <div style={styles.root}>
      <div style={{...styles.blob, top:"-80px", left:"-60px", background:"rgba(254,44,85,0.18)"}} />
      <div style={{...styles.blob, bottom:"-100px", right:"-80px", background:"rgba(100,220,200,0.12)"}} />

      <div style={styles.inner}>
        <div style={styles.logoWrap}>
          <div style={styles.logoIcon}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M22 4h-4v16a4 4 0 1 1-4-4v-4a8 8 0 1 0 8 8V9.5A10 10 0 0 0 27 11V7a6 6 0 0 1-5-3z" fill="#fe2c55"/>
            </svg>
          </div>
          <div>
            <div style={styles.logoTitle}>TikTok</div>
            <div style={styles.logoSub}>Mini App · Telegram</div>
          </div>
        </div>

        <div style={styles.toggleCard}>
          <div style={styles.toggleLeft}>
            <div style={styles.toggleTitle}>Автопереход</div>
            <div style={styles.toggleDesc}>
              {autoNext ? "Видео переключается автоматически" : "Видео зацикливается на одном"}
            </div>
          </div>
          <button onClick={() => setAutoNext(v => !v)} style={styles.toggleTrack(autoNext)} aria-label="Автопереход">
            <span style={styles.toggleThumb(autoNext)} />
          </button>
        </div>

        <div style={styles.sectionLabel}>Раздел</div>
        <div style={styles.grid}>
          {CATEGORIES.map(cat => (
            <button key={cat.id} onClick={() => setSelected(cat.id)} style={styles.catBtn(selected === cat.id)}>
              <span style={{fontSize:22}}>{cat.icon}</span>
              <span style={styles.catLabel(selected === cat.id)}>{cat.label}</span>
            </button>
          ))}
        </div>

        <button onClick={openTikTok} style={styles.openBtn(launched)} disabled={launched}>
          <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
            <path d="M22 4h-4v16a4 4 0 1 1-4-4v-4a8 8 0 1 0 8 8V9.5A10 10 0 0 0 27 11V7a6 6 0 0 1-5-3z" fill="white"/>
          </svg>
          <span>{launched ? "Открываю…" : "Открыть TikTok"}</span>
        </button>

        <div style={styles.hint}>
          TikTok откроется поверх этого экрана.<br/>
          Вернись сюда кнопкой «Назад
cat > ~/Documents/tiktok-miniapp/src/App.jsx << 'ENDOFFILE'
import { useEffect, useState } from "react";

const tg = window?.Telegram?.WebApp;

const CATEGORIES = [
  { id: "foryou",   label: "Для тебя",    icon: "⚡", url: "https://www.tiktok.com/foryou" },
  { id: "trending", label: "Тренды",      icon: "🔥", url: "https://www.tiktok.com/trending" },
  { id: "music",    label: "Музыка",      icon: "🎵", url: "https://www.tiktok.com/music" },
  { id: "sport",    label: "Спорт",       icon: "⚽", url: "https://www.tiktok.com/sports" },
  { id: "food",     label: "Еда",         icon: "🍜", url: "https://www.tiktok.com/food" },
  { id: "travel",   label: "Путешествия", icon: "✈️", url: "https://www.tiktok.com/travel" },
];

export default function App() {
  const [autoNext, setAutoNext] = useState(true);
  const [selected, setSelected] = useState("foryou");
  const [launched, setLaunched] = useState(false);

  useEffect(() => {
    if (tg) {
      tg.ready?.();
      tg.expand?.();
      try { tg.setHeaderColor?.("#000000"); } catch {}
      try { tg.setBackgroundColor?.("#000000"); } catch {}
    }
  }, []);

  function openTikTok() {
    const cat = CATEGORIES.find(c => c.id === selected);
    const url = cat?.url ?? "https://www.tiktok.com/foryou";
    setLaunched(true);
    if (tg?.openLink) {
      tg.openLink(url, { try_instant_view: false });
    } else {
      window.open(url, "_blank");
    }
    setTimeout(() => setLaunched(false), 2000);
  }

  return (
    <div style={styles.root}>
      <div style={{...styles.blob, top:"-80px", left:"-60px", background:"rgba(254,44,85,0.18)"}} />
      <div style={{...styles.blob, bottom:"-100px", right:"-80px", background:"rgba(100,220,200,0.12)"}} />

      <div style={styles.inner}>
        <div style={styles.logoWrap}>
          <div style={styles.logoIcon}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M22 4h-4v16a4 4 0 1 1-4-4v-4a8 8 0 1 0 8 8V9.5A10 10 0 0 0 27 11V7a6 6 0 0 1-5-3z" fill="#fe2c55"/>
            </svg>
          </div>
          <div>
            <div style={styles.logoTitle}>TikTok</div>
            <div style={styles.logoSub}>Mini App · Telegram</div>
          </div>
        </div>

        <div style={styles.toggleCard}>
          <div style={styles.toggleLeft}>
            <div style={styles.toggleTitle}>Автопереход</div>
            <div style={styles.toggleDesc}>
              {autoNext ? "Видео переключается автоматически" : "Видео зацикливается на одном"}
            </div>
          </div>
          <button onClick={() => setAutoNext(v => !v)} style={styles.toggleTrack(autoNext)} aria-label="Автопереход">
            <span style={styles.toggleThumb(autoNext)} />
          </button>
        </div>

        <div style={styles.sectionLabel}>Раздел</div>
        <div style={styles.grid}>
          {CATEGORIES.map(cat => (
            <button key={cat.id} onClick={() => setSelected(cat.id)} style={styles.catBtn(selected === cat.id)}>
              <span style={{fontSize:22}}>{cat.icon}</span>
              <span style={styles.catLabel(selected === cat.id)}>{cat.label}</span>
            </button>
          ))}
        </div>

        <button onClick={openTikTok} style={styles.openBtn(launched)} disabled={launched}>
          <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
            <path d="M22 4h-4v16a4 4 0 1 1-4-4v-4a8 8 0 1 0 8 8V9.5A10 10 0 0 0 27 11V7a6 6 0 0 1-5-3z" fill="white"/>
          </svg>
          <span>{launched ? "Открываю…" : "Открыть TikTok"}</span>
        </button>

        <div style={styles.hint}>
          TikTok откроется поверх этого экрана.<br/>
          Вернись сюда кнопкой «Назад» в Telegram.
        </div>
      </div>
    </div>
  );
}

const styles = {
  root: { minHeight:"100dvh", background:"#000", color:"#fff", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"24px 20px", position:"relative", overflow:"hidden", fontFamily:"-apple-system,'Helvetica Neue',sans-serif" },
  blob: { position:"absolute", width:280, height:280, borderRadius:"50%", filter:"blur(60px)", pointerEvents:"none" },
  inner: { width:"100%", maxWidth:400, display:"flex", flexDirection:"column", gap:20, position:"relative", zIndex:1 },
  logoWrap: { display:"flex", alignItems:"center", gap:14, marginBottom:8 },
  logoIcon: { width:56, height:56, borderRadius:16, background:"rgba(254,44,85,0.15)", border:"1px solid rgba(254,44,85,0.3)", display:"flex", alignItems:"center", justifyContent:"center" },
  logoTitle: { fontSize:28, fontWeight:800, letterSpacing:"-0.5px", lineHeight:1.1 },
  logoSub: { fontSize:12, color:"rgba(255,255,255,0.45)", marginTop:2 },
  toggleCard: { background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:18, padding:"16px 18px", display:"flex", alignItems:"center", justifyContent:"space-between", gap:16 },
  toggleLeft: { flex:1 },
  toggleTitle: { fontSize:15, fontWeight:600, color:"#fff", marginBottom:3 },
  toggleDesc: { fontSize:12, color:"rgba(255,255,255,0.45)", lineHeight:1.4 },
  toggleTrack: (on) => ({ flexShrink:0, position:"relative", width:52, height:30, borderRadius:15, background: on ? "#22c55e" : "rgba(255,255,255,0.15)", border:"none", cursor:"pointer", transition:"background 0.25s ease", padding:0 }),
  toggleThumb: (on) => ({ position:"absolute", top:3, left: on ? 25 : 3, width:24, height:24, borderRadius:"50%", background:"#fff", boxShadow:"0 1px 4px rgba(0,0,0,0.4)", transition:"left 0.25s ease", display:"block" }),
  sectionLabel: { fontSize:12, fontWeight:600, color:"rgba(255,255,255,0.4)", letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:-8 },
  grid: { display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:10 },
  catBtn: (active) => ({ display:"flex", flexDirection:"column", alignItems:"center", gap:6, padding:"12px 8px", borderRadius:14, border: active ? "1px solid rgba(254,44,85,0.6)" : "1px solid rgba(255,255,255,0.08)", background: active ? "rgba(254,44,85,0.15)" : "rgba(255,255,255,0.04)", cursor:"pointer", transition:"all 0.18s ease" }),
  catLabel: (active) => ({ fontSize:11, fontWeight:600, color: active ? "#fe2c55" : "rgba(255,255,255,0.55)", transition:"color 0.18s ease" }),
  openBtn: (launched) => ({ display:"flex", alignItems:"center", justifyContent:"center", gap:10, width:"100%", padding:"16px 24px", borderRadius:18, border:"none", background: launched ? "rgba(254,44,85,0.5)" : "linear-gradient(135deg,#fe2c55 0%,#ff6b6b 100%)", color:"#fff", fontSize:16, fontWeight:700, cursor: launched ? "not-allowed" : "pointer", marginTop:4 }),
  hint: { textAlign:"center", fontSize:12, color:"rgba(255,255,255,0.3)", lineHeight:1.6, marginTop:-4 },
};
