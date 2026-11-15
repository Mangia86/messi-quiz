'use strict';
const preguntas = [
  {pregunta:'¿En qué ciudad nació Lionel Messi?',opciones:['Buenos Aires','Rosario','Córdoba','Santa Fe'],correcta:1},
  {pregunta:'¿En qué año nació Lionel Messi?',opciones:['1985','1986','1987','1988'],correcta:2},
  {pregunta:'¿Cuántos Balones de Oro ganó Messi hasta 2025?',opciones:['6','7','8','9'],correcta:2},
  {pregunta:'¿Contra qué selección ganó Argentina la final del Mundial 2022?',opciones:['Brasil','Croacia','Francia','Alemania'],correcta:2},
  {pregunta:'¿Cuál fue el primer club profesional de Messi?',opciones:["Newell’s Old Boys",'FC Barcelona','PSG','Inter Miami'],correcta:1},
  {pregunta:'¿Qué dorsal utilizó Messi durante la mayor parte de su carrera en Barcelona?',opciones:['7','9','10','11'],correcta:2},
  {pregunta:'¿En qué año ganó Messi su primera Champions League?',opciones:['2005','2006','2009','2011'],correcta:1},
  {pregunta:'¿Contra qué equipo marcó Messi su primer gol oficial con Barcelona?',opciones:['Real Madrid','Sevilla','Albacete','Valencia'],correcta:2},
  {pregunta:'¿Cuántos goles marcó Messi en el año natural 2012?',opciones:['73','82','91','100'],correcta:2},
  {pregunta:'¿En qué estadio se disputó la final del Mundial 2022?',opciones:['Estadio Lusail','Estadio Al Bayt','Estadio 974','Estadio Internacional Khalifa'],correcta:0}
];
const TOTAL=5, PUNTOS=20;
let seleccionadas=[],actual=0,puntos=0,respondida=false;
// La Publishable Key está diseñada para uso público en el navegador. La tabla debe
// tener políticas RLS que permitan SELECT e INSERT según la política del proyecto.
const SUPABASE_URL='https://ezyhytwqulwpdvfsxgte.supabase.co';
const SUPABASE_PUBLISHABLE_KEY='sb_publishable_EX6iCsuW_VegLut-GuwZCw_LI0G8fSI';
let partidaGuardada=false, guardandoPartida=false, intentoGuardadoIncierto=false;
const $=id=>document.getElementById(id);
function mezclar(lista){const copia=[...lista];for(let i=copia.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[copia[i],copia[j]]=[copia[j],copia[i]];}return copia;}
function pantalla(nombre){['inicio','juego','resultado'].forEach(id=>$(id).classList.toggle('oculto',id!==nombre));}
function comenzar(){seleccionadas=mezclar(preguntas).slice(0,TOTAL);actual=0;puntos=0;partidaGuardada=false;guardandoPartida=false;intentoGuardadoIncierto=false;$('score-form').reset();$('save-status').textContent='';$('btn-guardar').disabled=false;pantalla('juego');mostrar();}
function mostrar(){respondida=false;const p=seleccionadas[actual];$('numero-pregunta').textContent=`PREGUNTA ${String(actual+1).padStart(2,'0')} / 05`;$('progreso-texto').textContent=`${Math.round((actual+1)/TOTAL*100)}% COMPLETADO`;$('progreso').style.width=`${(actual+1)/TOTAL*100}%`;$('puntuacion').textContent=`★ ${puntos} PUNTOS`;$('texto-pregunta').textContent=p.pregunta;$('mensaje').textContent='';$('btn-siguiente').classList.add('oculto');const cont=$('opciones');cont.replaceChildren();p.opciones.forEach((texto,i)=>{const btn=document.createElement('button');btn.type='button';btn.className='option';const letra=document.createElement('span');letra.className='option-letter';letra.textContent='ABCD'[i];const contenido=document.createElement('span');contenido.textContent=texto;btn.append(letra,contenido);btn.addEventListener('click',()=>responder(i));cont.appendChild(btn);});}
function responder(indice){if(respondida)return;respondida=true;const p=seleccionadas[actual];$('opciones').querySelectorAll('button').forEach((btn,i)=>{btn.disabled=true;if(i===p.correcta)btn.classList.add('correct');else if(i===indice)btn.classList.add('wrong');});sonar(indice===p.correcta);if(indice===p.correcta){puntos+=PUNTOS;$('mensaje').textContent='✓ ¡CORRECTO! SUMASTE 20 PUNTOS';$('mensaje').style.color='#78edb6';}else{$('mensaje').textContent=`✕ LA RESPUESTA CORRECTA ERA: ${p.opciones[p.correcta]}`;$('mensaje').style.color='#ff9ca5';}$('puntuacion').textContent=`★ ${puntos} PUNTOS`;$('btn-siguiente').innerHTML=actual===TOTAL-1?'VER MI RESULTADO <span aria-hidden="true">→</span>':'SIGUIENTE PREGUNTA <span aria-hidden="true">→</span>';$('btn-siguiente').classList.remove('oculto');document.querySelector('.question-card').classList.remove('answer-pop');void document.querySelector('.question-card').offsetWidth;document.querySelector('.question-card').classList.add('answer-pop');}
function siguiente(){if(!respondida)return;actual++;if(actual<TOTAL)mostrar();else resultado();}
// Sonidos cortos generados en el navegador, sin archivos adicionales.
let sonidoActivo = true;
let audioContext = null;
function sonar(correcto) {
  if (!sonidoActivo) return;
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    audioContext ||= new AudioContextClass();
    if (audioContext.state === 'suspended') audioContext.resume();
    const ahora = audioContext.currentTime;
    const tonos = correcto ? [523.25, 659.25, 783.99] : [280, 220];
    tonos.forEach((frecuencia, i) => {
      const oscilador = audioContext.createOscillator();
      const ganancia = audioContext.createGain();
      const inicio = ahora + i * 0.10;
      oscilador.type = 'sine';
      oscilador.frequency.value = frecuencia;
      ganancia.gain.setValueAtTime(0.0001, inicio);
      ganancia.gain.exponentialRampToValueAtTime(0.075, inicio + 0.012);
      ganancia.gain.exponentialRampToValueAtTime(0.0001, inicio + 0.18);
      oscilador.connect(ganancia).connect(audioContext.destination);
      oscilador.start(inicio);
      oscilador.stop(inicio + 0.19);
    });
  } catch (_) { /* Si el audio no está disponible, el juego sigue funcionando. */ }
}
$('sound-toggle').addEventListener('click', () => {
  sonidoActivo = !sonidoActivo;
  $('sound-toggle').textContent = sonidoActivo ? '🔊 Sonido' : '🔇 Silencio';
  $('sound-toggle').setAttribute('aria-pressed', String(sonidoActivo));
});
const niveles = {
  100: { icono:'👑', nombre:'NIVEL ANTONELA ROCCUZZO', mensaje:'¡Sabés tanto de Messi como Antonela!', frase:'Estuviste en todas. Sos una enciclopedia del 10.' },
  80: { icono:'🛡️', nombre:'NIVEL RODRIGO DE PAUL', mensaje:'¡Sos De Paul! El guardaespaldas del 10.', frase:'Siempre cerca de Leo. Solo te faltó una para el puntaje perfecto.' },
  60: { icono:'🎮', nombre:'NIVEL KUN AGÜERO', mensaje:'¡Sos el Kun! Compañero de mil aventuras.', frase:'Conocés bastante al capitán. ¡Seguí entrenando!' },
  40: { icono:'🇦🇷', nombre:'NIVEL HINCHA DE LA SCALONETA', mensaje:'¡Tenés alma de hincha argentino!', frase:'Sabés lo básico, pero todavía te faltan algunas historias del 10.' },
  20: { icono:'⚽', nombre:'NIVEL ESPECTADOR OCASIONAL', mensaje:'¡Te falta mirar más partidos de Messi!', frase:'Un acierto es el comienzo. La revancha te espera.' },
  0: { icono:'📺', nombre:'NIVEL RECIÉN LLEGADO', mensaje:'¿Seguro que sabés quién es Messi?', frase:'¡No pasa nada! Probá otra vez y sorprendete con la historia de Leo.' }
};
function resultado(){
  pantalla('resultado');
  const nivel = niveles[puntos];
  $('puntos-finales').textContent = puntos;
  $('resumen-final').textContent = `Respondiste correctamente ${puntos/PUNTOS} de ${TOTAL} preguntas.`;
  $('results-icon').textContent = nivel.icono;
  $('result-persona').textContent = nivel.nombre;
  $('mensaje-final').textContent = nivel.mensaje;
  $('result-quote').textContent = nivel.frase;
  cargarRanking('resultados');
  document.querySelector('.results-screen').classList.remove('results-enter');
  void document.querySelector('.results-screen').offsetWidth;
  document.querySelector('.results-screen').classList.add('results-enter');
}
$('btn-comenzar').addEventListener('click',comenzar);$('btn-siguiente').addEventListener('click',siguiente);$('btn-reiniciar').addEventListener('click',comenzar);

