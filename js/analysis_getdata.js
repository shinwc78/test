var Change_int = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,290,300];

// <!-- ======= Customer Information value ====== -->

var center_name = localStorage.getItem('center_name');


// <!-- ======= Customer Information value ====== -->
var Cus_Name = localStorage.getItem('Cus_Name');
var Cus_sex = localStorage.getItem('Cus_sex');
var Cus_tell1 = localStorage.getItem('Cus_tell1');
var Cus_tell2 = localStorage.getItem('Cus_tell2');
var Cus_mobile1 = localStorage.getItem('Cus_mobile1');
var Cus_mobile2 = localStorage.getItem('Cus_mobile2');
var Birth_y = localStorage.getItem('Birth_y');
var Birth_m = localStorage.getItem('Birth_m');
var Birth_d = localStorage.getItem('Birth_d');
var Birth_sel = localStorage.getItem('Birth_sel');
var txt_CCity = localStorage.getItem('txt_CCity');
var Diagnosis1 = localStorage.getItem('Diagnosis1');
var Diagnosis2 = localStorage.getItem('Diagnosis2');
var reserv_count = localStorage.getItem('reserv_count');
var reserv_day1 = localStorage.getItem('reserv_day1');
var reserv_day2 = localStorage.getItem('reserv_day2');

// <!-- ======= History value ====== -->
var che_visit = localStorage.getItem('che_visit');
var che_request = localStorage.getItem('che_request');
var text_request1 = localStorage.getItem('text_request1');
var text_request2 = localStorage.getItem('text_request2');
var text_request3 = localStorage.getItem('text_request3');
var radio_cl = localStorage.getItem('radio_cl');
var text_glasscl = localStorage.getItem('text_glasscl');
var text_lasttest = localStorage.getItem('text_lasttest');
var che_eye_disease_self = localStorage.getItem('che_eye_disease_self');
var text_eye_disease_self = localStorage.getItem('text_eye_disease_self');
var eye_disease_family_arr = localStorage.getItem('eye_disease_family_arr');
var radio_surgery1 = localStorage.getItem('radio_surgery1');
var text_surgery1 = localStorage.getItem('text_surgery1');
var che_eye_disease_family = localStorage.getItem('che_eye_disease_family');
var text_eye_disease_family = localStorage.getItem('text_eye_disease_family');
var radio_surgery2 = localStorage.getItem('radio_surgery2');
var text_surgery2 = localStorage.getItem('text_surgery2');
var che_body_disease_self = localStorage.getItem('che_body_disease_self');
var text_body_disease_self = localStorage.getItem('text_body_disease_self');
var radio_surgery3 = localStorage.getItem('radio_surgery3');
var text_surgery3 = localStorage.getItem('text_surgery3');
var text_body_lasttest_self = localStorage.getItem('text_body_lasttest_self');
var che_body_disease_family = localStorage.getItem('che_body_disease_family');
var text_body_disease_family = localStorage.getItem('text_body_disease_family');
var radio_surgery4 = localStorage.getItem('radio_surgery4');
var text_surgery4 = localStorage.getItem('text_surgery4');
var radio_drug = localStorage.getItem('radio_drug');
var text_disease_name = localStorage.getItem('text_disease_name');
var text_drug = localStorage.getItem('text_drug');
var che_school_prob = localStorage.getItem('che_school_prob');
var radio_school = localStorage.getItem('radio_school');
var radio_friend = localStorage.getItem('radio_friend');
var radio_teacher = localStorage.getItem('radio_teacher');
var radio_report = localStorage.getItem('radio_report');
var text_school_prob = localStorage.getItem('text_school_prob');
var radio_mother_health = localStorage.getItem('radio_mother_health');
var text_mother_health = localStorage.getItem('text_mother_health');
var radio_delivery1 = localStorage.getItem('radio_delivery1');
var text_delivery1 = localStorage.getItem('text_delivery1');
var radio_delivery2 = localStorage.getItem('radio_delivery2');
var text_delivery2 = localStorage.getItem('text_delivery2');
var radio_crawl = localStorage.getItem('radio_crawl');
var text_crawl = localStorage.getItem('text_crawl');
var radio_creeping = localStorage.getItem('radio_creeping');
var text_creeping = localStorage.getItem('text_creeping');
var text_walk = localStorage.getItem('text_walk');
var radio_run = localStorage.getItem('radio_run');
var text_run = localStorage.getItem('text_run');
var radio_pitch = localStorage.getItem('radio_pitch');
var text_pitch = localStorage.getItem('text_pitch');
var radio_micactiv = localStorage.getItem('radio_micactiv');
var text_micactiv = localStorage.getItem('text_micactiv');
var radio_dress = localStorage.getItem('radio_dress');
var text_dress = localStorage.getItem('text_dress');
var radio_zipper = localStorage.getItem('radio_zipper');
var text_zipper = localStorage.getItem('text_zipper');
var radio_bicycle = localStorage.getItem('radio_bicycle');
var text_bicycle = localStorage.getItem('text_bicycle');
var radio_play = localStorage.getItem('radio_play');
var radio_play = localStorage.getItem('radio_play');
var text_play = localStorage.getItem('text_play');
var che_tired = localStorage.getItem('che_tired');
var text_tired = localStorage.getItem('text_tired');
var che_nervous = localStorage.getItem('che_nervous');
var text_nervous = localStorage.getItem('text_nervous');
var radio_langs = localStorage.getItem('radio_langs');
var text_langs = localStorage.getItem('text_langs');
var text_character = localStorage.getItem('text_character');
var che_motor_coordi = localStorage.getItem('che_motor_coordi');
var che_touch = localStorage.getItem('che_touch');
var text_weekday = localStorage.getItem('text_weekday');
var text_weekend1 = localStorage.getItem('text_weekend1');
var text_weekend2 = localStorage.getItem('text_weekend2');
var text_activity = localStorage.getItem('text_activity');
var text_specialty = localStorage.getItem('text_specialty');
var radio_parents = localStorage.getItem('radio_parents');
var text_parents = localStorage.getItem('text_parents');
var radio_friends = localStorage.getItem('radio_friends');
var text_friends = localStorage.getItem('text_friends');
var text_memory = localStorage.getItem('text_memory');

