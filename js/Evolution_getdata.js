var Change_int = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,290,300];

// <!-- ======= 양안시평가 ====== -->
var MainEye = localStorage.getItem('MainEye');
var PD = parseInt(localStorage.getItem('PD'));
var sel_glass1 = localStorage.getItem('sel_glass1');
var RDVision = localStorage.getItem('RDVision');
var LDVision = localStorage.getItem('LDVision');
var OUDVision = localStorage.getItem('OUDVision');
var RNVision = localStorage.getItem('RNVision');
var LNVision = localStorage.getItem('LNVision');
var OUNVision = localStorage.getItem('OUNVision');
var TxtRSph = localStorage.getItem('TxtRSph');
var TxtRCyl = localStorage.getItem('TxtRCyl');
var TxtRAxis = localStorage.getItem('TxtRAxis');
var TxtRAdd = localStorage.getItem('TxtRAdd');
var TxtLSph = localStorage.getItem('TxtLSph');
var TxtLCyl = localStorage.getItem('TxtLCyl');
var TxtLAxis = localStorage.getItem('TxtLAxis');
var TxtLAdd = localStorage.getItem('TxtLAdd');
var RDVision_new = localStorage.getItem('RDVision_new');
var LDVision_new = localStorage.getItem('LDVision_new');
var OUDVision_new = localStorage.getItem('OUDVision_new');
var RNVision_new = localStorage.getItem('RNVision_new');
var LNVision_new = localStorage.getItem('LNVision_new');
var OUNVision_new = localStorage.getItem('OUNVision_new');
var Balance = localStorage.getItem('Balance');
var D_W4D = localStorage.getItem('D_W4D');
var N_W4D = localStorage.getItem('N_W4D');
var CTest_D = localStorage.getItem('CTest_D');
var CTest_N = localStorage.getItem('CTest_N');
var ChAge = localStorage.getItem('ChAge');
var ChAge_m = localStorage.getItem('ChAge_m');
var R_accom = localStorage.getItem('R_accom');
var L_accom = localStorage.getItem('L_accom');
var O_accom = localStorage.getItem('O_accom');
var RAccom_Rev = localStorage.getItem('RAccom_Rev');
var LAccom_Rev = localStorage.getItem('LAccom_Rev');
var OUAccom_Rev = localStorage.getItem('OUAccom_Rev');
var Sel_AccomRev = localStorage.getItem('Sel_AccomRev');
var NVer = localStorage.getItem('NVer');
var bro_eye_movement = localStorage.getItem('bro_eye_movement');
var bro_head_turn = localStorage.getItem('bro_head_turn');
var sacca_eye_movement = localStorage.getItem('sacca_eye_movement');
var sacca_head_turn = localStorage.getItem('sacca_head_turn');
var DStereo = localStorage.getItem('DStereo');
var NStereo = localStorage.getItem('NStereo');
var Pupilreflex = localStorage.getItem('Pupilreflex');
var horEVA_tool = localStorage.getItem('horEVA_tool');
var Dectopic = localStorage.getItem('Dectopic');
var D_BIBO = localStorage.getItem('D_BIBO');
var Nectopic = localStorage.getItem('Nectopic');
var N_BIBO = localStorage.getItem('N_BIBO');
var DVer_tool = localStorage.getItem('DVer_tool');
var DConver1 = localStorage.getItem('DConver1');
var DConver2 = localStorage.getItem('DConver2');
var DConver3 = localStorage.getItem('DConver3');
var DDever2 = localStorage.getItem('DDever2');
var DDever3 = localStorage.getItem('DDever3');
var NVer_tool = localStorage.getItem('NVer_tool');
var NConver1 = localStorage.getItem('NConver1');
var NConver2 = localStorage.getItem('NConver2');
var NConver3 = localStorage.getItem('NConver3');
var NDever1 = localStorage.getItem('NDever1');
var NDever2 = localStorage.getItem('NDever2');
var NDever3 = localStorage.getItem('NDever3');
var verEVA_tool = localStorage.getItem('verEVA_tool');
var DVertical = localStorage.getItem('DVertical');
var D_BUBD = localStorage.getItem('D_BUBD');
var NVertical = localStorage.getItem('NVertical');
var N_BUBD = localStorage.getItem('N_BUBD');
var DVertical_tool = localStorage.getItem('DVertical_tool');
var DVertical_BD1 = localStorage.getItem('DVertical_BD1');
var DVertical_BD2 = localStorage.getItem('DVertical_BD2');
var DVertical_BU1 = localStorage.getItem('DVertical_BU1');
var DVertical_BU2 = localStorage.getItem('DVertical_BU2');
var DVertical_BD3 = localStorage.getItem('DVertical_BD3');
var DVertical_BD4 = localStorage.getItem('DVertical_BD4');
var DVertical_BU3 = localStorage.getItem('DVertical_BU3');
var DVertical_BU4 = localStorage.getItem('DVertical_BU4');
var NVertical_tool = localStorage.getItem('NVertical_tool');
var NVertical_BD1 = localStorage.getItem('NVertical_BD1');
var NVertical_BD2 = localStorage.getItem('NVertical_BD2');
var NVertical_BU1 = localStorage.getItem('NVertical_BU1');
var NVertical_BU2 = localStorage.getItem('NVertical_BU2');
var NVertical_BD3 = localStorage.getItem('NVertical_BD3');
var NVertical_BD4 = localStorage.getItem('NVertical_BD4');
var NVertical_BU3 = localStorage.getItem('NVertical_BU3');
var NVertical_BU4 = localStorage.getItem('NVertical_BU4');
var VerRev = localStorage.getItem('VerRev');
var D_agree = localStorage.getItem('D_agree');
var DHor_maddox = localStorage.getItem('DHor_maddox');
var DHor_BIBO = localStorage.getItem('DHor_BIBO');
var DVer_maddox = localStorage.getItem('DVer_maddox');
var DVer_BIBO = localStorage.getItem('DVer_BIBO');
var N_agree = localStorage.getItem('N_agree');
var NHor_maddox = localStorage.getItem('NHor_maddox');
var NHor_BIBO = localStorage.getItem('NHor_BIBO');
var NVer_maddox = localStorage.getItem('NVer_maddox');
var NVer_BIBO = localStorage.getItem('NVer_BIBO');
var MIT = localStorage.getItem('MIT');
