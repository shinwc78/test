
// 우위안

 if (MainEye == ""){
   document.write("");
 } else {
  if (MainEye === "right") {
    document.write("● 두 눈중 우세하게 작용하는 우위안은 오른쪽 임.<br>\n <br>\n");
  } else if (MainEye === "left") {
    document.write("● 두 눈중 우세하게 작용하는 우위안은 왼쪽 임.<br>\n <br>\n");
  }
}


// 원거리와 근거리의 나안/교정시력

if (RDVision == "" || LDVision == "" || OUDVision == "" || RDVision == "NaN" || LDVision == "NaN" || OUDVision == "NaN"){
  if (RNVision == "" || LNVision == "" || OUNVision == "" || RNVision == "NaN" || LNVision == "NaN" || OUNVision == "NaN"){

  } else if (RNVision < 0.7 || LNVision < 0.7 || OUNVision < 0.7) {
    document.write("● 근거리의 "+sel_glass1+"시력은 "+"우안: "+RNVision+", "+"좌안: "+LNVision+", "+"양안: "+OUNVision+"(으)로 "+'<span style="font-weight: bold; color: red;">'+"저조하게"+'</span>'+"평가됨.<br>\n<br>\n");
  } else if (RNVision >= 1.0 && LNVision >= 1.0 && OUNVision >= 1.0){
    document.write("● 근거리의 "+sel_glass1+"시력은 "+"우안: "+RNVision+", "+"좌안: "+LNVision+", "+"양안: "+OUNVision+"(으)로 양호하게 평가됨.<br>\n<br>\n");
  } else {
    document.write("● 근거리의 "+sel_glass1+"시력은 "+"우안: "+RNVision+", "+"좌안: "+LNVision+", "+"양안: "+OUNVision+"(으)로 "+'<span style="font-weight: bold; color: blue;">'+"정기적인 관찰"+'</span>'+"이 요구됨.<br>\n<br>\n");
  }
} else {
  if (RDVision < 0.7 || LDVision < 0.7 || OUDVision < 0.7) {
    if (RNVision == "" || LNVision == "" || OUNVision == "" || RNVision == "NaN" || LNVision == "NaN" || OUNVision == "NaN"){
      document.write("● 원거리의 "+sel_glass1+"시력은 "+"우안: "+RDVision+", "+"좌안: "+LDVision+", "+"양안: "+OUDVision+"(으)로 "+'<span style="font-weight: bold; color: red;">'+"저조하게"+'</span>'+"평가됨.<br>\n<br>\n");
    } else if (RNVision < 0.7 || LNVision < 0.7 || OUNVision < 0.7) {
      document.write("● 원거리의 "+sel_glass1+"시력은 "+"우안: "+RDVision+", "+"좌안: "+LDVision+", "+"양안: "+OUDVision+"(으)로 "+'<span style="font-weight: bold; color: red;">'+"저조하게"+'</span>'+"평가 되었고, 근거리의 "+sel_glass1+"시력은 "+"우안: "+RNVision+", "+"좌안: "+LNVision+", "+"양안: "+OUNVision+"(으)로 "+'<span style="font-weight: bold; color: red;">'+"저조하게"+'</span>'+"평가됨.<br>\n<br>\n");
    } else if (RNVision >= 1.0 && LNVision >= 1.0 && OUNVision >= 1.0){
      document.write("● 원거리의 "+sel_glass1+"시력은 "+"우안: "+RDVision+", "+"좌안: "+LDVision+", "+"양안: "+OUDVision+"(으)로 "+'<span style="font-weight: bold; color: red;">'+"저조하게"+'</span>'+"평가 되었고, 근거리의 "+sel_glass1+"시력은 "+"우안: "+RNVision+", "+"좌안: "+LNVision+", "+"양안: "+OUNVision+"(으)로 양호하게 평가됨.<br>\n<br>\n");
    } else {
      document.write("● 원거리의 "+sel_glass1+"시력은 "+"우안: "+RDVision+", "+"좌안: "+LDVision+", "+"양안: "+OUDVision+"(으)로 "+'<span style="font-weight: bold; color: red;">'+"저조하게"+'</span>'+"평가 되었고, 근거리의 "+sel_glass1+"시력은 "+"우안: "+RNVision+", "+"좌안: "+LNVision+", "+"양안: "+OUNVision+"(으)로 "+'<span style="font-weight: bold; color: blue;">'+"정기적인 관찰"+'</span>'+"이 요구됨.<br>\n<br>\n");
    }
  } else if (RDVision >= 1.0 && LDVision >= 1.0 && OUDVision >= 1.0){
    if (RNVision == "" || LNVision == "" || OUNVision == "" || RNVision == "NaN" || LNVision == "NaN" || OUNVision == "NaN"){
      document.write("● 원거리의 "+sel_glass1+"시력은 "+"우안: "+RDVision+", "+"좌안: "+LDVision+", "+"양안: "+OUDVision+"(으)로 양호하게 평가됨.<br>\n<br>\n");
    } else if (RNVision < 0.7 || LNVision < 0.7 || OUNVision < 0.7) {
      document.write("● 원거리의 "+sel_glass1+"시력은 "+"우안: "+RDVision+", "+"좌안: "+LDVision+", "+"양안: "+OUDVision+"(으)로 양호하게 평가 되었고, 근거리의 "+sel_glass1+"시력은 "+"우안: "+RNVision+", "+"좌안: "+LNVision+", "+"양안: "+OUNVision+"(으)로 "+'<span style="font-weight: bold; color: red;">'+"저조하게"+'</span>'+"평가됨.<br>\n<br>\n");
    } else if (RNVision >= 1.0 && LNVision >= 1.0 && OUNVision >= 1.0){
      document.write("● 원거리의 "+sel_glass1+"시력은 "+"우안: "+RDVision+", "+"좌안: "+LDVision+", "+"양안: "+OUDVision+"(으)로 양호하게 평가 되었고, 근거리의 "+sel_glass1+"시력은 "+"우안: "+RNVision+", "+"좌안: "+LNVision+", "+"양안: "+OUNVision+"(으)로 양호하게 평가됨.<br>\n<br>\n");
    } else {
      document.write("● 원거리의 "+sel_glass1+"시력은 "+"우안: "+RDVision+", "+"좌안: "+LDVision+", "+"양안: "+OUDVision+"(으)로 양호하게 평가 되었고, 근거리의 "+sel_glass1+"시력은 "+"우안: "+RNVision+", "+"좌안: "+LNVision+", "+"양안: "+OUNVision+"(으)로 "+'<span style="font-weight: bold; color: blue;">'+"정기적인 관찰"+'</span>'+"이 요구됨.<br>\n<br>\n");
    }
  } else if ((RDVision >=0.7 && RDVision <1.0) || (LDVision >=0.7 && LDVision <1.0) ||(OUDVision >=0.7 && OUDVision <1.0)) {
    if (RNVision == "" || LNVision == "" || OUNVision == "" || RNVision == "NaN" || LNVision == "NaN" || OUNVision == "NaN"){
      document.write("● 원거리의 "+sel_glass1+"시력은 "+"우안: "+RDVision+", "+"좌안: "+LDVision+", "+"양안: "+OUDVision+"(으)로 "+'<span style="font-weight: bold; color: blue;">'+"정기적인 관찰"+'</span>'+"이 요구됨.<br>\n<br>\n");
    } else if (RNVision < 0.7 || LNVision < 0.7 || OUNVision < 0.7) {
      document.write("● 원거리의 "+sel_glass1+"시력은 "+"우안: "+RDVision+", "+"좌안: "+LDVision+", "+"양안: "+OUDVision+"(으)로 "+'<span style="font-weight: bold; color: blue;">'+"정기적인 관찰"+'</span>'+"이 요구되며, 근거리의 "+sel_glass1+"시력은 "+"우안: "+RNVision+", "+"좌안: "+LNVision+", "+"양안: "+OUNVision+"(으)로 "+'<span style="font-weight: bold; color: red;">'+"저조하게"+'</span>'+"평가됨.<br>\n<br>\n");
    } else if (RNVision >= 1.0 && LNVision >= 1.0 && OUNVision >= 1.0){
      document.write("● 원거리의 "+sel_glass1+"시력은 "+"우안: "+RDVision+", "+"좌안: "+LDVision+", "+"양안: "+OUDVision+"(으)로 "+'<span style="font-weight: bold; color: blue;">'+"정기적인 관찰"+'</span>'+"이 요구되며, 근거리의 "+sel_glass1+"시력은 "+"우안: "+RNVision+", "+"좌안: "+LNVision+", "+"양안: "+OUNVision+"(으)로 양호하게 평가됨.<br>\n<br>\n");
    } else {
      document.write("● 원거리의 "+sel_glass1+"시력은 "+"우안: "+RDVision+", "+"좌안: "+LDVision+", "+"양안: "+OUDVision+"(으)로 "+'<span style="font-weight: bold; color: blue;">'+"정기적인 관찰"+'</span>'+"이 요구되며, 근거리의 "+sel_glass1+"시력은 "+"우안: "+RNVision+", "+"좌안: "+LNVision+", "+"양안: "+OUNVision+"(으)로 "+'<span style="font-weight: bold; color: blue;">'+"정기적인 관찰"+'</span>'+"이 요구됨.<br>\n<br>\n");
    }
  }
}