// <!-- ======= QOL value ====== -->


var QOL_score1 = parseInt(localStorage.getItem('QOL_score1'));
var QOL_score2 = parseInt(localStorage.getItem('QOL_score2'));
var QOL_score3 = parseInt(localStorage.getItem('QOL_score3'));
var QOL_score4 = parseInt(localStorage.getItem('QOL_score4'));
var QOL_score5 = parseInt(localStorage.getItem('QOL_score5'));
var QOL_score6 = parseInt(localStorage.getItem('QOL_score6'));
var QOL_score7 = parseInt(localStorage.getItem('QOL_score7'));
var QOL_score8 = parseInt(localStorage.getItem('QOL_score8'));
var QOL_score9 = parseInt(localStorage.getItem('QOL_score9'));
var QOL_score10 = parseInt(localStorage.getItem('QOL_score10'));
var QOL_score11 = parseInt(localStorage.getItem('QOL_score11'));
var QOL_score12 = parseInt(localStorage.getItem('QOL_score12'));
var QOL_score13 = parseInt(localStorage.getItem('QOL_score13'));
var QOL_score14 = parseInt(localStorage.getItem('QOL_score14'));
var QOL_score15 = parseInt(localStorage.getItem('QOL_score15'));
var QOL_score16 = parseInt(localStorage.getItem('QOL_score16'));
var QOL_score17 = parseInt(localStorage.getItem('QOL_score17'));
var QOL_score18 = parseInt(localStorage.getItem('QOL_score18'));
var QOL_score19 = parseInt(localStorage.getItem('QOL_score19'));

var QOL_sum = QOL_score1+QOL_score2+QOL_score3+QOL_score4+QOL_score5+QOL_score6+QOL_score7+QOL_score8+QOL_score9+QOL_score10+QOL_score11+QOL_score12+QOL_score13+QOL_score14+QOL_score15+QOL_score16+QOL_score17+QOL_score18+QOL_score19;


