
/*
    function sub_analysis() {
      var win = window.open("Test_analysis_ver1.php", "analysis", "width=650px, height=1200px, top=50, left=200, resizable=yes, scrollbars=yes");
      var f = document.winForm;
      f.target = "analysis";
      f.action = "Test_analysis_ver1.php";
      f.submit();
    }


     ====== checkbox check/ uncheck value sample ======
    // 선택된 목록 가져오기
    const che_visit = 'input[name="che_visit"]:checked';
    const selectedEls = document.querySelectorAll(che_visit);

    // 선택된 목록에서 value 찾기
    let result_visit = '';
    selectedEls.forEach((el) => {
      result_visit += el.value + ' ';
    });



    ====== radio check/ uncheck value sample ======
    if ($("input[type=radio][name=QOL_score1]:checked").is(':checked')){
      var QOL_score1 = document.querySelector("input[name='QOL_score1']:checked").value;
    } else {
      var QOL_score1 = "";
    }

*/

// 분석하기 실행
function sub_analysis(Main_test) {

  <!-- ======= Maiin Body-Customer-Information-value start ====== -->

  var name = document.getElementById('Cus_Name').value;
  var sex = document.getElementById('Cus_sex').value;
  var tell1 = document.getElementById('Cus_tell1').value;
  var tell2 = document.getElementById('Cus_tell2').value;
  var mobile1 = document.getElementById('Cus_mobile1').value;
  var mobile2 = document.getElementById('Cus_mobile2').value;
  var Birth_y = document.getElementById('Birth_y').value;
  var Birth_m = document.getElementById('Birth_m').value;
  var Birth_d = document.getElementById('Birth_d').value;
  var Birth_sel = document.getElementById('Birth_sel').value;
  var city = document.getElementById('txt_CCity').value;
  var Diagnosis1 = document.getElementById('Diagnosis1').value;
  var Diagnosis2 = document.getElementById('Diagnosis2').value;
  var reserv_count = document.getElementById('reserv_count').value;
  var reserv_day1 = document.getElementById('reserv_day1').value;
  var reserv_day2 = document.getElementById('reserv_day2').value;

  <!-- ======= Maiin Body-Customer-Information-value end ====== -->


  <!-- ======= Maiin Body-history-value start ====== -->

 const che_visit = 'input[name="che_visit"]:checked';
 const selectedEls_visit = document.querySelectorAll(che_visit);
 let visit_arr = '';
 selectedEls_visit.forEach((el_visit) => {
   visit_arr += el_visit.value +" ";
 });

 const che_request = 'input[name="che_request"]:checked';
 const selectedEls_request = document.querySelectorAll(che_request);
 let request_arr = '';
 selectedEls_request.forEach((el_request) => {
   request_arr += el_request.value;
 });

 var text_request1 = document.getElementById('text_request1').value;
 var text_request2 = document.getElementById('text_request2').value;
 var text_request3 = document.getElementById('text_request3').value;

 if ($("input[type=radio][name=radio_cl]:checked").is(':checked')){
   var radio_cl = document.querySelector("input[name='radio_cl']:checked").value;
 } else {
   var radio_cl = "";
 }

 var text_glasscl = document.getElementById('text_glasscl').value;
 var text_lasttest = document.getElementById('text_lasttest').value;

 const che_eye_disease_self = 'input[name="che_eye_disease_self"]:checked';
 const selectedEls_eye_disease_self = document.querySelectorAll(che_eye_disease_self);
 let eye_disease_self_arr = '';
 selectedEls_eye_disease_self.forEach((el_eye_disease_self) => {
   eye_disease_self_arr += el_eye_disease_self.value + ' ';
 });

 var text_eye_disease_self = document.getElementById('text_eye_disease_self').value;

 if ($("input[type=radio][name=radio_surgery1]:checked").is(':checked')){
   var radio_surgery1 = document.querySelector("input[name='radio_surgery1']:checked").value;
 } else {
   var radio_surgery1 = "";
 }

 var text_surgery1 = document.getElementById('text_surgery1').value;

 const che_eye_disease_family = 'input[name="che_eye_disease_family"]:checked';
 const selectedEls_eye_disease_family = document.querySelectorAll(che_eye_disease_family);
 let eye_disease_family_arr = '';
 selectedEls_eye_disease_family.forEach((el_eye_disease_family) => {
   eye_disease_family_arr += el_eye_disease_family.value + ' ';
 });

 var text_eye_disease_family = document.getElementById('text_eye_disease_family').value;

 if ($("input[type=radio][name=radio_surgery2]:checked").is(':checked')){
   var radio_surgery2 = document.querySelector("input[name='radio_surgery2']:checked").value;
 } else {
   var radio_surgery2 = "";
 }

 var text_surgery2 = document.getElementById('text_surgery2').value;

 const che_body_disease_self = 'input[name="che_body_disease_self"]:checked';
 const selectedEls_body_disease_self = document.querySelectorAll(che_body_disease_self);
 let body_disease_self_arr = '';
 selectedEls_body_disease_self.forEach((el_body_disease_self) => {
   body_disease_self_arr += el_body_disease_self.value + ' ';
 });

 var text_body_disease_self = document.getElementById('text_body_disease_self').value;

 if ($("input[type=radio][name=radio_surgery3]:checked").is(':checked')){
   var radio_surgery3 = document.querySelector("input[name='radio_surgery3']:checked").value;
 } else {
   var radio_surgery3 = "";
 }

 var text_surgery3 = document.getElementById('text_surgery3').value;
 var text_body_lasttest_self = document.getElementById('text_body_lasttest_self').value;

 const che_body_disease_family = 'input[name="che_body_disease_family"]:checked';
 const selectedEls_body_disease_family = document.querySelectorAll(che_body_disease_family);
 let body_disease_family_arr = '';
 selectedEls_body_disease_family.forEach((el_body_disease_family) => {
   body_disease_family_arr += el_body_disease_family.value + ' ';
 });

 var text_body_disease_family = document.getElementById('text_body_disease_family').value;

 if ($("input[type=radio][name=radio_surgery4]:checked").is(':checked')){
   var radio_surgery4 = document.querySelector("input[name='radio_surgery4']:checked").value;
 } else {
   var radio_surgery4 = "";
 }

 var text_surgery4 = document.getElementById('text_surgery4').value;

 if ($("input[type=radio][name=radio_drug]:checked").is(':checked')){
   var radio_drug = document.querySelector("input[name='radio_drug']:checked").value;
 } else {
   var radio_drug = "";
 }

 var text_disease_name = document.getElementById('text_disease_name').value;
 var text_drug = document.getElementById('text_drug').value;

 const che_school_prob = 'input[name="che_school_prob"]:checked';
 const selectedEls_che_school_prob = document.querySelectorAll(che_school_prob);
 let che_school_prob_arr = '';
 selectedEls_che_school_prob.forEach((el_che_school_prob) => {
   che_school_prob_arr += el_che_school_prob.value + ' ';
 });

 if ($("input[type=radio][name=radio_school]:checked").is(':checked')){
   var radio_school = document.querySelector("input[name='radio_school']:checked").value;
 } else {
   var radio_school = "";
 }

 if ($("input[type=radio][name=radio_friend]:checked").is(':checked')){
   var radio_friend = document.querySelector("input[name='radio_friend']:checked").value;
 } else {
   var radio_friend = "";
 }

 if ($("input[type=radio][name=radio_teacher]:checked").is(':checked')){
   var radio_teacher = document.querySelector("input[name='radio_teacher']:checked").value;
 } else {
   var radio_teacher = "";
 }

 if ($("input[type=radio][name=radio_report]:checked").is(':checked')){
   var radio_report = document.querySelector("input[name='radio_report']:checked").value;
 } else {
   var radio_report = "";
 }

 var text_school_prob = document.getElementById('text_school_prob').value;

 if ($("input[type=radio][name=radio_mother_health]:checked").is(':checked')){
   var radio_mother_health = document.querySelector("input[name='radio_mother_health']:checked").value;
 } else {
   var radio_mother_health = "";
 }

 var text_mother_health = document.getElementById('text_mother_health').value;

 if ($("input[type=radio][name=radio_delivery1]:checked").is(':checked')){
   var radio_delivery1 = document.querySelector("input[name='radio_delivery1']:checked").value;
 } else {
   var radio_delivery1 = "";
 }

 var text_delivery1 = document.getElementById('text_delivery1').value;

 if ($("input[type=radio][name=radio_delivery2]:checked").is(':checked')){
   var radio_delivery2 = document.querySelector("input[name='radio_delivery2']:checked").value;
 } else {
   var radio_delivery2 = "";
 }

 var text_delivery2 = document.getElementById('text_delivery2').value;

 if ($("input[type=radio][name=radio_crawl]:checked").is(':checked')){
   var radio_crawl = document.querySelector("input[name='radio_crawl']:checked").value;
 } else {
   var radio_crawl = "";
 }

 var text_crawl = document.getElementById('text_crawl').value;

 if ($("input[type=radio][name=radio_creeping]:checked").is(':checked')){
   var radio_creeping = document.querySelector("input[name='radio_creeping']:checked").value;
 } else {
   var radio_creeping = "";
 }

 var text_creeping = document.getElementById('text_creeping').value;
 var text_walk = document.getElementById('text_walk').value;

 if ($("input[type=radio][name=radio_run]:checked").is(':checked')){
   var radio_run = document.querySelector("input[name='radio_run']:checked").value;
 } else {
   var radio_run = "";
 }

 var text_run = document.getElementById('text_run').value;

 if ($("input[type=radio][name=radio_pitch]:checked").is(':checked')){
   var radio_pitch = document.querySelector("input[name='radio_pitch']:checked").value;
 } else {
   var radio_pitch = "";
 }

 var text_pitch = document.getElementById('text_pitch').value;

 if ($("input[type=radio][name=radio_micactiv]:checked").is(':checked')){
   var radio_micactiv = document.querySelector("input[name='radio_micactiv']:checked").value;
 } else {
   var radio_micactiv = "";
 }
 var text_micactiv = document.getElementById('text_micactiv').value;

 if ($("input[type=radio][name=radio_dress]:checked").is(':checked')){
   var radio_dress = document.querySelector("input[name='radio_dress']:checked").value;
 } else {
   var radio_dress = "";
 }
 var text_dress = document.getElementById('text_dress').value;

 if ($("input[type=radio][name=radio_zipper]:checked").is(':checked')){
   var radio_zipper = document.querySelector("input[name='radio_zipper']:checked").value;
 } else {
   var radio_zipper = "";
 }
 var text_zipper = document.getElementById('text_zipper').value;

 if ($("input[type=radio][name=radio_bicycle]:checked").is(':checked')){
   var radio_bicycle = document.querySelector("input[name='radio_bicycle']:checked").value;
 } else {
   var radio_bicycle = "";
 }
 var text_bicycle = document.getElementById('text_bicycle').value;

 if ($("input[type=radio][name=radio_play]:checked").is(':checked')){
   var radio_play = document.querySelector("input[name='radio_play']:checked").value;
 } else {
   var radio_play = "";
 }
 var text_play = document.getElementById('text_play').value;

 const che_tired = 'input[name="che_tired"]:checked';
 const selectedEls_che_tired = document.querySelectorAll(che_tired);
 let che_tired_arr = '';
 selectedEls_che_tired.forEach((el_che_tired) => {
   che_tired_arr += el_che_tired.value + ' ';
 });
 var text_tired = document.getElementById('text_tired').value;

 const che_nervous = 'input[name="che_nervous"]:checked';
 const selectedEls_che_nervous = document.querySelectorAll(che_nervous);
 let che_nervous_arr = '';
 selectedEls_che_nervous.forEach((el_che_nervous) => {
   che_nervous_arr += el_che_nervous.value + ' ';
 });
 var text_nervous = document.getElementById('text_nervous').value;

 if ($("input[type=radio][name=radio_langs]:checked").is(':checked')){
   var radio_langs = document.querySelector("input[name='radio_langs']:checked").value;
 } else {
   var radio_langs = "";
 }
 var text_langs = document.getElementById('text_langs').value;

 var text_character = document.getElementById('text_character').value;

 const che_motor_coordi = 'input[name="che_motor_coordi"]:checked';
 const selectedEls_che_motor_coordi = document.querySelectorAll(che_motor_coordi);
 let che_motor_coordi_arr = '';
 selectedEls_che_motor_coordi.forEach((el_che_motor_coordi) => {
   che_motor_coordi_arr += el_che_motor_coordi.value + ' ';
 });

 const che_touch = 'input[name="che_touch"]:checked';
 const selectedEls_che_touch = document.querySelectorAll(che_touch);
 let che_touch_arr = '';
 selectedEls_che_touch.forEach((el_che_touch) => {
   che_touch_arr += el_che_touch.value + ' ';
 });

 var text_weekday = document.getElementById('text_weekday').value;
 var text_weekend1 = document.getElementById('text_weekend1').value;
 var text_weekend2 = document.getElementById('text_weekend2').value;
 var text_activity = document.getElementById('text_activity').value;
 var text_specialty = document.getElementById('text_specialty').value;

 if ($("input[type=radio][name=radio_parents]:checked").is(':checked')){
   var radio_parents = document.querySelector("input[name='radio_parents']:checked").value;
 } else {
   var radio_parents = "";
 }
 var text_parents = document.getElementById('text_parents').value;

 if ($("input[type=radio][name=radio_friends]:checked").is(':checked')){
   var radio_friends = document.querySelector("input[name='radio_friends']:checked").value;
 } else {
   var radio_friends = "";
 }
 var text_friends = document.getElementById('text_friends').value;

 var text_memory = document.getElementById('text_memory').value;

 <!-- ======= Maiin Body-history-value end ====== -->

 <!-- ======= Maiin Body-QOL-value start ====== -->
 if ($("input[type=radio][name=QOL_score1]:checked").is(':checked')){
   var QOL_score1 = document.querySelector("input[name='QOL_score1']:checked").value;
 } else {
   var QOL_score1 = "";
 }

 if ($("input[type=radio][name=QOL_score2]:checked").is(':checked')){
   var QOL_score2 = document.querySelector("input[name='QOL_score2']:checked").value;
 } else {
   var QOL_score2 = "";
 }

 if ($("input[type=radio][name=QOL_score3]:checked").is(':checked')){
   var QOL_score3 = document.querySelector("input[name='QOL_score3']:checked").value;
 } else {
   var QOL_score3 = "";
 }

 if ($("input[type=radio][name=QOL_score4]:checked").is(':checked')){
   var QOL_score4 = document.querySelector("input[name='QOL_score4']:checked").value;
 } else {
   var QOL_score4 = "";
 }

 if ($("input[type=radio][name=QOL_score5]:checked").is(':checked')){
   var QOL_score5 = document.querySelector("input[name='QOL_score5']:checked").value;
 } else {
   var QOL_score5 = "";
 }

 if ($("input[type=radio][name=QOL_score6]:checked").is(':checked')){
   var QOL_score6 = document.querySelector("input[name='QOL_score6']:checked").value;
 } else {
   var QOL_score6 = "";
 }

 if ($("input[type=radio][name=QOL_score7]:checked").is(':checked')){
   var QOL_score7 = document.querySelector("input[name='QOL_score7']:checked").value;
 } else {
   var QOL_score7 = "";
 }

 if ($("input[type=radio][name=QOL_score8]:checked").is(':checked')){
   var QOL_score8 = document.querySelector("input[name='QOL_score8']:checked").value;
 } else {
   var QOL_score8 = "";
 }

 if ($("input[type=radio][name=QOL_score9]:checked").is(':checked')){
   var QOL_score9 = document.querySelector("input[name='QOL_score9']:checked").value;
 } else {
   var QOL_score9 = "";
 }

 if ($("input[type=radio][name=QOL_score10]:checked").is(':checked')){
   var QOL_score10 = document.querySelector("input[name='QOL_score10']:checked").value;
 } else {
   var QOL_score10 = "";
 }

 if ($("input[type=radio][name=QOL_score11]:checked").is(':checked')){
   var QOL_score11 = document.querySelector("input[name='QOL_score11']:checked").value;
 } else {
   var QOL_score11 = "";
 }

 if ($("input[type=radio][name=QOL_score12]:checked").is(':checked')){
   var QOL_score12 = document.querySelector("input[name='QOL_score12']:checked").value;
 } else {
   var QOL_score12 = "";
 }

 if ($("input[type=radio][name=QOL_score13]:checked").is(':checked')){
   var QOL_score13 = document.querySelector("input[name='QOL_score13']:checked").value;
 } else {
   var QOL_score13 = "";
 }

 if ($("input[type=radio][name=QOL_score14]:checked").is(':checked')){
   var QOL_score14 = document.querySelector("input[name='QOL_score14']:checked").value;
 } else {
   var QOL_score14 = "";
 }

 if ($("input[type=radio][name=QOL_score15]:checked").is(':checked')){
   var QOL_score15 = document.querySelector("input[name='QOL_score15']:checked").value;
 } else {
   var QOL_score15 = "";
 }

 if ($("input[type=radio][name=QOL_score16]:checked").is(':checked')){
   var QOL_score16 = document.querySelector("input[name='QOL_score16']:checked").value;
 } else {
   var QOL_score16 = "";
 }

 if ($("input[type=radio][name=QOL_score17]:checked").is(':checked')){
   var QOL_score17 = document.querySelector("input[name='QOL_score17']:checked").value;
 } else {
   var QOL_score17 = "";
 }

 if ($("input[type=radio][name=QOL_score18]:checked").is(':checked')){
   var QOL_score18 = document.querySelector("input[name='QOL_score18']:checked").value;
 } else {
   var QOL_score18 = "";
 }

 if ($("input[type=radio][name=QOL_score19]:checked").is(':checked')){
   var QOL_score19 = document.querySelector("input[name='QOL_score19']:checked").value;
 } else {
   var QOL_score19 = "";
 }

  <!-- ======= Maiin Body-QOL-value end ====== -->


  <!-- ======= Maiin Body-Evolution-value start ====== -->
  if ($("input[type=radio][name=MainEye]:checked").is(':checked')){
    var MainEye = document.querySelector("input[name='MainEye']:checked").value;
  } else {
    var MainEye = "";
  }
  var ChAge = parseInt(document.getElementById('Age_y').innerHTML, 10);
  var ChAge_m = parseInt(document.getElementById('Age_m').innerHTML, 10);
  var PD = document.getElementById('PD').value;
  var sel_glass1 = document.getElementById('sel_glass1').value;
  var RDVision = document.getElementById('RDVision').value;
  var LDVision = document.getElementById('LDVision').value;
  var OUDVision = document.getElementById('OUDVision').value;
  var RNVision = document.getElementById('RNVision').value;
  var LNVision = document.getElementById('LNVision').value;
  var OUNVision = document.getElementById('OUNVision').value;
  var TxtRSph = document.getElementById('TxtRSph').value;
  var TxtRCyl = document.getElementById('TxtRCyl').value;
  var TxtRAxis = document.getElementById('TxtRAxis').value;
  var TxtRAdd = document.getElementById('TxtRAdd').value;
  var TxtLSph = document.getElementById('TxtLSph').value;
  var TxtLCyl = document.getElementById('TxtLCyl').value;
  var TxtLAxis = document.getElementById('TxtLAxis').value;
  var TxtLAdd = document.getElementById('TxtLAdd').value;
  var RDVision_new = document.getElementById('RDVision_new').value;
  var LDVision_new = document.getElementById('LDVision_new').value;
  var OUDVision_new = document.getElementById('OUDVision_new').value;
  var RNVision_new = document.getElementById('RNVision_new').value;
  var LNVision_new = document.getElementById('LNVision_new').value;
  var OUNVision_new = document.getElementById('OUNVision_new').value;
  var Balance = document.getElementById('Balance').value;
  var D_W4D = document.getElementById('D_W4D').value;
  var N_W4D = document.getElementById('N_W4D').value;
  var CTest_D = document.getElementById('CTest_D').value;
  var CTest_N = document.getElementById('CTest_N').value;
  var R_accom = document.getElementById('R_accom').value;
  var L_accom = document.getElementById('L_accom').value;
  var O_accom = document.getElementById('O_accom').value;
  var RAccom_Rev = document.getElementById('RAccom_Rev').value;
  var LAccom_Rev = document.getElementById('LAccom_Rev').value;
  var OUAccom_Rev = document.getElementById('OUAccom_Rev').value;
  var Sel_AccomRev = document.getElementById('Sel_AccomRev').value;
  var NVer = document.getElementById('NVer').value;
  var bro_eye_movement = document.getElementById('bro_eye_movement').value;
  var bro_head_turn = document.getElementById('bro_head_turn').value;
  var sacca_eye_movement = document.getElementById('sacca_eye_movement').value;
  var sacca_head_turn = document.getElementById('sacca_head_turn').value;
  var DStereo = document.getElementById('DStereo').value;
  var NStereo = document.getElementById('NStereo').value;
  var Pupilreflex = document.getElementById('Pupilreflex').value;
  var horEVA_tool = document.getElementById('horEVA_tool').value;
  var Dectopic = document.getElementById('Dectopic').value;
  var D_BIBO = document.getElementById('D_BIBO').value;
  var Nectopic = document.getElementById('Nectopic').value;
  var N_BIBO = document.getElementById('N_BIBO').value;
  var DVer_tool = document.getElementById('DVer_tool').value;
  var DConver1 = document.getElementById('DConver1').value;
  var DConver2 = document.getElementById('DConver2').value;
  var DConver3 = document.getElementById('DConver3').value;
  var DDever2 = document.getElementById('DDever2').value;
  var DDever3 = document.getElementById('DDever3').value;
  var NVer_tool = document.getElementById('NVer_tool').value;
  var NConver1 = document.getElementById('NConver1').value;
  var NConver2 = document.getElementById('NConver2').value;
  var NConver3 = document.getElementById('NConver3').value;
  var NDever1 = document.getElementById('NDever1').value;
  var NDever2 = document.getElementById('NDever2').value;
  var NDever3 = document.getElementById('NDever3').value;
  var verEVA_tool = document.getElementById('verEVA_tool').value;
  var DVertical = document.getElementById('DVertical').value;
  var D_BUBD = document.getElementById('D_BUBD').value;
  var NVertical = document.getElementById('NVertical').value;
  var N_BUBD = document.getElementById('N_BUBD').value;
  var DVertical_tool = document.getElementById('DVertical_tool').value;
  var DVertical_BD1 = document.getElementById('DVertical_BD1').value;
  var DVertical_BD2 = document.getElementById('DVertical_BD2').value;
  var DVertical_BU1 = document.getElementById('DVertical_BU1').value;
  var DVertical_BU2 = document.getElementById('DVertical_BU2').value;
  var DVertical_BD3 = document.getElementById('DVertical_BD3').value;
  var DVertical_BD4 = document.getElementById('DVertical_BD4').value;
  var DVertical_BU3 = document.getElementById('DVertical_BU3').value;
  var DVertical_BU4 = document.getElementById('DVertical_BU4').value;
  var NVertical_tool = document.getElementById('NVertical_tool').value;
  var NVertical_BD1 = document.getElementById('NVertical_BD1').value;
  var NVertical_BD2  = document.getElementById('NVertical_BD2').value;
  var NVertical_BU1 = document.getElementById('NVertical_BU1').value;
  var NVertical_BU2 = document.getElementById('NVertical_BU2').value;
  var NVertical_BD3 = document.getElementById('NVertical_BD3').value;
  var NVertical_BD4 = document.getElementById('NVertical_BD4').value;
  var NVertical_BU3 = document.getElementById('NVertical_BU3').value;
  var NVertical_BU4 = document.getElementById('NVertical_BU4').value;
  var VerRev = document.getElementById('VerRev').value;
  var D_agree = document.getElementById('D_agree').value;
  var DHor_maddox = document.getElementById('DHor_maddox').value;
  var DHor_BIBO = document.getElementById('DHor_BIBO').value;
  var DVer_maddox = document.getElementById('DVer_maddox').value;
  var DVer_BIBO = document.getElementById('DVer_BIBO').value;
  var N_agree = document.getElementById('N_agree').value;
  var NHor_maddox = document.getElementById('NHor_maddox').value;
  var NHor_BIBO = document.getElementById('NHor_BIBO').value;
  var NVer_maddox = document.getElementById('NVer_maddox').value;
  var NVer_BIBO = document.getElementById('NVer_BIBO').value;
  var MIT = document.getElementById('MIT').value;


  <!-- ======= Maiin Body-사시분류-value start ====== -->
  if ($("input[type=radio][name=radio_month6]:checked").is(':checked')){
    var radio_month6 = document.querySelector("input[name='radio_month6']:checked").value;
  } else {
    var radio_month6 = "";
  }

  if ($("input[type=radio][name=radio_exami]:checked").is(':checked')){
    var radio_exami = document.querySelector("input[name='radio_exami']:checked").value;
  } else {
    var radio_exami = "";
  }

  if ($("input[type=radio][name=ratio_cross]:checked").is(':checked')){
    var ratio_cross = document.querySelector("input[name='ratio_cross']:checked").value;
  } else {
    var ratio_cross = "";
  }

  if ($("input[type=radio][name=radio_change_ver]:checked").is(':checked')){
    var radio_change_ver = document.querySelector("input[name='radio_change_ver']:checked").value;
  } else {
    var radio_change_ver = "";
  }

  if ($("input[type=radio][name=radio_splitting]:checked").is(':checked')){
    var radio_splitting = document.querySelector("input[name='radio_splitting']:checked").value;
  } else {
    var radio_splitting = "";
  }

  if ($("input[type=radio][name=radio_double_vi]:checked").is(':checked')){
    var radio_double_vi = document.querySelector("input[name='radio_double_vi']:checked").value;
  } else {
    var radio_double_vi = "";
  }

  if ($("input[type=radio][name=radio_amblyopia]:checked").is(':checked')){
    var radio_amblyopia = document.querySelector("input[name='radio_amblyopia']:checked").value;
  } else {
    var radio_amblyopia = "";
  }

  if ($("input[type=radio][name=radio_eye_movement]:checked").is(':checked')){
    var radio_eye_movement = document.querySelector("input[name='radio_eye_movement']:checked").value;
  } else {
    var radio_eye_movement = "";
  }


  <!-- ======= Maiin Body-TVPS-value start ====== -->

  var RAW_SCORE_DIS = document.getElementById('RAW_SCORE_DIS').value;
  var RAW_SCORE_MEM = document.getElementById('RAW_SCORE_MEM').value;
  var RAW_SCORE_SPA = document.getElementById('RAW_SCORE_SPA').value;
  var RAW_SCORE_CON = document.getElementById('RAW_SCORE_CON').value;
  var RAW_SCORE_SEQ = document.getElementById('RAW_SCORE_SEQ').value;
  var RAW_SCORE_FGR = document.getElementById('RAW_SCORE_FGR').value;
  var RAW_SCORE_CLO = document.getElementById('RAW_SCORE_CLO').value;


  <!-- ======= Maiin Body-VMI-value start ====== -->
  var Raw_vmi = document.getElementById('Raw_vmi').value;
  var Raw_visual = document.getElementById('Raw_visual').value;
  var Raw_motor = document.getElementById('Raw_motor').value;


  <!-- ======= Maiin Body-DEM-value start ====== -->
  var DEM_VER = document.getElementById('DEM_VER').value;
  var VER_ERR_S = document.getElementById('VER_ERR_S').value;
  var VER_ERR_O = document.getElementById('VER_ERR_O').value;
  var VER_ERR_A = document.getElementById('VER_ERR_A').value;
  var VER_ERR_T = document.getElementById('VER_ERR_T').value;
  var DEM_HOR = document.getElementById('DEM_HOR').value;
  var HOR_ERR_S = document.getElementById('HOR_ERR_S').value;
  var HOR_ERR_O = document.getElementById('HOR_ERR_O').value;
  var HOR_ERR_A = document.getElementById('HOR_ERR_A').value;
  var HOR_ERR_T = document.getElementById('HOR_ERR_T').value;


  <!-- ======= Maiin Body-WACS-value start ====== -->
  var WACS_RAW_T1 = document.getElementById('WACS_RAW_T1').value;
  var WACS_RAW_T2 = document.getElementById('WACS_RAW_T2').value;
  var WACS_RAW_T3 = document.getElementById('WACS_RAW_T3').value;
  var WACS_RAW_T4 = document.getElementById('WACS_RAW_T4').value;




  <!-- ======= Maiin Body-Evolution-value end ====== -->


  <!-- ======= 데이터 전달값 지정 ====== -->

  <!-- ======= 고객정보 ====== -->

  localStorage.setItem('Cus_Name',name);
  localStorage.setItem('Cus_sex',sex);
  localStorage.setItem('Cus_tell1',tell1);
  localStorage.setItem('Cus_tell2',tell2);
  localStorage.setItem('Cus_mobile1',mobile1);
  localStorage.setItem('Cus_mobile2',mobile2);
  localStorage.setItem('Birth_y',Birth_y);
  localStorage.setItem('Birth_m',Birth_m);
  localStorage.setItem('Birth_d',Birth_d);
  localStorage.setItem('Birth_sel',Birth_sel);
  localStorage.setItem('txt_CCity',city);
  localStorage.setItem('Diagnosis1',Diagnosis1);
  localStorage.setItem('Diagnosis2',Diagnosis2);
  localStorage.setItem('reserv_count',reserv_count);
  localStorage.setItem('reserv_day1',reserv_day1);
  localStorage.setItem('reserv_day2',reserv_day2);


  <!-- ======= History ====== -->
  localStorage.setItem('che_visit',visit_arr);
  localStorage.setItem('che_request',request_arr);
  localStorage.setItem('text_request1',text_request1);
  localStorage.setItem('text_request2',text_request2);
  localStorage.setItem('text_request3',text_request3);
  localStorage.setItem('radio_cl',radio_cl);
  localStorage.setItem('text_glasscl',text_glasscl);
  localStorage.setItem('text_lasttest',text_lasttest);
  localStorage.setItem('che_eye_disease_self',eye_disease_self_arr);
  localStorage.setItem('text_eye_disease_self',text_eye_disease_self);
  localStorage.setItem('eye_disease_family_arr',eye_disease_family_arr);
  localStorage.setItem('radio_surgery1',radio_surgery1);
  localStorage.setItem('text_surgery1',text_surgery1);
  localStorage.setItem('che_eye_disease_family',eye_disease_family_arr);
  localStorage.setItem('text_eye_disease_family',text_eye_disease_family);
  localStorage.setItem('radio_surgery2',radio_surgery2);
  localStorage.setItem('text_surgery2',text_surgery2);
  localStorage.setItem('che_body_disease_self',body_disease_self_arr);
  localStorage.setItem('text_body_disease_self',text_body_disease_self);
  localStorage.setItem('radio_surgery3',radio_surgery3);
  localStorage.setItem('text_surgery3',text_surgery3);
  localStorage.setItem('text_body_lasttest_self',text_body_lasttest_self);
  localStorage.setItem('che_body_disease_family',body_disease_family_arr);
  localStorage.setItem('text_body_disease_family',text_body_disease_family);
  localStorage.setItem('radio_surgery4',radio_surgery4);
  localStorage.setItem('text_surgery4',text_surgery4);
  localStorage.setItem('radio_drug',radio_drug);
  localStorage.setItem('text_disease_name',text_disease_name);
  localStorage.setItem('text_drug',text_drug);
  localStorage.setItem('che_school_prob',che_school_prob_arr);
  localStorage.setItem('radio_school',radio_school);
  localStorage.setItem('radio_friend',radio_friend);
  localStorage.setItem('radio_teacher',radio_teacher);
  localStorage.setItem('radio_report',radio_report);
  localStorage.setItem('text_school_prob',text_school_prob);
  localStorage.setItem('radio_mother_health',radio_mother_health);
  localStorage.setItem('text_mother_health',text_mother_health);
  localStorage.setItem('radio_delivery1',radio_delivery1);
  localStorage.setItem('text_delivery1',text_delivery1);
  localStorage.setItem('radio_delivery2',radio_delivery2);
  localStorage.setItem('text_delivery2',text_delivery2);
  localStorage.setItem('radio_crawl',radio_crawl);
  localStorage.setItem('text_crawl',text_crawl);
  localStorage.setItem('radio_creeping',radio_creeping);
  localStorage.setItem('text_creeping',text_creeping);
  localStorage.setItem('text_walk',text_walk);
  localStorage.setItem('radio_run',radio_run);
  localStorage.setItem('text_run',text_run);
  localStorage.setItem('radio_pitch',radio_pitch);
  localStorage.setItem('text_pitch',text_pitch);
  localStorage.setItem('radio_micactiv',radio_micactiv);
  localStorage.setItem('text_micactiv',text_micactiv);
  localStorage.setItem('radio_dress',radio_dress);
  localStorage.setItem('text_dress',text_dress);
  localStorage.setItem('radio_zipper',radio_zipper);
  localStorage.setItem('text_zipper',text_zipper);
  localStorage.setItem('radio_bicycle',radio_bicycle);
  localStorage.setItem('text_bicycle',text_bicycle);
  localStorage.setItem('radio_play',radio_play);
  localStorage.setItem('radio_play',radio_play);
  localStorage.setItem('text_play',text_play);
  localStorage.setItem('che_tired',che_tired_arr);
  localStorage.setItem('text_tired',text_tired);
  localStorage.setItem('che_nervous',che_nervous_arr);
  localStorage.setItem('text_nervous',text_nervous);
  localStorage.setItem('radio_langs',radio_langs);
  localStorage.setItem('text_langs',text_langs);
  localStorage.setItem('text_character',text_character);
  localStorage.setItem('che_motor_coordi',che_motor_coordi_arr);
  localStorage.setItem('che_touch',che_touch_arr);
  localStorage.setItem('text_weekday',text_weekday);
  localStorage.setItem('text_weekend1',text_weekend1);
  localStorage.setItem('text_weekend2',text_weekend2);
  localStorage.setItem('text_activity',text_activity);
  localStorage.setItem('text_specialty',text_specialty);
  localStorage.setItem('radio_parents',radio_parents);
  localStorage.setItem('text_parents',text_parents);
  localStorage.setItem('radio_friends',radio_friends);
  localStorage.setItem('text_friends',text_friends);
  localStorage.setItem('text_memory',text_memory);


  <!-- ======= QOL ====== -->
  localStorage.setItem('QOL_score1',QOL_score1);
  localStorage.setItem('QOL_score2',QOL_score2);
  localStorage.setItem('QOL_score3',QOL_score3);
  localStorage.setItem('QOL_score4',QOL_score4);
  localStorage.setItem('QOL_score5',QOL_score5);
  localStorage.setItem('QOL_score6',QOL_score6);
  localStorage.setItem('QOL_score7',QOL_score7);
  localStorage.setItem('QOL_score8',QOL_score8);
  localStorage.setItem('QOL_score9',QOL_score9);
  localStorage.setItem('QOL_score10',QOL_score10);
  localStorage.setItem('QOL_score11',QOL_score11);
  localStorage.setItem('QOL_score12',QOL_score12);
  localStorage.setItem('QOL_score13',QOL_score13);
  localStorage.setItem('QOL_score14',QOL_score14);
  localStorage.setItem('QOL_score15',QOL_score15);
  localStorage.setItem('QOL_score16',QOL_score16);
  localStorage.setItem('QOL_score17',QOL_score17);
  localStorage.setItem('QOL_score18',QOL_score18);
  localStorage.setItem('QOL_score19',QOL_score19);


  <!-- ======= 양안시평가 ====== -->
  localStorage.setItem('MainEye',MainEye);
  localStorage.setItem('PD',PD);
  localStorage.setItem('sel_glass1',sel_glass1);
  localStorage.setItem('RDVision',RDVision);
  localStorage.setItem('LDVision',LDVision);
  localStorage.setItem('OUDVision',OUDVision);
  localStorage.setItem('RNVision',RNVision);
  localStorage.setItem('LNVision',LNVision);
  localStorage.setItem('OUNVision',OUNVision);
  localStorage.setItem('TxtRSph',TxtRSph);
  localStorage.setItem('TxtRCyl',TxtRCyl);
  localStorage.setItem('TxtRAxis',TxtRAxis);
  localStorage.setItem('TxtRAdd',TxtRAdd);
  localStorage.setItem('TxtLSph',TxtLSph);
  localStorage.setItem('TxtLCyl',TxtLCyl);
  localStorage.setItem('TxtLAxis',TxtLAxis);
  localStorage.setItem('TxtLAdd',TxtLAdd);
  localStorage.setItem('RDVision_new',RDVision_new);
  localStorage.setItem('LDVision_new',LDVision_new);
  localStorage.setItem('OUDVision_new',OUDVision_new);
  localStorage.setItem('RNVision_new',RNVision_new);
  localStorage.setItem('LNVision_new',LNVision_new);
  localStorage.setItem('OUNVision_new',OUNVision_new);
  localStorage.setItem('Balance',Balance);
  localStorage.setItem('D_W4D',D_W4D);
  localStorage.setItem('N_W4D',N_W4D);
  localStorage.setItem('CTest_D',CTest_D);
  localStorage.setItem('CTest_N',CTest_N);
  localStorage.setItem('ChAge',ChAge);
  localStorage.setItem('ChAge_m',ChAge_m);
  localStorage.setItem('R_accom',R_accom);
  localStorage.setItem('L_accom',L_accom);
  localStorage.setItem('O_accom',O_accom);
  localStorage.setItem('RAccom_Rev',RAccom_Rev);
  localStorage.setItem('LAccom_Rev',LAccom_Rev);
  localStorage.setItem('OUAccom_Rev',OUAccom_Rev);
  localStorage.setItem('Sel_AccomRev',Sel_AccomRev);
  localStorage.setItem('NVer',NVer);
  localStorage.setItem('bro_eye_movement',bro_eye_movement);
  localStorage.setItem('bro_head_turn',bro_head_turn);
  localStorage.setItem('sacca_eye_movement',sacca_eye_movement);
  localStorage.setItem('sacca_head_turn',sacca_head_turn);
  localStorage.setItem('DStereo',DStereo);
  localStorage.setItem('NStereo',NStereo);
  localStorage.setItem('Pupilreflex',Pupilreflex);
  localStorage.setItem('horEVA_tool',horEVA_tool);
  localStorage.setItem('Dectopic',Dectopic);
  localStorage.setItem('D_BIBO',D_BIBO);
  localStorage.setItem('Nectopic',Nectopic);
  localStorage.setItem('N_BIBO',N_BIBO);
  localStorage.setItem('DVer_tool',DVer_tool);
  localStorage.setItem('DConver1',DConver1);
  localStorage.setItem('DConver2',DConver2);
  localStorage.setItem('DConver3',DConver3);
  localStorage.setItem('DDever2',DDever2);
  localStorage.setItem('DDever3',DDever3);
  localStorage.setItem('NVer_tool',NVer_tool);
  localStorage.setItem('NConver1',NConver1);
  localStorage.setItem('NConver2',NConver2);
  localStorage.setItem('NConver3',NConver3);
  localStorage.setItem('NDever1',NDever1);
  localStorage.setItem('NDever2',NDever2);
  localStorage.setItem('NDever3',NDever3);
  localStorage.setItem('verEVA_tool',verEVA_tool);
  localStorage.setItem('DVertical',DVertical);
  localStorage.setItem('D_BUBD',D_BUBD);
  localStorage.setItem('NVertical',NVertical);
  localStorage.setItem('N_BUBD',N_BUBD);
  localStorage.setItem('DVertical_tool',DVertical_tool);
  localStorage.setItem('DVertical_BD1',DVertical_BD1);
  localStorage.setItem('DVertical_BD2',DVertical_BD2);
  localStorage.setItem('DVertical_BU1',DVertical_BU1);
  localStorage.setItem('DVertical_BU2',DVertical_BU2);
  localStorage.setItem('DVertical_BD3',DVertical_BD3);
  localStorage.setItem('DVertical_BD4',DVertical_BD4);
  localStorage.setItem('DVertical_BU3',DVertical_BU3);
  localStorage.setItem('DVertical_BU4',DVertical_BU4);
  localStorage.setItem('NVertical_tool',NVertical_tool);
  localStorage.setItem('NVertical_BD1',NVertical_BD1);
  localStorage.setItem('NVertical_BD2',NVertical_BD2);
  localStorage.setItem('NVertical_BU1',NVertical_BU1);
  localStorage.setItem('NVertical_BU2',NVertical_BU2);
  localStorage.setItem('NVertical_BD3',NVertical_BD3);
  localStorage.setItem('NVertical_BD4',NVertical_BD4);
  localStorage.setItem('NVertical_BU3',NVertical_BU3);
  localStorage.setItem('NVertical_BU4',NVertical_BU4);
  localStorage.setItem('VerRev',VerRev);
  localStorage.setItem('D_agree',D_agree);
  localStorage.setItem('DHor_maddox',DHor_maddox);
  localStorage.setItem('DHor_BIBO',DHor_BIBO);
  localStorage.setItem('DVer_maddox',DVer_maddox);
  localStorage.setItem('DVer_BIBO',DVer_BIBO);
  localStorage.setItem('N_agree',N_agree);
  localStorage.setItem('NHor_maddox',NHor_maddox);
  localStorage.setItem('NHor_BIBO',NHor_BIBO);
  localStorage.setItem('NVer_maddox',NVer_maddox);
  localStorage.setItem('NVer_BIBO',NVer_BIBO);
  localStorage.setItem('MIT',MIT);


  <!-- ======= 사시분류 ====== -->
  localStorage.setItem('radio_month6',radio_month6);
  localStorage.setItem('radio_exami',radio_exami);
  localStorage.setItem('ratio_cross',ratio_cross);
  localStorage.setItem('radio_change_ver',radio_change_ver);
  localStorage.setItem('radio_splitting',radio_splitting);
  localStorage.setItem('radio_double_vi',radio_double_vi);
  localStorage.setItem('radio_amblyopia',radio_amblyopia);
  localStorage.setItem('radio_eye_movement',radio_eye_movement);


  <!-- ======= TVPS ====== -->
  localStorage.setItem('RAW_SCORE_DIS',RAW_SCORE_DIS);
  localStorage.setItem('RAW_SCORE_MEM',RAW_SCORE_MEM);
  localStorage.setItem('RAW_SCORE_SPA',RAW_SCORE_SPA);
  localStorage.setItem('RAW_SCORE_CON',RAW_SCORE_CON);
  localStorage.setItem('RAW_SCORE_SEQ',RAW_SCORE_SEQ);
  localStorage.setItem('RAW_SCORE_FGR',RAW_SCORE_FGR);
  localStorage.setItem('RAW_SCORE_CLO',RAW_SCORE_CLO);


  <!-- ======= VMI ====== -->
  localStorage.setItem('Raw_vmi',Raw_vmi);
  localStorage.setItem('Raw_visual',Raw_visual);
  localStorage.setItem('Raw_motor',Raw_motor);


  <!-- ======= DEM ====== -->
  localStorage.setItem('DEM_VER',DEM_VER);
  localStorage.setItem('VER_ERR_S',VER_ERR_S);
  localStorage.setItem('VER_ERR_O',VER_ERR_O);
  localStorage.setItem('VER_ERR_A',VER_ERR_A);
  localStorage.setItem('VER_ERR_T',VER_ERR_T);
  localStorage.setItem('DEM_HOR',DEM_HOR);
  localStorage.setItem('HOR_ERR_S',HOR_ERR_S);
  localStorage.setItem('HOR_ERR_O',HOR_ERR_O);
  localStorage.setItem('HOR_ERR_A',HOR_ERR_A);
  localStorage.setItem('HOR_ERR_T',HOR_ERR_T);


  <!-- ======= WACS ====== -->
  localStorage.setItem('WACS_RAW_T1',WACS_RAW_T1);
  localStorage.setItem('WACS_RAW_T2',WACS_RAW_T2);
  localStorage.setItem('WACS_RAW_T3',WACS_RAW_T3);
  localStorage.setItem('WACS_RAW_T4',WACS_RAW_T4);
