<?php
$conn_compar = mysqli_connect("localhost", "root", "optician97", "comparisongroup");

//history









// QOL문진

$QOL_score_1 = (int)$_POST['QOL_score_1'];
$QOL_score_2 = (int)$_POST['QOL_score_2'];
$QOL_score_3 = (int)$_POST['QOL_score_3'];
$QOL_score_4 = (int)$_POST['QOL_score_4'];
$QOL_score_5 = (int)$_POST['QOL_score_5'];
$QOL_score_6 = (int)$_POST['QOL_score_6'];
$QOL_score_7 = (int)$_POST['QOL_score_7'];
$QOL_score_8 = (int)$_POST['QOL_score_8'];
$QOL_score_9 = (int)$_POST['QOL_score_9'];
$QOL_score_10 = (int)$_POST['QOL_score_10'];
$QOL_score_11 = (int)$_POST['QOL_score_11'];
$QOL_score_12 = (int)$_POST['QOL_score_12'];
$QOL_score_13 = (int)$_POST['QOL_score_13'];
$QOL_score_14 = (int)$_POST['QOL_score_14'];
$QOL_score_15 = (int)$_POST['QOL_score_15'];
$QOL_score_16 = (int)$_POST['QOL_score_16'];
$QOL_score_17 = (int)$_POST['QOL_score_17'];
$QOL_score_18 = (int)$_POST['QOL_score_18'];
$QOL_score_19 = (int)$_POST['QOL_score_19'];





if(empty($QOL_score_1) || empty($QOL_score_2) || empty($QOL_score_3) || empty($QOL_score_4) || empty($QOL_score_5) || empty($QOL_score_6) || empty($QOL_score_7) || empty($QOL_score_8) || empty($QOL_score_9) || empty($QOL_score_10) || empty($QOL_score_11) || empty($QOL_score_12) || empty($QOL_score_13) || empty($QOL_score_14) || empty($QOL_score_15) || empty($QOL_score_16) || empty($QOL_score_17) || empty($QOL_score_18) || empty($QOL_score_19) ){
  $QOL = "평가하지 않음";
} else {
  $QOL_sum = $QOL_score_1 + $QOL_score_2 + $QOL_score_3 + $QOL_score_4 + $QOL_score_5 + $QOL_score_6 + $QOL_score_7 + $QOL_score_8 + $QOL_score_9 + $QOL_score_10 + $QOL_score_11 + $QOL_score_12 + $QOL_score_13 + $QOL_score_14 + $QOL_score_15 + $QOL_score_16 + $QOL_score_17 + $QOL_score_18 + $QOL_score_19 ;
}



// 양안시기능평가
$Cus_Name = $_POST['Cus_Name'];
$MainEye = $_POST['MainEye'];
$PD = $_POST['PD'];
$sel_vision1 = $_POST['sel_vision1'];
$RDVision = $_POST['RDVision'];
$LDVision = $_POST['LDVision'];
$OUDVision = $_POST['OUDVision'];
$RNVision = $_POST['RNVision'];
$LNVision = $_POST['LNVision'];
$OUNVision = $_POST['OUNVision'];
$TxtRSph = $_POST['TxtRSph'];
$TxtRCyl = $_POST['TxtRCyl'];
$TxtRAxis = $_POST['TxtRAxis'];
$TxtRAdd = $_POST['TxtRAdd'];
$TxtLSph = $_POST['TxtLSph'];
$TxtLCyl = $_POST['TxtLCyl'];
$TxtLAxis = $_POST['TxtLAxis'];
$TxtLAdd = $_POST['TxtLAdd'];
$RDVision_new = $_POST['RDVision_new'];
$LDVision_new = $_POST['LDVision_new'];
$OUDVision_new = $_POST['OUDVision_new'];
$RNVision_new = $_POST['RNVision_new'];
$LNVision_new = $_POST['LNVision_new'];
$OUNVision_new = $_POST['OUNVision_new'];
$Balance = $_POST['Balance'];
$W4D = $_POST['W4D'];
$CTest_D = $_POST['CTest_D'];
$CTest_N = $_POST['CTest_N'];
$R_accom = $_POST['R_accom'];
$L_accom = $_POST['L_accom'];
$O_accom = $_POST['O_accom'];
$RAccom_Rev = $_POST['RAccom_Rev'];
$LAccom_Rev = $_POST['LAccom_Rev'];
$OUAccom_Rev = $_POST['OUAccom_Rev'];
$Sel_AccomRev = $_POST['Sel_AccomRev'];
$NVer = $_POST['NVer'];
$BroadH = $_POST['BroadH'];
$sacadic = $_POST['sacadic'];
$DStereo = $_POST['DStereo'];
$NStereo = $_POST['NStereo'];
$Pupilreflex = $_POST['Pupilreflex'];
$verEVA_tool = $_POST['verEVA_tool'];
$Dectopic = $_POST['Dectopic'];
$D_BIBO = $_POST['D_BIBO'];
$Nectopic = $_POST['Nectopic'];
$N_BIBO = $_POST['N_BIBO'];
$horEVA_tool = $_POST['horEVA_tool'];
$DVertical = $_POST['DVertical'];
$D_BUBD = $_POST['D_BUBD'];
$NVertical = $_POST['NVertical'];
$N_BUBD = $_POST['N_BUBD'];
$DVer_tool = $_POST['DVer_tool'];
$DConver1 = $_POST['DConver1'];
$DConver2 = $_POST['DConver2'];
$DConver3 = $_POST['DConver3'];
$DDever2 = $_POST['DDever2'];
$DDever3 = $_POST['DDever3'];
$NVer_tool = $_POST['NVer_tool'];
$NConver1 = $_POST['NConver1'];
$NConver2 = $_POST['NConver2'];
$NConver3 = $_POST['NConver3'];
$NDever1 = $_POST['NDever1'];
$NDever2 = $_POST['NDever2'];
$NDever3 = $_POST['NDever3'];
$VerRev = $_POST['VerRev'];
$DVertical_tool = $_POST['DVertical_tool'];
$NVertical_tool = $_POST['NVertical_tool'];
$DVertical_BD1 = $_POST['DVertical_BD1'];
$DVertical_BD2 = $_POST['DVertical_BD2'];
$DVertical_BD3 = $_POST['DVertical_BD3'];
$DVertical_BD4 = $_POST['DVertical_BD4'];
$DVertical_BU1 = $_POST['DVertical_BU1'];
$DVertical_BU2 = $_POST['DVertical_BU2'];
$DVertical_BU3 = $_POST['DVertical_BU3'];
$DVertical_BU4 = $_POST['DVertical_BU4'];
$NVertical_BD1 = $_POST['NVertical_BD1'];
$NVertical_BD2 = $_POST['NVertical_BD2'];
$NVertical_BD3 = $_POST['NVertical_BD3'];
$NVertical_BD4 = $_POST['NVertical_BD4'];
$NVertical_BU1 = $_POST['NVertical_BU1'];
$NVertical_BU2 = $_POST['NVertical_BU2'];
$NVertical_BU3 = $_POST['NVertical_BU3'];
$NVertical_BU4 = $_POST['NVertical_BU4'];

$D_agree = $_POST['D_agree'];
$DHor_maddox = $_POST['DHor_maddox'];
$DHor_BIBO = $_POST['DHor_BIBO'];
$DVer_maddox = $_POST['DVer_maddox'];
$DVer_BIBO = $_POST['DVer_BIBO'];
$N_agree = $_POST['N_agree'];
$NHor_maddox = $_POST['NHor_maddox'];
$NHor_BIBO = $_POST['NHor_BIBO'];
$NVer_maddox = $_POST['NVer_maddox'];
$NVer_BIBO = $_POST['NVer_BIBO'];
$MIT = $_POST['MIT'];
$month6 = $_POST['month6'];
$exami = $_POST['exami'];
$ratio_cross = $_POST['ratio_cross'];
$change_ver = $_POST['change_ver'];
$splitting = $_POST['splitting'];
$double_vi = $_POST['double_vi'];
$amblyopia = $_POST['amblyopia'];


//TVPS-4
$RAW_SCORE_DIS = $_POST['RAW_SCORE_DIS'];
$RAW_SCORE_MEM = $_POST['RAW_SCORE_MEM'];
$RAW_SCORE_SPA = $_POST['RAW_SCORE_SPA'];
$RAW_SCORE_CON = $_POST['RAW_SCORE_CON'];
$RAW_SCORE_SEQ = $_POST['RAW_SCORE_SEQ'];
$RAW_SCORE_FGR = $_POST['RAW_SCORE_FGR'];
$RAW_SCORE_CLO = $_POST['RAW_SCORE_CLO'];

//VMI
$Raw_vmi = $_POST['Raw_vmi'];
$Raw_visual = $_POST['Raw_visual'];
$Raw_motor = $_POST['Raw_motor'];

//DEM
$DEM_VER = $_POST['DEM_VER'];
$VER_ERR_S = $_POST['VER_ERR_S'];
$VER_ERR_O = $_POST['VER_ERR_O'];
$VER_ERR_A = $_POST['VER_ERR_A'];
$VER_ERR_T = $_POST['VER_ERR_T'];
$DEM_HOR = $_POST['DEM_HOR'];
$HOR_ERR_S = $_POST['HOR_ERR_S'];
$HOR_ERR_O = $_POST['HOR_ERR_O'];
$HOR_ERR_A = $_POST['HOR_ERR_A'];
$HOR_ERR_T = $_POST['HOR_ERR_T'];

//WACS
$WACS_RAW_T1 = $_POST['WACS_RAW_T1'];
$WACS_RAW_T2 = $_POST['WACS_RAW_T2'];
$WACS_RAW_T3 = $_POST['WACS_RAW_T3'];
$WACS_RAW_T4 = $_POST['WACS_RAW_T4'];



$Branch = "서원대로점";
$history1 = "시기능발달평가";

$Today_y = date("Y");
$Today_m = date("m");
$Today_d = date("d");
$birth_y = $_POST['Birth_y'];
$birth_m = $_POST['Birth_m'];
$birth_d = $_POST['Birth_d'];

if ($Today_m > $birth_m) {
  $ChAge_y = $Today_y - $birth_y;
  $ChAge_m = $Today_m - $birth_m;
} else {
  $ChAge_y = ($Today_y - $birth_y)-1;
  $ChAge_m = ($Today_m - $birth_m)+12;
}



// 분석기준나이설정(TVPS)

if ($ChAge_y < 5) {
  $TVPS_ACAge_s = 50;
  $TVPS_ACAge_S = "5세 0개월";
  $TVPS_ACAge_T = "5세 5개월";
  $TVPS_ACAge_t = 55;
} else if ($ChAge_y >= 5 && $ChAge_y <6 ) {
  if ($ChAge_m < 6) {
    $TVPS_ACAge_s = 50;
    $TVPS_ACAge_t = 55;
    $TVPS_ACAge_S = "5세 0개월";
    $TVPS_ACAge_T = "5세 5개월";
  } else {
    $TVPS_ACAge_s = 56;
    $TVPS_ACAge_t = 511;
    $TVPS_ACAge_S = "5세 6개월";
    $TVPS_ACAge_T = "5세 11개월";
  }
} else if ($ChAge_y >= 6 && $ChAge_y <7 ) {
  if ($ChAge_m < 6) {
    $TVPS_ACAge_s = 60;
    $TVPS_ACAge_t = 65;
    $TVPS_ACAge_S = "6세 0개월";
    $TVPS_ACAge_T = "6세 5개월";
  } else {
    $TVPS_ACAge_s = 66;
    $TVPS_ACAge_t = 611;
    $TVPS_ACAge_S = "6세 6개월";
    $TVPS_ACAge_T = "6세 11개월";
  }
} else if ($ChAge_y >= 7 && $ChAge_y <8 ) {
  if ($ChAge_m < 6) {
    $TVPS_ACAge_s = 70;
    $TVPS_ACAge_t = 75;
    $TVPS_ACAge_S = "7세 0개월";
    $TVPS_ACAge_T = "7세 5개월";
  } else {
    $TVPS_ACAge_s = 76;
    $TVPS_ACAge_t = 711;
    $TVPS_ACAge_S = "7세 6개월";
    $TVPS_ACAge_T = "7세 11개월";
  }
} else if ($ChAge_y >= 8 && $ChAge_y <9 ) {
  if ($ChAge_m < 6) {
    $TVPS_ACAge_s = 80;
    $TVPS_ACAge_t = 85;
    $TVPS_ACAge_S = "8세 0개월";
    $TVPS_ACAge_T = "8세 5개월";
  } else {
    $TVPS_ACAge_s = 86;
    $TVPS_ACAge_t = 811;
    $TVPS_ACAge_S = "8세 6개월";
    $TVPS_ACAge_T = "8세 11개월";
  }
} else if ($ChAge_y >= 9 && $ChAge_y <10 ) {
  if ($ChAge_m < 6) {
    $TVPS_ACAge_s = 90;
    $TVPS_ACAge_t = 95;
    $TVPS_ACAge_S = "9세 0개월";
    $TVPS_ACAge_T = "9세 5개월";
  } else {
    $TVPS_ACAge_s = 96;
    $TVPS_ACAge_t = 911;
    $TVPS_ACAge_S = "9세 6개월";
    $TVPS_ACAge_T = "9세 11개월";
  }
} else if ($ChAge_y >= 10 && $ChAge_y <11 ) {
  if ($ChAge_m < 6) {
    $TVPS_ACAge_s = 100;
    $TVPS_ACAge_t = 105;
    $TVPS_ACAge_S = "10세 0개월";
    $TVPS_ACAge_T = "10세 5개월";
  } else {
    $TVPS_ACAge_s = 106;
    $TVPS_ACAge_t = 1011;
    $TVPS_ACAge_S = "10세 6개월";
    $TVPS_ACAge_T = "10세 11개월";
  }
} else if ($ChAge_y >= 11 && $ChAge_y <12 ) {
  if ($ChAge_m < 6) {
    $TVPS_ACAge_s = 110;
    $TVPS_ACAge_t = 115;
    $TVPS_ACAge_S = "11세 0개월";
    $TVPS_ACAge_T = "11세 5개월";
  } else {
    $TVPS_ACAge_s = 116;
    $TVPS_ACAge_t = 1111;
    $TVPS_ACAge_S = "11세 6개월";
    $TVPS_ACAge_T = "11세 11개월";
  }
} else if ($ChAge_y >= 12 && $ChAge_y <13 ) {
    $TVPS_ACAge_s = 120;
    $TVPS_ACAge_t = 1211;
    $TVPS_ACAge_S = "12세 0개월";
    $TVPS_ACAge_T = "12세 11개월";
} else if ($ChAge_y >= 13 && $ChAge_y <14 ) {
    $TVPS_ACAge_s = 130;
    $TVPS_ACAge_t = 1311;
    $TVPS_ACAge_S = "13세 0개월";
    $TVPS_ACAge_T = "13세 11개월";
} else if ($ChAge_y >= 14 && $ChAge_y <15 ) {
    $TVPS_ACAge_s = 140;
    $TVPS_ACAge_t = 1411;
    $TVPS_ACAge_S = "14세 0개월";
    $TVPS_ACAge_T = "14세 11개월";
} else if ($ChAge_y >= 15 && $ChAge_y <16 ) {
    $TVPS_ACAge_s = 150;
    $TVPS_ACAge_t = 1511;
    $TVPS_ACAge_S = "15세 0개월";
    $TVPS_ACAge_T = "15세 11개월";
} else if ($ChAge_y >= 16 && $ChAge_y <17 ) {
    $TVPS_ACAge_s = 160;
    $TVPS_ACAge_t = 1611;
    $TVPS_ACAge_S = "16세 0개월";
    $TVPS_ACAge_T = "16세 11개월";
} else if ($ChAge_y >= 17 && $ChAge_y <18 ) {
    $TVPS_ACAge_s = 170;
    $TVPS_ACAge_t = 1711;
    $TVPS_ACAge_S = "17세 0개월";
    $TVPS_ACAge_T = "17세 11개월";
} else if ($ChAge_y >= 18 && $ChAge_y <19 ) {
    $TVPS_ACAge_s = 180;
    $TVPS_ACAge_t = 1811;
    $TVPS_ACAge_S = "18세 0개월";
    $TVPS_ACAge_T = "18세 11개월";
} else if ($ChAge_y >= 19 && $ChAge_y <20 ) {
    $TVPS_ACAge_s = 190;
    $TVPS_ACAge_t = 1911;
    $TVPS_ACAge_S = "19세 0개월";
    $TVPS_ACAge_T = "19세 11개월";
} else if ($ChAge_y >= 20 && $ChAge_y <21 ) {
    $TVPS_ACAge_s = 200;
    $TVPS_ACAge_t = 2011;
    $TVPS_ACAge_S = "20세 0개월";
    $TVPS_ACAge_T = "20세 11개월";
} else {
    $TVPS_ACAge_s = 210;
    $TVPS_ACAge_t = 2111;
    $TVPS_ACAge_S = "21세 0개월";
    $TVPS_ACAge_T = "21세 11개월";
}

$TVPS_AGE=$TVPS_ACAge_s.$TVPS_ACAge_t;


if (empty($RAW_SCORE_DIS)) {
  $RAW_SCORE_DIS = "평가하지 않음";
} else {
  $RAW_SCORE_DIS = $RAW_SCORE_DIS;
}
if (empty($RAW_SCORE_MEM)) {
  $RAW_SCORE_MEM = "평가하지 않음";
} else {
  $RAW_SCORE_MEM = $RAW_SCORE_MEM;
}
if (empty($RAW_SCORE_SPA)) {
  $RAW_SCORE_SPA = "평가하지 않음";
} else {
  $RAW_SCORE_SPA = $RAW_SCORE_SPA;
}
if (empty($RAW_SCORE_CON)) {
  $RAW_SCORE_CON = "평가하지 않음";
} else {
  $RAW_SCORE_CON = $RAW_SCORE_CON;
}
if (empty($RAW_SCORE_SEQ)) {
  $RAW_SCORE_SEQ = "평가하지 않음";
} else {
  $RAW_SCORE_SEQ = $RAW_SCORE_SEQ;
}
if (empty($RAW_SCORE_FGR)) {
  $RAW_SCORE_FGR = "평가하지 않음";
} else {
  $RAW_SCORE_FGR = $RAW_SCORE_FGR;
}
if (empty($RAW_SCORE_CLO)) {
  $RAW_SCORE_CLO = "평가하지 않음";
} else {
  $RAW_SCORE_CLO = $RAW_SCORE_CLO;
}

if ($RAW_SCORE_DIS === "평가하지 않음") {
  $scaled_DIS = "-";
  $percentile_DIS = "-";
  $qgeEqui_DIS = "-";

} else {
  // DIS 척도점수
  $sql_DIS_SCA = "SELECT * FROM TVPS4_B1 WHERE AGE=$TVPS_AGE AND rawscore='$RAW_SCORE_DIS'";
  $result_DIS_SCA = mysqli_query($conn_compar, $sql_DIS_SCA);
  $row_DIS_SCA = mysqli_fetch_array($result_DIS_SCA);
  $scaled_DIS = $row_DIS_SCA['DIS'];
  // DIS 백분율
  $sql_DIS_PER = "SELECT PERCENTILE FROM TVPS4_B3 WHERE SCALED='$scaled_DIS' LIMIT 2, 1";
  $result_DIS_PER = mysqli_query($conn_compar, $sql_DIS_PER);
  $row_DIS_PER = mysqli_fetch_array($result_DIS_PER);
  $percentile_DIS = $row_DIS_PER['PERCENTILE'];
  // DIS 등가나이환산
  $Rawscore_DIS = $RAW_SCORE_DIS;
  $sql_DIS_AGE = "SELECT * FROM TVPS4_B4 WHERE rawscore='$Rawscore_DIS'";
  $result_DIS_AGE = mysqli_query($conn_compar, $sql_DIS_AGE);
  $row_DIS_AGE = mysqli_fetch_array($result_DIS_AGE);
  $qgeEqui_DIS = $row_DIS_AGE['DIS'];
  }

  if ($RAW_SCORE_MEM === "평가하지 않음") {
    $scaled_MEM = "-";
    $percentile_MEM = "-";
    $qgeEqui_MEM = "-";

  } else {
    // MEM 척도점수
    $sql_MEM_SCA = "SELECT * FROM TVPS4_B1 WHERE AGE=$TVPS_AGE AND rawscore='$RAW_SCORE_MEM'";
    $result_MEM_SCA = mysqli_query($conn_compar, $sql_MEM_SCA);
    $row_MEM_SCA = mysqli_fetch_array($result_MEM_SCA);
    $scaled_MEM = $row_MEM_SCA['MEM'];
    // MEM 백분율
    $sql_MEM_PER = "SELECT PERCENTILE FROM TVPS4_B3 WHERE SCALED='$scaled_MEM' LIMIT 2, 1";
    $result_MEM_PER = mysqli_query($conn_compar, $sql_MEM_PER);
    $row_MEM_PER = mysqli_fetch_array($result_MEM_PER);
    $percentile_MEM = $row_MEM_PER['PERCENTILE'];
    // MEM 등가나이환산
    $Rawscore_MEM = $RAW_SCORE_MEM;
    $sql_MEM_AGE = "SELECT * FROM TVPS4_B4 WHERE rawscore='$Rawscore_MEM'";
    $result_MEM_AGE = mysqli_query($conn_compar, $sql_MEM_AGE);
    $row_MEM_AGE = mysqli_fetch_array($result_MEM_AGE);
    $qgeEqui_MEM = $row_MEM_AGE['MEM'];
    }

    if ($RAW_SCORE_SPA === "평가하지 않음") {
      $scaled_SPA = "-";
      $percentile_SPA = "-";
      $qgeEqui_SPA = "-";

    } else {
      // SPA 척도점수
      $sql_SPA_SCA = "SELECT * FROM TVPS4_B1 WHERE AGE=$TVPS_AGE AND rawscore='$RAW_SCORE_SPA'";
      $result_SPA_SCA = mysqli_query($conn_compar, $sql_SPA_SCA);
      $row_SPA_SCA = mysqli_fetch_array($result_SPA_SCA);
      $scaled_SPA = $row_SPA_SCA['SPA'];
      // SPA 백분율
      $sql_SPA_PER = "SELECT PERCENTILE FROM TVPS4_B3 WHERE SCALED='$scaled_SPA' LIMIT 2, 1";
      $result_SPA_PER = mysqli_query($conn_compar, $sql_SPA_PER);
      $row_SPA_PER = mysqli_fetch_array($result_SPA_PER);
      $percentile_SPA = $row_SPA_PER['PERCENTILE'];
      // SPA 등가나이환산
      $Rawscore_SPA = $RAW_SCORE_SPA;
      $sql_SPA_AGE = "SELECT * FROM TVPS4_B4 WHERE rawscore='$Rawscore_SPA'";
      $result_SPA_AGE = mysqli_query($conn_compar, $sql_SPA_AGE);
      $row_SPA_AGE = mysqli_fetch_array($result_SPA_AGE);
      $qgeEqui_SPA = $row_SPA_AGE['SPA'];
      }

      if ($RAW_SCORE_CON === "평가하지 않음") {
        $scaled_CON = "-";
        $percentile_CON = "-";
        $qgeEqui_CON = "-";

      } else {
        // CON 척도점수
        $sql_CON_SCA = "SELECT * FROM TVPS4_B1 WHERE AGE=$TVPS_AGE AND rawscore='$RAW_SCORE_CON'";
        $result_CON_SCA = mysqli_query($conn_compar, $sql_CON_SCA);
        $row_CON_SCA = mysqli_fetch_array($result_CON_SCA);
        $scaled_CON = $row_CON_SCA['CON'];
        // CON 백분율
        $sql_CON_PER = "SELECT PERCENTILE FROM TVPS4_B3 WHERE SCALED='$scaled_CON' LIMIT 2, 1";
        $result_CON_PER = mysqli_query($conn_compar, $sql_CON_PER);
        $row_CON_PER = mysqli_fetch_array($result_CON_PER);
        $percentile_CON = $row_CON_PER['PERCENTILE'];
        // CON 등가나이환산
        $Rawscore_CON = $RAW_SCORE_CON;
        $sql_CON_AGE = "SELECT * FROM TVPS4_B4 WHERE rawscore='$Rawscore_CON'";
        $result_CON_AGE = mysqli_query($conn_compar, $sql_CON_AGE);
        $row_CON_AGE = mysqli_fetch_array($result_CON_AGE);
        $qgeEqui_CON = $row_CON_AGE['CON'];
        }


        if ($RAW_SCORE_SEQ === "평가하지 않음") {
          $scaled_SEQ = "-";
          $percentile_SEQ = "-";
          $qgeEqui_SEQ = "-";

        } else {
          // CON 척도점수
          $sql_SEQ_SCA = "SELECT * FROM TVPS4_B1 WHERE AGE=$TVPS_AGE AND rawscore='$RAW_SCORE_SEQ'";
          $result_SEQ_SCA = mysqli_query($conn_compar, $sql_SEQ_SCA);
          $row_SEQ_SCA = mysqli_fetch_array($result_SEQ_SCA);
          $scaled_SEQ = $row_SEQ_SCA['SEQ'];
          // CON 백분율
          $sql_SEQ_PER = "SELECT PERCENTILE FROM TVPS4_B3 WHERE SCALED='$scaled_SEQ' LIMIT 2, 1";
          $result_SEQ_PER = mysqli_query($conn_compar, $sql_SEQ_PER);
          $row_SEQ_PER = mysqli_fetch_array($result_SEQ_PER);
          $percentile_SEQ = $row_SEQ_PER['PERCENTILE'];
          // CON 등가나이환산
          $Rawscore_SEQ = $RAW_SCORE_SEQ;
          $sql_SEQ_AGE = "SELECT * FROM TVPS4_B4 WHERE rawscore='$Rawscore_SEQ'";
          $result_SEQ_AGE = mysqli_query($conn_compar, $sql_SEQ_AGE);
          $row_SEQ_AGE = mysqli_fetch_array($result_SEQ_AGE);
          $qgeEqui_SEQ = $row_SEQ_AGE['SEQ'];
          }


          if ($RAW_SCORE_FGR === "평가하지 않음") {
            $scaled_FGR = "-";
            $percentile_FGR = "-";
            $qgeEqui_FGR = "-";

          } else {
            // CON 척도점수
            $sql_FGR_SCA = "SELECT * FROM TVPS4_B1 WHERE AGE=$TVPS_AGE AND rawscore='$RAW_SCORE_FGR'";
            $result_FGR_SCA = mysqli_query($conn_compar, $sql_FGR_SCA);
            $row_FGR_SCA = mysqli_fetch_array($result_FGR_SCA);
            $scaled_FGR = $row_FGR_SCA['FGR'];
            // CON 백분율
            $sql_FGR_PER = "SELECT PERCENTILE FROM TVPS4_B3 WHERE SCALED='$scaled_FGR' LIMIT 2, 1";
            $result_FGR_PER = mysqli_query($conn_compar, $sql_FGR_PER);
            $row_FGR_PER = mysqli_fetch_array($result_FGR_PER);
            $percentile_FGR = $row_FGR_PER['PERCENTILE'];
            // CON 등가나이환산
            $Rawscore_FGR = $RAW_SCORE_FGR;
            $sql_FGR_AGE = "SELECT * FROM TVPS4_B4 WHERE rawscore='$Rawscore_FGR'";
            $result_FGR_AGE = mysqli_query($conn_compar, $sql_FGR_AGE);
            $row_FGR_AGE = mysqli_fetch_array($result_FGR_AGE);
            $qgeEqui_FGR = $row_FGR_AGE['FGR'];
            }

            if ($RAW_SCORE_CLO === "평가하지 않음") {
              $scaled_CLO = "-";
              $percentile_CLO = "-";
              $qgeEqui_CLO = "-";

            } else {
              // CON 척도점수
              $sql_CLO_SCA = "SELECT * FROM TVPS4_B1 WHERE AGE=$TVPS_AGE AND rawscore='$RAW_SCORE_CLO'";
              $result_CLO_SCA = mysqli_query($conn_compar, $sql_CLO_SCA);
              $row_CLO_SCA = mysqli_fetch_array($result_CLO_SCA);
              $scaled_CLO = $row_CLO_SCA['CLO'];
              // CON 백분율
              $sql_CLO_PER = "SELECT PERCENTILE FROM TVPS4_B3 WHERE SCALED='$scaled_CLO' LIMIT 2, 1";
              $result_CLO_PER = mysqli_query($conn_compar, $sql_CLO_PER);
              $row_CLO_PER = mysqli_fetch_array($result_CLO_PER);
              $percentile_CLO = $row_CLO_PER['PERCENTILE'];
              // CON 등가나이환산
              $Rawscore_CLO = $RAW_SCORE_CLO;
              $sql_CLO_AGE = "SELECT * FROM TVPS4_B4 WHERE rawscore='$Rawscore_CLO'";
              $result_CLO_AGE = mysqli_query($conn_compar, $sql_CLO_AGE);
              $row_CLO_AGE = mysqli_fetch_array($result_CLO_AGE);
              $qgeEqui_CLO = $row_CLO_AGE['CLO'];
              }


              // TVPS4 척도점수 핳계
              if (($scaled_DIS === "-") || ($scaled_MEM === "-") || ($scaled_SPA === "-") || ($scaled_CON === "-") || ($scaled_SEQ === "-") || ($scaled_FGR === "-") || ($scaled_CLO === "-")) {
                $scaled = "-";
                $sum_scaled = "-";
                $STANDARD_B2 = "-";
              } else {
                $scaled = array($scaled_DIS,$scaled_MEM,$scaled_SPA,$scaled_CON,$scaled_SEQ,$scaled_FGR,$scaled_CLO);
                $sum_scaled = array_sum($scaled);
                $sql_B2 = "SELECT * FROM TVPS4_B2 WHERE SUM_SCALED ='$sum_scaled'";
                $result_B2 = mysqli_query($conn_compar, $sql_B2);
                $row_B2 = mysqli_fetch_array($result_B2);
                $STANDARD_B2 = $row_B2['STANDARD'];
              }


              // 전체 백분위수
              if ($STANDARD_B2 === "-") {
                $PERCENTILE_B3 = "-";
              } else {
                $sql_B3 = "SELECT * FROM TVPS4_B3 WHERE  STANDARD='$STANDARD_B2'";
                $result_B3 = mysqli_query($conn_compar, $sql_B3);
                $row_B3 = mysqli_fetch_array($result_B3);
                $PERCENTILE_B3 = $row_B3['PERCENTILE'];
              }



              // SUM_RAW 등가나이환산
              if (($RAW_SCORE_DIS === "평가하지 않음") || ($RAW_SCORE_MEM === "평가하지 않음") || ($RAW_SCORE_SPA === "평가하지 않음") || ($RAW_SCORE_CON === "평가하지 않음") || ($RAW_SCORE_SEQ === "평가하지 않음") || ($RAW_SCORE_FGR === "평가하지 않음") || ($RAW_SCORE_CLO === "평가하지 않음")) {
                  $TVPS4AGE__B5 = "-";
              } else {
                $SUM_raws = $RAW_SCORE_DIS + $RAW_SCORE_MEM + $RAW_SCORE_SPA + $RAW_SCORE_CON + $RAW_SCORE_SEQ + $RAW_SCORE_FGR + $RAW_SCORE_CLO;
                $sql_B5 = "SELECT * FROM TVPS4_B5 WHERE  SUM_Rawscore='$SUM_raws'";
                $result_B5 = mysqli_query($conn_compar, $sql_B5);
                $row_B5 = mysqli_fetch_array($result_B5);
                $TVPS4AGE__B5 = $row_B5['AGE'];
              }




// 분석기준나이설정(VMI)

