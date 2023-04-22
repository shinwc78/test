var TVPSRAW_int = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]

var B1_DIS_scaled = [[3,4,5,7,8,9,10,11,13,14,15,16,17,18,18,19,19,19,19],[3,4,5,6,7,8,10,11,12,13,14,15,16,17,18,19,19,19,19],[2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,19,19],[1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,19],[1,2,3,4,5,7,8,9,10,11,12,13,13,14,15,16,17,18,19],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,18],[1,1,2,4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,18],[1,1,2,3,4,5,6,7,8,9,10,11,12,13,14,14,15,16,17],[1,1,2,3,4,5,6,7,8,9,9,10,11,12,13,14,15,16,17],[1,1,1,2,3,4,5,6,7,8,9,10,11,12,13,14,14,15,16],[1,1,1,2,3,4,5,6,7,8,9,10,10,11,12,13,14,15,16],[1,1,1,2,3,4,5,6,7,8,8,9,10,11,12,13,14,15,16],[1,1,1,2,3,4,5,5,6,7,8,9,10,11,12,12,13,14,15],[1,1,1,1,2,3,4,5,6,7,8,9,9,10,11,12,13,14,15],[1,1,1,1,2,3,4,5,6,6,7,8,9,10,11,12,13,14,15],[1,1,1,1,2,3,3,4,5,6,7,8,8,9,10,11,12,13,14],[1,1,1,1,2,2,3,4,5,6,6,7,8,9,10,11,12,13,14],[1,1,1,1,1,2,3,4,5,5,6,7,8,9,10,11,12,13,14],[1,1,1,1,1,2,3,4,4,5,6,7,8,8,9,10,11,13,14],[1,1,1,1,1,2,3,4,4,5,6,7,7,8,9,10,11,12,14],[1,1,1,1,1,2,3,3,4,5,6,7,7,8,9,10,11,12,14],[1,1,1,1,1,2,3,3,4,5,6,6,7,8,9,10,11,12,13],[1,1,1,1,1,2,3,3,4,5,5,6,7,8,9,10,11,12,13],[1,1,1,1,1,1,2,3,4,5,5,6,7,8,9,10,11,12,13]];

