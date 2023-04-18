// 생년월일을 나이로 환산
    function age() {

      const testDate = new Date()
      const test_y = testDate.getFullYear();
      const test_m = testDate.getMonth() +1 ;
      const test_d = testDate.getDate();

      const birthDate = new Date(document.getElementById('Birth_y').value, document.getElementById('Birth_m').value, document.getElementById('Birth_d').value);

      document.getElementById('test_y').innerHTML = test_y;
      document.getElementById('test_m').innerHTML = test_m;
      document.getElementById('test_d').innerHTML = test_d;
      document.getElementById('Birth_y_test').innerHTML = document.getElementById('Birth_y').value;
      document.getElementById('Birth_m_test').innerHTML = document.getElementById('Birth_m').value;
      document.getElementById('Birth_d_test').innerHTML = document.getElementById('Birth_d').value;

      if (test_m > birthDate.getMonth()) {
        if (test_d > birthDate.getDate()) {
          document.getElementById('Age_y').innerText = Number(test_y) - Number(birthDate.getFullYear());
          document.getElementById('Age_m').innerHTML = test_m - birthDate.getMonth();
          document.getElementById('ChAge_y_test').innerText = test_y - birthDate.getFullYear() + "세";
          document.getElementById('ChAge_m_test').innerText = test_m - birthDate.getMonth() + "개월";
        } else {
          document.getElementById('Age_y').innerHTML = Number(test_y) - Number(birthDate.getFullYear());
          document.getElementById('Age_m').innerHTML = (test_m -1) - birthDate.getMonth();
          document.getElementById('ChAge_y_test').innerText = test_y - birthDate.getFullYear() + "세";
          document.getElementById('ChAge_m_test').innerText = (test_m -1) - birthDate.getMonth() + "개월";
        }
      } else {
        if (test_d > birthDate.getDate()) {
          document.getElementById('Age_y').innerHTML = (test_y - (birthDate.getFullYear()) - 1);
          document.getElementById('Age_m').innerHTML = (test_m + 12) - birthDate.getMonth();
          document.getElementById('ChAge_y_test').innerText = (test_y - (birthDate.getFullYear()) - 1) + "세";
          document.getElementById('ChAge_m_test').innerText = (test_m + 12) - birthDate.getMonth() + "개월";
        } else {
          document.getElementById('Age_y').innerHTML = (test_y - (birthDate.getFullYear()) - 1);
          document.getElementById('Age_m').innerHTML = (test_m + 11) - birthDate.getMonth();
          document.getElementById('ChAge_y_test').innerText = (test_y - (birthDate.getFullYear()) - 1) + "세";
          document.getElementById('ChAge_m_test').innerText = (test_m + 11) - birthDate.getMonth() + "개월";
        }
      }
      var Age = parseInt(document.getElementById('Age_y').innerHTML, 10);
      var Accomage = 15 - (0.25 * Age);

      document.getElementById('accom_stand').innerText = Age + "세 최소조절력" + Accomage + "D";
      if (Age <= 6) {
        document.getElementById('AccomRev').innerText = Age + "세 조절용이\n 단안 >3cpm\n 양안 >0.5cpm ";
      } else if (Age > 6 && Age <= 7) {
        document.getElementById('AccomRev').innerText = Age + "세 조절용이\n 단안 >4.5cpm\n 양안 >1cpm ";
      } else if (Age > 7 && Age <= 12) {
        document.getElementById('AccomRev').innerText = Age + "세 조절용이\n 단안 >4.5cpm\n 양안 >2.5cpm ";
      } else if (Age > 12 && Age < 38) {
        document.getElementById('AccomRev').innerText = Age + "세 조절용이\n 단안 >6cpm\n 양안 >4.5cpm ";
      } else {
        document.getElementById('AccomRev').innerText = "38세 이후는 수정체경화로 측정하지 않음.";
      }
    }