if ($ChAge_y < 2) {
  $VMI_ACAge_s = 20;
  $VMI_ACAge_t = 21;
  $VMI_ACAge_S = "2세 0개월";
  $VMI_ACAge_T = "2세 11개월";
} elseif ($ChAge_y >= 2 && $ChAge_y <3 ) {
  $VMI_ACAge_S = "2세 0개월";
  $VMI_ACAge_T = "2세 11개월";
  if ($ChAge_m <2) {
    $VMI_ACAge_s = $ChAge_y."0";
    $VMI_ACAge_t = $ChAge_y."1";
  } elseif ($ChAge_m >=2 && $ChAge_m <4 ) {
    $VMI_ACAge_s = $ChAge_y."2";
    $VMI_ACAge_t = $ChAge_y."3";
  } elseif ($ChAge_m >=4 && $ChAge_m <6 ) {
    $VMI_ACAge_s = $ChAge_y."4";
    $VMI_ACAge_t = $ChAge_y."5";
  } elseif ($ChAge_m >=6 && $ChAge_m <8 ) {
    $VMI_ACAge_s = $ChAge_y."6";
    $VMI_ACAge_t = $ChAge_y."7";
  } elseif ($ChAge_m >=8 && $ChAge_m <10 ) {
    $VMI_ACAge_s = $ChAge_y."8";
    $VMI_ACAge_t = $ChAge_y."9";
  } else {
    $VMI_ACAge_s = $ChAge_y."10";
    $VMI_ACAge_t = $ChAge_y."11";
  }
} elseif ($ChAge_y >= 3 && $ChAge_y <4 ) {
  $VMI_ACAge_S = "3세 0개월";
  $VMI_ACAge_T = "3세 11개월";
  if ($ChAge_m <2) {
    $VMI_ACAge_s = $ChAge_y."0";
    $VMI_ACAge_t = $ChAge_y."1";
  } elseif ($ChAge_m >=2 && $ChAge_m <4 ) {
    $VMI_ACAge_s = $ChAge_y."2";
    $VMI_ACAge_t = $ChAge_y."3";
  } elseif ($ChAge_m >=4 && $ChAge_m <6 ) {
    $VMI_ACAge_s = $ChAge_y."4";
    $VMI_ACAge_t = $ChAge_y."5";
  } elseif ($ChAge_m >=6 && $ChAge_m <8 ) {
    $VMI_ACAge_s = $ChAge_y."6";
    $VMI_ACAge_t = $ChAge_y."7";
  } elseif ($ChAge_m >=8 && $ChAge_m <10 ) {
    $VMI_ACAge_s = $ChAge_y."8";
    $VMI_ACAge_t = $ChAge_y."9";
  } else {
    $VMI_ACAge_s = $ChAge_y."10";
    $VMI_ACAge_t = $ChAge_y."11";
  }
} elseif ($ChAge_y >= 4 && $ChAge_y <5 ) {
  $VMI_ACAge_S = "4세 0개월";
  $VMI_ACAge_T = "4세 11개월";
  if ($ChAge_m <2) {
    $VMI_ACAge_s = $ChAge_y."0";
    $VMI_ACAge_t = $ChAge_y."1";
  } elseif ($ChAge_m >=2 && $ChAge_m <4 ) {
    $VMI_ACAge_s = $ChAge_y."2";
    $VMI_ACAge_t = $ChAge_y."3";
  } elseif ($ChAge_m >=4 && $ChAge_m <6 ) {
    $VMI_ACAge_s = $ChAge_y."4";
    $VMI_ACAge_t = $ChAge_y."5";
  } elseif ($ChAge_m >=6 && $ChAge_m <8 ) {
    $VMI_ACAge_s = $ChAge_y."6";
    $VMI_ACAge_t = $ChAge_y."7";
  } elseif ($ChAge_m >=8 && $ChAge_m <10 ) {
    $VMI_ACAge_s = $ChAge_y."8";
    $VMI_ACAge_t = $ChAge_y."9";
  } else {
    $VMI_ACAge_s = $ChAge_y."10";
    $VMI_ACAge_t = $ChAge_y."11";
  }
} elseif ($ChAge_y >= 5 && $ChAge_y <6 ) {
  $VMI_ACAge_S = "5세 0개월";
  $VMI_ACAge_T = "5세 11개월";
  if ($ChAge_m <2) {
    $VMI_ACAge_s = $ChAge_y."0";
    $VMI_ACAge_t = $ChAge_y."1";
  } elseif ($ChAge_m >=2 && $ChAge_m <4 ) {
    $VMI_ACAge_s = $ChAge_y."2";
    $VMI_ACAge_t = $ChAge_y."3";
  } elseif ($ChAge_m >=4 && $ChAge_m <6 ) {
    $VMI_ACAge_s = $ChAge_y."4";
    $VMI_ACAge_t = $ChAge_y."5";
  } elseif ($ChAge_m >=6 && $ChAge_m <8 ) {
    $VMI_ACAge_s = $ChAge_y."6";
    $VMI_ACAge_t = $ChAge_y."7";
  } elseif ($ChAge_m >=8 && $ChAge_m <10 ) {
    $VMI_ACAge_s = $ChAge_y."8";
    $VMI_ACAge_t = $ChAge_y."9";
  } else {
    $VMI_ACAge_s = $ChAge_y."10";
    $VMI_ACAge_t = $ChAge_y."11";
  }
} elseif ($ChAge_y >= 6 && $ChAge_y <7 ) {
  $VMI_ACAge_S = "6세 0개월";
  $VMI_ACAge_T = "6세 11개월";
  if ($ChAge_m <2) {
    $VMI_ACAge_s = $ChAge_y."0";
    $VMI_ACAge_t = $ChAge_y."1";
  } elseif ($ChAge_m >=2 && $ChAge_m <4 ) {
    $VMI_ACAge_s = $ChAge_y."2";
    $VMI_ACAge_t = $ChAge_y."3";
  } elseif ($ChAge_m >=4 && $ChAge_m <6 ) {
    $VMI_ACAge_s = $ChAge_y."4";
    $VMI_ACAge_t = $ChAge_y."5";
  } elseif ($ChAge_m >=6 && $ChAge_m <8 ) {
    $VMI_ACAge_s = $ChAge_y."6";
    $VMI_ACAge_t = $ChAge_y."7";
  } elseif ($ChAge_m >=8 && $ChAge_m <10 ) {
    $VMI_ACAge_s = $ChAge_y."8";
    $VMI_ACAge_t = $ChAge_y."9";
  } else {
    $VMI_ACAge_s = $ChAge_y."10";
    $VMI_ACAge_t = $ChAge_y."11";
  }
} elseif ($ChAge_y >= 7 && $ChAge_y <8 ) {
  $VMI_ACAge_S = "7세 0개월";
  $VMI_ACAge_T = "7세 11개월";
  if ($ChAge_m <2) {
    $VMI_ACAge_s = $ChAge_y."0";
    $VMI_ACAge_t = $ChAge_y."1";
  } elseif ($ChAge_m >=2 && $ChAge_m <4 ) {
    $VMI_ACAge_s = $ChAge_y."2";
    $VMI_ACAge_t = $ChAge_y."3";
  } elseif ($ChAge_m >=4 && $ChAge_m <6 ) {
    $VMI_ACAge_s = $ChAge_y."4";
    $VMI_ACAge_t = $ChAge_y."5";
  } elseif ($ChAge_m >=6 && $ChAge_m <8 ) {
    $VMI_ACAge_s = $ChAge_y."6";
    $VMI_ACAge_t = $ChAge_y."7";
  } elseif ($ChAge_m >=8 && $ChAge_m <10 ) {
    $VMI_ACAge_s = $ChAge_y."8";
    $VMI_ACAge_t = $ChAge_y."9";
  } else {
    $VMI_ACAge_s = $ChAge_y."10";
    $VMI_ACAge_t = $ChAge_y."11";
  }
} elseif ($ChAge_y >= 8 && $ChAge_y <9 ) {
  $VMI_ACAge_S = "8세 0개월";
  $VMI_ACAge_T = "8세 11개월";
  if ($ChAge_m <2) {
    $VMI_ACAge_s = $ChAge_y."0";
    $VMI_ACAge_t = $ChAge_y."1";
  } elseif ($ChAge_m >=2 && $ChAge_m <4 ) {
    $VMI_ACAge_s = $ChAge_y."2";
    $VMI_ACAge_t = $ChAge_y."3";
  } elseif ($ChAge_m >=4 && $ChAge_m <6 ) {
    $VMI_ACAge_s = $ChAge_y."4";
    $VMI_ACAge_t = $ChAge_y."5";
  } elseif ($ChAge_m >=6 && $ChAge_m <8 ) {
    $VMI_ACAge_s = $ChAge_y."6";
    $VMI_ACAge_t = $ChAge_y."7";
  } elseif ($ChAge_m >=8 && $ChAge_m <10 ) {
    $VMI_ACAge_s = $ChAge_y."8";
    $VMI_ACAge_t = $ChAge_y."9";
  } else {
    $VMI_ACAge_s = $ChAge_y."10";
    $VMI_ACAge_t = $ChAge_y."11";
  }
} elseif ($ChAge_y >= 9 && $ChAge_y <10 ) {
  $VMI_ACAge_S = "9세 0개월";
  $VMI_ACAge_T = "9세 11개월";
  if ($ChAge_m <2) {
    $VMI_ACAge_s = $ChAge_y."0";
    $VMI_ACAge_t = $ChAge_y."1";
  } elseif ($ChAge_m >=2 && $ChAge_m <4 ) {
    $VMI_ACAge_s = $ChAge_y."2";
    $VMI_ACAge_t = $ChAge_y."3";
  } elseif ($ChAge_m >=4 && $ChAge_m <6 ) {
    $VMI_ACAge_s = $ChAge_y."4";
    $VMI_ACAge_t = $ChAge_y."5";
  } elseif ($ChAge_m >=6 && $ChAge_m <8 ) {
    $VMI_ACAge_s = $ChAge_y."6";
    $VMI_ACAge_t = $ChAge_y."7";
  } elseif ($ChAge_m >=8 && $ChAge_m <10 ) {
    $VMI_ACAge_s = $ChAge_y."8";
    $VMI_ACAge_t = $ChAge_y."9";
  } else {
    $VMI_ACAge_s = $ChAge_y."10";
    $VMI_ACAge_t = $ChAge_y."11";
  }
} elseif ($ChAge_y >= 10 && $ChAge_y <11 ) {
  $VMI_ACAge_S = "10세 0개월";
  $VMI_ACAge_T = "10세 11개월";
  if ($ChAge_m <2) {
    $VMI_ACAge_s = $ChAge_y."0";
    $VMI_ACAge_t = $ChAge_y."1";
  } elseif ($ChAge_m >=2 && $ChAge_m <4 ) {
    $VMI_ACAge_s = $ChAge_y."2";
    $VMI_ACAge_t = $ChAge_y."3";
  } elseif ($ChAge_m >=4 && $ChAge_m <6 ) {
    $VMI_ACAge_s = $ChAge_y."4";
    $VMI_ACAge_t = $ChAge_y."5";
  } elseif ($ChAge_m >=6 && $ChAge_m <8 ) {
    $VMI_ACAge_s = $ChAge_y."6";
    $VMI_ACAge_t = $ChAge_y."7";
  } elseif ($ChAge_m >=8 && $ChAge_m <10 ) {
    $VMI_ACAge_s = $ChAge_y."8";
    $VMI_ACAge_t = $ChAge_y."9";
  } else {
    $VMI_ACAge_s = $ChAge_y."10";
    $VMI_ACAge_t = $ChAge_y."11";
  }
} elseif ($ChAge_y >= 11 && $ChAge_y <12 ) {
  $VMI_ACAge_S = "11세 0개월";
  $VMI_ACAge_T = "11세 11개월";
  if ($ChAge_m <2) {
    $VMI_ACAge_s = $ChAge_y."0";
    $VMI_ACAge_t = $ChAge_y."1";
  } elseif ($ChAge_m >=2 && $ChAge_m <4 ) {
    $VMI_ACAge_s = $ChAge_y."2";
    $VMI_ACAge_t = $ChAge_y."3";
  } elseif ($ChAge_m >=4 && $ChAge_m <6 ) {
    $VMI_ACAge_s = $ChAge_y."4";
    $VMI_ACAge_t = $ChAge_y."5";
  } elseif ($ChAge_m >=6 && $ChAge_m <8 ) {
    $VMI_ACAge_s = $ChAge_y."6";
    $VMI_ACAge_t = $ChAge_y."7";
  } elseif ($ChAge_m >=8 && $ChAge_m <10 ) {
    $VMI_ACAge_s = $ChAge_y."8";
    $VMI_ACAge_t = $ChAge_y."9";
  } else {
    $VMI_ACAge_s = $ChAge_y."10";
    $VMI_ACAge_t = $ChAge_y."11";
  }
} elseif ($ChAge_y >= 12 && $ChAge_y <13 ) {
  $VMI_ACAge_S = "12세 0개월";
  $VMI_ACAge_T = "12세 11개월";
  if ($ChAge_m <2) {
    $VMI_ACAge_s = $ChAge_y."0";
    $VMI_ACAge_t = $ChAge_y."1";
  } elseif ($ChAge_m >=2 && $ChAge_m <4 ) {
    $VMI_ACAge_s = $ChAge_y."2";
    $VMI_ACAge_t = $ChAge_y."3";
  } elseif ($ChAge_m >=4 && $ChAge_m <6 ) {
    $VMI_ACAge_s = $ChAge_y."4";
    $VMI_ACAge_t = $ChAge_y."5";
  } elseif ($ChAge_m >=6 && $ChAge_m <8 ) {
    $VMI_ACAge_s = $ChAge_y."6";
    $VMI_ACAge_t = $ChAge_y."7";
  } elseif ($ChAge_m >=8 && $ChAge_m <10 ) {
    $VMI_ACAge_s = $ChAge_y."8";
    $VMI_ACAge_t = $ChAge_y."9";
  } else {
    $VMI_ACAge_s = $ChAge_y."10";
    $VMI_ACAge_t = $ChAge_y."11";
  }
} elseif ($ChAge_y >= 13 && $ChAge_y <19 ) {
  $VMI_ACAge_S = "13세 0개월";
  $VMI_ACAge_T = "18세 11개월";
    $VMI_ACAge_s = $ChAge_y."0";
    $VMI_ACAge_t = $ChAge_y."11";
} elseif ($ChAge_y >= 19 && $ChAge_y <40 ) {
  $VMI_ACAge_S = "19세 0개월";
  $VMI_ACAge_T = "39세 11개월";
    $VMI_ACAge_s = 190;
    $VMI_ACAge_t = 3911;
} elseif ($ChAge_y >= 40 && $ChAge_y <50 ) {
  $VMI_ACAge_S = "40세 0개월";
  $VMI_ACAge_T = "49세 11개월";
    $VMI_ACAge_s = 400;
    $VMI_ACAge_t = 4911;
} elseif ($ChAge_y >= 50 && $ChAge_y <55 ) {
  $VMI_ACAge_S = "50세 0개월";
  $VMI_ACAge_T = "54세 11개월";
    $VMI_ACAge_s = 500;
    $VMI_ACAge_t = 5411;
} elseif ($ChAge_y >= 55 && $ChAge_y <60 ) {
  $VMI_ACAge_S = "55세 0개월";
  $VMI_ACAge_T = "59세 11개월";
    $VMI_ACAge_s = 550;
    $VMI_ACAge_t = 5911;
} elseif ($ChAge_y >= 60 && $ChAge_y <65 ) {
  $VMI_ACAge_S = "60세 0개월";
  $VMI_ACAge_T = "64세 11개월";
    $VMI_ACAge_s = 600;
    $VMI_ACAge_t = 6411;
} elseif ($ChAge_y >= 65 && $ChAge_y <70 ) {
  $VMI_ACAge_S = "65세 0개월";
  $VMI_ACAge_T = "69세 11개월";
    $VMI_ACAge_s = 650;
    $VMI_ACAge_t = 6911;
} elseif ($ChAge_y >= 70 && $ChAge_y <75 ) {
  $VMI_ACAge_S = "70세 0개월";
  $VMI_ACAge_T = "74세 11개월";
    $VMI_ACAge_s = 700;
    $VMI_ACAge_t = 7411;
} elseif ($ChAge_y >= 75 && $ChAge_y <80 ) {
  $VMI_ACAge_S = "75세 0개월";
  $VMI_ACAge_T = "79세 11개월";
    $VMI_ACAge_s = 750;
    $VMI_ACAge_t = 7911;
} elseif ($ChAge_y >= 80 && $ChAge_y <85 ) {
  $VMI_ACAge_S = "80세 0개월";
  $VMI_ACAge_T = "84세 11개월";
    $VMI_ACAge_s = 800;
    $VMI_ACAge_t = 8411;
} elseif ($ChAge_y >= 85 && $ChAge_y <90 ) {
  $VMI_ACAge_S = "85세 0개월";
  $VMI_ACAge_T = "89세 11개월";
    $VMI_ACAge_s = 850;
    $VMI_ACAge_t = 8911;
} elseif ($ChAge_y >= 90 && $ChAge_y <95 ) {
  $VMI_ACAge_S = "90세 0개월";
  $VMI_ACAge_T = "94세 11개월";
    $VMI_ACAge_s = 900;
    $VMI_ACAge_t = 9411;
} elseif ($ChAge_y >= 95 && $ChAge_y <100 ) {
  $VMI_ACAge_S = "95세 0개월";
  $VMI_ACAge_T = "99세 11개월";
    $VMI_ACAge_s = 950;
    $VMI_ACAge_t = 9911;
}

$VMI_AGE=$VMI_ACAge_s.$VMI_ACAge_t;

if (empty($Raw_vmi)) {
  $Raw_vmi = "평가하지 않음";
} else {
  $Raw_vmi = $Raw_vmi;
}
if (empty($Raw_visual)) {
  $Raw_visual = "평가하지 않음";
} else {
  $Raw_visual = $Raw_visual;
}
if (empty($Raw_motor)) {
  $Raw_motor = "평가하지 않음";
} else {
  $Raw_motor = $Raw_motor;
}

if ($Raw_vmi === "평가하지 않음") {
  $VMI_STAND = "-";
  $VMI_PERCENTILE = "-";
  $VMI_SCALED = "-";
  $VMI_Age = "-";
} else {
  // VMI 표준점수
  $Rawscore_VMI = $Raw_vmi;
  $sql_VMI = "SELECT * FROM VMI_RAWTOSTAND WHERE AGE=$VMI_AGE AND RAWSCORE='$Rawscore_VMI'";
  $result_VMI = mysqli_query($conn_compar, $sql_VMI);
  $row_VMI = mysqli_fetch_array($result_VMI);
  $VMI_STAND = $row_VMI['VMISTAND'];

  // VMI 척도점수, 백분율
  $sql_VMISC = "SELECT * FROM VMI_SCALED WHERE SS='$VMI_STAND'";
  $result_VMISC = mysqli_query($conn_compar, $sql_VMISC);
  $row_VMISC = mysqli_fetch_array($result_VMISC);
  $VMI_SCALED = $row_VMISC['SCALED'];
  $VMI_PERCENTILE = $row_VMISC['PERCENTILE'];

  // VMI 등가나이환산
  $Rawscore_VMI = $Raw_vmi;
  $sql_VMIAGE = "SELECT * FROM VMI_RAWTOAGE WHERE RAW='$Rawscore_VMI'";
  $result_VMIAGE = mysqli_query($conn_compar, $sql_VMIAGE);
  $row_VMIAGE = mysqli_fetch_array($result_VMIAGE);
  $VMI_Age = $row_VMIAGE['VMIAGE'];

}



if ($Raw_visual === "평가하지 않음") {
  $VISUAL_STAND = "-";
  $VISUAL_PERCENTILE = "-";
  $VISUAL_SCALED = "-";
  $VISUAL_Age = "-";
} else {
  // VISUAL 표준점수
  $Rawscore_VISUAL = $Raw_visual;
  $sql_VISUAL = "SELECT * FROM VMI_RAWTOSTAND WHERE AGE=$VMI_AGE AND RAWSCORE='$Rawscore_VISUAL'";
  $result_VISUAL = mysqli_query($conn_compar, $sql_VISUAL);
  $row_VISUAL = mysqli_fetch_array($result_VISUAL);
  $VISUAL_STAND = $row_VISUAL['VISUALSTAND'];

  // VISUAL 척도점수, 백분율
  $sql_VISUALSC = "SELECT * FROM VMI_SCALED WHERE SS='$VISUAL_STAND'";
  $result_VISUALSC = mysqli_query($conn_compar, $sql_VISUALSC);
  $row_VISUALSC = mysqli_fetch_array($result_VISUALSC);
  $VISUAL_SCALED = $row_VISUALSC['SCALED'];
  $VISUAL_PERCENTILE = $row_VISUALSC['PERCENTILE'];

  // VISUAL 등가나이환산
  $Rawscore_VISUAL = $_POST['Raw_visual'];
  $sql_VISUALAGE = "SELECT * FROM VMI_RAWTOAGE WHERE RAW='$Rawscore_VISUAL'";
  $result_VISUALAGE = mysqli_query($conn_compar, $sql_VISUALAGE);
  $row_VISUALAGE = mysqli_fetch_array($result_VISUALAGE);
  $VISUAL_Age = $row_VISUALAGE['VISUALAGE'];
}

if ($Raw_motor === "평가하지 않음") {
  $MOTOR_STAND = "-";
  $MOTOR_PERCENTILE = "-";
  $MOTOR_SCALED = "-";
  $MOTOR_Age = "-";
} else {
  // MOTOR 표준점수
  $Rawscore_MOTOR = $Raw_motor;
  $sql_MOTOR = "SELECT * FROM VMI_RAWTOSTAND WHERE AGE=$VMI_AGE AND RAWSCORE='$Rawscore_MOTOR'";
  $result_MOTOR = mysqli_query($conn_compar, $sql_MOTOR);
  $row_MOTOR = mysqli_fetch_array($result_MOTOR);
  $MOTOR_STAND = $row_MOTOR['MOTORSTAND'];

  // MOTOR 척도점수, 백분율
  $sql_MOTORSC = "SELECT * FROM VMI_SCALED WHERE SS='$MOTOR_STAND'";
  $result_MOTORSC = mysqli_query($conn_compar, $sql_MOTORSC);
  $row_MOTORSC = mysqli_fetch_array($result_MOTORSC);
  $MOTOR_SCALED = $row_MOTORSC['SCALED'];
  $MOTOR_PERCENTILE = $row_MOTORSC['PERCENTILE'];

  // MOTOR 등가나이환산
  $Rawscore_MOTOR = $_POST['Raw_motor'];
  $sql_MOTORAGE = "SELECT * FROM VMI_RAWTOAGE WHERE RAW='$Rawscore_MOTOR'";
  $result_MOTORAGE = mysqli_query($conn_compar, $sql_MOTORAGE);
  $row_MOTORAGE = mysqli_fetch_array($result_MOTORAGE);
  $MOTOR_Age = $row_MOTORAGE['MOTORAGE'];
}






// DEM 분석기준나이설정

if ($ChAge_y < 6) {
  $DEM_ACAge_s = 60;
  $DEM_ACAge_t = 611;
  $DEM_ACAge_S = "6세 0개월";
  $DEM_ACAge_T = "6세 11개월";
} elseif ($ChAge_y >= 6 && $ChAge_y <14 ) {
  $DEM_ACAge_S = $ChAge_y."세 0개월";
  $DEM_ACAge_T = $ChAge_y."세 11개월";
  $DEM_ACAge_s = $ChAge_y."0";
  $DEM_ACAge_t = $ChAge_y."11";
} else {
  $DEM_ACAge_s = 130;
  $DEM_ACAge_t = 1311;
  $DEM_ACAge_S = "13세 0개월";
  $DEM_ACAge_T = "13세 11개월";
}


$DEM_AGE=$DEM_ACAge_s.$DEM_ACAge_t;




// 조정된 수직데이터

if (empty($DEM_VER)) {
  $DEM_VER = "-";
} else {
  $DEM_VER = $DEM_VER;
}

if ($VER_ERR_S == "") {
  $VER_ERR_S = "-";
} else {
  $VER_ERR_S = $VER_ERR_S;
}

if ($VER_ERR_O == "") {
  $VER_ERR_O = "-";
} else {
  $VER_ERR_O = $VER_ERR_O;
}

if ($VER_ERR_A == "") {
  $VER_ERR_A = "-";
} else {
  $VER_ERR_A = $VER_ERR_A;
}

if ($VER_ERR_T == "") {
  $VER_ERR_T ="-";
} else {
  $VER_ERR_T = $VER_ERR_T;
}




if (($DEM_VER === '-') || ($VER_ERR_S === '-') || ($VER_ERR_O === '-') || ($VER_ERR_A === '-') || ($VER_ERR_T === '-')) {
  $VER_Adj_time = "평가하지 않음";
  $DEM_VER_PER = "-";
  $DEM_VER_STAND = "-";
  $ERR_VER = "-";
} else {
  $VER_Adj_time = round($DEM_VER*(80/(80-$VER_ERR_O+$VER_ERR_A)));
  $ERR_VER = $VER_ERR_S+$VER_ERR_O+$VER_ERR_A+$VER_ERR_T;
  $sql_VER = "SELECT * FROM DEM_VERTICAL WHERE AGE=$DEM_AGE AND RAW='$VER_Adj_time'";
  $result_VER = mysqli_query($conn_compar, $sql_VER);
  $row_VER = mysqli_fetch_array($result_VER);
  $DEM_VER_PER = $row_VER['PERCENTILE'];
  $DEM_VER_STAND = $row_VER['STANDARD'];
}



// 조정된 수평데이터
if (empty($DEM_HOR)) {
  $DEM_VER = "-";
} else {
  $DEM_HOR = $DEM_HOR;
}

if ($HOR_ERR_S == "") {
  $HOR_ERR_S = "-";
} else {
  $HOR_ERR_S = $HOR_ERR_S;
}

if ($HOR_ERR_O == "") {
  $HOR_ERR_O = "-";
} else {
  $HOR_ERR_O = $HOR_ERR_O;
}

if ($HOR_ERR_A == "") {
  $HOR_ERR_A = "-";
} else {
  $HOR_ERR_A = $HOR_ERR_A;
}

if ($HOR_ERR_T == "") {
  $HOR_ERR_T ="-";
} else {
  $HOR_ERR_T = $HOR_ERR_T;
}
if (($DEM_HOR === '-') || ($HOR_ERR_S === '-') || ($HOR_ERR_O === '-') || ($HOR_ERR_A === '-') || ($HOR_ERR_T === '-')){
  $HOR_Adj_time = "평가하지 않음";
  $DEM_HOR_PER = "-";
  $DEM_HOR_STAND = "-";
  $ERR_HOR = "-";
} else {
  $ERR_HOR = $HOR_ERR_S+$HOR_ERR_O+$HOR_ERR_A+$HOR_ERR_T;
  $HOR_Adj_time = round($DEM_HOR*(80/(80-$HOR_ERR_O+$HOR_ERR_A)));
  $sql_HOR = "SELECT * FROM DEM_HORIZON WHERE AGE=$DEM_AGE AND RAW='$HOR_Adj_time'";
  $result_HOR = mysqli_query($conn_compar, $sql_HOR);
  $row_HOR = mysqli_fetch_array($result_HOR);
  $DEM_HOR_PER = $row_HOR['PERCENTILE'];
  $DEM_HOR_STAND = $row_HOR['STANDARD'];
}

// 조정된 오류데이터
if ($ERR_VER === '-' || $ERR_HOR === '-') {
  $DEM_ERR = "-";
  $DEM_ERR_PER = "-";
  $DEM_ERR_STAND = "-";
} else {
  $DEM_ERR = $ERR_VER + $ERR_HOR;

  if ($ChAge_y < 7){

    if ($DEM_ERR >45 ) {
      $CHDEM_ERR = 45;
    } else {
      $CHDEM_ERR = $DEM_ERR;
    }
  } elseif ($ChAge_y == 7) {

    if ($DEM_ERR >45 ) {
      $CHDEM_ERR = 45;
    } else {
      $CHDEM_ERR = $DEM_ERR;
    }
  } elseif ($ChAge_y == 8) {

    if ($DEM_ERR >23 ) {
      $CHDEM_ERR = 23;
    } else {
      $CHDEM_ERR = $DEM_ERR;
    }
  } elseif ($ChAge_y == 9) {

    if ($DEM_ERR >13 ) {
      $CHDEM_ERR = 13;
    } else {
      $CHDEM_ERR = $DEM_ERR;
    }
  }elseif ($ChAge_y == 10) {

    if ($DEM_ERR >9 ) {
      $CHDEM_ERR = 9;
    } else {
      $CHDEM_ERR = $DEM_ERR;
    }
  }elseif ($ChAge_y == 11) {

    if ($DEM_ERR >8 ) {
      $CHDEM_ERR = 8;
    } else {
      $CHDEM_ERR = $DEM_ERR;
    }
  }elseif ($ChAge_y == 12) {

    if ($DEM_ERR >5 ) {
      $CHDEM_ERR = 5;
    } else {
      $CHDEM_ERR = $DEM_ERR;
    }
  }elseif ($ChAge_y >= 13) {

    if ($DEM_ERR >8 ) {
      $CHDEM_ERR = 8;
    } else {
      $CHDEM_ERR = $DEM_ERR;
    }
  }


  $sql_ERR = "SELECT * FROM DEM_ERROR WHERE AGE=$DEM_AGE AND ERROR='$CHDEM_ERR'";
  $result_ERR = mysqli_query($conn_compar, $sql_ERR);
  $row_ERR = mysqli_fetch_array($result_ERR);
  $DEM_ERR_PER = $row_ERR['PERCENTILE'];
  $DEM_ERR_STAND = $row_ERR['STANDARD'];
}



// DEM비데이터
if ($HOR_Adj_time === "평가하지 않음" || $VER_Adj_time === "평가하지 않음" ){
  $DEM_Ratio = "-";
  $DEM_RATIO_PER = "-";
  $DEM_RATIO_STAND = "-";
} else {
  $DEM_Ratio = round(($HOR_Adj_time/$VER_Adj_time),2);







  // DEM비 최대최소값 지정
  if ($ChAge_y < 7){
    if ($DEM_Ratio < 0.80) {
      $CHDEM_RATIO = 0.80;
    } elseif ($DEM_Ratio > 2.74) {
      $CHDEM_RATIO = 2.74;
    } else {
      $CHDEM_RATIO = $DEM_Ratio;
    }
    if ($DEM_ERR >45 ) {
      $CHDEM_ERR = 45;
    } else {
      $CHDEM_ERR = $DEM_ERR;
    }
  } elseif ($ChAge_y == 7) {
    if ($DEM_Ratio < 0.90) {
      $CHDEM_RATIO = 0.90;
    } elseif ($DEM_Ratio > 2.53) {
      $CHDEM_RATIO = 2.53;
    } else {
      $CHDEM_RATIO = $DEM_Ratio;
    }
    if ($DEM_ERR >45 ) {
      $CHDEM_ERR = 45;
    } else {
      $CHDEM_ERR = $DEM_ERR;
    }
  } elseif ($ChAge_y == 8) {
    if ($DEM_Ratio < 0.90) {
      $CHDEM_RATIO = 0.90;
    } elseif ($DEM_Ratio > 1.71) {
      $CHDEM_RATIO = 1.71;
    } else {
      $CHDEM_RATIO = $DEM_Ratio;
    }
    if ($DEM_ERR >23 ) {
      $CHDEM_ERR = 23;
    } else {
      $CHDEM_ERR = $DEM_ERR;
    }
  } elseif ($ChAge_y == 9) {
    if ($DEM_Ratio < 0.90) {
      $CHDEM_RATIO = 0.90;
    } elseif ($DEM_Ratio > 1.71) {
      $CHDEM_RATIO = 1.71;
    } else {
      $CHDEM_RATIO = $DEM_Ratio;
    }
    if ($DEM_ERR >13 ) {
      $CHDEM_ERR = 13;
    } else {
      $CHDEM_ERR = $DEM_ERR;
    }
  }elseif ($ChAge_y == 10) {
    if ($DEM_Ratio < 0.90) {
      $CHDEM_RATIO = 0.90;
    } elseif ($DEM_Ratio > 1.63) {
      $CHDEM_RATIO = 1.63;
    } else {
      $CHDEM_RATIO = $DEM_Ratio;
    }
    if ($DEM_ERR >9 ) {
      $CHDEM_ERR = 9;
    } else {
      $CHDEM_ERR = $DEM_ERR;
    }
  }elseif ($ChAge_y == 11) {
    if ($DEM_Ratio < 0.90) {
      $CHDEM_RATIO = 0.90;
    } elseif ($DEM_Ratio > 1.49) {
      $CHDEM_RATIO = 1.49;
    } else {
      $CHDEM_RATIO = $DEM_Ratio;
    }
    if ($DEM_ERR >8 ) {
      $CHDEM_ERR = 8;
    } else {
      $CHDEM_ERR = $DEM_ERR;
    }
  }elseif ($ChAge_y == 12) {
    if ($DEM_Ratio < 0.92) {
      $CHDEM_RATIO = 0.92;
    } elseif ($DEM_Ratio > 1.37) {
      $CHDEM_RATIO = 1.37;
    } else {
      $CHDEM_RATIO = $DEM_Ratio;
    }
    if ($DEM_ERR >5 ) {
      $CHDEM_ERR = 5;
    } else {
      $CHDEM_ERR = $DEM_ERR;
    }

  }else if($ChAge_y > 12) {

    if ($DEM_Ratio < 0.91) {
      $CHDEM_RATIO = 0.90;

    } else if ($DEM_Ratio >= 1.43) {
      $CHDEM_RATIO = 1.43;
    } else {
      $CHDEM_RATIO = $DEM_Ratio;
    }
    if ($DEM_ERR >8 ) {
      $CHDEM_ERR = 8;
    } else {
      $CHDEM_ERR = $DEM_ERR;
    }
  }





  $sql_RATIO = "SELECT * FROM DEM_RATIO WHERE AGE=$DEM_AGE AND RATIO='$CHDEM_RATIO'";
  $result_RATIO = mysqli_query($conn_compar, $sql_RATIO);
  $row_RATIO = mysqli_fetch_array($result_RATIO);
  $DEM_RATIO_PER = $row_RATIO['PERCENTILE'];
  $DEM_RATIO_STAND = $row_RATIO['STANDARD'];
}








