// VMI, visual, motor
var Beery_raws_age = [['-','-','-','-','<2:4','2:5','2:10','3:1','3:5','3:8','4:0','4:3','4:6','4:10','5:2','5:6','5:11','6:3','6:7','7:1','7:6','8:1','8:7','9:7','10:3','11:1','12:3','13:5','16:0','18:5','>18:5'],
['-','-','-','-','-','-','-','<2:1','2:11','3:3','3:5','3:7','3:9','4:0','4:4','4:8','5:1','5:8','6:4','6:8','7:4','7:8','8:4','8:8','9:8','10:8','11:8','12:8','15:0','16:0','>16:0'],
['-','-','-','-','-','-','-','<2:11','2:11','3:3','3:5','3:7','3:9','4:0','4:7','4:11','5:4','5:11','6:4','6:8','7:4','7:8','8:4','8:8','9:4','9:8','10:8','12:5','15:0','16:1','>16:0']];

var Beery_vmi_stand = [[90,90,93,98,101,104,109,113,117,120,124,128,135,141,146,153,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155],
[88,88,91,95,99,102,107,111,114,117,122,126,132,138,143,150,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155],
[86,86,89,93,97,100,105,109,112,115,120,124,129,134,140,148,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155],
[84,84,87,91,95,98,103,107,110,113,118,122,126,131,137,145,154,155,155,155,155,155,155,155,155,155,155,155,155,155,155],
[82,82,85,89,93,96,101,105,108,111,116,120,124,128,135,142,150,152,155,155,155,155,155,155,155,155,155,155,155,155],
[80,80,83,86,91,94,99,103,106,109,114,118,121,126,133,140,147,149,155,155,155,155,155,155,155,155,155,155,155,155],
[78,78,81,84,89,93,97,101,104,108,112,115,119,124,131,137,143,146,152,155,155,155,155,155,155,155,155,155,155,155,155],
[75,75,79,82,87,91,95,99,103,106,110,113,117,123,129,134,140,143,150,155,155,155,155,155,155,155,155,155,155,155,155],
[73,73,76,79,84,89,93,97,101,104,108,111,115,121,127,132,136,140,147,155,155,155,155,155,155,155,155,155,155,155,155],
[70,70,74,77,82,87,91,95,99,102,106,109,113,119,125,129,133,137,144,153,155,155,155,155,155,155,155,155,155,155,155],
[67,67,71,74,80,85,89,93,97,100,104,107,111,117,123,126,130,134,141,149,152,154,155,155,155,155,155,155,155,155,155],
[63,63,68,72,77,82,86,90,95,98,102,105,109,114,120,124,128,132,138,145,148,152,155,155,155,155,155,155,155,155,155],
[60,65,69,74,79,83,88,92,95,100,103,106,112,118,121,125,130,135,142,145,149,155,155,155,155,155,155,155,155,155],
[56,56,62,66,72,77,81,85,90,93,98,101,104,110,115,119,123,128,133,138,141,146,153,155,155,155,155,155,155,155,155],
[52,52,59,64,69,74,78,83,87,90,95,99,102,107,112,116,120,125,130,134,138,144,150,155,155,155,155,155,155,155,155],
[48,48,56,61,66,71,75,80,85,88,93,97,100,105,110,114,118,123,127,131,135,141,147,154,155,155,155,155,155,155,155],
[45,45,53,58,63,68,72,77,82,86,90,95,98,103,108,112,116,121,124,128,132,138,144,151,153,155,155,155,155,155,155],
[45,45,50,56,60,65,69,74,80,83,88,92,96,101,106,109,113,118,122,125,130,136,141,148,150,155,155,155,155,155,155],
[45,45,47,53,56,62,66,72,77,81,85,89,93,98,103,107,111,115,119,123,128,133,138,144,148,155,155,155,155,155,155],
[45,45,45,50,53,59,63,69,74,79,82,87,91,96,101,104,108,113,117,121,125,130,136,141,146,153,155,155,155,155,155],
[45,45,45,48,49,56,61,66,72,76,79,84,89,94,99,102,106,110,114,118,123,128,133,138,144,150,155,155,155,155,155],
[45,45,45,45,46,53,58,63,69,74,77,82,87,92,97,100,104,108,112,116,121,125,130,135,141,147,154,155,155,155,155],
[45,45,45,45,45,50,56,60,66,72,75,80,85,90,95,98,102,106,110,114,119,122,127,132,138,144,150,152,155,155,155],
[45,45,45,45,45,47,53,58,64,70,73,78,83,88,92,96,100,104,108,112,116,120,125,129,135,140,146,148,153,155,155],
[45,45,45,45,45,45,51,55,61,67,71,77,81,86,90,94,98,102,106,110,114,117,122,127,132,137,142,145,150,155,155],
[45,45,45,45,45,45,49,52,59,65,69,75,79,84,88,91,96,100,104,108,111,115,119,124,129,134,138,142,148,155,155],
[45,45,45,45,45,45,47,50,56,63,68,74,78,83,86,90,95,99,102,106,109,113,117,122,126,131,135,139,146,155,155],
[45,45,45,45,45,45,47,54,61,66,72,76,81,84,88,93,97,100,104,107,111,115,120,124,128,132,136,144,152,155],
[45,45,45,45,45,45,45,45,52,59,64,70,75,80,83,87,92,95,99,103,105,109,113,118,122,126,130,134,142,149,154],
[45,45,45,45,45,45,45,45,51,57,63,68,73,78,82,86,90,94,97,101,104,108,112,116,120,124,128,132,139,146,153],
[45,45,45,45,45,45,45,45,49,55,61,66,72,77,81,85,89,93,96,100,103,107,111,115,119,123,126,131,137,143,153],
[45,45,45,45,45,45,45,45,48,53,59,65,71,76,80,84,88,91,95,99,102,106,110,113,117,121,125,129,135,140,152],
[45,45,45,45,45,45,45,45,46,51,58,63,69,74,79,83,87,90,94,98,101,105,109,112,116,120,124,128,133,137,151],
[45,45,45,45,45,45,45,45,45,49,56,61,68,73,78,82,86,89,93,97,100,104,108,111,115,119,123,127,131,135,149],
[45,45,45,45,45,45,45,45,45,47,54,59,66,71,77,81,85,88,92,96,99,103,107,110,114,118,122,126,130,133,147],
[45,45,45,45,45,45,45,45,45,45,52,58,65,70,75,79,83,87,91,95,98,102,105,109,113,117,121,125,128,132,144],
[45,45,45,45,45,45,45,45,45,45,51,56,63,68,73,77,82,85,89,93,97,100,104,108,112,116,120,124,127,131,141],
[45,45,45,45,45,45,45,45,45,45,49,55,61,66,71,76,80,84,88,92,96,99,102,108,111,116,119,123,127,130,138],
[45,45,45,45,45,45,45,45,45,45,47,53,60,64,69,74,79,83,87,91,95,98,101,107,110,115,118,122,126,130,135],
[45,45,45,45,45,45,45,45,45,45,45,52,58,63,68,73,78,82,86,90,94,97,100,106,109,114,117,121,125,129,133],
[45,45,45,45,45,45,45,45,45,45,45,51,56,62,67,72,77,81,85,89,93,96,99,105,108,113,116,120,124,128,132],
[45,45,45,45,45,45,45,45,45,45,45,50,54,61,66,71,76,80,84,88,92,95,98,104,107,112,115,119,124,128,131],
[45,45,45,45,45,45,45,45,45,45,45,48,52,60,65,70,75,79,83,87,92,94,98,103,106,111,114,118,123,127,130],
[45,45,45,45,45,45,45,45,45,45,45,47,50,59,65,70,75,79,83,87,91,94,97,102,106,110,114,118,122,127,129],
[45,45,45,45,45,45,45,45,45,45,45,46,48,58,64,69,74,78,82,86,90,93,97,101,105,109,113,117,122,126,129],
[45,45,45,45,45,45,45,45,45,45,45,45,47,57,63,68,73,77,81,85,89,92,96,100,104,108,112,116,121,125,128],
[45,45,45,45,45,45,45,45,45,45,45,45,46,56,62,67,72,76,80,84,88,91,95,99,103,107,111,115,120,124,127],
[45,45,45,45,45,45,45,45,45,45,45,45,46,55,61,66,71,75,79,83,87,91,95,98,102,106,110,114,119,122,126],
[45,45,45,45,45,45,45,45,45,45,45,45,45,54,60,65,70,75,78,82,86,90,94,97,101,105,1099,114,118,121,124],
[45,45,45,45,45,45,45,45,45,45,45,45,45,53,59,64,68,74,77,81,85,89,93,96,100,105,109,113,116,119,123],
[45,45,45,45,45,45,45,45,45,45,45,45,45,52,58,63,67,73,76,80,84,89,93,96,99,104,108,112,115,118,122],
[45,45,45,45,45,45,45,45,45,45,45,45,45,51,57,62,66,72,75,79,83,88,92,95,98,103,107,111,114,117,121],
[45,45,45,45,45,45,45,45,45,45,45,45,45,50,56,61,65,71,74,78,82,87,91,94,97,102,106,110,113,116,120],
[45,45,45,45,45,45,45,45,45,45,45,45,45,49,54,60,64,70,73,78,81,87,91,94,97,101,106,109,112,116,120],
[45,45,45,45,45,45,45,45,45,45,45,45,45,48,52,59,63,68,72,77,81,86,90,93,96,100,105,108,112,115,119],
[45,45,45,45,45,45,45,45,45,45,45,45,45,47,51,58,63,67,72,76,80,85,89,93,96,100,104,107,111,115,119],
[45,45,45,45,45,45,45,45,45,45,45,45,45,46,49,57,62,66,71,76,80,85,89,93,96,99,104,107,111,114,118],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,48,56,61,65,70,75,79,84,88,92,95,98,103,106,110,114,118],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,47,55,60,64,69,74,78,83,87,91,94,97,102,106,109,113,117],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,46,54,59,63,69,74,78,83,87,91,94,97,102,105,109,113,117],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,46,53,58,63,68,73,77,82,86,90,93,96,101,105,108,112,116],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,53,58,62,67,72,77,81,85,89,92,96,100,105,108,112,116],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,52,57,62,67,72,76,81,85,89,92,95,100,104,107,111,116],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,51,56,61,66,71,76,80,84,88,91,95,99,104,107,111,115],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,50,55,60,65,70,75,79,84,88,91,95,99,104,107,111,114],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,49,55,60,65,70,75,79,83,87,90,94,98,103,106,110,114],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,52,58,63,68,73,77,82,86,89,93,97,101,105,109,112],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,46,54,58,63,71,75,78,83,87,91,95,98,102,106,109],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,53,57,61,67,74,77,81,85,89,93,97,101,105,108],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,52,56,60,66,73,76,80,84,88,92,96,100,104,107],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,49,55,59,65,72,75,79,83,87,91,95,99,103,107],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,46,54,58,64,71,74,78,82,86,90,94,98,101,106],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,50,57,66,72,77,83,87,92,98,103,107],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,50,58,65,72,77,84,87,92,97,103,108,113],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,49,55,63,69,75,80,85,90,95,100,105,110,116],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,51,61,69,74,79,84,89,94,99,104,108,113,119],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,49,56,64,72,77,82,86,91,96,101,106,111,115,120],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,53,61,67,74,79,84,88,94,98,104,108,113,117,121],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,54,64,69,75,80,85,89,95,99,105,109,114,119,124],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,50,58,66,71,76,81,86,91,96,100,106,111,116,121,126],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,53,61,69,74,79,84,89,94,99,101,108,114,119,124,129],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,48,56,64,71,76,81,86,91,96,101,105,111,116,122,127,132],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,53,61,69,74,79,84,89,94,99,105,109,114,119,125,130,135],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,51,559,67,74,78,83,88,93,98,103,108,113,117,121,128,134,138]];

