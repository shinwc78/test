//QOL문진
if (QOL_sum !== ""){
  if (QOL_sum >= 30) {
    document.write("● 시기능이상의 자각적인 증상정도를 확인할 수 있는 QOL문진점수가 "+'<span style="font-weight: bold; color: red;">'+QOL_sum+"점"+'</span>'+"으로 자각적증상의 정도가 "+'<span style="font-weight: bold; color: red;">'+"매우 불량합니다. 시기능발달평가가 적극"+'</span>'+"권장됩니다.<br>\n <br>\n");
  } else if (QOL_sum >= 20 && QOL_sum <30 ) {
    document.write("● 시기능이상의 자각적인 증상정도를 확인할 수 있는 QOL문진점수가 "+'<span style="font-weight: bold; color: red;">'+QOL_sum+"점"+'</span>'+"으로 자각적증상의 정도가 "+'<span style="font-weight: bold; color: red;">'+"불량합니다. 시기능발달평가가 "+'</span>'+"권장됩니다.<br>\n <br>\n");
  } else if (QOL_sum < 20 && QOL_sum >10) {
    document.write("● 시기능이상의 자각적인 증상정도를 확인할 수 있는 QOL문진점수가 "+'<span style="font-weight: bold; color: blue;">'+QOL_sum+"점"+'</span>'+"으로 자각적증상의 "+'<span style="font-weight: bold; color: blue;">'+"정기적인 관찰이 "+'</span>'+"권장됩니다.<br>\n <br>\n");
  } else  if (QOL_sum <=10){
    document.write("● 시기능이상의 자각적인 증상정도를 확인할 수 있는 QOL문진점수가 "+QOL_sum+"점으로 양호합니다.<br>\n <br>\n");
  } else if (QOL_sum == "NaN"){
    document.write("● 시기능이상의 자각적인 증상정도를 확인할 수 있는 QOL문진점수가 평가되지 않았습니다.<br>\n <br>\n");
  }
}



// 시기능이상-비사시성

  if ((CTest_N === 'exo') && (NVer >= 6) && (D_BIBO == 'BI') && (Nectopic > 6) && (N_BIBO == 'BI') && ((Nectopic - Dectopic) >= 4) ){
    if ((NConver2 <= 15) || ((NConver2 /2) < Nectopic)){
      var Eva_result1 = "눈모임부족";
    }
  } else if ((CTest_N == 'eso') && ((Nectopic - Dectopic) >= 3) && (N_BIBO == 'BO')){
    if ((NDever2 <= 17) || ((NDever2 / 2) < Nectopic)){
      var Eva_result1 = "눈모임과다";
    }
  } else if ((CTest_N == 'eso') && ((Dectopic - Nectopic) >= 2) && (D_BIBO == 'BO') && (N_BIBO == 'BO')){
    if ((NDever2 <= 4) || ((NDever2 / 2) < Dectopic)){
      var Eva_result1 = "눈벌림부족";
    }
  } else if ((CTest_N == 'exo') && ((Dectopic - Nectopic) >= 1) && (D_BIBO == 'BI') && (N_BIBO == 'BI')){
    if ((DConver2 < 11) || ((DConver2 / 2) < Dectopic) ){
      var Eva_result1 = "눈벌림과다";
      }
  } else if ((CTest_N == 'exo') && ((Nectopic - Dectopic) <= 0) && (D_BIBO == 'BI') && (N_BIBO == 'BI')){
    if ((DConver2 <= 11) || ((DConver2 /2) < Dectopic)){
      if ((NConver2 <= 15) || ((NConver2 / 2) < Nectopic) ){
        var Eva_result1 = "잠복성외편위(기본형)";
      }
    }
  } else if ((CTest_N == 'eso') && ((Nectopic - Dectopic) <= 1) && (D_BIBO == 'BO') && (N_BIBO == 'BO')){
    if ((DDever2 <= 4) || ((DDever2 /2) < Dectopic)) {
      if ((NDever2 <=17) || ((NDever2 /2) < Nectopic)) {
        var Eva_result1 = "잠복성내편위(기본형)";
      }
    }
  } else if ((CTest_N == 'eso') && (Dectopic <= 0) && (Nectopic <= 0)){
    if ((DDever2 <= 4) || ((DConver2 / 2) < Dectopic)){
      if ((DConver2 <= 11) || ((DConver2 / 2) < Dectopic)){
        if ((NDever2 <= 17) || ((NDever2 /2) < Nectopic)){
          if ((NConver2 <= 15) || ((NConver2 /2) < Nectopic)){
            var Eva_result1 = "융합버전스이상";
          }
        }
      }
    }
  } else if (CTest_N == 'exo' && Nectopic <= 0 && Dectopic <= 0){
  if ((DDever2 <= 4) || ((DDever2 / 2) < Dectopic)){
    if ((DConver2 <= 11) ||  ((DConver2 / 2) < Dectopic)){
      if ((NDever2 <= 17) || ((NDever2 /2) < Nectopic)){
        if ((NConver2 <= 15) || ((NConver2 /2) < Nectopic)){
          var Eva_result1 = "융합버전스이상";
        }
      }
    }
  }
} else if ((CTest_N == 'ET') || (CTest_D == 'ET')) {
  if(radio_month6 == "early" && ratio_cross == "always" && (Dectopic > 30 || Nectopic > 30) && BroadH == "bad") {
    var Eva_result1 = "유아_항상성내편위";
  } else if(((Dectopic < 35 && Dectopic > 10) || (Nectopic > 35 && Nectopic > 10)) && change_ver == "yes" && Nectopic >= (Dectopic-2) && radio_month6 == "later" ){
    var Eva_result1 = "조절성_항상성내편위";
  } else if (radio_month6 == "later" && radio_exami == "sudden") {
    var Eva_result1 = "급성_항상성내편위";
  } else if((Dectopic < 30 || Nectopic < 30) && radio_eye_movement == "yes" && change_ver == "yes" && radio_month6 == "later") {
    var Eva_result1 = "물리적_항상성내편위";
  } else if (ratio_cross == "always" && radio_splitting == "unilater" && amblyopia == "yes" ){
    var Eva_result1 = "감각성_항상성내편위";
  } else if (radio_surgery1 == "yes" && BroadH != "good" && ratio_cross == "always" && radio_splitting == "unilater"){
    var Eva_result1 = "속발성_항상성내편위";
  } else if ((Dectopic < 11 || Nectopic < 11) && ratio_cross == "always" && radio_splitting == "unilater" && amblyopia == "yes" ){
    var Eva_result1 = "미세_항상성내편위";
  } else {
    var Eva_result1 = "항상성내편위";
  }
} else if ((CTest_N == 'XT') || (CTest_D == 'XT')){
  if(radio_month6 == "early" && (Dectopic > 30 || Nectopic > 30) && radio_splitting == "alter" && ratio_cross == "always" ){
    var Eva_result1 = "유아_항상성외편위";
  } else if(radio_month6 == "later" && ratio_cross == "sometime"){
    if(((Dectopic- Nectopic)<10 || (Nectopic- Dectopic)<10)){
      var Eva_result1 = "간헐성_외편위(기본형)";
    } else if((Dectopic- Nectopic)>=10){
      var Eva_result1 = "간헐성_외편위(눈벌림과다형)";
    } else if((Nectopic- Dectopic)>=10){
      var Eva_result1 = "간헐성_외편위(눈모임부족형)";
    }
  } else if(radio_month6 == "later" && radio_exami == "sudden" ){
    var Eva_result1 = "급성_항상성외편위";
  } else if((Dectopic < 30 || Nectopic < 30) && radio_eye_movement == "yes" && change_ver == "yes" && radio_month6 == "later"){
    var Eva_result1 = "물리적_항상성외편위";
  } else if(ratio_cross == "always" && radio_splitting == "unilater" && amblyopia == "yes"){
    var Eva_result1 = "감각성_항상성외편위";
  } else if (radio_surgery1 == "yes" && BroadH != "good" && ratio_cross == "always" && radio_splitting == "unilater"){
    var Eva_result1 = "속발성_항상성외편위";
  } else if ((Dectopic < 11 || Nectopic < 11) && ratio_cross == "always" && radio_splitting == "unilater" && amblyopia == "yes" ){
    var Eva_result1 = "미세_항상성외편위";
  } else {
    var Eva_result1 = "항상성외편위";
  }
} else {
  var Eva_result1 = "";
}