// 원/ 근거리교정시력_새로운굴절력
if (RDVision_new == "" || LDVision_new == "" || OUDVision_new == "" || RDVision_new == "NaN" || LDVision_new == "NaN" || OUDVision_new == "NaN"){
  if (RNVision_new == "" || LNVision_new == "" || OUNVision_new == "" || RNVision_new == "NaN" || LNVision_new == "NaN" || OUNVision_new == "NaN") {
    document.write("");
  } else if (RNVision_new < 0.7 || LNVision_new < 0.7 || OUNVision_new < 0.7) {
    document.write("● 새로운 굴절력으로 교정하였을때 근거리 교정시력이 "+"우안: "+RNVision_new+", "+"좌안: "+LNVision_new+", "+"양안: "+OUNVision_new+"(으)로 "+'<span style="font-weight: bold; color: red;">'+"저조하여"+'</span>'+"꾸준한 관찰이 요구됨.<br>\n<br>\n");
  } else if (RNVision_new >= 1.0 && LNVision_new >= 1.0 && OUNVision_new >= 1.0){
    document.write("● 새로운 굴절력으로 교정하였을때 근거리 교정시력이 "+"우안: "+RNVision_new+", "+"좌안: "+LNVision_new+", "+"양안: "+OUNVision_new+"(으)로 양호하게 교정됨.<br>\n<br>\n");
  } else {
    document.write("● 새로운 굴절력으로 교정하였을때 근거리 교정시력이 "+"우안: "+RNVision_new+", "+"좌안: "+LNVision_new+", "+"양안: "+OUNVision_new+"(으)로 "+'<span style="font-weight: bold; color: blue;">'+"정기적인 관찰"+'</span>'+"이 요구됨.<br>\n<br>\n");
  }
} else {
    if (RDVision_new < 0.7 || LDVision_new < 0.7 || OUDVision_new < 0.7) {
      if (RNVision_new == "" || LNVision_new == "" || OUNVision_new == "" || RNVision_new == "NaN" || LNVision_new == "NaN" || OUNVision_new == "NaN") {
        document.write("● 새로운 굴절력으로 교정하였을때 원거리 교정시력이 "+"우안: "+RDVision_new+", "+"좌안: "+LDVision_new+", "+"양안: "+OUDVision_new+"(으)로 "+'<span style="font-weight: bold; color: red;">'+"저조하여"+'</span>'+"꾸준한 관찰이 요구됨.<br>\n<br>\n");
      } else if (RNVision_new < 0.7 || LNVision_new < 0.7 || OUNVision_new < 0.7) {
        document.write("● 새로운 굴절력으로 교정하였을때 원거리 교정시력이 "+"우안: "+RDVision_new+", "+"좌안: "+LDVision_new+", "+"양안: "+OUDVision_new+"(으)로 "+'<span style="font-weight: bold; color: red;">'+"저조하고, 근거리 교정시력도 "+"우안: "+RNVision_new+", "+"좌안: "+LNVision_new+", "+"양안: "+OUNVision_new+"(으)로 "+'<span style="font-weight: bold; color: red;">'+"저조하여"+'</span>'+"꾸준한 관찰이 요구됨.<br>\n<br>\n");
      } else if (RNVision_new >= 1.0 && LNVision_new >= 1.0 && OUNVision_new >= 1.0){
        document.write("● 새로운 굴절력으로 교정하였을때 원거리 교정시력이 "+"우안: "+RDVision_new+", "+"좌안: "+LDVision_new+", "+"양안: "+OUDVision_new+"(으)로 "+'<span style="font-weight: bold; color: red;">'+"저조하고, 근거리 교정시력은 "+"우안: "+RNVision_new+", "+"좌안: "+LNVision_new+", "+"양안: "+OUNVision_new+"(으)로 양호하게 교정됨.<br>\n<br>\n");
      } else {
        document.write("● 새로운 굴절력으로 교정하였을때 원거리 교정시력이 "+"우안: "+RDVision_new+", "+"좌안: "+LDVision_new+", "+"양안: "+OUDVision_new+"(으)로 "+'<span style="font-weight: bold; color: red;">'+"저조하고, 근거리 교정시력은 "+"우안: "+RNVision_new+", "+"좌안: "+LNVision_new+", "+"양안: "+OUNVision_new+"(으)로 "+'<span style="font-weight: bold; color: blue;">'+"정기적인 관찰"+'</span>'+"이 요구됨.<br>\n<br>\n");
      }
    } else if (RDVision_new >= 1.0 && LDVision_new >= 1.0 && OUDVision_new >= 1.0){
      if (RNVision_new == "" || LNVision_new == "" || OUNVision_new == "" || RNVision_new == "NaN" || LNVision_new == "NaN" || OUNVision_new == "NaN") {
        document.write("● 새로운 굴절력으로 교정하였을때 원거리 교정시력이 "+"우안: "+RDVision_new+", "+"좌안: "+LDVision_new+", "+"양안: "+OUDVision_new+"(으)로 양호하게 교정됨.<br>\n<br>\n");
      } else if (RNVision_new < 0.7 || LNVision_new < 0.7 || OUNVision_new < 0.7) {
        document.write("● 새로운 굴절력으로 교정하였을때 원거리 교정시력이 "+"우안: "+RDVision_new+", "+"좌안: "+LDVision_new+", "+"양안: "+OUDVision_new+"(으)로 양호하게 교정되고, 근거리 교정시력은 "+"우안: "+RNVision_new+", "+"좌안: "+LNVision_new+", "+"양안: "+OUNVision_new+"(으)로 "+'<span style="font-weight: bold; color: red;">'+"저조하여"+'</span>'+"꾸준한 관찰이 요구됨.<br>\n<br>\n");
      } else if (RNVision_new >= 1.0 && LNVision_new >= 1.0 && OUNVision_new >= 1.0){
        document.write("● 새로운 굴절력으로 교정하였을때 원거리 교정시력이 "+"우안: "+RDVision_new+", "+"좌안: "+LDVision_new+", "+"양안: "+OUDVision_new+"(으)로 양호하게 교정되고, 근거리 교정시력도 "+"우안: "+RNVision_new+", "+"좌안: "+LNVision_new+", "+"양안: "+OUNVision_new+"(으)로 양호하게 교정됨.<br>\n<br>\n");
      } else {
        document.write("● 새로운 굴절력으로 교정하였을때 원거리 교정시력이 "+"우안: "+RDVision_new+", "+"좌안: "+LDVision_new+", "+"양안: "+OUDVision_new+"(으)로 양호하게 교정되고, 근거리 교정시력은 "+"우안: "+RNVision_new+", "+"좌안: "+LNVision_new+", "+"양안: "+OUNVision_new+"(으)로 "+'<span style="font-weight: bold; color: blue;">'+"정기적인 관찰"+'</span>'+"이 요구됨.<br>\n<br>\n");
      }
    } else {
      if (RNVision_new == "" || LNVision_new == "" || OUNVision_new == "" || RNVision_new == "NaN" || LNVision_new == "NaN" || OUNVision_new == "NaN") {
        document.write("● 새로운 굴절력으로 교정하였을때 원거리 교정시력이 "+"우안: "+RDVision_new+", "+"좌안: "+LDVision_new+", "+"양안: "+OUDVision_new+"(으)로 양호하게 교정됨.<br>\n<br>\n");
      } else if (RNVision_new < 0.7 || LNVision_new < 0.7 || OUNVision_new < 0.7) {
        document.write("● 새로운 굴절력으로 교정하였을때 원거리 교정시력이 "+"우안: "+RDVision_new+", "+"좌안: "+LDVision_new+", "+"양안: "+OUDVision_new+"(으)로 양호하게 교정되고, 근거리 교정시력은 "+"우안: "+RNVision_new+", "+"좌안: "+LNVision_new+", "+"양안: "+OUNVision_new+"(으)로 "+'<span style="font-weight: bold; color: red;">'+"저조하여"+'</span>'+"꾸준한 관찰이 요구됨.<br>\n<br>\n");
      } else if (RNVision_new >= 1.0 && LNVision_new >= 1.0 && OUNVision_new >= 1.0){
        document.write("● 새로운 굴절력으로 교정하였을때 원거리 교정시력이 "+"우안: "+RDVision_new+", "+"좌안: "+LDVision_new+", "+"양안: "+OUDVision_new+"(으)로 양호하게 교정되고, 근거리 교정시력도 "+"우안: "+RNVision_new+", "+"좌안: "+LNVision_new+", "+"양안: "+OUNVision_new+"(으)로 양호하게 교정됨.<br>\n<br>\n");
      } else {
        document.write("● 새로운 굴절력으로 교정하였을때 원거리 교정시력이 "+"우안: "+RDVision_new+", "+"좌안: "+LDVision_new+", "+"양안: "+OUDVision_new+"(으)로 양호하게 교정되고, 근거리 교정시력은 "+"우안: "+RNVision_new+", "+"좌안: "+LNVision_new+", "+"양안: "+OUNVision_new+"(으)로 "+'<span style="font-weight: bold; color: blue;">'+"정기적인 관찰"+'</span>'+"이 요구됨.<br>\n<br>\n");
      }
      document.write("● 새로운 굴절력으로 교정하면 원거리 교정시력이 "+"우안: "+RDVision_new+", "+"좌안: "+LDVision_new+", "+"양안: "+OUDVision_new+"(으)로 "+'<span style="font-weight: bold; color: blue;">'+"정기적인 관찰"+'</span>'+"이 요구됨.<br>\n<br>\n");
    }
  }






