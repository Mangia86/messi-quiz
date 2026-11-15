'use strict';
const TOTAL=5;
const nivelesJuego = [
  {nombre:'La Pulga', dificultad:'Muy fácil', puntos:20, aciertos:3, preguntas:[
    {pregunta:'¿En qué ciudad nació Messi?',opciones:['Córdoba','Rosario','Buenos Aires','Santa Fe'],correcta:1},
    {pregunta:'¿En qué año nació Messi?',opciones:['1985','1986','1987','1988'],correcta:2},
    {pregunta:'¿Cuál es el nombre completo de Messi?',opciones:['Lionel Andrés Messi Cuccittini','Lionel Antonio Messi','Lionel Alejandro Messi','Lionel Ángel Messi'],correcta:0},
    {pregunta:'¿Qué número de camiseta hizo famoso Messi en Barcelona?',opciones:['7','9','10','11'],correcta:2},
    {pregunta:'¿Con qué selección ganó el Mundial de 2022?',opciones:['España','Argentina','Mozambique','Ninguna, no ganó el mundial 2022'],correcta:1},
    {pregunta:'¿Contra qué selección disputó Argentina la final del Mundial 2022?',opciones:['Croacia','Brasil','Francia','Países Bajos'],correcta:2},
    {pregunta:'¿Cuál es el apellido de la esposa de Messi?',opciones:['Rodríguez','Roccuzzo','Fernández','Martínez'],correcta:1},
    {pregunta:'¿En qué club europeo desarrolló Messi la mayor parte de su carrera?',opciones:['Real Madrid','PSG','Manchester City','Barcelona'],correcta:3},
    {pregunta:'¿Con qué pie juega principalmente Messi?',opciones:['Derecho','Izquierdo','Ambos indistintamente','Ninguno, es arquero'],correcta:1},
    {pregunta:'¿En qué país se disputó el Mundial que ganó Messi?',opciones:['Rusia','Brasil','Qatar','Alemania'],correcta:2}
  ]},
  {nombre:'La Masía', dificultad:'Fácil', puntos:20, aciertos:3, preguntas:[
    {pregunta:'¿En qué club rosarino jugó Messi antes de irse a Barcelona?',opciones:['Rosario Central',"Newell's Old Boys",'Central Córdoba','Tiro Federal'],correcta:1},
    {pregunta:'¿Qué número usó Messi en Barcelona inmediatamente antes del 10?',opciones:['18','11','19','7'],correcta:2},
    {pregunta:'¿Qué jugador le dio la asistencia de su primer gol oficial con Barcelona?',opciones:['Xavi','Ronaldinho','Iniesta',"Eto'o"],correcta:1},
    {pregunta:'¿Quién era el entrenador del Barcelona cuando Messi debutó oficialmente?',opciones:['Guardiola','Rijkaard','Luis Enrique','Koeman'],correcta:1},
    {pregunta:'¿Contra qué selección debutó Messi con Argentina mayor?',opciones:['Hungría','Brasil','Uruguay','Paraguay'],correcta:0},
    {pregunta:'¿En qué club francés jugó Messi?',opciones:['Marsella','Lyon','PSG','Mónaco'],correcta:2},
    {pregunta:'¿En qué equipo estadounidense comenzó a jugar Messi en 2023?',opciones:['LA Galaxy','Inter Miami','New York City FC','Orlando City'],correcta:1},
    {pregunta:'¿Qué dorsal utilizó Messi en su primera temporada con PSG?',opciones:['10','19','30','7'],correcta:2},
    {pregunta:'¿Cuántos hijos tiene Messi?',opciones:['Dos','Tres','Cuatro','Cinco'],correcta:1},
    {pregunta:'¿En qué año debutó oficialmente Messi con el primer equipo del Barcelona?',opciones:['2003','2004','2005','2006'],correcta:1}
  ]},
  {nombre:'El Diez', dificultad:'Normal', puntos:25, aciertos:4, preguntas:[
    {pregunta:'¿Contra qué equipo marcó Messi su primer gol oficial con Barcelona?',opciones:['Getafe','Albacete','Sevilla','Espanyol'],correcta:1},
    {pregunta:'¿Contra qué selección marcó su primer gol en un Mundial?',opciones:['México','Serbia y Montenegro','Nigeria','Costa de Marfil'],correcta:1},
    {pregunta:'¿Contra qué equipo marcó cuatro goles en un partido de Champions en 2010?',opciones:['Arsenal','Chelsea','Inter','Bayern'],correcta:0},
    {pregunta:'¿En qué estadio marcó Messi de cabeza en la final de Champions de 2009?',opciones:['Wembley','Olímpico de Roma','San Siro','Camp Nou'],correcta:1},
    {pregunta:'¿Contra qué selección marcó su primer hat-trick con Argentina mayor?',opciones:['Brasil','Suiza','Bolivia','Ecuador'],correcta:1},
    {pregunta:'¿Qué arquero le atajó un penal en el Mundial de Qatar 2022?',opciones:['Lloris','Szczęsny','Noppert','Livaković'],correcta:1},
    {pregunta:'¿Contra qué selección perdió Argentina la final del Mundial 2014?',opciones:['Alemania','Brasil','Francia','Italia'],correcta:0},
    {pregunta:'¿A quién asistió Messi después de superar a Gvardiol en la semifinal de Qatar 2022?',opciones:['Di María','Lautaro','Julián Álvarez','Enzo Fernández'],correcta:2},
    {pregunta:'¿Contra qué equipo marcó Messi su primer gol oficial con PSG?',opciones:['Lyon','Manchester City','Marsella','Lille'],correcta:1},
    {pregunta:'¿Qué selección eliminó a Argentina en cuartos del Mundial 2010?',opciones:['España','Alemania','Países Bajos','Brasil'],correcta:1}
  ]},
  {nombre:'Modo GOAT', dificultad:'Avanzado', puntos:30, aciertos:4, preguntas:[
    {pregunta:'¿Cuántos goles oficiales marcó Messi durante el año calendario 2012?',opciones:['85','89','91','94'],correcta:2},
    {pregunta:'¿Cuántos goles marcó Messi con Barcelona en todas las competiciones de la temporada 2011-12?',opciones:['60','67','73','79'],correcta:2},
    {pregunta:'¿Cuántos goles marcó Messi en La Liga 2011-12?',opciones:['44','46','48','50'],correcta:3},
    {pregunta:'¿Cuántos Balones de Oro había ganado Messi al finalizar 2023?',opciones:['6','7','8','9'],correcta:2},
    {pregunta:'¿Cuántas Botas de Oro europeas ganó Messi durante su carrera en Barcelona?',opciones:['4','5','6','7'],correcta:2},
    {pregunta:'¿Cuántos goles marcó Messi en la Primera División española?',opciones:['438','451','474','491'],correcta:2},
    {pregunta:'¿Con cuántos goles oficiales terminó Messi su carrera en el primer equipo del Barcelona?',opciones:['634','650','672','701'],correcta:2},
    {pregunta:'¿Contra qué equipo marcó cinco goles en un partido de Champions League en 2012?',opciones:['Bayer Leverkusen','Arsenal','Milan','Celtic'],correcta:0},
    {pregunta:'¿Contra qué equipo marcó su famoso gol individual en la final de Copa del Rey 2015?',opciones:['Sevilla','Valencia','Athletic Club','Real Madrid'],correcta:2},
    {pregunta:'¿En qué estadio ganó Messi su primera Copa América con Argentina?',opciones:['Monumental','Maracaná','Mineirão','Centenario'],correcta:1}
  ]},
  {nombre:'D10S del Fútbol', dificultad:'Experto', puntos:40, aciertos:4, preguntas:[
    {pregunta:'¿Contra qué selección marcó Messi dos penales en la final del Mundial Sub-20 de 2005?',opciones:['Brasil','Nigeria','España','Colombia'],correcta:1},
    {pregunta:'¿A qué selección venció Argentina en la final olímpica de Pekín 2008?',opciones:['Camerún','Brasil','Nigeria','Países Bajos'],correcta:2},
    {pregunta:'¿Cuántos títulos ganó Messi con Barcelona en el historico año 2009?',opciones:['4','5','6','7'],correcta:2},
    {pregunta:'¿En qué estadio marcó Messi contra Manchester United en la final de Champions de 2011?',opciones:['Olímpico de Roma','Wembley','Camp Nou','Old Trafford'],correcta:1},
    {pregunta:'¿Contra qué equipo marcó Messi su gol número 600 con Barcelona mediante un tiro libre?',opciones:['Liverpool','Chelsea','Manchester United','Juventus'],correcta:0},
    {pregunta:'¿Contra qué equipo marcó Messi su gol oficial número 500 con Barcelona?',opciones:['Atlético de Madrid','Sevilla','Real Madrid','Valencia'],correcta:2},
    {pregunta:'¿Qué defensor del Bayern Múnich cayó al suelo en la famosa jugada de Messi durante la semifinal de Champions de 2015?',opciones:['Hummels','Boateng','Lahm','Alaba'],correcta:1},
    {pregunta:'¿Qué selección derrotó a Argentina en la final de la Copa América Centenario 2016?',opciones:['Uruguay','Brasil','Colombia','Chile'],correcta:3},
    {pregunta:'¿A qué compañero asistió Messi para el segundo gol de Argentina contra México en Qatar 2022?',opciones:['Enzo Fernández','Julián Álvarez','Mac Allister','Lautaro Martínez'],correcta:0},
    {pregunta:'¿Contra qué equipo ganó Messi su primer título con Inter Miami, la Leagues Cup 2023?',opciones:['LAFC','Nashville SC','Philadelphia Union','FC Dallas'],correcta:1}
  ]},
  {nombre:'Antonela Roccuzzo', dificultad:'Extrema', puntos:65, aciertos:5, preguntas:[
    {pregunta:'¿Qué jugador del Porto fue expulsado en el amistoso de inauguración del Estádio do Dragão de 2003, partido en el que Messi debutó con el primer equipo del Barcelona?',opciones:['Jorge Costa','Ricardo Carvalho','Pedro Mendes','Ninguno'],correcta:3},
    {pregunta:'¿Qué número de camiseta utilizó Messi en su debut oficial con Barcelona contra el Espanyol en 2004?',opciones:['19','30','10','18'],correcta:1},
    {pregunta:'¿Qué futbolista argentino fue expulsado en el mismo partido en el que Messi debutó con Argentina contra Hungría?',opciones:['Juan Pablo Sorín','Lionel Scaloni','Ninguno, Messi fue el único argentino expulsado','Gabriel Heinze'],correcta:2},
    {pregunta:'¿Contra qué equipo marcó Messi su primer hat-trick oficial con Barcelona?',opciones:['Valencia','Real Madrid','Atlético de Madrid','Sevilla'],correcta:1},
    {pregunta:'¿Qué arquero defendía el arco del Real Madrid cuando Messi marcó su primer hat-trick en el clásico de 2007?',opciones:['Diego López','Keylor Navas','Iker Casillas','Jerzy Dudek'],correcta:2},
    {pregunta:'¿Contra qué selección convirtió Messi su primer gol oficial con Argentina mayor?',opciones:['Croacia','Venezuela','Perú','Argelia'],correcta:0},
    {pregunta:'¿Qué jugador del Barcelona fue reemplazado por Messi en su debut oficial contra el Espanyol?',opciones:['Deco','Samuel Eto’o','Henrik Larsson','Ludovic Giuly'],correcta:0},
    {pregunta:'¿Contra qué equipo marcó Messi su primer gol de tiro libre directo en un partido oficial con Barcelona?',opciones:['Atlético de Madrid','Villarreal','Sevilla','Valencia'],correcta:0},
    {pregunta:'¿Qué jugador recibió la asistencia de Messi en la final olímpica de Pekín 2008 para marcar el gol del título?',opciones:['Sergio Agüero','Ángel Di María','Ezequiel Lavezzi','Juan Román Riquelme'],correcta:1},
    {pregunta:'¿Contra qué equipo disputó Messi su último partido oficial con Barcelona?',opciones:['Atlético de Madrid','Celta de Vigo','Eibar','Real Sociedad'],correcta:1}
  ]}
];
const preguntasEn = [
  [
    ['In which city was Messi born?',['Córdoba','Rosario','Buenos Aires','Santa Fe']],
    ['In what year was Messi born?',['1985','1986','1987','1988']],
    ['What is Messi’s full name?',['Lionel Andrés Messi Cuccittini','Lionel Antonio Messi','Lionel Alejandro Messi','Lionel Ángel Messi']],
    ['Which shirt number made Messi famous at Barcelona?',['7','9','10','11']],
    ['Which national team did he win the 2022 World Cup with?',['Spain','Argentina','Mozambique','None, he did not win the 2022 World Cup']],
    ['Which team did Argentina face in the 2022 World Cup final?',['Croatia','Brazil','France','The Netherlands']],
    ['What is Messi’s wife’s surname?',['Rodríguez','Roccuzzo','Fernández','Martínez']],
    ['At which European club did Messi spend most of his career?',['Real Madrid','PSG','Manchester City','Barcelona']],
    ['Which foot does Messi mainly use?',['Right','Left','Both equally','Neither, he is a goalkeeper']],
    ['In which country was the World Cup Messi won held?',['Russia','Brazil','Qatar','Germany']]
  ],
  [
    ['Which Rosario club did Messi play for before moving to Barcelona?',['Rosario Central',"Newell’s Old Boys",'Central Córdoba','Tiro Federal']],
    ['Which number did Messi wear at Barcelona immediately before number 10?',['18','11','19','7']],
    ['Who assisted Messi’s first official Barcelona goal?',['Xavi','Ronaldinho','Iniesta',"Eto’o"]],
    ['Who was Barcelona’s manager when Messi made his official debut?',['Guardiola','Rijkaard','Luis Enrique','Koeman']],
    ['Against which national team did Messi make his senior Argentina debut?',['Hungary','Brazil','Uruguay','Paraguay']],
    ['Which French club did Messi play for?',['Marseille','Lyon','PSG','Monaco']],
    ['Which US team did Messi start playing for in 2023?',['LA Galaxy','Inter Miami','New York City FC','Orlando City']],
    ['Which shirt number did Messi wear in his first season at PSG?',['10','19','30','7']],
    ['How many children does Messi have?',['Two','Three','Four','Five']],
    ['In what year did Messi make his official first-team debut for Barcelona?',['2003','2004','2005','2006']]
  ],
  [
    ['Against which team did Messi score his first official goal for Barcelona?',['Getafe','Albacete','Sevilla','Espanyol']],
    ['Against which national team did Messi score his first World Cup goal?',['Mexico','Serbia and Montenegro','Nigeria','Ivory Coast']],
    ['Against which team did Messi score four goals in a 2010 Champions League match?',['Arsenal','Chelsea','Inter','Bayern']],
    ['At which stadium did Messi score a header in the 2009 Champions League final?',['Wembley','Stadio Olimpico in Rome','San Siro','Camp Nou']],
    ['Against which national team did Messi score his first hat-trick for Argentina’s senior team?',['Brazil','Switzerland','Bolivia','Ecuador']],
    ['Which goalkeeper saved Messi’s penalty at the 2022 World Cup in Qatar?',['Lloris','Szczęsny','Noppert','Livaković']],
    ['Which national team did Argentina lose to in the 2014 World Cup final?',['Germany','Brazil','France','Italy']],
    ['Who did Messi assist after getting past Gvardiol in the 2022 World Cup semifinal?',['Di María','Lautaro','Julián Álvarez','Enzo Fernández']],
    ['Against which team did Messi score his first official goal for PSG?',['Lyon','Manchester City','Marseille','Lille']],
    ['Which team eliminated Argentina in the 2010 World Cup quarterfinals?',['Spain','Germany','The Netherlands','Brazil']]
  ],
  [
    ['How many official goals did Messi score in the 2012 calendar year?',['85','89','91','94']],
    ['How many goals did Messi score for Barcelona in all competitions in the 2011–12 season?',['60','67','73','79']],
    ['How many goals did Messi score in La Liga in 2011–12?',['44','46','48','50']],
    ['How many Ballon d’Or awards had Messi won by the end of 2023?',['6','7','8','9']],
    ['How many European Golden Shoes did Messi win during his Barcelona career?',['4','5','6','7']],
    ['How many goals did Messi score in Spain’s top division?',['438','451','474','491']],
    ['How many official goals did Messi finish with for Barcelona’s first team?',['634','650','672','701']],
    ['Against which team did Messi score five goals in a 2012 Champions League match?',['Bayer Leverkusen','Arsenal','Milan','Celtic']],
    ['Against which team did Messi score his famous solo goal in the 2015 Copa del Rey final?',['Sevilla','Valencia','Athletic Club','Real Madrid']],
    ['At which stadium did Messi win his first Copa América with Argentina?',['Monumental','Maracanã','Mineirão','Centenario']]
  ],
  [
    ['Against which team did Messi score two penalties in the 2005 FIFA U-20 World Cup final?',['Brazil','Nigeria','Spain','Colombia']],
    ['Which team did Argentina beat in the 2008 Olympic final in Beijing?',['Cameroon','Brazil','Nigeria','The Netherlands']],
    ['How many titles did Messi win with Barcelona in the historic 2009 calendar year?',['4','5','6','7']],
    ['At which stadium did Messi score against Manchester United in the 2011 Champions League final?',['Stadio Olimpico in Rome','Wembley','Camp Nou','Old Trafford']],
    ['Against which team did Messi score his 600th Barcelona goal with a free kick?',['Liverpool','Chelsea','Manchester United','Juventus']],
    ['Against which team did Messi score his 500th official goal for Barcelona?',['Atlético Madrid','Sevilla','Real Madrid','Valencia']],
    ['Which Bayern Munich defender fell during Messi’s famous move in the 2015 Champions League semifinal?',['Hummels','Boateng','Lahm','Alaba']],
    ['Which team beat Argentina in the 2016 Copa América Centenario final?',['Uruguay','Brazil','Colombia','Chile']],
    ['Which teammate did Messi assist for Argentina’s second goal against Mexico at Qatar 2022?',['Enzo Fernández','Julián Álvarez','Mac Allister','Lautaro Martínez']],
    ['Which team did Messi beat to win his first title with Inter Miami, the 2023 Leagues Cup?',['LAFC','Nashville SC','Philadelphia Union','FC Dallas']]
  ],
  [
    ['Which Porto player was sent off in the 2003 Estádio do Dragão opening friendly, in which Messi made his first-team Barcelona debut?',['Jorge Costa','Ricardo Carvalho','Pedro Mendes','None']],
    ['Which shirt number did Messi wear on his official Barcelona debut against Espanyol in 2004?',['19','30','10','18']],
    ['Which Argentine player was sent off in the match in which Messi debuted for Argentina against Hungary?',['Juan Pablo Sorín','Lionel Scaloni','None, Messi was the only Argentine sent off','Gabriel Heinze']],
    ['Against which team did Messi score his first official hat-trick for Barcelona?',['Valencia','Real Madrid','Atlético Madrid','Sevilla']],
    ['Who was in goal for Real Madrid when Messi scored his first hat-trick in the 2007 Clásico?',['Diego López','Keylor Navas','Iker Casillas','Jerzy Dudek']],
    ['Against which national team did Messi score his first official goal for Argentina’s senior team?',['Croatia','Venezuela','Peru','Algeria']],
    ['Which Barcelona player was substituted for Messi on his official debut against Espanyol?',['Deco',"Samuel Eto’o",'Henrik Larsson','Ludovic Giuly']],
    ['Against which team did Messi score his first direct free-kick goal in an official Barcelona match?',['Atlético Madrid','Villarreal','Sevilla','Valencia']],
    ['Which player received Messi’s assist for the winning goal in the 2008 Beijing Olympic final?',['Sergio Agüero','Ángel Di María','Ezequiel Lavezzi','Juan Román Riquelme']],
    ['Against which team did Messi play his final official match for Barcelona?',['Atlético Madrid','Celta Vigo','Eibar','Real Sociedad']]
  ]
];
const fotosCelebracion=[
  {archivo:'Leo_messi_barce_2005.jpg',titulo:'Lionel Messi con Barcelona',autor:'Josep Tomàs',licencia:'CC BY-SA 4.0',pagina:'https://commons.wikimedia.org/wiki/File:Leo_messi_barce_2005.jpg',alt:'Messi juega para el Barcelona en 2005.'},
  {archivo:'Messi_al_Gamper.jpg',titulo:'Messi en el Trofeo Joan Gamper',autor:'Tsutomu Takasu',licencia:'CC BY 2.0',pagina:'https://commons.wikimedia.org/wiki/File:Messi_al_Gamper.jpg',alt:'Messi en acción con el Barcelona.'},
  {archivo:'Lionel_Messi_WC2022.jpg',titulo:'Lionel Messi con Argentina en Qatar 2022',autor:'Hossein Zohrevand / Tasnim News Agency',licencia:'CC BY 4.0',pagina:'https://commons.wikimedia.org/wiki/File:Lionel_Messi_WC2022.jpg',alt:'Lionel Messi en acción con Argentina durante el Mundial de Qatar 2022.'},
  {archivo:'Argentina_3-3_Francia_-_Copa_Mundial_2022_-_Argentina_campe%C3%B3n.jpg',titulo:'Argentina campeona del mundo',autor:'Sebas',licencia:'CC BY 3.0',pagina:'https://commons.wikimedia.org/wiki/File:Argentina_3-3_Francia_-_Copa_Mundial_2022_-_Argentina_campe%C3%B3n.jpg',alt:'Messi y Argentina celebran el título mundial de 2022.'},
  {archivo:'LIONEL_MESSI_-_BRESH_MIAMI.jpg',titulo:'Messi y Antonela en Miami',autor:'Bresh',licencia:'CC BY-SA 4.0',pagina:'https://en.wikipedia.org/wiki/File:LIONEL_MESSI_-_BRESH_MIAMI.jpg',alt:'Messi y Antonela juntos fuera de la cancha.'}
];
const textosEn={
  headerPill:'<span class="live-dot"></span> FOOTBALL TRIVIA',brandTagline:'THE NO. 10 CHALLENGE',sound:'🔊 Sound',heroEyebrow:'<span>★ ★ ★</span> THE LEGEND CONTINUES',
  heroTitle:'HOW MUCH DO YOU KNOW<br>ABOUT THE <em>GOAT?</em>',heroSubtitle:'From his first Barcelona goal to glory in Qatar. Prove you are a true Lionel Messi fan.',artCaption:'THE STORY<br><b>IS WRITTEN WITH NO. 10</b>',
  levels:'LEVELS',questionsPerLevel:'QUESTIONS PER LEVEL',start:'START THE CHALLENGE <span aria-hidden="true">↗</span>',openGallery:'VIEW LEVEL PHOTOS <span aria-hidden="true">→</span>',
  microcopy:'Free · No sign-up · 5 random questions per level',heroTagline:'🇦🇷 SIX LEVELS. ONE LEGEND.',worldRanking:'WORLD RANKING',refresh:'REFRESH',
  galleryEyebrow:'MESSI QUIZ · CHALLENGE PHOTOS',galleryTitle:'LEVEL GALLERY',gallerySubtitle:'Browse the photos shown in level celebrations whenever you like.',backHome:'← BACK TO HOME',
  questionKicker:'<span class="round-icon">⚽</span> TEST YOUR MEMORY',unlocked:'UNLOCKED',nextLevel:'LET’S GO TO THE NEXT LEVEL! <span aria-hidden="true">→</span>',
  levelFinal:'LEVEL SUMMARY',points:'POINTS',saveRanking:'ADD YOUR SCORE TO THE RANKING',yourName:'Your name',saveScore:'SAVE SCORE',playAgain:'PLAY AGAIN <span aria-hidden="true">↗</span>',
  footer:'MADE FOR FOOTBALL FANS ⚽'
};
const nombresNivelEn=['The Flea','La Masia','The Number 10','GOAT Mode','D10S of Football','Antonela Roccuzzo'];
let idiomaActual='es';
try{idiomaActual=localStorage.getItem('messi-quiz-language')==='en'?'en':'es';}catch(_){/* idioma predeterminado */}
let nivelActual=0, seleccionadas=[],actual=0,puntos=0,respondida=false,respuestaElegida=null,aciertosNivel=0,puntosTotales=0,ultimoResultado={};
const preguntasReservadas=new Map();
// La Publishable Key está diseñada para uso público en el navegador. La tabla debe
// tener políticas RLS que permitan SELECT e INSERT según la política del proyecto.
const SUPABASE_URL='https://ezyhytwqulwpdvfsxgte.supabase.co';
const SUPABASE_PUBLISHABLE_KEY='sb_publishable_EX6iCsuW_VegLut-GuwZCw_LI0G8fSI';
let partidaGuardada=false, guardandoPartida=false, intentoGuardadoIncierto=false;
const $=id=>document.getElementById(id);
function nombreNivel(index){return idiomaActual==='en'?nombresNivelEn[index]:nivelesJuego[index].nombre;}
function textoPregunta(p){
  if(idiomaActual!=='en')return {pregunta:p.pregunta,opciones:p.opciones};
  const nivel=nivelesJuego.findIndex(n=>n.preguntas.includes(p));
  if(nivel<0)return {pregunta:p.pregunta,opciones:p.opciones};
  const indice=nivelesJuego[nivel].preguntas.indexOf(p),traduccion=preguntasEn[nivel]?.[indice];
  return traduccion?{pregunta:traduccion[0],opciones:traduccion[1]}:{pregunta:p.pregunta,opciones:p.opciones};
}
function aplicarIdioma(){
  const ingles=idiomaActual==='en';document.documentElement.lang=idiomaActual;document.title=ingles?'Messi Quiz | The No. 10 Challenge':'Messi Quiz | El desafío del 10';
  document.querySelector('meta[name="description"]').content=ingles?'Messi Quiz: six levels to prove how much you know about Lionel Messi.':'Messi Quiz: seis niveles para demostrar cuánto sabés de Lionel Messi.';
  document.querySelectorAll('[data-i18n]').forEach(el=>{if(el.dataset.originalHtml===undefined)el.dataset.originalHtml=el.innerHTML;el.innerHTML=ingles?(textosEn[el.dataset.i18n]||el.dataset.originalHtml):el.dataset.originalHtml;});
  $('language-select').value=idiomaActual;
  $('sound-toggle').textContent=ingles?(sonidoActivo?'🔊 Sound':'🔇 Muted'):(sonidoActivo?'🔊 Sonido':'🔇 Silencio');
  $('sound-toggle').title=ingles?'Toggle sound':'Activar o desactivar sonidos';
  $('language-select').setAttribute('aria-label',ingles?'Choose language':'Elegir idioma');
  document.querySelector('.brand').setAttribute('aria-label',ingles?'Back to the Messi Quiz home screen':'Volver a la pantalla principal de Messi Quiz');
  $('player-name').placeholder=ingles?'What is your name?':'¿Cómo te llamás?';
  $('celebration-progress').setAttribute('aria-label',ingles?'Level progress':'Progreso de niveles');
  if(partidaGuardada)$('save-status').textContent=ingles?'Score saved!':'¡Puntuación guardada!';
  else if(guardandoPartida)$('save-status').textContent=ingles?'Saving score…':'Guardando puntuación…';
  if(document.body.dataset.screen==='juego')actualizarTextosPregunta();
  if(document.body.dataset.screen==='galeria')cargarGaleriaFotos();
  if(document.body.dataset.screen==='celebracion'&&nivelActual>0)celebrarAscenso(nivelActual-1,nivelActual);
  if(document.body.dataset.screen==='resultado'&&ultimoResultado)resultado(ultimoResultado);
  if(document.body.dataset.screen==='inicio')void cargarRanking('inicio');
}
function idiomaCambiado(){idiomaActual=$('language-select').value;try{localStorage.setItem('messi-quiz-language',idiomaActual);}catch(_){/* el idioma se mantiene durante esta visita */}aplicarIdioma();}
function mezclar(lista){const copia=[...lista];for(let i=copia.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[copia[i],copia[j]]=[copia[j],copia[i]];}return copia;}
function pantalla(nombre){document.body.dataset.screen=nombre;['inicio','juego','celebracion','resultado','galeria'].forEach(id=>$(id).classList.toggle('oculto',id!==nombre));}
function cargarGaleriaFotos(){
  const grid=$('photo-gallery-grid');
  grid.replaceChildren();
  fotosCelebracion.forEach((foto,index)=>{
    const tarjeta=document.createElement('article');tarjeta.className='gallery-card';
    const altsEn=['Messi playing for Barcelona in 2005.','Messi in action at the Joan Gamper Trophy.','Lionel Messi in action for Argentina during the 2022 World Cup in Qatar.','Messi and Argentina celebrate their 2022 World Cup title.','Messi and Antonela together off the pitch.'];
    const imagen=document.createElement('img');imagen.src=`https://commons.wikimedia.org/wiki/Special:FilePath/${foto.archivo}?width=1000`;imagen.alt=idiomaActual==='en'?altsEn[index]:foto.alt;imagen.loading='lazy';
    const texto=document.createElement('div');texto.className='gallery-card-copy';
    const nivel=document.createElement('span');nivel.className='gallery-card-level';nivel.textContent=idiomaActual==='en'?`LEVEL ${index+2}`:`NIVEL ${index+2}`;
    const titulosEn=['Lionel Messi at Barcelona','Messi at the Joan Gamper Trophy','Lionel Messi with Argentina in Qatar 2022','World champions Argentina','Messi and Antonela in Miami'];
    const titulo=document.createElement('h2');titulo.textContent=idiomaActual==='en'?titulosEn[index]:foto.titulo;
    const credito=document.createElement('a');credito.href=foto.pagina;credito.target='_blank';credito.rel='noopener noreferrer';credito.textContent=idiomaActual==='en'?`Photo: ${foto.autor} · ${foto.licencia} · View source`:`Foto: ${foto.autor} · ${foto.licencia} · Ver fuente`;
    texto.append(nivel,titulo,credito);tarjeta.append(imagen,texto);grid.appendChild(tarjeta);
  });
}
function comenzar(){nivelActual=0;puntosTotales=0;preguntasReservadas.clear();$('score-submit').classList.remove('oculto');$('ranking-resultados').classList.remove('oculto');iniciarNivel();}
function iniciarNivel(){
  const nivel=nivelesJuego[nivelActual];
  if(nivel.preguntas.length<TOTAL){
    pantalla('resultado');
    $('results-icon').textContent='🔒';$('result-title').textContent=idiomaActual==='en'?'LEVEL HAS NO QUESTIONS':'NIVEL SIN PREGUNTAS';
    $('result-persona').textContent=nombreNivel(nivelActual).toUpperCase();
    $('mensaje-final').textContent=idiomaActual==='en'?'This level has no questions yet.':'Este nivel todavía no tiene preguntas cargadas.';
    $('result-quote').textContent=idiomaActual==='en'?'Add questions to this category to continue.':'Cuando agregues las preguntas de esta categoría, podrás continuar.';
    $('puntos-finales').textContent=puntosTotales;$('max-puntos').textContent='1000';
    $('resumen-final').textContent=idiomaActual==='en'?`Total score: ${puntosTotales}.`:`Puntaje acumulado: ${puntosTotales}.`;
    $('score-submit').classList.add('oculto');$('ranking-resultados').classList.add('oculto');
    return;
  }
  const reservadas=preguntasReservadas.get(nivelActual)||[];
  const disponibles=nivel.preguntas.filter(p=>!reservadas.includes(p));
  const propias=mezclar(disponibles);
  const primerasCuatro=propias.slice(0,4);
  const quintaPropia=propias.slice(4);
  const opcionesQuinta=[...quintaPropia.map(p=>({pregunta:p,origen:nivelActual}))];
  if(nivelActual<4){
    const siguiente=nivelesJuego[nivelActual+1];
    const reservadasSiguiente=preguntasReservadas.get(nivelActual+1)||[];
    siguiente.preguntas.filter(p=>!reservadasSiguiente.includes(p)).forEach(p=>opcionesQuinta.push({pregunta:p,origen:nivelActual+1}));
  }
  const elegida=mezclar(opcionesQuinta)[0];
  seleccionadas=[...primerasCuatro,elegida.pregunta];
  if(elegida.origen>nivelActual){
    preguntasReservadas.set(elegida.origen,[...(preguntasReservadas.get(elegida.origen)||[]),elegida.pregunta]);
  }
  actual=0;puntos=0;aciertosNivel=0;respondida=false;respuestaElegida=null;partidaGuardada=false;guardandoPartida=false;intentoGuardadoIncierto=false;
  $('score-form').reset();$('save-status').textContent='';$('btn-guardar').disabled=false;pantalla('juego');mostrar();
}
function actualizarTextosPregunta(){
  const p=seleccionadas[actual],nivel=nivelesJuego[nivelActual],texto=textoPregunta(p),ingles=idiomaActual==='en';
  const temas=['argentina','barcelona','barcelona','argentina','argentina','inter-miami'];document.body.dataset.levelTheme=temas[nivelActual];
  $('nivel-actual').textContent=`${ingles?'LEVEL':'NIVEL'} ${nivelActual+1} · ${nombreNivel(nivelActual).toUpperCase()}`;
  $('numero-pregunta').textContent=`${ingles?'QUESTION':'PREGUNTA'} ${String(actual+1).padStart(2,'0')} / 05`;
  $('progreso-texto').textContent=`${ingles?'LEVEL':'NIVEL'} ${nivelActual+1} ${ingles?'OF':'DE'} 6 · ${aciertosNivel}/${nivel.aciertos} ${ingles?'CORRECT TO ADVANCE':'ACIERTOS PARA AVANZAR'}`;
  $('progreso').style.width=`${(actual+1)/TOTAL*100}%`;$('puntuacion').textContent=`★ ${puntosTotales+puntos} ${ingles?'POINTS':'PUNTOS'}`;$('texto-pregunta').textContent=texto.pregunta;
  $('opciones').querySelectorAll('button').forEach((btn,i)=>{btn.querySelector('.option-content').textContent=texto.opciones[i];btn.classList.toggle('correct',respondida&&i===p.correcta);btn.classList.toggle('wrong',respondida&&i===respuestaElegida&&respuestaElegida!==p.correcta);btn.disabled=respondida;});
  if(respondida){const correcta=respuestaElegida===p.correcta;$('mensaje').textContent=correcta?(ingles?`✓ CORRECT! YOU EARNED ${nivel.puntos} POINTS`:`✓ ¡CORRECTO! SUMASTE ${nivel.puntos} PUNTOS`):(ingles?`✕ THE CORRECT ANSWER WAS: ${texto.opciones[p.correcta]}`:`✕ LA RESPUESTA CORRECTA ERA: ${texto.opciones[p.correcta]}`);$('mensaje').style.color=correcta?'#78edb6':'#ff9ca5';$('btn-siguiente').innerHTML=actual===TOTAL-1?(ingles?'VIEW LEVEL RESULTS <span aria-hidden="true">→</span>':'VER RESULTADO DEL NIVEL <span aria-hidden="true">→</span>'):(ingles?'NEXT QUESTION <span aria-hidden="true">→</span>':'SIGUIENTE PREGUNTA <span aria-hidden="true">→</span>');$('btn-siguiente').classList.remove('oculto');}else{$('mensaje').textContent='';$('btn-siguiente').classList.add('oculto');}
}
function mostrar(){respondida=false;respuestaElegida=null;const cont=$('opciones');cont.replaceChildren();for(let i=0;i<4;i++){const btn=document.createElement('button');btn.type='button';btn.className='option';const letra=document.createElement('span');letra.className='option-letter';letra.textContent='ABCD'[i];const contenido=document.createElement('span');contenido.className='option-content';btn.append(letra,contenido);btn.addEventListener('click',()=>responder(i));cont.appendChild(btn);}actualizarTextosPregunta();}
function responder(indice){if(respondida)return;respondida=true;respuestaElegida=indice;const p=seleccionadas[actual],nivel=nivelesJuego[nivelActual];if(indice===p.correcta){puntos+=nivel.puntos;aciertosNivel++;}sonar(indice===p.correcta);actualizarTextosPregunta();document.querySelector('.question-card').classList.remove('answer-pop');void document.querySelector('.question-card').offsetWidth;document.querySelector('.question-card').classList.add('answer-pop');}
function siguiente(){if(!respondida)return;actual++;if(actual<TOTAL)mostrar();else terminarNivel();}
function terminarNivel(){
  const nivel=nivelesJuego[nivelActual];
  puntosTotales+=puntos;
  if(aciertosNivel<nivel.aciertos){resultado({superado:false,partidaFinal:true});return;}
  if(nivelActual===4&&puntos<100){resultado({superado:false,partidaFinal:true});return;}
  if(nivelActual===5){resultado({superado:true,antonela:true,partidaFinal:true});return;}
  const nivelAnterior=nivelActual;
  nivelActual++;
  celebrarAscenso(nivelAnterior,nivelActual);
}
let temporizadorAscenso=null;
function celebrarAscenso(anterior,siguiente){
  const nivelVencido=nivelesJuego[anterior],nivelNuevo=nivelesJuego[siguiente];
  const pantallaFiesta=$('celebracion');
  pantallaFiesta.className=`celebration-screen fiesta-${siguiente+1}`;
  const ingles=idiomaActual==='en';
  $('celebration-kicker').textContent=siguiente===5?(ingles?'FINAL CHALLENGE UNLOCKED!':'¡DESAFÍO FINAL DESBLOQUEADO!'):(ingles?'YOU DID IT!':'¡LO LOGRASTE!');
  $('celebration-title').textContent=siguiente===5?(ingles?'YOU REACHED ANTONELA!':'¡LLEGASTE A ANTONELA!'):(ingles?'LEVEL COMPLETE!':'¡NIVEL SUPERADO!');
  $('celebration-passed').textContent=ingles?`You completed ${nombreNivel(anterior)} · Level ${anterior+1}`:`Completaste ${nombreNivel(anterior)} · Nivel ${anterior+1}`;
  $('celebration-next').textContent=ingles?`${nombreNivel(siguiente)} · LEVEL ${siguiente+1}`:`${nombreNivel(siguiente)} · NIVEL ${siguiente+1}`;
  const foto=fotosCelebracion[siguiente-1],imagen=$('celebration-photo');
  const altsEn=['Messi playing for Barcelona in 2005.','Messi in action at the Joan Gamper Trophy.','Lionel Messi in action for Argentina during the 2022 World Cup in Qatar.','Messi and Argentina celebrate their 2022 World Cup title.','Messi and Antonela together off the pitch.'];
  imagen.alt=ingles?altsEn[siguiente-1]:foto.alt;
  imagen.src=`https://commons.wikimedia.org/wiki/Special:FilePath/${foto.archivo}?width=1200`;
  imagen.onerror=()=>{imagen.onerror=null;imagen.src='https://commons.wikimedia.org/wiki/Special:FilePath/Lionel_Messi_20180626.jpg?width=1000';};
  const titulosEn=['Lionel Messi at Barcelona','Messi at the Joan Gamper Trophy','Lionel Messi with Argentina in Qatar 2022','World champions Argentina','Messi and Antonela in Miami'];
  const enlaceCredito=document.createElement('a');enlaceCredito.href=foto.pagina;enlaceCredito.target='_blank';enlaceCredito.rel='noopener noreferrer';enlaceCredito.textContent=`${ingles?titulosEn[siguiente-1]:foto.titulo} · ${foto.autor} · ${foto.licencia}`;
  $('celebration-photo-credit').replaceChildren(enlaceCredito);
  $('celebration-progress').replaceChildren();
  nivelesJuego.forEach((nivel,i)=>{const punto=document.createElement('span');if(i<=anterior)punto.className='done';punto.title=`${ingles?'Level':'Nivel'} ${i+1}: ${nombreNivel(i)}`;$('celebration-progress').append(punto);});
  const confeti=$('party-confetti');confeti.replaceChildren();
  const cantidad=28+siguiente*22;
  const colores=siguiente<=2?['#b91f3a','#183b70','#ffffff','#3260a8']:siguiente===5?['#ff6e9f','#111827','#ffffff','#ff9fbd']:['#83d9f4','#ffffff','#f3cf69','#459fd0'];
  for(let i=0;i<cantidad;i++){
    const papel=document.createElement('i');
    papel.style.setProperty('--x',`${Math.random()*100}%`);
    papel.style.setProperty('--w',`${5+Math.random()*8}px`);
    papel.style.setProperty('--h',`${9+Math.random()*13}px`);
    papel.style.setProperty('--c',colores[i%colores.length]);
    papel.style.setProperty('--r',`${Math.random()*360}deg`);
    papel.style.setProperty('--drift',`${Math.random()*240-120}px`);
    papel.style.setProperty('--d',`${2.2+Math.random()*1.8}s`);
    papel.style.setProperty('--delay',`${Math.random()*.75}s`);
    confeti.append(papel);
  }
  pantalla('celebracion');sonar(true);
  const duracion=2800+siguiente*430;
  temporizadorAscenso=setTimeout(entrarAlNivel,duracion);
}
function entrarAlNivel(){if(temporizadorAscenso){clearTimeout(temporizadorAscenso);temporizadorAscenso=null;}iniciarNivel();}
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
  $('sound-toggle').textContent = idiomaActual==='en'?(sonidoActivo?'🔊 Sound':'🔇 Muted'):(sonidoActivo?'🔊 Sonido':'🔇 Silencio');
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
function resultado({superado=false,antonela=false,partidaFinal=false}={}){
  ultimoResultado={superado,antonela,partidaFinal};
  pantalla('resultado');
  const nivel = idiomaActual==='en'?(antonela
    ? {icono:'🏆',nombre:'YOU ARE ANTONELA!',mensaje:'You know Messi so well you could tell him his own life story. You are more than a fan: you are family.',frase:'Final challenge complete: five out of five in the hardest level.'}
    : {icono:superado?'⚽':'🏁',nombre:superado?`LEVEL COMPLETE: ${nombreNivel(nivelActual-1).toUpperCase()}`:`YOU REACHED: ${nombreNivel(nivelActual).toUpperCase()}`,mensaje:superado?'You got enough answers right and unlocked the next level!':(nivelActual===4&&aciertosNivel>=4?'Antonela unlocks only with 100 points in D10S of Football.':`You needed ${nivelesJuego[nivelActual].aciertos} correct answers to advance.`),frase:superado?`Next challenge: ${nombreNivel(nivelActual)}.`:'Try again to keep progressing.'}) : antonela
    ? {icono:'🏆',nombre:'¡SOS ANTONELA!',mensaje:'Sabés tanto de Messi que podrías contarle su propia vida. Ya no sos un fanático: sos parte de la familia.',frase:'Desafío definitivo completado: cinco de cinco en el nivel más difícil.'}
    : {icono:superado?'⚽':'🏁',nombre:superado?`NIVEL SUPERADO: ${nivelesJuego[nivelActual-1].nombre.toUpperCase()}`:`HASTA ACÁ LLEGASTE: ${nivelesJuego[nivelActual].nombre.toUpperCase()}`,mensaje:superado?'¡Cumpliste los aciertos necesarios y desbloqueaste el siguiente nivel!':(nivelActual===4&&aciertosNivel>=4?'Antonela se desbloquea únicamente con 100 puntos en D10S del Fútbol.':`Necesitabas ${nivelesJuego[nivelActual].aciertos} aciertos para avanzar.`),frase:superado?`Siguiente desafío: ${nivelesJuego[nivelActual].nombre}.`:'Podés volver a intentarlo para seguir avanzando.'};
  $('puntos-finales').textContent = puntosTotales;
  $('max-puntos').textContent = String([100,200,325,475,675,1000][nivelActual] || 1000);
  $('resumen-final').textContent = idiomaActual==='en'?`Level ${nivelActual+1} · ${aciertosNivel} out of ${TOTAL} correct answers this round. Total score: ${puntosTotales}.`:`Nivel ${nivelActual+1} · ${aciertosNivel} de ${TOTAL} respuestas correctas en esta ronda. Puntaje acumulado: ${puntosTotales}.`;
  $('results-icon').textContent = nivel.icono;
  $('result-persona').textContent = nivel.nombre;
  $('mensaje-final').textContent = nivel.mensaje;
  $('result-quote').textContent = nivel.frase;
  $('result-title').textContent = idiomaActual==='en'?(antonela?'FINAL CHALLENGE COMPLETE!':(superado?'ON TO THE NEXT LEVEL!':'ROUND COMPLETE!')):(antonela?'¡DESAFÍO DEFINITIVO COMPLETADO!':(superado?'¡ADELANTE!':'¡Ronda terminada!'));
  if(partidaFinal)cargarRanking('resultados');
  document.querySelector('.results-screen').classList.remove('results-enter');
  void document.querySelector('.results-screen').offsetWidth;
  document.querySelector('.results-screen').classList.add('results-enter');
}
$('btn-comenzar').addEventListener('click',comenzar);$('btn-siguiente').addEventListener('click',siguiente);$('btn-reiniciar').addEventListener('click',comenzar);$('btn-entrar-nivel').addEventListener('click',entrarAlNivel);
$('btn-ver-galeria').addEventListener('click',()=>{cargarGaleriaFotos();pantalla('galeria');});$('btn-volver-inicio').addEventListener('click',()=>pantalla('inicio'));

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
  estado.textContent=idiomaActual==='en'?'Loading rankings…':'Cargando ranking…'; lista.replaceChildren(); if(refresh)refresh.disabled=true;
  try {
    const url=new URL(`${SUPABASE_URL}/rest/v1/resultados`);
    url.search=new URLSearchParams({select:'nombre,puntuacion,fecha',order:'puntuacion.desc,fecha.asc',limit:'10'});
    const abortador=new AbortController();
    const timeout=setTimeout(()=>abortador.abort(),12000);
    let response;
    try { response=await fetch(url,{headers:supabaseHeaders(),signal:abortador.signal,cache:'no-store'}); }
    finally { clearTimeout(timeout); }
    const filas=await respuestaSupabase(response);
    if (!filas.length) { estado.textContent=idiomaActual==='en'?'No scores yet. Be the first!':'Todavía no hay resultados. ¡Sé el primero!'; return; }
    estado.textContent='';
    filas.forEach((fila,i)=>{
      const li=document.createElement('li'), puesto=document.createElement('span'), nombre=document.createElement('span'), score=document.createElement('strong');
      li.className='ranking-row'; puesto.className='ranking-place'; nombre.className='ranking-name'; score.className='ranking-score';
      puesto.textContent=String(i+1).padStart(2,'0'); nombre.textContent=fila.nombre; score.textContent=`${fila.puntuacion} ${idiomaActual==='en'?'PTS':'PTS'}`;
      li.append(puesto,nombre,score); lista.append(li);
    });
  } catch (error) {
    const detalle=error.name==='AbortError'?'La consulta tardó demasiado.':error.message;
    estado.textContent=idiomaActual==='en'?`Could not load rankings: ${detalle}${error.status===401||error.status===403||error.status===404?` (HTTP ${error.status}; check the publishable key, table, and SELECT RLS policies).`:''}`:`No se pudo cargar el ranking: ${detalle}${error.status===401||error.status===403||error.status===404?` (HTTP ${error.status}; revisa la Publishable Key, la tabla y las políticas SELECT de RLS).`:''}`;
  } finally { if(refresh)refresh.disabled=false; }
}
async function guardarResultado(event) {
  event.preventDefault();
  if (partidaGuardada || guardandoPartida || intentoGuardadoIncierto) return;
  const nombre=$('player-name').value.trim();
  if (!nombre) { $('save-status').textContent=idiomaActual==='en'?'Enter your name to continue.':'Escribí tu nombre para continuar.'; return; }
  const button=$('btn-guardar'), estado=$('save-status');
  guardandoPartida=true; button.disabled=true; estado.textContent=idiomaActual==='en'?'Saving score…':'Guardando puntuación…';
  try {
    const abortador=new AbortController();
    const timeout=setTimeout(()=>abortador.abort(),12000);
    let response;
    try { response=await fetch(`${SUPABASE_URL}/rest/v1/resultados`,{
      method:'POST',headers:supabaseHeaders({'Content-Type':'application/json',Prefer:'return=minimal'}),
      body:JSON.stringify({nombre,puntuacion:puntosTotales}),signal:abortador.signal
    }); } finally { clearTimeout(timeout); }
    // El POST usa return=minimal: basta el estado HTTP exitoso y no se intenta
    // interpretar ningún cuerpo que PostgREST puede omitir por completo.
    if (!response.ok) await respuestaSupabase(response);
    partidaGuardada=true; estado.textContent=idiomaActual==='en'?'Score saved!':'¡Puntuación guardada!';
    void cargarRanking('resultados');
  } catch (error) {
    const detalle=error.name==='AbortError'?'La solicitud tardó demasiado.':error.message;
    if (error.status) {
      guardandoPartida=false;
      button.disabled=false;
      estado.textContent=idiomaActual==='en'?`Could not save: ${detalle}${error.status===401||error.status===403||error.status===404?` (HTTP ${error.status}; check the publishable key, table, and INSERT RLS policies).`:''}`:`No se pudo guardar: ${detalle}${error.status===401||error.status===403||error.status===404?` (HTTP ${error.status}; revisa la Publishable Key, la tabla y las políticas INSERT de RLS).`:''}`;
    } else {
      // Si falla la conexión/timeout, el servidor pudo insertar antes de perderse la respuesta.
      // Bloquear el reintento evita duplicar la misma partida desde esta interfaz.
      guardandoPartida=false;
      intentoGuardadoIncierto=true;
      estado.textContent=idiomaActual==='en'?`Could not confirm the save: ${detalle}. To prevent duplicates, this game is locked; refresh the rankings to check whether it was saved.`:`No se pudo confirmar el guardado: ${detalle}. Para evitar duplicados, esta partida queda bloqueada; actualizá el ranking para comprobar si se guardó.`;
    }
  }
}
$('score-form').addEventListener('submit',guardarResultado);
$('btn-ranking').addEventListener('click',()=>cargarRanking('resultados'));
$('btn-ranking-inicio').addEventListener('click',()=>cargarRanking('inicio'));
$('language-select').addEventListener('change',idiomaCambiado);
aplicarIdioma();
cargarRanking('inicio');