var Beery_visual_stand = [[94,94,98,102,105,109,112,116,121,125,129,135,140,151,155,,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155],
[91,91,96,99,102,106,109,113,118,122,126,132,137,147,153,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155],
[84,84,89,93,97,100,104,108,111,117,120,125,130,139,141,149,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155],
[74,74,79,83,87,91,94,99,102,107,111,115,119,127,129,135,130,136,142,149,155,155,155,155,155,155,155,155,155,155,155],
[63,63,67,72,77,81,84,89,92,97,100,104,108,114,118,123,125,130,135,142,148,154,155,155,155,155,155,155,155,155,155],
[53,53,57,62,67,72,76,81,84,89,92,96,100,105,109,114,119,124,129,134,140,146,150,155,155,155,155,155,155,155,155],
[45,45,46,52,58,65,68,74,78,82,86,90,95,99,103,108,113,117,121,126,131,136,141,138,144,152,155,155,155,155,155],
[45,45,45,45,49,58,61,67,72,77,80,85,90,95,99,103,107,111,115,119,123,128,132,134,141,148,155,155,155,155,155],
[45,45,45,45,45,50,55,62,67,72,76,81,86,91,95,99,103,106,110,114,118,123,126,131,137,144,151,155,155,155,155],
[45,45,45,45,45,45,51,58,63,68,74,78,83,89,93,96,100,103,107,111,115,119,123,128,133,139,146,149,152,155,155],
[45,45,45,45,45,45,47,66,60,65,71,75,80,86,90,94,98,101,105,109,113,117,120,12,130,135,140,145,150,155,155],
[45,45,45,45,45,45,45,52,56,61,68,7,78,84,88,92,96,99,103,107,111,115,118,123,127,131,136,142,148,154,154],
[45,45,45,45,45,45,45,49,52,58,64,69,75,81,85,89,92,97,101,104,108,112,115,120,124,129,134,139,1446,151,155],
[45,45,45,45,45,45,45,46,47,55,60,66,72,78,82,86,89,94,98,101,105,109,113,117,122,126,131,137,144,149,155],
[45,45,45,45,45,45,45,45,45,52,56,62,68,74,78,83,87,92,96,99,103,107,111,115,120,124,129,134,141,145,152],
[45,45,45,45,45,45,45,45,45,50,52,57,64,70,75,80,84,89,93,96,101,104,109,112,116,120,126,131,137,142,148],
[45,45,45,45,45,45,45,45,45,46,47,52,59,67,72,77,81,85,89,93,98,101,106,109,113,117,123,127,132,138,144],
[45,45,45,45,45,45,45,45,45,45,45,48,55,63,69,74,79,83,87,91,96,99,104,107,111,115,120,123,128,134,140],
[45,45,45,45,45,45,45,45,45,45,45,45,49,60,66,71,76,80,84,88,92,96,101,104,108,112,117,121,125,130,136],
[45,45,45,45,45,45,45,45,45,45,45,45,46,57,64,69,74,77,81,85,89,93,98,101,106,109,113,118,122,126,132],
[45,45,45,45,45,45,45,45,45,45,45,45,45,55,62,67,72,75,79,83,87,91,96,99,104,107,111,116,120,124,129],
[45,45,45,45,45,45,45,45,45,45,45,45,45,53,59,64,69,74,78,82,86,90,94,98,102,106,110,114,118,123,127],
[45,45,45,45,45,45,45,45,45,45,45,45,45,49,54,59,64,71,75,79,83,87,91,96,99,104,108111,115,120,124],
[45,45,45,45,45,45,45,45,45,45,45,45,45,47,52,57,62,69,73,78,82,86,90,95,99,103,107,110,114,119,123],
[45,45,45,45,45,45,45,45,45,45,45,45,45,46,51,56,61,66,71,76,81,85,89,93,98,102,106,110,114,118,122],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,49,54,59,64,69,74,79,83,87,91,96,100,104,108,112,116,120],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,48,52,58,62,67,73,77,81,85,89,94,98,103,107,111,114,119],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,46,51,56,61,66,72,76,80,84,88,92,97,101,106,109,113,118],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,49,54,59,64,70,74,78,82,86,90,95,99,104,107,111,116],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,48,52,57,62,68,73,77,81,85,89,94,97,102,106,110,114],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,46,51,56,61,66,72,76,80,84,88,93,96,101,105,109,113],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,49,55,59,64,72,76,79,84,88,92,95,99,104,108,111],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,51,56,62,67,73,76,81,85,89,93,97,101,105,109],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,53,57,63,67,73,76,80,86,89,93,98,101,106],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,54,57,63,68,73,77,82,85,89,94,97,102],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,51,58,72,76,81,86,92,97,101,107],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,54,59,69,79,84,90,95,100,106,110,116],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,47,57,66,73,79,89,95,100,106,111,117,123,129],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,49,58,69,74,80,87,93,98,106,110,117,123,130,135,147],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,56,60,72,77,84,90,97,104,108,115,122,128,134,146,155,155],
[45,45,45,45,45,45,45,45,45,45,45,45,55,64,72,78,85,92,98,104,110,116,123,129,135,146,155,155,155,155,155]];