//  elseif ($DVertical >=1 || $NVertical >=1) {
//   if (($DVertical_BD1 <= 3) || ($DVertical_BD3 <= 3) || ($DVertical_BU1 <= 3) || ($DVertical_BU3 <= 3) || ($NVertical_BD1 <= 3) || ($NVertical_BD3 <= 3) || ($NVertical_BU1 <= 3) || ($NVertical_BU3 <= 3)  ){
//     $Eva_result1 = "수직사위";
//   }
// }
var Accomage = 15 - (0.25 * ChAge);
if(RAccom_Rev !== "" || LAccom_Rev !== "" || OUAccom_Rev !== "" || R_accom !=="" || L_accom !== "" || O_accom !== ""){
  if((R_accom <= Accomage-2) || (L_accom <= Accomage-2)){
    if(ChAge <= 6){
      if(RAccom_Rev <= 3 || LAccom_Rev <= 3){
        if(Sel_AccomRev == 'bad2'){
          var Eva_result2 = "조절부족/조절지속능력부족";
        } else if (Sel_AccomRev == 'bad1'){
          var Eva_result2 = "조절과다(조절경련)";
        }
      }
    } else if (ChAge > 6 && ChAge < 13) {
      if((RAccom_Rev <= 4.5) || (LAccom_Rev <= 4.5)){
        if(Sel_AccomRev == 'bad2'){
          var Eva_result2 = "조절부족/조절지속능력부족";
        } else if(Sel_AccomRev == 'bad1'){
          var Eva_result2 = "조절과다(조절경련)";
        }
      }
    }  else if (ChAge >= 13 ) {
      if((RAccom_Rev <= 6) || (LAccom_Rev <= 6)){
        if(Sel_AccomRev == 'bad2'){
          var Eva_result2 = "조절부족/조절지속능력부족";
        } else if(Sel_AccomRev == 'bad1'){
          var Eva_result2 = "조절과다(조절경련)";
        }
      }
    }
  } else if ((R_accom >= Accomage) || (L_accom >= Accomage)){
    if(ChAge <= 6){
      if((RAccom_Rev <= 3) || (LAccom_Rev <= 3)){
        if (OUAccom_Rev <= 0.5) {
          if(Sel_AccomRev == 'bad3'){
          var Eva_result2 = "조절용이부족";
        }
      }
    }
  } else if (ChAge >= 7 && ChAge < 12) {
      if((RAccom_Rev <= 4.5) || (LAccom_Rev <= 4.5)){
        if (OUAccom_Rev <= 2.5) {
          if(Sel_AccomRev == 'bad3'){
          var Eva_result2 = "조절용이부족";
        }
      }
    }
  } else if (ChAge >= 13 && ChAge < 38) {
      if((RAccom_Rev <= 6) || (LAccom_Rev <= 6)){
        if (OUAccom_Rev <= 2.5) {
          if(Sel_AccomRev == 'bad3'){
          var Eva_result2 = "조절용이부족";
        }
      }
    }
  }
} else {
  var Eva_result2 = "";
}
}

if (QOL_sum >= 20) {
  if (DEM_RATIO_PER <= 15 || DEM_RATIO_PER === '<1') {
    var Eva_result3 = "안구운동이상";
  }
} else if (QOL_sum == "NaN") {
  var Eva_result3 = "";
} else {
  var Eva_result3 = "";
}


