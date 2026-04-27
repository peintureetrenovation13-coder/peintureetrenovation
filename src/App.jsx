import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import I_LOGO from "/logo.jpeg";
import I_MDA from "/mda.png";
import I_HERO from "/hero.jpeg";
import I_SALON1 from "/salon1.jpeg";
import I_SALON2 from "/salon2.jpeg";
import I_SDB1 from "/sdb1.jpeg";
import I_SDB2 from "/sdb2.jpeg";
import I_ESCALIER from "/escalier.jpeg";
import I_ENFANT1 from "/enfant1.jpeg";
import I_ENFANT2 from "/enfant2.jpeg";
import I_TABLEAU from "/tableau.jpeg";
import I_EXPO from "/expo.jpeg";
import I_FACADE_AVANT from "/facade_avant.jpeg";
import I_FACADE_APRES from "/facade_apres.jpeg";
import I_PORTE from "/porte.jpeg";
import I_APRES_INT from "/apres_int.jpeg";
import I_TROMPE_PORTE from "/trompe_porte.jpeg";
import I_TROMPE_VOLET1 from "/trompe_volet1.jpeg";
import I_TROMPE_VOLET2 from "/trompe_volet2.jpeg";
import I_CHANTIER from "/chantier.jpeg";
import I_SDB_AVANT from "/sdb_avant.jpeg";
import I_SDB_APRES from "/sdb_apres.jpeg";
import I_SDB_PENDANT from "/sdb_pendant.jpeg";
import I_DSC769 from "/dsc769.jpeg";
import I_DSC773 from "/dsc773.jpeg";
import I_PARQUET from "/parquet.jpeg";
import I_CARREAUX from "/carreaux.jpeg";
import I_DEMOLITION from "/demolition.jpeg";
import I_PENDANT2 from "/pendant2.jpeg";
import I_TOILE2 from "/toile2.jpeg";
import I_TABLEAU2 from "/tableau2.jpeg";
import I_FRIGOGRAFF from "/frigograff.jpeg";
import I_VOLET2 from "/volet2.jpeg";
import I_AVANT_MAISON from "/avant_maison.jpeg";
import I_FRIGO_APRES from "/frigo_apres.jpeg";
import I_EXPO_EXT from "/expo_ext.jpeg";
import I_EXPO_HALL from "/expo_hall.jpeg";
import I_EXPO_HALL2 from "/expo_hall2.jpeg";
import I_FEMME_FLEURS from "/femme_fleurs.jpeg";
import I_PORTRAIT_PASTEL from "/portrait_pastel.jpeg";
import I_SALON_BIBLIO from "/salon_biblio.jpeg";
import I_APPART_VP from "/appart_vp.jpeg";
import I_MAISON_PARQUET from "/maison_parquet.jpeg";
import I_CHAMBRE_RENO from "/chambre_reno.jpeg";
import I_PLACO_VOLETS from "/placo_volets.jpeg";
import I_PLACO_ARCHES from "/placo_arches.jpeg";
import I_CHANTIER2 from "/chantier2.jpeg";
import I_RAMBARDE_PEINTURE from "/rambarde_peinture.jpeg";
import I_RAMBARDE_ESCALIER from "/rambarde_escalier.jpeg";
import I_ESCALIER_SPIRAL from "/escalier_spiral.jpeg";
import I_VILLA_CHANTIER1 from "/villa_chantier1.jpeg";
import I_VILLA_CHANTIER2 from "/villa_chantier2.jpeg";
import I_VILLA_APRES from "/villa_apres.jpeg";
import I_SALON_HABITE from "/salon_habite.jpeg";
import I_SDB_TURQUOISE from "/sdb_turquoise.jpeg";
import I_SDB_BEIGE from "/sdb_beige.jpeg";
import I_CHAMBRE_OVALE_AVANT from "/chambre_ovale_avant.jpeg";
import I_CHAMBRE_RAGREAGE from "/chambre_ragreage.jpeg";
import I_SALON_TV_CHANTIER from "/salon_tv_chantier.jpeg";
import I_CHAMBRE_MONTAGNE from "/chambre_montagne.jpeg";
import I_SALON_POELE from "/salon_poele.jpeg";
import I_OUVERTURE_APRES from "/ouverture_apres.jpeg";
import I_BIGBEN from "/bigben.jpeg";


const G="#C8973A", BK="#0A0A0A", RL="#DEDEDE", MD="#555", LT="#888";

