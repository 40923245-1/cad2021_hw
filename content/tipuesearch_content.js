var tipuesearch = {"pages": [{'title': 'About', 'text': '本學期的電腦輔助設計實習, 要求每一位學員根據本 HW template 的格式建立個人的作業倉儲與網頁. \n \n 40923245 \n 網站倉儲:  https://github.com/mdecourse/cad2021_hw \n 網站連結:  https://mde.tw/cad2021_hw \n 學期心得:這學期學到的程式及繪圖軟體都是新穎的，從來沒用過，並且還學習到了wink的使用，經過了組長以及同學還有老師的教誨，在這學期的功課都有盡全力去做，雖然可能有些進度並無完全達成，但還是會努力的。 \n', 'tags': '', 'url': 'About.html'}, {'title': 'Task', 'text': '', 'tags': '', 'url': 'Task.html'}, {'title': 'hwpage', 'text': '\n \n \n 40723126 \n \n \n 40723135 \n \n \n 40723217 \n \n \n 40732331 \n \n \n 40823114 \n \n \n 40823115 \n \n \n 40823117 \n \n \n 40823119 \n \n \n 40823122 \n \n \n 40823127 \n \n \n 40823146 \n \n \n 40823148 \n \n \n 40823215 \n \n \n 40871106 \n \n \n 40923201 \n \n \n 40923203 \n \n \n 40923204 \n \n \n 40923205 \n \n \n 40923206 \n \n \n 40923207 \n \n \n 40923208 \n \n \n 40923209 \n \n \n 40923210 \n \n \n 40923211 \n \n \n 40923212 \n \n \n 40923213 \n \n \n 40923214 \n \n \n 40923216 \n \n \n 40923217 \n \n \n 40923218 \n \n \n 40923219 \n \n \n 40923220 \n \n \n 40923221 \n \n \n 40923223 \n \n \n 40923224 \n \n \n 40923225 \n \n \n 40923226 \n \n \n 40923227 \n \n \n 40923228 \n \n \n 40923229 \n \n \n 40923230 \n \n \n 40923231 \n \n \n 40923232 \n \n \n 40923233 \n \n \n 40923234 \n \n \n 40923235 \n \n \n 40923236 \n \n \n 40923237 \n \n \n 40923238 \n \n \n 40923239 \n \n \n 40923240 \n \n \n 40923241 \n \n \n 40923242 \n \n \n 40923243 \n \n \n 40923244 \n \n \n 40923245 \n \n \n 40923246 \n \n \n 40923247 \n \n \n 40923248 \n \n \n 40923249 \n \n \n 40923250 \n \n \n 40923251 \n \n \n 40923252 \n \n \n 40923253 \n \n \n 40971220 \n \n \n 40971227 \n \n \n \n HW1 \n HW1 佔學期成績 25% \n HW1 必須在 2021.11.10 22:00 之前完成. \n HW1 具體項目成果回報區 將於 2021.09.23 開啟, 於  2021.11.10 22:00 關閉. \n 作業一: meArm Robot 零件繪圖與機電運動模擬場景製作 \n Step1 : 下載  meARM.7z  這個包含尚未完成組立的 meArm Robot 場景與雷射切割零件組立手冊. \n meArm_75-0040_v1.pdf  則是另外一本組立參考手冊. \n Step2 : 從課程網頁中的  Compile CoppeliaSim 頁面 , 下載  coppeliaSim 4.1.0 官方版與 MSYS2 編譯版.7z  (檔案大小 412 MB, 解開壓縮後 1GB) 可攜套件. \n Step3 : 在 HW1 中, 要求每一位學員透過程式亂數分配 (兩班實際亂數分配結果以上課時點擊下列按鈕所得結果為準) 所使用的兩套參數式 CAD 套件, 從軟體發展緣起開始進行介紹,\xa0 經過教育版軟體套件檔案的取得, 下載安裝以及配置使用. 根據 Step1 中的零件尺寸, 逐一完成 meArm Robot 各零件繪製與組立. 並將零件 匯入  CoppeliaSim 進行組裝配置後, 以  UI 介面 中的 slider 控制 meArm Robot 各軸的旋轉作動. \n 2b CAD 套件分配結果:  https://mde.tw/cad2021/downloads/online/2b_hw1_cad.txt \n 附件: \n 1. CAD 套件分配表: \n sw: Solidworks, inv: Inventor, nx: NX12, ons: Onshape, slvs: Solvespace \n 2a 套件亂數分配結果 \n 2b 套件亂數分配結果 \n 2. 在兩套 CAD 完成零件繪圖並轉入 CoppeliaSim 後, 為了建立 Dynamic Model 必須利用  shape edit modes  轉為  clean model , 並與實際轉入的 STL 格式零件外形結合應用後建立模擬場景 (scenes). \n 3. meARM Robot  動態模擬場景 的建構, 可參考  0 ,  1 ,  2 ,  3 ,  4 ,  5 ,  6 ,  7 , 也可參考  Uarm Robot model  與相關 影片 . \n 4. CoppeliaSim design dynamic simulations  說明頁面 . \n 5.  網際 Lua  程式執行. \n 6.  meArm.slvs ,  meArm_in_solvespace.slvs \n 7. UI 介面程式參考: \n function closeEventHandler(h)\n    sim.addLog(sim.verbosity_scriptinfos,\'Window \'..h..\' is closing...\')\n    simUI.hide(h)\nend\n\nfunction joint1_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta1 set to \'..newVal)\n    sim.setJointTargetPosition(joint1, newVal*deg)\nend\n\nfunction joint2_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta2 set to \'..newVal)\n    sim.setJointTargetPosition(joint2, newVal*deg)\nend\n\nfunction joint3_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta3 set to \'..newVal)\n    sim.setJointTargetPosition(joint3, newVal*deg)\nend\n\nfunction joint16_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta16 set to \'..newVal)\n    sim.setJointTargetPosition(joint16, newVal*deg)\n    sim.setJointTargetPosition(joint20, -newVal*deg)\nend\n\nfunction sysCall_init()\n    -- do some initialization here\n    joint1 = sim.getObjectHandle(\'motor1\')\n    joint2 = sim.getObjectHandle(\'motor2\')\n    joint3 = sim.getObjectHandle(\'motor3\')\n    joint16 = sim.getObjectHandle(\'motor16\')\n    joint20 = sim.getObjectHandle(\'motor20\')\n    i = 0\n    deg = math.pi/180\n    print(i)\n    xml = [[\n<ui closeable="true" on-close="closeEventHandler" resizable="true">\n    <label text="This is a demo of the CustomUI plugin. Browse through the tabs below to explore all the widgets that can be created with the plugin." wordwrap="true" />\n    <tabs>\n        <tab title="Numeric">a\n            <label text="Sliders can be oriented horizontally or vertically, and have optional properties that can be set (in the XML) such as minimum and maximum value." wordwrap="true" />\n            <label text="" id="3000" wordwrap="true" />\n            <label text="theta1" /> <hslider tick-position="above" tick-interval="1" \n            minimum="0" maximum="360" on-change="joint1_rotate" />\n            <label text="theta2" /> <hslider tick-position="above" tick-interval="1" \n            minimum="-90" maximum="65" on-change="joint2_rotate" />\n            <label text="theta3" /> <hslider tick-position="above" tick-interval="1" \n            minimum="-90" maximum="185" on-change="joint3_rotate" />\n            <label text="theta16" /> <hslider tick-position="above" tick-interval="1" \n            minimum="0" maximum="15" on-change="joint16_rotate" />\n        </tab>\n    </tabs>\n</ui>\n]]\n    ui=simUI.create(xml)\n    \nend \n \n (From:  2016_ADDITIVE MANUFACTURING PROCESSES FOR FABRICATING A MINI ROBOT - COMPUTATIONAL MODELS AND EXPERIMENTAL RESULTS.pdf ) \n \n', 'tags': '', 'url': 'hwpage.html'}, {'title': '運動場景', 'text': '', 'tags': '', 'url': '運動場景.html'}, {'title': 'HW1', 'text': '', 'tags': '', 'url': 'HW1.html'}, {'title': 'Onshape 繪圖', 'text': 'Onshape緣起說明與介紹 \n Onshape is the first and only product development platform that delivers professional-grade CAD capabilities with integrated data management, powering more agile design processes at lower costs. With Onshape, you are now free to innovate while simultaneously collaborating with other stakeholders, without fear of design stalls, system crashes, or data losses. Ever. \n Built natively for the cloud, Onshape untethers you from the limits of file-based CAD design processes, giving you the freedom to create on any device, anytime, anywhere. \n Onshape是一種Full Cloud的網路CAD設計平台，可以在maker開發完自己的想法時使用，但是如果想導入企業中，可能需要點時間，尤其老牌或比較大的企業可能需要的時間更久，因Onshape的優點，在反面來看也是它的缺點。雖然鼓勵開放想法可以利用群眾的力量達到更好的想法與作品，供大家使用，但憑良心講，這很困難。 \n 機構跟產品設計的圖面其實看到只是一個簡單的3D圖面，並沒有多困難，但後面可能花費數十年，以及很多的金錢與心力才完成，不清楚的人可能看不懂，知道的人一眼就能看出重點，這對大部份企業來說會很傷。所以他們會希望這重要的“資產”放在自己可以控管的”地方“，而不是”雲“或”網路上“，這需要時間去改變。 \n 但Onshape可以使有這專長的人分享他解決問題的專長，而保留他的重點知識，這有點八股，但有時”重點知識“不是我們的，而我們只是正好知道的人。 \n 現在各國在進行知識、教育或基礎建設的未來發展上，目前大多在於軟體方面，但有一件事實是，軟體發展雖有無限的可能性，但會受限於硬體與機構的發展，像Google推出SketchUp雖不能滿足大部份的需求，但你看Google地圖上的立體建築物有多少，就可發現它的成果。即使Google地圖上面的3D跟實物不是很精準，但用途其實比我們想像中的大。 \n 所以如果在程式設計外，再加上Onshape的部份圖說與製作的教育跟推廣，我們可以想像有更多人將提升解決自身或產業需求的能力，而不用像現在始終受限在工業化生產的框框裏。 \n \n', 'tags': '', 'url': 'Onshape 繪圖.html'}, {'title': 'Onshape安裝配置', 'text': '\n 至Onshape網站上註冊及登入，即可使用!!! \n Onshape網站 \n', 'tags': '', 'url': 'Onshape安裝配置.html'}, {'title': 'Onshape操作流程', 'text': 'Onshape零組件繪圖教學影片 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020 \xa0 零組件繪圖教學影片」且加上 語音說明 與 字幕. \n Onshape 零組件繪圖操作流程影片 ( Youtube ) \n Onshape 零組件繪圖教學影片 (Wink) \n \n', 'tags': '', 'url': 'Onshape操作流程.html'}, {'title': 'Solvespace繪圖', 'text': 'Solvespace 緣起說明與介紹: \n 用戶界面由兩個窗口組成：一個主要包含圖形的較大窗口和一個主要包含文本的較小窗口。 圖形窗口用於繪製幾何圖形和查看 3d 模型。 文本窗口提供有關模型的信息，也可用於修改設置和數值參數。 \n', 'tags': '', 'url': 'Solvespace繪圖.html'}, {'title': 'Solvespace安裝配置', 'text': '在 Windows  ，不需要安裝。 下載solvespace.exe並立即運行。 要繼續使用 SolveSpace，請將 solvespace.exe 保存在方便的地方。 為了在多核處理器上獲得更高的性能。 \n 詳情請參考 網站 \n', 'tags': '', 'url': 'Solvespace安裝配置.html'}, {'title': 'solvespace操作流程', 'text': 'Solvespace 零組件繪圖操作流程影片 (Youtube) \n Solvespace 零組件繪圖教學影片 (Wink) \n Solvespace 零組件繪圖教學影片 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020  零組件繪圖教學影片」且加上 語音說明 與 字幕. \n', 'tags': '', 'url': 'solvespace操作流程.html'}, {'title': 'w13', 'text': '\n \n \n \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w13.html'}, {'title': 'HW1-1', 'text': 'HW1-1 佔學期成績 15% \n HW1-1 必須在 2021.12.01 22:00 之前完成. \n HW1-1 具體項目成果回報區 將於 2021.11.18 開啟, 於  2021.12.01 22:00 關閉. \n 作業 1-1: Mirobot 機械手臂場景組合 \n 說明: meArm Robot 有四個自由度, 請根據 HW1 的零組件繪製組立與 CoppeliaSim 運動場景模擬, 延伸至  Task1-1  中六個自由度的 Mirobot 機械手臂. \n mirobot_part1_to_part5.7z  為取自 \xa0 https://github.com/wlkata/Mirobot-STL  的參考零件. 請利用場景中 Mirobot STL 零件, 組合為可以透過  UI 介面 中的 slider 控制各軸作動旋轉的運動模型. \n 請根據  Task1-1  中的說明, 完成各項指定任務. \n', 'tags': '', 'url': 'HW1-1.html'}, {'title': 'W11', 'text': '', 'tags': '', 'url': 'W11.html'}, {'title': 'H2', 'text': '四連桿零件尺寸圖: 連結 \n \n 四連桿零件+組合(ONS): 連結 \n 四連桿作動(Coppeliasim): \n \n \n \n', 'tags': '', 'url': 'H2.html'}, {'title': 'HW2', 'text': 'HW2 佔學期成績 20% \n HW2 必須在 2021.12.22 22:00 之前完成. \n HW2 具體項目成果回報區 將於 2021.12.09 開啟, 於  2021.12.22 22:00 關閉. \n meArm 逆向運動學與網際參數式 CAD API 結合應用. \n 請將  https://github.com/mdecourse/meArm  中的 meArm Robot 逆向運動學程式, 改為 Lua 與 Python 程式, 使能套用至 HW1 所完成的 CoppeliaSim meArm 運動模擬場景. 並分別採 Lua, Legacy remote API 及 Bluezero remote API 逆向運動的方式進行控制. \n 請利用  Task2  中的 Solidworks, Inventor 與 NX API 程式控制 meArm Robot 零組件尺寸, 說明並討論如何透過網際程式控制 meArm Robot 的零件尺寸, 並結合上述逆向運動學程式庫, 使得自動化機電產品開發流程更容易滿足客製化需求. \n 參考: \n 2016_ADDITIVE MANUFACTURING PROCESSES FOR FABRICATING A MINI ROBOT - COMPUTATIONAL MODELS AND EXPERIMENTAL RESULTS.pdf \n Robot Manipulator Control with Inverse Kinematics PD-Pseudoinverse Jacobian and Forward Kinematics Denavit Hartenber.pdf \n KINEMATIC ANALYSIS FOR ROBOT ARM.pdf \n https://codebender.cc/user/MeArm \n https://github.com/mdecourse/meArmPi \n /downloads/MeArmPiTechnicalOverviewV0-3DRAFT.pdf \n https://github.com/mdecourse/me-arm-ik \n https://github.com/mdecourse/mearm_model \n https://courses.ece.cornell.edu/ece5990/ECE5725_Fall2016_Projects/pas324_ml634/index.html \n https://github.com/mdecourse/InefficientSkittleSorter \n https://mearm.com \n', 'tags': '', 'url': 'HW2.html'}, {'title': 'HW3', 'text': 'HW3 為選項作業. \n HW3 具體項目成果回報區 將於 2021.12.09 開啟, 於  2022.01.05 22:00 關閉 \n https://mde.tw/cad2021/content/Task3.html \xa0 \n https://mde.tw/cad2021/content/Task4.html \n https://mde.tw/cad2021/content/Task5.html \n https://mde.tw/cad2021/content/Task6.html \n https://mde.tw/cad2021/content/Task7.html \n 請從上列 Tasks 中自行選擇項目內容完成 HW3. \n', 'tags': '', 'url': 'HW3.html'}, {'title': 'Final Project', 'text': 'Final Project 佔學期成績 40% \n 2a 與 2b 必須在 2022.01.06 上課之前完成 Final Project \n Final Project 具體項目成果回報區 將於 2021.12.09 開啟, 於  2022.01.05 22:00 關閉 \n 彈性製造系統場景設計與製作 \n 請從  https://github.com/mdecourse/scenes  與  https://github.com/mdecourse/models  中選擇場景或模型, 配合  cad2021_textbook.pdf  (登入 @gm 帳號後下載) 教材中的內容, 自選製作與組立產品, 組合成一個 Flexible Manufacturing System 系統場景. \n 彈性製造系統內容說明 \n 範例: \n \n \n', 'tags': '', 'url': 'Final Project.html'}, {'title': '期末1', 'text': 'Onshape零件繪製+組裝 \n \n CoppeliaSim作動 \n \n 心得:這次的功課學到了如何運用CoppeliaSim及裡面的Dummy，在不太熟悉的情況下問了班上實力較強的同學以及組長，幫助了我許多，希望之後的我能夠越來越順利並且熟能生巧。也因為這次的功課使我更加熟悉Onshape \n \n', 'tags': '', 'url': '期末1.html'}, {'title': '期末2', 'text': 'Onshape零件繪製(零件圖+繪製過程): \n \n \n \n 零件組裝: \n \n \n \n Coppeliasim作動: \n \n 心得:這件零件我比上次更佳的熟練操作方法，希望日後能循序漸進地將所有作品完成 \n \n', 'tags': '', 'url': '期末2.html'}, {'title': '期末總結', 'text': '第一階段:零件繪製 \n https://cad.onshape.com/documents/45faf1df255a7c7c0474e01f/w/8f7a9ec1ddfd4df2941899a7/e/2b483d91f9f5267dcbe94d88 \n https://cad.onshape.com/documents/13e5c3a0a8d6b2686b0e6778/w/5fb78cbab9c77f829bed4233/e/59ee08deb20d884bcfb0ac24 \n https://cad.onshape.com/documents/0ea61102b356df2772bde28d/w/cb32f3078e2b71157fe7bb69/e/784d895a4959bc1bcc9abdfd \n https://cad.onshape.com/documents/d5352011f2eb4d472bad1a99/w/16416a3fd92438615ea01d9b/e/a6e6c455b2ff64887770adeb \n https://cad.onshape.com/documents/45b394b19e350b32b49b4db2/w/11ef3f629666e58bb598a55a/e/a920661b4dbaffa59594c00b \n https://cad.onshape.com/documents/aa9c8d15172d682c8d4e95db/w/a5cd4db51c1dadcda042cb16/e/e56c0d5f6be4dd2081adf28b \n https://cad.onshape.com/documents/183c09185134c08765fbbd22/w/f67a5bce63aae5176ca91a88/e/8aa2564b460b66be1dc7f7b7 \n https://cad.onshape.com/documents/028675840837dd21cdb28b31/w/26c0f89cb9d6951b0064b601/e/b86c1a19518e8282003a066a \n https://cad.onshape.com/documents/43f9e1ee9c3b351d2b0fc7f0/w/91327c50db17643d64696a6e/e/b86fdf100d981b8763a27d01 \n https://cad.onshape.com/documents/9a8b178bda398dd223e36f15/w/eb06206fe47cef5bc6579dea/e/786a8bbb39b6ca08c3e10e7c \n https://cad.onshape.com/documents/028675840837dd21cdb28b31/w/26c0f89cb9d6951b0064b601/e/b86c1a19518e8282003a066a \n https://cad.onshape.com/documents/7826b575b6562b95a675f1d3/w/d1667f04d906bc88c1dc5b61/e/178d08ee1c24e84359563c04 \n https://cad.onshape.com/documents/3fcb9e1fca6115832d910f0e/w/04e168f5b09e7b8b9b2aef88/e/a4df2a98237823170eb10647 \n https://cad.onshape.com/documents/5a02c7dc4ab1d82e5d353431/w/3d74ed62298cdcf2f6d798bc/e/76732df4c51c5d25582efbac \n https://cad.onshape.com/documents/a2ccbc2809b7b7cd8a61bde2/w/fd6939db49c1c1c2d7130df1/e/9a738bfbc3dddd4055c5b40e \n https://cad.onshape.com/documents/e5afe26c849fd6b6237ec460/w/fa07bea457dd88a462f9638b/e/e5d6d639f148e512f3a7e09e \n https://cad.onshape.com/documents/f7dfe9184b7b26c333a3981a/w/cd9b2a376624485b93dffb93/e/32786477bfb1f58a8326bd4f \n https://cad.onshape.com/documents/2a23b60a121f25d9fc8564e0/w/2e8fe5943640ba6aa0d6c1d0/e/ac04c9d390555a60d1f690aa \n https://cad.onshape.com/documents/3e118e1cbf6795df9673693d/w/9a3dc00e8007cefeae6ec20b/e/7064ec6253a01c11dac25fd5 \n https://cad.onshape.com/documents/6e9b8398351e0f4edbc62cab/w/3f5cc28c41c518440af711e1/e/319a13ffe2cb574e69f69e24 \n https://cad.onshape.com/documents/cde0b361c8be614a16ebaf34/w/29917c209b207a4862612930/e/407626f990d877707e25bd20 \n https://cad.onshape.com/documents/fe8b090d2f7dd3523fbaa659/w/ce16bca4693f4a8d3773e84d/e/a9dc6cfcca90f18735041004 \n https://cad.onshape.com/documents/61f9c0ea9bc63d66b4594faa/w/684f61856a28ba795961ba3f/e/c6c416ddb1f3000638323cd3 \n https://cad.onshape.com/documents/651f814d111bb466f10f6814/w/21f0c1ff877c43462f92155c/e/0ce21b7d06c14ff1072a39e8 \n https://cad.onshape.com/documents/96dd4e8b897db582fc6ec9a3/w/b937cdb2b45009b5ae3960d1/e/249417cb7690c942bba5c062 \n https://cad.onshape.com/documents/994961fd3bb187be244ae42f/w/13a15a305c3a77ecf4ba9a1f/e/7bc09099eaa9f5be8f66fed5 \n https://cad.onshape.com/documents/4e860c758f316fc4745efdef/w/c46ee497ee7177f8cc3b4a99/e/eb90d8ca72897ed9ea9214b6 \n https://cad.onshape.com/documents/713c2ff86ac0b41a3bfbc87b/w/0adf8a106e473157a715619d/e/c8393551755727e66ef55396 \n https://cad.onshape.com/documents/8021983d01f007f157805db5/w/19459bf3cf226a974c4fa75e/e/f59665830864c40ba3f01884', 'tags': '', 'url': '期末總結.html'}]};