if (Eva_result1 !== "" || Eva_result2 !== ""  || Eva_result3 !== "" ){
  document.write("● 양안시기능평가 결과 "+'<span style="font-weight: bold; color: red;">'+Eva_result1+" "+Eva_result2+" "+Eva_result3+'</span>'+"입니다.<br>\n <br>\n");
  if (Eva_result1 === "눈모임부족") {
    var EVA_TEST_1 = "안구협응기술과 융합력 ";
    document.write('<span style="font-weight: bold; color: red;">'+"눈모임부족"+'</span>'+"의 경우 버전스이상 중에서 가장 흔한 이상으로 조절이상과 버전스이상이 있는 어린이의 약30%에서 나타나고 있습니다.<br>\n");
    document.write("주로 독서나 근거리 작업과 관련된 임상적 증상이 나타나게 되며 주로 눈의 피로감, 전두부 두통, 간헐적인 흐림과 복시, 글씨가 움직여보임, 독서시 졸림, 집중도와 이해력저하, 눈이 따갑고 불편함등을 호소합니다.<br>\n <br>\n");
} else if (Eva_result1 === "눈모임과다") {
    var EVA_TEST_1 = "안구협응기술과 융합력 ";
    document.write('<span style="font-weight: bold; color: red;">'+"눈모임과다"+'</span>'+"의 경우 조절이상과 버전스이상이 있는 어린이의 약2%에서 나타나고 있습니다.<br>\n");
    document.write("주로 독서나 근거리 작업과 관련된 임상적 증상이 나타나게 되며 주로 눈의 피로감, 두통, 간헐적인 흐림과 복시, 글씨가 움직여보임, 집중도와 이해력저하등을 호소합니다. 또한 근거리작업을 회피해 아무런 증상이 없을 수 있고 일부에서는 억제가 발생되기도 합니다.<br>\n <br>\n");
} else if (Eva_result1 === "눈벌림부족") {
    var EVA_TEST_1 = "안구협응기술과 융합력 ";
    document.write('<span style="font-weight: bold; color: red;">'+"눈벌림부족"+'</span>'+"의 경우 버전스이상 중에서 유병률이 가장 낮은 이상으로 소아환자의 약0.1%로 보고되고 있습니다.<br>\n");
    document.write("주로 원거리와 관련된 임상적 증상이 나타나게 되며 눈의 피로감, 간헐적인 흐림과 복시등을 호소합니다. 또한 많은 환자에서 원거리는 억제가 발생하지만 근거리의 양안시기능은 정상이기때문에 증상이 경한편입니다. <br>\n <br>\n");
} else if (Eva_result1 === "눈벌림과다") {
    var EVA_TEST_1 = "안구협응기술과 융합력 ";
    document.write('<span style="font-weight: bold; color: red;">'+"눈벌림과다"+'</span>'+"의 경우 유병률은 인구의 약0.03%이고, 여성이 남성보다 흔하게 발생하는 것으로 보고되고 있습니다.<br>\n");
    document.write("주로 원거리와 관련된 임상적 증상으로 밝은 불빛에서 한쪽 눈을 감는다(편위발생), 간헐적인 흐림과 복시의 증상이 나타납니다. 또한 증상을 호소하지 않는 경우가 많습니다. <br>\n <br>\n");
} else if (Eva_result1 === "잠복성외편위(기본형)") {
    var EVA_TEST_1 = "안구협응기술과 융합력 ";
    document.write('<span style="font-weight: bold; color: red;">'+"잠복성외편위(기본형)"+'</span>'+"의 경우 잠복성외편위환자의 27%가 잠복성외편위(기본형), 62%가 눈모임부족으로 보고된바 있습니다. 국내의 경우 잠복성외편위(기본형)는 조절이상과 버전스이상이 있는 어린이의 약 4%에서 나타나고 있습니다.<br>\n");
    document.write("원거리와 근거리 모두에 관련된 임상적 증상이 나타나며 근거리 증상은 눈의 피로감, 전두부 두통, 간헐적인 흐림과 복시, 글씨가 움직여보임, 독서시 졸림, 집중도와 이해력저하, 눈이 따갑고 불편함등 눈모임부족과 유사하며, 원거리 증상은 밝은 불빛에서 한쪽 눈을 감는다(편위발생), 간헐적인 흐림과 복시의 증상등 눈벌림과다와 유사합니다. 또한 증상을 호소하지 않는 경우가 많습니다.<br>\n <br>\n");
} else if (Eva_result1 === "잠복성내편위(기본형)") {
    var EVA_TEST_1 = "안구협응기술과 융합력 ";
    document.write('<span style="font-weight: bold; color: red;">'+"잠복성내편위(기본형)"+'</span>'+"의 경우 버전스이상 중에서 드물게 발생하는 이상입니다. 원거리에서 긴장성 눈모임이 높고, 원거리와 근거리에서 내사위의 정도가 비슷하며, AC/A비가 정상입니다.<br>\n");
    document.write("원거리와 근거리 모두에서 안정피로, 간헐적인 흐림과 복시등 임상적 증상을 호소합니다. <br>\n <br>\n");
} else if (Eva_result1 === "융합버전스이상") {
    var EVA_TEST_1 = "안구협응기술과 융합력 ";
    document.write('<span style="font-weight: bold; color: red;">'+"융합버전스이상"+'</span>'+"의 경우 눈모임부족이나 눈모임과다 보다 다소 낮게 발생하는 이상입니다. 원근거리의 안위는 대략 정위이지만 음성융합력과 양성융합력의 범위가 작고, AC/A비가 정상입니다.<br>\n");
    document.write("원거리와 근거리 모두에서 안정피로, 간헐적인 흐림과 복시, 독서시 집중도와 이해력저하등 임상적 증상을 호소합니다. <br>\n <br>\n");
} else if (Eva_result1 === "수직사위") {
    var EVA_TEST_1 = "안구협응기술과 융합력 ";
    document.write('<span style="font-weight: bold; color: red;">'+"수직사위"+'</span>'+"의 유병률은 약9%로 추정됩니다. 수직편위의 기원은 3가지로 볼수 있습니다.  1. 선천성이거나 어릴 때 발생한 일치성 수직편위 : 편위각이 작고 진행되지 않습니다.  2. 선천선 제4뇌신경 마비로인한 수직편위 : 고열이나 외상으로 인해 드러나는 경우가 흔하고 오래된 상쇄되지 않은 편위입니다.  3. 최근에 발생한 제4뇌신경 마비로 인한 수직편위 : 혈관성이거나 감염성으로 인한 편위는 시간이 지나면서 줄어들고, 외상으로 인한 편위는 변화가 없는 편이며, 종양으로 인한 편위는 시간이 지나면서  흔히 악화됩니다.<br>\n");
    document.write("주로 안정피로, 간헐적인 흐림과 복시, 근거리 작업이나 독서시 한쪽 눈을 감는다, 독서시 같은 줄을 반복해서 읽거나 읽던 줄을 놓친다, 멀미등 임상적 증상을 호소합니다. <br>\n <br>\n");
} else if (Eva_result1 === "유아_항상성내편위") {
    var EVA_TEST_1 = "안구협응기술과 융합력 ";
    document.write('<span style="font-weight: bold; color: red;">'+"유아_항상성내편위"+'</span>'+"의 유병률은 항상성내편위의 약 8%로 추정됩니다. 신경학적으로는 정상이지만 발달단계인 생후 6개월 이내에 내편위가 발생하는 상태로 이시기에 대부분의 유아는 정위로 발달합니다. 부모나 형제자매 중에서도 빈번하게 발생하고 대부분 편위각이 크고 항상성입니다. 교차주시를 동반하기도하여 양안시기능이 정상으로 발달하는데 심각한 장애가 됩니다. <br>\n <br>\n");
} else if (Eva_result1 === "조절성_항상성내편위") {
    var EVA_TEST_1 = "안구협응기술과 융합력 ";
    document.write('<span style="font-weight: bold; color: red;">'+"조절성_항상성내편위"+'</span>'+"의 유병률은 유년기에 발생하는 항상성내편위의 약 50%로 추정됩니다. 왕성한 조절과 관련되는데 교정하지 않은 원시나 높은 AC/A비로 인해 안구의 내편위가 발생합니다. 다른 안구편위보다 발생기전이 잘 알려져 있고 치료나 관리방법도 쉬운 편입니다. 주로 1~7세의 근거리 물체를 주시하는데 관심을 갖기 시작하는 시기에 발생합니다.  <br>\n <br>\n");
} else if (Eva_result1 === "비조절성_항상성내편위") {
    var EVA_TEST_1 = "안구협응기술과 융합력 ";
    document.write('<span style="font-weight: bold; color: red;">'+"비조절성_항상성내편위"+'</span>'+"는 어린이 항상성내편위환자에서 두 번째로 흔한 항상성내편위이고 항상성내편위 환자의 약 10%에서 발생합니다. 생후 6개월 이후에 발달하고 조절과 관련이 없어 원시를 교정하거나 근거리 가입도를 처방하더라도 항상성내편위가 교정되는 효과를 기대하기 어렵습니다.  <br>\n <br>\n");
} else if (Eva_result1 === "급성_항상성내편위") {
    var EVA_TEST_1 = "안구협응기술과 융합력 ";
    document.write('<span style="font-weight: bold; color: red;">'+"급성_항상성내편위"+'</span>'+"는 일반적으로 양안시 기능이 정상이었던 사람이 명백한 병인 없이 6세 이상 어린이나 청소년, 성인에서 갑자기 내편위가 발생합니다. 흔히 발생하는 갑작스런 복시는 종양이나 두부외상, 뇌수종, 동맥경화증 등의 생명을 위협하는 질병이 내재되거나 잠재되어있어 즉시 정밀검사를 받아야 합니다.   <br>\n <br>\n");
} else if (Eva_result1 === "물리적_항상성내편위") {
    var EVA_TEST_1 = "안구협응기술과 융합력 ";
    document.write('<span style="font-weight: bold; color: red;">'+"물리적_항상성내편위"+'</span>'+"는 안과 골절에 의한 외안근의 물리적 장애나, 외안근 섬유증이나 갑상선 근병증으로 인해 외안근의 수축이 제한되거나 당김에 의해 발생합니다. Duane증후군이 있는 일부 환자에서도 발생하고, 내전시에 안검열이 좁아지며 안구가 위나 아래롤 편위되기도 합니다.  <br>\n <br>\n");
} else if (Eva_result1 === "감각성_항상성내편위") {
    var EVA_TEST_1 = "안구협응기술과 융합력 ";
    document.write('<span style="font-weight: bold; color: red;">'+"감각성_항상성내편위"+'</span>'+"는 미교정 부동시, 단안백내장, 각막혼탁, 시신경위축, 황반부 질환 등과 같이 한쪽 눈에 시자극 결핍이나 외상으로 인해 감각성 융합이 결여되어 발생합니다. 대부분이 5세 이전에 발생하며 30%정도는 선천성 단안 백내장이나 외상성 단안 백내장에 의해 발생합니다. 선천성 백내장이 있는 신생아의 경우 정상적인 시력발달과 양안시기능 발달을 위하여 생후 6주~3개월 이내에 백내장을 제거해야 합니다.  <br>\n <br>\n");
} else if (Eva_result1 === "속발성_항상성내편위") {
    var EVA_TEST_1 = "안구협응기술과 융합력 ";
    document.write('<span style="font-weight: bold; color: red;">'+"속발성_항상성내편위"+'</span>'+"는 의인성으로 외편위의 수술적 과교정에 의해 발생합니다. 훈히 수직편위나 회선편위와 같은 안구운동이상을 동반합니다. 지속되면 나이가 어린 환자의 경우 약시와 억제발생으로 인해 양안시기능이 상실되고 성인의 경우 복시가 발생하기도 합니다.  <br>\n <br>\n");
} else if (Eva_result1 === "미세_항상성내편위") {
    var EVA_TEST_1 = "안구협응기술과 융합력 ";
    document.write('<span style="font-weight: bold; color: red;">'+"미세_항상성내편위"+'</span>'+"는 편위각이 10 미만으로 단안주시증후군이라 하기도 합니다. 3세이하에서 흔히 발생하고 편위각이 작아 종종 발견하지 못하기도 합니다. 흔히 약시를 동반할 위험이 높기 때문에 미세_항상성내편위가 의심되면 즉시 정밀검진을 받아야 합니다.  <br>\n <br>\n");
} else if (Eva_result1 === "항상성내편위") {
    var EVA_TEST_1 = "안구협응기술과 융합력 ";
    document.write('<span style="font-weight: bold; color: red;">'+"항상성내편위"+'</span>'+"는 대부분 학령기 이전에 발생하는데 일반적으로 2~3세 사이 흔하고, 주로 항상성입니다. 간헐성항상성내편위는 대부분의 경우 초기에 조절성 항상성내편위나 상쇄되지 않은 내사위와 관련되어 발생합니다. 간헐적 조절성 항상성내편위는 편위가 발생하는 시점에서 조절상태가 불안정하고, 교정하지 않으면 간헐성항상성내편위는 항상성 항상성내편위가 되는 경향이 있습니다.  <br>\n <br>\n");
} else if (Eva_result1 === "유아_항상성외편위") {
    var EVA_TEST_1 = "안구협응기술과 융합력 ";
    document.write('<span style="font-weight: bold; color: red;">'+"유아_항상성외편위"+'</span>'+"는 생후 6개월 이전에 발생하는 것으로, 유아_항상성내편위보다 발생률이 낮습니다. 대부분 편위각이 크고 항상성이기 때문에 정상 양안시발달을 심각하게 저해합니다. 또한 대부분의 경우 교대로 주시하는 교대성편위이기 때문에 약시가 드물게 발생합니다. <br>\n <br>\n");
} else if (Eva_result1 === "간헐성_외편위(기본형)") {
    var EVA_TEST_1 = "안구협응기술과 융합력 ";
    document.write('<span style="font-weight: bold; color: red;">'+"간헐성_외편위(기본형)"+'</span>'+"은 모든 간헐성_외편위 환자의 약50%를 차지합니다. 어떨때는 복시나 억제, 이상망막대응을 보이지만 어떨 때에는 입체시도 좋으면서 양안의 안위정렬이 정상입니다. 다른 유형의 간헐성_외편위와 달리, 어린나이에 발생한 간헐성_외편위의 교정시기가 늦어지더라도 영구적인 시각손상은 없는편 입니다. 그러나 교정하지 않으면, 시간이 지나면서 안구편위가 발생하는 시간이 증가하거나 편위량이 증가하여 간헐성_외편위가 악화됩니다. <br>\n <br>\n");
} else if (Eva_result1 === "간헐성_외편위(눈모임부족형)") {
    var EVA_TEST_1 = "안구협응기술과 융합력 ";
    document.write('<span style="font-weight: bold; color: red;">'+"간헐성_외편위(눈모임부족형)"+'</span>'+"은 모든 간헐성_외편위 환자의 약25%를 차지합니다. 어떨때는 복시나 억제, 이상망막대응을 보이지만 어떨 때에는 입체시도 좋으면서 양안의 안위정렬이 정상입니다. 다른 유형의 간헐성_외편위와 달리, 어린나이에 발생한 간헐성_외편위의 교정시기가 늦어지더라도 영구적인 시각손상은 없는편 입니다. 그러나 교정하지 않으면, 시간이 지나면서 안구편위가 발생하는 시간이 증가하거나 편위량이 증가하여 간헐성_외편위가 악화됩니다. 성인에서 발생하는 경우 주로 잠복성외편위(기본형) 유형이나 눈모임부족형이 흔합니다.  <br>\n <br>\n");
} else if (Eva_result1 === "간헐성_외편위(눈벌림과다형)") {
    var EVA_TEST_1 = "안구협응기술과 융합력 ";
    document.write('<span style="font-weight: bold; color: red;">'+"간헐성_외편위(눈벌림과다형)"+'</span>'+"은 모든 간헐성_외편위 환자의 약25%를 차지합니다. 어떨때는 복시나 억제, 이상망막대응을 보이지만 어떨 때에는 입체시도 좋으면서 양안의 안위정렬이 정상입니다. 다른 유형의 간헐성_외편위와 달리, 어린나이에 발생한 간헐성_외편위의 교정시기가 늦어지더라도 영구적인 시각손상은 없는편 입니다. 그러나 교정하지 않으면, 시간이 지나면서 안구편위가 발생하는 시간이 증가하거나 편위량이 증가하여 간헐성_외편위가 악화됩니다. 어린이에서 발생하는 경우 눈벌림과다형이 흔하며, 원거리를 주시하거나 밝은 태양아래에서 한쪽 눈을 감는경우가 많습니다.  <br>\n <br>\n");
} else if (Eva_result1 === "급성_항상성외편위") {
    var EVA_TEST_1 = "안구협응기술과 융합력 ";
    document.write('<span style="font-weight: bold; color: red;">'+"급성_항상성외편위"+'</span>'+"는 일반적으로 양안시기능이 정상이었던 사람이 명백한 병인 없이 6세이상의 어린이나 청소년, 성인에서 갑자기 외편위가 발생하는 상태로, 주로 상쇄되지 않은 잠복성외편위나 후천성 동안신경마비, 후천성 물리적_항상성외편위와 관련되어 발생합니다. 심각한 기저 질환의 가능성이 있기 때문에 즉시 정밀진단을 해야합니다.   <br>\n <br>\n");
} else if (Eva_result1 === "물리적_항상성외편위") {
    var EVA_TEST_1 = "안구협응기술과 융합력 ";
    document.write('<span style="font-weight: bold; color: red;">'+"물리적_항상성외편위"+'</span>'+"는 안과 골절에 의한 외안근의 물리적 장애나, 외안근 섬유증이나 갑상선 근병증으로 인해 외안근의 수축이 제한되거나 당김에 의해 발생합니다. Duane증후군이 있는 일부 환자에서도 발생하고, 내전시에 안검열이 좁아지며 안구가 안와내로 빨려 들어가는 것처럼 보이며 안구가 위나 아래롤 편위되기도 합니다.  <br>\n <br>\n");
} else if (Eva_result1 === "감각성_항상성외편위") {
    var EVA_TEST_1 = "안구협응기술과 융합력 ";
    document.write('<span style="font-weight: bold; color: red;">'+"감각성_항상성외편위"+'</span>'+"는 미교정 부동시, 단안백내장, 각막혼탁, 시신경위축, 황반부 질환 등과 같이 한쪽 눈에 시자극 결핍이나 외상으로 인해 감각성 융합이 결여되어 발생합니다. 어린이와 성인 모두에서 발생하지만. 어린이보다 성인에서 흔하게 발생합니다. 성인에서 많이 발생하는 이유는 나이가 증가하면서 긴장성눈모임의 상대적인 감소에 의한 것으로 추정됩니다. <br>\n <br>\n");
} else if (Eva_result1 === "속발성_항상성외편위") {
    var EVA_TEST_1 = "안구협응기술과 융합력 ";
    document.write('<span style="font-weight: bold; color: red;">'+"속발성_항상성외편위"+'</span>'+"는 의인성으로 항상성내편위의 수술적 과교정에 의해 발생합니다. 편위된 눈이 약시이거나 양안시기능이 저하되거나, 내직근기능저하, 과다한 원시성굴절이상일 경우 시간이 지나면서 점진적으로 항상성내편위에서 항상성외편위로 진행하기도 합니다. 복시가 발생하지 않는 한, 치료가 시급하지는 않으며 성인기에 발생하면 복시가 흔히 나타나고 억제는 잘 나타나지 않습니다.  <br>\n <br>\n");
} else if (Eva_result1 === "미세_항상성외편위") {
    var EVA_TEST_1 = "안구협응기술과 융합력 ";
    document.write('<span style="font-weight: bold; color: red;">'+"미세_항상성외편위"+'</span>'+"는 항상성외편위가 10 미만인 상태입니다. 편위각이 작아 종종 발견하지 못하기도 합니다. 흔히 약시를 동반할 위험이 높기 때문에 미세_항상성외편위가 의심되면 즉시 정밀검진을 받아야 합니다.  <br>\n <br>\n");
} else if (Eva_result1 === "항상성외편위") {
    var EVA_TEST_1 = "안구협응기술과 융합력 ";
    document.write('<span style="font-weight: bold; color: red;">'+"항상성외편위"+'</span>'+"는 어린이 대상으로한 연구결과 항상성내편위가 항상성외편위보다 3~5배 더 많이 발생하는것으로 보고되는데 전연령을 대상으로하면 항상성외편위가 항상성내편위보다 2배높은 것으로 보고되었습니다. 이것은 실제 항상성외편위가 더 빈번하게 발생하는 50대 이상의 성인에서 유병률이 높기 때문입니다.   <br>\n <br>\n");
}

if (Eva_result2 === "조절부족/조절지속능력부족") {
  var EVA_TEST_2 = "초점기술, 초점유지기술";
  document.write('<span style="font-weight: bold; color: red;">'+"조절부족/조절지속능력부족"+'</span>'+"은 조절이상 중에서 가장 흔한 이상으로 미국의 경우, 어린이와 성인의 약 3~5%에서 발생하고 있는 것으로 추정됩니다. 국내의 경우 조절부족은 조절이상과 버전스이상이 있는 어린이의 약 18%에서 나타나고 있습니다.<br>\n");
  document.write("주로 독서나 근거리 업무와 관련된 증상으로 노안과 관련된 증상과 매우 유사합니다. 가까운 거리가 흐려보이고 독서가 어려움, 두통, 집중도와 이해력 저하, 눈이 따갑고 불편함등 임상적 증상을 호소합니다. <br>\n <br>\n");
} else if (Eva_result2 === "조절과다(조절경련)") {
  var EVA_TEST_2 = "초점기술, 초점유지기술";
  document.write('<span style="font-weight: bold; color: red;">'+"조절과다(조절경련)"+'</span>'+"은 국내의 경우 조절이상과 버전스이상이 있는 어린이의 약 4%에서 나타나고 있습니다. 조절과다는 요구되는 시자극보다 조절작용이 과다하게 일어나 조절이완이 어려운 상태입니다. 원인은 미교정 원시, 과다한 근거리업무로 인한 조절피로, 포도막염, 정서이상, 뇌조양, 외상, 축동제 부작용등이 있습니다.<br>\n");
  document.write("주로 원거리 주시물체가 흐려보임, 근거리 업무시 안정피로와 두통, 안통, 잦은 시력변화로 안경을 자주 교체하는등 원/근거리 영역에 불편함을 호소합니다.<br>\n <br>\n");
} else if (Eva_result2 === "조절용이부족") {
  var EVA_TEST_2 = "초점기술, 초점유지기술";
  document.write('<span style="font-weight: bold; color: red;">'+"조절용이부족"+'</span>'+"은 국내의 경우 조절이상과 버전스이상이 있는 어린이의 약 13%에서 나타나고 있습니다. <br>\n");
  document.write("주로 근거리 업무를 장시간 하다가 원거리 물체를 보거나, 원거리 업무를 장시간 하다가 근거리 물체를 보면 흐려보임, 근거리 업무시 안정피로와 간헐적인 흐려보임, 독서시 집중도와 이해력 저하등 원/근거리 영역에 불편함을 호소합니다. <br>\n <br>\n");
}

if (Eva_result3 === "안구운동이상") {
  var EVA_TEST_3 = ", 안정적인 주시능력";
  document.write('<span style="font-weight: bold; color: red;">'+"안구운동이상"+'</span>'+"은 독립적으로 존재하기 보다는 조절이상과 버전스이상, 시지각이상과 동반되어 발생하는 것으로 나타나 유병률이 상대적으로 높은 편입니다. <br>\n");
  document.write("주로 과다한 머리움직임, 독서시 속도가 느리고 집중도와 이해력이 저하, 운전이나 스포츠 수행능력이 불량, 읽던위치를 놓침, 칠판의 글씨를 노트에 옮겨쓰기가 어려움등 불편함을 호소합니다. <br>\n <br>\n");
}
} else {
  document.write("● 양안시기능평가결과 특이사항 없음.<br>\n <br>\n");
}

