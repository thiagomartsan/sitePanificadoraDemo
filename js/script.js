/* BreadVale — projeto demonstrativo fictício. JS puro. */
const WHATSAPP_NUMBER = ""; // demo: configure um número real apenas se o projeto virar cliente
const INSTAGRAM_URL = "";   // demo: sem perfil real associado
const WHATSAPP_MSG = "Olá! Conheci a BreadVale pelo site e gostaria de receber informações sobre produtos e fornecimento para meu estabelecimento.";

/* Conteúdo compartilhado (header, footer, produtos, regiões) */
const NAV = [["produtos","Produtos"],["onde-encontrar","Onde encontrar"],["negocio","Para seu negócio"],["historia","Nossa história"],["contato","Contato"]];
const FILTERS = [["todos","Todos"],["fatiados","Fatiados"],["integrais","Integrais"],["bisnaguinhas","Bisnaguinhas"],["cucas","Cucas"],["lanches","Food service"],["outros","Especiais"]];
const PRODUCTS = [
  {c:"fatiados",n:"Pão de Forma Tradicional",t:"Macio, versátil e pensado para cafés da manhã, torradas e sanduíches do dia a dia.",i:"produto-fatiado"},
  {c:"integrais",n:"Pão Integral Multigrãos",t:"Uma opção de perfil integral, com grãos e textura marcante para ampliar o mix da categoria.",i:"produto-integral"},
  {c:"bisnaguinhas",n:"Bisnaguinhas",t:"Porções macias e práticas para lanches, cafés e momentos em família.",i:"produto-bisnaguinha"},
  {c:"cucas",n:"Cuca de Uva",t:"Uma leitura regional de um clássico de padaria, ideal para café da tarde e sobremesas.",i:"produto-cuca"},
  {c:"lanches",n:"Pão Brioche para Hambúrguer",t:"Macio, dourado e desenvolvido para lancherias, hamburguerias e operações de food service.",i:"produto-lanches"},
  {c:"lanches",n:"Pão de Leite",t:"Sabor suave e miolo macio para lanches rápidos, cafeterias e consumo doméstico.",i:"produto-massinha-doce"},
  {c:"outros",n:"Pão Artesanal Rústico",t:"Casca marcante e apresentação artesanal para tábuas, cafés especiais e refeições.",i:"produto-milho"},
  {c:"outros",n:"Fermentação Natural",t:"Linha de inspiração artesanal com longa fermentação e perfil visual mais rústico.",i:"produto-massa-madre"},
  {c:"outros",n:"Panettone Tradicional",t:"Produto sazonal para ampliar o portfólio em datas especiais e ações de fim de ano.",i:"produto-panettone"},
  {c:"lanches",n:"Linha para Estabelecimentos",t:"Seleção de pães para mercados, cafeterias, lancherias, hamburguerias e outros negócios.",i:"produto-linha-total"}
];
const REGIONS = ["Vale do Paranhana","Vale dos Sinos","Região Metropolitana","Serra Gaúcha","Litoral Norte","Outras regiões do RS"];

/* Fotografias demonstrativas carregadas do Unsplash. Sem relação com empresa real. */
const IMAGES = {
  "hero-produtos":"https://images.unsplash.com/photo-1771160962771-00186d83364e?auto=format&fit=crop&w=1400&q=82",
  "momento-cafe":"https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=1000&q=82",
  "momento-lanche":"https://images.unsplash.com/photo-1709904749558-d943f5005b48?auto=format&fit=crop&w=1000&q=82",
  "momento-sanduiches":"https://images.unsplash.com/photo-1542820242-dd9053219a22?auto=format&fit=crop&w=1000&q=82",
  "momento-negocio":"https://images.unsplash.com/photo-1778472506771-22d00e974d2f?auto=format&fit=crop&w=1000&q=82",
  "fabrica-01":"https://images.unsplash.com/photo-1772758631874-a0a0441393d4?auto=format&fit=crop&w=1200&q=82",
  "fabrica-02":"https://images.unsplash.com/photo-1663904460424-91895028aa9e?auto=format&fit=crop&w=1200&q=82",
  "fabrica-03":"https://images.unsplash.com/photo-1719161147372-da4cd4808072?auto=format&fit=crop&w=1200&q=82",
  "insta-01":"https://images.unsplash.com/photo-1773399159452-0b9b205c751f?auto=format&fit=crop&w=900&q=82",
  "insta-02":"https://images.unsplash.com/photo-1776888230742-b3939d62b115?auto=format&fit=crop&w=900&q=82",
  "insta-03":"https://images.unsplash.com/photo-1762304887826-88a67a8f4a71?auto=format&fit=crop&w=900&q=82",
  "produto-fatiado":"https://images.unsplash.com/photo-1663904460424-91895028aa9e?auto=format&fit=crop&w=900&q=82",
  "produto-integral":"https://images.unsplash.com/photo-1778472506771-22d00e974d2f?auto=format&fit=crop&w=900&q=82",
  "produto-bisnaguinha":"https://images.unsplash.com/photo-1776888230742-b3939d62b115?auto=format&fit=crop&w=900&q=82",
  "produto-cuca":"https://images.unsplash.com/photo-1773399159452-0b9b205c751f?auto=format&fit=crop&w=900&q=82",
  "produto-lanches":"https://images.unsplash.com/photo-1542820242-dd9053219a22?auto=format&fit=crop&w=900&q=82",
  "produto-massinha-doce":"https://images.unsplash.com/photo-1709904749558-d943f5005b48?auto=format&fit=crop&w=900&q=82",
  "produto-milho":"https://images.unsplash.com/photo-1771160962771-00186d83364e?auto=format&fit=crop&w=900&q=82",
  "produto-massa-madre":"https://images.unsplash.com/photo-1719161147372-da4cd4808072?auto=format&fit=crop&w=900&q=82",
  "produto-panettone":"https://images.unsplash.com/photo-1762304887826-88a67a8f4a71?auto=format&fit=crop&w=900&q=82",
  "produto-linha-total":"https://images.unsplash.com/photo-1778472506771-22d00e974d2f?auto=format&fit=crop&w=900&q=82"
};

