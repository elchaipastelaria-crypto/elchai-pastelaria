/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";

const VERSAO = "2.1.0"; // eslint-disable-line
const WHATSAPP = "5511913359350";
const INSTAGRAM = "elchai_pastelaria";
const DELIVERY_MINS = 40;
const LOJA_LAT = -23.5285, LOJA_LNG = -46.4125;

const BAIRROS = [
  {b:"Cidade Kemel",lat:-23.5285,lng:-46.4125},{b:"Jardim Lapena",lat:-23.5240,lng:-46.4080},
  {b:"Itaquera",lat:-23.5350,lng:-46.4550},{b:"Guaianases",lat:-23.5180,lng:-46.3880},
  {b:"Cidade Tiradentes",lat:-23.5100,lng:-46.3750},{b:"José Bonifácio",lat:-23.5420,lng:-46.4300},
  {b:"Jardim Helena",lat:-23.5150,lng:-46.4050},{b:"Vila Curuçá",lat:-23.5300,lng:-46.3950},
  {b:"São Miguel Paulista",lat:-23.5050,lng:-46.4400},{b:"Parque São Lucas",lat:-23.5500,lng:-46.4200},
  {b:"Parque Boturussu",lat:-23.5200,lng:-46.4200},{b:"Vila Carmosina",lat:-23.5380,lng:-46.4000},
  {b:"Cidade Antônio Estevão",lat:-23.5450,lng:-46.3900},{b:"Jardim Dom Bosco",lat:-23.5320,lng:-46.4250},
  {b:"Jardim Robru",lat:-23.5250,lng:-46.4350},{b:"Parque Iguatemi",lat:-23.5400,lng:-46.3800},
  {b:"Vila Progresso",lat:-23.5150,lng:-46.4150},{b:"Jardim Santa Etelvina",lat:-23.5100,lng:-46.4300},
  {b:"Itaim Paulista",lat:-23.5000,lng:-46.4000},{b:"Vila Rio Branco",lat:-23.5600,lng:-46.4100},
  {b:"Jardim Danfer",lat:-23.5450,lng:-46.4450},{b:"Parque Santa Madalena",lat:-23.5350,lng:-46.4150},
  {b:"Vila Nhocuné",lat:-23.5550,lng:-46.4350},{b:"Jardim Popular",lat:-23.5200,lng:-46.4500},
  {b:"Lajeado",lat:-23.5080,lng:-46.4600},{b:"Cidade Nova São Miguel",lat:-23.5050,lng:-46.4200},
  {b:"Vila Mira",lat:-23.5600,lng:-46.3950},{b:"Jardim Três Marias",lat:-23.5150,lng:-46.3950},
  {b:"Parque Cruzeiro do Sul",lat:-23.5480,lng:-46.4050},{b:"Cidade Kemel II",lat:-23.5270,lng:-46.4180},
];

const CARDAPIO = [
  {cat:"Pastel Tradicional",sabor:"Frango",preco:13},{cat:"Pastel Tradicional",sabor:"Calabresa",preco:13},
  {cat:"Pastel Tradicional",sabor:"Frango c/ Cheddar",preco:13},{cat:"Pastel Tradicional",sabor:"Frango c/ Cream Cheese",preco:13},
  {cat:"Pastel Tradicional",sabor:"Carne Maluca",preco:13},{cat:"Pastel Tradicional",sabor:"Carne Moída",preco:13},
  {cat:"Pastel Tradicional",sabor:"Mussarela",preco:13},{cat:"Pastel Tradicional",sabor:"Frango c/ Mussarela",preco:13},
  {cat:"Pastel Tradicional",sabor:"Frango c/ Catupiry",preco:13},{cat:"Pastel Tradicional",sabor:"Calabresa c/ Mussarela",preco:13},
  {cat:"Pastel Tradicional",sabor:"Calabresa c/ Catupiry",preco:13},{cat:"Pastel Tradicional",sabor:"Carne Seca",preco:13},
  {cat:"Pastel Tradicional",sabor:"Caipira",preco:13},{cat:"Pastel Tradicional",sabor:"Bauru",preco:13},
  {cat:"Pastel Tradicional",sabor:"Carne Maluca c/ Mussarela",preco:13},{cat:"Pastel Tradicional",sabor:"Carne Moída c/ Mussarela",preco:13},
  {cat:"Pastel Tradicional",sabor:"Carne Seca c/ Mussarela",preco:13},{cat:"Pastel Tradicional",sabor:"Carne Seca c/ Catupiry",preco:13},
  {cat:"Pastel Tradicional",sabor:"Carne Seca c/ Cheddar",preco:13},
  {cat:"Pastelão",sabor:"Frango",preco:17},{cat:"Pastelão",sabor:"Calabresa",preco:17},{cat:"Pastelão",sabor:"Caipira",preco:20},
  {cat:"Pastelão",sabor:"Frango c/ Mussarela",preco:19},{cat:"Pastelão",sabor:"Carne Maluca",preco:19},
  {cat:"Pastelão",sabor:"Frango c/ Catupiry",preco:19},{cat:"Pastelão",sabor:"Calabresa c/ Mussarela",preco:19},
  {cat:"Pastelão",sabor:"Carne Seca",preco:20},{cat:"Pastelão",sabor:"A Modo Casa",preco:20},{cat:"Pastelão",sabor:"Mussarela",preco:17},
  {cat:"Pastelão",sabor:"Carne Seca c/ Mussarela",preco:20},{cat:"Pastelão",sabor:"Carne Maluca c/ Mussarela",preco:19},
  {cat:"Cuscuz",sabor:"Frango c/ Catupiry",preco:24},{cat:"Cuscuz",sabor:"Frango c/ Cream Cheese",preco:24},
  {cat:"Cuscuz",sabor:"Frango c/ Mussarela",preco:24},{cat:"Cuscuz",sabor:"Frango c/ Cheddar",preco:24},
  {cat:"Cuscuz",sabor:"Carne Seca c/ Catupiry",preco:26},{cat:"Cuscuz",sabor:"Carne Seca c/ Mussarela",preco:26},
  {cat:"Cuscuz",sabor:"Carne Maluca c/ Catupiry",preco:24},{cat:"Cuscuz",sabor:"Carne Moída c/ Catupiry",preco:24},
  {cat:"Hambúrguer",sabor:"Bacon",preco:24},{cat:"Hambúrguer",sabor:"Clássico",preco:24},
  {cat:"Hambúrguer",sabor:"Cream Cheese",preco:24},{cat:"Hambúrguer",sabor:"Salada",preco:26},
  {cat:"Hambúrguer",sabor:"Chimichurri",preco:24},{cat:"Hambúrguer",sabor:"Cheddar",preco:24},
  {cat:"Hambúrguer",sabor:"Cheddar Bacon",preco:26},
];

const CATS = ["Pastel Tradicional","Pastelão","Cuscuz","Hambúrguer"];
const ICONS = {"Pastel Tradicional":"🥟","Pastelão":"🫔","Cuscuz":"🌽","Hambúrguer":"🍔"};
const ST_LABELS = ["Recebido","Em Preparo","Saiu p/ Entrega","Entregue"];
const ST_COLORS = ["#b8860b","#c0392b","#7b3f00","#2d7a2d"];
const ST_EMOJI  = ["📋","👨‍🍳","🛵","✅"];

const genId   = () => Math.random().toString(36).slice(2,8).toUpperCase();
const fmt     = v  => `R$ ${v.toFixed(2).replace(".",",")}`;
const now     = () => new Date().toLocaleString("pt-BR");
const genCode = () => Math.floor(100000+Math.random()*900000).toString();
const iKey    = (cat,sabor) => `${cat}|${sabor}`;

function haversine(la1,lo1,la2,lo2){
  const R=6371,dL=(la2-la1)*Math.PI/180,dO=(lo2-lo1)*Math.PI/180;
  const a=Math.sin(dL/2)**2+Math.cos(la1*Math.PI/180)*Math.cos(la2*Math.PI/180)*Math.sin(dO/2)**2;
  return R*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
}
function calcFrete(km){ if(km<=2)return 5; if(km<=4)return 8; if(km<=6)return 12; return null; }

function exportCSV(rows,filename){
  const keys=Object.keys(rows[0]);
  const csv=[keys.join(","),...rows.map(r=>keys.map(k=>`"${String(r[k]||"").replace(/"/g,'""')}"`).join(","))].join("\n");
  const a=document.createElement("a");
  a.href=URL.createObjectURL(new Blob(["\uFEFF"+csv],{type:"text/csv;charset=utf-8;"}));
  a.download=filename; a.click();
}

// ── persistent store helpers ──
async function dbGet(key){ try{ const r=await window.storage.get(key); return r?JSON.parse(r.value):null; }catch{ return null; } }
async function dbSet(key,val){ try{ await window.storage.set(key,JSON.stringify(val)); }catch{} }

// ── memory store (synced with storage) ──
let _pedidos=[], _clientes=[], _fotos={};
let _loja={nome:"Elchai Pastelaria",logo:null,rua:"Rua Desembargador Áureo Cerqueira Leite",num:"172",bairro:"Cidade Kemel",cidade:"São Paulo",cep:"08130-410"};

// ── design tokens ──
const G={red:"#9b0000",rdk:"#6b0000",gold:"#d4a017",gl:"#f5c842",gd:"#a07010",bg:"#1a0800",bc:"#2a1205",bc2:"#1f0e03",tm:"#c8a060"};
const gg  = `linear-gradient(135deg,${G.gl},${G.gold},${G.gd})`;
const gr  = `linear-gradient(135deg,${G.red},${G.rdk})`;
const gh  = `linear-gradient(135deg,#6b0000 0%,#9b0000 40%,#6b0000 100%)`;