var Beery_motor_stand = [[94,94,98,102,105,109,113,116,120,124,129,134,139,145,152,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155],
[92,92,95,99,102,106,110,113,117,121,126,131,136,143,149,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155,155],
[85,85,89,94,97,100,105,108,112,116,119,124,129,136,142,146,149,155,155,155,155,155,155,155,155,155,155,155,155,155,155],
[76,76,80,84,88,91,95,98,102,106,110,114,119,125,130,133,134,137,138,142,148,155,155,155,155,155,155,155,155,155,155],
[65,65,69,74,78,81,85,89,93,97,100,104,108,113,118,122,125,128,132,136,143,149,155,155,155,155,155,155,155,155,155],
[55,55,61,66,70,74,78,82,86,90,93,97,101,106,110,114,118,123,127,131,137,143,149,152,155,155,155,155,155,155,155],
[46,46,54,60,64,68,72,76,80,84,88,92,97,101,105,109,113,118,122,126,131,136,141,146,150,155,155,155,155,155,155],
[45,45,48,53,58,63,67,72,76,80,84,89,94,98,102,106,110,113,117,121,125,129,135,140,146,151,155,155,155,155,155],
[45,45,45,47,53,59,63,68,72,76,80,85,90,94,98,102,106,109,113,117,121,125,130,136,142,147,153,155,155,155,155],
[45,45,45,45,49,55,60,65,69,73,77,82,87,92,96,100,104,107,111,115,119,123,128,133,137,143,150,155,155,155,155],
[45,45,45,45,47,52,57,62,67,71,75,80,85,89,93,97,101,105,108,112,116,121,126,130,133,139,146,153,155,155,155],
[45,45,45,45,45,48,53,58,63,67,71,76,81,86,90,94,98,102,105,109,113,118,123,126,129,135,141,147,152,155,155],
[45,45,45,45,45,45,50,53,58,63,67,72,78,83,87,90,94,99,102,105,109,114,118,121,125,130,135,140,144,146,154],
[45,45,45,45,45,45,47,48,53,58,63,68,74,80,84,87,91,95,99,102,106,110,114,117,121,125,129,133,138,142,150],
[45,45,45,45,45,45,45,45,49,54,59,64,70,76,81,84,87,91,96,99,103,107,111,113,118,121,125,129,133,140,146],
[45,45,45,45,45,45,45,45,45,50,55,61,66,72,78,81,85,89,93,97,100,104,108,111,115,119,123,127,131,136,142],
[45,45,45,45,45,45,45,45,45,47,52,58,63,69,75,79,82,86,90,95,98,102,106,109,113,116,121,125,130,134,138],
[45,45,45,45,45,45,45,45,45,45,48,54,59,65,72,77,80,84,88,93,96,100,104,107,111,114,119,123,128,130,134],
[45,45,45,45,45,45,45,45,45,45,45,51,56,62,69,73,77,81,85,90,93,97,101,104,108,112,116,120,125,127,131],
[45,45,45,45,45,45,45,45,45,45,45,47,53,59,65,70,75,78,82,86,90,94,97,101,105,109,113,117,122,124,128],
[45,45,45,45,45,45,45,45,45,45,45,45,49,55,61,66,71,76,80,84,87,91,95,99,103,107,111,115,118,122,126],
[45,45,45,45,45,45,45,45,45,45,45,45,46,51,57,62,67,72,77,81,84,88,92,96,100,104,108,112,115,119,123],
[45,45,45,45,45,45,45,45,45,45,45,45,45,47,54,58,63,69,74,78,81,85,89,93,98,101,105,109,112,116,120],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,50,56,61,67,72,7,79,83,87,91,96,99,103,107,110,114,118],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,47,55,60,65,70,75,78,82,86,90,95,98,102,106,108,113,117],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,54,59,63,69,74,77,81,85,89,94,97,101,105,107,112,115],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,52,57,61,67,73,77,80,84,88,92,96,100,104,107,112,115],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,50,54,60,66,72,76,79,83,87,91,95,99,103,106,111,114],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,49,52,58,65,71,75,78,82,86,90,94,98,102,106,110,114],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,46,51,58,64,69,74,78,82,86,90,94,98,101,105,109,113],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,51,57,62,68,73,77,81,85,89,93,97,100,104,108,112],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,51,56,61,66,71,77,81,85,89,93,97,100,104,108,112],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,46,52,58,63,69,73,77,81,85,89,93,98,102,106,109],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,47,53,58,62,67,72,78,82,86,90,94,98,102,106],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,52,58,64,70,73,77,81,85,89,93,97,102],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,47,56,64,71,76,81,86,92,97,102,107],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,54,59,69,74,80,85,90,95,100,106,109,115],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,56,61,70,75,80,85,90,96,100,106,111,117,122],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,50,58,67,73,77,83,89,93,99,105,109,115,120,125,130],
[45,45,45,45,45,45,45,45,45,45,45,45,45,45,53,58,69,74,79,84,90,94,100,105,109,115,119,126,130,136,145],
[45,45,45,45,45,45,45,45,45,45,45,55,60,70,74,80,84,91,95,100,106,112,116,122,127,132,140,155,155,155,155]];