document.documentElement.classList.add("js");
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const P = {
  factory:'<path d="M3 21V11l6 4v-4l6 4V5h6v16z"/>',
  pin:'<path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  truck:'<path d="M2 6h11v10H2zM13 10h4l4 3v3h-8"/><circle cx="6.5" cy="18" r="1.8"/><circle cx="17.5" cy="18" r="1.8"/>',
  chat:'<path d="M4 20l1.4-4.2A8 8 0 1 1 8.2 18.6z"/>'
};
const ic = n => `<svg class="ic" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n]}</svg>`;
const LOGO = `<span class="logo-txt" aria-label="BreadVale"><span class="logo-bread">Bread</span><span class="logo-vale">Vale</span></span>`;
const page = document.body.dataset.page;

$("#site-header").outerHTML = `<header class="site-header"><div class="container bar"><a class="logo" href="index.html" aria-label="BreadVale, página inicial">${LOGO}</a><nav id="nav" class="nav" aria-label="Principal">${NAV.map(([k,t]) => `<a href="${k}.html"${k===page?' aria-current="page"':""}>${t}</a>`).join("")}<a class="btn btn-primary nav-cta" data-wa href="#">Fale com o comercial</a></nav><a class="btn btn-primary btn-sm hdr-cta" data-wa href="#">Fale com o comercial</a><button class="burger" type="button" aria-expanded="false" aria-controls="nav" aria-label="Abrir menu"><i></i><i></i><i></i></button></div></header>`;

$("#site-footer").outerHTML = `<footer class="footer bg-dark"><div class="container"><div class="fgrid">
<div class="brand"><a class="logo" href="index.html" aria-label="BreadVale">${LOGO}</a><p class="sig">Sabor que acompanha todos os dias.</p><address>Projeto demonstrativo<br>Atuação fictícia no Rio Grande do Sul</address></div>
<div><h3>Produtos</h3><ul><li><a href="produtos.html">Produtos</a></li><li><a href="onde-encontrar.html">Onde encontrar</a></li><li><a href="negocio.html">Para seu negócio</a></li></ul></div>
<div><h3>Empresa</h3><ul><li><a href="historia.html">Nossa história</a></li><li><a href="historia.html#producao">Produção</a></li><li><a href="contato.html">Contato</a></li></ul></div>
<div><h3>Atendimento</h3><ul><li><a data-wa href="#">Comercial</a></li><li><a href="contato.html#formulario">Consumidor</a></li><li><a data-ig href="#">Instagram</a></li></ul></div>
<div><h3>Institucional</h3><ul><li><a data-soon href="#">Política de privacidade</a></li></ul></div>
</div><p class="copy">Projeto demonstrativo fictício criado para portfólio. A BreadVale não representa uma empresa real.</p></div></footer>
<div class="wa-float"><a class="btn btn-primary" data-wa href="#">${ic("chat")}Falar com o comercial</a></div>`;