// <!-- ======= 양안시평가 ====== -->
var MainEye = localStorage.getItem('MainEye');
var PD = parseFloat(localStorage.getItem('PD'));
var sel_glass1 = localStorage.getItem('sel_glass1');
var RDVision = parseFloat(localStorage.getItem('RDVision'));
var LDVision = parseFloat(localStorage.getItem('LDVision'));
var OUDVision = parseFloat(localStorage.getItem('OUDVision'));
var RNVision = parseFloat(localStorage.getItem('RNVision'));
var LNVision = parseFloat(localStorage.getItem('LNVision'));
var OUNVision = parseFloat(localStorage.getItem('OUNVision'));
var TxtRSph = parseFloat(localStorage.getItem('TxtRSph'));
var TxtRCyl = parseFloat(localStorage.getItem('TxtRCyl'));
var TxtRAxis = parseFloat(localStorage.getItem('TxtRAxis'));
var TxtRAdd = parseFloat(localStorage.getItem('TxtRAdd'));
var TxtLSph = parseFloat(localStorage.getItem('TxtLSph'));
var TxtLCyl = parseFloat(localStorage.getItem('TxtLCyl'));
var TxtLAxis = parseFloat(localStorage.getItem('TxtLAxis'));
var TxtLAdd = parseFloat(localStorage.getItem('TxtLAdd'));
var RDVision_new = parseFloat(localStorage.getItem('RDVision_new'));
var LDVision_new = parseFloat(localStorage.getItem('LDVision_new'));
var OUDVision_new = parseFloat(localStorage.getItem('OUDVision_new'));
var RNVision_new = parseFloat(localStorage.getItem('RNVision_new'));
var LNVision_new = parseFloat(localStorage.getItem('LNVision_new'));
var OUNVision_new = parseFloat(localStorage.getItem('OUNVision_new'));
var Balance = localStorage.getItem('Balance');
var D_W4D = localStorage.getItem('D_W4D');
var N_W4D = localStorage.getItem('N_W4D');
var CTest_D = localStorage.getItem('CTest_D');
var CTest_N = localStorage.getItem('CTest_N');
var ChAge = parseInt(localStorage.getItem('ChAge'));
var ChAge_m = parseInt(localStorage.getItem('ChAge_m'));
var R_accom = parseInt(localStorage.getItem('R_accom'));
var L_accom = parseInt(localStorage.getItem('L_accom'));
var O_accom = parseInt(localStorage.getItem('O_accom'));
var RAccom_Rev = parseFloat(localStorage.getItem('RAccom_Rev'));
var LAccom_Rev = parseFloat(localStorage.getItem('LAccom_Rev'));
var OUAccom_Rev = parseFloat(localStorage.getItem('OUAccom_Rev'));
var Sel_AccomRev =parseFloat(localStorage.getItem('Sel_AccomRev'));
var NVer = parseFloat(localStorage.getItem('NVer'));
var bro_eye_movement = localStorage.getItem('bro_eye_movement');
var bro_head_turn = localStorage.getItem('bro_head_turn');
var sacca_eye_movement = localStorage.getItem('sacca_eye_movement');
var sacca_head_turn = localStorage.getItem('sacca_head_turn');
var DStereo = localStorage.getItem('DStereo');
var NStereo = localStorage.getItem('NStereo');
var Pupilreflex = localStorage.getItem('Pupilreflex');
var horEVA_tool = localStorage.getItem('horEVA_tool');
var Dectopic = parseFloat(localStorage.getItem('Dectopic'));
var D_BIBO = localStorage.getItem('D_BIBO');
var Nectopic = parseFloat(localStorage.getItem('Nectopic'));
var N_BIBO = localStorage.getItem('N_BIBO');
var DVer_tool = localStorage.getItem('DVer_tool');
var DConver1 = parseFloat(localStorage.getItem('DConver1'));
var DConver2 = parseFloat(localStorage.getItem('DConver2'));
var DConver3 = parseFloat(localStorage.getItem('DConver3'));
var DDever2 = parseFloat(localStorage.getItem('DDever2'));
var DDever3 = parseFloat(localStorage.getItem('DDever3'));
var NVer_tool = localStorage.getItem('NVer_tool');
var NConver1 = parseFloat(localStorage.getItem('NConver1'));
var NConver2 = parseFloat(localStorage.getItem('NConver2'));
var NConver3 = parseFloat(localStorage.getItem('NConver3'));
var NDever1 = parseFloat(localStorage.getItem('NDever1'));
var NDever2 = parseFloat(localStorage.getItem('NDever2'));
var NDever3 = parseFloat(localStorage.getItem('NDever3'));
var verEVA_tool = localStorage.getItem('verEVA_tool');
var DVertical = parseFloat(localStorage.getItem('DVertical'));
var D_BUBD = localStorage.getItem('D_BUBD');
var NVertical = parseFloat(localStorage.getItem('NVertical'));
var N_BUBD = localStorage.getItem('N_BUBD');
var DVertical_tool = localStorage.getItem('DVertical_tool');
var DVertical_BD1 = parseFloat(localStorage.getItem('DVertical_BD1'));
var DVertical_BD2 = parseFloat(localStorage.getItem('DVertical_BD2'));
var DVertical_BU1 = parseFloat(localStorage.getItem('DVertical_BU1'));
var DVertical_BU2 = parseFloat(localStorage.getItem('DVertical_BU2'));
var DVertical_BD3 = parseFloat(localStorage.getItem('DVertical_BD3'));
var DVertical_BD4 = parseFloat(localStorage.getItem('DVertical_BD4'));
var DVertical_BU3 = parseFloat(localStorage.getItem('DVertical_BU3'));
var DVertical_BU4 = parseFloat(localStorage.getItem('DVertical_BU4'));
var NVertical_tool = localStorage.getItem('NVertical_tool');
var NVertical_BD1 = parseFloat(localStorage.getItem('NVertical_BD1'));
var NVertical_BD2 = parseFloat(localStorage.getItem('NVertical_BD2'));
var NVertical_BU1 = parseFloat(localStorage.getItem('NVertical_BU1'));
var NVertical_BU2 = parseFloat(localStorage.getItem('NVertical_BU2'));
var NVertical_BD3 = parseFloat(localStorage.getItem('NVertical_BD3'));
var NVertical_BD4 = parseFloat(localStorage.getItem('NVertical_BD4'));
var NVertical_BU3 = parseFloat(localStorage.getItem('NVertical_BU3'));
var NVertical_BU4 = parseFloat(localStorage.getItem('NVertical_BU4'));
var VerRev = parseFloat(localStorage.getItem('VerRev'));
var D_agree = localStorage.getItem('D_agree');
var DHor_maddox = parseFloat(localStorage.getItem('DHor_maddox'));
var DHor_BIBO = localStorage.getItem('DHor_BIBO');
var DVer_maddox = parseFloat(localStorage.getItem('DVer_maddox'));
var DVer_BIBO = localStorage.getItem('DVer_BIBO');
var N_agree = localStorage.getItem('N_agree');
var NHor_maddox = parseFloat(localStorage.getItem('NHor_maddox'));
var NHor_BIBO = localStorage.getItem('NHor_BIBO');
var NVer_maddox = parseFloat(localStorage.getItem('NVer_maddox'));
var NVer_BIBO = localStorage.getItem('NVer_BIBO');
var MIT = localStorage.getItem('MIT');


