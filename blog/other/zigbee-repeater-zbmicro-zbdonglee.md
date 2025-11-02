[🧾去選單](../../README.md)

> 發布於 2025/11/2

# 閒聊系列：ZBMicro與ZBDongle-E中繼能力比較

回應之前某社友的疑問

> 很久遠了，最近忙新家裝潢一直沒時間...

直覺上有獨立外部天線的裝置無線收發能力理應更佳

因此特別比較了SONOFF的兩款Zigbee裝置來比較中繼能力

分別是`ZBMicro原生中繼裝置`

另一款是`ZBDongle-E刷中繼器韌體`

結論超乎意料，**ZBMicro中繼效果更好**

## 實驗對象

- 一號參賽者：`SONOFF ZBMicro`

官方產品連結

https://sonoff.tech/products/sonoff-micro-zigbee-usb-smart-adaptor

![ZBMicro](http://sonoff.tech/cdn/shop/files/ZBMicro.png?width=480)

共兩個

韌體：`原廠1.0.5`

開啟**增強模式**

- 二號參賽者：`SONOFF ZBDongle-E`

官方產品連結

https://sonoff.tech/products/sonoff-zigbee-3-0-usb-dongle-plus-zbdongle-e

![ZBDongleE](https://sonoff.tech/cdn/shop/files/ZBDongle-P.png?width=480)

共一個

韌體：`Z3RouterUSBDonlge_EZNet6.10.3_V1.0.0.gbl`

## 實現環境

實驗於空曠的辦公室環境

測試位置與主機**直線距離約15公尺**

兩者之間沒有隔間牆與大型遮蔽物

> 用捲尺量長6米、寬14米，畢氏定理各位懂的

所有中繼器安裝在相同位置

## 測試結果

使用Z2M地圖功能查看

Zigbee訊號值範圍是0-255（數值越大訊號越佳）

結果跟預期不太一樣

ZBMicro兩顆訊號分別是**105**、**120**

ZBDongle-E則是**83**

![zbmicro_vs_zbdongle-e_mark](https://github.com/user-attachments/assets/2578e483-67f6-4c60-98df-d261291511d8)

觀察上圖的Zigbee網路圖連線數據可以發現

**開啟增強模式的ZBMicro整體收發Zigbee訊號的能力更佳**

## 結論

個人推論硬體上的天線能力有所保留

大概是為了因應各國的法規

無線射頻類產品的發射功率所有限制

至於ZBMicro的增強模式這邊就不多說明了

如果要使用Zigbee中繼（訊號放大）功能

ZBDongle-E似乎是糟糕的選擇

體積更大、外觀笨重、有獨立天線

缺乏增強模式，訊號收發比不上ZBMicro

官方價格比ZBMicro**貴約15%價格**左右

兩者都採用**USB Type-A 5V**供電

完全**沒必要**使用ZBDongle-E作用中繼

除非有特殊考量，例如手上有多餘的ZBDongle-E

## 個人小廣告

有在幫忙做淘寶代購智能產品

會配合淘寶的各大購物節調整預售價格

> 618、雙11、以及其他不定時出現的購物節

優惠價請參考預購商城，現貨通常不會調降

商城電子名片（預購/現貨/雜貨）

https://linktr.ee/hardy3c

## 免責聲明

個人的測試數據不代表官方立場，每批產品可能因後期改版而有所不同，請自行評估並選擇適合的產品

#HomeAssistant #Zigbee #Z2M #Repeater

[🧾去選單](../../README.md)