//균형검사
if (Balance === "none") {
  document.write("");
} else if (Balance == "good") {
  document.write("● 양안균형평가시 좌우 시력이 비슷해 양호함.<br>\n<br>\n");
 } else if (Balance == "bad") {
 document.write("● 양안균형평가시 좌우 시력에 차이가 있어 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"함.<br>\n<br>\n");
  }


// 원/ 근거리 W4D
 if (D_W4D == "none"){
   if (N_W4D == "none" || N_W4D == ""){
     document.write("");
   } else if (N_W4D == "4") {
      document.write("● 융합상태검사(W4D)시 근거리에서 불빛 4개 정상융합으로 양호함.<br>\n<br>\n");
    } else if (N_W4D == "3"){
     document.write("● 융합상태검사(W4D)시 근거리에서 불빛이"+'<span style="font-weight: bold; color: red;">'+" 녹색 3개(우안억제)"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n<br>\n");
    } else if (N_W4D == "2") {
      document.write("● 융합상태검사(W4D)시 근거리에서 불빛이"+'<span style="font-weight: bold; color: red;">'+" 적색 2개(우안억제)"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n<br>\n");
    } else if (N_W4D == "51") {
     document.write("● 융합상태검사(W4D)시 근거리에서 불빛이"+'<span style="font-weight: bold; color: red;">'+" 5개(교차성 외편위)"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n<br>\n");
    } else if (N_W4D == "52") {
      document.write("● 융합상태검사(W4D)시 근거리에서 불빛이"+'<span style="font-weight: bold; color: red;">'+" 5개(동측성 내편위)"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n<br>\n");
    } else if (N_W4D == "53") {
      document.write("● 융합상태검사(W4D)시 근거리에서 불빛이"+'<span style="font-weight: bold; color: red;">'+" 5개(수직성)"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n<br>\n");
    } else if (N_W4D == "54") {
      document.write("● 융합상태검사(W4D)시 근거리에서 불빛이"+'<span style="font-weight: bold; color: red;">'+" 5개(교차성 외편위와 수직편위가 동반)"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n<br>\n");
    } else if (N_W4D == "55") {
      document.write("● 융합상태검사(W4D)시 근거리에서 불빛이"+'<span style="font-weight: bold; color: red;">'+" 5개(교차성 내편위와 수직편위가 동반)"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n<br>\n");
   }
 } else {
   if (D_W4D == "4") {
    document.write("● 융합상태검사(W4D)시 원거리는 불빛 4개 정상융합으로 양호함. ");
  } else if (D_W4D == "3"){
   document.write("● 융합상태검사(W4D)시 원거리는 불빛이"+'<span style="font-weight: bold; color: red;">'+" 녹색 3개(우안억제)"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨. ");
  } else if (D_W4D == "2") {
    document.write("● 융합상태검사(W4D)시 원거리는 불빛이"+'<span style="font-weight: bold; color: red;">'+" 적색 2개(우안억제)"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨. ");
  } else if (D_W4D == "51") {
   document.write("● 융합상태검사(W4D)시 원거리는 불빛이"+'<span style="font-weight: bold; color: red;">'+" 5개(교차성 외편위)"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨. ");
  } else if (D_W4D == "52") {
    document.write("● 융합상태검사(W4D)시 원거리는 불빛이"+'<span style="font-weight: bold; color: red;">'+" 5개(동측성 내편위)"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨. ");
  } else if (D_W4D == "53") {
    document.write("● 융합상태검사(W4D)시 원거리는 불빛이"+'<span style="font-weight: bold; color: red;">'+" 5개(수직성)"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨. ");
  } else if (D_W4D == "54") {
    document.write("● 융합상태검사(W4D)시 원거리는 불빛이"+'<span style="font-weight: bold; color: red;">'+" 5개(교차성 외편위와 수직편위가 동반)"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨. ");
  } else if (D_W4D == "55") {
    document.write("● 융합상태검사(W4D)시 원거리는 불빛이"+'<span style="font-weight: bold; color: red;">'+" 5개(교차성 내편위와 수직편위가 동반)"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨. ");
  }
  if (N_W4D == "4") {
    document.write("또한, 근거리에서는 불빛 4개 정상융합으로 양호함.<br>\n<br>\n");
  } else if (N_W4D == "3"){
    document.write("또한, 근거리에서는 불빛이"+'<span style="font-weight: bold; color: red;">'+" 녹색 3개(우안억제)"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n<br>\n");
  } else if (N_W4D == "2") {
    document.write("또한, 근거리에서는 불빛이"+'<span style="font-weight: bold; color: red;">'+" 적색 2개(우안억제)"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n<br>\n");
  } else if (N_W4D == "51") {
    document.write("또한, 근거리에서는 불빛이"+'<span style="font-weight: bold; color: red;">'+" 5개(교차성 외편위)"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n<br>\n");
  } else if (N_W4D == "52") {
    document.write("또한, 근거리에서는 불빛이"+'<span style="font-weight: bold; color: red;">'+" 5개(동측성 내편위)"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n<br>\n");
  } else if (N_W4D == "53") {
    document.write("또한, 근거리에서는 불빛이"+'<span style="font-weight: bold; color: red;">'+" 5개(수직성)"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n<br>\n");
  } else if (N_W4D == "54") {
    document.write("또한, 근거리에서는 불빛이"+'<span style="font-weight: bold; color: red;">'+" 5개(교차성 외편위와 수직편위가 동반)"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n<br>\n");
  } else if (N_W4D == "55") {
    document.write("또한, 근거리에서는 불빛이"+'<span style="font-weight: bold; color: red;">'+" 5개(교차성 내편위와 수직편위가 동반)"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n<br>\n");
  } else {
    document.write("<br>\n<br>\n");
  }
}






// 원/근거리 차폐평가
if (CTest_D === "none") {
  if (CTest_N === "none" || CTest_N == "") {
    document.write("");
  } else if (CTest_N == 'good'){
    document.write("● 근거리 차폐평가(안구정렬상태검사)시 정위로 양호하게 평가됨.<br>\n<br>\n");
  } else if (CTest_N == 'exo'){
    document.write("● 근거리 차폐평가(안구정렬상태검사)시 "+'<span style="font-weight: bold; color: red;">'+" 잠복성 외편위"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n<br>\n");
  } else if (CTest_N == 'eso') {
    document.write("● 근거리 차폐평가(안구정렬상태검사)시 "+'<span style="font-weight: bold; color: red;">'+" 잠복성 내편위"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n<br>\n");
  } else if (CTest_N == 'XT') {
    if ( radio_cross == "sometime") {
      document.write("● 근거리 차폐평가(안구정렬상태검사)시 "+'<span style="font-weight: bold; color: red;">'+" 간헐성 외편위"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n <br>\n");
    } else if (radio_cross == "always"){
      document.write("● 근거리 차폐평가(안구정렬상태검사)시 "+'<span style="font-weight: bold; color: red;">'+" 항상성 외편위"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n <br>\n");
    } else {
      document.write("● 근거리 차폐평가(안구정렬상태검사)시 "+'<span style="font-weight: bold; color: red;">'+" 현성 외편위"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n <br>\n");
    }
  } else if (CTest_N == 'ET') {
    if ( radio_cross == "sometime") {
      document.write("● 근거리 차폐평가(안구정렬상태검사)시 "+'<span style="font-weight: bold; color: red;">'+" 간헐성 내편위"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n <br>\n");
    } else if (radio_cross == "always"){
      document.write("● 근거리 차폐평가(안구정렬상태검사)시 "+'<span style="font-weight: bold; color: red;">'+" 항상성 내편위"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n <br>\n");
    } else {
      document.write("● 근거리 차폐평가(안구정렬상태검사)시 "+'<span style="font-weight: bold; color: red;">'+" 현성 내편위"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n <br>\n");
    }
  }
} else {
  if (CTest_D == 'good'){
   document.write("● 원거리 차폐평가(안구정렬상태검사)시 정위로 양호하게 평가됨. ");
  } else if (CTest_D == 'exo'){
   document.write("● 원거리 차폐평가(안구정렬상태검사)시"+'<span style="font-weight: bold; color: red;">'+" 잠복성 외편위"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨. ");
  } else if (CTest_D == 'eso') {
   document.write("● 원거리 차폐평가(안구정렬상태검사)시"+'<span style="font-weight: bold; color: red;">'+" 잠복성 내편위"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨. ");
  } else if (CTest_D == 'XT') {
    if ( radio_cross == "sometime") {
      document.write("● 원거리 차폐평가(안구정렬상태검사)시"+'<span style="font-weight: bold; color: red;">'+" 간헐성 외편위"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨. ");
    } else if (radio_cross == "always"){
      document.write("● 원거리 차폐평가(안구정렬상태검사)시"+'<span style="font-weight: bold; color: red;">'+" 항상성 외편위"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨. ");
    } else {
      document.write("● 원거리 차폐평가(안구정렬상태검사)시"+'<span style="font-weight: bold; color: red;">'+" 현성 외편위"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨. ");
    }
  } else if (CTest_D == 'ET') {
    if ( radio_cross == "sometime") {
      document.write("● 원거리 차폐평가(안구정렬상태검사)시"+'<span style="font-weight: bold; color: red;">'+" 간헐성 내편위"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨. ");
    } else if (radio_cross == "always"){
      document.write("● 원거리 차폐평가(안구정렬상태검사)시"+'<span style="font-weight: bold; color: red;">'+" 항상성 내편위"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨. ");
    } else {
      document.write("● 원거리 차폐평가(안구정렬상태검사)시"+'<span style="font-weight: bold; color: red;">'+" 현성 내편위"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨. ");
    }
  }
   if (CTest_N == 'good'){
     document.write("또한, 근거리에서는 정위로 양호하게 평가됨.<br>\n<br>\n");
    } else if (CTest_N == 'exo'){
     document.write("또한, 근거리에서는"+'<span style="font-weight: bold; color: red;">'+" 잠복성 외편위"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n<br>\n");
    } else if (CTest_N == 'eso') {
     document.write("또한, 근거리에서는"+'<span style="font-weight: bold; color: red;">'+" 잠복성 내편위"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n<br>\n");
    } else if (CTest_N == 'XT') {
      if ( radio_cross == "sometime") {
        document.write("또한, 근거리에서는"+'<span style="font-weight: bold; color: red;">'+" 간헐성 외편위"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n <br>\n");
      } else if (radio_cross == "always"){
        document.write("또한, 근거리에서는"+'<span style="font-weight: bold; color: red;">'+" 항상성 외편위"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n <br>\n");
      } else {
        document.write("또한, 근거리에서는"+'<span style="font-weight: bold; color: red;">'+" 현성 외편위"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n <br>\n");
      }
    } else if (CTest_N == 'ET') {
      if ( radio_cross == "sometime") {
        document.write("또한, 근거리에서는"+'<span style="font-weight: bold; color: red;">'+" 간헐성 내편위"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n <br>\n");
      } else if (radio_cross == "always"){
        document.write("또한, 근거리에서는"+'<span style="font-weight: bold; color: red;">'+" 항상성 내편위"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n <br>\n");
      } else {
        document.write("또한, 근거리에서는"+'<span style="font-weight: bold; color: red;">'+" 현성 내편위"+'</span>'+"로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n<br>\n ");
      }
    } else {
      document.write("<br>\n<br>\n");
    }
  }









// 조절근점
var Accomage = 15 - (0.25 * ChAge);

if (R_accom === "NaN" || R_accom === "" || isNaN(R_accom)){
  var R_accom = "";
}
if (L_accom === "NaN" || L_accom === "" || isNaN(L_accom)){
  var L_accom = "";
}
if (O_accom === "NaN" || O_accom === "" || isNaN(O_accom)){
  var O_accom = "";
}
if (R_accom === ""){
  if (L_accom === ""){
    if (O_accom === ""){

    } else {    // OD,OS 값이 없고 OU값만 있을떼
      if (O_accom < Accomage) {
        document.write("● 가까운 거리의 사물을 선명하게 만들수 있는 조절능력중 양안 "+O_accom+"D로 "+ChAge+"세의 최소조절력 "+Accomage+"D 보다 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n<br>\n");
      } else {
        document.write("● 가까운 거리의 사물을 선명하게 만들수 있는 조절능력중 양안 "+O_accom+"D로 "+ChAge+"세의 최소조절력 "+Accomage+"D 이상으로 양호하게 평가됨.<br>\n<br>\n");
      }
      if (ChAge > 38) {
        document.write("단, 38세 이후는 수정체경화로 조절능력이 현저히 저하되어 가까운 곳에 초점을 맞추기 어려운 초기노안이 예상됨.<br>\n<br>\n");
      }
    }
  } else {  // OD값이 없고 OS값이 있을떼
    if (L_accom < Accomage){
      if (O_accom === ""){
        document.write("● 가까운 거리의 사물을 선명하게 만들수 있는 조절능력중 왼쪽이 "+L_accom+"D로 "+ChAge+"세의 최소조절력 "+Accomage+"D 보다 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n<br>\n");
      } else {
        if (O_accom < Accomage) {
          document.write("● 가까운 거리의 사물을 선명하게 만들수 있는 조절능력중 왼쪽이 "+L_accom+"D, 양안 "+O_accom+"D로 "+ChAge+"세의 최소조절력 "+Accomage+"D 보다 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n<br>\n");
        } else {
          document.write("● 가까운 거리의 사물을 선명하게 만들수 있는 조절능력중 왼쪽 "+L_accom+"D로 "+ChAge+"세의 최소조절력 "+Accomage+"D 보다 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하고, 양안은 "+O_accom+"D로 양호하게 평가됨.<br>\n<br>\n");
        }
      }
    } else {
      if (O_accom === ""){
        document.write("● 가까운 거리의 사물을 선명하게 만들수 있는 조절능력중 왼쪽이 "+L_accom+"D로 "+ChAge+"세의 최소조절력 "+Accomage+"D 이상으로 양호하게 평가됨.<br>\n<br>\n");
      } else {
        if (O_accom < Accomage) {
          document.write("● 가까운 거리의 사물을 선명하게 만들수 있는 조절능력중 왼쪽이 "+L_accom+"D로 "+ChAge+"세의 최소조절력 "+Accomage+"D 이상으로 양호하게 평가되었으나, 양안이 "+O_accom+"D로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n<br>\n");
        } else {
          document.write("● 가까운 거리의 사물을 선명하게 만들수 있는 조절능력중 왼쪽 "+L_accom+"D, 양안 "+O_accom+"D로 "+ChAge+"세의 최소조절력 "+Accomage+"D 이상으로 양호하게 평가됨.<br>\n<br>\n");
        }
      }
    }
    if (ChAge > 38) {
      document.write("단, 38세 이후는 수정체경화로 조절능력이 현저히 저하되어 가까운 곳에 초점을 맞추기 어려운 초기노안이 예상됨.<br>\n<br>\n");
    }
  }
} else {
  if (R_accom < Accomage){
    if (L_accom === ""){
      if (O_accom === ""){
        document.write("● 가까운 거리의 사물을 선명하게 만들수 있는 조절능력중 오른쪽이 "+R_accom+"D로 "+ChAge+"세의 최소조절력 "+Accomage+"D 보다 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n<br>\n");
      } else {    // OD값이 최소조절력보다 작고, OU 값이 있고 OS값만 없을떼
        if (O_accom < Accomage) {
          document.write("● 가까운 거리의 사물을 선명하게 만들수 있는 조절능력중 오른쪽이 "+R_accom+"D, 양안 "+O_accom+"D로 "+ChAge+"세의 최소조절력 "+Accomage+"D 보다 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n<br>\n");
        } else {
          document.write("● 가까운 거리의 사물을 선명하게 만들수 있는 조절능력중 오른쪽이 "+R_accom+"D로 "+ChAge+"세의 최소조절력 "+Accomage+"D 보다 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하고, 양안은 "+O_accom+"D로 양호하게 평가됨.<br>\n<br>\n");
        }
      }
    } else {  // OD값이 최소조절력보다 적고, OS값이 있을떼
      if (L_accom < Accomage){
        if (O_accom === ""){
          document.write("● 가까운 거리의 사물을 선명하게 만들수 있는 조절능력중 오른쪽이 "+R_accom+"D, 왼쪽이 "+L_accom+"D로 "+ChAge+"세의 최소조절력 "+Accomage+"D 보다 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n<br>\n");
        } else {
          if (O_accom < Accomage) {
            document.write("● 가까운 거리의 사물을 선명하게 만들수 있는 조절능력중 오른쪽이 "+R_accom+"D, 왼쪽이 "+L_accom+"D, 양안 "+O_accom+"D로 "+ChAge+"세의 최소조절력 "+Accomage+"D 보다 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n<br>\n");
          } else {
            document.write("● 가까운 거리의 사물을 선명하게 만들수 있는 조절능력중 오른쪽이 "+R_accom+"D, 왼쪽 "+L_accom+"D로 "+ChAge+"세의 최소조절력 "+Accomage+"D 보다 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하고, 양안은 "+O_accom+"D로 양호하게 평가됨.<br>\n<br>\n");
          }
        }
      } else {  // OD값이 최소조절력보다 적고, OS값이 정상일때
        if (O_accom === ""){
          document.write("● 가까운 거리의 사물을 선명하게 만들수 있는 조절능력중 오른쪽이 "+R_accom+"D로 "+ChAge+"세의 최소조절력 "+Accomage+"D 보다 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가되고, 왼쪽은 "+L_accom+"D로 양호하게 평가됨.<br>\n<br>\n");
        } else {
          if (O_accom < Accomage) {
            document.write("● 가까운 거리의 사물을 선명하게 만들수 있는 조절능력중 왼쪽이 "+L_accom+"D로 "+ChAge+"세의 최소조절력 "+Accomage+"D 이상으로 양호하게 평가되었으나, 오른쪽이 "+R_accom+"D, 양안이 "+O_accom+"D로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n<br>\n");
          } else {
            document.write("● 가까운 거리의 사물을 선명하게 만들수 있는 조절능력중 오른쪽이 "+R_accom+"D로 "+ChAge+"세의 최소조절력 "+Accomage+"D 보다 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가되고, 왼쪽 "+L_accom+"D, 양안 "+O_accom+"D로 양호하게 평가됨.<br>\n<br>\n");
          }
        }
      }
    }
  }  else {  // OD값이 정상일때
    if (L_accom === ""){
      if (O_accom === ""){
        document.write("● 가까운 거리의 사물을 선명하게 만들수 있는 조절능력중 오른쪽이 "+R_accom+"D로 "+ChAge+"세의 최소조절력 "+Accomage+"D 보다 양호하게 평가됨.<br>\n<br>\n");
      } else {    // OD값이 정상, OS값이 없고, OU 값이 있을때
        if (O_accom < Accomage) {
          document.write("● 가까운 거리의 사물을 선명하게 만들수 있는 조절능력중 오른쪽이 "+R_accom+"D로 양호하지만, 양안이 "+O_accom+"D로 "+ChAge+"세의 최소조절력 "+Accomage+"D 보다 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n<br>\n");
        } else {
          document.write("● 가까운 거리의 사물을 선명하게 만들수 있는 조절능력중 오른쪽이 "+R_accom+"D, 양안 "+O_accom+"D로 "+ChAge+"세의 최소조절력 "+Accomage+"D 보다 양호하게 평가됨.<br>\n<br>\n");
        }
      }
    } else {  // OD값이 정상이고, OS값이 있을떼
      if (L_accom < Accomage){
        if (O_accom === ""){
          document.write("● 가까운 거리의 사물을 선명하게 만들수 있는 조절능력중 오른쪽이 "+R_accom+"D로 "+ChAge+"세의 최소조절력 "+Accomage+"D 보다 양호하게 평가되었으나, 왼쪽이 "+L_accom+"D로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n<br>\n");
        } else {
          if (O_accom < Accomage) {
            document.write("● 가까운 거리의 사물을 선명하게 만들수 있는 조절능력중 오른쪽이 "+R_accom+"D로 "+ChAge+"세의 최소조절력 "+Accomage+"D 보다 양호하게 평가되었으나, 왼쪽이 "+L_accom+"D, 양안 "+O_accom+"D로 "+ChAge+"세의 최소조절력 "+Accomage+"D 보다 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n<br>\n");
          } else {
            document.write("● 가까운 거리의 사물을 선명하게 만들수 있는 조절능력중 오른쪽이 "+R_accom+"D, 양안 "+O_accom+"D로 "+ChAge+"세의 최소조절력 "+Accomage+"D 보다 양호하게 평가되었으나, 왼쪽이 "+L_accom+"D로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n<br>\n");
          }
        }
      } else {  // OD,OS값이 정상일때
        if (O_accom === ""){
          document.write("● 가까운 거리의 사물을 선명하게 만들수 있는 조절능력중 오른쪽이 "+R_accom+"D, 왼쪽이 "+L_accom+"D로 "+ChAge+"세의 최소조절력 "+Accomage+"D 이상으로 양호하게 평가됨.<br>\n<br>\n");
        } else {
          if (O_accom < Accomage) {
            document.write("● 가까운 거리의 사물을 선명하게 만들수 있는 조절능력중 오른쪽이 "+R_accom+"D, 왼쪽이 "+L_accom+"D로 "+ChAge+"세의 최소조절력 "+Accomage+"D 이상으로 양호하게 평가되었으나, 양안이 "+O_accom+"D로 "+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n<br>\n");
          } else {
            document.write("● 가까운 거리의 사물을 선명하게 만들수 있는 조절능력이 오른쪽 "+R_accom+"D, 왼쪽 "+L_accom+"D, 양안 "+O_accom+"D로 "+ChAge+"세의 최소조절력 "+Accomage+"D 이상으로 양호하게 평가됨.<br>\n<br>\n");
          }
        }
      }
    }
  }
  if (ChAge > 38) {
    document.write("단, 38세 이후는 수정체경화로 조절능력이 현저히 저하되어 가까운 곳에 초점을 맞추기 어려운 초기노안이 예상됨.<br>\n<br>\n");
  }
}


// 조절용이
if (RAccom_Rev == "" || LAccom_Rev == "" || OUAccom_Rev == "") {

} else {
if (ChAge <= 6) {
    if (RAccom_Rev > 3 && LAccom_Rev > 3 && OUAccom_Rev > 0.5) {
     document.write("● 가까운 거리와 멀리있는 사물을 빠르고 선명하게 만들수 있는 조절용이능력이 오른쪽 "+RAccom_Rev+"cpm, 왼쪽 "+LAccom_Rev+"cpm, 양안 "+OUAccom_Rev+"cpm 으로 "+ChAge+"세기준 정상범위로 평가됨.<br>\n<br>\n");
    } else {
        document.write("● 가까운 거리와 멀리있는 사물을 빠르고 선명하게 만들수 있는 조절용이능력이 오른쪽 "+RAccom_Rev+"cpm, 왼쪽 "+LAccom_Rev+"cpm, 양안 "+OUAccom_Rev+"cpm 으로 "+ChAge+"세기준 정상범위보다"+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n <br>\n");
      if (Sel_AccomRev !== ""){
        if (Sel_AccomRev === "bad1"){
          document.write(" 특히 "+'<span style="font-weight: bold; color: red;">'+"(+)방향에서 지체"+'</span>'+".<br>\n<br>\n");
        } else if (Sel_AccomRev === "bad2"){
         document.write(" 특히 "+'<span style="font-weight: bold; color: red;">'+"(-)방향에서 지체"+'</span>'+".<br>\n<br>\n");
       } else if (Sel_AccomRev === "bad3"){
         document.write(" 특히 "+'<span style="font-weight: bold; color: red;">'+"(+,-)방향 모두에서 지체"+'</span>'+".<br>\n<br>\n");
        }
      }
    }
  } else if (ChAge >6 && ChAge < 7) {
    if (RAccom_Rev > 4.5 && LAccom_Rev > 4.5 && OUAccom_Rev >= 1) {
      document.write("● 가까운 거리와 멀리있는 사물을 빠르고 선명하게 만들수 있는 조절용이능력이 오른쪽 "+RAccom_Rev+"cpm, 왼쪽 "+LAccom_Rev+"cpm, 양안 "+OUAccom_Rev+"cpm 으로 "+ChAge+"세기준 정상범위로 평가됨.<br>\n<br>\n");
     } else {
       document.write("● 가까운 거리와 멀리있는 사물을 빠르고 선명하게 만들수 있는 조절용이능력이 오른쪽 "+RAccom_Rev+"cpm, 왼쪽 "+LAccom_Rev+"cpm, 양안 "+OUAccom_Rev+"cpm 으로 "+ChAge+"세기준 정상범위보다"+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n <br>\n");
       if (Sel_AccomRev !== ""){
         if (Sel_AccomRev === "bad1"){
           document.write(" 특히 "+'<span style="font-weight: bold; color: red;">'+"(+)방향에서 지체"+'</span>'+".<br>\n<br>\n");
         } else if (Sel_AccomRev === "bad2"){
          document.write(" 특히 "+'<span style="font-weight: bold; color: red;">'+"(-)방향에서 지체"+'</span>'+".<br>\n<br>\n");
        } else if (Sel_AccomRev === "bad3"){
          document.write(" 특히 "+'<span style="font-weight: bold; color: red;">'+"(+,-)방향 모두에서 지체"+'</span>'+".<br>\n<br>\n");
         }
       }
     }
   } else if (ChAge >= 7 && ChAge < 13) {
    if (RAccom_Rev > 4.5 && LAccom_Rev > 4.5 && OUAccom_Rev >= 2.5) {
      document.write("● 가까운 거리와 멀리있는 사물을 빠르고 선명하게 만들수 있는 조절용이능력이 오른쪽 "+RAccom_Rev+"cpm, 왼쪽 "+LAccom_Rev+"cpm, 양안 "+OUAccom_Rev+"cpm 으로 "+ChAge+"세기준 정상범위로 평가됨.<br>\n<br>\n");
     } else {
       document.write("● 가까운 거리와 멀리있는 사물을 빠르고 선명하게 만들수 있는 조절용이능력이 오른쪽 "+RAccom_Rev+"cpm, 왼쪽 "+LAccom_Rev+"cpm, 양안 "+OUAccom_Rev+"cpm 으로 "+ChAge+"세기준 정상범위보다"+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨.<br>\n <br>\n");
       if (Sel_AccomRev !== ""){
         if (Sel_AccomRev === "bad1"){
           document.write(" 특히 "+'<span style="font-weight: bold; color: red;">'+"(+)방향에서 지체"+'</span>'+".<br>\n<br>\n");
         } else if (Sel_AccomRev === "bad2"){
          document.write(" 특히 "+'<span style="font-weight: bold; color: red;">'+"(-)방향에서 지체"+'</span>'+".<br>\n<br>\n");
        } else if (Sel_AccomRev === "bad3"){
          document.write(" 특히 "+'<span style="font-weight: bold; color: red;">'+"(+,-)방향 모두에서 지체"+'</span>'+".<br>\n<br>\n");
         }
       }
     }
   } else if (ChAge >= 13 && ChAge <=38) {
    if (RAccom_Rev > 6 && LAccom_Rev > 6 && OUAccom_Rev >= 2.5) {
      document.write("● 가까운 거리와 멀리있는 사물을 빠르고 선명하게 만들수 있는 조절용이능력이 오른쪽 "+RAccom_Rev+"cpm, 왼쪽 "+LAccom_Rev+"cpm, 양안 "+OUAccom_Rev+"cpm 으로 "+ChAge+"세기준 정상범위로 평가됨.<br>\n<br>\n");
     } else {
       document.write("● 가까운 거리와 멀리있는 사물을 빠르고 선명하게 만들수 있는 조절용이능력이 오른쪽 "+RAccom_Rev+"cpm, 왼쪽 "+LAccom_Rev+"cpm, 양안 "+OUAccom_Rev+"cpm 으로 "+ChAge+"세기준 정상범위보다"+'<span style="font-weight: bold; color: red;">'+"불량"+'</span>'+"하게 평가됨. <br>\n<br>\n");
       if (Sel_AccomRev !== ""){
         if (Sel_AccomRev === "bad1"){
           document.write(" 특히 "+'<span style="font-weight: bold; color: red;">'+"(+)방향에서 지체"+'</span>'+".<br>\n<br>\n");
         } else if (Sel_AccomRev === "bad2"){
          document.write(" 특히 "+'<span style="font-weight: bold; color: red;">'+"(-)방향에서 지체"+'</span>'+".<br>\n<br>\n");
        } else if (Sel_AccomRev === "bad3"){
          document.write(" 특히 "+'<span style="font-weight: bold; color: red;">'+"(+,-)방향 모두에서 지체"+'</span>'+".<br>\n<br>\n");
         }
       }
     }
   } else if (ChAge > 38) {
     document.write("● 38세 이상은 가까운 거리와 멀리있는 사물을 빠르고 선명하게 만들수 있는 조절용이능력의 평가값이 저조하게 나올수 밖에 없어 평가가 무의미함.<br>\n<br>\n");
   }
  }

  // 눈모임근점
  if (NVer === "" || NVer === "NaN" || isNaN(NVer)){

  } else {
    if (NVer < 6) {
     document.write("● 융합을 유지한 상태에서 눈을 안으로 모을 수 있는 눈모임능력이 "+NVer+"cm로 양호함.<br>\n<br>\n");
    } else {
      document.write("● 융합을 유지한 상태에서 눈을 안으로 모을 수 있는 눈모임능력이 "+'<span style="font-weight: bold; color: red;">'+NVer+"cm로 불량"+'</span>'+"함.<br>\n<br>\n");
    }
  }



  // 따라보기
  if (bro_eye_movement === "none" || bro_eye_movement == ""){
    if (bro_head_turn == "none" || bro_head_turn == "") {
      document.write("");
    } else {
      if (bro_head_turn == "good") {
        document.write("● 외안근과 지배신경에 대한 완전성평가인 외안근평가(Broad H)시 머리돌림이나 기울임은 관찰되지 않음.<br>\n<br>\n");
      } else if (bro_head_turn == "hr"){
        document.write("● 외안근과 지배신경에 대한 완전성평가인 외안근평가(Broad H)시 "+'<span style="font-weight: bold; color: red;">'+"오른쪽 머리돌림이 "+'</span>'+"관찰됨.<br>\n<br>\n");
      } else if (bro_head_turn == "hl"){
        document.write("● 외안근과 지배신경에 대한 완전성평가인 외안근평가(Broad H)시 "+'<span style="font-weight: bold; color: red;">'+"왼쪽 머리돌림이 "+'</span>'+"관찰됨.<br>\n<br>\n");
      } else if (bro_head_turn == "htr"){
        document.write("● 외안근과 지배신경에 대한 완전성평가인 외안근평가(Broad H)시 "+'<span style="font-weight: bold; color: red;">'+"오른쪽 머리기울임이 "+'</span>'+"관찰됨.<br>\n<br>\n");
      } else if (bro_head_turn == "htl"){
        document.write("● 외안근과 지배신경에 대한 완전성평가인 외안근평가(Broad H)시 "+'<span style="font-weight: bold; color: red;">'+"왼쪽 머리기울임이 "+'</span>'+"관찰됨.<br>\n<br>\n");
      } else if (bro_head_turn == "hru"){
        document.write("● 외안근과 지배신경에 대한 완전성평가인 외안근평가(Broad H)시 "+'<span style="font-weight: bold; color: red;">'+"오른쪽 위로 머리돌림과 기울임이 "+'</span>'+"관찰됨.<br>\n<br>\n");
      } else if (bro_head_turn == "hrd"){
        document.write("● 외안근과 지배신경에 대한 완전성평가인 외안근평가(Broad H)시 "+'<span style="font-weight: bold; color: red;">'+"오른쪽 아래로 머리돌림과 기울임이 "+'</span>'+"관찰됨.<br>\n<br>\n");
      } else if (bro_head_turn == "hlu"){
        document.write("● 외안근과 지배신경에 대한 완전성평가인 외안근평가(Broad H)시 "+'<span style="font-weight: bold; color: red;">'+"왼쪽 위로 머리돌림과 기울임이 "+'</span>'+"관찰됨.<br>\n<br>\n");
      } else if (bro_head_turn == "hld"){
        document.write("● 외안근과 지배신경에 대한 완전성평가인 외안근평가(Broad H)시 "+'<span style="font-weight: bold; color: red;">'+"왼쪽 아래로 머리돌림과 기울임이 "+'</span>'+"관찰됨.<br>\n<br>\n");
      }
    }
  } else {
    if (bro_eye_movement == 'good') {
    document.write("● 외안근과 지배신경에 대한 완전성평가인 외안근평가(Broad H)시 안구운동이 부드럽고 완전해 양호함.");
    } else if (bro_eye_movement == 'jurky') {
    document.write("● 외안근과 지배신경에 대한 완전성평가인 외안근평가(Broad H)시 안구운동이 "+'<span style="font-weight: bold; color: red;">'+"격동움직임으로 불량"+'</span>'+"함.");
    } else if (bro_eye_movement == 'overshoot') {
    document.write("● 외안근과 지배신경에 대한 완전성평가인 외안근평가(Broad H)시 안구운동이 "+'<span style="font-weight: bold; color: red;">'+"과다하게 움직여 주시가 불안정"+'</span>'+"함.");
    } else if (bro_eye_movement == 'undershoot') {
    document.write("● 외안근과 지배신경에 대한 완전성평가인 외안근평가(Broad H)시 안구운동이 "+'<span style="font-weight: bold; color: red;">'+"저조하게 움직여 주시가 불안정"+'</span>'+"함.");
    } else if (bro_eye_movement == 'nystagmus') {
    document.write("● 외안근과 지배신경에 대한 완전성평가인 외안근평가(Broad H)시 "+'<span style="font-weight: bold; color: red;">'+"안구진탕으로 주시가 불안정"+'</span>'+"함.");
    } else if (bro_eye_movement == 'unsteady') {
    document.write("● 외안근과 지배신경에 대한 완전성평가인 외안근평가(Broad H)시 안구운동이 "+'<span style="font-weight: bold; color: red;">'+"주시가 불안정하여 불량"+'</span>'+"함.");
    }

    if (bro_head_turn == "good") {
      document.write(" 또한 머리돌림이나 기울임은 관찰되지 않음.<br>\n<br>\n");
    } else if (bro_head_turn == "hr"){
      document.write(" 또한 "+'<span style="font-weight: bold; color: red;">'+"오른쪽 머리돌림이 "+'</span>'+"관찰됨.<br>\n<br>\n");
    } else if (bro_head_turn == "hl"){
      document.write(" 또한 "+'<span style="font-weight: bold; color: red;">'+"왼쪽 머리돌림이 "+'</span>'+"관찰됨.<br>\n<br>\n");
    } else if (bro_head_turn == "htr"){
      document.write(" 또한 "+'<span style="font-weight: bold; color: red;">'+"오른쪽 머리기울임이 "+'</span>'+"관찰됨.<br>\n<br>\n");
    } else if (bro_head_turn == "htl"){
      document.write(" 또한 "+'<span style="font-weight: bold; color: red;">'+"왼쪽 머리기울임이 "+'</span>'+"관찰됨.<br>\n<br>\n");
    } else if (bro_head_turn == "hru"){
      document.write(" 또한 "+'<span style="font-weight: bold; color: red;">'+"오른쪽 위로 머리돌림과 기울임이 "+'</span>'+"관찰됨.<br>\n<br>\n");
    } else if (bro_head_turn == "hrd"){
      document.write(" 또한 "+'<span style="font-weight: bold; color: red;">'+"오른쪽 아래로 머리돌림과 기울임이 "+'</span>'+"관찰됨.<br>\n<br>\n");
    } else if (bro_head_turn == "hlu"){
      document.write(" 또한 "+'<span style="font-weight: bold; color: red;">'+"왼쪽 위로 머리돌림과 기울임이 "+'</span>'+"관찰됨.<br>\n<br>\n");
    } else if (bro_head_turn == "hld"){
      document.write(" 또한 "+'<span style="font-weight: bold; color: red;">'+"왼쪽 아래로 머리돌림과 기울임이 "+'</span>'+"관찰됨.<br>\n<br>\n");
    } else {
      document.write("<br>\n<br>\n");
    }
  }


  // 홱보기
  if (sacca_eye_movement === "none" || sacca_eye_movement == ""){
    if (sacca_head_turn == "none" || sacca_head_turn == "") {
      document.write("");
    } else {
      if (sacca_head_turn == "good") {
        document.write("● 서로 떨어진 두 물체를 두눈이 동시에 빠르고 정확하게 볼수 있는 홱보기평가(Saccadic)시 머리돌림이나 기울임은 관찰되지 않음.<br>\n<br>\n");
      } else if (sacca_head_turn == "hr"){
        document.write("● 서로 떨어진 두 물체를 두눈이 동시에 빠르고 정확하게 볼수 있는 홱보기평가(Saccadic)시 "+'<span style="font-weight: bold; color: red;">'+"오른쪽 머리돌림이 "+'</span>'+"관찰됨.<br>\n<br>\n");
      } else if (sacca_head_turn == "hl"){
        document.write("● 서로 떨어진 두 물체를 두눈이 동시에 빠르고 정확하게 볼수 있는 홱보기평가(Saccadic)시 "+'<span style="font-weight: bold; color: red;">'+"왼쪽 머리돌림이 "+'</span>'+"관찰됨.<br>\n<br>\n");
      } else if (sacca_head_turn == "htr"){
        document.write("● 서로 떨어진 두 물체를 두눈이 동시에 빠르고 정확하게 볼수 있는 홱보기평가(Saccadic)시 "+'<span style="font-weight: bold; color: red;">'+"오른쪽 머리기울임이 "+'</span>'+"관찰됨.<br>\n<br>\n");
      } else if (sacca_head_turn == "htl"){
        document.write("● 서로 떨어진 두 물체를 두눈이 동시에 빠르고 정확하게 볼수 있는 홱보기평가(Saccadic)시 "+'<span style="font-weight: bold; color: red;">'+"왼쪽 머리기울임이 "+'</span>'+"관찰됨.<br>\n<br>\n");
      } else if (sacca_head_turn == "hru"){
        document.write("● 서로 떨어진 두 물체를 두눈이 동시에 빠르고 정확하게 볼수 있는 홱보기평가(Saccadic)시 "+'<span style="font-weight: bold; color: red;">'+"오른쪽 위로 머리돌림과 기울임이 "+'</span>'+"관찰됨.<br>\n<br>\n");
      } else if (sacca_head_turn == "hrd"){
        document.write("● 서로 떨어진 두 물체를 두눈이 동시에 빠르고 정확하게 볼수 있는 홱보기평가(Saccadic)시 "+'<span style="font-weight: bold; color: red;">'+"오른쪽 아래로 머리돌림과 기울임이 "+'</span>'+"관찰됨.<br>\n<br>\n");
      } else if (sacca_head_turn == "hlu"){
        document.write("● 서로 떨어진 두 물체를 두눈이 동시에 빠르고 정확하게 볼수 있는 홱보기평가(Saccadic)시 "+'<span style="font-weight: bold; color: red;">'+"왼쪽 위로 머리돌림과 기울임이 "+'</span>'+"관찰됨.<br>\n<br>\n");
      } else if (sacca_head_turn == "hld"){
        document.write("● 서로 떨어진 두 물체를 두눈이 동시에 빠르고 정확하게 볼수 있는 홱보기평가(Saccadic)시 "+'<span style="font-weight: bold; color: red;">'+"왼쪽 아래로 머리돌림과 기울임이 "+'</span>'+"관찰됨.<br>\n<br>\n");
      }
    }
  } else {
    if (sacca_eye_movement == 'good') {
      document.write("● 서로 떨어진 두 물체를 두눈이 동시에 빠르고 정확하게 볼수 있는 홱보기평가(Saccadic)시 안구운동이 빠르고 정확함.");
    } else if (sacca_eye_movement == 'jurky') {
      document.write("● 서로 떨어진 두 물체를 두눈이 동시에 빠르고 정확하게 볼수 있는 홱보기평가(Saccadic)시 안구운동이 "+'<span style="font-weight: bold; color: red;">'+"격동움직임으로 주시가 불안정"+'</span>'+"함.");
    } else if (sacca_eye_movement == 'overshoot') {
      document.write("● 서로 떨어진 두 물체를 두눈이 동시에 빠르고 정확하게 볼수 있는 홱보기평가(Saccadic)시 안구운동이 "+'<span style="font-weight: bold; color: red;">'+"과다하게 움직여 주시가 불안정"+'</span>'+"함.");
    } else if (sacca_eye_movement == 'undershoot') {
      document.write("● 서로 떨어진 두 물체를 두눈이 동시에 빠르고 정확하게 볼수 있는 홱보기평가(Saccadic)시 안구운동이 "+'<span style="font-weight: bold; color: red;">'+"저조하게 움직여 주시가 불안정"+'</span>'+"함.");
    } else if (sacca_eye_movement == 'nystagmus') {
      document.write("● 서로 떨어진 두 물체를 두눈이 동시에 빠르고 정확하게 볼수 있는 홱보기평가(Saccadic)시 "+'<span style="font-weight: bold; color: red;">'+"안구진탕으로 주시가 불안정"+'</span>'+"함.");
    } else if (sacca_eye_movement == 'unsteady') {
      document.write("● 서로 떨어진 두 물체를 두눈이 동시에 빠르고 정확하게 볼수 있는 홱보기평가(Saccadic)시 안구운동이 "+'<span style="font-weight: bold; color: red;">'+"주시가 불안정하여 불량"+'</span>'+"함.");
    }

    if (sacca_head_turn == "good") {
      document.write(" 또한 머리돌림이나 기울임은 관찰되지 않음.<br>\n<br>\n");
    } else if (sacca_head_turn == "hr"){
      document.write(" 또한 "+'<span style="font-weight: bold; color: red;">'+"오른쪽 머리돌림이 "+'</span>'+"관찰됨.<br>\n<br>\n");
    } else if (sacca_head_turn == "hl"){
      document.write(" 또한 "+'<span style="font-weight: bold; color: red;">'+"왼쪽 머리돌림이 "+'</span>'+"관찰됨.<br>\n<br>\n");
    } else if (sacca_head_turn == "htr"){
      document.write(" 또한 "+'<span style="font-weight: bold; color: red;">'+"오른쪽 머리기울임이 "+'</span>'+"관찰됨.<br>\n<br>\n");
    } else if (sacca_head_turn == "htl"){
      document.write(" 또한 "+'<span style="font-weight: bold; color: red;">'+"왼쪽 머리기울임이 "+'</span>'+"관찰됨.<br>\n<br>\n");
    } else if (sacca_head_turn == "hru"){
      document.write(" 또한 "+'<span style="font-weight: bold; color: red;">'+"오른쪽 위로 머리돌림과 기울임이 "+'</span>'+"관찰됨.<br>\n<br>\n");
    } else if (sacca_head_turn == "hrd"){
      document.write(" 또한 "+'<span style="font-weight: bold; color: red;">'+"오른쪽 아래로 머리돌림과 기울임이 "+'</span>'+"관찰됨.<br>\n<br>\n");
    } else if (sacca_head_turn == "hlu"){
      document.write(" 또한 "+'<span style="font-weight: bold; color: red;">'+"왼쪽 위로 머리돌림과 기울임이 "+'</span>'+"관찰됨.<br>\n<br>\n");
    } else if (sacca_head_turn == "hld"){
      document.write(" 또한 "+'<span style="font-weight: bold; color: red;">'+"왼쪽 아래로 머리돌림과 기울임이 "+'</span>'+"관찰됨.<br>\n<br>\n");
    } else {
      document.write("<br>\n<br>\n");
    }
  }



  // 입체시-원거리
  if (DStereo === "none") {
    if (NStereo === "none") {

    } else {
      if (NStereo == "good1") {
        document.write("● 망막시차로 인한 상대적 깊이를 인식할 수 있는 입체시평가중 근거리 입체시가 20sec로 양호함.<br>\n<br>\n");
      } else if (NStereo == 'good2') {
        document.write("● 망막시차로 인한 상대적 깊이를 인식할 수 있는 입체시평가중 근거리 입체시가 25sec로 양호함.<br>\n<br>\n");
      } else if (NStereo == 'good3') {
        document.write("● 망막시차로 인한 상대적 깊이를 인식할 수 있는 입체시평가중 근거리 입체시가 30sec로 양호함.<br>\n<br>\n");
      } else if (NStereo == 'good4') {
        document.write("● 망막시차로 인한 상대적 깊이를 인식할 수 있는 입체시평가중 근거리 입체시가 40sec로 양호함.<br>\n<br>\n");
      } else if (NStereo == 'bad0') {
        document.write("● 망막시차로 인한 상대적 깊이를 인식할 수 있는 입체시평가중 근거리 입체시가 "+'<span style="font-weight: bold; color: red;">'+"50sec로 불량"+'</span>'+"함.<br>\n<br>\n");
      } else if (NStereo == 'bad1') {
        document.write("● 망막시차로 인한 상대적 깊이를 인식할 수 있는 입체시평가중 근거리 입체시가 "+'<span style="font-weight: bold; color: red;">'+"60sec로 불량"+'</span>'+"함.<br>\n<br>\n");
      } else if (NStereo == 'bad2') {
        document.write("● 망막시차로 인한 상대적 깊이를 인식할 수 있는 입체시평가중 근거리 입체시가 "+'<span style="font-weight: bold; color: red;">'+"70sec로 불량"+'</span>'+"함.<br>\n<br>\n");
      } else if (NStereo == 'bad3') {
        document.write("● 망막시차로 인한 상대적 깊이를 인식할 수 있는 입체시평가중 근거리 입체시가 "+'<span style="font-weight: bold; color: red;">'+"80sec로 불량"+'</span>'+"함.<br>\n<br>\n");
      } else if (NStereo == 'bad4') {
        document.write("● 망막시차로 인한 상대적 깊이를 인식할 수 있는 입체시평가중, 근거리 입체시가 "+'<span style="font-weight: bold; color: red;">'+"100sec로 불량"+'</span>'+"함.<br>\n<br>\n");
      } else if (NStereo == 'bad5') {
        document.write("● 망막시차로 인한 상대적 깊이를 인식할 수 있는 입체시평가중 근거리 입체시가 "+'<span style="font-weight: bold; color: red;">'+"140sec로 불량"+'</span>'+"함.<br>\n<br>\n");
      } else if (NStereo == 'bad6') {
        document.write("● 망막시차로 인한 상대적 깊이를 인식할 수 있는 입체시평가중 근거리 입체시가 "+'<span style="font-weight: bold; color: red;">'+"200sec로 불량"+'</span>'+"함.<br>\n<br>\n");
      } else if (NStereo == 'bad7') {
        document.write("● 망막시차로 인한 상대적 깊이를 인식할 수 있는 입체시평가중 근거리 입체시가 "+'<span style="font-weight: bold; color: red;">'+"400sec로 불량"+'</span>'+"함.<br>\n<br>\n");
      } else if (NStereo == 'bad8') {
        document.write("● 망막시차로 인한 상대적 깊이를 인식할 수 있는 입체시평가중 근거리 입체시가 "+'<span style="font-weight: bold; color: red;">'+"800sec로 불량"+'</span>'+"함.<br>\n<br>\n");
      } else if (NStereo == 'bad9') {
        document.write("● 망막시차로 인한 상대적 깊이를 인식할 수 있는 입체시평가중 근거리 입체시가 "+'<span style="font-weight: bold; color: red;">'+"3000sec로 불량"+'</span>'+"함.<br>\n<br>\n");
      } else if (NStereo == 'bad') {
        document.write("● 망막시차로 인한 상대적 깊이를 인식할 수 있는 입체시평가중 근거리 입체시표를 "+'<span style="font-weight: bold; color: red;">'+"인지하지 못해 불량"+'</span>'+"함.<br>\n<br>\n");
      }
    }
  } else {
    if (DStereo == 'good'){
     document.write("● 망막시차로 인한 상대적 깊이를 인식할 수 있는 원거리 입체시표중 4방향에서 순서대로 인식할 수 있어 양호함. ");
    } else if (DStereo == 'bad3') {
      document.write("● 망막시차로 인한 상대적 깊이를 인식할 수 있는 원거리 입체시표중 "+'<span style="font-weight: bold; color: blue;">'+"3방향에서 순서대로 인식할 수 있으나 관찰이 필요"+'</span>'+"함. ");
    } else if (DStereo == 'bad2') {
      document.write("● 망막시차로 인한 상대적 깊이를 인식할 수 있는 원거리 입체시표중 "+'<span style="font-weight: bold; color: blue;">'+"상하방향에서만 인식할 수 있어 관찰이 필요"+'</span>'+"함. ");
    }  else if (DStereo == 'bad1') {
      document.write("● 망막시차로 인한 상대적 깊이를 인식할 수 있는 원거리 입체시표의 "+'<span style="font-weight: bold; color: red;">'+"상하방향중 한쪽만 인식할 수 있어 불량"+'</span>'+"함. ");
    } else if (DStereo == 'bad') {
      document.write("● 망막시차로 인한 상대적 깊이를 인식할 수 있는 원거리 입체시표를 "+'<span style="font-weight: bold; color: red;">'+"인식할 수 없어 불량"+'</span>'+"함. ");
    }

    if (NStereo == "good1") {
      document.write("또한, 근거리 입체시가 20sec로 양호함.<br>\n<br>\n");
    } else if (NStereo == 'good2') {
      document.write("또한, 근거리 입체시가 25sec로 양호함.<br>\n<br>\n");
    } else if (NStereo == 'good3') {
      document.write("또한, 근거리 입체시가 30sec로 양호함.<br>\n<br>\n");
    } else if (NStereo == 'good4') {
      document.write("또한, 근거리 입체시가 40sec로 양호함.<br>\n<br>\n");
    } else if (NStereo == 'bad0') {
      document.write("또한, 근거리 입체시가 "+'<span style="font-weight: bold; color: red;">'+"50sec로 불량"+'</span>'+"함.<br>\n<br>\n");
    } else if (NStereo == 'bad1') {
      document.write("또한, 근거리 입체시가 "+'<span style="font-weight: bold; color: red;">'+"60sec로 불량"+'</span>'+"함.<br>\n<br>\n");
    } else if (NStereo == 'bad2') {
      document.write("또한, 근거리 입체시가 "+'<span style="font-weight: bold; color: red;">'+"70sec로 불량"+'</span>'+"함.<br>\n<br>\n");
    } else if (NStereo == 'bad3') {
      document.write("또한, 근거리 입체시가 "+'<span style="font-weight: bold; color: red;">'+"80sec로 불량"+'</span>'+"함.<br>\n<br>\n");
    } else if (NStereo == 'bad4') {
      document.write("또한, 근거리 입체시가 "+'<span style="font-weight: bold; color: red;">'+"100sec로 불량"+'</span>'+"함.<br>\n<br>\n");
    } else if (NStereo == 'bad5') {
      document.write("또한, 근거리 입체시가 "+'<span style="font-weight: bold; color: red;">'+"140sec로 불량"+'</span>'+"함.<br>\n<br>\n");
    } else if (NStereo == 'bad6') {
      document.write("또한, 근거리 입체시가 "+'<span style="font-weight: bold; color: red;">'+"200sec로 불량"+'</span>'+"함.<br>\n<br>\n");
    } else if (NStereo == 'bad7') {
      document.write("또한, 근거리 입체시가 "+'<span style="font-weight: bold; color: red;">'+"400sec로 불량"+'</span>'+"함.<br>\n<br>\n");
    } else if (NStereo == 'bad8') {
      document.write("또한, 근거리 입체시가 "+'<span style="font-weight: bold; color: red;">'+"800sec로 불량"+'</span>'+"함.<br>\n<br>\n");
    } else if (NStereo == 'bad9') {
      document.write("또한, 근거리 입체시가 "+'<span style="font-weight: bold; color: red;">'+"3000sec로 불량"+'</span>'+"함.<br>\n<br>\n");
    } else if (NStereo == 'bad') {
      document.write("또한, 근거리 입체시표를 "+'<span style="font-weight: bold; color: red;">'+"인지하지 못해 불량"+'</span>'+"함.<br>\n<br>\n");
    } else {
      document.write("<br>\n<br>\n");
    }
  }





  // 동공반응
  if (Pupilreflex === "none") {

  } else {
    if (Pupilreflex == 'prompt') {
     document.write("● 펜라이트를 통해 동공의 반응을 검사하는 동공반응검사에서 정상반응으로 양호함.<br>\n<br>\n");
    } else if (Pupilreflex == 'fixed') {
     document.write("● 펜라이트를 통해 동공의 반응을 검사하는 동공반응검사에서 "+'<span style="font-weight: bold; color: red;">'+"빛에 반응이 없어 뇌부종이나 경천막 뇌탈출징후, 동안신경이상"+'</span>'+"이 예상됨.<br>\n<br>\n");
    } else if (Pupilreflex == 'sluggish') {
     document.write("● 펜라이트를 통해 동공의 반응을 검사하는 동공반응검사에서 "+'<span style="font-weight: bold; color: red;">'+"빛에 반응한 동공이 서서히 수축되어 백내장초기나 약물부작용"+'</span>'+"이 예상됨.<br>\n<br>\n");
    } else if (Pupilreflex == 'AlphaOmega') {
     document.write("● 펜라이트를 통해 동공의 반응을 검사하는 동공반응검사에서 "+'<span style="font-weight: bold; color: red;">'+"빛에 반응한 동공이 커졌다 작아졌다하여 동안신경이상, 심한 뇌허혈"+'</span>'+"이 예상됨.<br>\n<br>\n");
    }
  }



  // 원/근거리 수평안위
  if (Dectopic == "" || Dectopic == "NaN" || D_BIBO == "Chois") {
    if (Nectopic == "" || Nectopic == "NaN" || N_BIBO === "Chois") {

   } else {
     if (N_BIBO == 'BI') {
       if (Nectopic > 6 && Nectopic <=10 ) {
         document.write("● "+horEVA_tool+"(으)로 평가한 근거리 수평안위가 정상범위보다 많은 "+'<span style="font-weight: bold; color: red;">'+"약도 외편위로 불량"+'</span>'+"함.<br>\n<br>\n");
       } else if (Nectopic >10 && Nectopic<=30){
        document.write("● "+horEVA_tool+"(으)로 평가한 근거리 수평안위가 정상범위보다 많은 "+'<span style="font-weight: bold; color: red;">'+"중등도 외편위로 불량"+'</span>'+"함.<br>\n<br>\n");
       }  else if (Nectopic > 30){
        document.write("● "+horEVA_tool+"(으)로 평가한 근거리 수평안위가 정상범위보다 많은 "+'<span style="font-weight: bold; color: red;">'+"고도 외편위로 불량"+'</span>'+"함.<br>\n<br>\n");
       } else {
        document.write("● "+horEVA_tool+"(으)로 평가한 근거리 수평안위가 정상범위로 양호함.<br>\n<br>\n");
       }
     } else if (N_BIBO == 'BO'){
       if (Nectopic > 0 && Nectopic <=10 ) {
        document.write("● "+horEVA_tool+"(으)로 평가한 근거리 수평안위가 정상범위보다 많은 "+'<span style="font-weight: bold; color: red;">'+"약도 내편위로 불량"+'</span>'+"함.<br>\n<br>\n");
       } else if (Nectopic > 10 && Dectopic <=30 ){
         document.write("● "+horEVA_tool+"(으)로 평가한 근거리 수평안위가 정상범위보다 많은 "+'<span style="font-weight: bold; color: red;">'+"중등도 내편위로 불량"+'</span>'+"함.<br>\n<br>\n");
       } else if (Nectopic > 30 ){
         document.write("● "+horEVA_tool+"(으)로 평가한 근거리 수평안위가 정상범위보다 많은 "+'<span style="font-weight: bold; color: red;">'+"고도 내편위로 불량"+'</span>'+"함.<br>\n<br>\n");
       } else {
         document.write("● "+horEVA_tool+"(으)로 평가한 근거리 수평안위가 정상범위로 양호함.<br>\n<br>\n");
       }
     }
   }
  } else {
    if (D_BIBO == 'BI') {
      if (Dectopic > 3 && Dectopic <=10 ) {
        document.write("● "+horEVA_tool+"(으)로 평가한 원거리 수평안위가 정상범위보다 많은 "+'<span style="font-weight: bold; color: red;">'+"약도 외편위로 불량"+'</span>'+"함.");
      } else if (Dectopic >10 && Dectopic<=30){
       document.write("● "+horEVA_tool+"(으)로 평가한 원거리 수평안위가 정상범위보다 많은 "+'<span style="font-weight: bold; color: red;">'+"중등도 외편위로 불량"+'</span>'+"함.");
      } else if (Dectopic > 30){
       document.write("● "+horEVA_tool+"(으)로 평가한 원거리 수평안위가 정상범위보다 많은 "+'<span style="font-weight: bold; color: red;">'+"고도 외편위로 불량"+'</span>'+"함.");
      } else {
       document.write("● "+horEVA_tool+"(으)로 평가한 원거리 수평안위가 정상범위로 양호함.");
      }
    } else if (D_BIBO == 'BO'){
      if (Dectopic > 1 && Dectopic <=10 ) {
       document.write("● "+horEVA_tool+"(으)로 평가한 원거리 수평안위가 정상범위보다 많은 "+'<span style="font-weight: bold; color: red;">'+"약도 내편위로 불량"+'</span>'+"함.");
      } else if (Dectopic > 10 && Dectopic <=30 ){
        document.write("● "+horEVA_tool+"(으)로 평가한 원거리 수평안위가 정상범위보다 많은 "+'<span style="font-weight: bold; color: red;">'+"중등도 내편위로 불량"+'</span>'+"함.");
      } else if (Dectopic > 30 ){
        document.write("● "+horEVA_tool+"(으)로 평가한 원거리 수평안위가 정상범위보다 많은 "+'<span style="font-weight: bold; color: red;">'+"고도 내편위로 불량"+'</span>'+"함.");
      } else {
        document.write("● "+horEVA_tool+"(으)로 평가한 원거리 수평안위가 정상범위로 양호함.");
      }
    }

    if (N_BIBO == 'BI') {
      if (Nectopic > 6 && Nectopic <=10 ) {
        document.write(" 또한, 근거리 수평안위가 정상범위보다 많은 "+'<span style="font-weight: bold; color: red;">'+"약도 외편위로 불량"+'</span>'+"함.<br>\n<br>\n");
      } else if (Nectopic >10 && Nectopic<=30){
       document.write(" 또한, 근거리 수평안위가 정상범위보다 많은 "+'<span style="font-weight: bold; color: red;">'+"중등도 외편위로 불량"+'</span>'+"함.<br>\n<br>\n");
      }  else if (Nectopic > 30){
       document.write(" 또한, 근거리 수평안위가 정상범위보다 많은 "+'<span style="font-weight: bold; color: red;">'+"고도 외편위로 불량"+'</span>'+"함.<br>\n<br>\n");
      } else {
       document.write(" 또한, 근거리 수평안위가 정상범위로 양호함.<br>\n<br>\n");
      }
    } else if (N_BIBO == 'BO'){
      if (Nectopic > 0 && Nectopic <=10 ) {
       document.write(" 또한, 근거리 수평안위가 정상범위보다 많은 "+'<span style="font-weight: bold; color: red;">'+"약도 내편위로 불량"+'</span>'+"함.<br>\n<br>\n");
      } else if (Nectopic > 10 && Dectopic <=30 ){
        document.write(" 또한, 근거리 수평안위가 정상범위보다 많은 "+'<span style="font-weight: bold; color: red;">'+"중등도 내편위로 불량"+'</span>'+"함.<br>\n<br>\n");
      } else if (Nectopic > 30 ){
        document.write(" 또한, 근거리 수평안위가 정상범위보다 많은 "+'<span style="font-weight: bold; color: red;">'+"고도 내편위로 불량"+'</span>'+"함.<br>\n<br>\n");
      } else {
        document.write(" 또한, 근거리 수평안위가 정상범위로 양호함.<br>\n<br>\n");
      }
    } else {
      document.write("<br>\n<br>\n");
    }
  }




  // 수직안위-원거리,근거리
  if (DVertical == "" || NVertical == "" || verEVA_tool== "chois" ){

  } else {
    if (DVertical > 0 ) {
      if (NVertical > 0) {
         document.write("● "+verEVA_tool+"(으)로 평가한 원거리와 근거리 수직안위에 "+'<span style="font-weight: bold; color: red;">'+"편위가 있어 불량"+'</span>'+"함.<br>\n<br>\n");
      } else {
        document.write("● "+verEVA_tool+"(으)로 평가한 원거리 수직안위에 "+'<span style="font-weight: bold; color: red;">'+"편위가 있어 불량"+'</span>'+"함.<br>\n<br>\n");
      }
    } else {
      if (NVertical >0) {
         document.write("● "+verEVA_tool+"(으)로 평가한 근거리 수직안위에 "+'<span style="font-weight: bold; color: red;">'+"편위가 있어 불량"+'</span>'+"함.<br>\n<br>\n");
      } else {
        document.write("● "+verEVA_tool+"(으)로 평가한 원거리와 근거리의 수직안위가 양호함.<br>\n<br>\n");
      }
    }
  }


  // 원거리 양성/음성 융합력
  if (DConver2 == "" || DConver3 == "" ){
    if (DDever2 == "" || DDever3 == "" ){

    } else {
      if (DDever2 <= 4) {
        document.write("● "+DVer_tool+"(으)로 평가한 원거리 수평음성융합력이 "+DDever2+" / "+DDever3+" 로 "+'<span style="font-weight: bold; color: red;">'+"정상범위보다 불량"+'</span>'+"함.<br>\n<br>\n");
      } else {
        if (Dectopic*2 > DDever2) {
          document.write("● "+DVer_tool+"(으)로 평가한 원거리 수평음성융합력이 "+DDever2+" / "+DDever3+" 로 "+'<span style="font-weight: bold; color: red;">'+"편위량의 2배보다 적어서 불량"+'</span>'+"함.<br>\n<br>\n");
        } else {
          document.write("● "+DVer_tool+"(으)로 평가한 원거리 수평음성융합력이 "+DDever2+" / "+DDever3+" 로 정상범위로 평가됨.<br>\n<br>\n");
        }
      }
    }
  } else {
    if (DConver2 <= 11) {
      document.write("● "+DVer_tool+"(으)로 평가한 원거리 수평양성융합력이 "+DConver1+" / "+DConver2+" / "+DConver3+" 로 "+'<span style="font-weight: bold; color: red;">'+"정상범위보다 불량"+'</span>'+"함.");
    } else if (DConver2 > 11){
      if (Dectopic*2 > DConver2) {
        document.write("● "+DVer_tool+"(으)로 평가한 원거리 수평양성융합력이 "+DConver1+" / "+DConver2+" / "+DConver3+" 로 "+'<span style="font-weight: bold; color: red;">'+"편위량의 2배보다 적어서 불량"+'</span>'+"함.");
      } else {
        document.write("● "+DVer_tool+"(으)로 평가한 원거리 수평양성융합력이 "+DConver1+" / "+DConver2+" / "+DConver3+" 로 정상범위로 평가됨.");
      }
    }

    if (DDever2 <= 4) {
       document.write("또한, 수평음성융합력은 "+DDever2+" / "+DDever3+" 로 "+'<span style="font-weight: bold; color: red;">'+"정상범위보다 불량"+'</span>'+"함.<br>\n<br>\n");
    } else if (DDever2 > 4){
      if (Dectopic*2 > DDever2) {
       document.write("또한, 수평음성융합력은 "+DDever2+" / "+DDever3+" 로 "+'<span style="font-weight: bold; color: red;">'+"편위량의 2배보다 적어서 불량"+'</span>'+"함.<br>\n<br>\n");
      } else {
        document.write("또한, 수평음성융합력은 "+DDever2+" / "+DDever3+" 로 정상범위로 평가됨.<br>\n<br>\n");
      }
    } else {
      document.write("<br>\n<br>\n");
    }
  }








    // 원거리/근거리 양성융합력
    if (NConver2 == "" || NConver3 == "" ){
      if (NDever2 == "" || NDever3 == "" ){

      } else {
        if (NDever2 < 17) {
             document.write("● "+NVer_tool+"(으)로 평가한 근거리 수평음성융합력이 "+NDever1+" / "+NDever2+" / "+NDever3+" 로 "+'<span style="font-weight: bold; color: red;">'+"정상범위보다 불량"+'</span>'+"함.<br>\n<br>\n");
          } else if (NDever2 >= 17) {

              if (Nectopic*2 > NDever2) {
                document.write("● "+NVer_tool+"(으)로 평가한 근거리 수평음성융합력이 "+NDever1+" / "+NDever2+" / "+NDever3+" 로 "+'<span style="font-weight: bold; color: red;">'+"편위량의 2배보다 적어서 불량"+'</span>'+"함.<br>\n<br>\n");
              } else {
                document.write("● "+NVer_tool+"(으)로 평가한 근거리 수평음성융합력이 "+NDever1+" / "+NDever2+" / "+NDever3+" 로 정상범위로 평가됨.<br>\n<br>\n");
            }
          }

      }
    } else {
      if (NConver2 < 15) {
          document.write("● "+NVer_tool+"(으)로 평가한 근거리 수평양성융합력이 "+NConver1+" / "+NConver2+" / "+NConver3+" 로 "+'<span style="font-weight: bold; color: red;">'+"정상범위보다 불량"+'</span>'+"함.");
        } else if (NConver2 >= 15) {
          if (Nectopic*2 > NConver2) {
            document.write("● "+NVer_tool+"(으)로 평가한 근거리 수평양성융합력이 "+NConver1+" / "+NConver2+" / "+NConver3+" 로 "+'<span style="font-weight: bold; color: red;">'+"편위량의 2배보다 적어서 불량"+'</span>'+"함.");
          } else {
            document.write("● "+NVer_tool+"(으)로 평가한 근거리 수평양성융합력이 "+NConver1+" / "+NConver2+" / "+NConver3+" 로 정상범위로 평가됨.");
          }
        }

        if (NDever2 < 17) {
             document.write("또한, 수평음성융합력이 "+NDever1+" / "+NDever2+" / "+NDever3+" 로 "+'<span style="font-weight: bold; color: red;">'+"정상범위보다 불량"+'</span>'+"함.<br>\n<br>\n");
          } else if (NDever2 >= 17) {
            if (N_BIBO === "BO") {
              if (Nectopic*2 > NDever2) {
                document.write("또한, 수평음성융합력이 "+NDever1+" / "+NDever2+" / "+NDever3+" 로 "+'<span style="font-weight: bold; color: red;">'+"편위량의 2배보다 적어서 불량"+'</span>'+"함.<br>\n<br>\n");
              } else {
                document.write("또한, 수평음성융합력이 "+NDever1+" / "+NDever2+" / "+NDever3+" 로 정상범위로 평가됨.<br>\n<br>\n");
            }
          } else {
            document.write("또한, 수평음성융합력이 "+NDever1+" / "+NDever2+" / "+NDever3+" 로 정상범위로 평가됨.<br>\n<br>\n");
          }
        } else {
          document.write("<br>\n<br>\n");
        }
      }


      //버전스용이
      if (VerRev === "" || VerRev === "NaN" || isNaN(VerRev)){

      } else {
      if (VerRev >= 15) {
        document.write("● 두눈의 이향운동을 신속하고 정확하게 변환시키는 버전스용이평가에서 "+VerRev+"cpm으로 양호함.<br>\n<br>\n");
      } else {
        document.write("● 두눈의 이향운동을 신속하고 정확하게 변환시키는 버전스용이평가에서 "+'<span style="font-weight: bold; color: red;">'+VerRev+"cpm으로 불량"+'</span>'+"함.<br>\n<br>\n");
      }
    }

    // 원거리Maddox
    if (D_agree === "" || D_agree === "NaN" || isNaN(D_agree)){
      if (N_agree === "" || N_agree === "NaN" || isNaN(N_agree)){

      } else {
        if(N_agree == "agree") {
          document.write("● 두눈의 융합자극을 제거한 상태로 편위방향과 편위량을 평가하는 근거리 Maddox평가에서 두눈이 정렬되어 광원과 선조상이 일치되어 보임.<br>\n<br>\n");
        } else if (N_agree == "discord"){
          if(NHor_maddox == "" || NHor_maddox == "NaN"){
            document.write("● 두눈의 융합자극을 제거한 상태로 편위방향과 편위량을 평가하는 근거리 Maddox평가에서 "+'<span style="font-weight: bold; color: red;">'+"두눈이 정렬되지 않아 광원과 선조상이 떨어져 불량"+'</span>'+"함.<br>\n<br>\n");
          } else if(NHor_maddox <= 10) {
            if(NHor_BIBO == "BI"){
              var text_NH_maddox = "약도외편위";
            } else if(NHor_BIBO == "BO"){
              var text_NH_maddox = "약도내편위";
            }
          } else if (NHor_maddox > 10 && NHor_maddox <= 30){
            if(NHor_BIBO == "BI"){
              var text_NH_maddox = "중등도외편위";
            } else if(NHor_BIBO == "BO"){
              var text_NH_maddox = "중등도내편위";
            }
          } else if (NHor_maddox > 30) {
            if(NHor_BIBO == "BI"){
              var text_NH_maddox = "고도외편위";
            } else if (NHor_BIBO == "BO"){
              var text_NH_maddox = "고도내편위";
            }
          }

          if(NVer_maddox == "" || NVer_maddox == "NaN"){
            var text_NV_maddox = "";
          } else {
            var text_NV_maddox = ", 수직편위";
          }
          document.write("● 두눈의 융합자극을 제거한 상태로 편위방향과 편위량을 평가하는 근거리 Maddox평가에서 "+'<span style="font-weight: bold; color: red;">'+text_NH_maddox+text_NV_maddox+"로 불량"+'</span>'+"함.<br>\n<br>\n");
        }
      }
    } else {
      if(D_agree == "agree") {
        if (N_agree == "" || N_agree == "NaN") {
          document.write("● 두눈의 융합자극을 제거한 상태로 편위방향과 편위량을 평가하는 원거리 Maddox평가에서 두눈이 정렬되어 광원과 선조상이 일치됨.<br>\n<br>\n");
        } else if(N_agree == "agree") {
          document.write("● 두눈의 융합자극을 제거한 상태로 편위방향과 편위량을 평가하는 Maddox평가에서 원거리와 근거리 모두 두눈이 정렬되어 광원과 선조상이 일치됨.<br>\n<br>\n");
        } else if (N_agree == "discord"){
          if(NHor_maddox == "" || NHor_maddox == "NaN"){
            document.write("● 두눈의 융합자극을 제거한 상태로 편위방향과 편위량을 평가하는 Maddox평가에서 원거리는 두눈이 정렬되어 광원과 선조상이 일치되어 보이나, 근거리는 "+'<span style="font-weight: bold; color: red;">'+"두눈이 정렬되지 않아 광원과 선조상이 떨어져 보여 불량"+'</span>'+"함.<br>\n<br>\n");
          } else if(NHor_maddox <= 10) {
            if(NHor_BIBO == "BI"){
              var text_NH_maddox = "약도외편위";
            } else if(NHor_BIBO == "BO"){
              var text_NH_maddox = "약도내편위";
            }
          } else if (NHor_maddox > 10 && NHor_maddox <= 30){
            if(NHor_BIBO == "BI"){
              var text_NH_maddox = "중등도외편위";
            } else if(NHor_BIBO == "BO"){
              var text_NH_maddox = "중등도내편위";
            }
          } else if (NHor_maddox > 30) {
            if(NHor_BIBO == "BI"){
              var text_NH_maddox = "고도외편위";
            } else if (NHor_BIBO == "BO"){
              var text_NH_maddox = "고도내편위";
            }
          }

          if(NVer_maddox == "" || NVer_maddox == "NaN"){
            var text_NV_maddox = "";
          } else {
            var text_NV_maddox = ", 수직편위";
          }
          document.write("● 두눈의 융합자극을 제거한 상태로 편위방향과 편위량을 평가하는 Maddox평가에서 원거리는 두눈이 정렬되어 광원과 선조상이 일치되어 보이나, 근거리는 "+'<span style="font-weight: bold; color: red;">'+text_NH_maddox+text_NV_maddox+"로 불량"+'</span>'+"함.<br>\n<br>\n");
        }
      } else if (D_agree == "discord"){
        if(DHor_maddox == "" || DHor_maddox == "NaN"){
          if (N_agree == "" || N_agree == "NaN") {
            document.write("● 두눈의 융합자극을 제거한 상태로 편위방향과 편위량을 평가하는 원거리 Maddox평가에서 "+'<span style="font-weight: bold; color: red;">'+"두눈이 정렬되지 않아 광원과 선조상이 떨어져 불량"+'</span>'+"함.<br>\n<br>\n");
          } else {
            if(N_agree == "agree") {
              document.write("● 두눈의 융합자극을 제거한 상태로 편위방향과 편위량을 평가하는 Maddox평가에서 원거리는 "+'<span style="font-weight: bold; color: red;">'+"두눈이 정렬되지 않아 광원과 선조상이 떨어져 불량"+'</span>'+"하고, 근거리는 두눈이 정렬되어 광원과 선조상이 일치됨.<br>\n<br>\n");
            } else if (N_agree == "discord"){
              if(NHor_maddox == "" || NHor_maddox == "NaN"){
                document.write("● 두눈의 융합자극을 제거한 상태로 편위방향과 편위량을 평가하는 Maddox평가에서 원거리와 근거리 모두 "+'<span style="font-weight: bold; color: red;">'+"두눈이 정렬되지 않아 광원과 선조상이 떨어져 보여 불량"+'</span>'+"함.<br>\n<br>\n");
              } else if(NHor_maddox <= 10) {
                if(NHor_BIBO == "BI"){
                  var text_NH_maddox = "약도외편위";
                } else if(NHor_BIBO == "BO"){
                  var text_NH_maddox = "약도내편위";
                }
              } else if (NHor_maddox > 10 && NHor_maddox <= 30){
                if(NHor_BIBO == "BI"){
                  var text_NH_maddox = "중등도외편위";
                } else if(NHor_BIBO == "BO"){
                  var text_NH_maddox = "중등도내편위";
                }
              } else if (NHor_maddox > 30) {
              if(NHor_BIBO == "BI"){
                var text_NH_maddox = "고도외편위";
              } else if (NHor_BIBO == "BO"){
                var text_NH_maddox = "고도내편위";
              }
            }

            if(NVer_maddox == "" || NVer_maddox == "NaN"){
              var text_NV_maddox = "";
            } else {
              var text_NV_maddox = ", 수직편위";
            }
            document.write("● 두눈의 융합자극을 제거한 상태로 편위방향과 편위량을 평가하는 Maddox평가에서 원거리는 "+'<span style="font-weight: bold; color: red;">'+"두눈이 정렬되지 않아 광원과 선조상이 떨어져 불량"+'</span>'+"하고, 근거리는 "+'<span style="font-weight: bold; color: red;">'+text_NH_maddox+text_NV_maddox+"로 불량"+'</span>'+"함.<br>\n<br>\n");
          }
        }
      } else {
        if (DHor_maddox <= 10) {
          if(DHor_BIBO == "BI"){
            var text_DH_maddox = "약도외편위";
          } else if(DHor_BIBO == "BO"){
            var text_DH_maddox = "약도내편위";
          }
        } else if (DHor_maddox > 10 && DHor_maddox <= 30){
          if(DHor_BIBO == "BI"){
            var text_DH_maddox = "중등도외편위";
          } else if(DHor_BIBO == "BO"){
            var text_DH_maddox = "중등도내편위";
          }
        } else if (DHor_maddox > 30) {
          if(DHor_BIBO == "BI"){
            var text_DH_maddox = "고도외편위";
          } else if(DHor_BIBO == "BO"){
            var text_DH_maddox = "고도내편위";
          }
        }

        if(DVer_maddox == "" || DVer_maddox == "NaN"){
          var text_DV_maddox = "";
        } else {
          var text_DV_maddox = ", 수직편위";
        }
        document.write("● 두눈의 융합자극을 제거한 상태로 편위방향과 편위량을 평가하는 원거리 Maddox평가에서 "+'<span style="font-weight: bold; color: red;">'+text_DH_maddox+text_DV_maddox+"로 불량"+'</span>'+"함.<br>\n<br>\n");

        if(N_agree == "agree") {
          document.write(" 또한, 근거리에서 두눈이 정렬되어 광원과 선조상이 일치됨.<br>\n<br>\n");
        } else if (N_agree == "discord"){
          if(NHor_maddox == "" || NHor_maddox == "NaN"){
            document.write(" 또한, 근거리에서 "+'<span style="font-weight: bold; color: red;">'+"두눈이 정렬되지 않아 광원과 선조상이 떨어져 보여 불량"+'</span>'+"함.<br>\n<br>\n");
          } else if(NHor_maddox <= 10) {
            if(NHor_BIBO == "BI"){
              var text_NH_maddox = "약도외편위";
            } else if(NHor_BIBO == "BO"){
              var text_NH_maddox = "약도내편위";
            }
          } else if (NHor_maddox > 10 && NHor_maddox <= 30){
            if(NHor_BIBO == "BI"){
              var text_NH_maddox = "중등도외편위";
            } else if(NHor_BIBO == "BO"){
              var text_NH_maddox = "중등도내편위";
            }
          } else if (NHor_maddox > 30) {
            if(NHor_BIBO == "BI"){
              var text_NH_maddox = "고도외편위";
            } else if (NHor_BIBO == "BO"){
              var text_NH_maddox = "고도내편위";
            }
          }

          if(NVer_maddox == "" || NVer_maddox == "NaN"){
            var text_NV_maddox = "";
          } else {
            var text_NV_maddox = ", 수직편위";
          }
          document.write(" 또한, 근거리에서 "+'<span style="font-weight: bold; color: red;">'+text_NH_maddox+text_NV_maddox+"로 불량"+'</span>'+"함.<br>\n<br>\n");
        }
      }
    }
  }




    // MIT
    if(MIT !== ""){
      if(MIT == "good"){
        document.write("● 황반부의 중심으로 주시할수 있는지를 자각적으로 관찰할 수 있는 황반부통합검사에서 중심주시로 양호함.<br>\n<br>\n");
      } else if (MIT == "bad"){
        document.write("● 황반부의 중심으로 주시할수 있는지를 자각적으로 관찰할 수 있는 황반부통합검사에서 "+'<span style="font-weight: bold; color: red;">'+"중심외주시로 불량"+'</span>'+"함.<br>\n<br>\n");
      }
    } else {

    }