// standard , scaled, percentile
var Beery_stand_other = [[45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155],['1-','1-','1-','1-','1-','1-','1-','1-',1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,8,8,8,8,8,9,9,9,9,9,10,10,10,10,10,11,11,11,11,11,12,12,12,12,12,13,13,13,13,13,14,14,14,14,14,15,15,15,15,15,16,16,16,16,16,17,17,17,17,17,18,18,18,18,18,19,19,19,19,19,19,19,20,20,20,20,20,'20+'],[0.02,0.03,0.01,0.02,0.06,0.07,0.08,0.09,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1,1,1,1,1,1,2,2,2,3,3,,4,5,5,6,7,8,9,10,12,13,14,16,18,19,21,23,25,27,30,32,34,37,39,42,45,47,50,53,55,58,61,63,65,68,70,73,75,77,79,81,82,84,86,87,88,90,91,92,93,94,95,95,96,96,97,97,98,98,98,99,99,99,99,99,99,99.1,99.2,99.3,99.4,99.5,99.6,99.7,99.8,99.9,99.91,99.92,99.93,99.94,99.95,99.96,99.97,99.98]];

var VMIRAW_int = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

// 입력자료 숫자로 변환
if (Raw_vmi_int === "") {
  var Raw_vmi = "";
} else {
var Raw_vmi = VMIRAW_int[Raw_vmi_int];
}