// TVPS 종합결과
if ((RAW_SCORE_DIS === "평가하지 않음") || (RAW_SCORE_MEM === "평가하지 않음") || (RAW_SCORE_SPA === "평가하지 않음") || (RAW_SCORE_CON === "평가하지 않음") || (RAW_SCORE_SEQ === "평가하지 않음") || (RAW_SCORE_FGR === "평가하지 않음") || (RAW_SCORE_CLO === "평가하지 않음")) {
  var TVPS4_TEST = "";
  document.write("● 시지각기술은 평가하지 않음.<br>\n <br>\n");
} else {

  if (PERCENTILE_B3 <= 16 || PERCENTILE_B3 == "<1"){
    var TVPS4_TEST = "시지각기술";
    document.write("● 전체 시지각기술이 "+'<span style="font-weight: bold; color: red;">'+PERCENTILE_B3+"%"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+" 매우 저조"+'</span>'+"합니다.<br>\n");
    document.write(" 시지각기술에 이상이 있는 경우 한글 자음/ 영어 알파벳 학습이 지연될 수 있고, 기본적인 수학문제를 푸는게 어렵습니다. 유사하게 보이는 문자와 단어를 혼동할 수 있고 시각적 과제를 어려워 할 수 있습니다.<br>\n <br>\n");
} else if (PERCENTILE_B3 <= 50) {
  var TVPS4_TEST = "시지각기술";
    document.write("● 전체 시지각기술이 "+'<span style="font-weight: bold; color: blue;">'+PERCENTILE_B3+"%"+'</span>'+"로 정상범위이나"+'<span style="font-weight: bold; color: blue;">'+" 다소 부족"+'</span>'+"합니다.<br>\n");
    document.write(" 시지각기술에 이상이 있는 경우 한글 자음/ 영어 알파벳 학습이 지연될 수 있고, 기본적인 수학문제를 푸는게 어렵습니다. 유사하게 보이는 문자와 단어를 혼동할 수 있고 시각적 과제를 어려워 할 수 있습니다.<br>\n <br>\n");
} else if (PERCENTILE_B3 <= 84) {
  var TVPS4_TEST = "";
    document.write("● 전체 시지각기술이 "+PERCENTILE_B3+"% 로 정상범위로 양호합니다.<br>\n <br>\n");
} else if (PERCENTILE_B3 > 84) {
  var TVPS4_TEST = "";
    document.write("● 전체 시지각기술이 "+PERCENTILE_B3+"% 로 우수합니다.<br>\n <br>\n");
  }
}

