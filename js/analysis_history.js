

// 방문목적
if (che_visit !== "" || che_request !== ""  ){
  document.write("● 방문목적 : ");
  if (che_request !== ""){
    document.write(che_request+"으로 "+che_visit+"(을)를 받기위해 방문함."+"<br>");
  } else {
    document.write(che_visit+"(으)로 방문함."+"<br>");
  }
  document.write("");
}

// 방문목적
if (text_request1 !== "" || text_request2 !== "" || text_request3 !== ""){
  document.write("● 의뢰정보 : ");
  document.write(text_request1+" "+text_request2+" "+text_request3+"<br>\n");
} else {
  document.write("");
}

// 본인 안병력
if(radio_cl !== "" || che_eye_disease_self !== "" || text_eye_disease_self !== "" || radio_surgery1 !== ""  ){
  document.write("● 본인 안병력 : ");
  if(radio_cl == "yes"){
    if(text_glasscl !== ""){
      if(text_lasttest !== ""){
        document.write(text_glasscl+"부터 안경(또는 C/L)을 사용하였고, 최종검사일은 "+text_lasttest+"임. ");
      } else {
        document.write(text_glasscl+"부터 안경(또는 C/L)을 사용함. ");
      }
    } else {
      if(text_lasttest !== ""){
        document.write("안경(또는 C/L)을 사용하고, 최종검사일은 "+text_lasttest+"임. ");
      } else {
        document.write("안경(또는 C/L)을 사용함. ");
      }
    }
  } else if (radio_cl == "no"){
    document.write("안경 및 C/L 사용경험 없음. ");
  }
  if(che_eye_disease_self !== "" || text_eye_disease_self !== ""){
    document.write(che_eye_disease_self+text_eye_disease_self+"이(가) 있음. ");
  }

  if(radio_surgery1 !== ""){
    if(radio_surgery1 == "no"){
      document.write("안과수술력은 없음. ");
    } else if (radio_surgery1 == "yes"){
      if(text_surgery1 == ""){
        document.write("안과수술력이 있음. ");
      } else {
        document.write(text_surgery1);
      }
    }
  }
  document.write("<br>\n");
} else {
  document.write("● 본인 안병력 : 특이사항 없음.<br>\n");
}

// ● 가족 안병력 :
if(che_eye_disease_family !== "" || text_eye_disease_family !== "" || radio_surgery2 !== ""){
  document.write("● 가족 안병력 : ");
  if (che_eye_disease_family !== "" || text_eye_disease_family !== ""){
    document.write(che_eye_disease_family+text_eye_disease_family+"이(가) 있음. ");
  }
  if(radio_surgery2 == ""){
    document.write("");
  }else{
    if(radio_surgery2 == "no"){
      document.write("안과수술력은 없음. ");
    } else if (radio_surgery2 == "yes"){
      if(text_surgery2 == ""){
        document.write("안과수술력이 있음. ");
      } else {
        document.write(text_surgery2+".");
      }
    }
  }
  document.write("<br>\n");
}

// ● 본인 전신병력 :
if (text_body_disease_self !== "" || che_body_disease_self !== "" || radio_surgery3 !== "") {
  document.write("● 본인 전신병력 : ");
  if(text_body_disease_self !== "" || che_body_disease_self !== ""){
    document.write(text_body_disease_self+che_body_disease_self+"이(가) 있음. ");
  }
  if(radio_surgery3 !== ""){
    if(radio_surgery3 == "no"){
      document.write("수술력은 없음. ");
    } else if (radio_surgery3 == "yes"){
      if(text_surgery3 !== ""){
          document.write(text_surgery3+" 받음. ");
         if(text_record7 !== ""){
          document.write(ext_record7+"에 마지막으로 검사받음. ");
        }
      }
    }
  }
  document.write("<br>\n");
} else {
  document.write("● 본인 전신병력 : 특이사항 없음.<br>\n");
}