if (Raw_visual_int === "") {
  var Raw_visual = "";
} else {
var Raw_visual = VMIRAW_int[Raw_visual_int];
}

if (Raw_motor_int === "") {
  var Raw_motor = "";
} else {
var Raw_motor = VMIRAW_int[Raw_motor_int];
}


// 분석기준나이설정(VMI)

if (ChAge < 2) {
  var VMI_ACAge = 0;
  var VMI_ACAge_S = "2세 0개월";
  var VMI_ACAge_T = "2세 11개월";
} else if (ChAge >= 2 && ChAge <3 ) {
  var VMI_ACAge_S = "2세 0개월";
  var VMI_ACAge_T = "2세 11개월";
  if (ChAge_m <2) {
    var VMI_ACAge = 0;
  } else if (ChAge_m >=2 && ChAge_m <4 ) {
    var VMI_ACAge = 1;
  } else if (ChAge_m >=4 && ChAge_m <6 ) {
    var VMI_ACAge = 2;
  } else if (ChAge_m >=6 && ChAge_m <8 ) {
    var VMI_ACAge = 3;
  } else if (ChAge_m >=8 && ChAge_m <10 ) {
    var VMI_ACAge = 4;
  } else {
    var VMI_ACAge = 5
  }
} else if (ChAge >= 3 && ChAge <4 ) {
  var VMI_ACAge_S = "3세 0개월";
  var VMI_ACAge_T = "3세 11개월";
  if (ChAge_m <2) {
    var VMI_ACAge = 6;
  } else if (ChAge_m >=2 && ChAge_m <4 ) {
    var VMI_ACAge = 7;
  } else if (ChAge_m >=4 && ChAge_m <6 ) {
    var VMI_ACAge = 8;
  } else if (ChAge_m >=6 && ChAge_m <8 ) {
    var VMI_ACAge = 9;
  } else if (ChAge_m >=8 && ChAge_m <10 ) {
    var VMI_ACAge = 10;
  } else {
    var VMI_ACAge = 11;
  }
} else if (ChAge >= 4 && ChAge <5 ) {
  var VMI_ACAge_S = "4세 0개월";
  var VMI_ACAge_T = "4세 11개월";
  if (ChAge_m <2) {
    var VMI_ACAge = 12;
  } else if (ChAge_m >=2 && ChAge_m <4 ) {
    var VMI_ACAge = 13;
  } else if (ChAge_m >=4 && ChAge_m <6 ) {
    var VMI_ACAge = 14;
  } else if (ChAge_m >=6 && ChAge_m <8 ) {
    var VMI_ACAge = 15;
  } else if (ChAge_m >=8 && ChAge_m <10 ) {
    var VMI_ACAge = 16;
  } else {
    var VMI_ACAge = 17;
  }
} else if (ChAge >= 5 && ChAge <6 ) {
  var VMI_ACAge_S = "5세 0개월";
  var VMI_ACAge_T = "5세 11개월";
  if (ChAge_m <2) {
    var VMI_ACAge = 18;
  } else if (ChAge_m >=2 && ChAge_m <4 ) {
    var VMI_ACAge = 19;
  } else if (ChAge_m >=4 && ChAge_m <6 ) {
    var VMI_ACAge = 20;
  } else if (ChAge_m >=6 && ChAge_m <8 ) {
    var VMI_ACAge = 21;
  } else if (ChAge_m >=8 && ChAge_m <10 ) {
    var VMI_ACAge = 22;
  } else {
    var VMI_ACAge = 23;
  }
} else if (ChAge >= 6 && ChAge <7 ) {
  var VMI_ACAge_S = "6세 0개월";
  var VMI_ACAge_T = "6세 11개월";
  if (ChAge_m <2) {
    var VMI_ACAge = 24;
  } else if (ChAge_m >=2 && ChAge_m <4 ) {
    var VMI_ACAge = 25;
  } else if (ChAge_m >=4 && ChAge_m <6 ) {
    var VMI_ACAge = 26;
  } else if (ChAge_m >=6 && ChAge_m <8 ) {
    var VMI_ACAge = 27;
  } else if (ChAge_m >=8 && ChAge_m <10 ) {
    var VMI_ACAge = 28;
  } else {
    var VMI_ACAge = 29;
  }
} else if (ChAge >= 7 && ChAge <8 ) {
  var VMI_ACAge_S = "7세 0개월";
  var VMI_ACAge_T = "7세 11개월";
  if (ChAge_m <2) {
    var VMI_ACAge = 30;
  } else if (ChAge_m >=2 && ChAge_m <4 ) {
    var VMI_ACAge = 31;
  } else if (ChAge_m >=4 && ChAge_m <6 ) {
    var VMI_ACAge = 32;
  } else if (ChAge_m >=6 && ChAge_m <8 ) {
    var VMI_ACAge = 33;
  } else if (ChAge_m >=8 && ChAge_m <10 ) {
    var VMI_ACAge = 34;
  } else {
    var VMI_ACAge = 35;
  }
} else if (ChAge >= 8 && ChAge <9 ) {
  var VMI_ACAge_S = "8세 0개월";
  var VMI_ACAge_T = "8세 11개월";
  if (ChAge_m <2) {
    var VMI_ACAge = 36;
  } else if (ChAge_m >=2 && ChAge_m <4 ) {
    var VMI_ACAge = 37;
  } else if (ChAge_m >=4 && ChAge_m <6 ) {
    var VMI_ACAge = 38;
  } else if (ChAge_m >=6 && ChAge_m <8 ) {
    var VMI_ACAge = 39;
  } else if (ChAge_m >=8 && ChAge_m <10 ) {
    var VMI_ACAge = 40;
  } else {
    var VMI_ACAge = 41;
  }
} else if (ChAge >= 9 && ChAge <10 ) {
  var VMI_ACAge_S = "9세 0개월";
  var VMI_ACAge_T = "9세 11개월";
  if (ChAge_m <2) {
    var VMI_ACAge = 42;
  } else if (ChAge_m >=2 && ChAge_m <4 ) {
    var VMI_ACAge = 43;
  } else if (ChAge_m >=4 && ChAge_m <6 ) {
    var VMI_ACAge = 44;
  } else if (ChAge_m >=6 && ChAge_m <8 ) {
    var VMI_ACAge = 45;
  } else if (ChAge_m >=8 && ChAge_m <10 ) {
    var VMI_ACAge = 46;
  } else {
    var VMI_ACAge = 47;
  }
} else if (ChAge >= 10 && ChAge <11 ) {
  var VMI_ACAge_S = "10세 0개월";
  var VMI_ACAge_T = "10세 11개월";
  if (ChAge_m <2) {
    var VMI_ACAge = 48;
  } else if (ChAge_m >=2 && ChAge_m <4 ) {
    var VMI_ACAge = 49;
  } else if (ChAge_m >=4 && ChAge_m <6 ) {
    var VMI_ACAge = 50;
  } else if (ChAge_m >=6 && ChAge_m <8 ) {
    var VMI_ACAge = 51;
  } else if (ChAge_m >=8 && ChAge_m <10 ) {
    var VMI_ACAge = 52;
  } else {
    var VMI_ACAge = 53;
  }
} else if (ChAge >= 11 && ChAge <12 ) {
  var VMI_ACAge_S = "11세 0개월";
  var VMI_ACAge_T = "11세 11개월";
  if (ChAge_m <2) {
    var VMI_ACAge = 54;
  } else if (ChAge_m >=2 && ChAge_m <4 ) {
    var VMI_ACAge = 55;
  } else if (ChAge_m >=4 && ChAge_m <6 ) {
    var VMI_ACAge = 56;
  } else if (ChAge_m >=6 && ChAge_m <8 ) {
    var VMI_ACAge = 57;
  } else if (ChAge_m >=8 && ChAge_m <10 ) {
    var VMI_ACAge = 58;
  } else {
    var VMI_ACAge = 59;
  }
} else if (ChAge >= 12 && ChAge <13 ) {
  var VMI_ACAge_S = "12세 0개월";
  var VMI_ACAge_T = "12세 11개월";
  if (ChAge_m <2) {
    var VMI_ACAge = 60;
  } else if (ChAge_m >=2 && ChAge_m <4 ) {
    var VMI_ACAge = 61;
  } else if (ChAge_m >=4 && ChAge_m <6 ) {
    var VMI_ACAge = 62;
  } else if (ChAge_m >=6 && ChAge_m <8 ) {
    var VMI_ACAge = 63;
  } else if (ChAge_m >=8 && ChAge_m <10 ) {
    var VMI_ACAge = 64;
  } else {
    var VMI_ACAge = 65;
  }
} else if (ChAge >= 13 && ChAge <19 ) {
  var VMI_ACAge_S = "13세 0개월";
  var VMI_ACAge_T = "18세 11개월";
    var VMI_ACAge = 66;
} else if (ChAge >= 19 && ChAge <40 ) {
  var VMI_ACAge_S = "19세 0개월";
  var VMI_ACAge_T = "39세 11개월";
    var VMI_ACAge = 67;
} else if (ChAge >= 40 && ChAge <50 ) {
  var VMI_ACAge_S = "40세 0개월";
  var VMI_ACAge_T = "49세 11개월";
    var VMI_ACAge = 68;
} else if (ChAge >= 50 && ChAge <55 ) {
  var VMI_ACAge_S = "50세 0개월";
  var VMI_ACAge_T = "54세 11개월";
    var VMI_ACAge = 69;
} else if (ChAge >= 55 && ChAge <60 ) {
  var VMI_ACAge_S = "55세 0개월";
  var VMI_ACAge_T = "59세 11개월";
    var VMI_ACAge = 70;
} else if (ChAge >= 60 && ChAge <65 ) {
  var VMI_ACAge_S = "60세 0개월";
  var VMI_ACAge_T = "64세 11개월";
    var VMI_ACAge = 71;
} else if (ChAge >= 65 && ChAge <70 ) {
  var VMI_ACAge_S = "65세 0개월";
  var VMI_ACAge_T = "69세 11개월";
    var VMI_ACAge = 72;
} else if (ChAge >= 70 && ChAge <75 ) {
  var VMI_ACAge_S = "70세 0개월";
  var VMI_ACAge_T = "74세 11개월";
    var VMI_ACAge = 73;
} else if (ChAge >= 75 && ChAge <80 ) {
  var VMI_ACAge_S = "75세 0개월";
  var VMI_ACAge_T = "79세 11개월";
    var VMI_ACAge = 74;
} else if (ChAge >= 80 && ChAge <85 ) {
  var VMI_ACAge_S = "80세 0개월";
  var VMI_ACAge_T = "84세 11개월";
    var VMI_ACAge = 75;
} else if (ChAge >= 85 && ChAge <90 ) {
  var VMI_ACAge_S = "85세 0개월";
  var VMI_ACAge_T = "89세 11개월";
    var VMI_ACAge = 76;
} else if (ChAge >= 90 && ChAge <95 ) {
  var VMI_ACAge_S = "90세 0개월";
  var VMI_ACAge_T = "94세 11개월";
    var VMI_ACAge = 77;
} else if (ChAge >= 95 && ChAge <100 ) {
  var VMI_ACAge_S = "95세 0개월";
  var VMI_ACAge_T = "99세 11개월";
    var VMI_ACAge = 78;
}