// VMI 종합결과
if ((Raw_vmi === "평가하지 않음") || (Raw_visual === "평가하지 않음") || (Raw_motor === "평가하지 않음")){
  var VMI_TEST = "";
  document.write("● 시각운동통합기술은 평가하지 않음.<br>\n <br>\n");
} else {

  if (VMI_PERCENTILE <= 16 || VMI_PERCENTILE == "<1"){
    var VMI_TEST = "시각운동통합기술";
    document.write("● 시각운동통합기술이 "+'<span style="font-weight: bold; color: red;">'+VMI_PERCENTILE+"%"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+" 매우 저조"+'</span>'+"합니다.<br>\n");
    document.write(" 시각운동통합기술에 이상이 있는 경우 칠판글씨를 보고 따라 쓰는데 어려움이 있고, 글씨 쓰기가 지연되거나 실수가 많을 수 있습니다. 글씨를 거꾸로 쓰거나 바꾸어 쓸수 있고 글자 간격이나 정렬상태가 좋지 않습니다. 글씨를 쓸때 공책을 지나치게 회전하거나 연필잡는 것이 서투릅니다.<br>\n <br>\n");
} else if (VMI_PERCENTILE <= 50) {
  var VMI_TEST = "시각운동통합기술";
    document.write("● 시각운동통합기술이 "+'<span style="font-weight: bold; color: blue;">'+VMI_PERCENTILE+"%"+'</span>'+"로 정상범위이나"+'<span style="font-weight: bold; color: blue;">'+" 다소 부족"+'</span>'+"합니다.<br>\n");
    document.write(" 시각운동통합기술에 이상이 있는 경우 칠판글씨를 보고 따라 쓰는데 어려움이 있고, 글씨 쓰기가 지연되거나 실수가 많을 수 있습니다. 글씨를 거꾸로 쓰거나 바꾸어 쓸수 있고 글자 간격이나 정렬상태가 좋지 않습니다. 글씨를 쓸때 공책을 지나치게 회전하거나 연필잡는 것이 서투릅니다.<br>\n <br>\n");
} else if (VMI_PERCENTILE <= 84) {
  var VMI_TEST = "";
    document.write("● 시각운동통합기술이 "+VMI_PERCENTILE+"% 로 정상범위로 양호합니다.<br>\n <br>\n");
} else if (VMI_PERCENTILE > 84) {
  var VMI_TEST = "";
    document.write("● 시각운동통합기술이 "+VMI_PERCENTILE+"% 로 우수합니다.<br>\n <br>\n");
  }
}


// DEM 종합평가
if ((VER_Adj_time === "평가하지 않음") || (HOR_Adj_time === "평가하지 않음")){
  var DEM_TEST = "";
  document.write("● 말하는 속도의 자동성기술은 평가하지 않음.<br>\n <br>\n");
} else {

  if (DEM_RATIO_PER <= 15 || DEM_RATIO_PER == '<1' ){
    if (DEM_VER_PER <=15 ||  DEM_VER_PER == '<1' ) {
      if (DEM_HOR_PER <= 15 || DEM_HOR_PER == '<1')
      var DEM_TEST = "말하는 속도의 자동성기술";
      document.write("● 말하는 속도의 자동성기술이 "+'<span style="font-weight: bold; color: red;">'+"안구운동이상(II유형)과 자동성이상(III유형)이 동반된 유형"+'</span>'+"입니다.<br>\n");
      document.write(" 이러한 경우 책을 유창하게 읽는데 어려움이 있고 단어 인식이 불완전해 독해력이 떨어집니다. 책을 읽을 때 읽던 위치를 놓치거나 줄을 건너뛰기도 하며 읽던 위치를 놓치지 않기 위해 손가락을 사용하기도 합니다. <br>\n <br>\n");
    } else {
      var DEM_TEST = "말하는 속도의 자동성기술";
      document.write("● 말하는 속도의 자동성기술이 "+'<span style="font-weight: bold; color: red;">'+"안구운동이상을 나타내는 유형"+'</span>'+"입니다.<br>\n");
      document.write(" 이러한 경우 홱보기도 불량할 수 있어, 읽은 내용의 이해를 위해 반복적으로 읽어야 하고, 책을 읽을 때 머리나 몸을 과다하게 움직이기도 합니다. 읽던 위치를 놓치지 않기 위해 손가락을 사용하기도 하며 주의집중 시간이 짧습니다. 글자가 움직여 보이거나 섞여져 보이기도합니다. 물체가 두 개로 보이거나 어지러움, 메스꺼움과 같은 증상을 동반하기도 합니다.<br>\n <br>\n");
    }
  }else {
    var DEM_TEST = "";
    if (DEM_VER_PER >=15 && DEM_HOR_PER >= 15){
      document.write("● 말하는 속도의 자동성기술과 안구운동기능이 정상인 유형입니다.<br>\n <br>\n");
    } else {
      var DEM_TEST = "말하는 속도의 자동성기술";
      document.write("● 말하는 속도의 자동성기술이 "+'<span style="font-weight: bold; color: red;">'+"자동성에 문제가 있는 유형"+'</span>'+"입니다.<br>\n");
      document.write(" 이러한 경우 책을 유창하게 읽는데 어려움이 있고 단어 인식이 불완전해 독해력이 떨어집니다.<br>\n <br>\n");
    }
  }
}