// 분석기준나이설정(WACS)

if ($ChAge_y < 3) {
  $WACS_ACAge_s = 30;
  $WACS_ACAge_t = 35;
  $WACS_ACAge_S = "3세 0개월";
  $WACS_ACAge_T = "3세 5개월";
} elseif ($ChAge_y >= 3 && $ChAge_y <6 ) {
  if ($ChAge_m <6) {
    $WACS_ACAge_S = $ChAge_y."세 0개월";
    $WACS_ACAge_T = $ChAge_y."세 5개월";
    $WACS_ACAge_s = $ChAge_y."0";
    $WACS_ACAge_t = $ChAge_y."5";
  } else {
    $WACS_ACAge_S = $ChAge_y."세 6개월";
    $WACS_ACAge_T = $ChAge_y."세 11개월";
    $WACS_ACAge_s = $ChAge_y."6";
    $WACS_ACAge_t = $ChAge_y."11";
  }
} else {
  $WACS_ACAge_s = 56;
  $WACS_ACAge_t = 511;
  $WACS_ACAge_S = "5세 6개월";
  $WACS_ACAge_T = "5세 11개월";
}


$WACS_AGE=$WACS_ACAge_s.$WACS_ACAge_t;




// 물체식별 표준점수, 백분위수
if (empty($WACS_RAW_T1)){
  $WACS_RAW_T1 = "평가하지 않음";
  $WACS_T1_PER = "-";
  $WACS_T1_STAND = "-";
} else {
$sql_WACS_T1 = "SELECT * FROM WACS_T1 WHERE AGE=$WACS_AGE AND RAW=$WACS_RAW_T1";
$result_WACS_T1 = mysqli_query($conn_compar, $sql_WACS_T1);
$row_WACS_T1 = mysqli_fetch_array($result_WACS_T1);
$WACS_T1_PER = $row_WACS_T1['PERCENTILE'];
$WACS_T1_STAND = $row_WACS_T1['STANDARD'];
}

// 물체설계 표준점수, 백분위수
if (empty($WACS_RAW_T2)){
    $WACS_RAW_T2 = "평가하지 않음";
    $WACS_T2_PER = "-";
    $WACS_T2_STAND = "-";
  } else {
$sql_WACS_T2 = "SELECT * FROM WACS_T2 WHERE AGE=$WACS_AGE AND RAW='$WACS_RAW_T2'";
$result_WACS_T2 = mysqli_query($conn_compar, $sql_WACS_T2);
$row_WACS_T2 = mysqli_fetch_array($result_WACS_T2);
$WACS_T2_PER = $row_WACS_T2['PERCENTILE'];
$WACS_T2_STAND = $row_WACS_T2['STANDARD'];
}


// 그림설계 표준점수, 백분위수
if (empty($WACS_RAW_T3)){
  $WACS_RAW_T3 = "평가하지 않음";
  $WACS_T3_PER = "-";
  $WACS_T3_STAND = "-";
} else {
$sql_WACS_T3 = "SELECT * FROM WACS_T3 WHERE AGE=$WACS_AGE AND RAW='$WACS_RAW_T3'";
$result_WACS_T3 = mysqli_query($conn_compar, $sql_WACS_T3);
$row_WACS_T3 = mysqli_fetch_array($result_WACS_T3);
$WACS_T3_PER = $row_WACS_T3['PERCENTILE'];
$WACS_T3_STAND = $row_WACS_T3['STANDARD'];
}


// 일반움직임 표준점수, 백분위수
if (empty($WACS_RAW_T4)){
  $WACS_RAW_T4 = "평가하지 않음";
  $WACS_T4_PER = "-";
  $WACS_T4_STAND = "-";
} else {
$sql_WACS_T4 = "SELECT * FROM WACS_T4 WHERE AGE=$WACS_AGE AND RAW='$WACS_RAW_T4'";
$result_WACS_T4 = mysqli_query($conn_compar, $sql_WACS_T4);
$row_WACS_T4 = mysqli_fetch_array($result_WACS_T4);
$WACS_T4_PER = $row_WACS_T4['PERCENTILE'];
$WACS_T4_STAND = $row_WACS_T4['STANDARD'];
}