// 분석기준나이설정(visual, motor)
if (ChAge < 2) {
  var VIMO_ACAge = 0;
} else if (ChAge >= 2 && ChAge <3 ) {
  if (ChAge_m <4) {
    var VIMO_ACAge = 0;
  } else if (ChAge_m >=4 && ChAge_m <8 ) {
    var VIMO_ACAge = 1;
  } else {
    var VIMO_ACAge = 2;
  }
} else if (ChAge >= 3 && ChAge <4 ) {
  if (ChAge_m <4) {
    var VIMO_ACAge = 3;
  } else if (ChAge_m >=4 && ChAge_m <8 ) {
    var VIMO_ACAge = 4;
  } else {
    var VIMO_ACAge = 5;
  }
} else if (ChAge >= 4 && ChAge <5 ) {
  if (ChAge_m <4) {
    var VIMO_ACAge = 6;
  } else if (ChAge_m >=4 && ChAge_m <8 ) {
    var VIMO_ACAge = 7;
  } else {
    var VIMO_ACAge = 8;
  }
} else if (ChAge >= 5 && ChAge <6 ) {
  if (ChAge_m <4) {
    var VIMO_ACAge = 9;
  } else if (ChAge_m >=4 && ChAge_m <8 ) {
    var VIMO_ACAge = 10;
  } else {
    var VIMO_ACAge = 11;
  }
} else if (ChAge >= 6 && ChAge <7 ) {
  if (ChAge_m <4) {
    var VIMO_ACAge = 12;
  } else if (ChAge_m >=4 && ChAge_m <8 ) {
    var VIMO_ACAge = 13;
  } else {
    var VIMO_ACAge = 14;
  }
} else if (ChAge >= 7 && ChAge <8 ) {
  if (ChAge_m <4) {
    var VIMO_ACAge = 15;
  } else if (ChAge_m >=4 && ChAge_m <8 ) {
    var VIMO_ACAge = 16;
  } else {
    var VIMO_ACAge = 17;
  }
} else if (ChAge >= 8 && ChAge <9 ) {
  if (ChAge_m <4) {
    var VIMO_ACAge = 18;
  } else if (ChAge_m >=4 && ChAge_m <8 ) {
    var VIMO_ACAge = 19;
  } else {
    var VIMO_ACAge = 20;
  }
} else if (ChAge >= 9 && ChAge <10 ) {
  if (ChAge_m <4) {
    var VIMO_ACAge = 21;
  } else if (ChAge_m >=4 && ChAge_m <8 ) {
    var VIMO_ACAge = 22;
  } else {
    var VIMO_ACAge = 23;
  }
} else if (ChAge >= 10 && ChAge <11 ) {
  if (ChAge_m <4) {
    var VIMO_ACAge = 24;
  } else if (ChAge_m >=4 && ChAge_m <8 ) {
    var VIMO_ACAge = 25;
  } else {
    var VIMO_ACAge = 26;
  }
} else if (ChAge >= 11 && ChAge <12 ) {
  if (ChAge_m <4) {
    var VIMO_ACAge = 26;
  } else if (ChAge_m >=4 && ChAge_m <8 ) {
    var VIMO_ACAge = 28;
  } else {
    var VIMO_ACAge = 29;
  }
} else if (ChAge >= 12 && ChAge <13 ) {
  if (ChAge_m <4) {
    var VIMO_ACAge = 30;
  } else if (ChAge_m >=4 && ChAge_m <8 ) {
    var VIMO_ACAge = 31;
  } else {
    var VIMO_ACAge = 32;
  }
} else if (ChAge >= 13 && ChAge <19 ) {
    var VIMO_ACAge = 33;
} else if (ChAge >= 19 && ChAge <40 ) {
    var VIMO_ACAge = 34;
} else if (ChAge >= 40 && ChAge <50 ) {
    var VIMO_ACAge = 35;
} else if (ChAge >= 50 && ChAge <55 ) {
    var VIMO_ACAge = 36;
} else if (ChAge >= 55 && ChAge <60 ) {
    var VIMO_ACAge = 37;
} else if (ChAge >= 60 && ChAge <65 ) {
    var VIMO_ACAge = 38;
} else if (ChAge >= 65 && ChAge <70 ) {
    var VIMO_ACAge = 39;
} else if (ChAge >= 70 && ChAge <75 ) {
    var VIMO_ACAge = 40;
} else if (ChAge >= 75 && ChAge <80 ) {
    var VIMO_ACAge = 41;
} else if (ChAge >= 80 && ChAge <85 ) {
    var VIMO_ACAge = 42;
} else if (ChAge >= 85 && ChAge <90 ) {
    var VIMO_ACAge = 43;
} else if (ChAge >= 90 && ChAge <95 ) {
    var VIMO_ACAge = 44;
} else if (ChAge >= 95 && ChAge <100 ) {
    var VIMO_ACAge = 45;
}