function supabaseHeaders(extra={}) {
  return { apikey: SUPABASE_PUBLISHABLE_KEY, Authorization: `Bearer ${SUPABASE_PUBLISHABLE_KEY}`, ...extra };
}
async function respuestaSupabase(response) {
  if (!response.ok) {
    let detalle='';
    try { const data=await response.json(); detalle=data.message || data.details || data.hint || data.error_description || data.error || ''; } catch (_) {}
    const error=new Error(detalle || `Error de Supabase (${response.status})`);
    error.status=response.status;
    throw error;
  }
  // PostgREST no devuelve cuerpo con Prefer: return=minimal (respuesta 201 vacía).
  if (response.status===204 || response.status===205 || response.status===201 || response.headers.get('content-length')==='0') return null;
  const tipo=response.headers.get('content-type') || '';
  if (!tipo.includes('application/json')) return null;
  const cuerpo=await response.text();
  return cuerpo ? JSON.parse(cuerpo) : null;
}
async function cargarRanking(vista='resultados') {
  const inicio=vista==='inicio';
  const estado=$(inicio?'ranking-inicio-status':'ranking-status');
  const lista=$(inicio?'ranking-inicio-list':'ranking-list');
  const refresh=inicio?null:$('btn-ranking');
  estado.textContent='Cargando ranking…'; lista.replaceChildren(); if(refresh)refresh.disabled=true;
  try {
    const url=new URL(`${SUPABASE_URL}/rest/v1/resultados`);
    url.search=new URLSearchParams({select:'nombre,puntuacion,fecha',order:'puntuacion.desc,fecha.asc',limit:'10'});
    const abortador=new AbortController();
    const timeout=setTimeout(()=>abortador.abort(),12000);
    let response;
    try { response=await fetch(url,{headers:supabaseHeaders(),signal:abortador.signal,cache:'no-store'}); }
    finally { clearTimeout(timeout); }
    const filas=await respuestaSupabase(response);
    if (!filas.length) { estado.textContent='Todavía no hay resultados. ¡Sé el primero!'; return; }
    estado.textContent='';
    filas.forEach((fila,i)=>{
      const li=document.createElement('li'), puesto=document.createElement('span'), nombre=document.createElement('span'), score=document.createElement('strong');
      li.className='ranking-row'; puesto.className='ranking-place'; nombre.className='ranking-name'; score.className='ranking-score';
      puesto.textContent=String(i+1).padStart(2,'0'); nombre.textContent=fila.nombre; score.textContent=`${fila.puntuacion} PTS`;
      li.append(puesto,nombre,score); lista.append(li);
    });
  } catch (error) {
    const detalle=error.name==='AbortError'?'La consulta tardó demasiado.':error.message;
    estado.textContent=`No se pudo cargar el ranking: ${detalle}${error.status===401||error.status===403||error.status===404?` (HTTP ${error.status}; revisa la Publishable Key, la tabla y las políticas SELECT de RLS).`:''}`;
  } finally { if(refresh)refresh.disabled=false; }
}
async function guardarResultado(event) {
  event.preventDefault();
  if (partidaGuardada || guardandoPartida || intentoGuardadoIncierto) return;
  const nombre=$('player-name').value.trim();
  if (!nombre) { $('save-status').textContent='Escribí tu nombre para continuar.'; return; }
  const button=$('btn-guardar'), estado=$('save-status');
  guardandoPartida=true; button.disabled=true; estado.textContent='Guardando puntuación…';
  try {
    const abortador=new AbortController();
    const timeout=setTimeout(()=>abortador.abort(),12000);
    let response;
    try { response=await fetch(`${SUPABASE_URL}/rest/v1/resultados`,{
      method:'POST',headers:supabaseHeaders({'Content-Type':'application/json',Prefer:'return=minimal'}),
      body:JSON.stringify({nombre,puntuacion:puntos}),signal:abortador.signal
    }); } finally { clearTimeout(timeout); }
    // El POST usa return=minimal: basta el estado HTTP exitoso y no se intenta
    // interpretar ningún cuerpo que PostgREST puede omitir por completo.
    if (!response.ok) await respuestaSupabase(response);
    partidaGuardada=true; estado.textContent='¡Puntuación guardada!';
    void cargarRanking('resultados');
  } catch (error) {
    const detalle=error.name==='AbortError'?'La solicitud tardó demasiado.':error.message;
    if (error.status) {
      guardandoPartida=false;
      button.disabled=false;
      estado.textContent=`No se pudo guardar: ${detalle}${error.status===401||error.status===403||error.status===404?` (HTTP ${error.status}; revisa la Publishable Key, la tabla y las políticas INSERT de RLS).`:''}`;
    } else {
      // Si falla la conexión/timeout, el servidor pudo insertar antes de perderse la respuesta.
      // Bloquear el reintento evita duplicar la misma partida desde esta interfaz.
      guardandoPartida=false;
      intentoGuardadoIncierto=true;
      estado.textContent=`No se pudo confirmar el guardado: ${detalle}. Para evitar duplicados, esta partida queda bloqueada; actualizá el ranking para comprobar si se guardó.`;
    }
  }
}
$('score-form').addEventListener('submit',guardarResultado);
$('btn-ranking').addEventListener('click',()=>cargarRanking('resultados'));
$('btn-ranking-inicio').addEventListener('click',()=>cargarRanking('inicio'));
cargarRanking('inicio');