var B1_MEM_scaled = [[1,3,4,6,7,8,9,10,11,12,13,14,15,17,18,19,19,19,19],[1,3,4,6,7,8,9,10,11,12,13,14,15,17,8,19,19,19,19],[1,2,4,5,6,8,8,9,10,11,12,13,14,16,17,18,19,19,19],[1,2,3,4,6,7,8,9,10,11,11,12,14,15,16,17,18,19,19],[1,1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[1,1,2,4,5,6,7,8,9,9,10,11,12,13,14,15,16,17,19],[1,1,2,3,4,5,6,7,8,9,10,11,11,12,13,14,15,16,18],[1,1,2,3,4,5,6,7,8,8,9,10,11,12,13,14,15,16,17],[1,1,1,2,3,4,5,6,7,8,9,10,10,11,12,13,14,15,16],[1,1,1,2,3,4,5,6,7,8,8,9,10,11,12,13,14,15,16],[1,1,1,2,3,4,5,6,6,7,8,9,10,10,11,12,13,14,15],[1,1,1,1,2,3,4,5,6,7,8,8,9,10,11,12,13,14,15],[1,1,1,1,2,3,4,5,6,7,7,8,9,10,11,12,13,14,15],[1,1,1,1,2,3,4,5,5,6,7,8,9,9,10,11,12,13,15],[1,1,1,1,2,3,3,4,5,6,7,7,8,9,10,11,12,13,14],[1,1,1,1,1,2,3,4,5,5,6,7,8,9,10,11,12,13,14],[1,1,1,1,1,2,2,3,4,5,5,6,7,8,9,10,12,13,14],[1,1,1,1,1,1,2,3,3,4,5,6,7,8,9,10,11,13,14],[1,1,1,1,1,1,2,2,3,4,5,5,6,7,8,10,11,13,14],[1,1,1,1,1,1,1,2,3,4,4,5,6,7,8,10,11,13,14],[1,1,1,1,1,1,1,2,3,3,4,5,6,7,8,9,11,13,14],[1,1,1,1,1,1,1,2,3,3,4,5,6,7,8,9,11,12,14],[1,1,1,1,1,1,1,2,2,3,4,5,6,7,8,9,11,12,14],[1,1,1,1,1,1,1,2,2,3,4,5,6,7,8,9,11,12,13],[1,1,1,1,1,1,1,2,2,3,4,5,6,7,8,9,11,12,13]];

var B1_SPA_scaled = [[4,5,6,7,8,9,10,11,12,13,13,14,15,15,16,17,18,18,19],[3,4,5,6,7,8,9,10,11,12,12,13,14,14,15,16,17,18,18],[3,4,5,6,7,7,8,9,10,11,11,12,13,14,14,15,16,17,18],[3,3,4,5,6,7,7,8,9,10,10,11,12,13,14,14,15,16,17],[2,3,4,5,5,6,7,8,8,9,10,10,11,12,13,14,15,15,16],[2,3,4,4,5,6,6,7,8,8,9,10,10,11,12,13,14,15,16],[2,3,3,4,5,5,6,7,7,8,8,9,10,11,11,12,13,14,15],[2,3,3,4,4,5,6,6,7,7,8,9,9,10,11,12,13,14,15],[2,3,3,4,4,5,5,6,6,7,8,8,9,9,10,11,12,13,14],[2,2,3,3,4,4,5,5,6,7,7,8,8,9,10,11,12,13,14],[2,2,3,3,4,4,5,5,6,6,7,7,8,9,9,10,11,12,13],[2,2,3,3,4,4,5,5,5,6,6,7,8,8,9,10,11,12,13],[1,2,2,3,3,4,4,5,5,6,6,7,7,8,9,10,11,12,13],[1,1,2,2,3,3,4,4,5,5,6,6,7,8,9,9,10,12,13],[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,9,10,11,13],[1,1,1,2,2,3,3,4,4,5,5,6,6,7,8,9,10,11,13],[1,1,1,1,2,2,3,3,4,4,5,5,6,7,8,9,10,11,13],[1,1,1,1,2,2,3,3,4,4,5,5,6,6,7,8,10,11,12],[1,1,1,1,1,2,2,3,3,4,4,5,6,6,7,8,9,11,12],[1,1,1,1,1,2,2,3,3,4,4,5,5,6,7,8,9,10,12],[1,1,1,1,1,1,2,2,3,3,4,5,5,6,7,7,9,10,12],[1,1,1,1,1,1,2,2,3,3,4,4,5,5,6,7,8,10,11],[1,1,1,1,1,1,1,1,2,2,3,3,4,5,5,6,7,8,10],[1,1,1,1,1,1,1,1,1,2,2,3,4,4,5,6,7,8,10]];

var B1_CON_scaled = [[2,3,5,7,8,10,11,12,13,15,16,17,19,19,19,19,19,19,19],[1,3,5,6,8,9,10,12,13,14,15,16,18,19,19,19,19,19,19],[1,3,4,6,7,9,10,11,12,13,14,15,16,18,19,19,19,19,19],[1,2,4,6,7,8,9,10,11,12,13,14,15,16,17,19,19,19,19],[1,2,4,5,6,8,9,10,11,12,13,14,14,15,16,18,19,19,19],[1,2,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,19],[1,2,3,4,6,7,8,9,10,11,12,12,13,14,15,16,17,18,19],[1,1,3,4,5,6,8,8,9,10,11,12,13,13,14,15,16,17,18],[1,1,3,4,5,6,7,8,9,10,11,11,12,13,14,15,16,16,17],[1,1,2,4,5,6,7,8,8,9,10,11,12,12,13,14,15,16,17],[1,1,2,3,4,5,6,7,8,9,10,11,11,12,13,14,15,15,16],[1,1,2,3,4,5,6,7,8,9,9,10,11,12,13,13,14,15,16],[1,1,2,3,4,5,6,7,8,8,9,10,11,11,12,13,14,15,16],[1,1,1,2,3,4,5,6,7,8,9,10,10,11,12,13,14,15],[1,1,1,2,3,4,5,6,7,7,8,9,10,10,11,12,13,14,15],[1,1,1,1,2,3,4,5,6,7,8,8,9,10,11,11,12,13,14],[1,1,1,1,2,3,4,5,5,6,7,8,9,9,10,11,12,13,14],[1,1,1,1,2,3,3,4,5,6,7,8,8,9,10,11,12,13,13],[1,1,1,1,2,2,3,4,5,6,6,7,8,9,10,10,11,12,13],[1,1,1,1,1,2,3,4,5,5,6,7,8,9,9,10,11,12,13],[1,1,1,1,1,2,3,4,4,5,6,7,8,8,9,10,11,12,13],[1,1,1,1,1,2,3,4,4,5,6,7,7,8,9,10,11,12,13],[1,1,1,1,1,2,2,3,4,5,5,6,7,8,8,9,10,12,13],[1,1,1,1,1,1,2,3,4,4,5,6,7,7,8,9,10,11,12]];

var B1_SEQ_scaled = [[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,19,19,19],[4,5,6,7,8,9,9,10,11,12,13,14,15,16,17,18,19,19,19],[3,4,5,6,7,8,9,10,10,11,12,13,14,15,16,18,19,19,19],[3,4,5,5,6,7,8,9,10,11,11,12,13,15,16,17,18,19,19],[2,3,4,5,6,7,7,8,9,10,11,12,13,14,15,16,18,19,19],[2,3,4,4,5,6,7,8,8,9,10,11,12,13,14,16,17,18,19],[2,2,3,4,5,6,6,7,8,9,10,11,12,13,14,15,16,18,19],[1,2,3,4,4,5,6,7,8,8,9,10,11,12,13,15,16,17,19],[1,2,2,3,4,5,6,6,7,8,9,10,10,12,13,14,15,17,18],[1,1,2,3,4,4,5,6,7,8,8,9,10,11,12,13,15,16,18],[1,1,2,2,3,4,5,6,6,7,8,9,10,11,12,13,14,16,18],[1,1,1,2,3,4,4,5,6,7,8,8,9,10,11,13,14,16,17],[1,1,1,2,3,3,4,5,6,7,7,8,9,10,11,12,14,15,17],[1,1,1,1,2,3,4,5,5,6,7,8,9,10,11,12,14,15,17],[1,1,1,1,1,2,3,4,5,6,7,8,9,10,11,12,13,15,17],[1,1,1,1,1,2,3,4,5,5,6,7,8,9,10,12,13,15,16],[1,1,1,1,1,2,2,3,4,5,6,7,8,9,10,11,13,14,16],[1,1,1,1,1,1,2,3,4,4,5,6,7,8,9,11,12,14,16],[1,1,1,1,1,1,2,2,3,4,5,6,7,8,9,10,12,14,16],[1,1,1,1,1,1,1,2,3,4,4,5,6,7,9,10,12,14,15],[1,1,1,1,1,1,1,2,2,3,4,5,6,7,8,10,12,13,15],[1,1,1,1,1,1,1,1,2,3,4,5,6,7,8,10,12,13,15],[1,1,1,1,1,1,1,1,1,2,2,4,5,6,8,9,11,12,14],[1,1,1,1,1,1,1,1,1,1,2,3,4,6,8,9,11,12,13]];

var B1_FGR_scaled = [[2,4,6,7,9,10,11,12,13,14,15,16,17,18,19,19,19,19,19],[2,3,5,7,8,9,10,11,12,13,14,15,16,17,18,19,19,19,19],[1,3,5,6,7,8,10,11,11,12,13,14,15,16,17,18,19,19,19],[1,3,4,5,7,8,9,10,11,12,12,13,14,15,16,17,18,19,19],[1,2,4,5,6,7,8,9,10,11,12,13,13,14,15,16,17,18,19],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,14,15,16,17,18],[1,2,3,4,5,6,7,8,9,10,10,11,12,13,14,15,16,16,17],[1,2,3,4,5,6,6,7,8,9,10,11,12,12,13,14,15,16,17],[1,1,2,3,4,5,6,7,8,9,9,10,11,12,13,13,14,15,16],[1,1,2,3,4,5,6,7,7,8,9,10,11,11,12,13,14,15,16],[1,1,2,3,4,5,5,6,7,8,9,9,10,11,12,13,13,14,15],[1,1,2,3,3,4,5,6,7,7,8,9,10,10,11,12,13,14,15],[1,1,2,2,3,4,5,6,6,7,8,9,9,10,11,12,13,13,14],[1,1,1,2,3,4,5,5,6,7,8,8,9,10,10,11,12,13,14],[1,1,1,2,3,3,4,5,6,6,7,8,8,9,10,11,12,12,13],[1,1,1,2,2,3,4,5,5,6,7,7,8,9,9,10,11,12,13],[1,1,1,1,2,3,3,4,5,6,6,7,8,8,9,10,11,12,12],[1,1,1,1,2,2,3,,5,5,6,7,8,8,9,10,10,11,12],[1,1,1,1,1,2,3,4,5,5,6,7,7,8,9,10,10,11,12],[1,1,1,1,1,2,3,4,4,5,6,7,7,8,9,9,10,11,12],[1,1,1,1,1,2,3,3,4,5,6,6,7,8,9,9,10,11,12],[1,1,1,1,1,2,2,3,4,5,6,6,7,8,9,9,10,11,12],[1,1,1,1,1,1,2,3,4,5,5,6,7,8,8,9,10,11,11],[1,1,1,1,1,1,2,3,4,4,5,6,7,7,8,9,10,11,11]];