const inp  = {width:"100%",background:G.bc,border:`1px solid ${G.gold}33`,borderRadius:10,padding:"11px 13px",color:"#fff",fontSize:14,marginBottom:10,boxSizing:"border-box"};
const lbl  = {fontSize:11,color:G.tm,marginBottom:4,display:"block",textTransform:"uppercase",letterSpacing:1};
const btnG = {background:gg,color:"#000",border:"none",borderRadius:12,padding:"13px",fontSize:15,fontWeight:800,cursor:"pointer",width:"100%",marginBottom:10};
const btnR = {background:gr,color:"#fff",border:`1px solid ${G.gold}44`,borderRadius:12,padding:"12px",fontSize:14,fontWeight:700,cursor:"pointer",width:"100%",marginBottom:10};
const btnD = {background:G.bc,color:G.tm,border:`1px solid ${G.gd}44`,borderRadius:12,padding:"11px",fontSize:13,fontWeight:600,cursor:"pointer",width:"100%",marginBottom:8};
const btnBack={background:"none",border:"none",color:G.gl,fontSize:13,cursor:"pointer",fontWeight:700,padding:0};
const card = {background:G.bc,borderRadius:14,margin:"8px 12px",padding:"13px 14px",border:`1px solid ${G.gold}22`};
const hdr  = {background:gh,padding:"13px 16px",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:`2px solid ${G.gold}`};

function Badge({i}){
  return <span style={{background:ST_COLORS[i],color:"#fff",borderRadius:20,padding:"3px 10px",fontSize:11,fontWeight:700}}>{ST_EMOJI[i]} {ST_LABELS[i]}</span>;
}