const FORM = `<form class="form" aria-label="Enviar mensagem">
<div class="field"><label for="f-nome">Nome</label><input id="f-nome" name="nome" autocomplete="name" required></div>
<div class="field"><label for="f-emp">Empresa (opcional)</label><input id="f-emp" name="empresa" autocomplete="organization"></div>
<div class="field"><label for="f-cid">Cidade</label><input id="f-cid" name="cidade" required></div>
<div class="field"><label for="f-mail">E-mail</label><input id="f-mail" name="email" type="email" autocomplete="email" required></div>
<div class="field"><label for="f-wa">WhatsApp (opcional)</label><input id="f-wa" name="whatsapp" type="tel" autocomplete="tel"></div>
<div class="field"><label for="f-ass">Assunto</label><select id="f-ass" name="assunto" required><option value="">Selecione</option><option>Quero vender BreadVale</option><option>Quero encontrar os produtos</option><option>Atendimento ao consumidor</option><option>Outro assunto</option></select></div>
<div class="field full"><label for="f-msg">Mensagem</label><textarea id="f-msg" name="mensagem" required></textarea></div>
<div class="full"><button class="btn btn-primary" type="submit">Enviar mensagem</button><p class="form-status" role="status"></p></div></form>`;

/* Renderização */
const LAB = Object.fromEntries(FILTERS);
$$("[data-render]").forEach(el => {
  const k = el.dataset.render, full = el.hasAttribute("data-full");
  if (k === "products") el.innerHTML = PRODUCTS.slice(0, +el.dataset.limit || 99).map(p => `<article class="card reveal" data-cat="${p.c}"><div class="media" data-img="${p.i}" data-alt="${p.n}"></div><div class="card-body">${full?`<span class="tag">${LAB[p.c]}</span>`:""}<h3>${p.n}</h3><p>${p.t}</p>${full?'<a class="btn btn-outline btn-sm" href="contato.html#formulario">Ver produto</a>':""}</div></article>`).join("");
  if (k === "filters") el.innerHTML = FILTERS.map(([v,t],i) => `<button type="button" data-f="${v}" aria-pressed="${i===0}">${t}</button>`).join("");
  if (k === "regions") el.innerHTML = REGIONS.map(r => `<li>${r}</li>`).join("");
  if (k === "form") el.innerHTML = FORM;
});
$$("[data-ic]").forEach(el => el.outerHTML = ic(el.dataset.ic));
$$("[data-img]").forEach(el => {
  const a = el.dataset.alt || ""; el.dataset.ph = el.dataset.ph || "Foto: " + a;
  const i = new Image(); i.alt = a; i.width = 800; i.height = 600;
  i.loading = el.hasAttribute("data-eager") ? "eager" : "lazy";
  i.onerror = () => i.remove();
  i.src = IMAGES[el.dataset.img] || `assets/images/${el.dataset.img}.webp`;
  el.prepend(i);
});

/* Links de contato */
function toast(m) { const t = document.createElement("div"); t.className = "toast"; t.setAttribute("role", "status"); t.textContent = m; document.body.append(t); setTimeout(() => t.remove(), 3500); }
function wire(sel, url, msg) { $$(sel).forEach(a => { if (url) { a.href = url; a.target = "_blank"; a.rel = "noopener"; } else a.addEventListener("click", e => { e.preventDefault(); toast(msg); }); }); }
wire("[data-wa]", WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}` : "", "Projeto demonstrativo: WhatsApp comercial não configurado.");
wire("[data-ig]", INSTAGRAM_URL, "Projeto demonstrativo: perfil de Instagram não configurado.");

/* Menu mobile e header */
const nav = $("#nav"), bg = $(".burger"), hd = $(".site-header");
const setMenu = o => { nav.classList.toggle("open", o); bg.setAttribute("aria-expanded", o); bg.setAttribute("aria-label", o ? "Fechar menu" : "Abrir menu"); };
bg.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
nav.addEventListener("click", e => e.target.closest("a") && setMenu(false));
document.addEventListener("keydown", e => e.key === "Escape" && setMenu(false));
const onScroll = () => hd.classList.toggle("scrolled", scrollY > 20);
onScroll(); addEventListener("scroll", onScroll, { passive: true });

/* Filtros, links em breve e formulários demonstrativos */
document.addEventListener("click", e => {
  const b = e.target.closest("[data-f]");
  if (b) { $$("[data-f]").forEach(x => x.setAttribute("aria-pressed", x === b)); $$("[data-cat]").forEach(c => c.hidden = b.dataset.f !== "todos" && c.dataset.cat !== b.dataset.f); }
  if (e.target.closest("[data-soon]")) { e.preventDefault(); toast("Página em preparação."); }
});
document.addEventListener("submit", e => {
  const f = e.target; e.preventDefault(); if (!f.reportValidity()) return;
  const city = f.id === "city-form";
  $(".form-status", f).textContent = city ? "Busca demonstrativa: em um projeto real, a cidade seria consultada na base oficial de pontos de venda." : "Mensagem demonstrativa enviada. Em um projeto real, este formulário seria integrado ao canal de atendimento.";
  if (!city) f.reset();
});

/* Reveal progressivo */
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .08 });
  $$(".reveal").forEach(e => io.observe(e));
} else $$(".reveal").forEach(e => e.classList.add("in"));