// <!-- ======= 사시분류 ====== -->
var radio_month6 = localStorage.getItem('radio_month6');
var radio_exami = localStorage.getItem('radio_exami');
var ratio_cross = localStorage.getItem('ratio_cross');
var radio_change_ver = localStorage.getItem('radio_change_ver');
var radio_splitting = localStorage.getItem('radio_splitting');
var radio_double_vi = localStorage.getItem('radio_double_vi');
var radio_amblyopia = localStorage.getItem('radio_amblyopia');
var radio_eye_movement = localStorage.getItem('radio_eye_movement');


// <!-- ======= TVPS ====== -->
var RAW_SCORE_DIS_int = localStorage.getItem('RAW_SCORE_DIS');
var RAW_SCORE_MEM_int = localStorage.getItem('RAW_SCORE_MEM');
var RAW_SCORE_SPA_int = localStorage.getItem('RAW_SCORE_SPA');
var RAW_SCORE_CON_int = localStorage.getItem('RAW_SCORE_CON');
var RAW_SCORE_SEQ_int = localStorage.getItem('RAW_SCORE_SEQ');
var RAW_SCORE_FGR_int = localStorage.getItem('RAW_SCORE_FGR');
var RAW_SCORE_CLO_int = localStorage.getItem('RAW_SCORE_CLO');


// <!-- ======= VMI ====== -->
var Raw_vmi_int = localStorage.getItem('Raw_vmi');
var Raw_visual_int = localStorage.getItem('Raw_visual');
var Raw_motor_int = localStorage.getItem('Raw_motor');


// <!-- ======= DEM ====== -->
var DEM_VER_int = localStorage.getItem('DEM_VER');
var VER_ERR_S_int = localStorage.getItem('VER_ERR_S');
var VER_ERR_O_int = localStorage.getItem('VER_ERR_O');
var VER_ERR_A_int = localStorage.getItem('VER_ERR_A');
var VER_ERR_T_int = localStorage.getItem('VER_ERR_T');
var DEM_HOR_int = localStorage.getItem('DEM_HOR');
var HOR_ERR_S_int = localStorage.getItem('HOR_ERR_S');
var HOR_ERR_O_int = localStorage.getItem('HOR_ERR_O');
var HOR_ERR_A_int = localStorage.getItem('HOR_ERR_A');
var HOR_ERR_T_int = localStorage.getItem('HOR_ERR_T');


// <!-- ======= WACS ====== -->
var WACS_RAW_T1_int = localStorage.getItem('WACS_RAW_T1');
var WACS_RAW_T2_int = localStorage.getItem('WACS_RAW_T2');
var WACS_RAW_T3_int = localStorage.getItem('WACS_RAW_T3');
var WACS_RAW_T4_int = localStorage.getItem('WACS_RAW_T4');
