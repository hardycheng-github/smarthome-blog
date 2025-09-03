[🧾去選單](../../README.md)

> 發布於 2025/09/03

# 閒聊系列：關於Zigbee與Thread多協議韌體的可靠性

### 多協議韌體的崛起

對於新世代的**Thread協議**，要額外準備一個昂貴的適配器是令人卻步的主因

對此，幾年前曾興起了**多協議支援**（Multi-Protocol）的熱潮

適用在**Silabs EFR32MG**系列晶片，包含鼎鼎大名的**SONOFF ZBDongle-E**

只要刷入專用的**MultiPAN（多協議）韌體**就可以讓一個無線模組同時支援**Zigbee**、**Thread**雙協議

非常美好的軟體解決方案，專治各種貧窮病（開玩笑的）

### 跌落神壇

不過很快的，各種問題開始浮現，有開發者開始反對此種做法

原因類似於**ESPHome**的**ESP32**走**WiFi**就不建議同時作為**BT Proxy**使用

避免**WiFi**與**BT**在韌體中同時搶占一支天線資源，從而導致資料遺漏問題

以下是之前其中一個反對**Multi-Protocol**討論的貼文內容

https://github.com/darkxst/silabs-firmware-builder/discussions/41

而後在**Home Assistant**的官方產品**SkyConnect**刷**MultiPAN**的各種問題浮現後

**HA社群**決定不再推薦**Multi-Protocol**的作法，並移除了**MultiPAN韌體**的相關資源

（資源還在，只是不再簡單的能夠取得相關說明與使用方式）

社群明確的表示強烈不建議玩家們使用單個天線去共享雙協議資源

從此以後MultiPAN韌體成了少數DIY玩家自行研究與實驗的方案

### SONOFF用數據說話

不過在今年7月時，**Multi-Protocol**可能又再迎來新的曙光

**SONOFF**官方發布了一則相關的文章

https://sonoff.tech/blogs/news/multiprotocol-is-not-dead-zbdongle-e-revives-zigbee-thread-potential

標題明確的指出多協議並未死亡（**Multiprotocol is not dead**）

他們使用自家的**ZBDongle-E**刷成**MultiPAN**韌體

進行了一場關於**Multi-Protocol**的壓力測試實驗

在長達五個星期的壓力測試下，多協議非常成功且穩定

並連接大量的**Zigbee**、**Thread**裝置，同時記錄人工與自動化的操作成功率

以最終數據來說，**Multi-Protocol**還是相當穩定的方案

因此**SONOFF**官方聲稱多協議還能再戰未來

並表明他們會積極與**Silicon Labs**合作改進**MultiPAN韌體**

非常適合剛入門的或預算有限的玩家讓HA同時支援**Zigbee**與**Thread**裝置

### 如何測試MultiPAN

不幸的是，**Multi-Protocol**不再被**Home Assistant**社群推薦

所以**MultiPAN韌體**的資源與相關文章正確性已經不再可靠

如果你有**SONOFF**的**EFR32MG**相關產品（如**ZBDongle-E**）

可以透過**SONOFF**官方文章資源來刷寫**MultiPAN**並測試

- 如何在**ZBDongle-E**使用**MultiPAN韌體**的說明文章

https://sonoff.tech/blogs/news/how-to-use-multipan-in-home-assistant-with-sonoff-zbdongle-e

- **SONOFF**韌體線上刷寫工具

https://dongle.sonoff.tech/sonoff-dongle-flasher/

## 免責聲明

產品會因為環境、系統相容性、版本型號、公差導致不同的使用者體驗，文章敘述僅為資訊分享，本人不為任何產品良率背書

[🧾去選單](../../README.md)