// ● 가족 전신병력 :
if (che_body_disease_family !== "" || text_body_disease_family !== "" || radio_surgery4 !== "") {
  document.write("● 가족 전신병력 : ");
  if(che_body_disease_family !== "" || text_body_disease_family !== ""){
    document.write(che_body_disease_family+text_body_disease_family+"이(가) 있음. ");
  }
  if(radio_surgery4 !== ""){
    if(radio_surgery4 == "no"){
      document.write("수술력은 없음. ");
    } else if (radio_surgery4 == "yes"){
      if(text_surgery4 == ""){
        document.write("수술력이 있음. ");
      } else {
        document.write(text_surgery4+".");
      }
    }
  }
  document.write("<br>\n");
}


// ● 본인 약물복용 :
if(radio_drug !== ""){
  document.write("● 본인 약물복용 : ");
  if(radio_drug == "no"){
    document.write("평소 복용하는 약물은 없음. ");
  } else if (radio_drug == "yes"){
    if(text_drug !== ""){
      if(text_disease !== ""){
        document.write(text_disease_name+"(으)로 "+text_drug+"(을)를 복용하고 있음. ");
      } else {
        document.write(ext_drug+"을 복용하고 있음. ");
      }
    }
  }
  document.write("<br>\n");
}


// ● 학교생활 :
if (che_school_prob !== "" || radio_school !== "" || radio_friend !== "" || radio_teacher !== "" || radio_report !== "" || text_school_prob !== "") {
  if(che_school_prob !== ""){
      document.write(che_school_prob+"이 있음. ");
  }
  if(radio_school !== ""){
    if(radio_school == "yes"){
      document.write("학교가기를 좋아함. ");
    } else if(radio_school == "no") {
      document.write("학교가기를 좋아하지 않음. ");
    }
  }
  if(radio_friend !== ""){
    if(radio_friend == "yes"){
      document.write("학급친구들을 좋아함. ");
    }else if(radio_friend == "no") {
      document.write("학급친구들과 친하지 않음. ");
    }
  }
  if(radio_teacher !== ""){
    if(radio_teacher == "yes"){
      document.write("선생님을 좋아함. ");
    }else if(radio_teacher == "no") {
      document.write("선생님과 친하지 않음. ");
    }
  }
  if(radio_report !== ""){
    if(radio_report == "good"){
      document.write("학업성취도가 우수함. ");
    }else if(radio_report == "nomal"){
      document.write("학업성취도는 보통임. ");
    }else if(radio_report == "bad") {
      document.write("학업성취도가 저조함. ");
    }
  }
  if(text_school_prob !== ""){
    document.write(text_school_prob);
  }
  document.write("<br>\n");
} else {
  document.write("● 학교생활 : 특이사항 없음.<br>\n");
}

// ● 출산기록 :
if (radio_mother_health !== "" || radio_delivery1 !== "" || radio_delivery2 !== "") {
  document.write("● 출산기록 : ");
  if(radio_mother_health !== ""){
    if(radio_mother_health == "good"){
      document.write("임신기간중 산모건강상태는 양호했음. ");
    } else if (radio_mother_health == "bad") {
      if(text_mother_health !== ""){
        document.write("임신기간중("+text_mother_health+")합병증이 있었음. ");
      } else {
        document.write("임신기간중 합병증이 있었음. ");
      }
    }
  }
  if(radio_delivery1 !== ""){
      if(radio_delivery2 == ""){
        document.write(radio_delivery1+"(으)로 출산함. ");
      }else{
        if(radio_delivery2 == "early"){
          if(text_delivery2 !== ""){
            document.write(radio_delivery1+"(으)로 "+text_delivery2+" 조산함. ");
          } else {
            document.write(radio_delivery1+"(으)로 조산함. ");
          }
        } else if(radio_delivery2 == "full") {
          document.write(radio_delivery1+"(으)로 만삭 출산함. ");
        }
      }
    }
    document.write("<br>\n");
  }