// WACS 종합평가
if ((WACS_RAW_T1 === "평가하지 않음") || (WACS_RAW_T2 === "평가하지 않음") || (WACS_RAW_T3 === "평가하지 않음") || (WACS_RAW_T4 === "평가하지 않음")) {
  var WACS_TEST = "";
  document.write("● 시각공간방향기술은 평가하지 않음.<br>\n <br>\n");
} else {

  if (WACS_T5_PER <= 16 || WACS_T5_PER == "<1"){
    var WACS_TEST = "시각공간방향기술";
    document.write("● 시각공간방향기술이 "+'<span style="font-weight: bold; color: red;">'+WACS_T5_PER+"%"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+" 매우 저조"+'</span>'+"합니다.<br>\n");
    document.write(" 이러한 경우 대근육 운동기술의 발달이 지연되고, 좌우 신체협응이나 신체균형, 구기종목 기술이 떨어집니다. 글자를 쓰거나 읽을때 거꾸로 하는 경향이 많고 신체중심선을 가로지르는 활동이 여렵습니다.<br>\n <br>\n");
} else if (WACS_T5_PER <= 50) {
  var WACS_TEST = "시각공간방향기술";
    document.write("● 시각운동통합기술이 "+'<span style="font-weight: bold; color: blue;">'+WACS_T5_PER+"%"+'</span>'+"로 정상범위이나"+'<span style="font-weight: bold; color: blue;">'+" 다소 부족"+'</span>'+"합니다.<br>\n");
    document.write(" 이러한 경우 대근육 운동기술의 발달이 지연되고, 좌우 신체협응이나 신체균형, 구기종목 기술이 떨어집니다. 글자를 쓰거나 읽을때 거꾸로 하는 경향이 많고 신체중심선을 가로지르는 활동이 여렵습니다.<br>\n <br>\n");
} else if (WACS_T5_PER <= 84) {
  var WACS_TEST = "";
    document.write("● 시각운동통합기술이 "+WACS_T5_PER+"% 로 정상범위로 양호합니다.<br>\n <br>\n");
} else if (WACS_T5_PER > 84) {
  var WACS_TEST = "";
    document.write("● 시각운동통합기술이 "+WACS_T5_PER+"% 로 우수합니다.<br>\n <br>\n");
  }
}