const css = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=Dancing+Script:wght@600;700&family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600;1,700&family=Inter:wght@300;400;500&display=swap');
*{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;}
body{font-family:Inter,sans-serif;background:#FAF7F2;color:#1A1A1A;overflow-x:hidden;}
.nav{position:sticky;top:0;z-index:200;height:64px;display:flex;align-items:center;justify-content:space-between;padding:0 5%;background:#0A0A0A;border-bottom:2px solid #C8973A;}
.nav-logo{cursor:pointer;display:flex;align-items:center;gap:12px;}
.nav-links{display:flex;gap:16px;align-items:center;}
.nav-links button,.nav-links a{background:transparent;color:rgba(255,255,255,.7);border:none;cursor:pointer;font-size:10px;letter-spacing:.12em;text-transform:uppercase;font-family:Inter;font-weight:500;text-decoration:none;transition:color .2s;}
.nav-links button:hover,.nav-links a:hover{color:#fff;}
.nav-cta{background:#C8973A!important;color:#fff!important;padding:7px 16px;border:none!important;cursor:pointer;font-family:Inter;font-size:10px;letter-spacing:.12em;text-transform:uppercase;}
.burger{display:none;flex-direction:column;gap:5px;background:none;border:none;cursor:pointer;padding:4px;}
.burger span{display:block;width:22px;height:1.5px;background:#fff;transition:.3s;}
.mob-menu{display:none;position:fixed;top:64px;left:0;right:0;background:#0A0A0A;border-bottom:2px solid #C8973A;padding:1.2rem 5%;z-index:199;flex-direction:column;}
.mob-menu.open{display:flex;}
.mob-menu button,.mob-menu a{font-size:14px;color:rgba(255,255,255,.8);text-decoration:none;padding:14px 0;border-bottom:1px solid rgba(255,255,255,.1);background:none;border-left:none;border-right:none;border-top:none;cursor:pointer;font-family:Inter;text-align:left;width:100%;letter-spacing:.05em;}
.mob-cta{background:#C8973A!important;color:#fff!important;text-align:center!important;margin-top:12px;padding:14px!important;border:none!important;}
.hero{display:grid;grid-template-columns:48% 52%;min-height:calc(100vh - 64px);background:#0A0A0A;}
.hero-l{padding:4rem 4% 4rem 6%;display:flex;flex-direction:column;justify-content:center;border-right:1px solid rgba(255,255,255,.1);position:relative;}
.hero-l::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(200,151,58,.05) 0%,transparent 60%);pointer-events:none;}
.hero-eyebrow{font-size:10px;letter-spacing:.25em;animation:sweepFromTop 1.4s cubic-bezier(.16,1,.3,1) .2s both;text-transform:uppercase;color:rgba(255,255,255,.4);margin-bottom:24px;display:flex;align-items:center;gap:12px;}
.hero-eyebrow::before{content:'';display:block;width:32px;height:1px;background:#C8973A;}
.hero-title{font-family:"Cormorant Garamond","Playfair Display",serif;font-style:italic;font-size:clamp(4rem,7vw,8rem);font-weight:700;line-height:.88;color:#fff;margin-bottom:8px;animation:sweepFromLeft 2s cubic-bezier(.16,1,.3,1) .3s both;}
.hero-title em{color:#C8973A;}
.hero-sub{font-family:"Dancing Script",cursive;font-size:clamp(1.6rem,2.5vw,2.6rem);font-weight:600;color:#C8973A;margin-bottom:18px;animation:sweepFromRight 2s cubic-bezier(.16,1,.3,1) 1.2s both;}
.hero-location{display:inline-flex;animation:sweepFromBottom 1.2s ease 2.2s both;align-items:center;gap:8px;font-size:11px;color:rgba(255,255,255,.45);letter-spacing:.12em;text-transform:uppercase;margin-bottom:20px;}
.hero-location::before{content:"📍";}
.hero-tags{display:flex;flex-direction:column;gap:5px;margin-bottom:20px;animation:sweepFromBottom 1.2s ease 2.6s both;}
.hero-tag{font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,.5);display:flex;align-items:center;gap:8px;}
.hero-tag::before{content:"—";color:#C8973A;}
.hero-divider{width:60px;height:1px;background:#C8973A;margin:16px 0;animation:lineGrow 1.8s ease 3s both;}
.hero-logos{display:flex;align-items:center;gap:16px;margin-bottom:26px;animation:sweepFromBottom 1.3s ease 3.4s both;padding:12px 0;border-top:1px solid rgba(255,255,255,.1);border-bottom:1px solid rgba(255,255,255,.1);}
.mda-wrap{background:transparent;padding:5px 4px;border-radius:2px;display:inline-flex;align-items:center;}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap;animation:sweepFromBottom 1.3s ease 3.8s both;}
.btn-gold{background:#C8973A;color:#fff;padding:11px 26px;font-size:11px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;border:1.5px solid #C8973A;cursor:pointer;font-family:Inter;transition:.2s;display:inline-block;text-decoration:none;}
.btn-gold:hover{background:transparent;color:#C8973A;}
.btn-outline{background:transparent;color:#fff;padding:11px 26px;font-size:11px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;border:1.5px solid rgba(255,255,255,.3);cursor:pointer;font-family:Inter;transition:.2s;}
.btn-outline:hover{border-color:#fff;}
.btn-black{background:#0A0A0A;color:#fff;padding:11px 24px;font-size:11px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;border:1.5px solid #0A0A0A;cursor:pointer;font-family:Inter;transition:.2s;}
.btn-black:hover{background:transparent;color:#0A0A0A;}
.hero-r{position:relative;overflow:hidden;animation:sweepFromRight 2.2s cubic-bezier(.16,1,.3,1) .5s both;}
.hero-r img{width:100%;height:100%;object-fit:cover;display:block;}
.hero-r::after{content:'';position:absolute;inset:0;background:linear-gradient(to right,rgba(10,10,10,.35) 0%,transparent 40%);}
.hero-badge{position:absolute;bottom:24px;left:50%;transform:translateX(-50%);background:rgba(255,255,255,.12);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.2);padding:8px 18px;border-radius:2px;display:flex;align-items:center;gap:10px;white-space:nowrap;z-index:2;}
.dot{width:8px;height:8px;border-radius:50%;background:#4CAF50;animation:pulse 2s infinite;flex-shrink:0;}
.sec{padding:5rem 5%;border-top:1px solid #DEDEDE;}
.sec-label{font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:#888;margin-bottom:14px;}
.sec-title{font-family:"Cormorant Garamond","Playfair Display",serif;font-style:italic;font-size:clamp(2.2rem,4vw,4rem);font-weight:700;line-height:1.05;color:#0A0A0A;}
.body-text{font-size:13px;font-weight:300;line-height:1.85;color:#555;}
.ba-gold{font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:#C8973A;margin-bottom:14px;display:flex;align-items:center;gap:10px;}
.ba-gold::before{content:'';display:block;width:22px;height:1px;background:#C8973A;}
/* CLICK-TAP */
.ba-tap{position:relative;cursor:pointer;border-radius:2px;overflow:hidden;user-select:none;}
.ba-tap img{width:100%;display:block;}
.ba-tap-overlay{position:absolute;bottom:0;left:0;right:0;background:linear-gradient(to top,rgba(0,0,0,.65),transparent);padding:10px 14px;display:flex;justify-content:space-between;align-items:flex-end;}
.ba-tap-tag{font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:#fff;padding:3px 8px;border-radius:1px;}
.ba-tap-tag.on{background:#C8973A;}
.ba-tap-tag.off{background:rgba(255,255,255,.2);}
.ba-tap-btn{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(255,255,255,.93);backdrop-filter:blur(6px);border:none;cursor:pointer;padding:8px 18px;font-family:Inter;font-size:10px;font-weight:500;letter-spacing:.1em;text-transform:uppercase;border-radius:2px;box-shadow:0 4px 16px rgba(0,0,0,.25);color:#0A0A0A;white-space:nowrap;display:flex;align-items:center;gap:7px;}
.ba-tap-btn:hover{background:#C8973A;color:#fff;}

/* ═══ GALERIE MENU ═══ */
.gal-menu{display:flex;gap:0;border-bottom:2px solid #DEDEDE;overflow-x:auto;scrollbar-width:none;}
.gal-menu::-webkit-scrollbar{display:none;}
.gal-menu-btn{flex-shrink:0;padding:14px 22px;font-size:11px;font-weight:500;letter-spacing:.08em;text-transform:uppercase;border:none;background:transparent;cursor:pointer;color:#888;font-family:Inter;border-bottom:3px solid transparent;margin-bottom:-2px;transition:.2s;display:flex;align-items:center;gap:7px;}
.gal-menu-btn:hover{color:#0A0A0A;}
.gal-menu-btn.active{color:#0A0A0A;border-bottom-color:#C8973A;}
.gal-menu-btn .count{font-size:9px;background:#DEDEDE;color:#888;border-radius:10px;padding:1px 6px;font-weight:500;}
.gal-menu-btn.active .count{background:#C8973A;color:#fff;}

/* GRILLE PHOTOS */
.gal-grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;padding-top:20px;}
.gal-grid-4{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;padding-top:20px;}
.gc{position:relative;overflow:hidden;cursor:pointer;border-radius:2px;aspect-ratio:1;}
.gc img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .8s cubic-bezier(.25,.46,.45,.94);}
.gc:hover img{transform:scale(1.06);}
.gc-ov{position:absolute;inset:0;background:rgba(0,0,0,.38);opacity:0;transition:.3s;display:flex;align-items:center;justify-content:center;font-size:22px;}
.gc:hover .gc-ov{opacity:1;}
.gc-label{position:absolute;bottom:0;left:0;right:0;background:linear-gradient(to top,rgba(0,0,0,.7),transparent);padding:20px 10px 8px;opacity:0;transition:.3s;}
.gc:hover .gc-label{opacity:1;}
.gc-label p{font-size:11px;color:#fff;font-style:italic;}

/* LIGHTBOX */
.lb{position:fixed;inset:0;background:rgba(0,0,0,.93);z-index:1000;display:flex;align-items:center;justify-content:center;padding:20px;}
.lb-in{position:relative;max-width:92vw;max-height:92vh;display:flex;flex-direction:column;align-items:center;}
.lb-img{max-width:100%;max-height:84vh;object-fit:contain;border-radius:2px;}
.lb-x{position:absolute;top:-44px;right:0;background:none;border:none;color:#fff;font-size:28px;cursor:pointer;opacity:.8;}
.lb-x:hover{opacity:1;}
.lb-nav{position:absolute;top:50%;transform:translateY(-50%);background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.2);color:#fff;width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:20px;transition:.2s;}
.lb-nav:hover{background:#C8973A;border-color:#C8973A;}
.lb-prev{left:-56px;}.lb-next{right:-56px;}
.lb-cap{color:rgba(255,255,255,.7);font-size:12px;margin-top:10px;font-style:italic;text-align:center;}
.lb-cnt{color:rgba(255,255,255,.35);font-size:10px;margin-top:4px;letter-spacing:.1em;text-align:center;}

/* TROMPE L'OEIL */
.tlo-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:22px;}
.tlo-item{position:relative;overflow:hidden;border-radius:2px;cursor:pointer;}
.tlo-item img{width:100%;height:155px;object-fit:cover;transition:transform .4s;}
.tlo-item:hover img{transform:scale(1.06);}
.tlo-badge{position:absolute;top:8px;left:8px;background:#C8973A;color:#fff;font-size:9px;padding:2px 7px;letter-spacing:.1em;text-transform:uppercase;border-radius:1px;}
.tlo-cap{padding:5px 8px;background:#FAFAFA;border-top:1px solid #DEDEDE;font-size:10px;color:#555;font-style:italic;}

/* SIMULATEUR */
.sim{background:#0A0A0A;padding:4rem 5%;display:flex;align-items:center;justify-content:space-between;gap:32px;flex-wrap:wrap;border-top:2px solid #C8973A;}
.sim-feat{font-size:12px;color:rgba(255,255,255,.4);display:flex;align-items:center;gap:10px;margin-top:6px;}
.sim-feat::before{content:'—';color:#C8973A;}

/* SERVICES */
.svc-grid{display:grid;grid-template-columns:1fr 1fr;border-left:1px solid #DEDEDE;border-top:1px solid #DEDEDE;}
.svc-item{padding:20px 24px;border-right:1px solid #DEDEDE;border-bottom:1px solid #DEDEDE;display:flex;gap:14px;transition:background .25s;}
.svc-item:hover{background:#0A0A0A;}
.svc-item:hover .sn,.svc-item:hover .st,.svc-item:hover .sd{color:#fff!important;}
.sn{font-family:"Cormorant Garamond",serif;font-size:1.7rem;font-weight:700;color:#DEDEDE;flex-shrink:0;width:32px;transition:color .25s;}
.st{font-family:"Dancing Script",cursive;font-size:1.3rem;font-weight:700;color:#0A0A0A;margin-bottom:4px;transition:color .25s;}
.sd{font-size:12px;font-weight:300;color:#555;line-height:1.7;transition:color .25s;}
.collectif{margin-top:28px;padding:24px 28px;background:#0A0A0A;border-left:3px solid #C8973A;}

/* EXPÉRIENCE */
.exp-grid{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid #DEDEDE;}
.exp-l{padding:5rem 4rem 5rem 5%;border-right:1px solid #DEDEDE;}
.exp-r{padding:5rem 5% 5rem 4rem;display:flex;flex-direction:column;gap:20px;align-items:center;}
.tl-item{display:grid;grid-template-columns:5.5rem 1fr;gap:10px;margin-bottom:16px;}
.tl-y{font-size:10px;font-weight:500;color:#C8973A;padding-top:2px;}
.tl-t{font-size:12px;font-weight:300;color:#555;line-height:1.7;border-left:1px solid #DEDEDE;padding-left:12px;}
.tl-t strong{font-weight:500;color:#1A1A1A;display:block;margin-bottom:2px;}

/* CONTACT */
.ct-grid{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid #DEDEDE;}
.ct-l{padding:5rem 4rem 5rem 5%;border-right:1px solid #DEDEDE;}
.ct-r{padding:5rem 5% 5rem 4rem;}
.if{padding:10px 0;background:transparent;border:none;border-bottom:1px solid #DEDEDE;font-family:Inter;font-size:14px;color:#1A1A1A;outline:none;width:100%;transition:border-color .2s;}
.if:focus{border-bottom-color:#0A0A0A;}
.cf-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
.city{font-size:10px;padding:2px 7px;border:1px solid #DEDEDE;color:#555;}
.footer{border-top:1px solid #DEDEDE;padding:2rem 5%;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;}
/* Scroll animations */
.reveal{opacity:0;transform:translateY(40px);transition:opacity .9s ease,transform .9s ease;}
.reveal.visible{opacity:1;transform:translateY(0);}
.reveal-left{opacity:0;transform:translateX(-50px);transition:opacity .9s ease,transform .9s ease;}
.reveal-left.visible{opacity:1;transform:translateX(0);}
.reveal-right{opacity:0;transform:translateX(50px);transition:opacity .9s ease,transform .9s ease;}
.reveal-right.visible{opacity:1;transform:translateX(0);}
/* Back to top */
.back-top{position:fixed;bottom:28px;right:28px;z-index:150;width:44px;height:44px;background:#0A0A0A;color:#C8973A;border:none;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:18px;box-shadow:0 4px 16px rgba(0,0,0,.2);transition:all .3s;opacity:0;pointer-events:none;}
.back-top.show{opacity:1;pointer-events:auto;}
.back-top:hover{background:#C8973A;color:#fff;transform:translateY(-3px);}
/* Featured photo */
.cat-featured{width:100%;height:240px;overflow:hidden;border-radius:2px;margin-top:16px;margin-bottom:8px;position:relative;cursor:pointer;}
.cat-featured img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .8s cubic-bezier(.25,.46,.45,.94);}
.cat-featured:hover img{transform:scale(1.04);}
.cat-featured-label{position:absolute;bottom:0;left:0;right:0;background:linear-gradient(to top,rgba(0,0,0,.7),transparent);padding:20px 16px 12px;color:#fff;font-family:"Dancing Script",cursive;font-size:1.4rem;font-weight:700;}
.cat-featured-sub{font-size:10px;font-family:Inter,sans-serif;font-weight:300;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.6);margin-top:2px;}
@keyframes fadeUp{from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(76,175,80,.5)}50%{box-shadow:0 0 0 6px rgba(76,175,80,0)}}
@keyframes slideDown{from{opacity:0;transform:translateY(-30px)}to{opacity:1;transform:translateY(0)}}
@keyframes lineGrow{from{width:0}to{width:60px}}
@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
/* Traversée pleine page */
@keyframes sweepFromLeft{from{opacity:0;transform:translateX(-48px) skewX(-2deg)}to{opacity:1;transform:translateX(0) skewX(0)}}
@keyframes sweepFromRight{from{opacity:0;transform:translateX(48px) skewX(2deg)}to{opacity:1;transform:translateX(0) skewX(0)}}
@keyframes sweepFromBottom{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:translateY(0)}}
@keyframes sweepFromTop{from{opacity:0;transform:translateY(-24px)}to{opacity:1;transform:translateY(0)}}
.hero-cursor{display:inline-block;width:3px;height:.85em;background:#C8973A;margin-left:2px;animation:blink 1s step-end infinite;vertical-align:text-bottom;}
@media(max-width:768px){
  .nav{height:58px;padding:0 4%;}.nav-links{display:none;}.burger{display:flex;}.mob-menu{top:58px;}
  .hero{grid-template-columns:1fr;min-height:auto;}.hero-l{padding:2.5rem 5% 2rem;border-right:none;}.hero-r{height:240px;}.hero-title{font-size:3.2rem;}
  .ba-wrap-grid{grid-template-columns:1fr!important;}
  .tlo-grid{grid-template-columns:1fr 1fr;}.tlo-item img{height:120px;}
  .gal-grid-3,.gal-grid-4{grid-template-columns:repeat(2,1fr);}
  .lb-prev{left:-4px;}.lb-next{right:-4px;}
  .sim{flex-direction:column;padding:2.5rem 5%;}
  .svc-grid{grid-template-columns:1fr;}
  .exp-grid,.ct-grid{grid-template-columns:1fr;}
  .exp-l,.ct-l{padding:3rem 5%;border-right:none;border-bottom:1px solid #DEDEDE;}.exp-r,.ct-r{padding:3rem 5%;}
  .cf-row{grid-template-columns:1fr;}.sec{padding:3rem 5%;}.footer{flex-direction:column;text-align:center;}
  .gal-menu-btn{padding:12px 14px;font-size:10px;}
}
@media(min-width:768px) and (max-width:1024px){
  .gal-grid-3{grid-template-columns:repeat(2,1fr);}
  .gal-grid-4{grid-template-columns:repeat(3,1fr);}
  .svc-grid{grid-template-columns:1fr;}
  .tlo-grid{grid-template-columns:1fr 1fr;}
  .exp-l{padding:4rem 3rem 4rem 4%;}.exp-r{padding:4rem 4% 4rem 3rem;}
  .ct-l{padding:4rem 3rem 4rem 4%;}.ct-r{padding:4rem 4% 4rem 3rem;}
}
`;

const services=[
  {n:"01",t:"Travaux de Peinture",d:"Intérieure et extérieure, préparation des supports, finitions haut de gamme."},
  {n:"02",t:"Plâtrerie",d:"Cloisons, faux plafond, enduits de lissage, ragréage et rebouchage."},
  {n:"03",t:"Plomberie",d:"Travaux de plomberie dans le cadre de rénovations complètes."},
  {n:"04",t:"Revêtements Sol & Murs",d:"Parquet, carrelage, faïence, vinyl. Préparation et pose soignée."},
  {n:"05",t:"Fresques",d:"Création de fresques murales sur mesure, alliant art et technique."},
  {n:"06",t:"Travaux Artistiques",d:"Stucco, tadelakt, effets matière. Décoration artistique unique."},
  {n:"07",t:"Trompe l\'Œil",d:"Trompe l\'œil architecturaux et décoratifs pour des espaces personnalisés."},
];

const timeline=[
  {y:"Formation",t:"Arts graphiques · Maquettiste PAO",d:"Études en arts graphiques, maquettiste PAO. Fondement artistique et technique."},
  {y:"2000–2002",t:"Peintre en entreprise",d:"Peintre dans une entreprise à Marseille. Découverte des chantiers et des techniques professionnelles."},
  {y:"2002–2006",t:"Responsable secteur peinture",d:"Responsable du secteur peinture dans une entreprise d\'installation de bureaux. Formation en électricité, plomberie et maçonnerie à Aix-en-Provence."},
  {y:"2006–2009",t:"Chef de chantier",d:"Chef de chantier d\'une entreprise de rénovation à Marseille."},
  {y:"2010–2025",t:"Gérant · ARTIS RENOV",d:"Création et gérance de la société ARTIS RENOV. Rénovation, peinture artistique et travaux tous corps d\'état."},
];

// ═══ GALERIE PAR CATÉGORIES ═══
const catFeatured = {
  sdb:         {img:I_SDB2,         label:"Salle de bain rénovée",       sub:"Baignoire & béton ciré"},
  trompeloeil: {img:I_FACADE_APRES, label:"Trompe l'Œil",               sub:"Porte, volets & rambarde peints"},
  avantapres:  {img:I_AVANT_MAISON, label:"Avant / Après",               sub:"5 projets comparatifs"},
  renovation:  {img:I_SALON_HABITE, label:"Rénovation complète",          sub:"De l'ancien au contemporain"},
  chantiers:   {img:I_VILLA_APRES,  label:"Chantiers réalisés",           sub:"Du gros œuvre aux finitions"},
  art:         {img:I_FEMME_FLEURS, label:"Art & Décoration",             sub:"Toiles, fresques & graffitis"},
};

const galCats = {
  sdb: {
    label: "Salles de bain", icon: "🚿",
    items: [
      {img:I_SDB_APRES,       label:"Salle de bain – APRÈS douche italienne", loc:"Région PACA"},
      {img:I_SDB1,            label:"Salle de bain épurée",                  loc:"Pays d\'Aix"},
      {img:I_SDB2,            label:"Baignoire béton ciré",                  loc:"Pays d\'Aix"},
      {img:I_SDB_TURQUOISE,   label:"Carrelage hexagonal turquoise",         loc:"Région PACA"},
      {img:I_SDB_BEIGE,       label:"Salle de bain moderne",                 loc:"Région PACA"},
        ]
  },
  chantiers: {
    label: "Chantiers", icon: "🔨",
    items: [
      {img:I_VILLA_CHANTIER1, label:"Villa – enduit intérieur",        loc:"Pays d\'Aix"},
      {img:I_VILLA_CHANTIER2, label:"Villa – peinture en cours",       loc:"Pays d\'Aix"},
      {img:I_CHANTIER,        label:"Pose placo & plomberie",          loc:"Peynier"},
      {img:I_SDB_PENDANT,     label:"Pose niches placo",               loc:"Région PACA"},
      {img:I_PLACO_VOLETS,    label:"Chantier placo",                  loc:"Région PACA"},
      {img:I_PLACO_ARCHES,    label:"Plâtrerie – arches",              loc:"Région PACA"},
      {img:I_SALON_TV_CHANTIER,label:"Pose meuble TV placo",           loc:"Région PACA"},
      {img:I_DEMOLITION,      label:"Gros œuvre – démolition",         loc:"Région PACA"},
      {img:I_CHANTIER2,       label:"Gros œuvre – étais nuit",         loc:"Région PACA"},
      {img:I_CHAMBRE_OVALE_AVANT, label:"Chambre ovale – avant ragréage", loc:"Région PACA"},
      {img:I_CHAMBRE_RAGREAGE,   label:"Chambre ovale – ragréage",       loc:"Région PACA"},
    ]
  },
  renovation: {
    label: "Rénovation", icon: "🏠",
    items: [
      {img:I_SALON_HABITE,    label:"Maison rénovée – séjour",         loc:"Peynier"},
      {img:I_VILLA_APRES,     label:"Villa avec piscine – après",      loc:"Pays d\'Aix"},
      {img:I_SALON1,          label:"Salon moderne",                   loc:"Aix-en-Provence"},
      {img:I_SALON2,          label:"Salon niches LED",                loc:"Pays d\'Aix"},
      {img:I_DSC773,          label:"Salon niches vertes",             loc:"Pays d\'Aix"},
      {img:I_DSC769,          label:"Salon niches lumineuses",         loc:"Pays d\'Aix"},
      {img:I_SALON_BIBLIO,    label:"Salon bibliothèque",              loc:"Région PACA"},
      {img:I_CHAMBRE_MONTAGNE,label:"Chambre vue montagne",            loc:"Région PACA"},
      {img:I_SALON_POELE,     label:"Séjour avec poêle",               loc:"Région PACA"},
      {img:I_ESCALIER,        label:"Escalier maison de maître",       loc:"Région PACA"},
      {img:I_CHAMBRE_RENO,    label:"Chambre rénovée",                 loc:"Région PACA"},
      {img:I_APPART_VP,       label:"Appartement Vieux-Port",          loc:"Marseille"},
      {img:I_MAISON_PARQUET,  label:"Rénové à neuf – parquet chêne",   loc:"Région PACA"},
      {img:I_PARQUET,         label:"Vitrification parquet",           loc:"Marseille"},
      {img:I_CARREAUX,        label:"Carreaux de ciment anciens",      loc:"Région PACA"},
    ]
  },
  trompeloeil: {
    label: "Trompe l'Œil", icon: "🖌️",
    items: [
      {img:I_FACADE_AVANT,      label:"État initial – mur nu",          loc:"Peynier"},
      {img:I_FACADE_APRES,      label:"Façade – trompe l'œil complet", loc:"Peynier"},
      {img:I_TROMPE_PORTE,      label:"Porte en trompe l'œil",         loc:"Peynier"},
      {img:I_TROMPE_VOLET1,     label:"Détail poignée de porte peinte", loc:"Peynier"},
      {img:I_VOLET2,            label:"Détail haut du volet peint",     loc:"Peynier"},
      {img:I_RAMBARDE_PEINTURE, label:"Rambarde – peinture en cours",   loc:"Région PACA"},
      {img:I_RAMBARDE_ESCALIER, label:"Rambarde & escalier",            loc:"Région PACA"},
      {img:I_ESCALIER_SPIRAL,   label:"Cage d'escalier",               loc:"Région PACA"},
    ]
  },
  avantapres: {
    label: "Avant / Après", icon: "🔄",
    items: [
      {img:I_FACADE_AVANT,   label:"Façade – AVANT trompe l'œil",              loc:"Peynier",   pair:I_FACADE_APRES,  pairLabel:"Façade – APRÈS trompe l'œil"},
      {img:I_FACADE_APRES,   label:"Façade – APRÈS trompe l'œil",              loc:"Peynier"},
      {img:I_SDB_AVANT,      label:"Salle de bain – AVANT",                    loc:"Région PACA",pair:I_SDB_APRES,     pairLabel:"Salle de bain – APRÈS"},
      {img:I_SDB_APRES,      label:"Salle de bain – APRÈS",                    loc:"Région PACA"},
      {img:I_DEMOLITION,     label:"Gros œuvre – AVANT démolition",            loc:"Région PACA",pair:I_OUVERTURE_APRES,pairLabel:"Gros œuvre – APRÈS ouverture & parquet"},
      {img:I_OUVERTURE_APRES,label:"Gros œuvre – APRÈS ouverture & parquet",   loc:"Région PACA"},
      {img:I_AVANT_MAISON,   label:"Rénovation maison – AVANT",                loc:"Peynier",   pair:I_APRES_INT,     pairLabel:"Rénovation maison – APRÈS"},
      {img:I_APRES_INT,      label:"Rénovation maison – APRÈS",                loc:"Peynier"},
      {img:I_FRIGOGRAFF,     label:"Frigos – AVANT graffiti",                  loc:"Atelier",   pair:I_FRIGO_APRES,   pairLabel:"Frigos – APRÈS graffiti"},
      {img:I_FRIGO_APRES,    label:"Frigos – APRÈS graffiti",                  loc:"Atelier"},
    ]
  },
  art: {
    label: "Art & Décoration", icon: "🎨",
    items: [
      {img:I_FEMME_FLEURS,    label:"Femme aux fleurs – huile",        loc:"Atelier"},
      {img:I_TOILE2,          label:"Femme rouge – huile",             loc:"Atelier"},
      {img:I_TABLEAU2,        label:"La pianiste – huile",             loc:"Atelier"},
      {img:I_TABLEAU,         label:"Peinture sur toile",              loc:"Atelier"},
      {img:I_PORTRAIT_PASTEL, label:"Portrait au pastel",              loc:"Atelier"},
      {img:I_BIGBEN,          label:"Décors chambre – Big Ben",        loc:"Aix-en-Provence"},
      {img:I_ENFANT1,         label:"Chambre enfant décorative",       loc:"Aix-en-Provence"},
      {img:I_ENFANT2,         label:"Chambre enfant – 2e vue",         loc:"Aix-en-Provence"},
      {img:I_EXPO_HALL,       label:"Exposition – hall entreprise",    loc:"Marseille"},
      {img:I_EXPO_HALL2,      label:"Exposition – 2e vue",             loc:"Marseille"},
      {img:I_FRIGOGRAFF,      label:"Frigos – avant graffiti",         loc:"Atelier"},
      {img:I_FRIGO_APRES,     label:"Frigos – après graffiti",         loc:"Atelier"},
    ]
  },
};

// Avant/après
const baPairs = [
  {avant:I_FACADE_AVANT, apres:I_FACADE_APRES,    label:"Façade — porte et volet en trompe l\'œil",               loc:"Peynier"},
  {avant:I_SDB_AVANT,    apres:I_SDB_APRES,        label:"Salle de bain — carrelage ancien → douche italienne",    loc:"Région PACA"},
  {avant:I_DEMOLITION,   apres:I_OUVERTURE_APRES,  label:"Gros œuvre — démolition → grande ouverture & parquet",  loc:"Région PACA"},
  {avant:I_AVANT_MAISON, apres:I_APRES_INT,         label:"Rénovation complète — maison ancienne → contemporaine", loc:"Peynier"},
  {avant:I_FRIGOGRAFF,   apres:I_FRIGO_APRES,      label:"Frigos — avant → après graffiti à la bombe",            loc:"Atelier"},
];

const tloPhotos=[
  {img:I_FACADE_AVANT,      label:"État initial – mur nu",          tag:"Avant"},
  {img:I_FACADE_APRES,      label:"Façade – trompe l\'œil complet", tag:"Après"},
  {img:I_TROMPE_PORTE,      label:"Porte en trompe l\'œil",         tag:"Détail"},
  {img:I_VOLET2,            label:"Détail volet peint",             tag:"Détail"},
  {img:I_RAMBARDE_PEINTURE, label:"Rambarde – en cours",            tag:"Détail"},
  {img:I_RAMBARDE_ESCALIER, label:"Rambarde & escalier",            tag:"Après"},
  {img:I_ESCALIER_SPIRAL,   label:"Cage d\'escalier",               tag:"Après"},
];

function BaTap({avant, apres, label, loc}) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="ba-tap" onClick={()=>setShow(!show)}>
        <img src={show?apres:avant} alt={show?"après":"avant"} style={{animation:"fadeIn .4s ease"}}/>
        <div className="ba-tap-overlay">
          <span className={`ba-tap-tag ${show?"off":"on"}`}>Avant</span>
          <span className={`ba-tap-tag ${show?"on":"off"}`}>Après</span>
        </div>
        <button className="ba-tap-btn">{show?"👆 Voir l\'AVANT":"👆 Voir l\'APRÈS"}</button>
      </div>
      <p style={{fontSize:11,color:"#555",textAlign:"center",marginTop:8,fontStyle:"italic"}}>{label} · {loc}</p>
    </div>
  );
}

function LightBox({imgs, idx, onClose, onPrev, onNext}) {
  if(idx===null) return null;
  const it = imgs[idx];
  return (
    <div className="lb" onClick={onClose}>
      <div className="lb-in" onClick={e=>e.stopPropagation()}>
        <button className="lb-x" onClick={onClose}>✕</button>
        {idx>0 && <button className="lb-nav lb-prev" onClick={e=>{e.stopPropagation();onPrev();}}>‹</button>}
        {idx<imgs.length-1 && <button className="lb-nav lb-next" onClick={e=>{e.stopPropagation();onNext();}}>›</button>}
        <img className="lb-img" src={it.img} alt={it.label}/>
        <div className="lb-cap">{it.label}{it.loc?" — "+it.loc:""}</div>
        <div className="lb-cnt">{idx+1} / {imgs.length}</div>
      </div>
    </div>
  );
}

// ─── Comet orbit ───
function Comet({ rx, ry, duration, delay = 0, size = 5 }) {
  const n = 60;
  const xs = Array.from({ length: n + 1 }, (_, i) => rx * Math.cos((i / n) * 2 * Math.PI));
  const ys = Array.from({ length: n + 1 }, (_, i) => ry * Math.sin((i / n) * 2 * Math.PI));
  return (
    <motion.div
      style={{
        position: "absolute",
        width: size,
        height: size,
        borderRadius: "50%",
        background: "#C8973A",
        boxShadow: `0 0 ${size * 3}px 2px rgba(200,151,58,0.7)`,
        top: 0, left: 0,
        marginLeft: -size / 2,
        marginTop: -size / 2,
      }}
      animate={{ x: xs, y: ys }}
      transition={{ duration, repeat: Infinity, ease: "linear", delay }}
    />
  );
}

// ─── Composant animation titre hero (comètes + apparition) ───
function HeroTitle() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 300);
    const t2 = setTimeout(() => setPhase(2), 5500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div style={{ animation: "none", position: "relative" }}>
      <motion.div
        animate={{ opacity: phase >= 2 ? 1 : 0 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-title" style={{ animation: "none" }}>
          Peinture<br/><em>&amp;</em><br/>Rénovation
        </div>
        <div className="hero-sub" style={{ marginTop: 8 }}>Axel Sandahl</div>
      </motion.div>

      <AnimatePresence>
        {phase === 1 && (
          <motion.div
            key="comets"
            style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ position: "absolute", top: "42%", left: "50%" }}>
              <Comet rx={150} ry={88}  duration={1.8} delay={0}   size={6} />
              <Comet rx={180} ry={108} duration={2.5} delay={0.7} size={4} />
              <Comet rx={130} ry={70}  duration={1.3} delay={0.2} size={5} />
              <Comet rx={165} ry={98}  duration={2.1} delay={1.4} size={3} />
              <Comet rx={200} ry={118} duration={2.9} delay={0.5} size={3} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


export default Site;

