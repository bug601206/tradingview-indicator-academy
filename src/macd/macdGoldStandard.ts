export const journeySections=[['macd-quick','30秒懂'],['macd-visual','看懂圖'],['macd-causal','原理'],['macd-formula','公式'],['macd-parameters','參數'],['macd-reading','訊號解讀'],['macd-regimes','行情環境'],['macd-strategies','策略'],['macd-relationships','搭配指標'],['macd-failure','失效情況'],['macd-myths','常見錯誤'],['macd-advanced','進階理解'],['macd-sources','來源']] as const;
export const visualLessons=[
  {id:'bullish',title:'A｜Bullish crossover 多頭交叉',focus:'MACD 上穿 Signal，Histogram 由負值朝正值轉換。',math:'快慢 EMA 的差開始比它自己的訊號平滑上升得更快。',meaning:'常被解讀為正向動能關係改善。',warning:'交叉只描述均線差的變化；盤整中可能下一根又反轉。'},
  {id:'bearish',title:'B｜Bearish crossover 空頭交叉',focus:'MACD 下穿 Signal，Histogram 由正值朝負值轉換。',math:'快慢 EMA 的差開始弱於它自己的訊號平滑。',meaning:'常被解讀為正向動能減弱或負向動能增加。',warning:'不等於價格必跌；先看零軸與價格結構。'},
  {id:'zeroUp',title:'C｜Zero-line crossover 零軸交叉',focus:'MACD 穿越零軸。',math:'零軸上方代表 Fast EMA > Slow EMA；下方則相反。',meaning:'描述兩種平滑價格水準的相對次序改變。',warning:'零軸交叉通常比價格轉折晚，因兩條 EMA 都有滯後。'},
  {id:'expansion',title:'D｜Histogram expansion 柱體擴張',focus:'柱體絕對值連續增加。',math:'MACD 與 Signal 的距離擴大。',meaning:'均線差相對其訊號平滑正在加速分離。',warning:'擴張描述當下，不保證下一段仍會擴張。'},
  {id:'contraction',title:'E｜Histogram contraction 柱體收縮',focus:'柱體仍在同側，但逐步靠近零。',math:'MACD 與 Signal 的差正在縮小。',meaning:'現有方向動能關係減弱，可能先於 line crossover。',warning:'收縮不等於反轉；也可能只是趨勢中的休息。'},
  {id:'bullishDivergence',title:'F｜Bullish divergence 多頭背離',focus:'價格形成較低低點，MACD 形成較高低點。',math:'價格創低，但快慢 EMA 的負向分離沒有同步擴大。',meaning:'下跌動能關係減弱，可作風險警告。',warning:'背離可以延伸多次；等待價格結構確認。'},
  {id:'bearishDivergence',title:'G｜Bearish divergence 空頭背離',focus:'價格形成較高高點，MACD 形成較低高點。',math:'價格創高，但快慢 EMA 的正向分離沒有同步擴大。',meaning:'上漲動能關係減弱。',warning:'強趨勢可在背離後繼續創高。'},
  {id:'range',title:'H｜Range whipsaw 盤整洗價',focus:'MACD 與 Signal 在零軸附近反覆交叉。',math:'Fast 與 Slow EMA 太接近，微小價格擺動便改變兩者差值。',meaning:'市場缺乏持續方向，交叉資訊品質下降。',warning:'機械交易每次交叉容易連續小虧。'},
] as const;
export const readingChecklist=['MACD 在零軸上方還是下方？','MACD 在 Signal 上方還是下方？','Histogram 正在擴張還是收縮？','價格處於趨勢還是區間？','動能是否確認價格結構？','價格與 MACD 是否出現背離？','還缺少什麼資訊：趨勢強度、波動或風險距離？'];
export const regimes=[
  ['強勢上升趨勢','MACD 多在零上，回撤時 Histogram 收縮，續漲時再擴張；bearish crossover 可能只是回撤。'],['強勢下降趨勢','MACD 多在零下，短暫上穿 Signal 未必反轉；需看價格結構。'],['橫盤','MACD 靠近零軸且交叉密集，whipsaw 風險最高。'],['趨勢轉換','Histogram 先收縮、line crossover、再到 zero crossover 是可能的順序，但並非固定劇本。'],['高波動','線與柱體幅度可能突然放大；MACD 沒有正規化，須搭配 ATR 理解幅度。'],['低波動','快慢 EMA 接近，細小波動也可能造成交叉；需等待結構或波動擴張。'],
] as const;
export const strategyFrameworks=[
  {title:'1｜MACD 趨勢跟隨交叉',purpose:'在已有方向背景中捕捉動能重新擴張。',regime:'有序趨勢',components:'MACD、價格結構',setup:'MACD 位於主要零軸側，Histogram 經歷回撤收縮。',entry:'同向 line crossover 且價格結構恢復。',confirmation:'突破回撤結構，而非只看交叉。',invalidation:'價格破壞趨勢結構或 MACD 轉到反向零軸側。',exit:'結構目標、Histogram 持續衰退或追蹤退出。',risk:'交叉滯後；風險距離應由價格結構決定。',why:'MACD 描述趨勢動能關係，價格結構提供實際行為確認。',failure:'區間中反覆交叉。',contribution:'MACD＝動能關係；價格＝原始結構。',redundancy:'低；兩者是衍生資訊與原始資訊的組合。'},
  {title:'2｜MACD＋高週期 EMA',purpose:'讓低週期執行與高週期方向一致。',regime:'多週期趨勢',components:'MACD、Higher-timeframe EMA',setup:'高週期 EMA 有明確斜率；低週期 MACD 回撤。',entry:'只評估與高週期 EMA 同向的 MACD 恢復。',confirmation:'低週期價格重新建立同向結構。',invalidation:'高週期 EMA 轉平且結構失效。',exit:'低週期動能衰退或高週期前提消失。',risk:'週期切換可能讓訊號延遲疊加。',why:'EMA 提供較長背景，MACD 提供較短動能變化。',failure:'高週期也在盤整或事件造成 regime 突變。',contribution:'EMA＝平滑方向；MACD＝快慢平滑差。',redundancy:'高；兩者都來自 EMA，不能當完全獨立確認。'},
  {title:'3｜MACD＋ADX/DMI',purpose:'只在方向性強度改善時使用 MACD 趨勢邏輯。',regime:'趨勢啟動或延續',components:'MACD、ADX、+DI/-DI',setup:'DI 方向與 MACD 零軸側一致，ADX 由低位回升。',entry:'MACD 動能恢復且價格確認。',confirmation:'ADX 上升表示方向性分離增加。',invalidation:'DI 優勢消失、ADX 下降且結構失效。',exit:'價格結構或 MACD/ADX 同時轉弱。',risk:'ADX 也滯後，雙重確認可能太晚。',why:'MACD 看均線差；ADX 看方向移動強度。',failure:'假突破可短暫推升兩者。',contribution:'MACD＝方向動能；ADX/DMI＝強度與方向移動。',redundancy:'中低；都屬趨勢資訊，但計算來源不同。'},
  {title:'4｜MACD 背離＋市場結構',purpose:'把背離當成警告，再由價格確認。',regime:'成熟趨勢或轉換',components:'MACD、swing high/low、支撐阻力',setup:'價格新極值，MACD 未同步。',entry:'等價格突破反向結構，不能只因背離進場。',confirmation:'重要水平被接受，Histogram 朝新方向擴張。',invalidation:'價格續創極值且 MACD 重新擴張。',exit:'下一結構區或動能再度失配。',risk:'背離可能延伸很久。',why:'背離偵測動能不確認，價格結構決定市場是否真的轉向。',failure:'強趨勢中的多次 premature divergence。',contribution:'MACD＝動能差；結構＝實際供需結果。',redundancy:'低。'},
  {title:'5｜MACD＋ATR 風險框架',purpose:'把方向動能與波動尺度分開處理。',regime:'趨勢與波動轉換',components:'MACD、ATR、價格結構',setup:'MACD 提供方向背景，ATR 顯示當前真實 range。',entry:'由 MACD/結構定 setup，ATR 不決定方向。',confirmation:'波動擴張與同向結構一致。',invalidation:'結構失效；距離按 ATR 與流動性預先定義。',exit:'ATR-based trailing 或結構退出。',risk:'gap/slippage 可超過 ATR 停損。',why:'兩者資訊差異大：方向動能＋波動幅度。',failure:'事件後 ATR 異常高、MACD 又因平滑反應較慢。',contribution:'MACD＝趨勢／動能；ATR＝風險價格尺度。',redundancy:'低，是五組中資訊最互補之一。'},
] as const;
export const relationships=[
  ['EMA','MACD 本身就是 Fast MA − Slow MA。','高度重疊：都來自平滑價格。','EMA 顯示價格尺度上的方向；MACD 顯示兩種平滑的差。','可用高週期 EMA 配低週期 MACD，但不要把多條相同週期 EMA 當獨立票數。'],
  ['RSI','RSI 比較平均漲跌並正規化至 0–100。','都描述價格動能，也都會出現背離。','RSI 有界且看漲跌平衡；MACD 無界且看均線差。','可互補，但若只是重複找「動能同向」，新增資訊有限。'],
  ['ADX/DMI','ADX/DMI 衡量方向移動與趨勢強度。','皆可提供趨勢背景。','ADX 不分多空強度；DMI 看方向；MACD 看均線差。','ADX 可過濾 MACD 在低方向性市場的交叉。'],
  ['ATR','ATR 衡量 gap-aware 真實波幅。','幾乎沒有方向資訊重疊。','MACD 看方向動能，ATR 看移動幅度。','高度互補：一個處理 setup，一個處理風險尺度。'],
] as const;
export const failures=[['盤整洗價','零軸附近交叉密集；先判斷 regime。'],['訊號太晚','EMA 與 Signal 都是平滑，確認必然付出延遲。'],['波動衝擊','單根事件會快速改變差值，但 Signal 跟不上；避免追逐第一根。'],['強趨勢誤判過度延伸','MACD 沒有固定超買超賣界線，極端值不代表必反轉。'],['背離持續','價格可在背離存在時繼續趨勢；等結構確認。'],['參數過度最佳化','在歷史資料挑出的「完美」組合可能只是 fitting。'],['機械交易每次交叉','交叉是狀態變化，不包含 regime、風險或市場結構。']] as const;
export const myths=[['黃金交叉＝一定漲','交叉只代表 MACD 相對 Signal 轉強；盤整中很容易失敗。'],['死亡交叉＝一定跌','它不包含支撐、趨勢背景與波動條件。'],['Histogram 變紅＝應該做空','顏色只編碼正負或變化；仍需看零軸、價格與平台配色定義。'],['背離＝馬上反轉','背離是動能不確認，可能持續多次。'],['MACD＋EMA＝兩個獨立確認','MACD 直接由移動平均構成，資訊高度相關。'],['12/26/9 是所有市場最佳參數','它是常用預設，不是跨市場與週期的自然常數。']] as const;