// ● 발달기록 :
if (radio_crawl !== "" || radio_creeping !== "" || text_walk !== "" || radio_run !== "" || radio_pitch !== "" || radio_micactiv !== "" || radio_dress !== "" || radio_zipper !== "" || radio_bicycle !== "" || radio_play !== "" || che_tired !== "" || text_tired !== "" || che_nervous !== "" || text_nervous !== "" || radio_langs !== "" || text_character !== "" ) {
  document.write("● 발달기록 : ");
  if(radio_crawl !== ""){
    if(radio_crawl == "no"){
      document.write("배밀이를 하지 않음. ");
    } else if(radio_crawl == "yes") {
      if(text_crawl !== ""){
        document.write(ext_crawl+"개월에 배밀이를 함. ");
      } else {
        document.write("배밀이를 했음. ");
      }
    }
  }
  if(radio_creeping !== ""){
    if(radio_creeping == "no"){
      document.write("기어가기를 하지 않음. ");
    } else if(radio_creeping == "yes"){
      if(text_creeping !== ""){
        document.write(text_creeping+"개월에 기어가기를 함. ");
      } else {
        document.write("기어가기를 했음. ");
      }
    }
  }
  if(text_walk !== ""){
    document.write(text_walk+"개월에 걸음. ");
  }
  if(radio_run !== ""){
    if(radio_run == "yes"){
      document.write("또래와 비슷하게 달릴 수 있음. ");
    } else if(radio_run == "no"){
      if(text_run !== ""){
        document.write("("+text_run+")이유로 달리기 어려움. ");
      } else {
        document.write("또래와 비슷하게 달리기 어려움. ");
      }
    }
  }
  if(radio_pitch !== ""){
    if(radio_pitch == "yes"){
      document.write("또래와 비슷하게 공을 잡거나 던질 수 있음. ");
    } else if (radio_pitch == "no"){
      if(text_pitch !== ""){
        document.write("("+text_pitch+")이유로 공을 잡거나 던지기에 어려움. ");
      } else {
        document.write("또래와 비슷하게 공을 잡거나 던지기 어려움. ");
      }
    }
  }
  if(radio_micactiv !== ""){
    if(radio_micactiv == "yes"){
      document.write("미세활동을 즐겨함. ");
    } else if (radio_micactiv == "no") {
      if(text_micactiv !== ""){
        document.write("("+text_micactiv+")이유로 미세활동을 즐겨하지 않음. ");
      } else {
        document.write("미세활동을 즐겨하지 않음. ");
      }
    }
  }
  if(radio_dress !== ""){
    if(radio_dress == "yes"){
      document.write("혼자 옷을 입을 수 있음. ");
    } else if (radio_dress == "no"){
      if(text_dress !== ""){
        document.write("("+text_dress+")이유로 혼자 옷입기 어려움. ");
      } else {
        document.write("혼자 옷입기 어려움. ");
      }
    }
  }
  if(radio_zipper !== ""){
    if(radio_zipper == "yes"){
      document.write("단추를 잠그거나 지퍼를 올릴 수 있음 . ");
    } else if (radio_zipper == "no"){
      if(text_zipper !== ""){
        document.write("("+text_zipper+")이유로 단추를 잠그거나 지퍼를 올리기 어려움. ");
      } else {
        document.write("단추를 잠그거나 지퍼를 올리기 어려움. ");
      }
    }
  }
  if(radio_bicycle !== ""){
    if(radio_bicycle == "no"){
      document.write("자전거 배우는데 어려움이 없음. ");
    }else if(radio_bicycle == "yes"){
      if(text_bicycle !== ""){
        document.write("("+text_bicycle+")이유로 자전거 배우는데 어려움. ");
      } else {
        document.write("자전거 배우는데 어려움. ");
      }
    }
  }
  if(radio_play !== ""){
    if(radio_play == "no"){
      document.write("운동에 어려움이 없음. ");
    }else if(radio_play == "yes") {
      if(text_play !== ""){
        document.write("("+text_play+")을(를) 어려워함. ");
      } else {
        document.write("운동하는데 어려움이 있음. ");
      }
    }
  }
  if(che_tired !== ""){
    if(text_tired !== ""){
      document.write("피곤하면 "+che_tired+""+text_tired+". ");
    } else {
      document.write("피곤하면 "+che_tired+". ");
    }
  } else {
    if(text_tired !== ""){
      document.write("피곤하면 "+text_tired+". ");
    }
  }
  if(che_nervous !== ""){
    if(text_nervous !== ""){
      document.write("긴장하면 "+che_nervous+text_nervous+"을(를) 함. ");
    } else {
      document.write("긴장하면 "+che_nervous+"을(를) 함. ");
    }
  } else {
    if(text_nervous !== ""){
      document.write("긴장하면 "+text_nervous+"을(를) 함. ");
    }
  }
  if(radio_langs !== ""){
    if(radio_langs == "yes"){
      document.write("언어발달은 또래와 비슷함. ");
    }else if(radio_langs == "no") {
      if(text_langs !== ""){
        document.write("("+text_langs+")이유로 언어발달이 늦음. ");
      } else {
        document.write("언어발달은 또래보다 늦음. ");
      }
    }
  }
  if(text_character !== ""){
    document.write("성격은 "+text_character+" ");
  }
  document.write("<br>\n");
} else {
  document.write("● 발달기록 : 특이사항 없음.<br>\n");
}