if (Raw_vmi === "") {
  var Raw_vmi = "평가하지 않음";
  var VMI_STAND = "";
  var VMI_PERCENTILE = "";
  var VMI_SCALED = "";
  var VMI_Age = "";
} else {
  // VMI 표준점수
  var VMI_STAND = Beery_vmi_stand[VMI_ACAge][Raw_vmi];

  // VMI 척도점수, 백분율
  var VMIstand_ch = VMI_STAND-45;
  var VMI_SCALED = Beery_stand_other[1][VMIstand_ch];
  var VMI_PERCENTILE = Beery_stand_other[2][VMIstand_ch];

  // VMI 등가나이환산
  var VMI_Age = Beery_raws_age[0][Raw_vmi];
}



if (Raw_visual === "") {
  var Raw_visual = "평가하지 않음";
  var VISUAL_STAND = "";
  var VISUAL_PERCENTILE = "";
  var VISUAL_SCALED = "";
  var VISUAL_Age = "";
} else {
  // VISUAL 표준점수
  var VISUAL_STAND = Beery_visual_stand[VIMO_ACAge][Raw_visual];

  // VISUAL 척도점수, 백분율
  var VISUALstand_ch = VISUAL_STAND-45;
  var VISUAL_SCALED = Beery_stand_other[1][VISUALstand_ch];
  var VISUAL_PERCENTILE = Beery_stand_other[2][VISUALstand_ch];

  // VISUAL 등가나이환산
  var VISUAL_Age = Beery_raws_age[1][Raw_visual];
}

if (Raw_motor === "") {
  var Raw_motor = "평가하지 않음";
  var MOTOR_STAND = "";
  var MOTOR_PERCENTILE = "";
  var MOTOR_SCALED = "";
  var MOTOR_Age = "";
} else {
  // MOTOR 표준점수
  var MOTOR_STAND = Beery_motor_stand[VIMO_ACAge][Raw_motor];

  // MOTOR 척도점수, 백분율
  var MOTORstand_ch = VISUAL_STAND-45;
  var MOTOR_SCALED = Beery_stand_other[1][MOTORstand_ch];
  var MOTOR_PERCENTILE = Beery_stand_other[2][MOTORstand_ch];

  // MOTOR 등가나이환산
  var MOTOR_Age = Beery_raws_age[2][Raw_motor];
}