// 표준점수평균
if ($WACS_T1_STAND === '-' || $WACS_T2_STAND === '-' || $WACS_T3_STAND === '-' || $WACS_T4_STAND === '-' ) {
  $WACS_T5_PER = "-";
  $SUM_STAND = "-";
} else {

  $SUM_STAND = round(($WACS_T1_STAND + $WACS_T2_STAND + $WACS_T3_STAND + $WACS_T4_STAND)/4);
  $sql_WACS_T5 = "SELECT * FROM WACS_T5 WHERE AGE=$WACS_AGE AND TOTAL='$SUM_STAND'";
  $result_WACS_T5 = mysqli_query($conn_compar, $sql_WACS_T5);
  $row_WACS_T5 = mysqli_fetch_array($result_WACS_T5);
  $WACS_T5_PER = $row_WACS_T5['PERCENTILE'];

}






 ?>




 <script type="text/javascript">


 </script>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="http://localhost/VisionTherapy_supporter/CSS/Main_Body_Test_ver1.css">
    <title>시기능발달평가 분석결과</title>
    <style media="screen">




      .bad {
        font-weight: bold; color: red;
      }

      .observer {
        font-weight: bold;
        color:rgb(0,0,255) ;
      }

      .TVPS_Menu_head {

        border:2px solid black;
        background-color : #b91a4d;
        color: rgb(255,255,255);
        font-size: 13px;
        font-weight: bold;
        text-align: center;
      }

      .TVPS_Menu_Item {
        border:2px solid black;
        background-color : rgb(254,174,174);
        font-size: 10px;
        font-weight: bold;
        text-align: center;
      }

      .TVPS_Menu_Sec {
        height: 30px;
        border : 1px solid black;
        font-size : 10px;
        font-weight: bold;
        text-align: center;
        background-color: #dcdcdc;
      }

      .Form_Sell {
        height: 25px;
        border : 1px solid black;
        font-size : 10px;
        text-align: center;
      }

      .VMI_Menu_head {
        border:2px solid black;
        background-color : rgb(119,155,2);
        color: rgb(255,255,255);
        font-size: 13px;
        font-weight: bold;
        text-align: center;
      }

      .VMI_Menu_Item {
        height:30px;
        border:2px solid black;
        background-color : rgb(212,241,191);
        font-size: 10px;
        font-weight: bold;
        text-align: center;
      }

      .DEM_Menu_head {
        border:2px solid black;
        background-color : rgb(200,131,28);
        color: rgb(255,255,255);
        font-size: 13px;
        font-weight: bold;
        text-align: center;
      }

      .DEM_Menu_Item {
        height:30px;
        border:2px solid black;
        background-color :rgb(253,235,170);
        font-size: 10px;
        font-weight: bold;
        text-align: center;
      }

      .WACS_Menu_head {
        border:2px solid black;
        background-color : rgb(130,2,180);
        color: rgb(255,255,255);
        font-size: 13px;
        font-weight: bold;
        text-align: center;
      }

      .WACS_Menu_Item {
        height:30px;
        border:2px solid black;
        background-color : rgb(213,180,252);
        font-size: 11px;
        font-weight: bold;
        text-align: center;
      }

      .WACS_Menu_Item2{
        height:30px;
        border:2px solid black;
        background-color : rgb(244,235,253);
        font-size: 12px;
        font-weight: bold;
        text-align: center;
      }




    </style>
  </head>
  <body>
    <form class="" action="index.html" method="post">
      <table  style="width:700px;">
        <tr name="headline">
          <table style="width:700px;">
            <tr>
              <h1 style="text-align:center; width:700px;">시기능 발달평가 결과서 <?php if (isset($Cus_Name)){echo "(".$Cus_Name.")";}?></h1>
            </tr>
            <tr>
              <h3 style="text-align:center; width:700px;">한국시기능훈련센터 <?php if (isset($Branch)){echo "(".$Branch.")";}?></h3>
            </tr>
          </table>
        </tr>
        <tr name="secline">
          <table style="border:3px solid black; width:700px;">
            <tr>
              <td style="font-size:11">시기능기술 평가목적은 효율적인 읽기나 학습활동에 필수적으로 요구되는 초점기술, 안구협응기술과 안구운동기술, 시각인지기술, 시각운동통합기술, 시력등의 시기능기술을 종합적으로 평가하여 이에 필요한 조언이나 상담, 시기능훈련 등을 지원하기 위함입니다.</td>
            </tr>
            <tr>
              <td style="font-size:10px;">*유의사항 : 측정 당일 피검자의 심리상태나 건강상태에 따라 측정결과에 차이가 있을 수 있습니다.</td>
            </tr>
          </table>
        </tr>
        <tr>
          <td height="10px">&nbsp</td>
        </tr>
        <tr class="History">
          <table  style="border:3px solid black; width:700px;">
            <tr>
              <td colspan="2" style="text-align:center; width:700px; height: 30px; font-size: 16px; font-weight: bold;">History(보호자답변)</td>
            </tr>
            <tr>
              <td style="font-size: 12px; font-weight:bold;  vertical-align:top;" width="100px">● 방문목적 :</td>
              <td style="font-size:12px;">
                <?php
                if(!empty($_POST['che_visit'])){
                  $che_visit = $_POST['che_visit'];
                  $visit_arr = array($che_visit);
                  foreach ($visit_arr as $value) {
                    $visit_result = implode(",",$value);
                    echo $visit_result."로 방문함. ";
                  }
                } else {
                  echo "특이사항 없음. ";
                }

                 ?>
              </td>
            </tr>
            <tr>
              <td style="font-size:12px; font-weight:bold;  vertical-align:top;" width="100px">● 의뢰정보 :</td>
              <td style="font-size:12px;">
                <?php
                if(!empty($_POST['text_request1']) || !empty($_POST['text_request2']) ||!empty($_POST['text_request3'])){
                  $text_request1 = $_POST['text_request1'];
                  $text_request2 = $_POST['text_request2'];
                  $text_request3 = $_POST['text_request3'];
                  $request_result =  $text_request1."  ".$text_request2."  ".$text_request3;
                } else {
                  $request_result = "특이사항 없음. ";
                }
                echo $request_result;
                 ?>
              </td>
            </tr>
            <tr>
              <td style="font-size:12px; font-weight:bold;  vertical-align:top;" width="100px">● 본인 안병력 :</td>
              <td style="font-size:12px;">
                <?php

                if($_POST['radio_cl'] == null){
                  echo "시력보정용 도구사용에 특이사항 없음. ";
                }else{
                  $radio_cl = $_POST['radio_cl'];
                  if($radio_cl == "yes"){
                    if(!empty($_POST['text_record1'])){
                      $text_record1 = $_POST['text_record1'];
                      if(!empty($_POST['text_record2'])){
                        $text_record2 = $_POST['text_record2'];
                        echo $text_record1."부터 안경(또는 C/L)을 사용하였고, 최종검사일은 ".$text_record2."임. ";
                      } else {
                        echo $text_record1."부터 안경(또는 C/L)을 사용함. ";
                      }
                    }else{
                      if(!empty($_POST['text_record2'])){
                        $text_record2 = $_POST['text_record2'];
                        echo "안경(또는 C/L)을 사용하고, 최종검사일은 ".$text_record2."임. ";
                      } else {
                        echo "안경(또는 C/L)을 사용함. ";
                      }
                    }
                  }else if($radio_cl == "no"){
                    echo "안경 및 C/L 사용경험 없음. ";
                  } else {
                    echo "시력보정용 도구사용에 특이사항 없음. ";
                  }
                }





                if(!empty($_POST['che_record1']) || !empty($_POST['text_record3'])){
                  $che_record1 = $_POST['che_record1'];
                  $text_record3 = $_POST['text_record3'];
                  $che_record1_arr = array($che_record1);
                  foreach ($che_record1_arr as $value) {
                    $che_record1_result = implode(",",$value);
                    echo $che_record1_result.$text_record3."이(가) 있음. ";
                  }
                } else {
                  echo "안병력에 특이사항 없음. ";
                }

                if($_POST['radio_surgery1'] == null){
                  echo "";
                }else{
                  $radio_surgery1 = $_POST['radio_surgery1'];
                  if($radio_surgery1 == "no"){
                    echo "안과수술력은 없음. ";
                  } elseif ($radio_surgery1 == "yes"){
                    if($_POST['text_surgery1'] == null){
                      echo "안과수술력이 있음. ";
                    } else {
                      $text_surgery1 = $_POST['text_surgery1'];
                      echo $text_surgery1." 수술함. ";
                    }
                  }
                }

                 ?>
              </td>
            </tr>
            <tr>
              <td style="font-size:12px; font-weight:bold;  vertical-align:top;" width="100px">● 가족 안병력 :</td>
              <td style="font-size:12px;">
                <?php
                if(!empty($_POST['che_record2']) || !empty($_POST['text_record4'])){
                  $che_record2 = $_POST['che_record2'];
                  $text_record4 = $_POST['text_record4'];
                  $che_record2_arr = array($che_record2);
                  foreach ($che_record2_arr as $value) {
                    $che_record2_result = implode(", ",$value);
                    echo $che_record2_result.$text_record4."이(가) 있음. ";
                  }
                } else {
                  echo "특이사항 없음. ";
                }


                if($_POST['radio_surgery2'] == null){
                  echo "";
                }else{
                  $radio_surgery2 = $_POST['radio_surgery2'];
                  if($radio_surgery2 == "no"){
                    echo "안과수술력은 없음. ";
                  } elseif ($radio_surgery2 == "yes"){
                    if($_POST['text_surgery2'] == null){
                      echo "안과수술력이 있음. ";
                    } else {
                      $text_surgery2 = $_POST['text_surgery2'];
                      echo $text_surgery2.".";
                    }
                  }
                }

                 ?>
              </td>
            </tr>
            <tr>
              <td style="font-size:12px; font-weight:bold;  vertical-align:top;" width="100px">● 본인 전신병력 :</td>
              <td style="font-size:12px;">
                <?php
                if(!empty($_POST['text_record5'])){
                  $text_record5 = $_POST['text_record5'];
                  if(!empty($_POST['che_record3'])){
                    $che_record3 = $_POST['che_record3'];
                    $che_record3_arr = array($che_record3);
                    foreach ($che_record3_arr as $value) {
                      $che_record3_result = implode(",",$value);
                      echo $che_record3_result.$text_record5."이(가) 있음. ";
                    }
                  } else {
                    echo $text_record5."이(가) 있음. ";
                  }
                } else {
                  echo "특이사항 없음. ";
                }



                if($_POST['radio_surgery3'] == null){
                  echo "";
                }else{
                  $radio_surgery3 = $_POST['radio_surgery3'];
                  if($radio_surgery3 == "no"){
                    echo "수술력은 없음. ";
                  } elseif ($radio_surgery3 == "yes"){
                    if(!empty($_POST['text_surgery3'])){
                      $text_surgery3 = $_POST['text_surgery3'];
                        echo $text_surgery3." 받음. ";
                       if(!empty($text_record7)){
                        $text_record7 = $_POST['text_record7'];
                        echo $text_record7."에 마지막으로 검사받음. ";
                      } else {
                        echo "";
                      }
                    } else {
                      echo "";
                    }
                  } else {
                    echo "";
                  }
                }

                 ?>
              </td>
            </tr>
            <tr>
              <td style="font-size:12px; font-weight:bold;  vertical-align:top;" width="100px">● 가족 전신병력 :</td>
              <td style="font-size:12px;">
                <?php
                if(!empty($_POST['che_record4']) || !empty($_POST['text_record8'])){
                  $che_record4 = $_POST['che_record4'];
                  $text_record8 = $_POST['text_record8'];
                  $che_record4_arr = array($che_record4);
                  foreach ($che_record4_arr as $value) {
                    $che_record4_result = implode(",",$value);
                    echo $che_record4_result.$text_record8."이(가) 있음. ";
                  }
                } else {
                  echo "특이사항 없음. ";
                }

                if($_POST['radio_surgery4'] == null){
                  echo "";
                }else{
                  $radio_surgery4 = $_POST['radio_surgery4'];
                  if($radio_surgery4 == "no"){
                    echo "수술력은 없음. ";
                  } elseif ($radio_surgery4 == "yes"){
                    if($_POST['text_surgery4'] == null){
                      echo "수술력이 있음. ";
                    } else {
                      $text_surgery4 = $_POST['text_surgery4'];
                      echo $text_surgery4.".";
                    }
                  }
                }
                 ?>
              </td>
            </tr>
            <tr>
              <td style="font-size:12px;font-weight:bold;  vertical-align:top;" width="100px">● 본인 약물복용 :</td>
              <td style="font-size:12px;">
                <?php
                if($_POST['radio_drug'] == null){
                  echo "특이사항 없음. ";
                }else{
                  $radio_drug = $_POST['radio_drug'];
                  if($radio_drug == "no"){
                    echo "평소 복용하는 약물은 없음. ";
                  } elseif ($radio_drug == "yes"){
                    if(!empty($_POST['text_drug'])){
                      $text_drug = $_POST['text_drug'];
                      if(!empty($_POST['text_disease'])){
                        $text_disease = $_POST['text_disease'];
                        echo $text_disease."(으)로 ".$text_drug."(을)를 복용하고 있음. ";
                      } else {
                        echo $text_drug."을 복용하고 있음. ";
                      }
                    } else {
                      echo "";
                    }
                  } else {
                    echo "특이사항 없음. ";
                  }
                }


                 ?>
              </td>
            </tr>
            <tr>
              <td style="font-size:12px; font-weight:bold;  vertical-align:top;" width="100px">● 학교생활 :</td>
              <td style="font-size:12px;">
                <?php
                if(!empty($_POST['che_school'])){
                  $che_school = $_POST['che_school'];
                  $che_school_arr = array($che_school);
                  foreach ($che_school_arr as $value) {
                    $che_school_result = implode(", ",$value);
                    echo $che_school_result." 등의 어려움이 있음. ";
                  }
                } else {
                  echo "특이사항 없음. ";
                }

                if($_POST['radio_school'] == null){
                  echo "";
                }else{
                  $radio_school = $_POST['radio_school'];
                  if($radio_school == "yes"){
                    echo "학교가기를 좋아함. ";
                  }elseif($radio_school == "no") {
                    echo "학교가기를 좋아하지 않음. ";
                  }else{
                    echo "";
                  }
                }

                if($_POST['radio_friend'] == null){
                  echo "";
                }else{
                  $radio_friend = $_POST['radio_friend'];
                  if($radio_friend == "yes"){
                    echo "학급친구들을 좋아함. ";
                  }elseif($radio_friend == "no") {
                    echo "학급친구들을 좋아하지 않음. ";
                  }else{
                    echo "";
                  }
                }

                if($_POST['radio_teacher'] == null){
                  echo "";
                }else{
                  $radio_teacher = $_POST['radio_teacher'];
                  if($radio_teacher == "yes"){
                    echo "선생님을 좋아함. ";
                  }elseif($radio_teacher == "no") {
                    echo "선생님을 좋아하지 않음. ";
                  }else{
                    echo "";
                  }
                }



                if($_POST['radio_report'] == null){
                  echo "";
                }else{
                  $radio_report = $_POST['radio_report'];
                  if($radio_report == "good"){
                    echo "학업성취도가 우수함. ";
                  }else if($radio_report == "nomal"){
                    echo "학업성취도는 보통임. ";
                  }else if($radio_report == "bad") {
                    echo "학업성취도가 저조함. ";
                  }else{
                    echo "";
                  }
                }

                if(!empty($_POST['text_school'])){
                  $text_school = $_POST['text_school'];
                  echo "$text_school";
                }else{
                  echo "";
                }



                 ?>
              </td>
            </tr>
            <tr>
              <td style="font-size:12px; font-weight:bold;  vertical-align:top;" width="100px">● 출산기록 :</td>
              <td style="font-size:12px;">
                <?php
                if($_POST['radio_mother_health'] == null){
                  echo "";
                }else {
                  $radio_mother_health = $_POST['radio_mother_health'];
                  if($radio_mother_health == "good"){
                    echo "임신기간중 산모건강상태는 양호했음. ";
                  }elseif($radio_mother_health == "bad") {
                    if(!empty($_POST['text_mother_health'])){
                      $text_mother_health = $_POST['text_mother_health'];
                      echo $text_mother_health."임신기간중 합병증이 있었음. ";
                    } else {
                      echo "임신기간중 합병증이 있었음. ";
                    }
                  } else {
                    echo "임신기간중 특이사항 없음. ";
                  }
                }

                if($_POST['radio_delivery1'] == null){
                  echo "출산관련 특이사항 없음. ";
                }else{
                  $radio_delivery1 = $_POST['radio_delivery1'];
                    if($_POST['radio_delivery2'] == null){
                      echo $radio_delivery1."(으)로 출산함. ";
                    }else{
                      $radio_delivery2 = $_POST['radio_delivery2'];
                      if($radio_delivery2 == "early"){
                        if(!empty($_POST['text_delivery2'])){
                          $text_delivery2 = $_POST['text_delivery2'];
                          echo $radio_delivery1."(으)로 ".$text_delivery2." 조산함. ";
                        } else {
                          echo $radio_delivery1."(으)로 조산함. ";
                        }
                      } elseif($radio_delivery2 == "full") {
                        echo $radio_delivery1."(으)로 만삭 출산함. ";
                      } else {
                        echo "출산관련 특이사항 없음. ";
                      }
                    }
                  }




                 ?>
              </td>
            </tr>
            <tr>
              <td style="font-size:12px; font-weight:bold;  vertical-align:top;" width="100px">● 발달기록 :</td>
              <td style="font-size:12px;">
                <?php
                if(!empty($_POST['radio_crawl'])){
                  $radio_crawl = $_POST['radio_crawl'];
                  if($radio_crawl == "no"){
                    echo "배밀이를 하지 않음. ";
                  }else  if($radio_crawl == "yes") {
                    if(!empty($_POST['text_crawl'])){
                      $text_crawl = $_POST['text_crawl'];
                      echo $text_crawl."개월에 배밀이를 함. ";
                    } else {
                      echo "배밀이를 했음. ";
                    }
                  }else{
                    $radio_crawl= "";
                  }
                }


                if(!empty($_POST['radio_creeping'])){
                  $radio_creeping = $_POST['radio_creeping'];
                  if($radio_creeping == "no"){
                    echo "기어가기를 하지 않음. ";
                  }else if($radio_creeping == "yes"){
                    if(!empty($_POST['text_creeping'])){
                      $text_creeping = $_POST['text_creeping'];
                      echo $text_creeping."개월에 기어가기를 함. ";
                    } else {
                      echo "기어가기를 했음. ";
                    }
                  }else{
                    $radio_creeping = "";
                  }
                }

                if(!empty($_POST['text_walk'])){
                  $text_walk = $_POST['text_walk'];
                  echo $text_walk."개월에 걸음. ";
                } else {
                  $text_walk = "";
                }

                if(!empty($_POST['radio_run'])){
                  $radio_run = $_POST['radio_run'];
                  if($radio_run == "yes"){
                    echo "또래와 비슷하게 달릴 수 있음. ";
                  }else if($radio_run == "no"){
                    if(!empty($_POST['text_run'])){
                      $text_run = $_POST['text_run'];
                      echo "(".$text_run.")이유로 달리기 어려움. ";
                    } else {
                      echo "또래와 비슷하게 달리기 어려움. ";
                    }
                  }else{
                    $radio_run = "";
                  }
                }

                if(!empty($_POST['radio_pitch'])){
                  $radio_pitch = $_POST['radio_pitch'];
                  if($radio_pitch == "yes"){
                    echo "또래와 비슷하게 공을 잡거나 던질 수 있음. ";
                  }else if($radio_pitch == "no"){
                    if(!empty($_POST['text_pitch'])){
                      $text_pitch = $_POST['text_pitch'];
                      echo "(".$text_pitch.")이유로 공을 잡거나 던지기에 어려움. ";
                    } else {
                      echo "또래와 비슷하게 공을 잡거나 던지기 어려움. ";
                    }
                  }else{
                    $radio_pitch = "";
                  }
                }

                if(!empty($_POST['radio_micactiv'])){
                  $radio_micactiv = $_POST['radio_micactiv'];
                  if($radio_micactiv == "yes"){
                    echo "미세활동을 즐겨함. ";
                  }else if($radio_micactiv == "no") {
                    if(!empty($_POST['text_micactiv'])){
                      $text_micactiv = $_POST['text_micactiv'];
                      echo "(".$text_micactiv.")이유로 미세활동을 즐겨하지 않음. ";
                    } else {
                      echo "미세활동을 즐겨하지 않음. ";
                    }
                  }else{
                    $radio_micactiv = "";
                  }
                }

                if(!empty($_POST['radio_dress'])){
                  $radio_dress = $_POST['radio_dress'];
                  if($radio_dress == "yes"){
                    echo "혼자 옷을 입을 수 있음. ";
                  }else if($radio_dress == "no"){
                    if(!empty($_POST['text_dress'])){
                      $text_dress = $_POST['text_dress'];
                      echo "(".$text_dress.")이유로 혼자 옷입기 어려움. ";
                    } else {
                      echo "혼자 옷입기 어려움. ";
                    }
                  }else{
                    $radio_dress = "";
                  }
                }

                if(!empty($_POST['radio_zipper'])){
                  $radio_zipper = $_POST['radio_zipper'];
                  if($radio_zipper == "yes"){
                    echo "단추를 잠그거나 지퍼를 올릴 수 있음 . ";
                  }else if($radio_zipper == "no"){
                    if(!empty($_POST['text_zipper'])){
                      $text_zipper = $_POST['text_zipper'];
                      echo "(".$text_zipper.")이유로 단추를 잠그거나 지퍼를 올리기 어려움. ";
                    } else {
                      echo "단추를 잠그거나 지퍼를 올리기 어려움. ";
                    }
                  }else{
                    $radio_zipper = "";
                  }
                }

                if(!empty($_POST['radio_bicycle'])){
                  $radio_bicycle = $_POST['radio_bicycle'];
                  if($radio_bicycle == "no"){
                    echo "자전거 배우는데 어려움이 없음 . ";
                  }else if($radio_bicycle == "yes"){
                    if(!empty($_POST['text_bicycle'])){
                      $text_bicycle = $_POST['text_bicycle'];
                      echo "(".$text_bicycle.")이유로 자전거 배우는데 어려움. ";
                    } else {
                      echo "자전거 배우는데 어려움. ";
                    }
                  }else{
                    $radio_bicycle = "";
                  }
                }

                if(!empty($_POST['radio_play'])){
                  $radio_play = $_POST['radio_play'];
                  if($radio_play == "no"){
                    echo "운동에 어려움이 없음 . ";
                  }else if($radio_play == "yes") {
                    if(!empty($_POST['text_play'])){
                      $text_play = $_POST['text_play'];
                      echo "(".$text_play.")을(를) 어려워함. ";
                    } else {
                      echo "운동하는데 어려움이 있음. ";
                    }
                  }else{
                    $radio_play = "";
                  }
                }

                if(!isset($_POST['che_tired'])){
                  $che_tired = "";
                  if(!empty($_POST['text_tired'])){
                    $text_tired = $_POST['text_tired'];
                    echo "피곤하면 ".$text_tired.". ";
                  }
                } else {
                  $che_tired = $_POST['che_tired'];
                  $che_tired_arr = array($che_tired);
                  foreach ($che_tired_arr as $value) {
                    $che_tired_result = implode(",",$value);
                    if(!empty($_POST['text_tired'])){
                      $text_tired = $_POST['text_tired'];
                      echo "피곤하면 ".$che_tired_result.", ".$text_tired.". ";
                    } else {
                      echo "피곤하면 ".$che_tired_result.". ";
                    }
                  }
                }



                if(!isset($_POST['che_nervous'])){
                  $che_nervous = "";
                  if(!empty($_POST['text_nervous'])){
                    $text_nervous = $_POST['text_nervous'];
                    echo "긴장하면 ".$text_nervous."을(를) 함. ";
                  }
                } else {
                  $che_nervous = $_POST['che_nervous'];
                  $che_nervous_arr = array($che_nervous);
                  foreach ($che_nervous_arr as $value) {
                    $che_nervous_result = implode(",",$value);
                    if(!empty($_POST['text_nervous'])){
                      $text_nervous = $_POST['text_nervous'];
                      echo "긴장하면 ".$che_nervous_result.", ".$text_nervous."을(를) 함. ";
                    } else {
                    echo "긴장하면 ".$che_nervous_result.". ";
                    }
                  }
                }

                if(!empty($_POST['radio_langs'])){
                  $radio_langs = $_POST['radio_langs'];
                  if($radio_langs == "yes"){
                    echo "언어발달은 또래와 비슷함. ";
                  }else if($radio_langs == "no") {
                    if(!empty($_POST['text_langs'])){
                      $text_langs = $_POST['text_langs'];
                      echo "(".$text_langs.")이유로 언어발달이 늦음. ";
                    } else {
                      echo "언어발달은 또래보다 늦음. ";
                    }
                  }
                }else{
                  $radio_langs = "";
                }

                if(!empty($_POST['text_character'])){
                  $text_character = $_POST['text_character'];
                  echo "성격은 ". $text_character." ";
                } else {
                  $text_character = "";
                }

                if($radio_crawl == "" && $radio_creeping == "" && $text_walk == "" && $radio_run == "" && $radio_pitch == "" && $radio_micactiv == "" && $radio_dress == "" && $radio_zipper == "" &&
                 $radio_bicycle == "" && $radio_play == "" && $che_tired == "" && $che_nervous == "" &&  $radio_langs == "" && $text_character == "") {
                   echo "특이사항 없음.";
                 }
                 ?>
              </td>
            </tr>
            <tr>
              <td style="font-size:12px; font-weight:bold;  vertical-align:top;" width="100px">● 신체협응 :</td>
              <td style="font-size:12px;">
                <?php
                if(!empty($_POST['che_motor_coordi'])){
                  $che_motor_coordi = $_POST['che_motor_coordi'];
                  $che_motor_coordi_arr = array($che_motor_coordi);
                  foreach ($che_motor_coordi_arr as $value) {
                    $che_motor_coordi_result = implode(",",$value);
                    echo $che_motor_coordi_result;
                }
              }else {
                  echo "특이사항 없음.";
                }


                 ?>
              </td>
            </tr>
            <tr>
              <td style="font-size:12px; font-weight:bold;  vertical-align:top;" width="100px">● 촉각 :</td>
              <td style="font-size:12px;">
                <?php
                if(!empty($_POST['che_touch'])){
                  $che_touch = $_POST['che_touch'];
                  $che_touch_arr = array($che_touch);
                  foreach ($che_touch_arr as $value) {
                    $che_touch_result = implode(",",$value);
                    echo $che_touch_result;
                }
              }else {
                  echo "특이사항 없음.";
                }
                 ?>
              </td>
            </tr>
            <tr>
              <td style="font-size:12px; font-weight:bold;  vertical-align:top;" width="100px">● 여가생활 :</td>
              <td style="font-size:12px;">
                <?php
                if(!empty($_POST['text_weekday']) || !empty($_POST['text_weekend1']) || !empty($_POST['text_weekend2']) || !empty($_POST['text_activity']) || !empty($_POST['text_specialty']) ) {
                if(!empty($_POST['text_weekday']) && !empty($_POST['text_weekend1'])){
                  $text_weekday = $_POST['text_weekday'];
                  $text_weekend1 = $_POST['text_weekend1'];
                    echo "평일 ".$text_weekday,"시간, ".$text_weekend1."시간정도 TV시청이나 컴퓨터(스마트폰)을 사용함.";
                  } else {
                  echo "";
                }

                if(!empty($_POST['text_weekend2'])){
                  $text_weekend2 = $_POST['text_weekend2'];
                  echo "주말에 주로 ".$text_weekend2."를 함.";
                } else {
                  echo "";
                }


                if(!empty($_POST['text_activity'])){
                  $text_activity = $_POST['text_activity'];
                  echo "좋아하는 활동은 ".$text_activity."를 좋아함.";
                } else {
                  echo "";
                }

                if(!empty($_POST['text_specialty'])){
                  $text_specialty = $_POST['text_specialty'];
                  echo "장점이나 특기는 ".$text_specialty.".";
                } else {
                  echo "";
                }
              } else {
                echo "";
              }

                 ?>
              </td>
            </tr>
            <tr>
              <td style="font-size:12px; font-weight:bold;  vertical-align:top;" width="100px">● 관계 :</td>
              <td style="font-size:12px;">
                <?php
                if($_POST['radio_parents'] == null){
                  echo "특이사항 없음. ";
                }else{
                  $radio_parents = $_POST['radio_parents'];
                  if($radio_parents == "good"){
                    echo "부모와의 관계는 매우 친밀함. ";
                  } elseif ($radio_parents == 'nomal'){
                    echo "부모와의 관계는 양호함. ";
                  } elseif ($radio_parents == 'bad'){
                    echo "부모와 잦은 트러블이 있음. ";
                  } else {
                    echo "";
                  }
                }

                if($_POST['radio_friends'] == null){
                  echo "특이사항 없음. ";
                } else {
                  $radio_friends = $_POST['radio_friends'];
                  if($radio_friends == "good"){
                    echo "학급친구들과 매우 친밀함. ";
                  } elseif ($radio_friends == 'nomal') {
                    echo "학급친구들과 사이는 양호함. ";
                  } elseif ($radio_friends == "bad") {
                    if(!empty($_POST['text_friends'])){
                      $text_friends = $_POST['text_friends'];
                      echo $text_friends."이유로 학급친구들과 잦은 트러블이 있음.";
                    } else {
                    echo "학급친구들과 잦은 트러블이 있음. ";
                  }
                }else{
                  echo "";
                }
              }
                 ?>
              </td>
            </tr>
            <tr>
              <td style="font-size:12px; font-weight:bold;  vertical-align:top;" width="100px">● 기타 전달사항 :</td>
              <td style="font-size:12px;">
                <?php
                if(!empty($_POST['text_memory'])){
                  $text_memory = $_POST['text_memory'];
                  echo $text_memory;
                } else {
                  echo "특이사항 없음.";
                }

                 ?>
              </td>
            </tr>
          </table>
        </tr>
        <tr>
          <td height="10px">&nbsp</td>
        </tr>
        <tr class="Evaluation">
          <table  style="border:3px solid black; width:700px;">
            <tr>
              <td colspan="2" style="text-align:center; width:700px; height: 30px; font-size: 16px; font-weight: bold;">양안시기능평가 </td>
            </tr>
            <tr>
              <td colspan="2" style="text-align:center; width:700px; height: 30px; font-size: 16px; font-weight: bold;"></td>
            </tr>
            <tr>
              <td colspan="2" style="font-size:12px;">
                 <?php
                 // 우위안
                  if (empty($MainEye)){
                    echo "● 우위안은 관찰이 필요합니다.<br>\n";
                  } else {
                   if ($MainEye === "right") {
                     echo "● 우위안은 오른쪽 눈입니다.<br>\n";
                   } elseif ($MainEye === "left") {
                     echo "● 우위안은 왼쪽 눈입니다.<br>\n";
                   }
                 }


                 // 원거리 나안/교정시력

                 if ((empty($RDVision)) || (empty($LDVision)) || (empty($OUDVision))){

                 } else {
                   if ($RDVision < 0.7 || $LDVision < 0.7 || $OUDVision < 0.7) {
                     echo "● ".$sel_vision1."의 원거리 시력이 "."우안: ".$RDVision.", "."좌안: ".$LDVision.", "."양안: ".$OUDVision."(으)로 ".'<span style="font-weight: bold; color: red;">'."저조하게".'</span>'."평가 되었습니다.<br>\n";
                   } elseif ($RDVision >= 1.0 && $LDVision >= 1.0 && $OUDVision >= 1.0){
                     echo "● ".$sel_vision1."의 원거리 시력이 "."우안: ".$RDVision.", "."좌안: ".$LDVision.", "."양안: ".$OUDVision."(으)로 양호하게 평가 되었습니다.<br>\n";
                   } elseif (($RDVision >=0.7 && $RDVision <1.0) || ($LDVision >=0.7 && $LDVision <1.0) ||($OUDVision >=0.7 && $OUDVision <1.0)) {
                     echo "● ".$sel_vision1."의 원거리 시력이 "."우안: ".$RDVision.", "."좌안: ".$LDVision.", "."양안: ".$OUDVision."(으)로 ".'<span style="font-weight: bold; color: blue;">'."정기적인 관찰".'</span>'."이 요구됩니다.<br>\n";
                   }
                 }



                 // 근거리 나안/교정시력
                 if ((empty($RNVision)) || (empty($LNVision)) || (empty($OUNVision))){

                 } else {
                   if ($RNVision < 0.7 || $LNVision < 0.7 || $OUNVision < 0.7) {
                     echo "● ".$sel_vision1."의 근거리 시력이 "."우안: ".$RNVision.", "."좌안: ".$LNVision.", "."양안: ".$OUNVision."(으)로 ".'<span style="font-weight: bold; color: red;">'."저조하게".'</span>'."평가 되었습니다.<br>\n";
                   } elseif ($RNVision >= 1.0 && $LNVision >= 1.0 && $OUNVision >= 1.0){
                     echo "● ".$sel_vision1."의 근거리 시력이 "."우안: ".$RNVision.", "."좌안: ".$LNVision.", "."양안: ".$OUNVision."(으)로 양호하게 평가 되었습니다.<br>\n";
                   } else {
                     echo "● ".$sel_vision1."의 근거리 시력이 "."우안: ".$RNVision.", "."좌안: ".$LNVision.", "."양안: ".$OUNVision."(으)로 ".'<span style="font-weight: bold; color: blue;">'."정기적인 관찰".'</span>'."이 요구됩니다.<br>\n";
                   }
                 }


                 // 원거리교정시력_새로운굴절력
                 if ((empty($RDVision_new)) || (empty($LDVision_new)) || (empty($OUDVision_new))){

                 } else {
                     if ($RDVision_new < 0.7 || $LDVision_new < 0.7 || $OUDVision_new < 0.7) {
                       echo "● 새로운 굴절력으로 교정하여도 원거리 교정시력이 "."우안: ".$RDVision_new.", "."좌안: ".$LDVision_new.", "."양안: ".$OUDVision_new."(으)로 ".'<span style="font-weight: bold; color: red;">'."저조하여".'</span>'."꾸준한 관찰이 요구됩니다.<br>\n";
                     } elseif ($RDVision_new >= 1.0 && $LDVision_new >= 1.0 && $OUDVision_new >= 1.0){
                       echo "● 새로운 굴절력으로 교정하면 원거리 교정시력이 "."우안: ".$RDVision_new.", "."좌안: ".$LDVision_new.", "."양안: ".$OUDVision_new."(으)로 양호하게 교정됩니다.<br>\n";
                     } else {
                       echo "● 새로운 굴절력으로 교정하면 원거리 교정시력이 "."우안: ".$RDVision_new.", "."좌안: ".$LDVision_new.", "."양안: ".$OUDVision_new."(으)로 ".'<span style="font-weight: bold; color: blue;">'."정기적인 관찰".'</span>'."이 요구됩니다.<br>\n";
                     }
                   }



                 // 근거리교정시력_새로운굴절력
                 if ((empty($RNVision_new)) || (empty($LNVision_new)) || (empty($OUNVision_new))){

                 } else {
                     if ($RNVision_new < 0.7 || $LNVision_new < 0.7 || $OUNVision_new < 0.7) {
                       echo "● 새로운 굴절력으로 교정하여도 근거리 교정시력이 "."우안: ".$RNVision_new.", "."좌안: ".$LNVision_new.", "."양안: ".$OUNVision_new."(으)로 ".'<span style="font-weight: bold; color: red;">'."저조하여".'</span>'."꾸준한 관찰이 요구됩니다.<br>\n";
                     } elseif ($RNVision_new >= 1.0 && $LNVision_new >= 1.0 && $OUNVision_new >= 1.0){
                       echo "● 새로운 굴절력으로 교정하면 근거리 교정시력이 "."우안: ".$RNVision_new.", "."좌안: ".$LNVision_new.", "."양안: ".$OUNVision_new."(으)로 양호하게 교정됩니다.<br>\n";
                     } else {
                       echo "● 새로운 굴절력으로 교정하면 근거리 교정시력이 "."우안: ".$RNVision_new.", "."좌안: ".$LNVision_new.", "."양안: ".$OUNVision_new."(으)로 ".'<span style="font-weight: bold; color: blue;">'."정기적인 관찰".'</span>'."이 요구됩니다.<br>\n";
                     }
                   }



                 //균형검사
                 if ($Balance === "chois") {

                 } elseif ($Balance == "균형") {
                     echo "● 양안균형평가시 좌우 시력이 비슷해 양호합니다.<br>\n";
                   } elseif ($Balance == "불균형") {
                    echo "● 양안균형평가시 좌우 시력에 차이가 있어 ".'<span style="font-weight: bold; color: red;">'."불량".'</span>'."합니다.<br>\n";
                   }


                 // W4D
                  if ($W4D == "none"){

                  } elseif ($W4D == "4") {
                       echo "● 융합상태검사(W4D)시 불빛 4개로 정상융합을 하고 있습니다.<br>\n";
                   } elseif ($W4D == "3"){
                    echo "● 융합상태검사(W4D)시 불빛이".'<span style="font-weight: bold; color: red;">'." 녹색 3개(우안억제)".'</span>'."로 ".'<span style="font-weight: bold; color: red;">'."불량".'</span>'."하게 평가되었습니다.<br>\n";
                   } elseif ($W4D == "2") {
                     echo "● 융합상태검사(W4D)시 불빛이".'<span style="font-weight: bold; color: red;">'." 적색 2개(우안억제)".'</span>'."로 ".'<span style="font-weight: bold; color: red;">'."불량".'</span>'."하게 평가되었습니다.<br>\n";
                   } elseif ($W4D == "51") {
                     echo "● 융합상태검사(W4D)시 불빛이".'<span style="font-weight: bold; color: red;">'." 5개(교차성 외편위)".'</span>'."로 ".'<span style="font-weight: bold; color: red;">'."불량".'</span>'."하게 평가되었습니다.<br>\n";
                   } elseif ($W4D == "52") {
                     echo "● 융합상태검사(W4D)시 불빛이".'<span style="font-weight: bold; color: red;">'." 5개(동측성 내편위)".'</span>'."로 ".'<span style="font-weight: bold; color: red;">'."불량".'</span>'."하게 평가되었습니다.<br>\n";
                   }




                 // 차폐평가-원거리
                 if (($CTest_D === "none")) {

                 } elseif ($CTest_D == 'good'){
                    echo "● 원거리 차폐평가(안구정렬상태검사)시 정위로 양호하게 평가되었습니다.<br>\n";
                   } elseif ($CTest_D == 'exo'){
                    echo "● 원거리 차폐평가(안구정렬상태검사)시".'<span style="font-weight: bold; color: red;">'." 잠복성 외편위".'</span>'."로 ".'<span style="font-weight: bold; color: red;">'."불량".'</span>'."하게 평가되었습니다.<br>\n";
                   } elseif ($CTest_D == 'eso') {
                    echo "● 원거리 차폐평가(안구정렬상태검사)시".'<span style="font-weight: bold; color: red;">'." 잠복성 내편위".'</span>'."로 ".'<span style="font-weight: bold; color: red;">'."불량".'</span>'."하게 평가되었습니다.<br>\n";
                   } elseif ($CTest_D == 'XT') {
                    echo "● 원거리 차폐평가(안구정렬상태검사)시".'<span style="font-weight: bold; color: red;">'." 현성 외편위".'</span>'."로 ".'<span style="font-weight: bold; color: red;">'."불량".'</span>'."하게 평가되었습니다.<br>\n";
                   } elseif ($CTest_D == 'ET') {
                    echo "● 원거리 차폐평가(안구정렬상태검사)시".'<span style="font-weight: bold; color: red;">'." 현성 내편위".'</span>'."로 ".'<span style="font-weight: bold; color: red;">'."불량".'</span>'."하게 평가되었습니다.<br>\n";
                   }



                 // 차폐평가-근거리
                 if (($CTest_D === "none")) {

                 } elseif ($CTest_N == 'good'){
                    echo "● 근거리 차폐평가(안구정렬상태검사)시 정위로 양호하게 평가되었습니다.<br>\n";
                   } elseif ($CTest_N == 'exo'){
                    echo "● 근거리 차폐평가(안구정렬상태검사)시".'<span style="font-weight: bold; color: red;">'." 잠복성 외편위".'</span>'."로 ".'<span style="font-weight: bold; color: red;">'."불량".'</span>'."하게 평가되었습니다.<br>\n";
                   } elseif ($CTest_N == 'eso') {
                    echo "● 근거리 차폐평가(안구정렬상태검사)시".'<span style="font-weight: bold; color: red;">'." 잠복성 내편위".'</span>'."로 ".'<span style="font-weight: bold; color: red;">'."불량".'</span>'."하게 평가되었습니다.<br>\n";
                   } elseif ($CTest_N == 'XT') {
                    echo "● 근거리 차폐평가(안구정렬상태검사)시".'<span style="font-weight: bold; color: red;">'." 현성 외편위".'</span>'."로 ".'<span style="font-weight: bold; color: red;">'."불량".'</span>'."하게 평가되었습니다.<br>\n";
                   } elseif ($CTest_N == 'ET') {
                    echo "● 근거리 차폐평가(안구정렬상태검사)시".'<span style="font-weight: bold; color: red;">'." 현성 내편위".'</span>'."로 ".'<span style="font-weight: bold; color: red;">'."불량".'</span>'."하게 평가되었습니다.<br>\n";
                   }




                 // 조절근점
                 $Accomage = round(15-(0.25*$ChAge_y));
                 if ((empty($R_accom)) || (empty($L_accom)) || (empty($O_accom)) ){

                 } else {

                   if (($R_accom < $Accomage) || ($L_accom < $Accomage) || ($O_accom < $Accomage) ) {
                     echo "● 가까운 거리의 사물을 선명하게 만들수 있는 조절력이 오른쪽 ".$R_accom."D, 왼쪽 ".$L_accom."D, 양안 ".$O_accom."D로 ".$ChAge_y."세의 최소조절력 ".$Accomage."D 보다 ".'<span style="font-weight: bold; color: red;">'."불량".'</span>'."하게 평가되었습니다.<br>\n";
                   } else {
                     echo "● 가까운 거리의 사물을 선명하게 만들수 있는 조절력이 오른쪽 ".$R_accom."D, 왼쪽 ".$L_accom."D, 양안 ".$O_accom."D로 ".$ChAge_y."세의 최소조절력 ".$Accomage."D 이상으로 양호하게 평가되었습니다.<br>\n";

                     }
                 }




                 // 조절용이
                 if ((empty($RAccom_Rev)) || (empty($LAccom_Rev)) || (empty($OUAccom_Rev))) {

                 } else {
                 if ($ChAge_y <= 6) {
                     if ($RAccom_Rev > 3 && $LAccom_Rev > 3 && $OUAccom_Rev > 0.5) {
                      echo "● 가까운 거리와 멀리있는 사물을 빠르고 선명하게 만들수 있는 조절용이능력이 오른쪽 ".$RAccom_Rev."cpm, 왼쪽 ".$LAccom_Rev."cpm, 양안 ".$OUAccom_Rev."cpm 으로 ".$ChAge_y."세기준 정상범위로 평가되었습니다.<br>\n";
                     } else {
                         echo "● 가까운 거리와 멀리있는 사물을 빠르고 선명하게 만들수 있는 조절용이능력이 오른쪽 ".$RAccom_Rev."cpm, 왼쪽 ".$LAccom_Rev."cpm, 양안 ".$OUAccom_Rev."cpm 으로 ".$ChAge_y."세기준 정상범위보다".'<span style="font-weight: bold; color: red;">'."불량".'</span>'."하게 평가되었습니다. ";
                       if (isset($Sel_AccomRev)){
                         if ($Sel_AccomRev === "bad1"){
                           echo " 특히 ".'<span style="font-weight: bold; color: red;">'."(+)방향에서 지체".'</span>'."입니다.<br>\n";
                         } elseif ($Sel_AccomRev === "bad2"){
                          echo " 특히 ".'<span style="font-weight: bold; color: red;">'."(-)방향에서 지체".'</span>'."입니다.<br>\n";
                        } elseif ($Sel_AccomRev === "bad3"){
                          echo " 특히 ".'<span style="font-weight: bold; color: red;">'."(+,-)방향 모두에서 지체".'</span>'."입니다.<br>\n";
                         }
                       }
                     }
                   } elseif ($ChAge_y >6 && $ChAge_y < 7) {
                     if ($RAccom_Rev > 4.5 && $LAccom_Rev > 4.5 && $OUAccom_Rev >= 1) {
                       echo "● 가까운 거리와 멀리있는 사물을 빠르고 선명하게 만들수 있는 조절용이능력이 오른쪽 ".$RAccom_Rev."cpm, 왼쪽 ".$LAccom_Rev."cpm, 양안 ".$OUAccom_Rev."cpm 으로 ".$ChAge_y."세기준 정상범위로 평가되었습니다.<br>\n";
                      } else {
                        echo "● 가까운 거리와 멀리있는 사물을 빠르고 선명하게 만들수 있는 조절용이능력이 오른쪽 ".$RAccom_Rev."cpm, 왼쪽 ".$LAccom_Rev."cpm, 양안 ".$OUAccom_Rev."cpm 으로 ".$ChAge_y."세기준 정상범위보다".'<span style="font-weight: bold; color: red;">'."불량".'</span>'."하게 평가되었습니다. ";
                        if (isset($Sel_AccomRev)){
                          if ($Sel_AccomRev === "bad1"){
                            echo " 특히 ".'<span style="font-weight: bold; color: red;">'."(+)방향에서 지체".'</span>'."입니다.<br>\n";
                          } elseif ($Sel_AccomRev === "bad2"){
                           echo " 특히 ".'<span style="font-weight: bold; color: red;">'."(-)방향에서 지체".'</span>'."입니다.<br>\n";
                         } elseif ($Sel_AccomRev === "bad3"){
                           echo " 특히 ".'<span style="font-weight: bold; color: red;">'."(+,-)방향 모두에서 지체".'</span>'."입니다.<br>\n";
                          }
                        }
                      }
                    } elseif ($ChAge_y >= 7 && $ChAge_y < 13) {
                     if ($RAccom_Rev > 4.5 && $LAccom_Rev > 4.5 && $OUAccom_Rev >= 2.5) {
                       echo "● 가까운 거리와 멀리있는 사물을 빠르고 선명하게 만들수 있는 조절용이능력이 오른쪽 ".$RAccom_Rev."cpm, 왼쪽 ".$LAccom_Rev."cpm, 양안 ".$OUAccom_Rev."cpm 으로 ".$ChAge_y."세기준 정상범위로 평가되었습니다.<br>\n";
                      } else {
                        echo "● 가까운 거리와 멀리있는 사물을 빠르고 선명하게 만들수 있는 조절용이능력이 오른쪽 ".$RAccom_Rev."cpm, 왼쪽 ".$LAccom_Rev."cpm, 양안 ".$OUAccom_Rev."cpm 으로 ".$ChAge_y."세기준 정상범위보다".'<span style="font-weight: bold; color: red;">'."불량".'</span>'."하게 평가되었습니다. ";
                        if (isset($Sel_AccomRev)){
                          if ($Sel_AccomRev === "bad1"){
                            echo " 특히 ".'<span style="font-weight: bold; color: red;">'."(+)방향에서 지체".'</span>'."입니다.<br>\n";
                          } elseif ($Sel_AccomRev === "bad2"){
                           echo " 특히 ".'<span style="font-weight: bold; color: red;">'."(-)방향에서 지체".'</span>'."입니다.<br>\n";
                         } elseif ($Sel_AccomRev === "bad3"){
                           echo " 특히 ".'<span style="font-weight: bold; color: red;">'."(+,-)방향 모두에서 지체".'</span>'."입니다.<br>\n";
                          }
                        }
                      }
                    } elseif ($ChAge_y >= 13 && $ChAge_y <=38) {
                     if ($RAccom_Rev > 6 && $LAccom_Rev > 6 && $OUAccom_Rev >= 2.5) {
                       echo "● 가까운 거리와 멀리있는 사물을 빠르고 선명하게 만들수 있는 조절용이능력이 오른쪽 ".$RAccom_Rev."cpm, 왼쪽 ".$LAccom_Rev."cpm, 양안 ".$OUAccom_Rev."cpm 으로 ".$ChAge_y."세기준 정상범위로 평가되었습니다.<br>\n";
                      } else {
                        echo "● 가까운 거리와 멀리있는 사물을 빠르고 선명하게 만들수 있는 조절용이능력이 오른쪽 ".$RAccom_Rev."cpm, 왼쪽 ".$LAccom_Rev."cpm, 양안 ".$OUAccom_Rev."cpm 으로 ".$ChAge_y."세기준 정상범위보다".'<span style="font-weight: bold; color: red;">'."불량".'</span>'."하게 평가되었습니다. ";
                        if (isset($Sel_AccomRev)){
                          if ($Sel_AccomRev === "bad1"){
                            echo " 특히 ".'<span style="font-weight: bold; color: red;">'."(+)방향에서 지체".'</span>'."입니다.<br>\n";
                          } elseif ($Sel_AccomRev === "bad2"){
                           echo " 특히 ".'<span style="font-weight: bold; color: red;">'."(-)방향에서 지체".'</span>'."입니다.<br>\n";
                         } elseif ($Sel_AccomRev === "bad3"){
                           echo " 특히 ".'<span style="font-weight: bold; color: red;">'."(+,-)방향 모두에서 지체".'</span>'."입니다.<br>\n";
                          }
                        }
                      }
                    } elseif ($ChAge_y > 38) {
                      echo "● 38세 이상은 가까운 거리와 멀리있는 사물을 빠르고 선명하게 만들수 있는 조절용이능력의 평가값이 저조하게 나올수 밖에 없어 평가가 무의미합니다.<br>\n";
                    }
                   }

                   // 눈모임근점
                   if (empty($NVer)){

                   }else {
                     if ($NVer < 6) {
                      echo "● 융합을 유지한 상태에서 눈을 안으로 모을 수 있는 눈모임능력이 ".$NVer."cm로 양호합니다.<br>\n";
                     } else {
                       echo "● 융합을 유지한 상태에서 눈을 안으로 모을 수 있는 눈모임능력이 ".'<span style="font-weight: bold; color: red;">'.$NVer."cm로 불량".'</span>'."합니다.<br>\n";
                     }
                   }



                   // 따라보기
                   if ($BroadH === "none"){

                   } else {
                     if ($BroadH == 'good') {
                     echo "● 외안근과 지배신경에 대한 완전성평가인 외안근평가(Broad H)시 안구운동이 부드럽고 완전해 양호합니다.<br>\n";
                     } else if ($BroadH == 'jurky') {
                     echo "● 외안근과 지배신경에 대한 완전성평가인 외안근평가(Broad H)시 안구운동이 ".'<span style="font-weight: bold; color: red;">'."격동움직임으로 불량".'</span>'."합니다.<br>\n";
                     } else if ($BroadH == 'overshoot') {
                     echo "● 외안근과 지배신경에 대한 완전성평가인 외안근평가(Broad H)시 안구운동이 ".'<span style="font-weight: bold; color: red;">'."과다하게 움직여 주시가 불안정".'</span>'."합니다.<br>\n";
                     } else if ($BroadH == 'undershoot') {
                     echo "● 외안근과 지배신경에 대한 완전성평가인 외안근평가(Broad H)시 안구운동이 ".'<span style="font-weight: bold; color: red;">'."저조하게 움직여 주시가 불안정".'</span>'."합니다.<br>\n";
                     } else if ($BroadH == 'jur_over') {
                     echo "● 외안근과 지배신경에 대한 완전성평가인 외안근평가(Broad H)시 안구운동이 ".'<span style="font-weight: bold; color: red;">'." 격동움직임과 과다한 움직임으로 주시가 불안정".'</span>'."합니다.<br>\n";
                     } else if ($BroadH == 'jur_under') {
                         echo "● 외안근과 지배신경에 대한 완전성평가인 외안근평가(Broad H)시 안구운동이 ".'<span style="font-weight: bold; color: red;">'." 격동움직임과 저조한 움직임으로 주시가 불안정".'</span>'."합니다.<br>\n";
                     }
                   }


                   // 홱보기
                   if ($sacadic === "none"){

                   } else {
                     if ($sacadic == 'good') {
                       echo "●  서로 떨어진 두 물체를 두눈이 동시에 빠르고 정확하게 볼수 있는 홱보기평가(Saccadic)시 안구운동이 빠르고 정확함.<br>\n";
                     } else if ($sacadic == 'jurky') {
                       echo "● 서로 떨어진 두 물체를 두눈이 동시에 빠르고 정확하게 볼수 있는 홱보기평가(Saccadic)시 안구운동이 ".'<span style="font-weight: bold; color: red;">'."격동움직임으로 주시가 불안정".'</span>'."합니다.<br>\n";
                     } else if ($sacadic == 'overshoot') {
                       echo "● 서로 떨어진 두 물체를 두눈이 동시에 빠르고 정확하게 볼수 있는 홱보기평가(Saccadic)시 안구운동이 ".'<span style="font-weight: bold; color: red;">'."과다하게 움직여 주시가 불안정".'</span>'."합니다.<br>\n";
                     } else if ($sacadic == 'undershoot') {
                       echo "● 서로 떨어진 두 물체를 두눈이 동시에 빠르고 정확하게 볼수 있는 홱보기평가(Saccadic)시 안구운동이 ".'<span style="font-weight: bold; color: red;">'."저조하게 움직여 주시가 불안정".'</span>'."합니다.<br>\n";
                     } else if ($sacadic == 'jur_over') {
                       echo "● 서로 떨어진 두 물체를 두눈이 동시에 빠르고 정확하게 볼수 있는 홱보기평가(Saccadic)시 안구운동이 ".'<span style="font-weight: bold; color: red;">'."격동움직임과 과다한 움직임으로 주시가 불안정".'</span>'."합니다.<br>\n";
                     } else if ($sacadic == 'jur_under') {
                       echo "● 서로 떨어진 두 물체를 두눈이 동시에 빠르고 정확하게 볼수 있는 홱보기평가(Saccadic)시 안구운동이 ".'<span style="font-weight: bold; color: red;">'."격동움직임과 저조한 움직임으로 주시가 불안정".'</span>'."합니다.<br>\n";
                     } else if ($sacadic == 'headturn') {
                       echo "● 서로 떨어진 두 물체를 두눈이 동시에 빠르고 정확하게 볼수 있는 홱보기평가(Saccadic)시 ".'<span style="font-weight: bold; color: red;">'."고개를 돌려서 주시".'</span>'."합니다.<br>\n";
                     }
                   }

                   // 입체시-원거리
                   if ($DStereo === "none") {

                   } else {
                     if ($DStereo == 'good'){
                      echo "● 망막시차로 인한 상대적 깊이를 인식할 수 있는 원거리 입체시표중 4방향에서 순서대로 인식할 수 있어 양호합니다.<br>\n";
                     } else if ($DStereo == 'bad3') {
                       echo "● 망막시차로 인한 상대적 깊이를 인식할 수 있는 원거리 입체시표중 ".'<span style="font-weight: bold; color: blue;">'."3방향에서 순서대로 인식할 수 있으나 관찰이 필요".'</span>'."합니다.<br>\n";
                     } else if ($DStereo == 'bad2') {
                       echo "● 망막시차로 인한 상대적 깊이를 인식할 수 있는 원거리 입체시표중 ".'<span style="font-weight: bold; color: blue;">'."상하방향에서만 인식할 수 있어 관찰이 필요".'</span>'."합니다.<br>\n";
                     }  else if ($DStereo == 'bad1') {
                       echo "● 망막시차로 인한 상대적 깊이를 인식할 수 있는 원거리 입체시표의 ".'<span style="font-weight: bold; color: red;">'."상하방향중 한쪽만 인식할 수 있어 불량".'</span>'."합니다.<br>\n";
                     } else if ($DStereo == 'bad') {
                       echo "● 망막시차로 인한 상대적 깊이를 인식할 수 있는 원거리 입체시표를 ".'<span style="font-weight: bold; color: red;">'."인식할 수 없어 불량".'</span>'."합니다.<br>\n";
                     }
                   }


                   // 입체시-근거리
                   if ($NStereo === "none") {

                   } else {
                     if ($NStereo == "good1") {
                       echo "● 근거리 입체시가 20sec로 양호합니다.<br>\n";
                     } else if ($NStereo == 'good2') {
                       echo "● 근거리 입체시가 25sec로 양호합니다.<br>\n";
                     } else if ($NStereo == 'good3') {
                       echo "● 근거리 입체시가 30sec로 양호합니다.<br>\n";
                     } else if ($NStereo == 'good4') {
                       echo "● 근거리 입체시가 40sec로 양호합니다.<br>\n";
                     } else if ($NStereo == 'bad0') {
                       echo "● 근거리 입체시가 ".'<span style="font-weight: bold; color: red;">'."50sec로 불량".'</span>'."합니다.<br>\n";
                     } else if ($NStereo == 'bad1') {
                       echo "● 근거리 입체시가 ".'<span style="font-weight: bold; color: red;">'."60sec로 불량".'</span>'."합니다.<br>\n";
                     } else if ($NStereo == 'bad2') {
                       echo "● 근거리 입체시가 ".'<span style="font-weight: bold; color: red;">'."70sec로 불량".'</span>'."합니다.<br>\n";
                     } else if ($NStereo == 'bad3') {
                       echo "● 근거리 입체시가 ".'<span style="font-weight: bold; color: red;">'."80sec로 불량".'</span>'."합니다.<br>\n";
                     } else if ($NStereo == 'bad4') {
                       echo "● 근거리 입체시가 ".'<span style="font-weight: bold; color: red;">'."100sec로 불량".'</span>'."합니다.<br>\n";
                     } else if ($NStereo == 'bad5') {
                       echo "● 근거리 입체시가 ".'<span style="font-weight: bold; color: red;">'."140sec로 불량".'</span>'."합니다.<br>\n";
                     } else if ($NStereo == 'bad6') {
                       echo "● 근거리 입체시가 ".'<span style="font-weight: bold; color: red;">'."200sec로 불량".'</span>'."합니다.<br>\n";
                     } else if ($NStereo == 'bad7') {
                       echo "● 근거리 입체시가 ".'<span style="font-weight: bold; color: red;">'."400sec로 불량".'</span>'."합니다.<br>\n";
                     } else if ($NStereo == 'bad8') {
                       echo "● 근거리 입체시가 ".'<span style="font-weight: bold; color: red;">'."800sec로 불량".'</span>'."합니다.<br>\n";
                     } else if ($NStereo == 'bad9') {
                       echo "● 근거리 입체시가 ".'<span style="font-weight: bold; color: red;">'."3000sec로 불량".'</span>'."합니다.<br>\n";
                     } else if ($NStereo == 'bad') {
                       echo "● 근거리 입체시표를 ".'<span style="font-weight: bold; color: red;">'."인지하지 못해 불량".'</span>'."합니다.<br>\n";
                     }
                   }


                   // 동공반응
                   if ($Pupilreflex === "none") {

                   } else {
                     if ($Pupilreflex == 'prompt') {
                      echo "● 펜라이트를 통해 동공의 반응을 검사하는 동공반응검사에서 정상반응으로 양호합니다.<br>\n";
                     } else if ($Pupilreflex == 'fixed') {
                      echo "● 펜라이트를 통해 동공의 반응을 검사하는 동공반응검사에서 ".'<span style="font-weight: bold; color: red;">'."빛에 반응이 없어 뇌부종이나 경천막 뇌탈출징후, 동안신경이상".'</span>'."이 예상됩니다.<br>\n";
                     } else if ($Pupilreflex == 'sluggish') {
                      echo "● 펜라이트를 통해 동공의 반응을 검사하는 동공반응검사에서 ".'<span style="font-weight: bold; color: red;">'."빛에 반응한 동공이 서서히 수축되어 백내장초기나 약물부작용".'</span>'."이 예상됩니다.<br>\n";
                     } else if ($Pupilreflex == 'AlphaOmega') {
                      echo "● 펜라이트를 통해 동공의 반응을 검사하는 동공반응검사에서 ".'<span style="font-weight: bold; color: red;">'." 빛에 반응한 동공이 커졌다 작아졌다하여 동안신경이상, 심한 뇌허혈".'</span>'."이 예상됩니다.<br>\n";
                     }
                   }



                   // 수평안위-원거리
                   if (empty( $Dectopic) || ($D_BIBO === "Chois")) {

                   } else {

                     if ($D_BIBO == 'BI') {
                       if ($Dectopic > 3 && $Dectopic <=10 ) {
                         echo "● ".$horEVA_tool."(으)로 평가한 원거리 수평안위가 정상범위보다 많은 ".'<span style="font-weight: bold; color: red;">'."약도 외편위로 불량".'</span>'."합니다.<br>\n";
                       } else if ($Dectopic >10 && $Dectopic<=30){
                        echo "● ".$horEVA_tool."(으)로 평가한 원거리 수평안위가 정상범위보다 많은 ".'<span style="font-weight: bold; color: red;">'."중등도 외편위로 불량".'</span>'."합니다.<br>\n";
                       }  else if ($Dectopic > 30){
                        echo "● ".$horEVA_tool."(으)로 평가한 원거리 수평안위가 정상범위보다 많은 ".'<span style="font-weight: bold; color: red;">'."고도 외편위로 불량".'</span>'."합니다.<br>\n";
                       } else {
                        echo "● ".$horEVA_tool."(으)로 평가한 원거리 수평안위가 정상범위로 양호합니다.<br>\n";
                       }
                     } elseif ($D_BIBO == 'BO'){
                       if ($Dectopic > 1 && $Dectopic <=10 ) {
                        echo "● ".$horEVA_tool."(으)로 평가한 원거리 수평안위가 정상범위보다 많은 ".'<span style="font-weight: bold; color: red;">'."약도 내편위로 불량".'</span>'."합니다.<br>\n";
                       } else if ($Dectopic > 10 && $Dectopic <=30 ){
                         echo "● ".$horEVA_tool."(으)로 평가한 원거리 수평안위가 정상범위보다 많은 ".'<span style="font-weight: bold; color: red;">'."중등도 내편위로 불량".'</span>'."합니다.<br>\n";
                       } else if ($Dectopic > 30 ){
                         echo "● ".$horEVA_tool."(으)로 평가한 원거리 수평안위가 정상범위보다 많은 ".'<span style="font-weight: bold; color: red;">'."고도 내편위로 불량".'</span>'."합니다.<br>\n";
                       } else {
                         echo "● ".$horEVA_tool."(으)로 평가한 원거리 수평안위가 정상범위로 양호합니다.<br>\n";
                       }
                     }
                   }


                   // 수평안위-근거리
                    if (empty( $Nectopic) || ($N_BIBO === "Chois")) {

                   } else {

                     if ($N_BIBO == 'BI') {
                       if ($Nectopic > 6 && $Nectopic <=10 ) {
                         echo "● ".$horEVA_tool."(으)로 평가한 근거리 수평안위가 정상범위보다 많은 ".'<span style="font-weight: bold; color: red;">'."약도 외편위로 불량".'</span>'."합니다.<br>\n";
                       } else if ($Nectopic >10 && $Nectopic<=30){
                        echo "● ".$horEVA_tool."(으)로 평가한 근거리 수평안위가 정상범위보다 많은 ".'<span style="font-weight: bold; color: red;">'."중등도 외편위로 불량".'</span>'."합니다.<br>\n";
                       }  else if ($Nectopic > 30){
                        echo "● ".$horEVA_tool."(으)로 평가한 근거리 수평안위가 정상범위보다 많은 ".'<span style="font-weight: bold; color: red;">'."고도 외편위로 불량".'</span>'."합니다.<br>\n";
                       } else {
                        echo "● ".$horEVA_tool."(으)로 평가한 근거리 수평안위가 정상범위로 양호합니다.<br>\n";
                       }
                     } elseif ($N_BIBO == 'BO'){
                       if ($Nectopic > 0 && $Nectopic <=10 ) {
                        echo "● ".$horEVA_tool."(으)로 평가한 근거리 수평안위가 정상범위보다 많은 ".'<span style="font-weight: bold; color: red;">'."약도 내편위로 불량".'</span>'."합니다.<br>\n";
                       } else if ($Nectopic > 10 && $Dectopic <=30 ){
                         echo "● ".$horEVA_tool."(으)로 평가한 근거리 수평안위가 정상범위보다 많은 ".'<span style="font-weight: bold; color: red;">'."중등도 내편위로 불량".'</span>'."합니다.<br>\n";
                       } else if ($Nectopic > 30 ){
                         echo "● ".$horEVA_tool."(으)로 평가한 근거리 수평안위가 정상범위보다 많은 ".'<span style="font-weight: bold; color: red;">'."고도 내편위로 불량".'</span>'."합니다.<br>\n";
                       } else {
                         echo "● ".$horEVA_tool."(으)로 평가한 근거리 수평안위가 정상범위로 양호합니다.<br>\n";
                       }
                     }
                   }

                   // 수직안위-원거리,근거리
                   if ((empty($DVertical)) || (empty($NVertical)) ){

                   } else {
                     if ($DVertical > 0 ) {
                       if ($NVertical > 0) {
                          echo "● ".$verEVA_tool."(으)로 평가한 원거리와 근거리 수직안위에 ".'<span style="font-weight: bold; color: red;">'."편위가 있어 불량".'</span>'."합니다.<br>\n";
                       } else {
                         echo "● ".$verEVA_tool."(으)로 평가한 원거리 수직안위에 ".'<span style="font-weight: bold; color: red;">'."편위가 있어 불량".'</span>'."합니다.<br>\n";
                       }
                     } else {
                       if ($NVertical >0) {
                          echo "● ".$verEVA_tool."(으)로 평가한 근거리 수직안위에 ".'<span style="font-weight: bold; color: red;">'."편위가 있어 불량".'</span>'."합니다.<br>\n";
                       } else {
                         echo "● ".$verEVA_tool."(으)로 평가한 원거리와 근거리의 수직안위가 양호합니다.<br>\n";
                       }
                     }
                   }


                   // 양성융합력-원거리
                   if ((empty($DConver2)) || (empty($DConver3)) ){

                   } else {
                     if (empty($DConver1)){
                       $DConver1 = "×";
                     }

                       if ($DConver2 <= 11) {
                         echo "● ".$DVer_tool."(으)로 평가한 원거리 수평양성융합력이 ".$DConver1." / ".$DConver2." / ".$DConver3." 로 ".'<span style="font-weight: bold; color: red;">'."정상범위보다 불량".'</span>'."합니다.<br>\n";
                       } else {
                         if ($Dectopic*2 > $DConver2) {
                           echo "● ".$DVer_tool."(으)로 평가한 원거리 수평양성융합력이 ".$DConver1." / ".$DConver2." / ".$DConver3." 로 ".'<span style="font-weight: bold; color: red;">'."편위량의 2배보다 적어서 불량".'</span>'."합니다.<br>\n";
                         } else {
                           echo "● ".$DVer_tool."(으)로 평가한 원거리 수평양성융합력이 ".$DConver1." / ".$DConver2." / ".$DConver3." 로 정상범위로 평가됩니다.<br>\n";
                         }
                       }
                     }


                   // 음성융합력-원거리
                   if ((empty($DDever2)) || (empty($DDever3)) ){

                   } else {
                       if ($DDever2 <= 4) {
                          echo "● ".$DVer_tool."(으)로 평가한 원거리 수평음성융합력이 ".$DDever2." / ".$DDever3." 로 ".'<span style="font-weight: bold; color: red;">'."정상범위보다 불량".'</span>'."합니다.<br>\n";
                       } else {
                         if ($Dectopic*2 > $DDever2) {
                          echo "● ".$DVer_tool."(으)로 평가한 원거리 수평음성융합력이 ".$DDever2." / ".$DDever3." 로 ".'<span style="font-weight: bold; color: red;">'."편위량의 2배보다 적어서 불량".'</span>'."합니다.<br>\n";
                         }else {
                           echo "● ".$DVer_tool."(으)로 평가한 원거리 수평음성융합력이 ".$DDever2." / ".$DDever3." 로 정상범위로 평가됩니다.<br>\n";
                         }
                       }
                     }


                     // 양성융합력-근거리
                     if ((empty($NConver2)) || (empty($NConver3)) ){

                     } else {
                       if (empty($NConver1)){
                         $NConver1 = "×";
                       }

                         if ($NConver2 < 15) {
                           echo "● ".$NVer_tool."(으)로 평가한 근거리 수평양성융합력이 ".$NConver1." / ".$NConver2." / ".$NConver3." 로 ".'<span style="font-weight: bold; color: red;">'."정상범위보다 불량".'</span>'."합니다.<br>\n";
                         } else {
                           if ($Nectopic*2 > $NConver2) {
                             echo "● ".$NVer_tool."(으)로 평가한 근거리 수평양성융합력이 ".$NConver1." / ".$NConver2." / ".$NConver3." 로 ".'<span style="font-weight: bold; color: red;">'."편위량의 2배보다 적어서 불량".'</span>'."합니다.<br>\n";
                           } else {
                             echo "● ".$NVer_tool."(으)로 평가한 근거리 수평양성융합력이 ".$NConver1." / ".$NConver2." / ".$NConver3." 로 정상범위로 평가됩니다.<br>\n";
                           }
                         }
                       }


                       // 음성융합력-근거리
                       if ((empty($NDever2)) || (empty($NDever3)) ){

                       } else {
                         if (empty($NDever1)){
                           $NDever1 = "×";
                         }
                           if ($NDever2 < 17) {
                              echo "● ".$NVer_tool."(으)로 평가한 근거리 수평음성융합력이 ".$NDever1." / ".$NDever2." / ".$NDever3." 로 ".'<span style="font-weight: bold; color: red;">'."정상범위보다 불량".'</span>'."합니다.<br>\n";
                           } else {
                             if ($N_BIBO === "BO") {
                               if ($Nectopic*2 > $NDever2) {
                                 echo "● ".$NVer_tool."(으)로 평가한 근거리 수평음성융합력이 ".$NDever1." / ".$NDever2." / ".$NDever3." 로 ".'<span style="font-weight: bold; color: red;">'."편위량의 2배보다 적어서 불량".'</span>'."합니다.<br>\n";
                               }else {
                                 echo "● ".$NVer_tool."(으)로 평가한 근거리 수평음성융합력이 ".$NDever1." / ".$NDever2." / ".$NDever3." 로 정상범위로 평가됩니다.<br>\n";
                             }
                           }
                         }
                       }


                       //버전스용이
                       if (empty($VerRev)){

                       } else {
                       if ($VerRev >= 15) {
                         echo "● 두눈의 이향운동을 신속하고 정확하게 변환시키는 버전스용이평가에서 ".$VerRev."cpm으로 양호합니다.<br>\n";
                       } else {
                         echo "● 두눈의 이향운동을 신속하고 정확하게 변환시키는 버전스용이평가에서 ".'<span style="font-weight: bold; color: red;">'.$VerRev."cpm으로 불량".'</span>'."합니다.<br>\n";
                       }
                     }

                     // 원거리Maddox
                     if (!empty($_POST['D_agree'])){
                       $D_agree = $_POST['D_agree'];
                       if($D_agree == "agree") {
                         echo "● 두눈의 융합자극을 제거한 상태로 편위방향과 편위량을 평가하는 원거리 Maddox평가에서 두눈이 정렬되어 광원과 선조상이 일치되어 보입니다.<br>\n";
                       } elseif ($D_agree == "discord"){
                         if(!empty($_POST['DHor_maddox'])){
                           $DHor_maddox = $_POST['DHor_maddox'];
                           $DHor_BIBO = $_POST['DHor_BIBO'];
                           if($DHor_maddox <= 10) {
                             if($DHor_BIBO == "BI"){
                               $text_DH_maddox = "약도외편위";
                             } elseif($DHor_BIBO == "BO"){
                               $text_DH_maddox = "약도내편위";
                             }
                           } elseif ($DHor_maddox > 10 && $DHor_maddox <= 30){
                             if($DHor_BIBO == "BI"){
                               $text_DH_maddox = "중등도외편위";
                             } elseif($DHor_BIBO == "BO"){
                               $text_DH_maddox = "중등도내편위";
                             }
                           } elseif ($DHor_maddox > 30) {
                             if($DHor_BIBO == "BI"){
                               $text_DH_maddox = "고도외편위";
                             } elseif($DHor_BIBO == "BO"){
                               $text_DH_maddox = "고도내편위";
                             }
                           }
                         } else {
                           $text_DH_maddox = "";
                         }
                         if(!empty($_POST['DVer_maddox'])){
                           $DVer_maddox = $_POST['DVer_maddox'];
                           $text_DV_maddox = ", 수직편위";
                         } else {
                           $text_DV_maddox = "";
                         }
                         echo "● 두눈의 융합자극을 제거한 상태로 편위방향과 편위량을 평가하는 원거리 Maddox평가에서 ".'<span style="font-weight: bold; color: red;">'.$text_DH_maddox.$text_DV_maddox."로 불량".'</span>'."합니다.<br>\n";
                         }
                       } else {

                     }


                     // 근거리Maddox
                     if (!empty($_POST['N_agree'])){
                       $N_agree = $_POST['N_agree'];
                       if($N_agree == "agree") {
                         echo "● 두눈의 융합자극을 제거한 상태로 편위방향과 편위량을 평가하는 근거리 Maddox평가에서 두눈이 정렬되어 광원과 선조상이 일치되어 보입니다.<br>\n";
                       } elseif ($N_agree == "discord"){
                         if(!empty($_POST['NHor_maddox'])){
                           $NHor_maddox = $_POST['NHor_maddox'];
                           $NHor_BIBO = $_POST['NHor_BIBO'];
                           if($NHor_maddox <= 10) {
                             if($NHor_BIBO == "BI"){
                               $text_NH_maddox = "약도외편위";
                             } elseif($NHor_BIBO == "BO"){
                               $text_NH_maddox = "약도내편위";
                             }
                           } elseif ($NHor_maddox > 10 && $NHor_maddox <= 30){
                             if($NHor_BIBO == "BI"){
                               $text_NH_maddox = "중등도외편위";
                             } elseif($NHor_BIBO == "BO"){
                               $text_NH_maddox = "중등도내편위";
                             }
                           } elseif ($NHor_maddox > 30) {
                             if($NHor_BIBO == "BI"){
                               $text_NH_maddox = "고도외편위";
                             } elseif($NHor_BIBO == "BO"){
                               $text_NH_maddox = "고도내편위";
                             }
                           }
                         } else {
                           $text_NH_maddox = "";
                         }
                         if(!empty($_POST['NVer_maddox'])){
                           $NVer_maddox = $_POST['NVer_maddox'];
                           $text_NV_maddox = ", 수직편위";
                         } else {
                           $text_NV_maddox = "";
                         }
                         echo "● 두눈의 융합자극을 제거한 상태로 편위방향과 편위량을 평가하는 원거리 Maddox평가에서 ".'<span style="font-weight: bold; color: red;">'.$text_NH_maddox.$text_NV_maddox."로 불량".'</span>'."합니다.<br>\n";
                         }
                       } else {

                     }

                     // MIT
                     if(!empty($_POST['MIT'])){
                       $MIT = $_POST['MIT'];
                       if($MIT == "good"){
                         echo "● 황반부의 중심으로 주시할수 있는지를 자각적으로 관찰할 수 있는 황반부통합검사에서 중심주시로 양호합니다.<br>\n";
                       } elseif ($MIT == "bad"){
                         echo "● 황반부의 중심으로 주시할수 있는지를 자각적으로 관찰할 수 있는 황반부통합검사에서 ".'<span style="font-weight: bold; color: red;">'."중심외주시로 불량".'</span>'."합니다.<br>\n";
                       }
                     }

                 ?>
              </td>
            </tr>

          </table>
        </tr>
        <tr>
          <td height="10px">&nbsp</td>
        </tr>
        <tr class="TVPS4"  style="page-break-after: always;">
          <td >
            <table  name="TVPS4" style="border:3px solid black; width:700px; padding:10px;">
              <tr>
                <td colspan="6" style="text-align:center; width:700px; height: 30px; font-size: 16px; font-weight: bold;">시각인지기술(TVPS-4)</td>
                  <tr>
                    <td height="40px" width="200" rowspan="2"
                    style="border:2px solid black;
                    background-color : #b91a4d;
                    color: rgb(255,255,255);
                    font-size: 13px;
                    font-weight: bold;
                    text-align: center;">SUBTESTS</td>

                    <td colspan="5" height="40px"
                    style="border:2px solid black;
                    background-color : #b91a4d;
                    color: rgb(255,255,255);
                    font-size: 13px;
                    font-weight: bold;
                    text-align: center;">SUBTESTS SCORE</td>
                  </tr>
                  <tr>
                    <td width="100" style="height: 30px; border : 1px solid black; font-size : 10px; font-weight: bold; text-align: center; background-color: #dcdcdc;">Raw Score</td>
                    <td width="100" style="height: 30px; border : 1px solid black; font-size : 10px; font-weight: bold; text-align: center; background-color: #dcdcdc;">Scaled Score</td>
                    <td width="100" style="height: 30px; border : 1px solid black; font-size : 10px; font-weight: bold; text-align: center; background-color: #dcdcdc;">CI 90%-95%</td>
                    <td width="100" style="height: 30px; border : 1px solid black; font-size : 10px; font-weight: bold; text-align: center; background-color: #dcdcdc;">Percentile Rank</td>
                    <td  width="100" style="height: 30px; border : 1px solid black; font-size : 10px; font-weight: bold; text-align: center; background-color: #dcdcdc;">Age Epuivalent</td>
                  </tr>
                  <tr>
                    <td  name="Dis_Sub"
                    style="border:2px solid black;
                    background-color : rgb(254,174,174);
                    font-size: 10px;
                    font-weight: bold;
                    text-align: center;" >1.Visual Discrimination (DIS)</td>
                    <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                      <?php echo $RAW_SCORE_DIS; ?>
                    </td>
                    <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                      <?php
                        echo $scaled_DIS;
                      ?>
                    </td>
                    <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                      <?php echo "ci" ?>
                    </td>
                    <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                      <?php
                      if($percentile_DIS < 16){
                        echo '<span style="font-weight: bold; color: red;">'.$percentile_DIS."%".'</span>';
                      } elseif ($percentile_DIS >= 16 && $percentile_DIS < 85) {
                        echo '<span style="font-weight: bold; color: blue;">'.$percentile_DIS."%".'</span>';
                      } else {
                        echo $percentile_DIS."%";
                      }
                      ?>
                    </td>
                    <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center; width:200px;">
                      <?php
                        echo $qgeEqui_DIS;
                      ?>
                    </td>
                  </tr>
                  <tr>
                    <td name="Mem_Sub"
                    style="border:2px solid black;
                    background-color : rgb(254,174,174);
                    font-size: 10px;
                    font-weight: bold;
                    text-align: center;">2.Visual Memory (MEM)</td>
                    <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                      <?php echo $RAW_SCORE_MEM; ?>
                    </td>
                    <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                      <?php
                        echo $scaled_MEM;
                      ?>
                    </td>
                    <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                      <?php echo "ci" ?>
                    </td>
                    <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                      <?php
                      if($percentile_MEM < 16){
                        echo '<span style="font-weight: bold; color: red;">'.$percentile_MEM."%".'</span>';
                      } elseif ($percentile_MEM >= 16 && $percentile_MEM < 85) {
                        echo '<span style="font-weight: bold; color: blue;">'.$percentile_MEM."%".'</span>';
                      } else {
                        echo $percentile_MEM."%";
                      }
                      ?>
                    </td>
                    <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                      <?php
                          echo $qgeEqui_MEM;
                      ?>
                    </td>
                  </tr>
                  <tr>
                    <td name="Spa_Sub"
                    style="border:2px solid black;
                    background-color : rgb(254,174,174);
                    font-size: 10px;
                    font-weight: bold;
                    text-align: center;">3.Spatial Relationships (SPA)</td>
                    <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                      <?php echo $RAW_SCORE_SPA; ?>
                    </td>
                    <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                      <?php
                        echo $scaled_SPA;
                      ?>
                    </td>
                    <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                      <?php echo "ci" ?>
                    </td>
                    <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                      <?php
                      if($percentile_SPA < 16){
                        echo '<span style="font-weight: bold; color: red;">'.$percentile_SPA."%".'</span>';
                      } elseif ($percentile_SPA >= 16 && $percentile_SPA < 85) {
                        echo '<span style="font-weight: bold; color: blue;">'.$percentile_SPA."%".'</span>';
                      } else {
                        echo $percentile_SPA."%";
                      }
                      ?>

                    </td>
                    <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                      <?php
                        echo $qgeEqui_SPA;
                      ?>
                    </td>
                  </tr>
                  <tr>
                    <td name="Con_Sub"
                    style="border:2px solid black;
                    background-color : rgb(254,174,174);
                    font-size: 10px;
                    font-weight: bold;
                    text-align: center;">4.Form Constancy (CON)</td>
                    <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                      <?php echo $RAW_SCORE_CON; ?>
                    </td>
                    <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                      <?php
                        echo $scaled_CON;
                      ?>
                    </td>
                    <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                      <?php echo "ci" ?>
                    </td>
                    <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                      <?php
                      if($percentile_CON < 16){
                        echo '<span style="font-weight: bold; color: red;">'.$percentile_CON."%".'</span>';
                      } elseif ($percentile_CON >= 16 && $percentile_CON < 85) {
                        echo '<span style="font-weight: bold; color: blue;">'.$percentile_CON."%".'</span>';
                      } else {
                        echo $percentile_CON."%";
                      }
                      ?>

                    </td>
                    <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                      <?php
                        echo $qgeEqui_CON;
                      ?>
                    </td>
                  </tr>
                  <tr>
                    <td name="Seq_Sub" style="border:2px solid black;
                    background-color : rgb(254,174,174);
                    font-size: 10px;
                    font-weight: bold;
                    text-align: center;">5.Sequential Memory (SEQ)</td>
                    <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                      <?php echo $RAW_SCORE_SEQ; ?>
                    </td>
                    <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                      <?php
                          echo $scaled_SEQ;
                      ?>
                    </td>
                    <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                      <?php echo "ci" ?>
                    </td>
                    <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                      <?php
                      if($percentile_SEQ < 16){
                        echo '<span style="font-weight: bold; color: red;">'.$percentile_SEQ."%".'</span>';
                      } elseif ($percentile_SEQ >= 16 && $percentile_SEQ < 85) {
                        echo '<span style="font-weight: bold; color: blue;">'.$percentile_SEQ."%".'</span>';
                      } else {
                        echo $percentile_SEQ."%";
                      }
                      ?>

                    </td>
                    <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                      <?php
                        echo $qgeEqui_SEQ;
                      ?>
                    </td>
                  </tr>
                  <tr>
                    <td name="Fgr_Sub"
                    style="border:2px solid black;
                    background-color : rgb(254,174,174);
                    font-size: 10px;
                    font-weight: bold;
                    text-align: center;">6.Visual Figure-Ground (FGR)</td>
                    <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                      <?php echo $RAW_SCORE_FGR; ?>
                    </td>
                    <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                      <?php
                        echo $scaled_FGR;
                      ?>
                    </td>
                    <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;" >
                      <?php echo "ci" ?>
                    </td>
                    <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                      <?php
                      if($percentile_FGR < 16){
                        echo '<span style="font-weight: bold; color: red;">'.$percentile_FGR."%".'</span>';
                      } elseif ($percentile_FGR >= 16 && $percentile_FGR < 85) {
                        echo '<span style="font-weight: bold; color: blue;">'.$percentile_FGR."%".'</span>';
                      } else {
                        echo $percentile_FGR."%";
                      }
                      ?>

                    </td>
                    <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                      <?php
                        echo $qgeEqui_FGR;
                      ?>
                    </td>
                  </tr>
                  <tr>
                    <td name="Clo_Sub"
                    style="border:2px solid black;
                    background-color : rgb(254,174,174);
                    font-size: 10px;
                    font-weight: bold;
                    text-align: center;">7.Visual Closure (CLO)</td>
                    <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                      <?php echo $RAW_SCORE_CLO; ?>
                    </td>
                    <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                      <?php
                        echo $scaled_CLO;
                      ?>
                    </td>
                    <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                      <?php echo "ci" ?>
                    </td>
                    <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                      <?php
                      if($percentile_CLO < 16){
                        echo '<span style="font-weight: bold; color: red;">'.$percentile_CLO."%".'</span>';
                      } elseif ($percentile_CLO >= 16 && $percentile_CLO < 85) {
                        echo '<span style="font-weight: bold; color: blue;">'.$percentile_CLO."%".'</span>';
                      } else {
                        echo $percentile_CLO."%";
                      }
                      ?>

                    </td>
                    <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                      <?php
                          echo $qgeEqui_CLO;
                      ?>
                    </td>
                  </tr>
                  <tr>
                    <td height="10px">&nbsp;</td>
                  </tr>
                  <tr>
                    <td  style="text-align:right; font-size:15px; font-weight:bold;" colspan="2">Sum of Scaled Score </td>
                    <td  style="background-color: #ffe4e1; height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                      <?php
                        echo $sum_scaled;
                       ?>
                    </td>
                    <td colspan="3">&nbsp;</td>
                  </tr>
                  <tr>
                    <td style="text-align:right; font-size:15px; font-weight:bold; " colspan="2">Overall Standard Score</td>
                    <td style="background-color: #ffe4e1; height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                      <?php
                        echo $STANDARD_B2;
                      ?>
                    </td>
                    <td style="background-color: #ffe4e1; height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                        CI
                    </td>
                    <td style="background-color: #ffe4e1; height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                      <?php
                      if($PERCENTILE_B3 < 16){
                        echo '<span style="font-weight: bold; color: red;">'.$PERCENTILE_B3."%".'</span>';
                      } elseif ($PERCENTILE_B3 >= 16 && $PERCENTILE_B3 < 85) {
                        echo '<span style="font-weight: bold; color: blue;">'.$PERCENTILE_B3."%".'</span>';
                      } else {
                        echo $PERCENTILE_B3."%";
                      }
                      ?>

                    </td>
                    <td style="background-color: #ffe4e1; height: 25px; border : 1px solid black; font-size : 10px; text-align: center;" >
                      <?php
                        echo $TVPS4AGE__B5;
                      ?>
                    </td>
                  </tr>
                  <tr>
                    <td style="height:15px;">&nbsp;</td>
                  </tr>
                  <tr>
                    <td class="Box_Title" colspan="6" style="width:700px;">TVPS-4 분석결과</td>
                  </tr>
                  <tr>
                    <td style="height:10px;">&nbsp;</td>
                  </tr>
                  <tr>
                    <td  colspan="6" style="width:280px; text-align:right; border: none; font-size:10px;">분석나이기준 :
                      <?php echo $TVPS_ACAge_S." ~ ".$TVPS_ACAge_T ?>
                    </td>
                  </tr>
                  <tr>
                    <td style="height:15px;">&nbsp;</td>
                  </tr>
                  <tr>
                    <td style="height:15px; width:700px; font-size:12px;" colspan="6">시지각기술은 시각으로 본 것을 의미있게 해석하는 능력으로, 시각자극을 처리하여 우리가 살고 있는 세상을 이해할 수 있도록 하며, 운동기능이 개입되지 않은 시지각 능력을 평가함. </td>
                  </tr>
                  <tr>
                    <td height="15px">&nbsp;</td>
                  </tr>
                  <tr>
                    <td style="font-size:12px;" width="700px" colspan="6">
                      <?php
                        if (($RAW_SCORE_DIS === "평가하지 않음") || ($RAW_SCORE_MEM === "평가하지 않음") || ($RAW_SCORE_SPA === "평가하지 않음") || ($RAW_SCORE_CON === "평가하지 않음") || ($RAW_SCORE_SEQ === "평가하지 않음") || ($RAW_SCORE_FGR === "평가하지 않음") || ($RAW_SCORE_CLO === "평가하지 않음")) {
                          echo "● 평가하지 않음.";
                        } else {
                          if ($PERCENTILE_B3 <= 16 || $PERCENTILE_B3 == "<1"){
                            echo "● 전체 시지각기술이 ".'<span style="font-weight: bold; color: red;">'.$PERCENTILE_B3."%".'</span>'."로 표준집단에 있는 연령이 같은 어린이와 비교해".'<span style="font-weight: bold; color: red;">'." 매우 저조".'</span>'."합니다.<br>\n";
                          }elseif ($PERCENTILE_B3 > 16 && $PERCENTILE_B3 <= 50) {
                            echo "● 전체 시지각기술이 ".'<span style="font-weight: bold; color: blue;">'.$PERCENTILE_B3."%".'</span>'."로 표준집단에 있는 연령이 같은 어린이와 비교해 정상범위이나".'<span style="font-weight: bold; color: blue;">'." 다소 저조".'</span>'."합니다.<br>\n";
                          }elseif ($PERCENTILE_B3 > 50 && $PERCENTILE_B3 <= 84) {
                            echo "● 전체 시지각기술이 ".$PERCENTILE_B3."% 로 표준집단에 있는 연령이 같은 어린이와 비교해 정상범위로 양호합니다.<br>\n";
                          }elseif ($PERCENTILE_B3 > 84) {
                            echo "● 전체 시지각기술이 ".$PERCENTILE_B3."% 로 표준집단에 있는 연령이 같은 어린이와 비교해 우수합니다.<br>\n";
                          }
                          $DIS_ment = "시각식별기술"."(".$percentile_DIS."%), ";
                          $MEM_ment = "시각기억기술"."(".$percentile_MEM."%), ";
                          $SPA_ment = "공간관계기술"."(".$percentile_SPA."%), ";
                          $CON_ment = "형태항상성기술"."(".$percentile_CON."%), ";
                          $SEQ_ment = "순차적기억기술"."(".$percentile_SEQ."%), ";
                          $FGR_ment = "형태-배경식별기술"."(".$percentile_FGR."%), ";
                          $CLO_ment = "시각폐쇄기술"."(".$percentile_CLO."%)";
                          echo  "● ".$DIS_ment.$MEM_ment.$SPA_ment.$CON_ment.$SEQ_ment.$FGR_ment.$CLO_ment."로 평가되었습니다.<br>\n";

                          $TVPS4_AGE_ment = "전체 시지각기술 ".$TVPS4AGE__B5.", ";
                          $DIS_AGE_ment = "시각식별기술"."(".$percentile_DIS."%), ";
                          $MEM_AGE_ment = "시각기억기술"."(".$percentile_MEM."%), ";
                          $SPA_AGE_ment = "공간관계기술"."(".$percentile_SPA."%), ";
                          $CON_AGE_ment = "형태항상성기술"."(".$percentile_CON."%), ";
                          $SEQ_AGE_ment = "순차적기억기술"."(".$percentile_SEQ."%), ";
                          $FGR_AGE_ment = "형태-배경식별기술"."(".$percentile_FGR."%), ";
                          $CLO_AGE_ment = "시각폐쇄기술"."(".$percentile_CLO."%)";
                          echo  "● 전체 시지각기술 ".$TVPS4AGE__B5.", "."시각식별기술 ".$qgeEqui_DIS.", "."시각기억기술 ".$qgeEqui_MEM.", "."공간관계기술 ".$qgeEqui_SPA.", "."형태항상성기술 ".$qgeEqui_CON.", "."순차적기억기술 ".$qgeEqui_SEQ.", "."형태-배경식별기술 ".$qgeEqui_FGR.", "."시각폐쇄기술 ".$qgeEqui_CLO."의 수행능력입니다.<br>\n";



                        }

                       ?>
                    </td>
                  </tr>
                  <tr>
                    <td height="15px">&nbsp;</td>
                  </tr>
                  <tr>
                    <td style="height:15px; width:700px; font-size:12px;" colspan="6">* 시각식별은 형태와 모양, 방향, 위치, 크기와 같이 물체나 인쇄물에 있는 글자기호의 독특한 특징을 인식하는 능력. 시각기억은 앞에서 특정한 순서로 제시된 시각자극을 인식하거나 기억하는 능력, 순차적 기억은 문자나 숫자, 기호, 물체의 정확한 순서를 기억하는 능력, 공간관계는 형태의 일부분이나 전체가 다른것과 방향이 다르게 회전된것을 확인하는 능력, 형태항상성은 형태나 물체가 다양한 환경에 있거나 위치와 크기가 다르더라도 동일한 형태나 물체로 인식하는 능력, 형태-배경은 서로 경합하는 자극의 배경으로 부터 물체나 물체의 특정한 특징을 선택하여 처리하는 능력, 시각폐쇄는 물체의 일부분이 가려져도 전체의 물체를 인식할 수 있는 능력이다.</td>
                  </tr>
                </table>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td height="10px">&nbsp</td>
        </tr>
        <tr class="VMI" style="page-break-after: always;">
          <table  style="border:3px solid black; width:700px; padding:10px;">
            <tr>
              <td colspan="4" style="text-align:center; width:700px; height: 30px; font-size: 16px; font-weight: bold;">시각운동통합기술(Beery VMI)</td>
            </tr>
            <tr>
              <td height="40px" width="240" style="border:2px solid black; background-color : rgb(119,155,2); color: rgb(255,255,255); font-size: 13px; font-weight: bold; text-align: center;" >평가항목</td>
              <td width="240" style="border:2px solid black; background-color : rgb(119,155,2); color: rgb(255,255,255); font-size: 13px; font-weight: bold; text-align: center;">시각운동통합</td>
              <td width="240" style="border:2px solid black; background-color : rgb(119,155,2); color: rgb(255,255,255); font-size: 13px; font-weight: bold; text-align: center;">시각인지</td>
              <td width="240" style="border:2px solid black; background-color : rgb(119,155,2); color: rgb(255,255,255); font-size: 13px; font-weight: bold; text-align: center;">운동협응</td>
            </tr>
            <tr>
              <td style="height:30px; border:2px solid black; background-color : rgb(212,241,191); font-size: 10px; font-weight: bold; text-align: center;">미가공점수</td>
              <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;" name="Raw_vmi" >
                  <?php echo $Raw_vmi; ?>
              </td>
              <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;" name="Raw_visual" >
                  <?php echo $Raw_visual; ?>
              </td>
              <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;" name="Raw_motor" >
                    <?php echo $Raw_motor; ?>
              </td>
            </tr>
            <tr>
              <td style="height:30px; border:2px solid black; background-color : rgb(212,241,191); font-size: 10px; font-weight: bold; text-align: center;">표준점수</td>
                <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                  <?php
                    echo $VMI_STAND;
                  ?>
                </td>
                <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                  <?php
                    echo $VISUAL_STAND;
                  ?>
                </td>
                <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;" >
                  <?php
                    echo $MOTOR_STAND;
                  ?>
                </td>
              </tr>
              <tr>
                <td style="height:30px; border:2px solid black; background-color : rgb(212,241,191); font-size: 10px; font-weight: bold; text-align: center;">척도점수</td>
                <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                  <?php
                    echo $VMI_SCALED;
                  ?>
                </td>
                <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                  <?php
                    echo $VISUAL_SCALED;
                  ?>
                </td>
                <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;" >
                  <?php
                    echo $MOTOR_SCALED;
                  ?>
                </td>
              </tr>
              <tr>
                <td style="height:30px; border:2px solid black; background-color : rgb(212,241,191); font-size: 10px; font-weight: bold; text-align: center;">백분위점수</td>
                <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;" >
                  <?php
                  if($VMI_PERCENTILE < 16){
                    echo '<span style="font-weight: bold; color: red;">'.$VMI_PERCENTILE."%".'</span>';
                  } elseif ($VMI_PERCENTILE >= 16 && $VMI_PERCENTILE < 85) {
                    echo '<span style="font-weight: bold; color: blue;">'.$VMI_PERCENTILE."%".'</span>';
                  } else {
                    echo $VMI_PERCENTILE."%";
                  }
                  ?>

                </td>
                <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                  <?php
                  if($VISUAL_PERCENTILE < 16){
                    echo '<span style="font-weight: bold; color: red;">'.$VISUAL_PERCENTILE."%".'</span>';
                  } elseif ($VISUAL_PERCENTILE >= 16 && $VISUAL_PERCENTILE < 85) {
                    echo '<span style="font-weight: bold; color: blue;">'.$VISUAL_PERCENTILE."%".'</span>';
                  } else {
                    echo $VISUAL_PERCENTILE."%";
                  }
                  ?>

                </td>
                <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;" >
                  <?php
                  if($MOTOR_PERCENTILE < 16){
                    echo '<span style="font-weight: bold; color: red;">'.$MOTOR_PERCENTILE."%".'</span>';
                  } elseif ($MOTOR_PERCENTILE >= 16 && $MOTOR_PERCENTILE < 85) {
                    echo '<span style="font-weight: bold; color: blue;">'.$MOTOR_PERCENTILE."%".'</span>';
                  } else {
                    echo $MOTOR_PERCENTILE."%";
                  }
                  ?>

                </td>
              </tr>
              <tr>
                <td style="height:30px; border:2px solid black; background-color : rgb(212,241,191); font-size: 10px; font-weight: bold; text-align: center;">등가나이환산</td>
                <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                  <?php
                    echo $VMI_Age;
                  ?>
                </td>
                <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;" >
                  <?php
                    echo $VISUAL_Age;
                  ?>
                </td>
                <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                  <?php
                    echo $MOTOR_Age;
                  ?>
                </td>
              </tr>
              <tr>
                <td style="height:15px;">&nbsp;</td>
              </tr>
              <tr>
                <td class="Box_Title" style="width:700px;" colspan="4">시각운동통합기술(VMI) 분석결과</td>
              </tr>
              <tr>
                <td style="height:10px;">&nbsp;</td>
              </tr>
              <tr>
                <td style="width:280px; text-align:right; border: none; font-size:10px;"  colspan="4">분석나이기준 :
                  <?php echo $VMI_ACAge_S." ~ ".$VMI_ACAge_T ?>
                </td>
              </tr>
              <tr>
                <td style="height:15px;">&nbsp;</td>
              </tr>
              <tr>
                <td style="height:15px; width:700px; font-size:12px;"  colspan="4">• 시각운동통합기술은 시각기능과 운동기능을 통합할 수 있는 기술로 눈과 손의 협응능력을 평가함.</td>
              </tr>
              <tr>
                <td height="15px">&nbsp;</td>
              </tr>
              <tr>
                <td style="font-size:12px;" width="700px"  colspan="4">
                  <?php
                    if (($Raw_vmi === "평가하지 않음") || ($Raw_visual === "평가하지 않음") || ($Raw_motor === "평가하지 않음")){
                      echo "● 평가하지 않음.";
                    } else {
                      if ($VMI_PERCENTILE <= 16 || $VMI_PERCENTILE == "<1"){
                          echo "● 시각운동통합기술이 ".'<span style="font-weight: bold; color: red;">'.$VMI_PERCENTILE."%".'</span>'."로 표준집단에 있는 연령이 같은 어린이와 비교해".'<span style="font-weight: bold; color: red;">'." 매우 저조".'</span>'."합니다.<br>\n";
                      }elseif ($VMI_PERCENTILE <= 50) {
                          echo "● 시각운동통합기술이 ".'<span style="font-weight: bold; color: blue;">'.$VMI_PERCENTILE."%".'</span>'."로 표준집단에 있는 연령이 같은 어린이와 비교해 정상범위이나".'<span style="font-weight: bold; color: blue;">'." 다소 저조".'</span>'."합니다.<br>\n";
                      }elseif ($VMI_PERCENTILE <= 84) {
                          echo "● 시각운동통합기술이 ".$VMI_PERCENTILE."% 로 표준집단에 있는 연령이 같은 어린이와 비교해 정상범위로 양호합니다.<br>\n";
                      }elseif ($VMI_PERCENTILE > 84) {
                          echo "● 시각운동통합기술이 ".$VMI_PERCENTILE."% 로 표준집단에 있는 연령이 같은 어린이와 비교해 우수합니다.<br>\n";
                      }

                        $VISUAL_ment = "시각인지기술"."(".$VISUAL_PERCENTILE."%), ";
                        $MOTOR_ment = "운동협응기술"."(".$MOTOR_PERCENTILE."%) ";
                        echo  "● ".$VISUAL_ment.$MOTOR_ment."로 평가되었습니다.<br>\n";

                        $VMI_ment = "시각운동통합기술"."(".$VMI_Age."), ";
                        $VISUAL_ment = "시각인지기술"."(".$VISUAL_Age."), ";
                        $MOTOR_ment = "운동협응기술"."(".$MOTOR_Age."%) ";
                        echo  "● ".  $VMI_ment.$VISUAL_ment.$MOTOR_ment."의 수행능력입니다.<br>\n";
                    }
                   ?>
                  </td>
                </tr>
                <tr>
                  <td height="15px">&nbsp;</td>
                </tr>
                <tr>
                  <td style="height:15px; width:700px; font-size:12px;"  colspan="4">* 시각운동통합기술은 시각기능과 운동기능을 통합할 수 있는 기술로 눈과 손의 협응능력을 평가함.</td>
                </tr>
              </table>
            </tr>
            <tr>
              <td height="15px">&nbsp;</td>
            </tr>
            <tr class="DEM">
              <table  style="border:3px solid black; width:700px; padding:10px;">
                <tr>
                  <td colspan="5" style="text-align:center; width:700px; height: 30px; font-size: 16px; font-weight: bold;">안구운동발달(DEM)</td>
                </tr>
                <tr>
                  <td height="40px" width="190" style="border:2px solid black; background-color : rgb(200,131,28); color: rgb(255,255,255); font-size: 13px; font-weight: bold; text-align: center;" >평가항목</td>
                  <td width="190" style="border:2px solid black; background-color : rgb(200,131,28); color: rgb(255,255,255); font-size: 13px; font-weight: bold; text-align: center;">조정된 수직시간</td>
                  <td width="190" style="border:2px solid black; background-color : rgb(200,131,28); color: rgb(255,255,255); font-size: 13px; font-weight: bold; text-align: center;">조정된 수평시간</td>
                  <td width="190" style="border:2px solid black; background-color : rgb(200,131,28); color: rgb(255,255,255); font-size: 13px; font-weight: bold; text-align: center;">오류(ERROR)</td>
                  <td width="190" style="border:2px solid black; background-color : rgb(200,131,28); color: rgb(255,255,255); font-size: 13px; font-weight: bold; text-align: center;">DEM비(Ratio)</td>
                </tr>
                <tr>
                  <td height="30px"  style="height:30px; border:2px solid black; background-color :rgb(253,235,170); font-size: 10px; font-weight: bold; text-align: center;">미가공점수</td>
                  <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                    <?php
                    echo $VER_Adj_time;
                     ?>
                  </td>
                  <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                    <?php
                    echo $HOR_Adj_time;
                     ?>
                  </td>
                  <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                    <?php
                      echo $DEM_ERR;
                     ?>
                  </td>
                  <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                    <?php
                    echo $DEM_Ratio;
                     ?>
                  </td>
                </tr>
                <tr>
                  <td style="height:30px; border:2px solid black; background-color :rgb(253,235,170); font-size: 10px; font-weight: bold; text-align: center;">표준점수</td>
                    <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                      <?php
                        echo $DEM_VER_STAND;
                      ?>
                    </td>
                    <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                      <?php
                        echo $DEM_HOR_STAND;
                      ?>
                    </td>
                    <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                      <?php
                        echo $DEM_ERR_STAND;
                      ?>
                    </td>
                    <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                      <?php
                        echo $DEM_RATIO_STAND;
                      ?>
                    </td>
                  </tr>
                  <tr>
                    <td style="height:30px; border:2px solid black; background-color :rgb(253,235,170); font-size: 10px; font-weight: bold; text-align: center;">백분위점수</td>
                    <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                      <?php
                      if($DEM_VER_PER < 16 || $DEM_VER_PER == "<1"){
                        echo '<span style="font-weight: bold; color: red;">'.$DEM_VER_PER."%".'</span>';
                      } elseif ($DEM_VER_PER >= 16 && $DEM_VER_PER < 85) {
                        echo '<span style="font-weight: bold; color: blue;">'.$DEM_VER_PER."%".'</span>';
                      } else {
                        echo $DEM_VER_PER."%";
                      }
                      ?>

                    </td>
                    <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                      <?php
                      if($DEM_HOR_PER < 16 || $DEM_HOR_PER == "<1"){
                        echo '<span style="font-weight: bold; color: red;">'.$DEM_HOR_PER."%".'</span>';
                      } elseif ($DEM_HOR_PER >= 16 && $DEM_HOR_PER < 85) {
                        echo '<span style="font-weight: bold; color: blue;">'.$DEM_HOR_PER."%".'</span>';
                      } else {
                        echo $DEM_HOR_PER."%";
                      }
                      ?>

                    </td>
                    <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                      <?php
                      if($DEM_ERR_PER < 16 || $DEM_ERR_PER == "<1"){
                        echo '<span style="font-weight: bold; color: red;">'.$DEM_ERR_PER."%".'</span>';
                      } elseif ($DEM_ERR_PER >= 16 && $DEM_ERR_PER < 85) {
                        echo '<span style="font-weight: bold; color: blue;">'.$DEM_ERR_PER."%".'</span>';
                      } else {
                        echo $DEM_ERR_PER."%";
                      }
                      ?>

                    </td>
                    <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                      <?php
                      if($DEM_RATIO_PER < 16 || $DEM_RATIO_PER == "<1"){
                        echo '<span style="font-weight: bold; color: red;">'.$DEM_RATIO_PER."%".'</span>';
                      } elseif ($DEM_RATIO_PER >= 16 && $DEM_RATIO_PER < 85) {
                        echo '<span style="font-weight: bold; color: blue;">'.$DEM_RATIO_PER."%".'</span>';
                      } else {
                        echo $DEM_RATIO_PER."%";
                      }
                      ?>

                    </td>
                  </tr>
                  <tr>
                    <td style="height:15px;">&nbsp;</td>
                  </tr>
                      <tr>
                        <td class="Box_Title" style="width:700px;" colspan="5">안구운동발달(DEM) 분석결과</td>
                      </tr>
                      <tr>
                        <td style="width:280px; text-align:right; border: none; font-size:10px;" colspan="5">분석나이기준 :
                          <?php echo $DEM_ACAge_S." ~ ".$DEM_ACAge_T ?>
                        </td>
                      </tr>
                      <tr>
                        <td style="height:15px;">&nbsp;</td>
                      </tr>
                      <tr>
                        <td style="height:15px; width:700px; font-size:12px;" colspan="5">• 홱보기기능의 정확도와 속도를 평가할 수 있고, 안구운동기능의 간접적인 측정과 자동성기능을 평가할 수 있다.</td>
                      </tr>
                      <tr>
                        <td height="15px">&nbsp;</td>
                      </tr>
                      <tr>
                        <td style="font-size:12px;" width="700px" colspan="5">
                          <?php

                          if (($VER_Adj_time === "평가하지 않음") || ($HOR_Adj_time === "평가하지 않음")){
                            echo "● 평가하지 않음.";
                          } else {
                            if ($DEM_RATIO_PER <= 15 || $DEM_RATIO_PER == '<1' ){
                              if ($DEM_VER_PER <=15 ||  $DEM_VER_PER == '<1' ) {
                                if ($DEM_HOR_PER <= 15 || $DEM_HOR_PER == '<1')
                                echo "● ".'<span style="font-weight: bold; color: red;">'."안구운동발달 유형이 IV형 ".'</span>'."으로 조정된 수직시간이나 수평시간, DEM비 모두 이상값을 나타내는 경우로, 이것은 ".'<span style="font-weight: bold; color: red;">'."안구운동이상(II유형)과 자동성이상(III유형)이 동반된 유형".'</span>'."입니다.<br>\n";
                              } else {
                                echo "● ".'<span style="font-weight: bold; color: red;">'."안구운동발달 유형이 II형 ".'</span>'."으로 수직에 비해 조정된 수평시간이 커서 ".'<span style="font-weight: bold; color: red;">'."안구운동이상".'</span>'."을 나타내는 유형입니다.<br>\n";
                              }
                            }else {
                              if ($DEM_VER_PER >=15 && $DEM_HOR_PER >= 15){
                                echo "● 안구운동발달 유형이 I형으로 조정된 수평시간과 수직시간이 정상으로 안구운동기능이 정상인 유형입니다.<br>\n";
                              } else {
                                echo "● ".'<span style="font-weight: bold; color: red;">'."안구운동발달 유형이 III형 ".'</span>'."으로 DEM비는 정상이지만, 미숙한 자동성이 수평으로 나열된 숫자를 읽는 것에도 부정적인 영향을 미쳐 조정된 수평시간 및 수직시간이 증가한 것으로 ".'<span style="font-weight: bold; color: red;">'."자동성에 문제가 있는 유형".'</span>'."입니다.<br>\n";

                              }
                            }
                          }
                           ?>
                        </td>
                      </tr>
                      <tr>
                        <td height="15px">&nbsp;</td>
                      </tr>
                      <tr>
                        <td style="height:15px; width:700px; font-size:12px;" colspan="5">* 안구운동발달은 빠르고 정확한 홱보기 안구운동기술로 유창한 읽기능력과 관련된다.</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </tr>

          </table>
        </tr>
        <tr>
          <td height="10px">&nbsp</td>
        </tr>
        <tr class="WACS"  style="page-break-after: always;">
          <table  style="border:3px solid black; width:700px; padding:10;">
            <tr>
              <td colspan="4" style="text-align:center; width:700px; height: 30px; font-size: 16px; font-weight: bold;">시각공간방향기술(WACS)</td>
            </tr>

                <tr>
                  <td height="40px" width="190" style="border:2px solid black; background-color : rgb(130,2,180); color: rgb(255,255,255); font-size: 13px; font-weight: bold; text-align: center;" >부가검사</td>
                  <td width="190" style="border:2px solid black; background-color : rgb(130,2,180); color: rgb(255,255,255); font-size: 13px; font-weight: bold; text-align: center;">미가공점수</td>
                  <td width="190" style="border:2px solid black; background-color : rgb(130,2,180); color: rgb(255,255,255); font-size: 13px; font-weight: bold; text-align: center;">표준점수</td>
                  <td width="190" style="border:2px solid black; background-color : rgb(130,2,180); color: rgb(255,255,255); font-size: 13px; font-weight: bold; text-align: center;">백분위수</td>
                </tr>

                <tr>
                  <td style="height:30px; border:2px solid black; background-color : rgb(213,180,252); font-size: 11px; font-weight: bold; text-align: center;">물체식별</td>
                  <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;" name="WACS_RAW_T1">
                    <?php echo $WACS_RAW_T1; ?>
                  </td>
                  <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;" >
                    <?php
                    echo $WACS_T1_STAND;
                     ?>
                  </td>
                  <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                    <?php
                    if($WACS_T1_PER < 16 || $WACS_T1_PER == "<1"){
                      echo '<span style="font-weight: bold; color: red;">'.$WACS_T1_PER."%".'</span>';
                    } elseif ($WACS_T1_PER >= 16 && $WACS_T1_PER < 85) {
                      echo '<span style="font-weight: bold; color: blue;">'.$WACS_T1_PER."%".'</span>';
                    } else {
                      echo $WACS_T1_PER."%";
                    }
                    ?>

                  </td>
                </tr>
                <tr>
                  <td style="height:30px; border:2px solid black; background-color : rgb(213,180,252); font-size: 11px; font-weight: bold; text-align: center;" >물체설계</td>
                  <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;" name="WACS_RAW_T2">
                    <?php echo $WACS_RAW_T2; ?>
                  </td>
                  <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                    <?php
                    echo $WACS_T2_STAND;
                     ?>
                  </td>
                  <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                    <?php
                    if($WACS_T2_PER < 16 || $WACS_T2_PER == "<1"){
                      echo '<span style="font-weight: bold; color: red;">'.$WACS_T2_PER."%".'</span>';
                    } elseif ($WACS_T2_PER >= 16 && $WACS_T2_PER < 85) {
                      echo '<span style="font-weight: bold; color: blue;">'.$WACS_T2_PER."%".'</span>';
                    } else {
                      echo $WACS_T2_PER."%";
                    }
                    ?>

                  </td>
                </tr>
                <tr>
                  <td style="height:30px; border:2px solid black; background-color : rgb(213,180,252); font-size: 11px; font-weight: bold; text-align: center;">그림설계</td>
                  <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;" name="WACS_RAW_T3">
                    <?php echo $WACS_RAW_T3; ?>
                  </td>
                  <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                    <?php
                    echo $WACS_T3_STAND;
                     ?>
                  </td>
                  <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                    <?php
                    if($WACS_T3_PER < 16 || $WACS_T3_PER == "<1"){
                      echo '<span style="font-weight: bold; color: red;">'.$WACS_T3_PER."%".'</span>';
                    } elseif ($WACS_T3_PER >= 16 && $WACS_T3_PER < 85) {
                      echo '<span style="font-weight: bold; color: blue;">'.$WACS_T3_PER."%".'</span>';
                    } else {
                      echo $WACS_T3_PER."%";
                    }
                    ?>

                  </td>
                </tr>
                <tr>
                  <td style="height:30px; border:2px solid black; background-color : rgb(213,180,252); font-size: 11px; font-weight: bold; text-align: center;">일반움직임</td>
                  <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;"  name="WACS_RAW_T4">
                    <?php echo $WACS_RAW_T4; ?>
                  </td>
                  <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                    <?php
                    echo $WACS_T4_STAND;
                     ?>
                  </td>
                  <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                    <?php
                    if($WACS_T4_PER < 16 || $WACS_T4_PER == "<1"){
                      echo '<span style="font-weight: bold; color: red;">'.$WACS_T4_PER."%".'</span>';
                    } elseif ($WACS_T4_PER >= 16 && $WACS_T4_PER < 85) {
                      echo '<span style="font-weight: bold; color: blue;">'.$WACS_T4_PER."%".'</span>';
                    } else {
                      echo $WACS_T4_PER."%";
                    }
                    ?>

                  </td>
                </tr>
                <tr >
                  <td colspan="2" style="height:30px; border:2px solid black; background-color : rgb(213,180,252); font-size: 11px; font-weight: bold; text-align: center;">부검사 평균 표준점수 </td>
                  <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                    <?php
                      echo $SUM_STAND;
                     ?>
                  </td>
                  <td style="background-color: rgb(141,139,139); height: 25px; border : 1px solid black; font-size : 10px; text-align: center;"></td>
                </tr>
                <tr >
                  <td colspan="3"  style="height:30px; border:2px solid black; background-color : rgb(213,180,252); font-size: 11px; font-weight: bold; text-align: center;">전체 백분위수</td>
                  <td style="height: 25px; border : 1px solid black; font-size : 10px; text-align: center;">
                    <?php
                    if($WACS_T5_PER < 16 || $WACS_T5_PER == "<1"){
                      echo '<span style="font-weight: bold; color: red;">'.$WACS_T5_PER."%".'</span>';
                    } elseif ($WACS_T5_PER >= 16 && $WACS_T5_PER < 85) {
                      echo '<span style="font-weight: bold; color: blue;">'.$WACS_T5_PER."%".'</span>';
                    } else {
                      echo $WACS_T5_PER."%";
                    }
                    ?>

                  </td>
                </tr>
                <tr>
                  <td height="20px">&nbsp;</td>
                </tr>
                      <tr>
                        <td class="Box_Title" style="width:700px;"  colspan="4">시각공간방향기술(WACS) 분석결과</td>
                      </tr>
                      <tr>
                        <td style="width:280px; text-align:right; border: none; font-size:10px;" colspan="4">분석나이기준 :
                          <?php echo $WACS_ACAge_S." ~ ".$WACS_ACAge_T ?>
                        </td>
                      </tr>
                      <tr>
                        <td style="height:15px;">&nbsp;</td>
                      </tr>
                      <tr>
                        <td style="height:15px; width:700px; font-size:12px;"></td>
                      </tr>
                      <tr>
                        <td height="15px">&nbsp;</td>
                      </tr>
                      <tr>
                        <td style="font-size:12px;" width="700px" colspan="4">
                          <?php
                           if (($WACS_RAW_T1 === "평가하지 않음") || ($WACS_RAW_T2 === "평가하지 않음") || ($WACS_RAW_T3 === "평가하지 않음") || ($WACS_RAW_T4 === "평가하지 않음")) {
                             echo "● 평가하지 않음.";
                           } else {
                             if ($WACS_T5_PER <= 16 || $WACS_T5_PER == "<1"){
                               echo "● 시각공간방향기술이 ".'<span style="font-weight: bold; color: red;">'.$WACS_T5_PER."%".'</span>'."로 표준집단에 있는 연령이 같은 어린이와 비교해".'<span style="font-weight: bold; color: red;">'." 매우 저조".'</span>'."합니다.<br>\n";
                               if ($ChAge_y >=6) {
                                 echo "● 또한 분석기준나이가 5세임을 감안한다면 연령이 같은 또래와 비교해".'<span style="font-weight: bold; color: red;">'." 매우 저조".'</span>'."합니다.<br>\n";
                               }
                             }elseif ($WACS_T5_PER <= 50) {
                               echo "● 시각운동통합기술이 ".'<span style="font-weight: bold; color: blue;">'.$WACS_T5_PER."%".'</span>'."로 표준집단에 있는 연령이 같은 어린이와 비교해 정상범위이나".'<span style="font-weight: bold; color: blue;">'." 다소 저조".'</span>'."합니다.<br>\n";
                               if ($ChAge_y >=6) {
                               echo "● 단, 분석기준나이가 5세임을 감안한다면 연령이 같은 또래와 비교해".'<span style="font-weight: bold; color: red;">'." 매우 저조".'</span>'."합니다.<br>\n";
                               }
                             }elseif ($WACS_T5_PER <= 84) {
                               echo "● 시각운동통합기술이 ".$WACS_T5_PER."% 로 표준집단에 있는 연령이 같은 어린이와 비교해 정상범위로 양호합니다.<br>\n";
                               if ($ChAge_y >=6) {
                               echo "● 단, 분석기준나이가 5세임을 감안한다면 ".'<span style="font-weight: bold; color: red;">'." 정기적인 관찰이".'</span>'."요구됩니다.<br>\n";
                               }
                             }elseif ($WACS_T5_PER > 84) {
                               echo "● 시각운동통합기술이 ".$WACS_T5_PER."% 로 표준집단에 있는 연령이 같은 어린이와 비교해 우수합니다.<br>\n";
                             }
                                 $WACS_T1_ment = "물체식별"."(".$WACS_T1_PER."%), ";
                                 $WACS_T2_ment = "물체설계"."(".$WACS_T2_PER."%) ";
                                 $WACS_T3_ment = "그림설계"."(".$WACS_T3_PER."%), ";
                                 $WACS_T4_ment = "일반움직임"."(".$WACS_T4_PER."%) ";
                                 echo  "● ".$WACS_T1_ment.$WACS_T2_ment.  $WACS_T3_ment.$WACS_T4_ment."로 평가되었습니다.<br>\n";

                           }







                         ?>
                        </td>
                      </tr>
                      <tr>
                        <td height="15px">&nbsp;</td>
                      </tr>

                      <tr>
                        <td  style="height:15px; width:700px; font-size:12px;"  colspan="4">* WACS검사 목적은 어린이의 발달 상태와 학습에 알맞은 수준의 활동을 평가하기 위해 다양한 신체와 감각사고 과제에 대해 고차원적인 사고를 수행하는 능력을 평가하기 위함이다.
                          * 학습활동에 중요한 역할을 담당하는 교사나 부모가 어린이의 수준보다 낮거나 높게 지도한다면 효과적인 학습이 이루어지지 않는다. 어린이의 발달상태에 도전할 만한 과제가 주어졌을 때 지적성장과
                           지적발달이 이루어지고, 인지기능인 고차원적인 사고가 일어난다.\n
                           * 어린이에게 코를 짚어보라고 했을 때 자신의 신체에 대해 충분히 인지하지 못하면서 자신의 코를 짚을 수는 있거나, 숫자에 대한 개념은 부족하지만 숫자를 순서대로 소리내어 외우는 연습을 통해
                           10까지 외울 수 있는 경우이다.
                        </td>
                      </tr>
                    </table>








        </tr>
        <tr>
          <td height="10px">&nbsp</td>
        </tr>
        <tr class="Evaluation_Result"  style="page-break-after: always;">
          <table  style="border:3px solid black; width:700px;">
            <tr>
              <td colspan="2" style="text-align:center; width:700px; height: 30px; font-size: 16px; font-weight: bold;">종합평가</td>
            </tr>
            <tr>
              <td style="font-size:12px;" colspan="2" style="font-weight:bold;" width="100px">
                <?php

                // QOL문진
                if (empty($QOL_sum) === false){
                  if ($QOL_sum >= 30) {
                    echo "● 시기능이상의 자각적인 증상정도를 확인할 수 있는 QOL문진점수가 ".'<span style="font-weight: bold; color: red;">'.$QOL_sum."점".'</span>'."으로 자각적증상의 정도가 ".'<span style="font-weight: bold; color: red;">'."매우 불량합니다. 시기능발달평가가 적극".'</span>'."권장됩니다.<br>\n";
                  } else if ($QOL_sum >= 20 && $QOL_sum <30 ) {
                    echo "● 시기능이상의 자각적인 증상정도를 확인할 수 있는 QOL문진점수가 ".'<span style="font-weight: bold; color: red;">'.$QOL_sum."점".'</span>'."으로 자각적증상의 정도가 ".'<span style="font-weight: bold; color: red;">'."불량합니다. 시기능발달평가가 ".'</span>'."권장됩니다.<br>\n";
                  } else if ($QOL_sum < 20 && $QOL_sum >10) {
                    echo "● 시기능이상의 자각적인 증상정도를 확인할 수 있는 QOL문진점수가 ".'<span style="font-weight: bold; color: blue;">'.$QOL_sum."점".'</span>'."으로 자각적증상의 ".'<span style="font-weight: bold; color: blue;">'."정기적인 관찰이 ".'</span>'."권장됩니다.<br>\n";
                  } else {
                    echo "● 시기능이상의 자각적인 증상정도를 확인할 수 있는 QOL문진점수가 ".$QOL_sum."점으로 양호합니다.<br>\n";
                  }


                }

                // 시기능이상-비사시성

                  if (($CTest_N === 'exo') && ($NVer >= 6) && ($D_BIBO == 'BI') && ($Nectopic > 6) && ($N_BIBO == 'BI') && (($Nectopic - $Dectopic) >= 4) ){
                    if (($NConver2 <= 15) || (($NConver2 /2) < $Nectopic) ){
                      $Eva_result1 = "눈모임부족";
                    }
                  } elseif (($CTest_N == 'eso') && (($Nectopic - $Dectopic) >= 3) && ($N_BIBO == 'BO')   ){
                    if (($NDever2 <= 17) || (($NDever2 / 2) < $Nectopic)){
                      $Eva_result1 = "눈모임과다";
                    }
                  } elseif (($CTest_N == 'eso') && (($Dectopic - $Nectopic) >= 2) && ($D_BIBO == 'BO') && ($N_BIBO == 'BO') ){
                    if (($NDever2 <= 4) || (($NDever2 / 2) < $Dectopic)){
                      $Eva_result1 = "눈벌림부족";
                    }
                  } elseif (($CTest_N == 'exo') && (($Dectopic - $Nectopic) >= 1) && ($D_BIBO == 'BI') && ($N_BIBO == 'BI') ){
                    if (($DConver2 < 11) || (($DConver2 / 2) < $Dectopic) ){
                      $Eva_result1 = "눈벌림과다";
                      }
                  } elseif (($CTest_N == 'exo') && (($Nectopic - $Dectopic) <= 0) && ($D_BIBO == 'BI') && ($N_BIBO == 'BI')  ){
                    if (($DConver2 <= 11) || (($DConver2 /2) < $Dectopic) ){
                      if (($NConver2 <= 15) || (($NConver2 / 2) < $Nectopic) ){
                          $Eva_result1 = "기본외사위";
                      }
                    }
                  } elseif (($CTest_N == 'eso') && (($Nectopic - $Dectopic) <= 1) && ($D_BIBO == 'BO') && ($N_BIBO == 'BO') ){
                    if (($DDever2 <= 4) || (($DDever2 /2) < $Dectopic)) {
                      if (($NDever2 <=17) || (($NDever2 /2) < $Nectopic)) {
                        $Eva_result1 = "기본내사위";

                      }
                    }
                  } elseif (($CTest_N == 'eso') && ($Dectopic <= 0) && ($Nectopic <= 0) ){
                    if (($DDever2 <= 4) || (($DConver2 / 2) < $Dectopic)){
                      if (($DConver2 <= 11) || (($DConver2 / 2) < $Dectopic)){
                        if (($NDever2 <= 17) || (($NDever2 /2) < $Nectopic)){
                          if (($NConver2 <= 15) || (($NConver2 /2) < $Nectopic)){
                            $Eva_result1 = "융합버전스이상";

                          }
                        }
                      }
                    }
                  } elseif (($CTest_N == 'exo') && ($Nectopic <= 0) && ($Dectopic <= 0) ){
                  if (($DDever2 <= 4) || (($DDever2 / 2) < $Dectopic)){
                    if (($DConver2 <= 11) ||  (($DConver2 / 2) < $Dectopic)){
                      if (($NDever2 <= 17) || (($NDever2 /2) < $Nectopic)){
                        if (($NConver2 <= 15) || (($NConver2 /2) < $Nectopic)){
                          $Eva_result1 = "융합버전스이상";

                        }
                      }
                    }
                  }
                } elseif (($CTest_N == 'ET') || ($CTest_D == 'ET')) {
                  if($month6 == "early" && $ratio_cross == "always" && ($Dectopic > 30 || $Nectopic > 30) && $BroadH == "bad") {
                    $Eva_result1 = "유아내사시";
                  } elseif((($Dectopic < 35 && $Dectopic > 10) || ($Nectopic > 35 && $Nectopic > 10)) && $change_ver == "yes" && $Nectopic >= ($Dectopic-2) && $month6 == "later" ){
                    $Eva_result1 = "조절성내사시";
                  } elseif ($month6 == "later" && $exami == "sudden" ) {
                    $Eva_result1 = "급성내사시";
                  } elseif(($Dectopic < 30 || $Nectopic < 30) && $eye_movement == "yes" && $change_ver == "yes" && $month6 == "later" ) {
                    $Eva_result1 = "물리적내사시";
                  } elseif ( $ratio_cross == "always" && $splitting == "unilater" && $amblyopia == "yes" ){
                    $Eva_result1 = "감각성내사시";
                  } elseif ($radio_surgery1 == "yes" && $BroadH != "good" && $ratio_cross == "always" && $splitting == "unilater"){
                    $Eva_result1 = "속발성내사시";
                  } elseif (($Dectopic < 11 || $Nectopic < 11) && $ratio_cross == "always" && $splitting == "unilater" && $amblyopia == "yes" ){
                    $Eva_result1 = "미세내사시";
                  } else {
                    $Eva_result1 = "내사시";
                  }

                } elseif (($CTest_N == 'XT') || ($CTest_D == 'XT')){
                  if($month6 == "early" && ($Dectopic > 30 || $Nectopic > 30) && $splitting == "alter" && $ratio_cross == "always" ){
                    $Eva_result1 = "유아외사시";
                  } elseif($month6 == "later" && $ratio_cross == "sometime"){
                    if((($Dectopic- $Nectopic)<10 || ($Nectopic- $Dectopic)<10)){
                      $Eva_result1 = "간헐성외사시(기본형)";
                    } elseif(($Dectopic- $Nectopic)>=10){
                      $Eva_result1 = "간헐성외사시(눈벌림과다형)";
                    } elseif(($Nectopic- $Dectopic)>=10){
                      $Eva_result1 = "간헐성외사시(눈모임부족형)";
                    }
                  } elseif($month6 == "later" && $exami == "sudden" ){
                    $Eva_result1 = "급성외사시";
                  } elseif(($Dectopic < 30 || $Nectopic < 30) && $eye_movement == "yes" && $change_ver == "yes" && $month6 == "later"){
                    $Eva_result1 = "물리적외사시";
                  } elseif( $ratio_cross == "always" && $splitting == "unilater" && $amblyopia == "yes"){
                    $Eva_result1 = "감각성외사시";
                  } elseif ($radio_surgery1 == "yes" && $BroadH != "good" && $ratio_cross == "always" && $splitting == "unilater"){
                    $Eva_result1 = "속발성외사시";
                  } elseif (($Dectopic < 11 || $Nectopic < 11) && $ratio_cross == "always" && $splitting == "unilater" && $amblyopia == "yes" ){
                    $Eva_result1 = "미세외사시";
                  } else {
                    $Eva_result1 = "외사시";
                  }
                }  elseif (($DEM_RATIO_PER <= 15 && $DEM_RATIO_PER>0) && ($BroadH != "good" || $sacadic != "good"))  {
                    $Eva_result3 = "안구운동이상";
                }





              //  elseif ($DVertical >=1 || $NVertical >=1) {
              //   if (($DVertical_BD1 <= 3) || ($DVertical_BD3 <= 3) || ($DVertical_BU1 <= 3) || ($DVertical_BU3 <= 3) || ($NVertical_BD1 <= 3) || ($NVertical_BD3 <= 3) || ($NVertical_BU1 <= 3) || ($NVertical_BU3 <= 3)  ){
              //     $Eva_result1 = "수직사위";
              //   }
              // }

                if(!empty($RAccom_Rev) || !empty($LAccom_Rev) || !empty($OUAccom_Rev) || !empty($R_accom) || !empty($L_accom) || !empty($L_accom)){
                  if(($R_accom <= $Accomage-2) || ($L_accom <= $Accomage-2)){
                    if($ChAge_y <= 6){
                      if(($RAccom_Rev <= 3) || ($LAccom_Rev <= 3)){
                        if($Sel_AccomRev == 'bad2'){
                          $Eva_result2 = "조절부족/조절지속능력부족";
                        } elseif($Sel_AccomRev == 'bad1'){
                          $Eva_result2 = "조절과다(조절경련)";
                        }
                      }
                    } elseif ($ChAge_y >= 7 && $ChAge_y < 12) {
                      if(($RAccom_Rev <= 4.5) || ($LAccom_Rev <= 4.5)){
                        if($Sel_AccomRev == 'bad2'){
                          $Eva_result2 = "조절부족/조절지속능력부족";
                        } elseif($Sel_AccomRev == 'bad1'){
                          $Eva_result2 = "조절과다(조절경련)";
                        }
                      }
                    }  elseif ($ChAge_y >= 13 && $ChAge_y < 38) {
                      if(($RAccom_Rev <= 6) || ($LAccom_Rev <= 6)){
                        if($Sel_AccomRev == 'bad2'){
                          $Eva_result2 = "조절부족/조절지속능력부족";
                        } elseif($Sel_AccomRev == 'bad1'){
                          $Eva_result2 = "조절과다(조절경련)";
                        }
                      }
                    }
                  } else if(($R_accom >= $Accomage) || ($L_accom >= $Accomage)){
                    if($ChAge_y <= 6){
                      if(($RAccom_Rev <= 3) || ($LAccom_Rev <= 3)){
                        if ($OUAccom_Rev <= 0.5) {
                          if($Sel_AccomRev == 'bad3'){
                          $Eva_result2 = "조절용이부족";
                        }
                      }
                    }
                  } elseif ($ChAge_y >= 7 && $ChAge_y < 12) {
                      if(($RAccom_Rev <= 4.5) || ($LAccom_Rev <= 4.5)){
                        if ($OUAccom_Rev <= 2.5) {
                          if($Sel_AccomRev == 'bad3'){
                          $Eva_result2 = "조절용이부족";
                        }
                      }
                    }
                  } elseif ($ChAge_y >= 13 && $ChAge_y < 38) {
                      if(($RAccom_Rev <= 6) || ($LAccom_Rev <= 6)){
                        if ($OUAccom_Rev <= 2.5) {
                          if($Sel_AccomRev == 'bad3'){
                          $Eva_result2 = "조절용이부족";
                        }
                      }
                    }
                  }
                }
              }




                if (empty($Eva_result1)){
                  $Eva_result1 = "";
                }
                if (empty($Eva_result2)){
                  $Eva_result2 = "";
                }
                if (empty($Eva_result3)){
                  $Eva_result3 = "";
                }



                if ($Eva_result1 != "" || $Eva_result2 != ""  || $Eva_result3 != "" ){
                  echo "● 양안시기능평가 결과 ".'<span style="font-weight: bold; color: red;">'.$Eva_result1." ".$Eva_result2." ".$Eva_result3.'</span>'."입니다.<br>\n <br>\n";
                  if ($Eva_result1 === "눈모임부족") {
                    $EVA_TEST_1 = "안구협응기술과 융합력 ";
                    echo '<span style="font-weight: bold; color: red;">'."눈모임부족".'</span>'."의 경우 버전스이상 중에서 가장 흔한 이상으로 조절이상과 버전스이상이 있는 어린이의 약30%에서 나타나고 있습니다.<br>\n";
                    echo "주로 독서나 근거리 작업과 관련된 임상적 증상이 나타나게 되며 주로 눈의 피로감, 전두부 두통, 간헐적인 흐림과 복시, 글씨가 움직여보임, 독서시 졸림, 집중도와 이해력저하, 눈이 따갑고 불편함등을 호소합니다.<br>\n <br>\n";
                  } elseif ($Eva_result1 === "눈모임과다") {
                    $EVA_TEST_1 = "안구협응기술과 융합력 ";
                    echo '<span style="font-weight: bold; color: red;">'."눈모임과다".'</span>'."의 경우 조절이상과 버전스이상이 있는 어린이의 약2%에서 나타나고 있습니다.<br>\n";
                    echo "주로 독서나 근거리 작업과 관련된 임상적 증상이 나타나게 되며 주로 눈의 피로감, 두통, 간헐적인 흐림과 복시, 글씨가 움직여보임, 집중도와 이해력저하등을 호소합니다. 또한 근거리작업을 회피해 아무런 증상이 없을 수 있고 일부에서는 억제가 발생되기도 합니다.<br>\n <br>\n";
                    } elseif ($Eva_result1 === "눈벌림부족") {
                      $EVA_TEST_1 = "안구협응기술과 융합력 ";
                    echo '<span style="font-weight: bold; color: red;">'."눈벌림부족".'</span>'."의 경우 버전스이상 중에서 유병률이 가장 낮은 이상으로 소아환자의 약0.1%로 보고되고 있습니다.<br>\n";
                    echo "주로 원거리와 관련된 임상적 증상이 나타나게 되며 눈의 피로감, 간헐적인 흐림과 복시등을 호소합니다. 또한 많은 환자에서 원거리는 억제가 발생하지만 근거리의 양안시기능은 정상이기때문에 증상이 경한편입니다. <br>\n <br>\n";
                    } elseif ($Eva_result1 === "눈벌림과다") {
                      $EVA_TEST_1 = "안구협응기술과 융합력 ";
                    echo '<span style="font-weight: bold; color: red;">'."눈벌림과다".'</span>'."의 경우 유병률은 인구의 약0.03%이고, 여성이 남성보다 흔하게 발생하는 것으로 보고되고 있습니다.<br>\n";
                    echo "주로 원거리와 관련된 임상적 증상으로 밝은 불빛에서 한쪽 눈을 감는다(사시발생), 간헐적인 흐림과 복시의 증상이 나타납니다. 또한 증상을 호소하지 않는 경우가 많습니다. <br>\n <br>\n";
                    } elseif ($Eva_result1 === "기본외사위") {
                      $EVA_TEST_1 = "안구협응기술과 융합력 ";
                    echo '<span style="font-weight: bold; color: red;">'."기본외사위".'</span>'."의 경우 외사위환자의 27%가 기본외사위, 62%가 눈모임부족으로 보고된바 있습니다. 국내의 경우 기본외사위는 조절이상과 버전스이상이 있는 어린이의 약 4%에서 나타나고 있습니다.<br>\n";
                    echo "원거리와 근거리 모두에 관련된 임상적 증상이 나타나며 근거리 증상은 눈의 피로감, 전두부 두통, 간헐적인 흐림과 복시, 글씨가 움직여보임, 독서시 졸림, 집중도와 이해력저하, 눈이 따갑고 불편함등 눈모임부족과 유사하며, 원거리 증상은 밝은 불빛에서 한쪽 눈을 감는다(사시발생), 간헐적인 흐림과 복시의 증상등 눈벌림과다와 유사합니다. 또한 증상을 호소하지 않는 경우가 많습니다.<br>\n <br>\n";
                    } elseif ($Eva_result1 === "기본내사위") {
                      $EVA_TEST_1 = "안구협응기술과 융합력 ";
                    echo '<span style="font-weight: bold; color: red;">'."기본내사위".'</span>'."의 경우 버전스이상 중에서 드물게 발생하는 이상입니다. 원거리에서 긴장성 눈모임이 높고, 원거리와 근거리에서 내사위의 정도가 비슷하며, AC/A비가 정상입니다.<br>\n";
                    echo "원거리와 근거리 모두에서 안정피로, 간헐적인 흐림과 복시등 임상적 증상을 호소합니다. <br>\n <br>\n";
                  } elseif ($Eva_result1 === "융합버전스이상") {
                    $EVA_TEST_1 = "안구협응기술과 융합력 ";
                    echo '<span style="font-weight: bold; color: red;">'."융합버전스이상".'</span>'."의 경우 눈모임부족이나 눈모임과다 보다 다소 낮게 발생하는 이상입니다. 원근거리의 안위는 대략 정위이지만 음성융합력과 양성융합력의 범위가 작고, AC/A비가 정상입니다.<br>\n";
                    echo "원거리와 근거리 모두에서 안정피로, 간헐적인 흐림과 복시, 독서시 집중도와 이해력저하등 임상적 증상을 호소합니다. <br>\n <br>\n";
                  } elseif ($Eva_result1 === "수직사위") {
                    $EVA_TEST_1 = "안구협응기술과 융합력 ";
                    echo '<span style="font-weight: bold; color: red;">'."수직사위".'</span>'."의 유병률은 약9%로 추정됩니다. 수직편위의 기원은 3가지로 볼수 있습니다.  1. 선천성이거나 어릴 때 발생한 일치성 수직편위 : 편위각이 작고 진행되지 않습니다.  2. 선천선 제4뇌신경 마비로인한 수직편위 : 고열이나 외상으로 인해 드러나는 경우가 흔하고 오래된 상쇄되지 않은 편위입니다.  3. 최근에 발생한 제4뇌신경 마비로 인한 수직편위 : 혈관성이거나 감염성으로 인한 편위는 시간이 지나면서 줄어들고, 외상으로 인한 편위는 변화가 없는 편이며, 종양으로 인한 편위는 시간이 지나면서  흔히 악화됩니다.<br>\n";
                    echo "주로 안정피로, 간헐적인 흐림과 복시, 근거리 작업이나 독서시 한쪽 눈을 감는다, 독서시 같은 줄을 반복해서 읽거나 읽던 줄을 놓친다, 멀미등 임상적 증상을 호소합니다. <br>\n <br>\n";
                  } elseif ($Eva_result1 === "유아내사시") {
                    $EVA_TEST_1 = "안구협응기술과 융합력 ";
                    echo '<span style="font-weight: bold; color: red;">'."유아내사시".'</span>'."의 유병률은 내사시의 약 8%로 추정됩니다. 신경학적으로는 정상이지만 발달단계인 생후 6개월 이내에 내편위가 발생하는 상태로 이시기에 대부분의 유아는 정위로 발달합니다. 부모나 형제자매 중에서도 빈번하게 발생하고 대부분 편위각이 크고 항상성입니다. 교차주시를 동반하기도하여 양안시기능이 정상으로 발달하는데 심각한 장애가 됩니다. <br>\n <br>\n";
                  } elseif ($Eva_result1 === "조절성내사시") {
                    $EVA_TEST_1 = "안구협응기술과 융합력 ";
                    echo '<span style="font-weight: bold; color: red;">'."조절성내사시".'</span>'."의 유병률은 유년기에 발생하는 내사시의 약 50%로 추정됩니다. 왕성한 조절과 관련되는데 교정하지 않은 원시나 높은 AC/A비로 인해 안구의 내편위가 발생합니다. 다른 안구편위보다 발생기전이 잘 알려져 있고 치료나 관리방법도 쉬운 편입니다. 주로 1~7세의 근거리 물체를 주시하는데 관심을 갖기 시작하는 시기에 발생합니다.  <br>\n <br>\n";
                  } elseif ($Eva_result1 === "비조절성내사시") {
                    $EVA_TEST_1 = "안구협응기술과 융합력 ";
                    echo '<span style="font-weight: bold; color: red;">'."비조절성내사시".'</span>'."는 어린이 사시환자에서 두 번째로 흔한 내사시이고 내사시 환자의 약 10%에서 발생합니다. 생후 6개월 이후에 발달하고 조절과 관련이 없어 원시를 교정하거나 근거리 가입도를 처방하더라도 내사시가 교정되는 효과를 기대하기 어렵습니다.  <br>\n <br>\n";
                  } elseif ($Eva_result1 === "급성내사시") {
                    $EVA_TEST_1 = "안구협응기술과 융합력 ";
                    echo '<span style="font-weight: bold; color: red;">'."급성내사시".'</span>'."는 일반적으로 양안시 기능이 정상이었던 사람이 명백한 병인 없이 6세 이상 어린이나 청소년, 성인에서 갑자기 내편위가 발생합니다. 흔히 발생하는 갑작스런 복시는 종양이나 두부외상, 뇌수종, 동맥경화증 등의 생명을 위협하는 질병이 내재되거나 잠재되어있어 즉시 정밀검사를 받아야 합니다.   <br>\n <br>\n";
                  } elseif ($Eva_result1 === "물리적내사시") {
                    $EVA_TEST_1 = "안구협응기술과 융합력 ";
                    echo '<span style="font-weight: bold; color: red;">'."물리적내사시".'</span>'."는 안과 골절에 의한 외안근의 물리적 장애나, 외안근 섬유증이나 갑상선 근병증으로 인해 외안근의 수축이 제한되거나 당김에 의해 발생합니다. Duane증후군이 있는 일부 환자에서도 발생하고, 내전시에 안검열이 좁아지며 안구가 위나 아래롤 편위되기도 합니다.  <br>\n <br>\n";
                  } elseif ($Eva_result1 === "감각성내사시") {
                    $EVA_TEST_1 = "안구협응기술과 융합력 ";
                    echo '<span style="font-weight: bold; color: red;">'."감각성내사시".'</span>'."는 미교정 부동시, 단안백내장, 각막혼탁, 시신경위축, 황반부 질환 등과 같이 한쪽 눈에 시자극 결핍이나 외상으로 인해 감각성 융합이 결여되어 발생합니다. 대부분이 5세 이전에 발생하며 30%정도는 선천성 단안 백내장이나 외상성 단안 백내장에 의해 발생합니다. 선천성 백내장이 있는 신생아의 경우 정상적인 시력발달과 양안시기능 발달을 위하여 생후 6주~3개월 이내에 백내장을 제거해야 합니다.  <br>\n <br>\n";
                  } elseif ($Eva_result1 === "속발성내사시") {
                    $EVA_TEST_1 = "안구협응기술과 융합력 ";
                    echo '<span style="font-weight: bold; color: red;">'."속발성내사시".'</span>'."는 의인성으로 외사시의 수술적 과교정에 의해 발생합니다. 훈히 수직편위나 회선편위와 같은 안구운동이상을 동반합니다. 지속되면 나이가 어린 환자의 경우 약시와 억제발생으로 인해 양안시기능이 상실되고 성인의 경우 복시가 발생하기도 합니다.  <br>\n <br>\n";
                  } elseif ($Eva_result1 === "미세내사시") {
                    $EVA_TEST_1 = "안구협응기술과 융합력 ";
                    echo '<span style="font-weight: bold; color: red;">'."미세내사시".'</span>'."는 편위각이 10 미만으로 단안주시증후군이라 하기도 합니다. 3세이하에서 흔히 발생하고 편위각이 작아 종종 발견하지 못하기도 합니다. 흔히 약시를 동반할 위험이 높기 때문에 미세사시가 의심되면 즉시 정밀검진을 받아야 합니다.  <br>\n <br>\n";
                  }elseif ($Eva_result1 === "내사시") {
                    $EVA_TEST_1 = "안구협응기술과 융합력 ";
                    echo '<span style="font-weight: bold; color: red;">'."내사시".'</span>'."는 대부분 학령기 이전에 발생하는데 일반적으로 2~3세 사이 흔하고, 주로 항상성입니다. 간헐성내사시는 대부분의 경우 초기에 조절성 내사시나 상쇄되지 않은 내사위와 관련되어 발생합니다. 간헐적 조절성 내사시는 편위가 발생하는 시점에서 조절상태가 불안정하고, 교정하지 않으면 간헐성내사시는 항상성 내사시가 되는 경향이 있습니다.  <br>\n <br>\n";
                  } elseif ($Eva_result1 === "유아외사시") {
                    $EVA_TEST_1 = "안구협응기술과 융합력 ";
                    echo '<span style="font-weight: bold; color: red;">'."유아외사시".'</span>'."는 생후 6개월 이전에 발생하는 것으로, 유아내사시보다 발생률이 낮습니다. 대부분 편위각이 크고 항상성이기 때문에 정상 양안시발달을 심각하게 저해합니다. 또한 대부분의 경우 교대로 주시하는 교대성편위이기 때문에 약시가 드물게 발생합니다. <br>\n <br>\n";
                  } elseif ($Eva_result1 === "간헐성외사시(기본형)") {
                    $EVA_TEST_1 = "안구협응기술과 융합력 ";
                    echo '<span style="font-weight: bold; color: red;">'."간헐성외사시(기본형)".'</span>'."은 모든 간헐성외사시 환자의 약50%를 차지합니다. 어떨때는 복시나 억제, 이상망막대응을 보이지만 어떨 때에는 입체시도 좋으면서 양안의 안위정렬이 정상입니다. 다른 유형의 사시와 달리, 어린나이에 발생한 간헐성외사시의 교정시기가 늦어지더라도 영구적인 시각손상은 없는편 입니다. 그러나 교정하지 않으면, 시간이 지나면서 안구편위가 발생하는 시간이 증가하거나 편위량이 증가하여 간헐성외사시가 악화됩니다. <br>\n <br>\n";
                  } elseif ($Eva_result1 === "간헐성외사시(눈모임부족형)") {
                    $EVA_TEST_1 = "안구협응기술과 융합력 ";
                    echo '<span style="font-weight: bold; color: red;">'."간헐성외사시(눈모임부족형)".'</span>'."은 모든 간헐성외사시 환자의 약25%를 차지합니다. 어떨때는 복시나 억제, 이상망막대응을 보이지만 어떨 때에는 입체시도 좋으면서 양안의 안위정렬이 정상입니다. 다른 유형의 사시와 달리, 어린나이에 발생한 간헐성외사시의 교정시기가 늦어지더라도 영구적인 시각손상은 없는편 입니다. 그러나 교정하지 않으면, 시간이 지나면서 안구편위가 발생하는 시간이 증가하거나 편위량이 증가하여 간헐성외사시가 악화됩니다. 성인에서 발생하는 경우 주로 기본외사위 유형이나 눈모임부족형이 흔합니다.  <br>\n <br>\n";
                  } elseif ($Eva_result1 === "간헐성외사시(눈벌림과다형)") {
                    $EVA_TEST_1 = "안구협응기술과 융합력 ";
                    echo '<span style="font-weight: bold; color: red;">'."간헐성외사시(눈벌림과다형)".'</span>'."은 모든 간헐성외사시 환자의 약25%를 차지합니다. 어떨때는 복시나 억제, 이상망막대응을 보이지만 어떨 때에는 입체시도 좋으면서 양안의 안위정렬이 정상입니다. 다른 유형의 사시와 달리, 어린나이에 발생한 간헐성외사시의 교정시기가 늦어지더라도 영구적인 시각손상은 없는편 입니다. 그러나 교정하지 않으면, 시간이 지나면서 안구편위가 발생하는 시간이 증가하거나 편위량이 증가하여 간헐성외사시가 악화됩니다. 어린이에서 발생하는 경우 눈벌림과다형이 흔하며, 원거리를 주시하거나 밝은 태양아래에서 한쪽 눈을 감는경우가 많습니다.  <br>\n <br>\n";
                  } elseif ($Eva_result1 === "급성외사시") {
                    $EVA_TEST_1 = "안구협응기술과 융합력 ";
                    echo '<span style="font-weight: bold; color: red;">'."급성외사시".'</span>'."는 일반적으로 양안시기능이 정상이었던 사람이 명백한 병인 없이 6세이상의 어린이나 청소년, 성인에서 갑자기 외편위가 발생하는 상태로, 주로 상쇄되지 않은 외사위나 후천성 동안신경마비, 후천성 물리적 외사시와 관련되어 발생합니다. 심각한 기저 질환의 가능성이 있기 때문에 즉시 정밀진단을 해야합니다.   <br>\n <br>\n";
                  } elseif ($Eva_result1 === "물리적외사시") {
                    $EVA_TEST_1 = "안구협응기술과 융합력 ";
                    echo '<span style="font-weight: bold; color: red;">'."물리적외사시".'</span>'."는 안과 골절에 의한 외안근의 물리적 장애나, 외안근 섬유증이나 갑상선 근병증으로 인해 외안근의 수축이 제한되거나 당김에 의해 발생합니다. Duane증후군이 있는 일부 환자에서도 발생하고, 내전시에 안검열이 좁아지며 안구가 안와내로 빨려 들어가는 것처럼 보이며 안구가 위나 아래롤 편위되기도 합니다.  <br>\n <br>\n";
                  } elseif ($Eva_result1 === "감각성외사시") {
                    $EVA_TEST_1 = "안구협응기술과 융합력 ";
                    echo '<span style="font-weight: bold; color: red;">'."감각서외사시".'</span>'."는 미교정 부동시, 단안백내장, 각막혼탁, 시신경위축, 황반부 질환 등과 같이 한쪽 눈에 시자극 결핍이나 외상으로 인해 감각성 융합이 결여되어 발생합니다. 어린이와 성인 모두에서 발생하지만. 어린이보다 성인에서 흔하게 발생합니다. 성인에서 많이 발생하는 이유는 나이가 증가하면서 긴장성눈모임의 상대적인 감소에 의한 것으로 추정됩니다. <br>\n <br>\n";
                  } elseif ($Eva_result1 === "속발성외사시") {
                    $EVA_TEST_1 = "안구협응기술과 융합력 ";
                    echo '<span style="font-weight: bold; color: red;">'."속발성외사시".'</span>'."는 의인성으로 내사시의 수술적 과교정에 의해 발생합니다. 편위된 눈이 약시이거나 양안시기능이 저하되거나, 내직근기능저하, 과다한 원시성굴절이상일 경우 시간이 지나면서 점진적으로 내사시에서 외사시로 진행하기도 합니다. 복시가 발생하지 않는 한, 치료가 시급하지는 않으며 성인기에 발생하면 복시가 흔히 나타나고 억제는 잘 나타나지 않습니다.  <br>\n <br>\n";
                  } elseif ($Eva_result1 === "미세외사시") {
                    $EVA_TEST_1 = "안구협응기술과 융합력 ";
                    echo '<span style="font-weight: bold; color: red;">'."미세외사시".'</span>'."는 항상성외사시가 10 미만인 상태입니다. 편위각이 작아 종종 발견하지 못하기도 합니다. 흔히 약시를 동반할 위험이 높기 때문에 미세사시가 의심되면 즉시 정밀검진을 받아야 합니다.  <br>\n <br>\n";
                  }elseif ($Eva_result1 === "외사시") {
                    $EVA_TEST_1 = "안구협응기술과 융합력 ";
                    echo '<span style="font-weight: bold; color: red;">'."외사시".'</span>'."는 어린이 대상으로한 연구결과 내사시가 외사시보다 3~5배 더 많이 발생하는것으로 보고되는데 전연령을 대상으로하면 외사시가 내사시보다 2배높은 것으로 보고되었습니다. 이것은 실제 외사시가 더 빈번하게 발생하는 50대 이상의 성인에서 유병률이 높기 때문입니다.   <br>\n <br>\n";
                  }




                  if ($Eva_result2 === "조절부족/조절지속능력부족") {
                    $EVA_TEST_2 = "초점기술, 초점유지기술";
                    echo '<span style="font-weight: bold; color: red;">'."조절부족/조절지속능력부족".'</span>'."은 조절이상 중에서 가장 흔한 이상으로 미국의 경우, 어린이와 성인의 약 3~5%에서 발생하고 있는 것으로 추정됩니다. 국내의 경우 조절부족은 조절이상과 버전스이상이 있는 어린이의 약 18%에서 나타나고 있습니다.<br>\n";
                    echo "주로 독서나 근거리 업무와 관련된 증상으로 노안과 관련된 증상과 매우 유사합니다. 가까운 거리가 흐려보이고 독서가 어려움, 두통, 집중도와 이해력 저하, 눈이 따갑고 불편함등 임상적 증상을 호소합니다. <br>\n <br>\n";
                  } if ($Eva_result2 === "조절과다(조절경련)") {
                    $EVA_TEST_2 = "초점기술, 초점유지기술";
                    echo '<span style="font-weight: bold; color: red;">'."조절과다(조절경련)".'</span>'."은 국내의 경우 조절이상과 버전스이상이 있는 어린이의 약 4%에서 나타나고 있습니다. 조절과다는 요구되는 시자극보다 조절작용이 과다하게 일어나 조절이완이 어려운 상태입니다. 원인은 미교정 원시, 과다한 근거리업무로 인한 조절피로, 포도막염, 정서이상, 뇌조양, 외상, 축동제 부작용등이 있습니다.<br>\n";
                    echo "주로 원거리 주시물체가 흐려보임, 근거리 업무시 안정피로와 두통, 안통, 잦은 시력변화로 안경을 자주 교체하는등 원/근거리 영역에 불편함을 호소합니다.<br>\n <br>\n";
                  } if ($Eva_result2 === "조절용이부족") {
                    $EVA_TEST_2 = "초점기술, 초점유지기술";
                    echo '<span style="font-weight: bold; color: red;">'."조절용이부족".'</span>'."은 국내의 경우 조절이상과 버전스이상이 있는 어린이의 약 13%에서 나타나고 있습니다. <br>\n";
                    echo "주로 근거리 업무를 장시간 하다가 원거리 물체를 보거나, 원거리 업무를 장시간 하다가 근거리 물체를 보면 흐려보임, 근거리 업무시 안정피로와 간헐적인 흐려보임, 독서시 집중도와 이해력 저하등 원/근거리 영역에 불편함을 호소합니다. <br>\n <br>\n";
                  }
                  if ($Eva_result3 === "안구운동이상") {
                    $EVA_TEST_3 = ", 안정적인 주시능력";
                    echo '<span style="font-weight: bold; color: red;">'."안구운동이상".'</span>'."은 독립적으로 존재하기 보다는 조절이상과 버전스이상, 시지각이상과 동반되어 발생하는 것으로 나타나 유병률이 상대적으로 높은 편입니다. <br>\n";
                    echo "주로 과다한 머리움직임, 독서시 속도가 느리고 집중도와 이해력이 저하, 운전이나 스포츠 수행능력이 불량, 읽던위치를 놓침, 칠판의 글씨를 노트에 옮겨쓰기가 어려움등 불편함을 호소합니다. <br>\n <br>\n";

                  }
                } else {
                  echo "● 양안시기능평가결과 특이사항 없음.<br>\n <br>\n";
                }

                // TVPS 종합결과
                if (($RAW_SCORE_DIS === "평가하지 않음") || ($RAW_SCORE_MEM === "평가하지 않음") || ($RAW_SCORE_SPA === "평가하지 않음") || ($RAW_SCORE_CON === "평가하지 않음") || ($RAW_SCORE_SEQ === "평가하지 않음") || ($RAW_SCORE_FGR === "평가하지 않음") || ($RAW_SCORE_CLO === "평가하지 않음")) {
                  echo "● 시지각기술은 평가하지 않음.<br>\n <br>\n";
                } else {
                  $TVPS4_TEST = "시지각기술";
                  if ($PERCENTILE_B3 <= 16 || $PERCENTILE_B3 == "<1"){
                    echo "● 전체 시지각기술이 ".'<span style="font-weight: bold; color: red;">'.$PERCENTILE_B3."%".'</span>'."로 ".'<span style="font-weight: bold; color: red;">'." 매우 저조".'</span>'."합니다.<br>\n";
                    echo " 시지각기술에 이상이 있는 경우 한글 자음/ 영어 알파벳 학습이 지연될 수 있고, 기본적인 수학문제를 푸는게 어렵습니다. 유사하게 보이는 문자와 단어를 혼동할 수 있고 시각적 과제를 어려워 할 수 있습니다.<br>\n <br>\n";
                  }elseif ($PERCENTILE_B3 <= 50) {
                    echo "● 전체 시지각기술이 ".'<span style="font-weight: bold; color: blue;">'.$PERCENTILE_B3."%".'</span>'."로 정상범위이나".'<span style="font-weight: bold; color: blue;">'." 다소 부족".'</span>'."합니다.<br>\n";
                    echo " 시지각기술에 이상이 있는 경우 한글 자음/ 영어 알파벳 학습이 지연될 수 있고, 기본적인 수학문제를 푸는게 어렵습니다. 유사하게 보이는 문자와 단어를 혼동할 수 있고 시각적 과제를 어려워 할 수 있습니다.<br>\n <br>\n";
                  }elseif ($PERCENTILE_B3 <= 84) {
                    echo "● 전체 시지각기술이 ".$PERCENTILE_B3."% 로 정상범위로 양호합니다.<br>\n <br>\n";
                  }elseif ($PERCENTILE_B3 > 84) {
                    echo "● 전체 시지각기술이 ".$PERCENTILE_B3."% 로 우수합니다.<br>\n <br>\n";
                  }
                }


                // VMI 종합결과
                if (($Raw_vmi === "평가하지 않음") || ($Raw_visual === "평가하지 않음") || ($Raw_motor === "평가하지 않음")){
                  echo "● 시각운동통합기술은 평가하지 않음.<br>\n <br>\n";
                } else {
                  $VMI_TEST = "시각운동통합기술";
                  if ($VMI_PERCENTILE <= 16 || $VMI_PERCENTILE == "<1"){
                      echo "● 시각운동통합기술이 ".'<span style="font-weight: bold; color: red;">'.$VMI_PERCENTILE."%".'</span>'."로 ".'<span style="font-weight: bold; color: red;">'." 매우 저조".'</span>'."합니다.<br>\n";
                      echo " 시각운동통합기술에 이상이 있는 경우 칠판글씨를 보고 따라 쓰는데 어려움이 있고, 글씨 쓰기가 지연되거나 실수가 많을 수 있습니다. 글씨를 거꾸로 쓰거나 바꾸어 쓸수 있고 글자 간격이나 정렬상태가 좋지 않습니다. 글씨를 쓸때 공책을 지나치게 회전하거나 연필잡는 것이 서투릅니다.<br>\n <br>\n";
                  }elseif ($VMI_PERCENTILE <= 50) {
                      echo "● 시각운동통합기술이 ".'<span style="font-weight: bold; color: blue;">'.$VMI_PERCENTILE."%".'</span>'."로 정상범위이나".'<span style="font-weight: bold; color: blue;">'." 다소 부족".'</span>'."합니다.<br>\n";
                        echo " 시각운동통합기술에 이상이 있는 경우 칠판글씨를 보고 따라 쓰는데 어려움이 있고, 글씨 쓰기가 지연되거나 실수가 많을 수 있습니다. 글씨를 거꾸로 쓰거나 바꾸어 쓸수 있고 글자 간격이나 정렬상태가 좋지 않습니다. 글씨를 쓸때 공책을 지나치게 회전하거나 연필잡는 것이 서투릅니다.<br>\n <br>\n";
                  }elseif ($VMI_PERCENTILE <= 84) {
                      echo "● 시각운동통합기술이 ".$VMI_PERCENTILE."% 로 정상범위로 양호합니다.<br>\n";
                  }elseif ($VMI_PERCENTILE > 84) {
                      echo "● 시각운동통합기술이 ".$VMI_PERCENTILE."% 로 우수합니다.<br>\n";
                  }
                }


                // DEM 종합평가
                if (($VER_Adj_time === "평가하지 않음") || ($HOR_Adj_time === "평가하지 않음")){
                  echo "● 말하는 속도의 자동성기술은 평가하지 않음.<br>\n <br>\n";
                } else {
                  $DEM_TEST = "말하는 속도의 자동성기술";
                  if ($DEM_RATIO_PER <= 15 || $DEM_RATIO_PER == '<1' ){
                    if ($DEM_VER_PER <=15 ||  $DEM_VER_PER == '<1' ) {
                      if ($DEM_HOR_PER <= 15 || $DEM_HOR_PER == '<1')
                      echo "● 말하는 속도의 자동성기술이 ".'<span style="font-weight: bold; color: red;">'."안구운동이상(II유형)과 자동성이상(III유형)이 동반된 유형".'</span>'."입니다.<br>\n";
                      echo " 이러한 경우 책을 유창하게 읽는데 어려움이 있고 단어 인식이 불완전해 독해력이 떨어집니다. 책을 읽을 때 읽던 위치를 놓치거나 줄을 건너뛰기도 하며 읽던 위치를 놓치지 않기 위해 손가락을 사용하기도 합니다. <br>\n <br>\n";
                    } else {
                      echo "● 말하는 속도의 자동성기술이 ".'<span style="font-weight: bold; color: red;">'."안구운동이상을 나타내는 유형".'</span>'."입니다.<br>\n";
                      echo " 이러한 경우 홱보기도 불량할 수 있어, 읽은 내용의 이해를 위해 반복적으로 읽어야 하고, 책을 읽을 때 머리나 몸을 과다하게 움직이기도 합니다. 읽던 위치를 놓치지 않기 위해 손가락을 사용하기도 하며 주의집중 시간이 짧습니다. 글자가 움직여 보이거나 섞여져 보이기도합니다. 물체가 두 개로 보이거나 어지러움, 메스꺼움과 같은 증상을 동반하기도 합니다.<br>\n <br>\n";
                    }
                  }else {
                    if ($DEM_VER_PER >=15 && $DEM_HOR_PER >= 15){
                      echo "● 말하는 속도의 자동성기술과 안구운동기능이 정상인 유형입니다.<br>\n <br>\n";
                    } else {
                      echo "● 말하는 속도의 자동성기술이 ".'<span style="font-weight: bold; color: red;">'."자동성에 문제가 있는 유형".'</span>'."입니다.<br>\n";
                      echo " 이러한 경우 책을 유창하게 읽는데 어려움이 있고 단어 인식이 불완전해 독해력이 떨어집니다.<br>\n <br>\n";

                    }
                  }
                }

                // WACS 종합평가
                if (($WACS_RAW_T1 === "평가하지 않음") || ($WACS_RAW_T2 === "평가하지 않음") || ($WACS_RAW_T3 === "평가하지 않음") || ($WACS_RAW_T4 === "평가하지 않음")) {
                  echo "● 시각공간방향기술은 평가하지 않음.<br>\n <br>\n";
                } else {
                  $WACS_TEST = "시각공간방향기술";
                  if ($WACS_T5_PER <= 16 || $WACS_T5_PER == "<1"){
                    echo "● 시각공간방향기술이 ".'<span style="font-weight: bold; color: red;">'.$WACS_T5_PER."%".'</span>'."로 ".'<span style="font-weight: bold; color: red;">'." 매우 저조".'</span>'."합니다.<br>\n";
                    echo " 이러한 경우 대근육 운동기술의 발달이 지연되고, 좌우 신체협응이나 신체균형, 구기종목 기술이 떨어집니다. 글자를 쓰거나 읽을때 거꾸로 하는 경향이 많고 신체중심선을 가로지르는 활동이 여렵습니다.<br>\n <br>\n";

                  }elseif ($WACS_T5_PER <= 50) {
                    echo "● 시각운동통합기술이 ".'<span style="font-weight: bold; color: blue;">'.$WACS_T5_PER."%".'</span>'."로 정상범위이나".'<span style="font-weight: bold; color: blue;">'." 다소 부족".'</span>'."합니다.<br>\n";
                    echo " 이러한 경우 대근육 운동기술의 발달이 지연되고, 좌우 신체협응이나 신체균형, 구기종목 기술이 떨어집니다. 글자를 쓰거나 읽을때 거꾸로 하는 경향이 많고 신체중심선을 가로지르는 활동이 여렵습니다.<br>\n <br>\n";


                  }elseif ($WACS_T5_PER <= 84) {
                    echo "● 시각운동통합기술이 ".$WACS_T5_PER."% 로 정상범위로 양호합니다.<br>\n <br>\n";

                  }elseif ($WACS_T5_PER > 84) {
                    echo "● 시각운동통합기술이 ".$WACS_T5_PER."% 로 우수합니다.<br>\n <br>\n";
                  }
                }


                // △,sph 보정값
              //  if ($D_BIBO == 'BI') {
                //  if ($N_BIBO == 'BI') {
                  //  $ACA = (($PD/10)+((-$Nectopic)-(-$Dectopic))/2.5);
                  //  $Nprism = round((((2*$Nectopic)-($NConver2))/3),2);
                  //  $Dprism = round((((2*$Dectopic)-($DConver2))/3),2);
                  //  $Sph_cha = round(((((2*$Nectopic)-($NConver2))/3)/(($PD/10)+((-$Nectopic)-(-$Dectopic))/2.5)),2);
                //  } else if ($N_BIBO == 'BO') {
                //    $ACA = (($PD/10)+(($Nectopic)-(-$Dectopic))/2.5);
              //      $Nprism = round(((2*$Nectopic)-($NDever2))/3);
                //    $Dprism = round(((2*$Dectopic)-($DConver2))/3);
              //      $Sph_cha = round((((2*$Nectopic)-($NDever2))/3)/(($PD/10)+(($Nectopic)-(-$Dectopic))/2.5));
                //  }
              //  } elseif ($D_BIBO == 'BO'){
            //      if($N_BIBO == 'BO') {
            //        $ACA = (($PD/10)+(($Nectopic)-($Dectopic))/2.5);
            //        $Nprism = round(((2*$Nectopic)-($NDever2))/3);
              //      $Dprism = round(((2*$Dectopic)-($DDever2))/3);
            //        $Sph_cha = round((((2*$Nectopic)-($NDever2))/3)/(($PD/10)+($Nectopic-$Dectopic)/2.5));
            //      } else if ($N_BIBO == 'BI') {
            //        $ACA = (($PD/10)+(($Nectopic)-(-$Dectopic))/2.5);
            //        $Nprism = round(((2*$Nectopic)-($NConver2))/3);
            //        $Dprism = round(((2*$Dectopic)-($DConver2))/3);
            //        $Sph_cha = round((((2*$Nectopic)-($NConver2))/3)/(($PD/10)+((-$Nectopic)-($Dectopic))/2.5));
          //        }
            //    }