// 우위안
  function Maineye(event) {
    const str_Maineye = event.target.value;
    if (str_Maineye == "right") {
      document.getElementById('result_MainEye').innerText = "우안"
    } else if (str_Maineye == "left") {
      document.getElementById('result_MainEye').innerText = "좌안"
    }
  }


  // 동공간거리
  function printPD() {
    const PD = document.getElementById('PD').value;
    document.getElementById("result_PD").innerText = PD;
  }

  // 원거리 나안/교정시력
  function DVision() {
    const sel_glass1 = document.getElementById('sel_glass1').value;
    const RDVision = document.getElementById('RDVision').value;
    const LDVision = document.getElementById('LDVision').value;
    const OUDVision = document.getElementById('OUDVision').value;
    if (RDVision < 0.7 || LDVision < 0.7 || OUDVision < 0.7) {
      document.getElementById('result_DVision').innerText = "불량";
    } else if (RDVision >= 1.0 && LDVision >= 1.0 && OUDVision >= 1.0) {
      document.getElementById('result_DVision').innerText = "양호";
    } else {
      document.getElementById('result_DVision').innerText = "정기관찰요망";
    }
  }

  // 근거리 나안/교정시력
  function NVision() {
    const sel_glass1 = document.getElementById('sel_glass1').value;
    const RNVision = document.getElementById('RNVision').value;
    const LNVision = document.getElementById('LNVision').value;
    const OUNVision = document.getElementById('OUNVision').value;

    if (RNVision < 0.7 || LNVision < 0.7 || OUNVision < 0.7) {
      document.getElementById('result_NVision').innerText = "불량";
    } else if (RNVision >= 1.0 && LNVision >= 1.0 && OUNVision >= 1.0) {
      document.getElementById('result_NVision').innerText = "양호";
    } else {
      document.getElementById('result_NVision').innerText = "정기관찰요망";
    }
  }

  // 원거리교정시력_새로운굴절력
  function DVision_new() {
    const RDVision_new = document.getElementById('RDVision_new').value;
    const LDVision_new = document.getElementById('LDVision_new').value;
    const OUDVision_new = document.getElementById('OUDVision_new').value;
    if (RDVision_new < 0.7 || LDVision_new < 0.7 || OUDVision_new < 0.7) {
      document.getElementById('result_DVision_new').innerText = "불량";
    } else if (RDVision_new >= 1.0 && LDVision_new >= 1.0 && OUDVision_new >= 1.0) {
      document.getElementById('result_DVision_new').innerText = "양호";
    } else {
      document.getElementById('result_DVision_new').innerText = "정기관찰요망";
    }
  }

  // 근거리교정시력_새로운굴절력
  function NVision_new() {
    const RNVision_new = document.getElementById('RNVision_new').value;
    const LNVision_new = document.getElementById('LNVision_new').value;
    const OUNVision_new = document.getElementById('OUNVision_new').value;
    if (RNVision_new < 0.7 || LNVision_new < 0.7 || OUNVision_new < 0.7) {
      document.getElementById('result_NVision_new').innerText = "불량";
    } else if (RNVision_new >= 1.0 && LNVision_new >= 1.0 && OUNVision_new >= 1.0) {
      document.getElementById('result_NVision_new').innerText = "양호";
    } else {
      document.getElementById('result_NVision_new').innerText = "정기관찰요망";
    }
  }

  //균형검사
  function sel_Balance(event) {
    const str_Balance = event.value;
    if (str_Balance == "good") {
      document.getElementById('result_Balance').innerText = "양호";
    } else if (str_Balance == "bad") {
      document.getElementById('result_Balance').innerText = "불량";
    } else if (str_Balance == "none") {
      document.getElementById('result_Balance').innerText = "평가하지않음";
    }
  }

  // W4D 원거리
  function Change_D_W4d(event) {
    const str_Dw4d = event.value;
    if (str_Dw4d == "4") {
      document.getElementById('result_D_W4D').innerText = "양호";
    } else if (str_Dw4d == "3") {
      document.getElementById('result_D_W4D').innerText = "불량";
    } else if (str_Dw4d == "2") {
      document.getElementById('result_D_W4D').innerText = "불량";
    } else if (str_Dw4d == "51") {
      document.getElementById('result_D_W4D').innerText = "불량";
    } else if (str_Dw4d == "52") {
      document.getElementById('result_D_W4D').innerText = "불량";
    } else if (str_Dw4d == "53") {
      document.getElementById('result_D_W4D').innerText = "불량";
    } else if (str_Dw4d == "54") {
      document.getElementById('result_D_W4D').innerText = "불량";
    } else if (str_Dw4d == "55") {
      document.getElementById('result_D_W4D').innerText = "불량";
    } else if (str_Dw4d == "none") {
      document.getElementById('result_D_W4D').innerText = "관찰요망";
    }
  }

  // W4D 근거리
  function Change_N_W4d(event) {
    const str_Nw4d = event.value;
    if (str_Nw4d == "4") {
      document.getElementById('result_N_W4D').innerText = "양호";
    } else if (str_Nw4d == "3") {
      document.getElementById('result_N_W4D').innerText = "불량";
    } else if (str_Nw4d == "2") {
      document.getElementById('result_N_W4D').innerText = "불량";
    } else if (str_Nw4d == "51") {
      document.getElementById('result_N_W4D').innerText = "불량";
    } else if (str_Nw4d == "52") {
      document.getElementById('result_N_W4D').innerText = "불량";
    } else if (str_Nw4d == "53") {
      document.getElementById('result_N_W4D').innerText = "불량";
    } else if (str_Nw4d == "54") {
      document.getElementById('result_N_W4D').innerText = "불량";
    } else if (str_Nw4d == "55") {
      document.getElementById('result_N_W4D').innerText = "불량";
    } else if (str_Nw4d == "none") {
      document.getElementById('result_N_W4D').innerText = "관찰요망";
    }
  }

  // 차폐평가-원거리
  function Change_CTD(event) {
    const str_CTD = event.value;
    if (str_CTD == 'good') {
      document.getElementById('result_CTestD').innerText = "양호";
    } else if (str_CTD == 'exo') {
      document.getElementById('result_CTestD').innerText = "불량";
    } else if (str_CTD == 'eso') {
      document.getElementById('result_CTestD').innerText = "불량";
    } else if (str_CTD == 'XT') {
      document.getElementById('result_CTestD').innerText = "불량";
    } else if (str_CTD == 'ET') {
      document.getElementById('result_CTestD').innerText = "불량";
    }
  }

  // 차폐평가-근거리
  function Change_CTN(event) {
    const str_CTN = event.value;
    if (str_CTN == 'good') {
      document.getElementById('result_CTestN').innerText = "양호";
    } else if (str_CTN == 'exo') {
      document.getElementById('result_CTestN').innerText = "불량";
    } else if (str_CTN == 'eso') {
      document.getElementById('result_CTestN').innerText = "불량";
    } else if (str_CTN == 'XT') {
      document.getElementById('result_CTestN').innerText = "불량";
    } else if (str_CTN == 'ET') {
      document.getElementById('result_CTestN').innerText = "불량";
    }
  }

  // 조절근점
  function accom() {
    var Age = parseInt(document.getElementById('Age_y').innerHTML, 10);
    var Accomage = 15 - (0.25 * Age);
    const RAccom = document.getElementById('R_accom').value;
    const LAccom = document.getElementById('L_accom').value;
    const OUAccom = document.getElementById('O_accom').value;
    if (RAccom < Accomage - 2) {
      document.getElementById('result_accom').innerText = "불량";
    } else {
      document.getElementById('result_accom').innerText = "양호";
      if (LAccom < Accomage - 2) {
        document.getElementById('result_accom').innerText = "불량";
      } else {
        document.getElementById('result_accom').innerText = "양호";
        if (OUAccom < Accomage - 2) {
          document.getElementById('result_accom').innerText = "불량";
        } else {
          document.getElementById('result_accom').innerText = "양호";
        }
      }
    }
  }

  // 조절용이
  function AccomRev() {
    const Age = parseInt(document.getElementById('Age_y').innerHTML, 10);
    const RAccom_Rev = document.getElementById('RAccom_Rev').value;
    const LAccom_Rev = document.getElementById('LAccom_Rev').value;
    const OUAccom_Rev = document.getElementById('OUAccom_Rev').value;
    const Sel_AccomRev = document.getElementById('Sel_AccomRev').value;
    if (Age <= 6) {
      if (RAccom_Rev <= 3) {
        document.getElementById('result_AccomRev').innerText = "불량";
      } else {
        document.getElementById('result_AccomRev').innerText = "양호";
        if (LAccom_Rev <= 3) {
          document.getElementById('result_AccomRev').innerText = "불량";
        } else {
          document.getElementById('result_AccomRev').innerText = "양호";
          if (OUAccom_Rev < 0.5) {
            document.getElementById('result_AccomRev').innerText = "불량";
          } else {
            document.getElementById('result_AccomRev').innerText = "양호";
          }
        }
      }
    }
    if (Age > 6 && Age <= 7) {
      if (RAccom_Rev <= 4.5) {
        document.getElementById('result_AccomRev').innerText = "불량";
      } else {
        document.getElementById('result_AccomRev').innerText = "양호";
        if (LAccom_Rev <= 4.5) {
          document.getElementById('result_AccomRev').innerText = "불량";
        } else {
          document.getElementById('result_AccomRev').innerText = "양호";
          if (OUAccom_Rev < 1) {
            document.getElementById('result_AccomRev').innerText = "불량";
          } else {
            document.getElementById('result_AccomRev').innerText = "양호";
          }
        }
      }
    }
    if (Age > 7 && Age <= 12) {
      if (RAccom_Rev <= 4.5) {
        document.getElementById('result_AccomRev').innerText = "불량";
      } else {
        document.getElementById('result_AccomRev').innerText = "양호";
        if (LAccom_Rev <= 4.5) {
          document.getElementById('result_AccomRev').innerText = "불량";
        } else {
          document.getElementById('result_AccomRev').innerText = "양호";
          if (OUAccom_Rev < 2.5) {
            document.getElementById('result_AccomRev').innerText = "불량";
          } else {
            document.getElementById('result_AccomRev').innerText = "양호";
          }
        }
      }
    }
    if (Age > 12 && Age <= 38) {
      if (RAccom_Rev <= 6) {
        document.getElementById('result_AccomRev').innerText = "불량";
      } else {
        document.getElementById('result_AccomRev').innerText = "양호";
        if (LAccom_Rev <= 6) {
          document.getElementById('result_AccomRev').innerText = "불량";
        } else {
          document.getElementById('result_AccomRev').innerText = "양호";
          if (OUAccom_Rev < 2.5) {
            document.getElementById('result_AccomRev').innerText = "불량";
          } else {
            document.getElementById('result_AccomRev').innerText = "양호";
          }
        }
      }
    }
  }

  // 조절용이 지체
  function SelAccomRev(event) {
    const str_AccomRev = event.value;
    if (str_AccomRev == 'bad1') {
      document.getElementById('result_Sel_AccomRev').innerText = "(+)지체";
    } else if (str_AccomRev == 'bad2') {
      document.getElementById('result_Sel_AccomRev').innerText = "(-)지체";
    } else if (str_AccomRev == 'bad3') {
      document.getElementById('result_Sel_AccomRev').innerText = "(+,-)지체";
    } else if (str_AccomRev == 'good') {
      document.getElementById('result_Sel_AccomRev').innerText = "속도양호";
    }
  }


  // 눈모임근점
  function PrintNVer() {
    const NVer = document.getElementById('NVer').value;
    if (NVer < 6) {
      document.getElementById('result_NVer').innerText = "양호";
    } else {
      document.getElementById('result_NVer').innerText = "불량";
    }
  }

  // 따라보기
  function Change_BroadH(event) {
    const str_BroadH = event.value;
    if (str_BroadH == 'good') {
      document.getElementById('result_BroadH').innerText = "양호";
    } else if (str_BroadH == 'jurky') {
      document.getElementById('result_BroadH').innerText = "불량";
    } else if (str_BroadH == 'overshoot') {
      document.getElementById('result_BroadH').innerText = "불량";
    } else if (str_BroadH == 'undershoot') {
      document.getElementById('result_BroadH').innerText = "불량";
    } else if (str_BroadH == 'nystagmus') {
      document.getElementById('result_BroadH').innerText = "불량";
    } else if (str_BroadH == 'unsteady') {
      document.getElementById('result_BroadH').innerText = "불량";
    }
  }

  // 홱보기
  function Change_Saccadic(event) {
    const str_Saccadic = event.value;
    if (str_Saccadic == 'good') {
      document.getElementById('result_Saccadic').innerText = "양호";
    } else if (str_Saccadic == 'jurky') {
      document.getElementById('result_Saccadic').innerText = "불량";
    } else if (str_Saccadic == 'overshoot') {
      document.getElementById('result_Saccadic').innerText = "불량";
    } else if (str_Saccadic == 'undershoot') {
      document.getElementById('result_Saccadic').innerText = "불량";
    } else if (str_Saccadic == 'jur_over') {
      document.getElementById('result_Saccadic').innerText = "불량";
    } else if (str_Saccadic == 'unsteady') {
      document.getElementById('result_Saccadic').innerText = "불량";
    } else if (str_Saccadic == 'headturn') {
      document.getElementById('result_Saccadic').innerText = "불량";
    }
  }

  // 입체시-원거리
  function sel_DStereo(event) {
    const str_DStereo = event.value;
    if (str_DStereo == 'good') {
      document.getElementById('result_DStereo').innerText = "양호";
    } else if (str_DStereo == 'bad3') {
      document.getElementById('result_DStereo').innerText = "관찰";
    } else if (str_DStereo == 'bad2') {
      document.getElementById('result_DStereo').innerText = "관찰";
    } else if (str_DStereo == 'bad1') {
      document.getElementById('result_DStereo').innerText = "불량";
    } else if (str_DStereo == 'bad') {
      document.getElementById('result_DStereo').innerText = "불량";
    } else if (str_DStereo == 'none') {
      document.getElementById('result_DStereo').innerText = "평가하지않음";
    }
  }

  // 입체시-근거리
  function sel_NStereo(event) {
    const str_NStereo = event.value;
    if (str_NStereo == "good1") {
      document.getElementById('result_NStereo').innerText = "양호";
    } else if (str_NStereo == 'good2') {
      document.getElementById('result_NStereo').innerText = "양호";
    } else if (str_NStereo == 'good3') {
      document.getElementById('result_NStereo').innerText = "양호";
    } else if (str_NStereo == 'good4') {
      document.getElementById('result_NStereo').innerText = "양호";
    } else if (str_NStereo == 'bad0') {
      document.getElementById('result_NStereo').innerText = "불량";
    } else if (str_NStereo == 'bad1') {
      document.getElementById('result_NStereo').innerText = "불량";
    } else if (str_NStereo == 'bad2') {
      document.getElementById('result_NStereo').innerText = "불량";
    } else if (str_NStereo == 'bad3') {
      document.getElementById('result_NStereo').innerText = "불량";
    } else if (str_NStereo == 'bad4') {
      document.getElementById('result_NStereo').innerText = "불량";
    } else if (str_NStereo == 'bad5') {
      document.getElementById('result_NStereo').innerText = "불량";
    } else if (str_NStereo == 'bad6') {
      document.getElementById('result_NStereo').innerText = "불량";
    } else if (str_NStereo == 'bad7') {
      document.getElementById('result_NStereo').innerText = "불량";
    } else if (str_NStereo == 'bad8') {
      document.getElementById('result_NStereo').innerText = "불량";
    } else if (str_NStereo == 'bad9') {
      document.getElementById('result_NStereo').innerText = "불량";
    } else if (str_NStereo == 'bad') {
      document.getElementById('result_NStereo').innerText = "불량";
    }
  }

  // 동공반응
  function sel_Pupilreflex(event) {
    const Pupilreflex = event.value;
    if (Pupilreflex == 'prompt') {
      document.getElementById('result_Pflex').innerText = "양호";
    } else if (Pupilreflex == 'fixed') {
      document.getElementById('result_Pflex').innerText = "불량";
    } else if (Pupilreflex == 'sluggish') {
      document.getElementById('result_Pflex').innerText = "불량";
    } else if (Pupilreflex == 'AlphaOmega') {
      document.getElementById('result_Pflex').innerText = "불량";
    }
  }

  // 수평안위-원거리
  function sel_D_BIBO(event) {
    const str_DBIBO = event.value;
    const Dectopic = document.getElementById('Dectopic').value;
    if (str_DBIBO == 'BI') {
      if (Dectopic > 3 && Dectopic <= 10) {
        document.getElementById('result_Dectopic').innerText = "불량";
      } else if (Dectopic > 10 && Dectopic <= 30) {
        document.getElementById('result_Dectopic').innerText = "불량";
      } else if (Dectopic > 30) {
        document.getElementById('result_Dectopic').innerText = "불량";
      } else {
        document.getElementById('result_Dectopic').innerText = "양호";
      }
    } else if (str_DBIBO == 'BO') {
      if (Dectopic > 1 && Dectopic <= 10) {
        document.getElementById('result_Dectopic').innerText = "불량";
      } else if (Dectopic > 10 && Dectopic <= 30) {
        document.getElementById('result_Dectopic').innerText = "불량";
      } else if (Dectopic > 30) {
        document.getElementById('result_Dectopic').innerText = "불량";
      } else {
        document.getElementById('result_Dectopic').innerText = "양호";
      }
    }
  }

  // 수평안위-근거리

  function sel_N_BIBO(event) {
    const str_NBIBO = event.value;
    const Nectopic = document.getElementById('Nectopic').value;
    if (str_NBIBO == 'BI') {
      if (Nectopic > 6 && Dectopic <= 10) {
        document.getElementById('result_Nectopic').innerText = "불량";
      } else if (Nectopic > 10 && Nectopic <= 30) {
        document.getElementById('result_Nectopic').innerText = "불량";
      } else if (Nectopic > 30) {
        document.getElementById('result_Nectopic').innerText = "불량";
      } else {
        document.getElementById('result_Nectopic').innerText = "양호";
      }
    } else if (str_NBIBO == 'BO') {
      if (Nectopic > 0 && Nectopic <= 10) {
        document.getElementById('result_Nectopic').innerText = "불량";
      } else if (Nectopic > 10 && Nectopic <= 30) {
        document.getElementById('result_Nectopic').innerText = "불량";
      } else if (Nectopic > 30) {
        document.getElementById('result_Nectopic').innerText = "불량";
      } else {
        document.getElementById('result_Nectopic').innerText = "양호";
      }
    }
  }

  // 수직안위-원거리

  function DVertical_INT() {
    const DVertical = document.getElementById('DVertical').value;
    if (DVertical > 0) {
      document.getElementById('result_DVertical').innerText = "불량";
    } else {
      document.getElementById('result_DVertical').innerText = "양호";
    }
  }

  // 수직안위-근거리

  function NVertical_INT() {
    const NVertical = document.getElementById('NVertical').value;
    if (NVertical > 0) {
      document.getElementById('result_NVertical').innerText = "불량";
    } else {
      document.getElementById('result_NVertical').innerText = "양호";
    }
  }


  // 양성융합력-원거리
  function DConver() {
    const DConver1 = document.getElementById('DConver1').value;
    const DConver2 = document.getElementById('DConver2').value;
    const DConver3 = document.getElementById('DConver3').value;
    const Dectopic = document.getElementById('Dectopic').value;
    const DBIBO = document.getElementById('D_BIBO').value;
    if (DBIBO == 'BI') {
      if (DConver2 <= 11) {
        document.getElementById('result_DConver').innerText = "불량";
      } else {
        document.getElementById('result_DConver').innerText = "양호";
        if (Dectopic * 2 > DConver2) {
          document.getElementById('result_DConver').innerText = "불량";
        } else {
          document.getElementById('result_DConver').innerText = "양호";
        }
      }
    } else {
      if (DConver2 <= 11) {
        document.getElementById('result_DConver').innerText = "불량";
      } else {
        document.getElementById('result_DConver').innerText = "양호";
      }
    }
  }

  // 음성융합력-원거리
  function DDever() {
    const DDever2 = document.getElementById('DDever2').value;
    const DDever3 = document.getElementById('DDever3').value;
    const Dectopic = document.getElementById('Dectopic').value;
    const DBIBO = document.getElementById('D_BIBO').value;
    if (DBIBO == 'BO') {
      if (DDever2 <= 4) {
        document.getElementById('result_DDever').innerText = "(불량)";
      } else {
        document.getElementById('result_DDever').innerText = "(양호)";
        if (Dectopic * 2 > DDever2) {
          document.getElementById('result_DDever').innerText = "(불량)";
        } else {
          document.getElementById('result_DDever').innerText = "(양호)";
        }
      }
    } else {
      if (DDever2 <= 4) {
        document.getElementById('result_DDever').innerText = "(불량)";
      } else {
        document.getElementById('result_DDever').innerText = "(양호)";
      }
    }
  }

  // 양성융합력-근거리
  function NConver() {
    const NConver1 = document.getElementById('NConver1').value;
    const NConver2 = document.getElementById('NConver2').value;
    const NConver3 = document.getElementById('NConver3').value;
    const Nectopic = document.getElementById('Nectopic').value;
    const NBIBO = document.getElementById('N_BIBO').value;
    if (NBIBO == 'BI') {
      if (NConver2 < 15) {
        document.getElementById('result_NConver').innerText = "불량";
      } else {
        document.getElementById('result_NConver').innerText = "양호";
        if (Nectopic * 2 > NConver2) {
          document.getElementById('result_NConver').innerText = "불량";
        } else {
          document.getElementById('result_NConver').innerText = "양호";
        }
      }
    } else {
      if (NConver2 < 15) {
        document.getElementById('result_NConver').innerText = "불량";
      } else {
        document.getElementById('result_NConver').innerText = "양호";
      }
    }
  }

  // 음성융합력-근거리
  function NDever() {
    const NDever1 = document.getElementById('NDever1').value;
    const NDever2 = document.getElementById('NDever2').value;
    const NDever3 = document.getElementById('NDever3').value;
    const Nectopic = document.getElementById('Nectopic').value;
    const NBIBO = document.getElementById('N_BIBO').value;
    if (NBIBO == 'BO') {
      if (NDever2 < 17) {
        document.getElementById('result_NDever').innerText = "(불량)";
      } else {
        document.getElementById('result_NDever').innerText = "(양호)";
        if (Nectopic * 2 > NDever2) {
          document.getElementById('result_NDever').innerText = "(불량)";
        } else {
          document.getElementById('result_NDever').innerText = "(양호)";
        }
      }
    } else {
      if (NDever2 < 17) {
        document.getElementById('result_NDever').innerText = "(불량)";
      } else {
        document.getElementById('result_NDever').innerText = "(양호)";
      }
    }
  }

  // 수직융합력-원거리
  function D_Vertical() {
    const DVertical_BD1 = document.getElementById('DVertical_BD1').value;
    const DVertical_BD2 = document.getElementById('DVertical_BD2').value;
    const DVertical_BD3 = document.getElementById('DVertical_BD3').value;
    const DVertical_BD4 = document.getElementById('DVertical_BD4').value;
    const DVertical_BU1 = document.getElementById('DVertical_BU1').value;
    const DVertical_BU2 = document.getElementById('DVertical_BU2').value;
    const DVertical_BU3 = document.getElementById('DVertical_BU3').value;
    const DVertical_BU4 = document.getElementById('DVertical_BU4').value;
    if (DVertical_BD1 < 4 || DVertical_BD2 < 2 || DVertical_BU1 < 4 || DVertical_BU2 < 2) {
      document.getElementById('result_DVertical_OD').innerText = "(불량)";
    } else {
      document.getElementById('result_DVertical_OD').innerText = "(양호)";
    }
    if (DVertical_BD3 < 4 || DVertical_BD4 < 2 || DVertical_BU3 < 4 || DVertical_BU4 < 2) {
      document.getElementById('result_DVertical_OS').innerText = "(불량)";
    } else {
      document.getElementById('result_DVertical_OS').innerText = "(양호)";
    }
  }


  // 수직융합력-근거리
  function N_Vertical() {
    const NVertical_BD1 = document.getElementById('NVertical_BD1').value;
    const NVertical_BD2 = document.getElementById('NVertical_BD2').value;
    const NVertical_BD3 = document.getElementById('NVertical_BD3').value;
    const NVertical_BD4 = document.getElementById('NVertical_BD4').value;
    const NVertical_BU1 = document.getElementById('NVertical_BU1').value;
    const NVertical_BU2 = document.getElementById('NVertical_BU2').value;
    const NVertical_BU3 = document.getElementById('NVertical_BU3').value;
    const NVertical_BU4 = document.getElementById('NVertical_BU4').value;
    if (NVertical_BD1 < 4 || NVertical_BD2 < 2 || NVertical_BU1 < 4 || NVertical_BU2 < 2) {
      document.getElementById('result_NVertical_OD').innerText = "(불량)";
    } else {
      document.getElementById('result_NVertical_OD').innerText = "(양호)";
    }
    if (NVertical_BD3 < 4 || NVertical_BD4 < 2 || NVertical_BU3 < 4 || NVertical_BU4 < 2) {
      document.getElementById('result_NVertical_OS').innerText = "(불량)";
    } else {
      document.getElementById('result_NVertical_OS').innerText = "(양호)";
    }
  }

  //마독스로드_원거리
  function D_agree(event) {
    const str_D_agree = event.target.value;
    if (str_D_agree == 'agree') {
      document.getElementById('result_DMaddox').innerText = "(양호)";
    } else if (str_D_agree == 'discord') {
      const DHor_maddox = document.getElementById('DHor_maddox').value;
      const DHor_BIBO = document.getElementById('DHor_BIBO').value;
      const DVer_maddox = document.getElementById('DVer_maddox').value;
      const DVer_BIBO = document.getElementById('DVer_BIBO').value;
      if ((DHor_maddox > 3 && DHor_BIBO == "BI") || (DHor_maddox > 1 && DHor_BIBO == "BO")){
        document.getElementById('result_DMaddox').innerText = "(불량)";
      } else {
        if (DVer_maddox >=0) {
          document.getElementById('result_DMaddox').innerText = "(불량)";
        }
      }
    } else {
      document.getElementById('result_DMaddox').innerText = "(참고)";
    }
  }

  //마독스로드_근거리
  function N_agree(event) {
    const N_agree = document.getElementById('N_agree').value;
    if (N_agree == 'agree') {
      document.getElementById('result_NMaddox').innerText = "(양호)";
    } else if (N_agree == 'discord') {
      const NHor_maddox = document.getElementById('NHor_maddox').value;
      const NHor_BIBO = document.getElementById('NHor_BIBO').value;
      const NVer_maddox = document.getElementById('NVer_maddox').value;
      const NVer_BIBO = document.getElementById('NVer_BIBO').value;
      if ((NHor_maddox > 6 && NHor_BIBO == "BI") || (NHor_maddox > 0 && NHor_BIBO == "BO")){
        if (NVer_maddox > 0 ) {
          document.getElementById('result_NMaddox').innerText = "(불량)";
        } else {
          document.getElementById('result_NMaddox').innerText = "(불량)";
        }
      } else {
        if (NVer_maddox > 0 ) {
          document.getElementById('result_NMaddox').innerText = "(불량)";
        } else {
          document.getElementById('result_NMaddox').innerText = "(양호)";
        }
      }
    }
  }

  //버전스용이
  function Ver_Rev() {
    const VerRev = document.getElementById('VerRev').value;
    if (VerRev >= 15) {
      document.getElementById('result_VerRev').innerText = "양호";
    } else {
      document.getElementById('result_VerRev').innerText = "불량";
    }
  }

  // MIT
  function sel_MIT(event) {
    const MIT = event.value;
    if (MIT == 'good') {
      document.getElementById('result_MIT').innerText = "양호";
    } else if (MIT == 'bad') {
      document.getElementById('result_MIT').innerText = "불량";
    } else if (MIT == 'none') {
      document.getElementById('result_MIT').innerText = "평가하지않음";
    }
  }