var B1_CLO_scaled = [[3,5,7,9,10,12,13,14,15,16,17,18,19,19,19,19,19,19,19],[2,4,6,8,9,11,12,13,14,15,16,17,18,19,19,19,19,19,19],[2,4,6,7,9,10,11,12,13,14,15,16,17,17,18,19,19,19,19],[1,3,5,6,8,9,10,11,12,13,14,14,15,16,17,18,19,19,19],[1,3,4,6,7,8,9,10,11,12,13,14,15,15,16,17,18,19,19],[1,3,4,5,6,8,9,10,10,11,12,13,14,15,15,16,17,18,19],[1,2,4,5,6,7,8,9,10,11,11,12,13,14,15,16,17,18,19],[1,2,3,4,5,6,7,8,9,10,11,12,12,13,14,15,16,17,18],[1,2,3,4,5,6,7,8,9,9,10,11,12,13,13,14,15,16,17],[1,2,3,4,5,5,6,7,8,9,10,10,11,12,13,14,15,16,17],[1,2,2,3,4,5,6,7,8,8,9,10,11,11,12,13,14,15,16],[1,1,2,3,4,5,6,6,7,8,9,9,10,11,12,13,14,14,15],[1,1,2,3,4,5,5,6,7,7,8,9,10,10,11,12,13,14,15],[1,1,2,3,4,4,5,6,6,7,8,8,9,10,11,12,13,14,15],[1,1,2,2,3,4,4,5,6,6,7,8,8,9,10,11,12,13,14],[1,1,1,2,3,3,4,5,5,6,6,7,8,9,9,10,11,12,13],[1,1,1,1,2,3,3,4,5,5,6,7,7,8,9,10,11,12,13],[1,1,1,1,1,2,3,4,4,5,6,6,7,8,9,10,11,12,13],[1,1,1,1,1,2,2,3,4,4,5,6,7,7,8,9,11,12,13],[1,1,1,1,1,1,2,2,3,4,5,5,6,7,8,9,10,12,13],[1,1,1,1,1,1,1,2,3,4,4,5,6,7,8,9,10,12,13],[1,1,1,1,1,1,1,1,2,3,4,5,6,7,8,9,10,12,13],[1,1,1,1,1,1,1,1,1,2,3,4,5,6,7,9,10,11,12],[1,1,1,1,1,1,1,1,1,1,2,3,4,6,7,8,10,11,12]];