//


                // 해결방법
                if ((empty($Eva_result1)  === false ) || (empty($Eva_result2)  === false ) || (empty($Eva_result3)  === false )  ){

                  if ($Eva_result1 === "눈모임부족") {
                    echo "♣ 눈모임부족의 관리계획 및 처치 순서는 <br>\n 1.굴절이상교정<br>\n 2.시기능훈련<br>\n 3.렌즈 또는 프리즘 : 프리즘은 시기능훈련이 시간적, 경제적으로 어려운 경우에 차선책으로 선택하는데, 편위가 크면서 프리즘 적응현상이 없는 경우에만 효과적입니다.<br>\n 4.AC/A비 : 1/".$ACA."<br>\n 5.원거리와 근거리의 프리즘보정값 : ".$Dprism." / ".$Nprism."<br>\n 6.구면굴절력 변화값 : ".$Sph_cha."D가 추천됨."."<br>\n <br>\n";
                  } elseif ($Eva_result1 === "눈모임과다") {
                    echo "♣ 눈모임과다의 관리계획 및 처치 순서는 <br>\n 1.원시일 경우 반드시 굴절이상교정 <br>\n 2.근거리 플러스렌즈 가입도사용 :".(((2*$Nectopic)-($NDever2))/3)/(($PD/10)+(($Nectopic)-($Dectopic))/2.5)."<br>\n 3.시기능훈련<br>\n 4.프리즘 : 프리즘은 시기능훈련이 시간적, 경제적으로 어려운 경우에 차선책으로 선택합니다.<br>\n <br>\n";
                  } elseif ($Eva_result1 === "눈벌림부족") {
                    echo "♣ 눈벌림부족의 관리계획 및 처치 순서는 <br>\n 1.굴절이상교정 <br>\n 2.시기능훈련 : 교정효과가 높다. <br>\n 3.원용프리즘보정 <br>\n * 뇌종양이나 신경손상으로 인한 후천성 눈벌림부족과 구분해야함. <br>\n - 후천성 눈벌림부족 : 주로 어린나이에 갑작스럽게 발생하고, 뇌종양이나 신경손상이 원인입니다. <br>\n - 기능성 눈벌림부족 : 오래전부터 지속적인 증상이 있습니다.<br>\n <br>\n";
                  } elseif ($Eva_result1 === "눈벌림과다") {
                    echo "♣ 눈벌림과다의 관리계획 및 처치 순서는 <br>\n 1.굴절이상교정 <br>\n 2.시기능훈련 : 원거리와 근거리 모두 교정이 잘됨. <br>\n 3.의사소통이 어려운 경우, 수동적 처방 : 차폐, 마이너스렌즈교정, BI프리즘 <br>\n 4.수술을 고려할 수 있습니다.<br>\n <br>\n";
                  } elseif ($Eva_result1 === "기본외사위") {
                    echo "♣ 기본외사위의 관리계획 및 처치 순서는 <br>\n 1.굴절이상교정 <br>\n 2.시기능훈련 : 훈련은 일반적으로 근거리에서 시작하여 원거리로 이동합니다. <br>\n 3.프리즘 : BI프리즘은 시기능훈련이 시간적, 경제적으로 어려운 경우에 차선책으로 선택하는데, 편위가 크면서 프리즘 적응현상이 없는 경우에만 효과적입니다.<br>\n <br>\n";
                  } elseif ($Eva_result1 === "기본내사위") {
                    echo "♣ 기본내사위의 관리계획 및 처치 순서는 <br>\n 1.굴절이상교정 <br>\n 2.프리즘 : 증상을 완화시키는 최소한의 프리즘사용 <br>\n 3.시기능훈련을 고려할 수 있습니다.<br>\n <br>\n";
                  } elseif ($Eva_result1 === "융합버전스이상") {
                    echo "♣ 융합버전스이상의 관리계획 및 처치 순서는 <br>\n 1.굴절이상교정 <br>\n 2.시기능훈련을 고려할 수 있습니다.<br>\n <br>\n";
                  } elseif ($Eva_result1 === "수직사위") {
                    echo "♣ 수직사위의 관리계획 및 처치 순서는 <br>\n 1.굴절이상교정 <br>\n 2.프리즘 <br>\n 3.시기능훈련을 고려할 수 있습니다.<br>\n <br>\n";
                  } elseif ($Eva_result1 === "유아내사시") {
                    echo "♣ 유아내사시의 관리계획 및 처치 순서는 <br>\n 1.조절마비 굴절검사 : 조절요인의 확인을 위해 실시하며, 대부분의 경우 원시를 교정하더라도 내사시가 감소하지 않습니다. <br>\n 2.시기능훈련 : 초기에는 차폐치료를 하고 안경을 사용할 수 있는 나이에는 양비측차폐화 시기능훈련을 병행합니다. <br>\n 3.수술 : 편위각이 크고 비조절성인 경우 수술을 고려할 수 있습니다.<br>\n <br>\n";
                  } elseif ($Eva_result1 === "조절성내사시") {
                    echo "♣ 조절성내사시의 관리계획 및 처치 순서는 <br>\n 1.굴절이상교정 : 원시교정 안경으로 원근거리의 내사시를 정렬할 수 있는데 원거리는 정렬되지만 근거리에서 남아있다면 가입도렌즈를 처방합니다. <br>\n 2.시기능훈련  <br>\n 3.프리즘   <br>\n 4. 수술 <br>\n <br>\n";
                  } elseif ($Eva_result1 === "비조절성내사시") {
                    echo "♣ 비조절성내사시의 관리계획 및 처치 순서는 <br>\n 1.굴절이상교정 <br>\n 2.시기능훈련 : 훈련은 일반적으로 근거리에서 시작하여 원거리로 이동합니다. <br>\n 3.프리즘 : BO프리즘은 시기능훈련이 시간적, 경제적으로 어려운 경우에 차선책으로 선택하는데, 편위가 크면서 프리즘 적응현상이 없는 경우에만 효과적입니다. <br>\n 4.수술<br>\n <br>\n";
                  } elseif ($Eva_result1 === "급성내사시") {
                    echo "♣ 급성내사시의 관리계획 및 처치 순서는 <br>\n 1.정밀검사 <br>\n 2.시기능훈련 : 훈련은 일반적으로 근거리에서 시작하여 원거리로 이동합니다. <br>\n 3.프리즘 : BO프리즘은 시기능훈련이 시간적, 경제적으로 어려운 경우에 차선책으로 선택하는데, 편위가 크면서 프리즘 적응현상이 없는 경우에만 효과적입니다. <br>\n 4.수술<br>\n <br>\n";
                  } elseif ($Eva_result1 === "물리적내사시") {
                    echo "♣ 물리적내사시의 관리계획 및 처치 순서는 <br>\n 1.정밀검사 : 질병에 의해 유발되는 마비성사시와 구별하기 위해 즉시 받아야합니다. <br>\n 2.시기능훈련  <br>\n 3.프리즘 : 고개돌림이 작을 경우 고려할 수 있습니다.  <br>\n 4.수술 : 고개돌림이 클경우 미용목적으로 수술을 고려할 수 있지만, 수술이 내사시를 향상시키지는 못합니다.<br>\n <br>\n";
                  } elseif ($Eva_result1 === "감각성내사시") {
                    echo "♣ 감각성내사시의 교정 및 관리는 <br>\n - 선천성 단안 백내장으로 인해 감각서 내사시가 발생한 경우 : 생후 2개월 이내에 백내장을 제거해야 합니다. <br>\n - 백내자을 제거한 후, 콘택트렌즈 처방이나 안내렌즈 삽입, 약시제거를 위해 차폐치료를 할 수 있습니다.  <br>\n - 융합력이 있다면 프리즘을 처방하거나, 내사시가 크다면 수술을 고려할 수 있습니다.  <br>\n - 모든 치료법을 사용해도 양안시 회복을 기대하기 어렵습니다. <br>\n <br>\n";
                  } elseif ($Eva_result1 === "속발성내사시") {
                    echo "♣ 속발성내사시의 교정 및 관리는 <br>\n - 어린이의 경우 약시로 진행하거나 양안시기능 상실을 방지하기 위하여 렌즈와 프리즘, 시기능훈련을 이용하여 적극적으로 교정해야 합니다. <br>\n - 성인의 경우, 흔히 복시를 호소하며 렌즈와 프리즘, 시기능훈련을 이용하여 적극적인 교정이 요구됩니다. <br>\n <br>\n";
                  } elseif ($Eva_result1 === "미세내사시") {
                    echo "♣ 미세내사시의 교정 및 관리는 <br>\n - 미세사시는 완전히 적응된 사시로 거의 증상을 호소하지 않습니다. <br>\n - 치료는 굴절이상 교정과 약시가 있다면 약시를 교정하는 것입니다.  <br>\n - 시기능훈련과 프리즘을 사용하여 두 눈의 중심와 융합을 회복하여 고도의 입체시가 가능하도록 할 수 있습니다. <br>\n <br>\n";
                  } elseif ($Eva_result1 === "내사시") {
                    echo "♣ 내사시의 교정 및 관리는  <br>\n 1.굴절이상교정 <br>\n 2.시기능훈련 : 훈련은 일반적으로 근거리에서 시작하여 원거리로 이동합니다. <br>\n 3.프리즘 : BO프리즘은 시기능훈련이 시간적, 경제적으로 어려운 경우에 차선책으로 선택하는데, 편위가 크면서 프리즘 적응현상이 없는 경우에만 효과적입니다. <br>\n 4.수술을 고려할수 있습니다. <br>\n <br>\n";
                  } elseif ($Eva_result1 === "유아외사시") {
                    echo "♣ 유아외사시의 교정 및 관리는 <br>\n - 외사시가 크고 항상성이기 때문에 수술을 고려합니다. <br>\n - 융합잠재성이 낮은 경우, 프리즘교정은 도움이 되지 않습니다.  <br>\n - 유아외사시는 유아내사시보다 융합을 유지할 확률이 낮은 편입니다. <br>\n <br>\n";
                  } elseif ($Eva_result1 === "간헐성외사시(기본형)") {
                    echo "♣ 간헐성외사시(기본형)의 교정 및 관리는 <br>\n - 마이너스렌즈치료 : 근시와 부동시, 난시는 완전교정하고, 원시는 어린이 환자의 경우 저교정합니다. 초기 처방렌즈는 주로 2D이고 융합이 유지되는 상태를 평가하여 마이너스 굴절력을 점차 줄여나갑니다. 마이너스렌즈 과교정 기법을 사용한 치료 성공율은 약70%이고, 시기능훈련과 병행하면 치료효과가 상승합니다. <br>\n
                     - 프리즘 치료 : 간헐성외사시의 프리즘 치료 성공률은 약28%로 시기능훈련과 병행하기도 합니다.  <br>\n - 시기능훈련 : 융합범위와 융합용이 증진, 복시인지, 바이오피드백등 다양한 시기능훈련을 통해 양안시를 회복시키는 방법입니다. 성공률은 약59%입니다.  <br>\n -수술치료 : 다른 치료법을 모두 시도한 후에도 간헐성외사시가 지속되거나 사시각이 증가할 경우 수술을 고려할 수 있습니다. 4세 이전에 수술을 권장하지 않는데 이유는 약시와 입체시 상실을 동반하는 지속되는 속발성내사시의 발생위험이 크기 때문입니다.  <br>\n -수술후 재발률이 높은 편인데 약5명당 1명이 재수술을 받고 있고, 성공률은 약 46%입니다. <br>\n <br>\n";
                  } elseif ($Eva_result1 === "간헐성외사시(눈모임부족형)") {
                    echo "♣ 간헐성외사시(눈모임부족형)의 교정 및 관리는 <br>\n - 마이너스렌즈치료 : 근시와 부동시, 난시는 완전교정하고, 원시는 어린이 환자의 경우 저교정합니다. 초기 처방렌즈는 주로 2D이고 융합이 유지되는 상태를 평가하여 마이너스 굴절력을 점차 줄여나갑니다. 마이너스렌즈 과교정 기법을 사용한 치료 성공율은 약70%이고, 시기능훈련과 병행하면 치료효과가 상승합니다. <br>\n
                     - 프리즘 치료 : 간헐성외사시의 프리즘 치료 성공률은 약28%로 시기능훈련과 병행하기도 합니다.  <br>\n - 시기능훈련 : 융합범위와 융합용이 증진, 복시인지, 바이오피드백등 다양한 시기능훈련을 통해 양안시를 회복시키는 방법입니다. 성공률은 약59%입니다.  <br>\n -수술치료 : 다른 치료법을 모두 시도한 후에도 간헐성외사시가 지속되거나 사시각이 증가할 경우 수술을 고려할 수 있습니다. 4세 이전에 수술을 권장하지 않는데 이유는 약시와 입체시 상실을 동반하는 지속되는 속발성내사시의 발생위험이 크기 때문입니다.  <br>\n -수술후 재발률이 높은 편인데 약5명당 1명이 재수술을 받고 있고, 성공률은 약 46%입니다. <br>\n <br>\n";
                  } elseif ($Eva_result1 === "간헐성외사시(눈벌림과다형)") {
                    echo "♣ 간헐성외사시(눈벌림과다형)의 교정 및 관리는 <br>\n - 마이너스렌즈치료 : 근시와 부동시, 난시는 완전교정하고, 원시는 어린이 환자의 경우 저교정합니다. 초기 처방렌즈는 주로 2D이고 융합이 유지되는 상태를 평가하여 마이너스 굴절력을 점차 줄여나갑니다. 마이너스렌즈 과교정 기법을 사용한 치료 성공율은 약70%이고, 시기능훈련과 병행하면 치료효과가 상승합니다. <br>\n
                     - 프리즘 치료 : 간헐성외사시의 프리즘 치료 성공률은 약28%로 시기능훈련과 병행하기도 합니다.  <br>\n - 시기능훈련 : 융합범위와 융합용이 증진, 복시인지, 바이오피드백등 다양한 시기능훈련을 통해 양안시를 회복시키는 방법입니다. 성공률은 약59%입니다.  <br>\n -수술치료 : 다른 치료법을 모두 시도한 후에도 간헐성외사시가 지속되거나 사시각이 증가할 경우 수술을 고려할 수 있습니다. 4세 이전에 수술을 권장하지 않는데 이유는 약시와 입체시 상실을 동반하는 지속되는 속발성내사시의 발생위험이 크기 때문입니다.  <br>\n -수술후 재발률이 높은 편인데 약5명당 1명이 재수술을 받고 있고, 성공률은 약 46%입니다. <br>\n <br>\n";
                  } elseif ($Eva_result1 === "급성외사시") {
                    echo "♣ 급성외사시의 관리계획 및 처치 순서는 <br>\n 1.정밀검사 <br>\n 2.프리즘 : 복시를 제거하고, 양안시를 회복하기 위하여 중등도 이하의 편위를 교정하기 위하여 프리즘을 처방할 수 있습니다. <br>\n 3.시기능훈련 : 융합버전스 범위와 융합용이를 증진시키기 위하여 시기능훈련을 처방할 수 있습니다. <br>\n 4.수술 : 항상성외사시가 20 이상이고 미용적으로 좋지 않은 경우 수술을 고려할 수 있습니다.  <br>\n - 외사시의 원인이 혈관성이거나 당뇨와 같은 허혈성인 경우 예후가 양호하고, 외상과 관련된 경우 예후가 좋지 않습니다. <br>\n <br>\n";
                  } elseif ($Eva_result1 === "물리적외사시") {
                    echo "♣ 물리적외사시의 교정 및 관리는 <br>\n 1.정밀검사 : 질병에 의해 유발되는 마비성사시와 구별하기 위해 즉시 받아야합니다. <br>\n 2.시기능훈련  <br>\n 3.프리즘 : 고개돌림이 작을 경우 고려할 수 있습니다.  <br>\n 4.수술 : 고개돌림이 클경우 미용목적으로 수술을 고려할 수 있지만, 수술이 외사시를 향상시키지는 못합니다.<br>\n <br>\n";
                  } elseif ($Eva_result1 === "감각성외사시") {
                    echo "♣ 감각성외사시의 교정 및 관리는 <br>\n - 선천성 단안 백내장으로 인해 감각성외사시가 발생한 경우 : 생후 2개월 이내에 백내장을 제거해야 합니다. <br>\n - 백내장을 제거한 후, 콘택트렌즈 처방이나 안내렌즈 삽입, 약시제거를 위해 차폐치료를 할 수 있습니다.  <br>\n - 융합력이 있다면 프리즘을 처방하거나, 외사시가 크다면 수술을 고려할 수 있습니다.  <br>\n - 선천성감각외사시는 모든 치료법을 사용해도 양안시 회복을 기대하기 어렵습니다. <br>\n <br>\n";
                  } elseif ($Eva_result1 === "속발성외사시") {
                    echo "♣ 속발성외사시의 교정 및 관리는 <br>\n - 광학적으로 유발된 속발성 외사시는 어린이 환자의 경우, 원시굴절력을 감소시켜 교정할 수 있습니다. <br>\n - 성인의 경우, 원시굴절력을 감소시키면 조절피로를 호소할 수 있어 프리즘이나 시기능훈련을 고려할 수 있습니다. <br>\n <br>\n";
                  } elseif ($Eva_result1 === "미세외사시") {
                    echo "♣ 미세외사시의 교정 및 관리는 <br>\n - 미세사시는 완전히 적응된 사시로 거의 증상을 호소하지 않습니다. <br>\n - 치료는 굴절이상 교정과 약시가 있다면 약시를 교정하는 것입니다.  <br>\n - 시기능훈련과 프리즘을 사용하여 두 눈의 중심와 융합을 회복하여 고도의 입체시가 가능하도록 할 수 있습니다. <br>\n <br>\n";
                  } elseif ($Eva_result1 === "외사시") {
                    echo "♣ 외사시의 교정 및 관리는 <br>\n - 마이너스렌즈치료 : 근시와 부동시, 난시는 완전교정하고, 원시는 어린이 환자의 경우 저교정합니다. 초기 처방렌즈는 주로 2D이고 융합이 유지되는 상태를 평가하여 마이너스 굴절력을 점차 줄여나갑니다. 마이너스렌즈 과교정 기법을 사용한 치료 성공율은 약70%이고, 시기능훈련과 병행하면 치료효과가 상승합니다. <br>\n
                     - 프리즘 치료 : 간헐성외사시의 프리즘 치료 성공률은 약28%로 시기능훈련과 병행하기도 합니다.  <br>\n - 시기능훈련 : 융합범위와 융합용이 증진, 복시인지, 바이오피드백등 다양한 시기능훈련을 통해 양안시를 회복시키는 방법입니다. 성공률은 약59%입니다.  <br>\n -수술치료 : 다른 치료법을 모두 시도한 후에도 간헐성외사시가 지속되거나 사시각이 증가할 경우 수술을 고려할 수 있습니다. 4세 이전에 수술을 권장하지 않는데 이유는 약시와 입체시 상실을 동반하는 지속되는 속발성내사시의 발생위험이 크기 때문입니다.  <br>\n -수술후 재발률이 높은 편인데 약5명당 1명이 재수술을 받고 있고, 성공률은 약 46%입니다. <br>\n <br>\n";
                  }


                  if ($Eva_result2 === "조절부족/조절지속능력부족") {
                    echo "♣ 조절부족 / 조절지속능력부족의 관리계획 및 처치 순서는  <br>\n 1.굴절이상 교정 <br>\n 2.시기능훈련 <br>\n 3.플러스렌즈 가입도를 고려할 수 있습니다.<br>\n <br>\n";
                  } if ($Eva_result2 === "조절과다(조절경련)") {
                    echo "♣ 조절과다(조절경련)의 관리계획 및 처치 순서는  <br>\n 1.굴절이상 교정 <br>\n 2.플러스렌즈 가입도 + 시기능훈련 <br>\n 3.조절마비제를 고려할 수 있습니다.<br>\n <br>\n";
                  } if ($Eva_result2 === "조절용이부족") {
                    echo "♣ 조절용이부족의 관리계획 및 처치 순서는 <br>\n 1.굴절이상 교정  <br>\n 2.시기능훈련 <br>\n 3.플러스렌즈를 고려할 수 있습니다.<br>\n <br>\n";
                  }
                  if ($Eva_result3 === "안구운동이상") {
                    echo "♣ 안구운동이상의 관리계획 및 처치 순서는 <br>\n 1.굴절이상 교정  <br>\n 2.시기능훈련 <br>\n 3.플러스렌즈 가입도(조절이상이나 버전스이상과 동반됨)를 고려할 수 있습니다.<br>\n <br>\n";

                  }
                }


                if (empty($EVA_TEST_1)){
                  $EVA_TEST_1 = "";
                }
                if (empty($EVA_TEST_2)){
                  $EVA_TEST_2 = "";
                }
                if (empty($EVA_TEST_3)){
                  $EVA_TEST_3 = "";
                }
                if (empty($TVPS4_TEST)){
                  $TVPS4_TEST = "";
                }
                if (empty($VMI_TEST)){
                  $VMI_TEST = "";
                }
                if (empty($DEM_TEST)){
                  $DEM_TEST = "";
                }
                if (empty($WACS_TEST)){
                  $WACS_TEST = "";
                }

                if ((empty($EVA_TEST_1)  === false ) || (empty($EVA_TEST_2)  === false ) || (empty($EVA_TEST_3)  === false ) || (empty($TVPS4_TEST)  === false ) || (empty($VMI_TEST)  === false ) || (empty($DEM_TEST)  === false ) || (empty($WACS_TEST)  === false ) ){
                  echo "♣ ".$Cus_Name."님의 ".$EVA_TEST_1." ".$EVA_TEST_2." ".$EVA_TEST_3." ".$TVPS4_TEST." ".$VMI_TEST." ".$DEM_TEST." ".$WACS_TEST." 을 발달시키기 위하여 시기능훈련이 권장됩니다.<br>\n <br>\n";
                }





                 ?>



              </td>

            </tr>

          </table>
        </tr>
          <td>
            <button onclick="return window.print();">프린트하기</button>
          </td>
        <tr>
          <td height="10px">&nbsp</td>
        </tr>
        <tr>

        </tr>

      </table>
    </form>
  </body>
</html>
