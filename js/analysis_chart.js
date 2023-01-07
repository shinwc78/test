window.onload = function (){
  var TVPS_Chart = echarts.init(document.getElementById('TVPS_chart')); // echarts init 메소드로 id=chart인 DIV에 차트 초기화
    option_TVPS = {
      legend: {},
      tooltip: {},
      dataset: {
        source: [
          ['product', 'TVPS4 Percentile'],
          ['DIS', percentile_DIS],
          ['MEM', percentile_MEM],
          ['SPA', percentile_SPA],
          ['CON', percentile_CON],
          ['SEQ', percentile_SEQ],
          ['FGR', percentile_FGR],
          ['CLO', percentile_CLO],
          ['Total', PERCENTILE_B3]
        ]
      },
      xAxis: { type: 'category' },
      yAxis: {},
      series:[{type:'bar', showBackground: true, backgroundStyle: { color: 'rgba(220,220,220,0.8)'}}]
    };
    TVPS_Chart.setOption(option_TVPS); // 차트 디스플레이

    var VMI_Chart = echarts.init(document.getElementById('VMI_chart')); // echarts init 메소드로 id=chart인 DIV에 차트 초기화
      option_VMI = {
        legend: {},
        tooltip: {},
        dataset: {
          source: [
            ['product', 'VMI Percentile'],
            ['시각운동통합', VMI_PERCENTILE],
            ['시각인지기술', VISUAL_PERCENTILE],
            ['운동협응기술', MOTOR_PERCENTILE]
          ]
        },
        xAxis: { type: 'category' },
        yAxis: {},
        series:[{type:'bar', color: ['#dd6b66'], showBackground: true, backgroundStyle: { color: 'rgba(220,220,220,0.8)'}}]
      };
      VMI_Chart.setOption(option_VMI); // 차트 디스플레이

      var DEM_Chart = echarts.init(document.getElementById('DEM_chart')); // echarts init 메소드로 id=chart인 DIV에 차트 초기화
        option_DEM = {
          legend: {},
          tooltip: {},
          dataset: {
            source: [
              ['product', 'DEM Percentile'],
              ['조정된 수직시간', DEM_VER_PER],
              ['조정된 수평시간', DEM_HOR_PER],
              ['오류(ERROR)', DEM_ERR_PER],
              ['DEM비(ratio)', DEM_RATIO_PER]
            ]
          },
          xAxis: { type: 'category' },
          yAxis: {},
          series:[{type:'bar', color: ['#8dc1a9'], showBackground: true, backgroundStyle: { color: 'rgba(220,220,220,0.8)'}}]
        };
        DEM_Chart.setOption(option_DEM); // 차트 디스플레이

        var WACS_Chart = echarts.init(document.getElementById('WACS_chart')); // echarts init 메소드로 id=chart인 DIV에 차트 초기화
          option_WACS = {
            legend: {},
            tooltip: {},
            dataset: {
              source: [
                ['product', 'WACS Percentile'],
                ['물체식별', WACS_T1_PER],
                ['물체설계', WACS_T2_PER],
                ['그림설계', WACS_T3_PER],
                ['일반움직임', WACS_T4_PER],
                ['Total', WACS_T5_PER]
              ]
            },
            xAxis: { type: 'category' },
            yAxis: {},
            series:[{type:'bar', color: ['#ea7e53'], showBackground: true, backgroundStyle: { color: 'rgba(220,220,220,0.8)'}}]
          };
          WACS_Chart.setOption(option_WACS); // 차트 디스플레이






  }