var B2_scal_stan = [55,56,56,57,57,58,59,60,60,61,62,63,63,64,65,66,67,67,68,69,69,70,71,72,72,73,73,74,75,76,76,77,78,79,79,80,80,81,82,83,83,84,85,86,86,87,87,88,89,90,90,91,92,93,93,94,95,96,96,97,98,99,99,100,100,101,102,103,103,104,105,106,106,107,108,109,109,110,110,111,112,113,113,114,115,116,116,117,118,119,119,120,120,121,122,123,123,124,125,126,126,127,128,129,129,130,130,131,132,132,133,134,134,135,136,137,138,139,139,140,140,141,142,143,143,144,145];

var B3_stan_other = [['<1','<1','<1','<1','<1','<1','<1',1,1,1,1,1,1,2,2,2,3,3,4,4,5,5,6,7,8,9,10,11,13,14,16,18,19,21,23,25,27,30,32,34,37,39,42,45,47,50,53,55,58,61,63,66,68,70,73,75,77,79,81,83,84,86,87,88,90,91,92,93,94,95,95,96,96,97,97,98,98,98,99,99,99,99,99,99,'>99','>99','>99','>99','>99','>99','>99','>99'],[1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,8,8,8,8,8,9,9,9,9,9,10,10,10,10,10,11,11,11,11,11,12,12,12,12,12,13,13,13,13,13,14,14,14,14,14,15,15,15,15,15,16,16,16,16,16,17,17,17,17,17,18,18,18,18,18,19,19,19,19]];