function LogoBadge({logo,size=70}){
  if(logo) return <img src={logo} style={{width:size*2,height:size*2,borderRadius:"50%",border:`3px solid ${G.gl}`,objectFit:"cover",boxShadow:`0 0 30px ${G.gl}66`}} alt="logo"/>;
  return(
    <div style={{width:size*2,height:size*2,borderRadius:"50%",background:`radial-gradient(circle at 40% 35%,#c00 0%,#6b0000 60%,#3a0000 100%)`,border:`3px solid ${G.gl}`,boxShadow:`0 0 30px ${G.gl}66`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
      <div style={{fontSize:size*0.55,lineHeight:1}}>🥟</div>
      <div style={{fontWeight:900,fontSize:size*0.28,background:gg,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",letterSpacing:2,marginTop:3}}>ELCHAI</div>
      <div style={{fontSize:size*0.14,color:G.gl,letterSpacing:3,marginTop:1}}>PASTELARIA</div>
    </div>
  );
}

function ClienteCard({c, upC, BAIRROS, LOJA_LAT, LOJA_LNG, haversine, calcFrete, inp, lbl, btnG, btnD, card, G, gg}){
  const [resetando,setResetando]=useState(false);
  const [novaSenha,setNovaSenha]=useState("");
  const [editando,setEditando]=useState(false);
  const [editForm,setEditForm]=useState({nome:c.nome,rua:c.rua||"",num:c.num||"",bairro:c.bairro||""});
  return(
    <div style={card}>
      {!editando ? <>
        <div style={{fontWeight:800,marginBottom:3}}>👤 {c.nome}</div>
        <div style={{fontSize:13,color:"#ccc"}}>📱 {c.tel}</div>
        <div style={{fontSize:12,color:G.tm}}>📍 {c.rua}, {c.num} - {c.bairro}</div>
        <div style={{fontSize:12,color:G.gl,marginTop:5,marginBottom:8}}>🛒 {c.pedidos} pedido(s) · Último: {c.ultimo}</div>
        <div style={{display:"flex",gap:8}}>
          <button style={{...btnD,marginBottom:0,flex:1,fontSize:12,padding:"8px"}} onClick={()=>{setEditando(true);setEditForm({nome:c.nome,rua:c.rua||"",num:c.num||"",bairro:c.bairro||""});}}>✏️ Editar</button>
          <button style={{...btnD,marginBottom:0,flex:1,fontSize:12,padding:"8px"}} onClick={()=>setResetando(!resetando)}>🔑 Resetar senha</button>
        </div>
        {resetando&&<div style={{marginTop:8}}>
          <input style={{...inp,marginBottom:8}} placeholder="Nova senha" value={novaSenha} onChange={e=>setNovaSenha(e.target.value)}/>
          <div style={{display:"flex",gap:8}}>
            <button style={{...btnG,marginBottom:0,flex:1,padding:"9px",fontSize:13}} onClick={()=>{
              if(!novaSenha){alert("Digite a nova senha!");return;}
              const n=_clientes.map(x=>x.tel===c.tel?{...x,senha:novaSenha,senhaResetada:true}:x);
              upC(n);setResetando(false);setNovaSenha("");alert(`✅ Senha de ${c.nome} resetada! Ele precisará criar uma nova senha no próximo acesso.`);
            }}>✅ Salvar</button>
            <button style={{...btnD,marginBottom:0,flex:1,padding:"9px",fontSize:13}} onClick={()=>{setResetando(false);setNovaSenha("");}}>Cancelar</button>
          </div>
        </div>}
      </> : <>
        <div style={{fontWeight:800,color:G.gl,marginBottom:10}}>✏️ Editar {c.nome}</div>
        <label style={lbl}>Nome</label>
        <input style={inp} value={editForm.nome} onChange={e=>setEditForm({...editForm,nome:e.target.value})}/>
        <label style={lbl}>Rua</label>
        <input style={inp} value={editForm.rua} onChange={e=>setEditForm({...editForm,rua:e.target.value})}/>
        <div style={{display:"flex",gap:8}}>
          <div style={{flex:1}}><label style={lbl}>Número</label><input style={inp} value={editForm.num} onChange={e=>setEditForm({...editForm,num:e.target.value})}/></div>
          <div style={{flex:2}}><label style={lbl}>Bairro</label>
            <select style={{...inp,cursor:"pointer"}} value={editForm.bairro} onChange={e=>setEditForm({...editForm,bairro:e.target.value})}>
              <option value="">-- Selecione --</option>
              {BAIRROS.map(b=>{const km=haversine(LOJA_LAT,LOJA_LNG,b.lat,b.lng),f=calcFrete(km);return f!==null&&<option key={b.b} value={b.b}>{b.b}</option>;})}
            </select>
          </div>
        </div>
        <div style={{display:"flex",gap:8,marginTop:4}}>
          <button style={{...btnG,marginBottom:0,flex:1,padding:"9px",fontSize:13}} onClick={()=>{
            const n=_clientes.map(x=>x.tel===c.tel?{...x,...editForm}:x);
            upC(n);setEditando(false);
          }}>✅ Salvar</button>
          <button style={{...btnD,marginBottom:0,flex:1,padding:"9px",fontSize:13}} onClick={()=>setEditando(false)}>Cancelar</button>
        </div>
      </>}
    </div>
  );
}

function Timer({startTs}){
  const [el,setEl]=useState(()=>Math.floor((Date.now()-(startTs||Date.now()))/1000));
  useEffect(()=>{ const iv=setInterval(()=>setEl(e=>e+1),1000); return()=>clearInterval(iv); },[]);
  const rem=Math.max(0,DELIVERY_MINS*60-el), m=Math.floor(rem/60), s=rem%60, pct=Math.min(100,(el/(DELIVERY_MINS*60))*100);
  return(
    <div style={{background:G.bc,borderRadius:16,padding:"18px",margin:"14px",border:`1px solid ${G.gold}44`,textAlign:"center"}}>
      <div style={{fontSize:13,color:G.tm,marginBottom:6}}>⏱️ Tempo estimado de entrega</div>
      {rem===0
        ? <div style={{fontSize:22,fontWeight:900,color:"#2d7a2d"}}>✅ Pedido pronto!</div>
        : <>
            <div style={{fontSize:40,fontWeight:900,color:G.gl,marginBottom:6}}>{String(m).padStart(2,"0")}:{String(s).padStart(2,"0")}</div>
            <div style={{background:"#3a1205",borderRadius:20,height:10,overflow:"hidden",margin:"6px 0 8px"}}>
              <div style={{width:`${pct}%`,height:"100%",background:gg,borderRadius:20,transition:"width 1s linear"}}/>
            </div>
            <div style={{fontSize:12,color:G.tm}}>{DELIVERY_MINS} min estimados · {Math.round(pct)}% concluído</div>
          </>
      }
    </div>
  );
}

// ── Auth screens (shared between home login and checkout) ──
function AuthTel({onNext,onBack}){
  const [tel,setTel]=useState(""); const [err,setErr]=useState("");
  const go=()=>{
    const t=tel.replace(/\D/g,""); if(t.length<10){setErr("Telefone inválido.");return;}
    const cli=_clientes.find(c=>c.tel.replace(/\D/g,"")=== t);
    onNext(tel,cli||null);
  };
  return(
    <div style={{padding:"30px 20px",textAlign:"center"}}>
      <div style={{fontSize:48,marginBottom:10}}>📱</div>
      <div style={{fontSize:17,fontWeight:800,color:G.gl,marginBottom:6}}>Qual seu WhatsApp?</div>
      <div style={{fontSize:13,color:G.tm,marginBottom:20}}>Digite seu número para entrar</div>
      <input style={inp} placeholder="(11) 91234-5678" value={tel} onChange={e=>setTel(e.target.value)} onKeyDown={e=>e.key==="Enter"&&go()}/>
      {err&&<div style={{color:"#f55",fontSize:13,marginBottom:8}}>{err}</div>}
      <button style={btnG} onClick={go}>Continuar →</button>
      {onBack&&<button style={btnD} onClick={onBack}>← Voltar</button>}
    </div>
  );
}

function AuthCadastro({tel,form,setForm,onSave,onBack}){
  const [err,setErr]=useState("");
  const go=()=>{
    if(!form.nome||!form.rua||!form.num||!form.bairroSel||!form.senha||!form.dica){setErr("Preencha todos os campos.");return;}
    onSave();
  };
  return(
    <div style={{padding:"14px"}}>
      <div style={{fontSize:13,color:G.tm,marginBottom:14}}>Primeiro acesso! Preencha uma única vez 🎉</div>
      <label style={lbl}>Nome *</label><input style={inp} placeholder="João Silva" value={form.nome} onChange={e=>setForm({...form,nome:e.target.value})}/>
      <label style={lbl}>Rua *</label><input style={inp} placeholder="Rua das Flores" value={form.rua} onChange={e=>setForm({...form,rua:e.target.value})}/>
      <label style={lbl}>Número *</label><input style={inp} placeholder="123" value={form.num} onChange={e=>setForm({...form,num:e.target.value})}/>
      <label style={lbl}>Bairro *</label>
      <select style={{...inp,cursor:"pointer"}} value={form.bairroSel} onChange={e=>setForm({...form,bairroSel:e.target.value})}>
        <option value="">-- Selecione --</option>
        {BAIRROS.map(b=>{const km=haversine(LOJA_LAT,LOJA_LNG,b.lat,b.lng),f=calcFrete(km);return f!==null&&<option key={b.b} value={b.b}>{b.b} · {fmt(f)} ({km.toFixed(1)}km)</option>;})}
      </select>
      <label style={lbl}>Crie uma senha *</label>
      <input type="password" style={inp} placeholder="Ex: gato2010, flamengo, ana1985" value={form.senha} onChange={e=>setForm({...form,senha:e.target.value})}/>
      <div style={{background:"#1a2a1a",borderRadius:10,padding:"10px",marginBottom:10,fontSize:12,color:"#aaa",border:"1px solid #2d5a2d"}}>
        💡 Use algo fácil de lembrar: nome do pet, time, data especial. Ex: <strong style={{color:"#6f6"}}>"gato2010"</strong>, <strong style={{color:"#6f6"}}>"flamengo"</strong>, <strong style={{color:"#6f6"}}>"ana1985"</strong>
      </div>
      <label style={lbl}>Crie uma dica para lembrar sua senha *</label>
      <input style={inp} placeholder="Ex: nome do meu gato, time do coração" value={form.dica} onChange={e=>setForm({...form,dica:e.target.value})}/>
      <div style={{fontSize:12,color:G.tm,marginBottom:10}}>⚠️ A dica não deve revelar sua senha diretamente.</div>
      {err&&<div style={{color:"#f55",fontSize:13,marginBottom:8}}>{err}</div>}
      <div style={{position:"sticky",bottom:0,background:G.bg,padding:"11px 0",borderTop:`1px solid ${G.gold}22`,marginTop:8}}>
        <button style={btnG} onClick={go}>Salvar e Continuar →</button>
        <button style={btnD} onClick={onBack}>← Voltar</button>
      </div>
      <div style={{height:60}}/>
    </div>
  );
}

export default function App(){
  const [view,setView]=useState("splash"); // splash|login-tel|login-code|login-cad|home|cardapio|carrinho|checkout|confirmado|acompanhar|admin
  const [loja,setLoja]=useState({..._loja});
  const [cat,setCat]=useState("Pastel Tradicional");
  const [busca,setBusca]=useState("");
  const [cart,setCart]=useState([]);
  const [pedidos,setPedidos]=useState([]);
  const [clientes,setClientes]=useState([]);
  const [fotos,setFotos]=useState({});
  const [adminOk,setAdminOk]=useState(false);
  const [adminPin,setAdminPin]=useState("");
  const [tab,setTab]=useState("pedidos");
  const [pedidoConf,setPedidoConf]=useState(null);
  const [pedidoTs,setPedidoTs]=useState(null);
  // auth state
  const [authTel,setAuthTel]=useState("");
  const [authCodeSent,setAuthCodeSent]=useState("");
  const [cliente,setCliente]=useState(null);
  const [cadForm,setCadForm]=useState({nome:"",rua:"",num:"",bairroSel:""});
  // checkout
  const [endForm,setEndForm]=useState({rua:"",num:"",bairroSel:"",obs:"",pagto:"pix"});
  const [frete,setFrete]=useState(null);
  const [freteErr,setFreteErr]=useState("");
  // admin
  const [lojaForm,setLojaForm]=useState({..._loja});
  const [msgMassa,setMsgMassa]=useState("🥟 Olá! Novidades na Elchai Pastelaria! Venha fazer seu pedido!");
  const [disparoIdx,setDisparoIdx]=useState(0);
  const [disparando,setDisparando]=useState(false);
  const [editFotoKey,setEditFotoKey]=useState(null);
  const fotoRef=useRef(); const logoRef=useRef();

  // ── carregar dados persistidos na inicialização ──
  useEffect(()=>{
    (async()=>{
      const [p,c,f,l,sess]=await Promise.all([
        dbGet("elchai_pedidos"), dbGet("elchai_clientes"),
        dbGet("elchai_fotos"),   dbGet("elchai_loja"),
        dbGet("elchai_sessao"),
      ]);
      if(p){ _pedidos=p; setPedidos(p); }
      if(c){ _clientes=c; setClientes(c); }
      if(f){ _fotos=f; setFotos(f); }
      if(l){ Object.assign(_loja,l); setLoja({..._loja}); setLojaForm({..._loja}); }
      // restaurar sessão do cliente
      if(sess){
        const clis=c||[];
        const cli=clis.find(x=>x.tel===sess.tel);
        if(cli){
          setCliente(cli);
          setAuthTel(sess.tel);
          setEndForm(ef=>({...ef,rua:cli.rua||"",num:cli.num||"",bairroSel:cli.bairro||""}));
          if(sess.pedidoId && p){
            const ped=p.find(x=>x.id===sess.pedidoId);
            if(ped){ setPedidoConf(ped); setPedidoTs(sess.pedidoTs||ped.ts||null); }
          }
          setView("home");
        }
      }
    })();
  },[]);

  const upP=n=>{_pedidos=n;setPedidos(n);dbSet("elchai_pedidos",n);};
  const upC=n=>{_clientes=n;setClientes(n);dbSet("elchai_clientes",n);};
  const upF=n=>{_fotos=n;setFotos(n);dbSet("elchai_fotos",n);};
  const upL=n=>{Object.assign(_loja,n);setLoja({..._loja});setLojaForm({..._loja});dbSet("elchai_loja",_loja);};

  const addCart=item=>setCart(c=>{const ex=c.find(x=>x.sabor===item.sabor&&x.cat===item.cat);return ex?c.map(x=>x.sabor===item.sabor&&x.cat===item.cat?{...x,qty:x.qty+1}:x):[...c,{...item,qty:1}];});
  const remCart=item=>setCart(c=>{const ex=c.find(x=>x.sabor===item.sabor&&x.cat===item.cat);if(!ex)return c;return ex.qty===1?c.filter(x=>!(x.sabor===item.sabor&&x.cat===item.cat)):c.map(x=>x.sabor===item.sabor&&x.cat===item.cat?{...x,qty:x.qty-1}:x);});
  const qtyOf=item=>cart.find(x=>x.sabor===item.sabor&&x.cat===item.cat)?.qty||0;
  const total=cart.reduce((s,x)=>s+x.preco*x.qty,0);
  const cartN=cart.reduce((a,x)=>a+x.qty,0);

  // login flow handlers
  const onTelNext=(tel,code)=>{setAuthTel(tel);setAuthCodeSent(code);setView("login-code");};
  // ao verificar código com sucesso, salvar sessão
  const onCodeVerified=(cli)=>{
    if(cli){
      // cliente existe — pedir senha
      setAuthTel(cli.tel);
      setView("login-senha");
    } else {
      setCadForm({nome:"",rua:"",num:"",bairroSel:"",senha:"",dica:""});
      setView("login-cad");
    }
  };

  const [senhaInput,setSenhaInput]=useState("");
  const [senhaErr,setSenhaErr]=useState("");
  const [mostrarDica,setMostrarDica]=useState(false);
  const [novaSenhaInput,setNovaSenhaInput]=useState("");
  const [novaSenhaConf,setNovaSenhaConf]=useState("");
  const [novaDicaInput,setNovaDicaInput]=useState("");
  const [novaSenhaErr,setNovaSenhaErr]=useState("");

  const verificarSenha=()=>{
    const tel=authTel.replace(/\D/g,"");
    const cli=_clientes.find(c=>c.tel.replace(/\D/g,"")=== tel);
    if(!cli){setSenhaErr("Cliente não encontrado.");return;}
    // senha foi resetada pelo dono — forçar nova senha
    if(cli.senhaResetada){
      setCliente(cli);
      setView("nova-senha");
      return;
    }
    if(senhaInput!==cli.senha){setSenhaErr("Senha incorreta.");return;}
    setCliente(cli);
    setEndForm(f=>({...f,rua:cli.rua||"",num:cli.num||"",bairroSel:cli.bairro||""}));
    const ped=_pedidos.find(x=>x.cliente.tel===cli.tel);
    if(ped){setPedidoConf(ped);setPedidoTs(ped.ts||null);}
    dbSet("elchai_sessao",{tel:cli.tel,pedidoId:ped?.id||null,pedidoTs:ped?.ts||null});
    setSenhaInput("");setSenhaErr("");setMostrarDica(false);
    setView("home");
  };
  const onCadSave=()=>{
    if(!cadForm.nome||!cadForm.rua||!cadForm.num||!cadForm.bairroSel||!cadForm.senha||!cadForm.dica){return;}
    const novo={nome:cadForm.nome,tel:authTel,rua:cadForm.rua,num:cadForm.num,bairro:cadForm.bairroSel,senha:cadForm.senha,dica:cadForm.dica,pedidos:0,primeiro:now(),ultimo:now()};
    upC([novo,..._clientes]);
    setCliente(novo);
    setEndForm({rua:cadForm.rua,num:cadForm.num,bairroSel:cadForm.bairroSel,obs:"",pagto:"pix"});
    dbSet("elchai_sessao",{tel:authTel,pedidoId:null,pedidoTs:null});
    setView("home");
  };
  const logout=()=>{setCliente(null);setPedidoConf(null);setCart([]);dbSet("elchai_sessao",null);setView("splash");};

  // frete
  const doFrete=()=>{
    if(!endForm.bairroSel){setFreteErr("Selecione seu bairro.");return false;}
    const b=BAIRROS.find(x=>x.b===endForm.bairroSel);
    if(!b){setFreteErr("Bairro não encontrado.");return false;}
    const km=haversine(LOJA_LAT,LOJA_LNG,b.lat,b.lng), f=calcFrete(km);
    if(f===null){setFreteErr(`Fora da área (${km.toFixed(1)}km). Atendemos até 6km.`);setFrete(null);return false;}
    setFrete({valor:f,km:km.toFixed(1)});setFreteErr("");return true;
  };

  const salvarPedido=()=>{
    if(!doFrete())return;
    const id=genId(), ts=Date.now();
    const pedido={id,data:now(),ts,cliente:{...cliente,...endForm,bairro:endForm.bairroSel},itens:cart,total,frete:frete.valor,km:frete.km,status:0,pagto:endForm.pagto};
    upP([pedido,..._pedidos]);
    upC(_clientes.map(c=>c.tel===authTel?{...c,pedidos:c.pedidos+1,ultimo:now()}:c));
    setPedidoConf(pedido); setPedidoTs(ts);
    dbSet("elchai_sessao",{tel:authTel,pedidoId:id,pedidoTs:ts});
    setCart([]); setView("confirmado");
  };

  const updStatus=(id,d)=>{
    const n=_pedidos.map(p=>{
      if(p.id!==id)return p;
      const ns=Math.max(0,Math.min(3,p.status+d));
      const tel=p.cliente.tel.replace(/\D/g,"");
      const msg=encodeURIComponent(`🥟 *Elchai Pastelaria*\n\nOlá ${p.cliente.nome.split(" ")[0]}! Pedido *#${p.id}*:\n\n${ST_EMOJI[ns]} *${ST_LABELS[ns]}*`);
      setTimeout(()=>window.open(`https://wa.me/${tel}?text=${msg}`,"_blank"),200);
      if(p.id===pedidoConf?.id) setPedidoConf({...p,status:ns});
      return{...p,status:ns};
    });
    upP(n);
  };

  const handleFoto=e=>{const f=e.target.files[0];if(!f||!editFotoKey)return;const r=new FileReader();r.onload=ev=>upF({..._fotos,[editFotoKey]:ev.target.result});r.readAsDataURL(f);};
  const handleLogo=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=ev=>upL({logo:ev.target.result});r.readAsDataURL(f);};

  const itens=CARDAPIO.filter(i=>i.cat===cat&&i.sabor.toLowerCase().includes(busca.toLowerCase()));
  const hoje=new Date().toLocaleDateString("pt-BR");
  const vHoje=pedidos.filter(p=>p.data.startsWith(hoje));
  const tHoje=vHoje.reduce((s,p)=>s+(p.total||0)+(p.frete||0),0);
  const ativos=pedidos.filter(p=>p.status<3);
  const ultimoPedido=pedidoConf?(_pedidos.find(x=>x.id===pedidoConf.id)||pedidoConf):null;

  const app={fontFamily:"'Segoe UI',sans-serif",background:G.bg,minHeight:"100vh",color:"#fff",maxWidth:480,margin:"0 auto"};

  // ── SPLASH (não logado) ──
  if(view==="splash") return(
    <div style={app}>
      <div style={{background:`linear-gradient(180deg,#6b0000 0%,#3a0800 55%,${G.bg} 100%)`,padding:"48px 20px 32px",textAlign:"center"}}>
        <div style={{display:"flex",justifyContent:"center",marginBottom:16}}><LogoBadge logo={loja.logo} size={75}/></div>
        <div style={{fontSize:13,color:G.gl,letterSpacing:3,fontWeight:700,marginBottom:6}}>✦ DEUS VIVO ✦</div>
        <div style={{fontSize:13,color:G.tm,marginBottom:30,lineHeight:1.6}}>Pastel · Cuscuz · Hambúrguer<br/>📍 Cidade Kemel · Zona Leste SP</div>
        <button style={btnG} onClick={()=>setView("login-tel")}>📱 Entrar com WhatsApp</button>
        <div style={{display:"flex",gap:10,marginTop:4}}>
          <button style={{...btnD,flex:1,marginBottom:0}} onClick={()=>window.open(`https://wa.me/${WHATSAPP}`,"_blank")}>💬 WhatsApp</button>
          <button style={{...btnD,flex:1,marginBottom:0}} onClick={()=>window.open(`https://instagram.com/${INSTAGRAM}`,"_blank")}>📸 Instagram</button>
        </div>
        <button style={{...btnD,fontSize:11,color:"#555",marginTop:10}} onClick={()=>setView("admin")}>🔐 Painel do Dono</button>
      </div>
    </div>
  );

  // ── LOGIN TEL ──
  if(view==="login-tel") return(
    <div style={app}>
      <div style={hdr}><button style={btnBack} onClick={()=>setView("splash")}>← Voltar</button><span style={{fontWeight:900,fontSize:17,background:gg,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Entrar</span><div/></div>
      <AuthTel onNext={onTelNext} onBack={()=>setView("splash")}/>
    </div>
  );

  // ── LOGIN SENHA ──
  if(view==="login-senha"){
    const tel=authTel.replace(/\D/g,"");
    const cli=_clientes.find(c=>c.tel.replace(/\D/g,"")=== tel);
    return(
      <div style={app}>
        <div style={hdr}><button style={btnBack} onClick={()=>setView("login-tel")}>← Voltar</button><span style={{fontWeight:900,fontSize:17,background:gg,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Sua Senha</span><div/></div>
        <div style={{padding:"30px 20px",textAlign:"center"}}>
          <div style={{fontSize:48,marginBottom:10}}>🔑</div>
          <div style={{fontSize:17,fontWeight:800,color:G.gl,marginBottom:4}}>Olá, {cli?.nome?.split(" ")[0]}!</div>
          <div style={{fontSize:13,color:G.tm,marginBottom:20}}>Digite sua senha para entrar</div>
          <input type="password" style={inp} placeholder="Sua senha" value={senhaInput} onChange={e=>setSenhaInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&verificarSenha()}/>
          {senhaErr&&<div style={{color:"#f55",fontSize:13,marginBottom:8}}>{senhaErr}</div>}
          <button style={btnG} onClick={verificarSenha}>Entrar →</button>
          {/* Esqueci minha senha */}
          {!mostrarDica
            ? <button style={{...btnD,marginTop:4}} onClick={()=>setMostrarDica(true)}>🤔 Esqueci minha senha</button>
            : <div style={{background:G.bc,borderRadius:12,padding:"14px",marginTop:8,border:`1px solid ${G.gold}33`,textAlign:"left"}}>
                <div style={{fontSize:12,color:G.tm,marginBottom:6}}>💡 Sua dica de senha:</div>
                <div style={{fontSize:15,fontWeight:700,color:G.gl,marginBottom:12}}>"{cli?.dica}"</div>
                <div style={{fontSize:12,color:G.tm,marginBottom:8}}>Ainda não lembrou? Fale com a loja:</div>
                <button style={{...btnD,background:"linear-gradient(135deg,#25d366,#128c7e)",color:"#fff",border:"none",marginBottom:0}} onClick={()=>window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Olá Elchai! Esqueci minha senha. Meu número é ${authTel}. Pode resetar?`)}`,"_blank")}>
                  💬 Pedir reset pelo WhatsApp
                </button>
              </div>
          }
        </div>
      </div>
    );
  }
  if(view==="login-cad") return(
    <div style={app}>
      <div style={hdr}><button style={btnBack} onClick={()=>setView("login-tel")}>← Voltar</button><span style={{fontWeight:900,fontSize:17,background:gg,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Cadastro</span><div/></div>
      <AuthCadastro tel={authTel} form={cadForm} setForm={setCadForm} onSave={onCadSave} onBack={()=>setView("login-tel")}/>
    </div>
  );

  // ── NOVA SENHA (após reset) ──
  if(view==="nova-senha"){
    const salvar=()=>{
      if(!novaSenhaInput||!novaSenhaConf||!novaDicaInput){setNovaSenhaErr("Preencha todos os campos.");return;}
      if(novaSenhaInput!==novaSenhaConf){setNovaSenhaErr("As senhas não coincidem.");return;}
      const n=_clientes.map(x=>x.tel===cliente.tel?{...x,senha:novaSenhaInput,dica:novaDicaInput,senhaResetada:false}:x);
      upC(n);
      setEndForm(f=>({...f,rua:cliente.rua||"",num:cliente.num||"",bairroSel:cliente.bairro||""}));
      const ped=_pedidos.find(x=>x.cliente.tel===cliente.tel);
      if(ped){setPedidoConf(ped);setPedidoTs(ped.ts||null);}
      dbSet("elchai_sessao",{tel:cliente.tel,pedidoId:ped?.id||null,pedidoTs:ped?.ts||null});
      setNovaSenhaInput("");setNovaSenhaConf("");setNovaDicaInput("");setNovaSenhaErr("");
      setView("home");
    };
    return(
      <div style={app}>
        <div style={hdr}><div/><span style={{fontWeight:900,fontSize:17,background:gg,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Nova Senha</span><div/></div>
        <div style={{padding:"24px 20px"}}>
          <div style={{fontSize:48,textAlign:"center",marginBottom:10}}>🔑</div>
          <div style={{fontSize:15,fontWeight:800,color:G.gl,textAlign:"center",marginBottom:4}}>Crie uma nova senha</div>
          <div style={{fontSize:13,color:G.tm,textAlign:"center",marginBottom:20}}>Sua senha foi resetada. Crie uma nova para continuar!</div>
          <label style={lbl}>Nova senha *</label>
          <input type="password" style={inp} placeholder="Ex: gato2010, flamengo" value={novaSenhaInput} onChange={e=>setNovaSenhaInput(e.target.value)}/>
          <label style={lbl}>Confirme a senha *</label>
          <input type="password" style={inp} placeholder="Digite a senha novamente" value={novaSenhaConf} onChange={e=>setNovaSenhaConf(e.target.value)}/>
          {novaSenhaInput&&novaSenhaConf&&(
            <div style={{fontSize:12,marginBottom:8,color:novaSenhaInput===novaSenhaConf?"#6f6":"#f55"}}>
              {novaSenhaInput===novaSenhaConf?"✅ Senhas coincidem":"❌ Senhas não coincidem"}
            </div>
          )}
          <div style={{background:"#1a2a1a",borderRadius:10,padding:"10px",marginBottom:10,fontSize:12,color:"#aaa",border:"1px solid #2d5a2d"}}>
            💡 Use algo fácil de lembrar: nome do pet, time, data especial.
          </div>
          <label style={lbl}>Crie uma dica para lembrar *</label>
          <input style={inp} placeholder="Ex: nome do meu gato" value={novaDicaInput} onChange={e=>setNovaDicaInput(e.target.value)}/>
          {novaSenhaErr&&<div style={{color:"#f55",fontSize:13,marginBottom:8}}>{novaSenhaErr}</div>}
          <button style={btnG} onClick={salvar}>✅ Salvar nova senha</button>
        </div>
      </div>
    );
  }
  if(view==="home") return(
    <div style={app}>
      <div style={hdr}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          {loja.logo?<img src={loja.logo} style={{width:34,height:34,borderRadius:"50%",border:`1px solid ${G.gold}`}} alt="logo"/>:<span style={{fontSize:26}}>🥟</span>}
          <div><div style={{fontWeight:900,fontSize:19,background:gg,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>ELCHAI</div><div style={{fontSize:10,color:G.tm,letterSpacing:2}}>PASTELARIA</div></div>
        </div>
        <button style={{...btnBack,fontSize:12}} onClick={logout}>Sair</button>
      </div>

      {/* Saudação */}
      <div style={{background:`linear-gradient(180deg,#6b0000 0%,#3a0800 60%,${G.bg} 100%)`,padding:"24px 20px 20px",textAlign:"center"}}>
        <div style={{display:"flex",justifyContent:"center",marginBottom:12}}><LogoBadge logo={loja.logo} size={55}/></div>
        <div style={{fontSize:18,fontWeight:800,color:"#fff",marginBottom:4}}>Olá, {cliente?.nome?.split(" ")[0]}! 👋</div>
        <div style={{fontSize:13,color:G.tm,marginBottom:24}}>O que você quer fazer hoje?</div>

        {/* Dois botões principais */}
        <button style={{...btnG,fontSize:17,padding:"18px",marginBottom:12}} onClick={()=>setView("cardapio")}>
          🍽️ Fazer Pedido
        </button>
        <button style={{...btnR,fontSize:16,padding:"16px",position:"relative"}} onClick={()=>setView("acompanhar")}>
          📍 Acompanhar Pedido
          {ultimoPedido&&ultimoPedido.status<3&&(
            <span style={{position:"absolute",top:10,right:14,background:G.gl,color:"#000",borderRadius:20,padding:"2px 8px",fontSize:11,fontWeight:800}}>
              {ST_EMOJI[ultimoPedido.status]}
            </span>
          )}
        </button>

        {/* Status rápido se tiver pedido ativo */}
        {ultimoPedido&&ultimoPedido.status<3&&(
          <div style={{background:G.bc,borderRadius:12,padding:"12px 14px",border:`1px solid ${G.gold}33`,textAlign:"left",marginTop:4}}>
            <div style={{fontSize:12,color:G.tm,marginBottom:4}}>Último pedido</div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div>
                <div style={{fontWeight:800,color:G.gl}}>#{ultimoPedido.id}</div>
                <div style={{fontSize:12,color:"#ccc"}}>{ultimoPedido.itens.length} item(ns) · {fmt((ultimoPedido.total||0)+(ultimoPedido.frete||0))}</div>
              </div>
              <Badge i={ultimoPedido.status}/>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // ── CARDÁPIO ──
  if(view==="cardapio") return(
    <div style={app}>
      <div style={hdr}>
        <div style={{display:"flex",alignItems:"center",gap:10}}><button style={btnBack} onClick={()=>setView("home")}>← Home</button><span style={{fontWeight:900,fontSize:17,background:gg,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Cardápio</span></div>
        {cartN>0&&<div style={{background:gg,color:"#000",borderRadius:20,padding:"5px 13px",fontSize:13,fontWeight:800,cursor:"pointer"}} onClick={()=>setView("carrinho")}>🛒 {cartN} · {fmt(total)}</div>}
      </div>
      <div style={{display:"flex",gap:8,padding:"10px 12px",overflowX:"auto",background:G.bc2}}>
        {CATS.map(c=><button key={c} style={{background:cat===c?gr:G.bc,color:cat===c?G.gl:G.tm,border:`1px solid ${cat===c?G.gold:"transparent"}`,borderRadius:20,padding:"7px 14px",fontSize:12,fontWeight:700,cursor:"pointer",whiteSpace:"nowrap"}} onClick={()=>setCat(c)}>{ICONS[c]} {c}</button>)}
      </div>
      <input style={{margin:"8px 12px",background:G.bc,border:`1px solid ${G.gold}33`,borderRadius:10,padding:"10px 13px",color:"#fff",fontSize:14,width:"calc(100% - 24px)",boxSizing:"border-box"}} placeholder="🔍 Buscar sabor..." value={busca} onChange={e=>setBusca(e.target.value)}/>
      <div style={{paddingBottom:80}}>
        {itens.map((item,i)=>{const q=qtyOf(item),fk=iKey(item.cat,item.sabor),foto=fotos[fk];return(
          <div key={i} style={{background:G.bc,borderRadius:12,padding:"12px 13px",margin:"6px 12px",display:"flex",alignItems:"center",gap:10,border:`1px solid ${G.gold}18`}}>
            {foto?<img src={foto} style={{width:58,height:58,borderRadius:10,objectFit:"cover",flexShrink:0}} alt={item.sabor}/>:<div style={{width:58,height:58,borderRadius:10,background:G.bc2,border:`1px dashed ${G.gold}44`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,flexShrink:0}}>{ICONS[item.cat]}</div>}
            <div style={{flex:1}}><div style={{fontSize:14,fontWeight:700}}>{item.sabor}</div><div style={{fontSize:13,color:G.gl,fontWeight:700}}>{fmt(item.preco)}</div></div>
            <div style={{display:"flex",alignItems:"center",gap:6,flexShrink:0}}>
              {q>0&&<button style={{background:gr,color:"#fff",border:"none",borderRadius:8,width:30,height:30,fontSize:18,cursor:"pointer",fontWeight:800}} onClick={()=>remCart(item)}>−</button>}
              {q>0&&<span style={{fontSize:16,fontWeight:800,minWidth:22,textAlign:"center",color:G.gl}}>{q}</span>}
              <button style={{background:gr,color:"#fff",border:"none",borderRadius:8,width:30,height:30,fontSize:18,cursor:"pointer",fontWeight:800}} onClick={()=>addCart(item)}>+</button>
            </div>
          </div>
        );})}
      </div>
      {cartN>0&&<div style={{position:"sticky",bottom:0,background:G.bg,padding:"11px 13px",borderTop:`1px solid ${G.gold}22`}}><button style={btnG} onClick={()=>setView("carrinho")}>🛒 Carrinho ({cartN}) — {fmt(total)}</button></div>}
    </div>
  );

  // ── CARRINHO ──
  if(view==="carrinho") return(
    <div style={app}>
      <div style={hdr}><button style={btnBack} onClick={()=>setView("cardapio")}>← Cardápio</button><span style={{fontWeight:900,fontSize:17,background:gg,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Carrinho</span><div/></div>
      <div style={{padding:"14px 14px 0"}}>
        {cart.map((item,i)=>(
          <div key={i} style={{background:G.bc,borderRadius:12,padding:"12px 13px",margin:"6px 0",display:"flex",alignItems:"center",gap:10}}>
            {fotos[iKey(item.cat,item.sabor)]?<img src={fotos[iKey(item.cat,item.sabor)]} style={{width:50,height:50,borderRadius:8,objectFit:"cover"}} alt={item.sabor}/>:<div style={{width:50,height:50,borderRadius:8,background:G.bc2,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20}}>{ICONS[item.cat]}</div>}
            <div style={{flex:1}}><div style={{fontSize:14,fontWeight:700}}>{item.sabor}</div><div style={{fontSize:12,color:G.tm}}>{fmt(item.preco)}/un</div></div>
            <div style={{display:"flex",alignItems:"center",gap:6}}>
              <button style={{background:gr,color:"#fff",border:"none",borderRadius:8,width:30,height:30,fontSize:18,cursor:"pointer",fontWeight:800}} onClick={()=>remCart(item)}>−</button>
              <span style={{fontSize:16,fontWeight:800,color:G.gl,minWidth:20,textAlign:"center"}}>{item.qty}</span>
              <button style={{background:gr,color:"#fff",border:"none",borderRadius:8,width:30,height:30,fontSize:18,cursor:"pointer",fontWeight:800}} onClick={()=>addCart(item)}>+</button>
            </div>
          </div>
        ))}
        <div style={{background:G.bc,borderRadius:12,padding:"13px",margin:"8px 0",border:`1px solid ${G.gold}33`,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <span style={{fontWeight:700}}>Subtotal</span><span style={{fontWeight:900,fontSize:20,color:G.gl}}>{fmt(total)}</span>
        </div>
      </div>
      {cartN>0&&<div style={{position:"sticky",bottom:0,background:G.bg,padding:"11px 13px",borderTop:`1px solid ${G.gold}22`}}><button style={btnG} onClick={()=>setView("checkout")}>Continuar →</button></div>}
    </div>
  );

  // ── CHECKOUT ──
  if(view==="checkout"){
    const bi=BAIRROS.find(x=>x.b===endForm.bairroSel);
    const kmPrev=bi?haversine(LOJA_LAT,LOJA_LNG,bi.lat,bi.lng):null;
    const fPrev=kmPrev?calcFrete(kmPrev):null;
    return(
      <div style={app}>
        <div style={hdr}><button style={btnBack} onClick={()=>setView("carrinho")}>← Carrinho</button><span style={{fontWeight:900,fontSize:17,background:gg,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Entrega</span><div/></div>
        <div style={{padding:"14px"}}>
          <div style={{background:G.bc,borderRadius:12,padding:"12px 14px",marginBottom:14,border:`1px solid ${G.gold}33`,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div><div style={{fontWeight:700,color:G.gl}}>👤 {cliente.nome}</div><div style={{fontSize:12,color:G.tm}}>📱 {cliente.tel}</div></div>
          </div>
          <label style={lbl}>Rua</label><input style={inp} value={endForm.rua} onChange={e=>setEndForm({...endForm,rua:e.target.value})}/>
          <label style={lbl}>Número</label><input style={inp} value={endForm.num} onChange={e=>setEndForm({...endForm,num:e.target.value})}/>
          <label style={lbl}>Bairro *</label>
          <select style={{...inp,cursor:"pointer"}} value={endForm.bairroSel} onChange={e=>{setEndForm({...endForm,bairroSel:e.target.value});setFrete(null);setFreteErr("");}}>
            <option value="">-- Selecione --</option>
            {BAIRROS.map(b=>{const km=haversine(LOJA_LAT,LOJA_LNG,b.lat,b.lng),f=calcFrete(km);return f!==null&&<option key={b.b} value={b.b}>{b.b} · {fmt(f)} ({km.toFixed(1)}km)</option>;})}
          </select>
          {endForm.bairroSel&&fPrev&&!frete&&<div style={{background:"#1a2a1a",borderRadius:10,padding:"10px",marginBottom:10,fontSize:13,color:"#aaa",border:"1px solid #2d5a2d"}}>🛵 Frete estimado: <strong style={{color:"#6f6"}}>{fmt(fPrev)}</strong></div>}
          {freteErr&&<div style={{color:"#f55",fontSize:13,marginBottom:8}}>{freteErr}</div>}
          {frete&&<div style={{background:"#1a3a1a",borderRadius:10,padding:"10px",marginBottom:10,border:"1px solid #2d7a2d",display:"flex",justifyContent:"space-between"}}><span style={{color:"#6f6",fontSize:13}}>🛵 Frete ({frete.km}km)</span><span style={{color:"#6f6",fontWeight:800}}>{fmt(frete.valor)}</span></div>}
          <label style={lbl}>Observações</label>
          <input style={inp} placeholder="Sem cebola, portão azul..." value={endForm.obs} onChange={e=>setEndForm({...endForm,obs:e.target.value})}/>
          <div style={{fontSize:14,fontWeight:800,color:G.gl,marginBottom:10}}>💳 Pagamento</div>
          <div style={{display:"flex",gap:8,marginBottom:12}}>
            {["pix","dinheiro","cartao"].map(p=><div key={p} style={{flex:1,background:endForm.pagto===p?gr:G.bc,border:`2px solid ${endForm.pagto===p?G.gl:G.bc2}`,borderRadius:10,padding:"9px 5px",textAlign:"center",cursor:"pointer",fontSize:12,fontWeight:700,color:endForm.pagto===p?G.gl:G.tm}} onClick={()=>setEndForm({...endForm,pagto:p})}>{p==="pix"?"💠 Pix":p==="dinheiro"?"💵 Dinheiro":"💳 Cartão"}</div>)}
          </div>
          <div style={{background:G.bc,borderRadius:12,padding:"13px",border:`1px solid ${G.gold}33`,marginBottom:12}}>
            <div style={{fontWeight:700,color:G.gl,marginBottom:6}}>Resumo</div>
            {cart.map((x,i)=><div key={i} style={{fontSize:13,color:"#ccc",display:"flex",justifyContent:"space-between",marginBottom:2}}><span>{x.qty}x {x.sabor}</span><span>{fmt(x.preco*x.qty)}</span></div>)}
            {frete&&<div style={{fontSize:13,color:"#ccc",display:"flex",justifyContent:"space-between",marginTop:4}}><span>🛵 Frete</span><span>{fmt(frete.valor)}</span></div>}
            <div style={{borderTop:`1px solid ${G.gold}33`,marginTop:8,paddingTop:8,fontWeight:900,fontSize:16,display:"flex",justifyContent:"space-between",color:G.gl}}><span>Total</span><span>{fmt(total+(frete?.valor||0))}</span></div>
          </div>
        </div>
        <div style={{position:"sticky",bottom:0,background:G.bg,padding:"11px 13px",borderTop:`1px solid ${G.gold}22`}}><button style={btnG} onClick={salvarPedido}>✅ Confirmar Pedido</button></div>
        <div style={{height:80}}/>
      </div>
    );
  }

  // ── CONFIRMADO ──
  if(view==="confirmado"&&pedidoConf){
    const p=ultimoPedido||pedidoConf;
    const msg=encodeURIComponent(`🥟 *Novo Pedido — Elchai*\n📋 #${p.id}\n\n`+p.itens.map(x=>`• ${x.qty}x ${x.sabor} — ${fmt(x.preco*x.qty)}`).join("\n")+`\n\n🛵 Frete: ${fmt(p.frete)}\n💰 Total: ${fmt(p.total+p.frete)}\n💳 ${p.pagto}\n📍 ${p.cliente.rua}, ${p.cliente.num} - ${p.cliente.bairro}\n👤 ${p.cliente.nome} | ${p.cliente.tel}`);
    return(
      <div style={app}>
        <div style={{background:`linear-gradient(180deg,#6b0000 0%,${G.bg} 40%)`,padding:"36px 20px 0",textAlign:"center"}}>
          <div style={{fontSize:70,marginBottom:8}}>🎉</div>
          <div style={{background:gg,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontSize:22,fontWeight:900,marginBottom:4}}>Pedido Confirmado!</div>
          <div style={{fontSize:14,color:"#ccc",marginBottom:2}}>Código: <strong style={{color:G.gl}}>#{p.id}</strong></div>
          <div style={{fontSize:12,color:G.tm}}>🛵 {fmt(p.frete)} · Total: {fmt(p.total+p.frete)}</div>
        </div>
        <Timer startTs={pedidoTs}/>
        <div style={{padding:"0 14px 24px"}}>
          <button style={{...btnG,background:"linear-gradient(135deg,#25d366,#128c7e)",color:"#fff"}} onClick={()=>window.open(`https://wa.me/${WHATSAPP}?text=${msg}`,"_blank")}>💬 Enviar pedido no WhatsApp</button>
          <button style={btnG} onClick={()=>setView("acompanhar")}>📍 Acompanhar Pedido ao Vivo</button>
          <button style={btnR} onClick={()=>setView("home")}>🏠 Voltar ao Início</button>
        </div>
      </div>
    );
  }

  // ── ACOMPANHAR ──
  if(view==="acompanhar"){
    const p=ultimoPedido;
    if(!p) return(
      <div style={app}>
        <div style={hdr}><button style={btnBack} onClick={()=>setView("home")}>← Home</button><span style={{fontWeight:900,fontSize:17,background:gg,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Acompanhar</span><div/></div>
        <div style={{padding:40,textAlign:"center"}}>
          <div style={{fontSize:48,marginBottom:12}}>📭</div>
          <div style={{color:G.tm,fontSize:15,marginBottom:20}}>Você ainda não fez nenhum pedido.</div>
          <button style={btnG} onClick={()=>setView("cardapio")}>🍽️ Fazer Pedido</button>
        </div>
      </div>
    );
    const steps=[
      {label:"Pedido Recebido",desc:"Sua solicitação chegou para a loja!",icon:"📋"},
      {label:"Em Preparo",desc:"Nosso time está preparando tudo com carinho.",icon:"👨‍🍳"},
      {label:"Saiu para Entrega",desc:"O entregador está a caminho!",icon:"🛵"},
      {label:"Entregue",desc:"Bom apetite! Obrigado pela preferência 🥟",icon:"✅"},
    ];
    return(
      <div style={app}>
        <div style={hdr}>
          <button style={btnBack} onClick={()=>setView("home")}>← Home</button>
          <span style={{fontWeight:900,fontSize:17,background:gg,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Meu Pedido</span>
          <div/>
        </div>

        {/* Cabeçalho */}
        <div style={{background:`linear-gradient(135deg,#6b0000,#3a0800)`,padding:"16px",textAlign:"center",borderBottom:`1px solid ${G.gold}33`}}>
          <div style={{fontSize:11,color:G.tm,letterSpacing:2,marginBottom:4}}>PEDIDO</div>
          <div style={{fontSize:28,fontWeight:900,color:G.gl,marginBottom:2}}>#{p.id}</div>
          <div style={{fontSize:12,color:"#ccc",marginBottom:6}}>{p.data}</div>
          <Badge i={p.status}/>
        </div>

        {/* Timeline */}
        <div style={{padding:"20px 20px 8px"}}>
          {steps.map((step,i)=>{
            const done=p.status>i, active=p.status===i;
            return(
              <div key={i} style={{display:"flex",gap:14,position:"relative"}}>
                {i<steps.length-1&&<div style={{position:"absolute",left:19,top:40,width:2,height:50,background:done?G.gl:`${G.gold}22`,zIndex:0,transition:"background 0.5s"}}/>}
                <div style={{width:40,height:40,borderRadius:"50%",background:done||active?gg:G.bc2,border:`2px solid ${done||active?G.gl:G.gold+"33"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,flexShrink:0,zIndex:1,boxShadow:active?`0 0 14px ${G.gl}88`:"none",transition:"all 0.5s"}}>
                  {done?"✅":step.icon}
                </div>
                <div style={{paddingBottom:42}}>
                  <div style={{fontSize:14,fontWeight:800,color:done||active?"#fff":G.tm}}>{step.label}</div>
                  <div style={{fontSize:12,color:done||active?G.tm:"#444",marginTop:2}}>{step.desc}</div>
                  {active&&<div style={{display:"inline-block",background:gg,color:"#000",borderRadius:20,padding:"2px 10px",fontSize:11,fontWeight:800,marginTop:4}}>● Status atual</div>}
                </div>
              </div>
            );
          })}
        </div>

        {p.status<3&&<Timer startTs={pedidoTs||Date.now()}/>}
        {p.status===3&&(
          <div style={{background:"#1a3a1a",borderRadius:16,padding:"18px",margin:"0 14px 14px",border:"1px solid #2d7a2d",textAlign:"center"}}>
            <div style={{fontSize:36,marginBottom:6}}>🥟</div>
            <div style={{fontSize:18,fontWeight:900,color:"#6f6"}}>Pedido Entregue!</div>
            <div style={{fontSize:13,color:"#aaa",marginTop:4}}>Bom apetite! Volte sempre 😊</div>
          </div>
        )}

        {/* Resumo */}
        <div style={{...card,margin:"0 12px 10px"}}>
          <div style={{fontWeight:800,color:G.gl,marginBottom:8}}>🧾 Resumo</div>
          {p.itens.map((x,i)=><div key={i} style={{fontSize:13,color:"#ccc",display:"flex",justifyContent:"space-between",marginBottom:3}}><span>{x.qty}x {x.sabor}</span><span>{fmt(x.preco*x.qty)}</span></div>)}
          <div style={{fontSize:13,color:"#ccc",display:"flex",justifyContent:"space-between",marginTop:4}}><span>🛵 Frete</span><span>{fmt(p.frete||0)}</span></div>
          <div style={{borderTop:`1px solid ${G.gold}33`,marginTop:8,paddingTop:8,fontWeight:900,fontSize:15,display:"flex",justifyContent:"space-between",color:G.gl}}><span>Total</span><span>{fmt((p.total||0)+(p.frete||0))}</span></div>
          <div style={{marginTop:8,fontSize:12,color:G.tm}}>📍 {p.cliente.rua}, {p.cliente.num} - {p.cliente.bairro}</div>
          <div style={{fontSize:12,color:G.tm}}>💳 {p.pagto}</div>
        </div>

        <div style={{padding:"0 12px 24px"}}>
          <button style={{background:"linear-gradient(135deg,#25d366,#128c7e)",color:"#fff",border:"none",borderRadius:12,padding:"12px",fontSize:14,fontWeight:700,cursor:"pointer",width:"100%",marginBottom:8}} onClick={()=>window.open(`https://wa.me/${WHATSAPP}`,"_blank")}>💬 Falar com a loja</button>
          {p.status===3&&<button style={btnG} onClick={()=>setView("cardapio")}>🍽️ Fazer novo pedido</button>}
          <button style={btnD} onClick={()=>setView("home")}>🏠 Início</button>
        </div>
      </div>
    );
  }

  // ── ADMIN ──
  if(view==="admin"){
    if(!adminOk) return(
      <div style={{...app,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:24}}>
        <div style={{fontSize:56,marginBottom:10}}>🔐</div>
        <div style={{fontWeight:900,fontSize:22,background:gg,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginBottom:16}}>PAINEL DO DONO</div>
        <input type="password" style={{...inp,width:200,textAlign:"center"}} placeholder="PIN" value={adminPin} onChange={e=>setAdminPin(e.target.value)}/>
        <button style={{...btnG,width:200}} onClick={()=>{if(adminPin==="1234")setAdminOk(true);else alert("PIN incorreto");}}>Entrar</button>
        <button style={{...btnBack,marginTop:8}} onClick={()=>setView("splash")}>← Voltar</button>
        <div style={{fontSize:11,color:"#555",marginTop:10}}>PIN padrão: 1234</div>
      </div>
    );
    const tabs=[["pedidos","🔥 Ativos"],["historico","📋 Hist."],["clientes","👥 Clientes"],["fotos","🖼️ Fotos"],["marketing","📣 Mkt"],["config","⚙️ Config"]];
    const expPedidos=()=>{if(!pedidos.length)return alert("Sem pedidos.");exportCSV(pedidos.map(p=>({ID:p.id,Data:p.data,Cliente:p.cliente.nome,Tel:p.cliente.tel,Bairro:p.cliente.bairro,Endereço:`${p.cliente.rua} ${p.cliente.num}`,Itens:p.itens.map(x=>`${x.qty}x ${x.sabor}`).join("|"),Subtotal:p.total,Frete:p.frete||0,Total:(p.total||0)+(p.frete||0),Pgto:p.pagto,Status:ST_LABELS[p.status]})),"pedidos_elchai.csv");};
    const expClientes=()=>{if(!clientes.length)return alert("Sem clientes.");exportCSV(clientes.map(c=>({Nome:c.nome,Tel:c.tel,Rua:c.rua,Num:c.num,Bairro:c.bairro,Pedidos:c.pedidos,Desde:c.primeiro,Ultimo:c.ultimo})),"clientes_elchai.csv");};
    const dispararMassa=()=>{
      if(disparando||!_clientes.length)return;
      setDisparando(true);setDisparoIdx(0);let i=0;
      const next=()=>{if(i>=_clientes.length){setDisparando(false);setDisparoIdx(0);alert("✅ Concluído!");return;}
        window.open(`https://wa.me/${_clientes[i].tel.replace(/\D/g,"")}?text=${encodeURIComponent(msgMassa)}`,"_blank");
        i++;setDisparoIdx(i);setTimeout(next,3000);};
      next();
    };
    return(
      <div style={app}>
        <div style={hdr}>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            {loja.logo?<img src={loja.logo} style={{width:28,height:28,borderRadius:"50%",border:`1px solid ${G.gold}`}} alt="logo"/>:<span>⚙️</span>}
            <span style={{fontWeight:900,fontSize:17,background:gg,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Admin</span>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            {/* Sino de notificação */}
            <div style={{position:"relative",cursor:"pointer"}} onClick={()=>setTab("pedidos")}>
              <span style={{fontSize:22}}>🔔</span>
              {ativos.length>0&&<span style={{position:"absolute",top:-4,right:-4,background:"#f55",color:"#fff",borderRadius:"50%",width:18,height:18,fontSize:11,fontWeight:900,display:"flex",alignItems:"center",justifyContent:"center"}}>{ativos.length}</span>}
            </div>
            <button style={btnBack} onClick={()=>{setAdminOk(false);setView("splash");}}>Sair</button>
          </div>
        </div>
        <div style={{display:"flex",gap:8,padding:"12px 12px 6px"}}>
          {[{l:"Total",v:pedidos.length},{l:"Hoje",v:vHoje.length},{l:"Faturado",v:fmt(tHoje)},{l:"Clientes",v:clientes.length}].map((s,i)=>(
            <div key={i} style={{background:G.bc,borderRadius:14,padding:"13px 8px",textAlign:"center",flex:1,border:`1px solid ${G.gold}22`}}>
              <div style={{fontSize:i===2?13:20,fontWeight:900,color:G.gl}}>{s.v}</div>
              <div style={{fontSize:11,color:G.tm,marginTop:3}}>{s.l}</div>
            </div>
          ))}
        </div>
        <div style={{display:"flex",background:G.bc2,borderBottom:`1px solid ${G.gold}22`,overflowX:"auto"}}>
          {tabs.map(([k,l])=><button key={k} style={{flex:1,padding:"10px 2px",textAlign:"center",fontSize:10,fontWeight:700,cursor:"pointer",color:tab===k?G.gl:G.tm,background:"transparent",border:"none",borderBottom:`2px solid ${tab===k?G.gl:"transparent"}`,whiteSpace:"nowrap"}} onClick={()=>setTab(k)}>{l}</button>)}
        </div>

        {tab==="pedidos"&&<div style={{padding:"10px 0"}}>
          {ativos.length===0&&<div style={{color:G.tm,textAlign:"center",padding:24}}>Nenhum pedido ativo</div>}
          {ativos.map(p=>(
            <div key={p.id} style={card}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:7}}><span style={{fontWeight:800,color:G.gl}}>#{p.id}</span><Badge i={p.status}/></div>
              <div style={{fontSize:13,color:"#ccc",marginBottom:2}}>👤 {p.cliente.nome} · 📱 {p.cliente.tel}</div>
              <div style={{fontSize:13,color:"#ccc",marginBottom:2}}>📍 {p.cliente.rua}, {p.cliente.num} - {p.cliente.bairro}</div>
              {p.cliente.obs&&<div style={{fontSize:12,color:G.gl,marginBottom:3}}>📝 {p.cliente.obs}</div>}
              <div style={{fontSize:12,color:G.tm,marginBottom:6}}>{p.itens.map((x,i)=><span key={i}>{x.qty}x {x.sabor}{i<p.itens.length-1?", ":""}</span>)}</div>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <span style={{fontWeight:800,color:G.gl}}>{fmt((p.total||0)+(p.frete||0))} · {p.pagto}</span>
                <div style={{display:"flex",gap:6}}>
                  {p.status>0&&<button style={{background:"#555",color:"#fff",border:"none",borderRadius:8,width:30,height:30,cursor:"pointer"}} onClick={()=>updStatus(p.id,-1)}>←</button>}
                  {p.status<3&&<button style={{background:gr,color:"#fff",border:"none",borderRadius:8,width:30,height:30,cursor:"pointer"}} onClick={()=>updStatus(p.id,1)}>{p.status===2?"✅":"→"}</button>}
                </div>
              </div>
            </div>
          ))}
        </div>}

        {tab==="historico"&&<div style={{padding:"10px 0"}}>
          <div style={{padding:"0 12px 10px"}}><button style={{...btnG,padding:"10px",fontSize:13,marginBottom:0}} onClick={expPedidos}>⬇️ Exportar CSV</button></div>
          {pedidos.length===0&&<div style={{color:G.tm,textAlign:"center",padding:24}}>Sem pedidos</div>}
          {pedidos.map(p=>(
            <div key={p.id} style={card}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:5}}><span style={{fontWeight:800,color:G.gl}}>#{p.id}</span><Badge i={p.status}/></div>
              <div style={{fontSize:12,color:G.tm,marginBottom:3}}>🕐 {p.data}</div>
              <div style={{fontSize:13,color:"#ccc",marginBottom:3}}>👤 {p.cliente.nome} · {p.cliente.bairro}</div>
              <div style={{fontWeight:800,color:G.gl}}>{fmt((p.total||0)+(p.frete||0))} · {p.pagto}</div>
            </div>
          ))}
        </div>}

        {tab==="clientes"&&<div style={{padding:"10px 0"}}>
          <div style={{padding:"0 12px 10px"}}><button style={{...btnG,padding:"10px",fontSize:13,marginBottom:0}} onClick={expClientes}>⬇️ Exportar CSV</button></div>
          {clientes.length===0&&<div style={{color:G.tm,textAlign:"center",padding:24}}>Sem clientes</div>}
          {clientes.map((c,i)=><ClienteCard key={i} c={c} upC={upC} BAIRROS={BAIRROS} LOJA_LAT={LOJA_LAT} LOJA_LNG={LOJA_LNG} haversine={haversine} calcFrete={calcFrete} inp={inp} lbl={lbl} btnG={btnG} btnD={btnD} card={card} G={G} gg={gg}/>)}
        </div>}

        {tab==="fotos"&&<div style={{padding:"10px 0"}}>
          <input ref={fotoRef} type="file" accept="image/*" style={{display:"none"}} onChange={handleFoto}/>
          <div style={{padding:"0 12px 8px",fontSize:13,color:G.tm}}>Toque num item para adicionar foto.</div>
          {CATS.map(categoria=>(
            <div key={categoria}>
              <div style={{padding:"6px 14px",fontSize:13,fontWeight:800,color:G.gl,background:G.bc2}}>{ICONS[categoria]} {categoria}</div>
              {CARDAPIO.filter(i=>i.cat===categoria).map((item,i)=>{
                const fk=iKey(item.cat,item.sabor),foto=fotos[fk];
                return(
                  <div key={i} style={{...card,margin:"4px 12px",cursor:"pointer",display:"flex",alignItems:"center",gap:10}} onClick={()=>{setEditFotoKey(fk);setTimeout(()=>fotoRef.current.click(),50);}}>
                    {foto?<img src={foto} style={{width:52,height:52,borderRadius:8,objectFit:"cover"}} alt={item.sabor}/>:<div style={{width:52,height:52,borderRadius:8,background:G.bc2,border:`1px dashed ${G.gold}44`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,color:G.tm}}>+foto</div>}
                    <div style={{flex:1}}><div style={{fontSize:13,fontWeight:700}}>{item.sabor}</div><div style={{fontSize:11,color:G.tm}}>{fmt(item.preco)} · {foto?"✅ com foto":"📷 sem foto"}</div></div>
                    <span>✏️</span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>}

        {tab==="marketing"&&<div style={{padding:"14px"}}>
          <div style={{fontSize:15,fontWeight:800,color:G.gl,marginBottom:10}}>📣 Disparo em Massa</div>
          <div style={{background:"#1a2a1a",borderRadius:10,padding:"10px",marginBottom:12,fontSize:12,color:"#aaa",border:"1px solid #2d5a2d"}}>ℹ️ Abre o WhatsApp de cada cliente. Intervalo de 3s entre disparos.</div>
          <label style={lbl}>Mensagem</label>
          <textarea style={{...inp,height:100,resize:"vertical"}} value={msgMassa} onChange={e=>setMsgMassa(e.target.value)}/>
          <div style={{fontSize:12,color:G.tm,marginBottom:12}}>📋 {clientes.length} cliente(s)</div>
          {disparando&&<div style={{background:G.bc,borderRadius:10,padding:"12px",marginBottom:10,textAlign:"center",border:`1px solid ${G.gold}33`}}>
            <div style={{color:G.gl,fontWeight:700,marginBottom:4}}>Disparando {disparoIdx}/{clientes.length}</div>
            <div style={{background:"#3a1205",borderRadius:20,height:8,overflow:"hidden"}}><div style={{width:`${(disparoIdx/clientes.length)*100}%`,height:"100%",background:gg,borderRadius:20}}/></div>
          </div>}
          <button style={{background:"linear-gradient(135deg,#25d366,#128c7e)",color:"#fff",border:"none",borderRadius:12,padding:"13px",fontSize:14,fontWeight:700,cursor:"pointer",width:"100%",marginBottom:8,opacity:disparando||!clientes.length?0.5:1}} onClick={dispararMassa} disabled={disparando||!clientes.length}>
            {disparando?`⏳ ${disparoIdx}/${clientes.length}...`:"💬 Disparar para Todos"}
          </button>
        </div>}

        {tab==="config"&&<div style={{padding:"14px"}}>
          <input ref={logoRef} type="file" accept="image/*" style={{display:"none"}} onChange={handleLogo}/>
          <div style={{fontSize:15,fontWeight:800,color:G.gl,marginBottom:10}}>🖼️ Logo</div>
          <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:16,background:G.bc,borderRadius:12,padding:"14px",border:`1px solid ${G.gold}33`}}>
            <LogoBadge logo={loja.logo} size={35}/>
            <div style={{flex:1}}><div style={{fontSize:13,color:"#ccc",marginBottom:8}}>Logo atual</div><button style={{...btnG,marginBottom:0,padding:"9px 18px",fontSize:13,width:"auto"}} onClick={()=>logoRef.current.click()}>📷 Trocar Logo</button></div>
          </div>
          <div style={{fontSize:15,fontWeight:800,color:G.gl,marginBottom:10}}>📍 Endereço da Loja</div>
          <label style={lbl}>Rua</label><input style={inp} value={lojaForm.rua||""} onChange={e=>setLojaForm({...lojaForm,rua:e.target.value})}/>
          <div style={{display:"flex",gap:8}}>
            <div style={{flex:1}}><label style={lbl}>Número</label><input style={inp} value={lojaForm.num||""} onChange={e=>setLojaForm({...lojaForm,num:e.target.value})}/></div>
            <div style={{flex:2}}><label style={lbl}>Bairro</label><input style={inp} value={lojaForm.bairro||""} onChange={e=>setLojaForm({...lojaForm,bairro:e.target.value})}/></div>
          </div>
          <label style={lbl}>CEP</label><input style={inp} value={lojaForm.cep||""} onChange={e=>setLojaForm({...lojaForm,cep:e.target.value})}/>
          <div style={{background:"#1a2a1a",borderRadius:10,padding:"10px",marginBottom:12,fontSize:12,color:"#aaa",border:"1px solid #2d5a2d"}}>🛵 até 2km=R$5 · 2–4km=R$8 · 4–6km=R$12</div>
          <button style={btnG} onClick={()=>{upL(lojaForm);alert("✅ Salvo!");}}>💾 Salvar</button>
          <div style={{height:30}}/>
        </div>}
        <div style={{height:30}}/>
      </div>
    );
  }

  return null;
}