// ● 신체협응 :
if(che_motor_coordi !== ""){
  document.write("● 신체협응 : "+che_motor_coordi+"<br>\n");
} else {
  document.write("● 신체협응 : 특이사항 없음.<br>\n");
}



// ● 촉각 :
if(che_touch !== ""){
  document.write("● 촉각 : "+che_touch+"<br>\n");
}else {
  document.write("● 촉각 : 특이사항 없음.<br>\n");
}


// ● 여가생활 :
if(text_weekday !== "" || text_weekend1 !== "" || text_weekend2 !== "" || text_activity !== "" || text_specialty !== "" ) {
  document.write("● 여가생활 : ");
  if(text_weekday !== ""){
    if(text_weekend1 !== ""){
      document.write("평일 "+text_weekday+"시간, 주말 "+text_weekend1+"시간정도 TV시청이나 컴퓨터(스마트폰)을 사용함.");
    } else {
      document.write("평일 "+text_weekday+"시간정도 TV시청이나 컴퓨터(스마트폰)을 사용함.");
    }
  } else {
    if (text_weekend1 !== ""){
      document.write("주말 "+text_weekend1+"시간정도 TV시청이나 컴퓨터(스마트폰)을 사용함.");
    }
  }
  if(text_weekend2 !== ""){
    document.write("주말에 주로 "+text_weekend2+"를 함.");
  }
  if(text_activity !== ""){
    document.write("좋아하는 활동은 "+text_activity+"를 좋아함.");
  }
  if(text_specialty !== ""){
    document.write("장점이나 특기는 "+text_specialty+".");
  }
  document.write("<br>\n");
} else {
  document.write("● 여가생활 : 특이사항 없음.<br>\n");
}


// ● 관계 :
if (radio_parents !== "" || radio_friends !== "" ) {
  document.write("● 관계 : ");
  if(radio_parents !== ""){
    if(radio_parents == "good"){
      document.write("부모와의 관계는 매우 친밀함. ");
    } else if (radio_parents == 'nomal'){
      document.write("부모와의 관계는 양호함. ");
    } else if (radio_parents == 'bad'){
      document.write("부모와 잦은 트러블이 있음. ");
    }
  }
  if(radio_friends !== ""){
    if(radio_friends == "good"){
      document.write("학급친구들과 매우 친밀함. ");
    } else if (radio_friends == 'nomal') {
      document.write("학급친구들과 사이는 양호함. ");
    } else if (radio_friends == "bad") {
      if(text_friends !== ""){
        document.write(text_friends+"이유로 학급친구들과 잦은 트러블이 있음.");
      } else {
        document.write("학급친구들과 잦은 트러블이 있음. ");
      }
    }
  }
  document.write("<br>\n");
}


// ● 기타 전달사항 :
if(text_memory !== ""){
  document.write("● 기타 전달사항 : "+text_memory+"<br>\n");
} else {
  document.write("<br>\n");
}