var B3_scaled_other = [[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[56,56,60,65,70,75,80,85,90,95,100,105,110,115,120,125,130,135,140,145],['<1','<1','<1',1,2,5,9,16,25,37,50,63,75,84,91,95,98,99,'>99','>99']];


var B4_Age_DIS = ['<5-0','<5-0','<5-0','<5-0','<5-0','<5-0','5-4','6-1','6-9','7-6','8-5','9-5','10-7','12-6','13-9','18-3','>21-11','>21-11','>21-11'];

var B4_Age_MEM = ['<5-0','<5-0','<5-0','<5-0','<5-0','<5-0','<5-0','5-0','5-9','6-6','7-2','8-0','8-11','10-1','11-5','14-2','>21-11','>21-11','>21-11'];

var B4_Age_SPA = ['<5-0','<5-0','<5-0','<5-0','<5-0','<5-0','5-2','5-6','6-0','6-4','6-9','7-3','7-9','8-6','9-0','10-0','11-7','18-0','21-0'];

var B4_Age_CON = ['<5-0','<5-0','<5-0','<5-0','<5-0','5-0','5-11','7-0','7-11','8-9','9-7','10-9','11-10','12-9','14-2','18-1','20-10','>21-11','>21-11'];

var B4_Age_SEQ = ['<5-0','<5-0','<5-0','<5-0','<5-0','<5-0','5-2','5-9','6-4','7-0','7-8','8-6','9-5','11-1','14-5','18-6','>21-11','>21-11','>21-11'];

var B4_Age_FGR = ['<5-0','<5-0','<5-0','<5-0','<5-0','5-0','5-8','6-6','7-0','7-8','8-5','9-2','10-0','10-11','12-1','13-9','18-3','>21-11','>21-11'];

var B4_Age_CLO = ['<5-0','<5-0','<5-0','<5-0','5-1','6-0','6-6','7-2','7-10','8-6','9-3','9-11','10-7','11-5','12-4','14-1','19-11','>21-11','>21-11'];

var B5_Age_overall = ['<5-0','5-0','5-1','5-2','5-3','5-5','5-6','5-7','5-8','5-9','5-10','5-11','6-0','6-1','6-2','6-3','6-4','6-5','6-7','6-8','6-9','6-10','6-11','7-1','7-2','7-3','7-4','7-5','7-6','7-8','7-9','7-10','8-0','8-1','8-2','8-4','8-5','8-6','8-8','8-9','8-11','9-0','9-1','9-3','9-4','9-6','9-8','9-9','9-11','10-1','10-3','10-4','10-6','10-8','10-11','11-1','11-3','11-6','11-8','11-11','12-2','12-4','12-7','12-11','13-2','13-6','13-11','14-4','15-3','16-5','17-3','18-7','20-7','>21-11'];




// 분석기준나이설정(TVPS)

if (ChAge < 5) {
  var TVPS_ACAge = 0;
  var TVPS_ACAge_S = "5세 0개월";
  var TVPS_ACAge_T = "5세 5개월";
} else if (ChAge >= 5 && ChAge <6 ) {
  if (ChAge_m < 6) {
    var TVPS_ACAge = 0;
    var TVPS_ACAge_S = "5세 0개월";
    var TVPS_ACAge_T = "5세 5개월";
  } else {
    var TVPS_ACAge = 1;
    var TVPS_ACAge_S = "5세 6개월";
    var TVPS_ACAge_T = "5세 11개월";
  }
} else if (ChAge >= 6 && ChAge <7 ) {
  if (ChAge_m < 6) {
    var TVPS_ACAge = 2;
    var TVPS_ACAge_S = "6세 0개월";
    var TVPS_ACAge_T = "6세 5개월";
  } else {
    var TVPS_ACAge = 3;
    var TVPS_ACAge_S = "6세 6개월";
    var TVPS_ACAge_T = "6세 11개월";
  }
} else if (ChAge >= 7 && ChAge <8 ) {
  if (ChAge_m < 6) {
    var TVPS_ACAge = 4;
    var TVPS_ACAge_S = "7세 0개월";
    var TVPS_ACAge_T = "7세 5개월";
  } else {
    var TVPS_ACAge = 5;
    var TVPS_ACAge_S = "7세 6개월";
    var TVPS_ACAge_T = "7세 11개월";
  }
} else if (ChAge >= 8 && ChAge <9 ) {
  if (ChAge_m < 6) {
    var TVPS_ACAge = 6;
    var TVPS_ACAge_S = "8세 0개월";
    var TVPS_ACAge_T = "8세 5개월";
  } else {
    var TVPS_ACAge = 7;
    var TVPS_ACAge_S = "8세 6개월";
    var TVPS_ACAge_T = "8세 11개월";
  }
} else if (ChAge >= 9 && ChAge <10 ) {
  if (ChAge_m < 6) {
    var TVPS_ACAge = 8;
    var TVPS_ACAge_S = "9세 0개월";
    var TVPS_ACAge_T = "9세 5개월";
  } else {
    var TVPS_ACAge = 9;
    var TVPS_ACAge_S = "9세 6개월";
    var TVPS_ACAge_T = "9세 11개월";
  }
} else if (ChAge >= 10 && ChAge <11 ) {
  if (ChAge_m < 6) {
    var TVPS_ACAge = 10;
    var TVPS_ACAge_S = "10세 0개월";
    var TVPS_ACAge_T = "10세 5개월";
  } else {
    var TVPS_ACAge = 11;
    var TVPS_ACAge_S = "10세 6개월";
    var TVPS_ACAge_T = "10세 11개월";
  }
} else if (ChAge >= 11 && ChAge <12 ) {
  if (ChAge_m < 6) {
    var TVPS_ACAge = 12;
    var TVPS_ACAge_S = "11세 0개월";
    var TVPS_ACAge_T = "11세 5개월";
  } else {
    var TVPS_ACAge = 13;
    var TVPS_ACAge_S = "11세 6개월";
    var TVPS_ACAge_T = "11세 11개월";
  }
} else if (ChAge >= 12 && ChAge <13 ) {
    var TVPS_ACAge = 14;
    var TVPS_ACAge_S = "12세 0개월";
    var TVPS_ACAge_T = "12세 11개월";
} else if (ChAge >= 13 && ChAge <14 ) {
    var TVPS_ACAge = 15;
    var TVPS_ACAge_S = "13세 0개월";
    var TVPS_ACAge_T = "13세 11개월";
} else if (ChAge >= 14 && ChAge <15 ) {
    var TVPS_ACAge = 16;
    var TVPS_ACAge_S = "14세 0개월";
    var TVPS_ACAge_T = "14세 11개월";
} else if (ChAge >= 15 && ChAge <16 ) {
    var TVPS_ACAge = 17;
    var TVPS_ACAge_S = "15세 0개월";
    var TVPS_ACAge_T = "15세 11개월";
} else if (ChAge >= 16 && ChAge <17 ) {
    var TVPS_ACAge = 18;
    var TVPS_ACAge_S = "16세 0개월";
    var TVPS_ACAge_T = "16세 11개월";
} else if (ChAge >= 17 && ChAge <18 ) {
    var TVPS_ACAge = 19;
    var TVPS_ACAge_S = "17세 0개월";
    var TVPS_ACAge_T = "17세 11개월";
} else if (ChAge >= 18 && ChAge <19 ) {
    var TVPS_ACAge = 20;
    var TVPS_ACAge_S = "18세 0개월";
    var TVPS_ACAge_T = "18세 11개월";
} else if (ChAge >= 19 && ChAge <20 ) {
    var TVPS_ACAge = 21;
    var TVPS_ACAge_S = "19세 0개월";
    var TVPS_ACAge_T = "19세 11개월";
} else if (ChAge >= 20 && ChAge <21 ) {
    var TVPS_ACAge = 22;
    var TVPS_ACAge_S = "20세 0개월";
    var TVPS_ACAge_T = "20세 11개월";
} else {
    var TVPS_ACAge = 23;
    var TVPS_ACAge_S = "21세 0개월";
    var TVPS_ACAge_T = "21세 11개월";
}


// 척도점수 , 백분위점수, 등가나이환산

if (RAW_SCORE_DIS === "" || RAW_SCORE_DIS == "NaN"  || isNaN(RAW_SCORE_DIS)) {
  var RAW_SCORE_DIS = "평가하지 않음";
  var scaled_DIS = "";
  var percentile_DIS = "";
  var qgeEqui_DIS = "";
} else {
  var scaled_DIS = B1_DIS_scaled[TVPS_ACAge][RAW_SCORE_DIS];
  var percentile_DIS = B3_scaled_other[2][scaled_DIS];
  var qgeEqui_DIS = B4_Age_DIS[RAW_SCORE_DIS];
}


if (RAW_SCORE_MEM === "" || RAW_SCORE_MEM == "NaN" || isNaN(RAW_SCORE_MEM)) {
  var RAW_SCORE_MEM = "평가하지 않음";
  var scaled_MEM = "";
  var percentile_MEM = "";
  var qgeEqui_MEM = "";
  } else {
  var scaled_MEM = B1_MEM_scaled[TVPS_ACAge][RAW_SCORE_MEM];
  var percentile_MEM = B3_scaled_other[2][scaled_MEM];
  var qgeEqui_MEM = B4_Age_MEM[RAW_SCORE_MEM];
  }


if (RAW_SCORE_SPA === "" || RAW_SCORE_SPA == "NaN" || isNaN(RAW_SCORE_SPA)) {
  var RAW_SCORE_SPA = "평가하지 않음";
  var scaled_SPA = "";
  var percentile_SPA = "";
  var qgeEqui_SPA = "";
  } else {
  var scaled_SPA = B1_SPA_scaled[TVPS_ACAge][RAW_SCORE_SPA];
  var percentile_SPA = B3_scaled_other[2][scaled_SPA];
  var qgeEqui_SPA = B4_Age_SPA[RAW_SCORE_SPA];
  }


if (RAW_SCORE_CON === "" || RAW_SCORE_CON == "NaN" || isNaN(RAW_SCORE_CON)) {
  var RAW_SCORE_CON = "평가하지 않음";
  var scaled_CON = "";
  var percentile_CON = "";
  var qgeEqui_CON = "";
  } else {
  var scaled_CON = B1_CON_scaled[TVPS_ACAge][RAW_SCORE_CON];
  var percentile_CON = B3_scaled_other[2][scaled_CON];
  var qgeEqui_CON = B4_Age_CON[RAW_SCORE_CON];
  }


if (RAW_SCORE_SEQ === "" || RAW_SCORE_SEQ == "NaN" || isNaN(RAW_SCORE_SEQ)) {
  var RAW_SCORE_SEQ = "평가하지 않음";
  var scaled_SEQ = "";
  var percentile_SEQ = "";
  var qgeEqui_SEQ = "";
  } else {
  var scaled_SEQ = B1_SEQ_scaled[TVPS_ACAge][RAW_SCORE_SEQ];
  var percentile_SEQ = B3_scaled_other[2][scaled_SEQ];
  var qgeEqui_SEQ = B4_Age_SEQ[RAW_SCORE_SEQ];
  }


if (RAW_SCORE_FGR === "" || RAW_SCORE_FGR == "NaN" || isNaN(RAW_SCORE_FGR)) {
  var RAW_SCORE_FGR = "평가하지 않음";
  var scaled_FGR = "";
  var percentile_FGR = "";
  var qgeEqui_FGR = "";
  } else {
  var scaled_FGR = B1_FGR_scaled[TVPS_ACAge][RAW_SCORE_FGR];
  var percentile_FGR = B3_scaled_other[2][scaled_FGR];
  var qgeEqui_FGR = B4_Age_FGR[RAW_SCORE_FGR];
  }


if (RAW_SCORE_CLO === "" || RAW_SCORE_CLO == "NaN" || isNaN(RAW_SCORE_CLO)) {
  var RAW_SCORE_CLO = "평가하지 않음";
  var scaled_CLO = "";
  var percentile_CLO = "";
  var qgeEqui_CLO = "";
  } else {
  var scaled_CLO = B1_CLO_scaled[TVPS_ACAge][RAW_SCORE_CLO];
  var percentile_CLO = B3_scaled_other[2][scaled_CLO];
  var qgeEqui_CLO = B4_Age_CLO[RAW_SCORE_CLO];
  }


  // TVPS4 전체 척도점수, 표준점수, 백분위점수, 등가나이점수
  if (RAW_SCORE_DIS === "평가하지 않음" || RAW_SCORE_MEM === "평가하지 않음" || RAW_SCORE_SPA === "평가하지 않음" || RAW_SCORE_CON === "평가하지 않음" || RAW_SCORE_SEQ === "평가하지 않음" || RAW_SCORE_FGR === "평가하지 않음" || RAW_SCORE_CLO === "평가하지 않음" ) {
    var sum_scaled = "";
    var STANDARD_B2 = "";
    var sum_raws = "";
    var PERCENTILE_B3 = "";
    var TVPS4AGE_B5 = "";

  } else {
    var sum_raws = RAW_SCORE_DIS + RAW_SCORE_MEM + RAW_SCORE_SPA + RAW_SCORE_CON + RAW_SCORE_SEQ + RAW_SCORE_FGR + RAW_SCORE_CLO;
    var sum_scaled = scaled_DIS+scaled_MEM+scaled_SPA+scaled_CON+scaled_SEQ+scaled_FGR+scaled_CLO;
    var sum_scaled_stan = (sum_scaled-7);
    var STANDARD_B2 = B2_scal_stan[sum_scaled_stan];
    var B3_stand_per = (STANDARD_B2-55);
    var PERCENTILE_B3 = B3_stan_other[0][B3_stand_per];

    if (sum_raws <38){
      var B5_Raw = 0;
    } else if (sum_raws === "" ){
      var TVPS4AGE_B5 = "";
    } else if (sum_raws >= 38 && sum_raws <= 110){
      var B5_Raw = sum_raws-37;
    } else {
      var B5_Raw = 73;
    }
    var TVPS4AGE_B5 = B5_Age_overall[B5_Raw];
  }
