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
import I_PORTE from "/porte.jpeg";
import I_CHANTIER from "/chantier.jpeg";
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
import I_CHANTIER2 from "/chantier2.jpeg";
import I_BIGBEN from "/bigben.jpeg";
import I_FACADE_AVANT from "/facade_avant.jpeg";
import I_FACADE_APRES from "/facade_apres.jpeg";
import I_APRES_INT from "/apres_int.jpeg";
import I_TROMPE_PORTE from "/trompe_porte.jpeg";
import I_TROMPE_VOLET1 from "/trompe_volet1.jpeg";
import I_TROMPE_VOLET2 from "/trompe_volet2.jpeg";
import I_SDB_AVANT from "/sdb_avant.jpeg";
import I_SDB_APRES from "/sdb_apres.jpeg";
import I_SDB_PENDANT from "/sdb_pendant.jpeg";
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
.hero-l{padding:4rem 4% 4rem 6%;display:flex;flex-direction:column;justify-content:center;position:relative;}
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
.hero-r{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:28px;padding:3rem 5%;animation:sweepFromRight 2.2s cubic-bezier(.16,1,.3,1) .5s both;}
.hero-photo{width:clamp(260px,42vh,400px);height:clamp(260px,42vh,400px);border-radius:50%;overflow:hidden;border:3px solid rgba(200,151,58,.8);box-shadow:0 0 0 3px rgba(255,255,255,.2),0 24px 60px rgba(0,0,0,.35);flex-shrink:0;}
.hero-photo img{width:100%;height:100%;object-fit:cover;display:block;}
.hero-badge{background:rgba(255,255,255,.12);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.2);padding:8px 18px;border-radius:2px;display:flex;align-items:center;gap:10px;white-space:nowrap;}
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
/* AVIS GOOGLE */
.avis-sec{padding:5rem 5%;border-top:1px solid #DEDEDE;background:#FAFAFA;}
.avis-header{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:36px;gap:20px;flex-wrap:wrap;}
.avis-score-wrap{display:flex;align-items:center;gap:20px;flex-wrap:wrap;}
.avis-score-num{font-family:"Cormorant Garamond",serif;font-size:3.5rem;font-weight:700;color:#0A0A0A;line-height:1;}
.avis-stars{color:#F9A825;font-size:20px;letter-spacing:2px;margin:4px 0;}
.avis-count{font-size:10px;color:#888;letter-spacing:.15em;text-transform:uppercase;}
.avis-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.avis-card{background:#fff;border:1px solid #DEDEDE;padding:24px 22px;display:flex;flex-direction:column;gap:12px;transition:border-color .25s,box-shadow .25s;}
.avis-card:hover{border-color:#C8973A;box-shadow:0 4px 20px rgba(0,0,0,.06);}
.avis-card-top{display:flex;align-items:center;gap:12px;}
.avis-avatar{width:40px;height:40px;border-radius:50%;background:#0A0A0A;color:#C8973A;font-size:16px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-family:"Cormorant Garamond",serif;}
.avis-name{font-size:13px;font-weight:500;color:#1A1A1A;}
.avis-date{font-size:10px;color:#aaa;letter-spacing:.05em;}
.avis-card-stars{color:#F9A825;font-size:14px;letter-spacing:1px;}
.avis-text{font-size:12px;font-weight:300;color:#555;line-height:1.85;font-style:italic;flex:1;}
.avis-google-badge{display:flex;align-items:center;gap:6px;font-size:10px;color:#888;letter-spacing:.08em;margin-top:4px;}
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
  .avis-grid{grid-template-columns:1fr;}
  .avis-sec{padding:3rem 5%;}
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
  {n:"07",t:"Trompe l'Œil",d:"Trompe l'œil architecturaux et décoratifs pour des espaces personnalisés."},
];

const timeline=[
  {y:"Formation",t:"Arts graphiques · Maquettiste PAO",d:"Études en arts graphiques, maquettiste PAO. Fondement artistique et technique."},
  {y:"2000–2002",t:"Peintre en entreprise",d:"Peintre dans une entreprise à Marseille. Découverte des chantiers et des techniques professionnelles."},
  {y:"2002–2006",t:"Responsable secteur peinture",d:"Responsable du secteur peinture dans une entreprise d'installation de bureaux. Formation en électricité, plomberie et maçonnerie à Aix-en-Provence."},
  {y:"2006–2009",t:"Chef de chantier",d:"Chef de chantier d'une entreprise de rénovation à Marseille."},
  {y:"2010–2025",t:"Gérant · ARTIS RENOV",d:"Création et gérance de la société ARTIS RENOV. Rénovation, peinture artistique et travaux tous corps d'état."},
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
      {img:I_SDB1,            label:"Salle de bain épurée",                  loc:"Pays d'Aix"},
      {img:I_SDB2,            label:"Baignoire béton ciré",                  loc:"Pays d'Aix"},
      {img:I_SDB_TURQUOISE,   label:"Carrelage hexagonal turquoise",         loc:"Région PACA"},
      {img:I_SDB_BEIGE,       label:"Salle de bain moderne",                 loc:"Région PACA"},
        ]
  },
  chantiers: {
    label: "Chantiers", icon: "🔨",
    items: [
      {img:I_VILLA_CHANTIER1, label:"Villa – enduit intérieur",        loc:"Pays d'Aix"},
      {img:I_VILLA_CHANTIER2, label:"Villa – peinture en cours",       loc:"Pays d'Aix"},
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
      {img:I_VILLA_APRES,     label:"Villa avec piscine – après",      loc:"Pays d'Aix"},
      {img:I_SALON1,          label:"Salon moderne",                   loc:"Aix-en-Provence"},
      {img:I_SALON2,          label:"Salon niches LED",                loc:"Pays d'Aix"},
      {img:I_DSC773,          label:"Salon niches vertes",             loc:"Pays d'Aix"},
      {img:I_DSC769,          label:"Salon niches lumineuses",         loc:"Pays d'Aix"},
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
  {avant:I_FACADE_AVANT, apres:I_FACADE_APRES,    label:"Façade — porte et volet en trompe l'œil",               loc:"Peynier"},
  {avant:I_SDB_AVANT,    apres:I_SDB_APRES,        label:"Salle de bain — carrelage ancien → douche italienne",    loc:"Région PACA"},
  {avant:I_DEMOLITION,   apres:I_OUVERTURE_APRES,  label:"Gros œuvre — démolition → grande ouverture & parquet",  loc:"Région PACA"},
  {avant:I_AVANT_MAISON, apres:I_APRES_INT,         label:"Rénovation complète — maison ancienne → contemporaine", loc:"Peynier"},
  {avant:I_FRIGOGRAFF,   apres:I_FRIGO_APRES,      label:"Frigos — avant → après graffiti à la bombe",            loc:"Atelier"},
];

const tloPhotos=[
  {img:I_FACADE_AVANT,      label:"État initial – mur nu",          tag:"Avant"},
  {img:I_FACADE_APRES,      label:"Façade – trompe l'œil complet", tag:"Après"},
  {img:I_TROMPE_PORTE,      label:"Porte en trompe l'œil",         tag:"Détail"},
  {img:I_VOLET2,            label:"Détail volet peint",             tag:"Détail"},
  {img:I_RAMBARDE_PEINTURE, label:"Rambarde – en cours",            tag:"Détail"},
  {img:I_RAMBARDE_ESCALIER, label:"Rambarde & escalier",            tag:"Après"},
  {img:I_ESCALIER_SPIRAL,   label:"Cage d'escalier",               tag:"Après"},
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
        <button className="ba-tap-btn">{show?"👆 Voir l'AVANT":"👆 Voir l'APRÈS"}</button>
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

// ─── Composant animation titre hero ───
function Comet({ rx, ry, duration, delay = 0, size = 5 }) {
  const n = 60;
  const xs = Array.from({ length: n + 1 }, (_, i) => rx * Math.cos((i / n) * 2 * Math.PI));
  const ys = Array.from({ length: n + 1 }, (_, i) => ry * Math.sin((i / n) * 2 * Math.PI));
  return (
    <motion.div
      style={{
        position: "absolute", width: size, height: size, borderRadius: "50%",
        background: "#C8973A", boxShadow: `0 0 ${size * 3}px 2px rgba(200,151,58,0.7)`,
        top: 0, left: 0, marginLeft: -size / 2, marginTop: -size / 2,
      }}
      animate={{ x: xs, y: ys }}
      transition={{ duration, repeat: Infinity, ease: "linear", delay }}
    />
  );
}

function HeroTitle() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 300);
    const t2 = setTimeout(() => setPhase(2), 5500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);
  return (
    <div style={{ animation: "none", position: "relative" }}>
      <motion.div animate={{ opacity: phase >= 2 ? 1 : 0 }} initial={{ opacity: 0 }} transition={{ duration: 0.8 }}>
        <div className="hero-title" style={{ animation: "none" }}>
          Peinture<br/><em>&amp;</em><br/>Rénovation
        </div>
        <div className="hero-sub" style={{ marginTop: 8 }}>Axel Sandahl</div>
      </motion.div>
      <AnimatePresence>
        {phase === 1 && (
          <motion.div key="comets" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
            exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ position: "absolute", top: "42%", left: "50%" }}>
              <Comet rx={150} ry={88}  duration={1.8} delay={0}   size={6} />
              <Comet rx={180} ry={108} duration={2.5} delay={0.7} size={4} />
              <Comet rx={130} ry={70}  duration={1.3} delay={0.2} size={5} />
              <Comet rx={165} ry={98}  duration={2.1} delay={1.4} size={3} />
              <Comet rx={200} ry={118} duration={2.9} delay={0.5} size={3} />
              <Comet rx={115} ry={60}  duration={1.6} delay={0.9} size={4} />
              <Comet rx={190} ry={125} duration={3.2} delay={0.3} size={3} />
              <Comet rx={145} ry={80}  duration={2.2} delay={1.8} size={5} />
              <Comet rx={210} ry={100} duration={2.7} delay={1.1} size={3} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


const avis = [
  { name:"Virginie M.", date:"il y a un mois", stars:5, text:"Axel est très sérieux et professionnel, son travail est minutieux, il m'a laissé une maison impeccable !! Je le recommande fortement." },
  { name:"Camille C.", date:"il y a un mois", stars:5, text:"Efficaces et très content du résultat." },
  { name:"Debayle W.", date:"il y a 3 mois", stars:5, text:"Axel a réalisé la rénovation de ma maison. Grâce à son savoir faire et sa capacité à se projeter, il a réussi à optimiser au mieux l'agencement ce qui a agrandi considérablement l'espace à vivre. De plus il est très méticuleux dans les finitions." },
  { name:"Laure B.", date:"il y a 3 mois", stars:5, text:"Je recommande chaleureusement cet artisan. Peinture et Rénovation a réalisé une rénovation totale de mon appartement (carrelage, placo, peinture, électricité et plomberie) et je suis vraiment ravie." },
  { name:"Cecile M.", date:"il y a 3 mois", stars:5, text:"Axel a refait toute notre maison en France. Il utilise uniquement des produits professionnels, travaille avec le souci du détail ce qui est rare dans la profession. Nous recommandons cette sérieuse entreprise." },
  { name:"Anne-Claire C.", date:"il y a 3 mois", stars:5, text:"Excellent artisan très méticuleux, ponctuel et sympathique. Je suis enchantée par sa prestation !" },
];

export default function Site() {
  const [mob, setMob]     = useState(false);
  const [cat, setCat]     = useState("sdb");
  const [lbSrc, setLbSrc] = useState(null);
  const [lbIdx, setLbIdx] = useState(null);
  const [sent, setSent]   = useState(false);
  const [sending, setSending] = useState(false);

  const scroll = id => { document.getElementById(id)?.scrollIntoView({behavior:"smooth"}); setMob(false); };
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    // Back to top
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);

    // Reveal on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if(e.isIntersecting) e.target.classList.add("visible"); });
    }, {threshold: 0.12});
    document.querySelectorAll(".reveal,.reveal-left,.reveal-right").forEach(el => observer.observe(el));

    return () => { window.removeEventListener("scroll", onScroll); observer.disconnect(); };
  }, []);
  const sub = e => { e.preventDefault(); setSending(true); setTimeout(()=>{setSending(false);setSent(true);},1200); };
  const openLb = (src, i) => { setLbSrc(src); setLbIdx(i); };
  const closeLb = () => { setLbSrc(null); setLbIdx(null); };
  const lbItems = lbSrc==="tlo" ? tloPhotos : (lbSrc ? galCats[lbSrc].items : []);

  return (
    <div>
      <style>{css}</style>

      {/* NAV */}
      <nav className="nav">
        <div className="nav-logo" onClick={()=>scroll("accueil")}>
          <img src={I_LOGO} alt="logo" style={{height:48,width:48,objectFit:"cover",borderRadius:"50%",flexShrink:0}}/>
          <div style={{lineHeight:1.1}}>
            <div style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:"1.25rem",fontWeight:700,color:"#fff"}}>Peinture &amp; Rénovation</div>
            <div style={{fontFamily:"'Dancing Script',cursive",fontSize:".78rem",color:"#C8973A"}}>Axel Sandahl</div>
          </div>
        </div>
        <div className="nav-links">
          {[["accueil","Accueil"],["galerie","Réalisations"],["services","Services"],["experience","Expérience"]].map(([id,l])=>(
            <button key={id} onClick={()=>scroll(id)}>{l}</button>
          ))}
          <button onClick={()=>scroll("simulateur")}>Simulateur</button>
          <button className="nav-cta" onClick={()=>scroll("contact")}>Devis Gratuit</button>
        </div>
        <button className="burger" onClick={()=>setMob(!mob)}>
          <span style={{transform:mob?"rotate(45deg) translate(4px,5px)":"none"}}/>
          <span style={{opacity:mob?0:1}}/>
          <span style={{transform:mob?"rotate(-45deg) translate(4px,-5px)":"none"}}/>
        </button>
      </nav>
      <div className={`mob-menu${mob?" open":""}`}>
        {[["accueil","🏠 Accueil"],["galerie","🎨 Réalisations"],["services","🔧 Services"],["experience","⭐ Expérience"]].map(([id,l])=>(
          <button key={id} onClick={()=>scroll(id)}>{l}</button>
        ))}
        <button onClick={()=>scroll("simulateur")}>🎯 Simulateur</button>
        <button className="mob-cta" onClick={()=>scroll("contact")}>Devis Gratuit →</button>
      </div>

      {/* HERO */}
      <div id="accueil" className="hero">
        <div className="hero-l">
          <div className="hero-eyebrow">Artisan d'Art · Aix-en-Provence</div>
          <HeroTitle/>
          
          <div className="hero-location">Peynier — Pays d'Aix-en-Provence (13)</div>
          <div className="hero-tags">
            {["Rénovation Immobilière","Travaux Artistiques","Artisan d'Art"].map(t=>(
              <span key={t} className="hero-tag">{t}</span>
            ))}
          </div>
          <div className="hero-divider"/>
          <div className="hero-logos">
            <img src={I_LOGO} alt="logo" style={{height:60,width:60,objectFit:"cover",borderRadius:"50%",flexShrink:0}}/>
            <div style={{width:1,height:50,background:"rgba(255,255,255,.15)"}}/>
            <div className="mda-wrap" style={{background:"#fff",padding:"6px 10px",borderRadius:2}}>
              <img src={I_MDA} alt="Métiers d'Art PACA" style={{height:56,objectFit:"contain"}}/>
            </div>
          </div>
          <div className="hero-btns">
            <button className="btn-gold" onClick={()=>scroll("contact")}>Devis Gratuit</button>
            <button className="btn-outline" onClick={()=>scroll("galerie")}>Nos Réalisations</button>
          </div>
        </div>
        <div className="hero-r">
          <div className="hero-photo">
            <img src={I_HERO} alt="Axel Sandahl peintre artisan"/>
          </div>
          <div className="hero-badge">
            <div className="dot"/>
            <span style={{fontSize:12,color:"rgba(255,255,255,.85)"}}><strong style={{color:"#fff"}}>Disponible</strong> · Réponse sous 48h · Peynier</span>
          </div>
        </div>
      </div>

      {/* GALERIE */}
      <div id="galerie" className="sec reveal">
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3rem",marginBottom:36,paddingBottom:22,borderBottom:"1px solid #DEDEDE",alignItems:"end"}}>
          <div>
            <div className="sec-label">01 — Notre travail</div>
            <div className="sec-title">Art <em>et</em> Travaux</div>
          </div>
          <p className="body-text" style={{fontStyle:"italic"}}>
            «&nbsp;Je suis convaincu que l'art, la décoration et la construction sont étroitement liés. Leurs méthodes reposent sur l'obtention de bases solides pour créer une harmonie parfaite et un résultat correspondant à vos attentes.&nbsp;»
          </p>
        </div>

        {/* GALERIE MENU */}
        <div className="sec-label">Galerie de réalisations</div>
        <div className="gal-menu">
          {Object.entries(galCats).map(([k,v])=>(
            <button key={k} className={`gal-menu-btn${cat===k?" active":""}`} onClick={()=>setCat(k)}>
              <span>{v.icon}</span>
              <span>{v.label}</span>
              <span className="count">{v.items.length}</span>
            </button>
          ))}
        </div>
        {catFeatured[cat] && (
          <div className="cat-featured" onClick={()=>openLb(cat,0)}>
            <img src={catFeatured[cat].img} alt={catFeatured[cat].label}/>
            <div className="cat-featured-label">
              {catFeatured[cat].label}
              <div className="cat-featured-sub">{catFeatured[cat].sub}</div>
            </div>
          </div>
        )}
        <div className={cat==="art" ? "gal-grid-4" : "gal-grid-3"}>
          {galCats[cat].items.map((g,i)=>(
            <div key={i} className="gc" onClick={()=>openLb(cat,i)}>
              <img src={g.img} alt={g.label}/>
              <div className="gc-ov">🔍</div>
              <div className="gc-label"><p>{g.label}</p></div>
            </div>
          ))}
        </div>
        <p style={{fontSize:11,color:"#888",marginTop:10,fontStyle:"italic",textAlign:"right"}}>Cliquez sur une photo pour l'agrandir</p>
      </div>

      {/* LIGHTBOX */}
      {lbIdx!==null && (
        <LightBox imgs={lbItems} idx={lbIdx} onClose={closeLb}
          onPrev={()=>setLbIdx(i=>Math.max(0,i-1))}
          onNext={()=>setLbIdx(i=>Math.min(lbItems.length-1,i+1))}/>
      )}

      {/* SIMULATEUR */}
      <div className="sim reveal" id="simulateur">
        <div>
          <div style={{fontSize:10,letterSpacing:".22em",textTransform:"uppercase",color:"rgba(255,255,255,.28)",marginBottom:12}}>Outil gratuit</div>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:"clamp(1.8rem,3.5vw,3.2rem)",fontWeight:700,color:"#fff",lineHeight:1.05,marginBottom:10}}>
            Simulateur de projet peinture
          </div>
          <p style={{fontSize:13,fontWeight:300,color:"rgba(255,255,255,.55)",maxWidth:460,lineHeight:1.7}}>
            Estimez le coût de votre projet et bénéficiez d'un <strong style={{color:"#C8973A"}}>support d'aide au choix des couleurs</strong> grâce à notre nuancier interactif. Gratuit, sans inscription.
          </p>
          {["Estimation du coût de vos travaux","Nuancier interactif pour choisir vos couleurs","Aucune inscription requise"].map(f=>(
            <div key={f} className="sim-feat">{f}</div>
          ))}
        </div>
        <a href="https://nuancier-peinture.vercel.app/" target="_blank" rel="noreferrer" className="btn-gold" style={{padding:"14px 36px",fontSize:13}}>Accéder au simulateur →</a>
      </div>

      {/* SERVICES */}
      <div id="services" className="sec reveal">
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:30,paddingBottom:18,borderBottom:"1px solid #DEDEDE"}}>
          <div>
            <div className="sec-label">02 — Nos Services</div>
            <div className="sec-title">Nos <em>services</em></div>
          </div>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:"4.5rem",fontWeight:700,color:"#DEDEDE",lineHeight:1}}>07</div>
        </div>
        <div className="svc-grid">
          {services.map(s=>(
            <div key={s.n} className="svc-item">
              <div className="sn">{s.n}</div>
              <div><div className="st">{s.t}</div><p className="sd">{s.d}</p></div>
            </div>
          ))}
        </div>
        <div className="collectif">
          <div style={{fontSize:10,letterSpacing:".2em",textTransform:"uppercase",color:"#C8973A",marginBottom:10}}>Notre collectif d'artisans</div>
          <p style={{fontSize:14,fontWeight:300,color:"#fff",lineHeight:1.85,marginBottom:14}}>
            Nous travaillons au sein d'un <strong style={{color:"#C8973A",fontWeight:500}}>collectif d'artisans qualifiés</strong> qui regroupe nos expertises pour réaliser constructions, surélévations, extensions et divers travaux du bâtiment. Cela nous permet de <strong style={{color:"#fff",fontWeight:400}}>proposer des rendez-vous groupés selon les demandes concernées</strong>, garantissant une coordination optimale et la prise en charge de grands projets en toute tranquillité.
          </p>
          <button className="btn-gold" onClick={()=>scroll("contact")} style={{fontSize:11,padding:"10px 22px"}}>Prendre rendez-vous →</button>
        </div>
      </div>

      {/* EXPÉRIENCE */}
      <div id="experience" className="exp-grid reveal">
        <div className="exp-l">
          <div className="sec-label">03 — Expérience</div>
          <div className="sec-title" style={{fontSize:"clamp(2.5rem,4.5vw,4.5rem)"}}>Expérience</div>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:"clamp(2.5rem,4vw,4rem)",fontWeight:700,color:"#0A0A0A",lineHeight:1,margin:"14px 0 18px"}}>
            25 <span style={{display:"block",fontFamily:"'Dancing Script',cursive",fontStyle:"normal",fontSize:"1.8rem",fontWeight:600}}>ans dans le bâtiment</span>
          </div>
          <button className="btn-black" onClick={()=>scroll("contact")} style={{marginBottom:22}}>→ Demander un devis gratuit</button>
          <p className="body-text" style={{fontStyle:"italic",marginBottom:20,color:"#C8973A"}}>"Parcours professionnel"</p>
          {timeline.map(it=>(
            <div key={it.y} className="tl-item">
              <div className="tl-y">{it.y}</div>
              <div className="tl-t"><strong>{it.t}</strong>{it.d}</div>
            </div>
          ))}
        </div>
        <div className="exp-r">
          <img src={I_HERO} alt="Axel Sandahl" style={{width:"100%",flex:1,objectFit:"cover",minHeight:380}}/>
          <div className="mda-wrap" style={{padding:"10px 16px",alignSelf:"center"}}>
            <img src={I_MDA} alt="Métiers d'Art PACA" style={{width:220,objectFit:"contain"}}/>
          </div>
        </div>
      </div>

      {/* AVIS GOOGLE */}
      <div className="avis-sec reveal">
        <div className="avis-header">
          <div>
            <div className="sec-label">04 — Avis clients</div>
            <div className="sec-title">Ce que disent <em>nos clients</em></div>
          </div>
          <div className="avis-score-wrap">
            <div>
              <div className="avis-score-num">5,0</div>
              <div className="avis-stars">★★★★★</div>
              <div className="avis-count">Sur Google · 7 avis</div>
            </div>
            <a href="https://maps.google.com/?cid=7305104450838024468" target="_blank" rel="noreferrer" className="btn-black" style={{fontSize:10,padding:"9px 18px",textDecoration:"none",display:"inline-block",whiteSpace:"nowrap"}}>Voir sur Google →</a>
          </div>
        </div>
        <div className="avis-grid">
          {avis.map((a,i)=>(
            <div key={i} className="avis-card">
              <div className="avis-card-top">
                <div className="avis-avatar">{a.name[0]}</div>
                <div>
                  <div className="avis-name">{a.name}</div>
                  <div className="avis-date">{a.date}</div>
                </div>
              </div>
              <div className="avis-card-stars">{"★".repeat(a.stars)}</div>
              <p className="avis-text">"{a.text}"</p>
              <div className="avis-google-badge">
                <svg width="13" height="13" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
                Avis Google vérifié
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT */}
      <div id="contact" className="ct-grid reveal">
        <div className="ct-l">
          <div className="sec-label">05 — Nous contacter</div>
          <div className="sec-title" style={{fontSize:"clamp(2.5rem,4.5vw,4.5rem)"}}>Nous<br/><em>contacter</em></div>
          <p className="body-text" style={{marginTop:14}}>Situés à Peynier, à proximité d'Aix en Provence. Si vous souhaitez un devis gratuit ou obtenir des informations, n'hésitez pas à nous contacter.</p>
          <div style={{marginTop:26,display:"flex",flexDirection:"column",gap:18}}>
            <div>
              <div style={{fontSize:9,letterSpacing:".2em",textTransform:"uppercase",color:"#888",marginBottom:3}}>Artisan</div>
              <p style={{fontFamily:"'Dancing Script',cursive",fontSize:"1.2rem",color:"#1A1A1A",fontWeight:600}}>Axel Sandahl</p>
            </div>
            <div>
              <div style={{fontSize:9,letterSpacing:".2em",textTransform:"uppercase",color:"#888",marginBottom:3}}>Email</div>
              <a href="mailto:peintureetrenovation13@gmail.com" style={{fontSize:14,color:"#1A1A1A",textDecoration:"none",fontWeight:300}}>peintureetrenovation13@gmail.com</a>
            </div>
            <div>
              <div style={{fontSize:9,letterSpacing:".2em",textTransform:"uppercase",color:"#888",marginBottom:3}}>Téléphone</div>
              <a href="tel:+33616705757" style={{fontSize:15,color:"#1A1A1A",textDecoration:"none",fontWeight:300}}>06 16 70 57 57</a>
            </div>
            <div>
              <div style={{fontSize:9,letterSpacing:".2em",textTransform:"uppercase",color:"#888",marginBottom:6}}>Zone d'intervention</div>
              <div style={{display:"flex",flexWrap:"wrap",gap:4}}>
                {["Peynier","Aix-en-Provence","Gardanne","Meyreuil","Fuveau","Trets","Rousset","Aubagne"].map(c=>(
                  <span key={c} className="city">{c}</span>
                ))}
              </div>
            </div>
            <div>
              <div style={{fontSize:9,letterSpacing:".2em",textTransform:"uppercase",color:"#888",marginBottom:6}}>Instagram</div>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" style={{textDecoration:"none",display:"flex",alignItems:"center",gap:10}}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="#0A0A0A" strokeWidth="1.8"/>
                  <circle cx="12" cy="12" r="4.5" stroke="#0A0A0A" strokeWidth="1.8"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="#0A0A0A"/>
                </svg>
                <span style={{fontSize:14,color:"#1A1A1A",fontWeight:300}}>Suivez nos réalisations</span>
              </a>
            </div>
          </div>
        </div>
        <div className="ct-r">
          <p className="body-text" style={{marginBottom:20}}>N'hésitez pas à remplir le formulaire. Nous vous répondrons dans les meilleurs délais.</p>
          {sent ? (
            <div style={{padding:14,background:"#f0fdf4",border:"1px solid #86efac",color:"#166534",fontSize:13,borderRadius:2}}>✅ Votre demande a bien été envoyée ! Nous vous recontactons sous 48h.</div>
          ) : (
            <form onSubmit={sub} style={{display:"flex",flexDirection:"column",gap:12}}>
              <div className="cf-row">
                <div><label style={{fontSize:9,fontWeight:500,letterSpacing:".15em",textTransform:"uppercase",color:"#888",display:"block",marginBottom:3}}>Prénom</label><input className="if" type="text" placeholder="Jean" required/></div>
                <div><label style={{fontSize:9,fontWeight:500,letterSpacing:".15em",textTransform:"uppercase",color:"#888",display:"block",marginBottom:3}}>Nom</label><input className="if" type="text" placeholder="Dupont" required/></div>
              </div>
              <div className="cf-row">
                <div><label style={{fontSize:9,fontWeight:500,letterSpacing:".15em",textTransform:"uppercase",color:"#888",display:"block",marginBottom:3}}>Téléphone</label><input className="if" type="tel" placeholder="06 00 00 00 00" required/></div>
                <div><label style={{fontSize:9,fontWeight:500,letterSpacing:".15em",textTransform:"uppercase",color:"#888",display:"block",marginBottom:3}}>Email</label><input className="if" type="email" placeholder="jean@exemple.fr" required/></div>
              </div>
              <div>
                <label style={{fontSize:9,fontWeight:500,letterSpacing:".15em",textTransform:"uppercase",color:"#888",display:"block",marginBottom:3}}>Type de travaux</label>
                <select className="if" style={{cursor:"pointer"}}>
                  <option>Sélectionnez...</option>
                  {["Travaux de peinture","Plâtrerie / faux plafond","Plomberie","Revêtements sol & murs","Fresque / Trompe l'œil","Travaux artistiques","Rénovation complète","Autre"].map(o=><option key={o}>{o}</option>)}
                </select>
              </div>
              <div><label style={{fontSize:9,fontWeight:500,letterSpacing:".15em",textTransform:"uppercase",color:"#888",display:"block",marginBottom:3}}>Votre message</label><textarea className="if" placeholder="Décrivez votre projet..." style={{minHeight:90,resize:"vertical"}}/></div>
              <button type="submit" disabled={sending} style={{background:"#0A0A0A",color:"#fff",border:"1.5px solid #0A0A0A",padding:13,fontFamily:"Inter",fontSize:11,fontWeight:500,letterSpacing:".15em",textTransform:"uppercase",cursor:"pointer"}}>{sending?"Envoi...":"Envoyer →"}</button>
            </form>
          )}
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div style={{display:"flex",alignItems:"center",gap:14}}>
          <img src={I_LOGO} alt="logo" style={{height:50,width:50,objectFit:"cover",borderRadius:"50%",flexShrink:0}}/>
          <div>
            <div style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:"1.1rem",fontWeight:700,color:"#0A0A0A"}}>Peinture &amp; Rénovation</div>
            <div style={{fontFamily:"'Dancing Script',cursive",fontSize:".9rem",color:"#C8973A"}}>Axel Sandahl · Peynier, Aix-en-Provence</div>
          </div>
        </div>
        <p style={{fontSize:11,color:"#888"}}>© 2025 · Artisan d'Art · Peynier, Aix-en-Provence (13)</p>
        <div style={{display:"flex",gap:18,flexWrap:"wrap"}}>
          {["accueil","galerie","services","contact"].map(l=>(
            <span key={l} style={{fontSize:10,letterSpacing:".12em",textTransform:"uppercase",color:"#888",cursor:"pointer"}} onClick={()=>scroll(l)}>{l.charAt(0).toUpperCase()+l.slice(1)}</span>
          ))}
        </div>
      </footer>

      {/* BACK TO TOP */}
      <button className={`back-top${showTop?" show":""}`} onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} aria-label="Retour en haut">↑</button>
    </div>
  );
}