// △,sph 보정값
if (CTest_D == "exo" || CTest_D == "eso" || CTest_N == "exo" || CTest_N == "eso" || D_BIBO !== "" || N_BIBO !== "" ){
 if (D_BIBO == 'BI') {
 if (N_BIBO == 'BI') {
 var ACA = ((PD/10)+((-Nectopic)-(-Dectopic))/2.5);
 var Nprism = parseInt((((2*Nectopic)-(NConver2))/3),2);
 var Dprism = parseInt((((2*Dectopic)-(DConver2))/3),2);
 var Sph_cha = parseInt(((((2*Nectopic)-(NConver2))/3)/((PD/10)+((-Nectopic)-(-Dectopic))/2.5)),2);
 } else if (N_BIBO == 'BO') {
 var ACA = ((PD/10)+((Nectopic)-(-Dectopic))/2.5);
     var Nprism = parseInt(((2*Nectopic)-(NDever2))/3);
   var Dprism = parseInt(((2*Dectopic)-(DConver2))/3);
     var Sph_cha = parseInt((((2*Nectopic)-(NDever2))/3)/(($PD/10)+((Nectopic)-(-Dectopic))/2.5));
 }
 } else if (D_BIBO == 'BO'){
     if(N_BIBO == 'BO') {
       var ACA = ((PD/10)+((Nectopic)-(Dectopic))/2.5);
       var Nprism = parseInt(((2*Nectopic)-(NDever2))/3);
     var Dprism = parseInt(((2*Dectopic)-(DDever2))/3);
       var Sph_cha = parseInt((((2*Nectopic)-(NDever2))/3)/(($PD/10)+(Nectopic-Dectopic)/2.5));
     } else if (N_BIBO == 'BI') {
       var ACA = ((PD/10)+((Nectopic)-(-Dectopic))/2.5);
       var Nprism = parseInt(((2*Nectopic)-(NConver2))/3);
       var Dprism = parseInt(((2*Dectopic)-(DConver2))/3);
       var Sph_cha = parseInt((((2*Nectopic)-(NConver2))/3)/(($PD/10)+((-Nectopic)-(Dectopic))/2.5));
       }
   }
}


  // 해결방법
  if (Eva_result1 !== false || Eva_result2 !== false || Eva_result3 !== false ) {

    if (Eva_result1 === "눈모임부족") {
      document.write("♣ 눈모임부족의 관리계획 및 처치 순서는 <br>\n 1.굴절이상교정<br>\n 2.시기능훈련<br>\n 3.렌즈 또는 프리즘 : 프리즘은 시기능훈련이 시간적, 경제적으로 어려운 경우에 차선책으로 선택하는데, 편위가 크면서 프리즘 적응현상이 없는 경우에만 효과적입니다.<br>\n 4.AC/A비 : 1/"+ACA+"<br>\n 5.원거리와 근거리의 프리즘보정값 : "+Dprism+" / "+Nprism+"<br>\n 6.구면굴절력 변화값 : "+Sph_cha+"D가 추천됨."+"<br>\n <br>\n");
    } else if (Eva_result1 === "눈모임과다") {
      document.write("♣ 눈모임과다의 관리계획 및 처치 순서는 <br>\n 1.원시일 경우 반드시 굴절이상교정 <br>\n 2.근거리 플러스렌즈 가입도사용 :"+(((2*Nectopic)-(NDever2))/3)/((PD/10)+((Nectopic)-(Dectopic))/2.5)+"<br>\n 3.시기능훈련<br>\n 4.프리즘 : 프리즘은 시기능훈련이 시간적, 경제적으로 어려운 경우에 차선책으로 선택합니다.<br>\n <br>\n");
    } else if (Eva_result1 === "눈벌림부족") {
      document.write("♣ 눈벌림부족의 관리계획 및 처치 순서는 <br>\n 1.굴절이상교정 <br>\n 2.시기능훈련 : 교정효과가 높다. <br>\n 3.원용프리즘보정 <br>\n * 뇌종양이나 신경손상으로 인한 후천성 눈벌림부족과 구분해야함. <br>\n - 후천성 눈벌림부족 : 주로 어린나이에 갑작스럽게 발생하고, 뇌종양이나 신경손상이 원인입니다. <br>\n - 기능성 눈벌림부족 : 오래전부터 지속적인 증상이 있습니다.<br>\n <br>\n");
    } else if (Eva_result1 === "눈벌림과다") {
      document.write("♣ 눈벌림과다의 관리계획 및 처치 순서는 <br>\n 1.굴절이상교정 <br>\n 2.시기능훈련 : 원거리와 근거리 모두 교정이 잘됨. <br>\n 3.의사소통이 어려운 경우, 수동적 처방 : 차폐, 마이너스렌즈교정, BI프리즘 <br>\n 4.수술을 고려할 수 있습니다.<br>\n <br>\n");
    } else if (Eva_result1 === "잠복성외편위(기본형)") {
      document.write("♣ 잠복성외편위(기본형)의 관리계획 및 처치 순서는 <br>\n 1.굴절이상교정 <br>\n 2.시기능훈련 : 훈련은 일반적으로 근거리에서 시작하여 원거리로 이동합니다. <br>\n 3.프리즘 : BI프리즘은 시기능훈련이 시간적, 경제적으로 어려운 경우에 차선책으로 선택하는데, 편위가 크면서 프리즘 적응현상이 없는 경우에만 효과적입니다.<br>\n <br>\n");
    } else if (Eva_result1 === "잠복성내편위(기본형)") {
      document.write("♣ 잠복성내편위(기본형)의 관리계획 및 처치 순서는 <br>\n 1.굴절이상교정 <br>\n 2.프리즘 : 증상을 완화시키는 최소한의 프리즘사용 <br>\n 3.시기능훈련을 고려할 수 있습니다.<br>\n <br>\n");
    } else if (Eva_result1 === "융합버전스이상") {
      document.write("♣ 융합버전스이상의 관리계획 및 처치 순서는 <br>\n 1.굴절이상교정 <br>\n 2.시기능훈련을 고려할 수 있습니다.<br>\n <br>\n");
    } else if (Eva_result1 === "수직사위") {
      document.write("♣ 수직사위의 관리계획 및 처치 순서는 <br>\n 1.굴절이상교정 <br>\n 2.프리즘 <br>\n 3.시기능훈련을 고려할 수 있습니다.<br>\n <br>\n");
    } else if (Eva_result1 === "유아_항상성내편위") {
      document.write("♣ 유아_항상성내편위의 관리계획 및 처치 순서는 <br>\n 1.조절마비 굴절검사 : 조절요인의 확인을 위해 실시하며, 대부분의 경우 원시를 교정하더라도 항상성내편위가 감소하지 않습니다. <br>\n 2.시기능훈련 : 초기에는 차폐치료를 하고 안경을 사용할 수 있는 나이에는 양비측차폐화 시기능훈련을 병행합니다. <br>\n 3.수술 : 편위각이 크고 비조절성인 경우 수술을 고려할 수 있습니다.<br>\n <br>\n");
    } else if (Eva_result1 === "조절성_항상성내편위") {
      document.write("♣ 조절성_항상성내편위의 관리계획 및 처치 순서는 <br>\n 1.굴절이상교정 : 원시교정 안경으로 원근거리의 항상성내편위를 정렬할 수 있는데 원거리는 정렬되지만 근거리에서 남아있다면 가입도렌즈를 처방합니다. <br>\n 2.시기능훈련  <br>\n 3.프리즘   <br>\n 4. 수술 <br>\n <br>\n");
    } else if (Eva_result1 === "비조절성_항상성내편위") {
      document.write("♣ 비조절성_항상성내편위의 관리계획 및 처치 순서는 <br>\n 1.굴절이상교정 <br>\n 2.시기능훈련 : 훈련은 일반적으로 근거리에서 시작하여 원거리로 이동합니다. <br>\n 3.프리즘 : BO프리즘은 시기능훈련이 시간적, 경제적으로 어려운 경우에 차선책으로 선택하는데, 편위가 크면서 프리즘 적응현상이 없는 경우에만 효과적입니다. <br>\n 4.수술<br>\n <br>\n");
    } else if (Eva_result1 === "급성_항상성내편위") {
      document.write("♣ 급성_항상성내편위의 관리계획 및 처치 순서는 <br>\n 1.정밀검사 <br>\n 2.시기능훈련 : 훈련은 일반적으로 근거리에서 시작하여 원거리로 이동합니다. <br>\n 3.프리즘 : BO프리즘은 시기능훈련이 시간적, 경제적으로 어려운 경우에 차선책으로 선택하는데, 편위가 크면서 프리즘 적응현상이 없는 경우에만 효과적입니다. <br>\n 4.수술<br>\n <br>\n");
    } else if (Eva_result1 === "물리적_항상성내편위") {
      document.write("♣ 물리적_항상성내편위의 관리계획 및 처치 순서는 <br>\n 1.정밀검사 : 질병에 의해 유발되는 마비성내편위와 구별하기 위해 즉시 받아야합니다. <br>\n 2.시기능훈련  <br>\n 3.프리즘 : 고개돌림이 작을 경우 고려할 수 있습니다.  <br>\n 4.수술 : 고개돌림이 클경우 미용목적으로 수술을 고려할 수 있지만, 수술이 항상성내편위를 향상시키지는 못합니다.<br>\n <br>\n");
    } else if (Eva_result1 === "감각성_항상성내편위") {
      document.write("♣ 감각성_항상성내편위의 교정 및 관리는 <br>\n - 선천성 단안 백내장으로 인해 감각서 항상성내편위가 발생한 경우 : 생후 2개월 이내에 백내장을 제거해야 합니다. <br>\n - 백내자을 제거한 후, 콘택트렌즈 처방이나 안내렌즈 삽입, 약시제거를 위해 차폐치료를 할 수 있습니다.  <br>\n - 융합력이 있다면 프리즘을 처방하거나, 항상성내편위가 크다면 수술을 고려할 수 있습니다.  <br>\n - 모든 치료법을 사용해도 양안시 회복을 기대하기 어렵습니다. <br>\n <br>\n");
    } else if (Eva_result1 === "속발성_항상성내편위") {
      document.write("♣ 속발성_항상성내편위의 교정 및 관리는 <br>\n - 어린이의 경우 약시로 진행하거나 양안시기능 상실을 방지하기 위하여 렌즈와 프리즘, 시기능훈련을 이용하여 적극적으로 교정해야 합니다. <br>\n - 성인의 경우, 흔히 복시를 호소하며 렌즈와 프리즘, 시기능훈련을 이용하여 적극적인 교정이 요구됩니다. <br>\n <br>\n");
    } else if (Eva_result1 === "미세_항상성내편위") {
      document.write("♣ 미세_항상성내편위의 교정 및 관리는 <br>\n - 미세_항상성내편위는 완전히 적응된 내편위로 거의 증상을 호소하지 않습니다. <br>\n - 치료는 굴절이상 교정과 약시가 있다면 약시를 교정하는 것입니다.  <br>\n - 시기능훈련과 프리즘을 사용하여 두 눈의 중심와 융합을 회복하여 고도의 입체시가 가능하도록 할 수 있습니다. <br>\n <br>\n");
    } else if (Eva_result1 === "항상성내편위") {
      document.write("♣ 항상성내편위의 교정 및 관리는  <br>\n 1.굴절이상교정 <br>\n 2.시기능훈련 : 훈련은 일반적으로 근거리에서 시작하여 원거리로 이동합니다. <br>\n 3.프리즘 : BO프리즘은 시기능훈련이 시간적, 경제적으로 어려운 경우에 차선책으로 선택하는데, 편위가 크면서 프리즘 적응현상이 없는 경우에만 효과적입니다. <br>\n 4.수술을 고려할수 있습니다. <br>\n <br>\n");
    } else if (Eva_result1 === "유아_항상성외편위") {
      document.write("♣ 유아_항상성외편위의 교정 및 관리는 <br>\n - 외편위가 크고 항상성이기 때문에 수술을 고려합니다. <br>\n - 융합잠재성이 낮은 경우, 프리즘교정은 도움이 되지 않습니다.  <br>\n - 유아_항상성외편위는 유아_항상성내편위보다 융합을 유지할 확률이 낮은 편입니다. <br>\n <br>\n");
    } else if (Eva_result1 === "간헐성_외편위(기본형)") {
      document.write("♣ 간헐성_외편위(기본형)의 교정 및 관리는 <br>\n - 마이너스렌즈치료 : 근시와 부동시, 난시는 완전교정하고, 원시는 어린이 환자의 경우 저교정합니다. 초기 처방렌즈는 주로 2D이고 융합이 유지되는 상태를 평가하여 마이너스 굴절력을 점차 줄여나갑니다. 마이너스렌즈 과교정 기법을 사용한 치료 성공율은 약70%이고, 시기능훈련과 병행하면 치료효과가 상승합니다. <br>\n - 프리즘 치료 : 간헐성_외편위의 프리즘 치료 성공률은 약28%로 시기능훈련과 병행하기도 합니다.  <br>\n - 시기능훈련 : 융합범위와 융합용이 증진, 복시인지, 바이오피드백등 다양한 시기능훈련을 통해 양안시를 회복시키는 방법입니다. 성공률은 약59%입니다.  <br>\n -수술치료 : 다른 치료법을 모두 시도한 후에도 간헐성_외편위가 지속되거나 외편위각이 증가할 경우 수술을 고려할 수 있습니다. 4세 이전에 수술을 권장하지 않는데 이유는 약시와 입체시 상실을 동반하는 지속되는 속발성_항상성내편위의 발생위험이 크기 때문입니다.  <br>\n -수술후 재발률이 높은 편인데 약5명당 1명이 재수술을 받고 있고, 성공률은 약 46%입니다. <br>\n <br>\n");
    } else if (Eva_result1 === "간헐성_외편위(눈모임부족형)") {
      document.write("♣ 간헐성_외편위(눈모임부족형)의 교정 및 관리는 <br>\n - 마이너스렌즈치료 : 근시와 부동시, 난시는 완전교정하고, 원시는 어린이 환자의 경우 저교정합니다. 초기 처방렌즈는 주로 2D이고 융합이 유지되는 상태를 평가하여 마이너스 굴절력을 점차 줄여나갑니다. 마이너스렌즈 과교정 기법을 사용한 치료 성공율은 약70%이고, 시기능훈련과 병행하면 치료효과가 상승합니다. <br>\n - 프리즘 치료 : 간헐성_외편위의 프리즘 치료 성공률은 약28%로 시기능훈련과 병행하기도 합니다.  <br>\n - 시기능훈련 : 융합범위와 융합용이 증진, 복시인지, 바이오피드백등 다양한 시기능훈련을 통해 양안시를 회복시키는 방법입니다. 성공률은 약59%입니다.  <br>\n -수술치료 : 다른 치료법을 모두 시도한 후에도 간헐성_외편위가 지속되거나 외편위각이 증가할 경우 수술을 고려할 수 있습니다. 4세 이전에 수술을 권장하지 않는데 이유는 약시와 입체시 상실을 동반하는 지속되는 속발성_항상성내편위의 발생위험이 크기 때문입니다.  <br>\n -수술후 재발률이 높은 편인데 약5명당 1명이 재수술을 받고 있고, 성공률은 약 46%입니다. <br>\n <br>\n");
    } else if (Eva_result1 === "간헐성_외편위(눈벌림과다형)") {
      document.write("♣ 간헐성_외편위(눈벌림과다형)의 교정 및 관리는 <br>\n - 마이너스렌즈치료 : 근시와 부동시, 난시는 완전교정하고, 원시는 어린이 환자의 경우 저교정합니다. 초기 처방렌즈는 주로 2D이고 융합이 유지되는 상태를 평가하여 마이너스 굴절력을 점차 줄여나갑니다. 마이너스렌즈 과교정 기법을 사용한 치료 성공율은 약70%이고, 시기능훈련과 병행하면 치료효과가 상승합니다. <br>\n - 프리즘 치료 : 간헐성_외편위의 프리즘 치료 성공률은 약28%로 시기능훈련과 병행하기도 합니다.  <br>\n - 시기능훈련 : 융합범위와 융합용이 증진, 복시인지, 바이오피드백등 다양한 시기능훈련을 통해 양안시를 회복시키는 방법입니다. 성공률은 약59%입니다.  <br>\n -수술치료 : 다른 치료법을 모두 시도한 후에도 간헐성_외편위가 지속되거나 외편위각이 증가할 경우 수술을 고려할 수 있습니다. 4세 이전에 수술을 권장하지 않는데 이유는 약시와 입체시 상실을 동반하는 지속되는 속발성_항상성내편위의 발생위험이 크기 때문입니다.  <br>\n -수술후 재발률이 높은 편인데 약5명당 1명이 재수술을 받고 있고, 성공률은 약 46%입니다. <br>\n <br>\n");
    } else if (Eva_result1 === "급성_항상성외편위") {
      document.write("♣ 급성_항상성외편위의 관리계획 및 처치 순서는 <br>\n 1.정밀검사 <br>\n 2.프리즘 : 복시를 제거하고, 양안시를 회복하기 위하여 중등도 이하의 편위를 교정하기 위하여 프리즘을 처방할 수 있습니다. <br>\n 3.시기능훈련 : 융합버전스 범위와 융합용이를 증진시키기 위하여 시기능훈련을 처방할 수 있습니다. <br>\n 4.수술 : 항상성외편위가 20 이상이고 미용적으로 좋지 않은 경우 수술을 고려할 수 있습니다.  <br>\n - 외편위의 원인이 혈관성이거나 당뇨와 같은 허혈성인 경우 예후가 양호하고, 외상과 관련된 경우 예후가 좋지 않습니다. <br>\n <br>\n");
    } else if (Eva_result1 === "물리적_항상성외편위") {
      document.write("♣ 물리적_항상성외편위의 교정 및 관리는 <br>\n 1.정밀검사 : 질병에 의해 유발되는 마비성외편위와 구별하기 위해 즉시 받아야합니다. <br>\n 2.시기능훈련  <br>\n 3.프리즘 : 고개돌림이 작을 경우 고려할 수 있습니다.  <br>\n 4.수술 : 고개돌림이 클경우 미용목적으로 수술을 고려할 수 있지만, 수술이 항상성외편위를 향상시키지는 못합니다.<br>\n <br>\n");
    } else if (Eva_result1 === "감각성_항상성외편위") {
      document.write("♣ 감각성_항상성외편위의 교정 및 관리는 <br>\n - 선천성 단안 백내장으로 인해 감각성_항상성외편위가 발생한 경우 : 생후 2개월 이내에 백내장을 제거해야 합니다. <br>\n - 백내장을 제거한 후, 콘택트렌즈 처방이나 안내렌즈 삽입, 약시제거를 위해 차폐치료를 할 수 있습니다.  <br>\n - 융합력이 있다면 프리즘을 처방하거나, 외편위가 크다면 수술을 고려할 수 있습니다.  <br>\n - 선천성_감각성_항상성외편위는 모든 치료법을 사용해도 양안시 회복을 기대하기 어렵습니다. <br>\n <br>\n");
    } else if (Eva_result1 === "속발성_항상성외편위") {
      document.write("♣ 속발성_항상성외편위의 교정 및 관리는 <br>\n - 광학적으로 유발된 속발성 외편위는 어린이 환자의 경우, 원시굴절력을 감소시켜 교정할 수 있습니다. <br>\n - 성인의 경우, 원시굴절력을 감소시키면 조절피로를 호소할 수 있어 프리즘이나 시기능훈련을 고려할 수 있습니다. <br>\n <br>\n");
    } else if (Eva_result1 === "미세_항상성외편위") {
      document.write("♣ 미세_항상성외편위의 교정 및 관리는 <br>\n - 미세_항상성외편위는 완전히 적응된 외편위로 거의 증상을 호소하지 않습니다. <br>\n - 치료는 굴절이상 교정과 약시가 있다면 약시를 교정하는 것입니다.  <br>\n - 시기능훈련과 프리즘을 사용하여 두 눈의 중심와 융합을 회복하여 고도의 입체시가 가능하도록 할 수 있습니다. <br>\n <br>\n");
    } else if (Eva_result1 === "항상성외편위") {
      document.write("♣ 항상성외편위의 교정 및 관리는 <br>\n - 마이너스렌즈치료 : 근시와 부동시, 난시는 완전교정하고, 원시는 어린이 환자의 경우 저교정합니다. 초기 처방렌즈는 주로 2D이고 융합이 유지되는 상태를 평가하여 마이너스 굴절력을 점차 줄여나갑니다. 마이너스렌즈 과교정 기법을 사용한 치료 성공율은 약70%이고, 시기능훈련과 병행하면 치료효과가 상승합니다. <br>\n - 프리즘 치료 : 간헐성_외편위의 프리즘 치료 성공률은 약28%로 시기능훈련과 병행하기도 합니다.  <br>\n - 시기능훈련 : 융합범위와 융합용이 증진, 복시인지, 바이오피드백등 다양한 시기능훈련을 통해 양안시를 회복시키는 방법입니다. 성공률은 약59%입니다.  <br>\n -수술치료 : 다른 치료법을 모두 시도한 후에도 간헐성_외편위가 지속되거나 외편위각이 증가할 경우 수술을 고려할 수 있습니다. 4세 이전에 수술을 권장하지 않는데 이유는 약시와 입체시 상실을 동반하는 지속되는 속발성_항상성내편위의 발생위험이 크기 때문입니다.  <br>\n -수술후 재발률이 높은 편인데 약5명당 1명이 재수술을 받고 있고, 성공률은 약 46%입니다. <br>\n <br>\n");
    }

    if (Eva_result2 === "조절부족/조절지속능력부족") {
      document.write("♣ 조절부족 / 조절지속능력부족의 관리계획 및 처치 순서는  <br>\n 1.굴절이상 교정 <br>\n 2.시기능훈련 <br>\n 3.플러스렌즈 가입도를 고려할 수 있습니다.<br>\n <br>\n");
    } else if (Eva_result2 === "조절과다(조절경련)") {
      document.write("♣ 조절과다(조절경련)의 관리계획 및 처치 순서는  <br>\n 1.굴절이상 교정 <br>\n 2.플러스렌즈 가입도 + 시기능훈련 <br>\n 3.조절마비제를 고려할 수 있습니다.<br>\n <br>\n");
    } else if (Eva_result2 === "조절용이부족") {
      document.write("♣ 조절용이부족의 관리계획 및 처치 순서는 <br>\n 1.굴절이상 교정  <br>\n 2.시기능훈련 <br>\n 3.플러스렌즈를 고려할 수 있습니다.<br>\n <br>\n");
    }

    if (Eva_result3 === "안구운동이상") {
      document.write("♣ 안구운동이상의 관리계획 및 처치 순서는 <br>\n 1.굴절이상 교정  <br>\n 2.시기능훈련 <br>\n 3.플러스렌즈 가입도(조절이상이나 버전스이상과 동반됨)를 고려할 수 있습니다.<br>\n <br>\n");
    }
  }

  if (Eva_result1 === "") {
    var EVA_TEST_1 = "";
  }
  if (Eva_result2 === "") {
    var EVA_TEST_2 = "";
  }
  if (Eva_result3 === "") {
    var EVA_TEST_3 = "";
  }



  if (Eva_result1 !== ""  || Eva_result2 !== "" || Eva_result3 !== "" || TVPS4_TEST !== "" || VMI_TEST !== "" || DEM_TEST !== "" || WACS_TEST !== "" ){
    document.write("♣ "+Cus_Name+"님의 "+EVA_TEST_1+" "+EVA_TEST_2+" "+EVA_TEST_3+" "+TVPS4_TEST+" "+VMI_TEST+" "+DEM_TEST+" "+WACS_TEST+" 을 발달시키기 위하여 시기능훈련이 권장됩니다.<br>\n <br>\n");
  } else {
    document.write("♣ "+Cus_Name+"님의 시기능발달평가결과 특이 사항은 없으며, 정기적인 평가는 권장됩니다.");
  }
