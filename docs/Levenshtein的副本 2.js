var nodesArray = [
{ label : "1", id : 0, color : "#faddd2", textcolor : "#ba9d92", size : 5, desc : "Bot: 1 Similar to: 5 at 46% 12 at 38%" },
{ label : "5", id : 1, color : "#e1dbae", textcolor : "#a19b6e", size : 15, desc : "Bot: 5 Similar to: 1 at 46% 19 at 68% " },
{ label : "12", id : 2, color : "#e8b1d1", textcolor : "#a87191", size : 5, desc : "Bot: 12 Similar to: 1 at 38% 3 at 36% 17 at 41% " },
{ label : "14", id : 4, color : "#a0a3cb", textcolor : "#60638b", size : 5, desc : "Bot: 14 Similar to: 18 at 55%" },
{ label : "17", id : 5, color : "#84f18c", textcolor : "#44b14c", size : 35, desc : "Bot: 17 Similar to: 12 at 41%  16 at 54%  206942 at 36%  274759 at 36%  274759 at 34%  206942 at 48% " },
{ label : "139008", id : 6, color : "#bfe09f", textcolor : "#7fa05f", size : 5, desc : "Bot: 139008 Similar to: 17 at 36%  307901 at 36% " },
{ label : "206942", id : 7, color : "#b5a5c0", textcolor : "#756580", size : 15, desc : "Bot: 206942 Similar to: 206942 at 45%  15 at 48%  17 at 36% < 139008 at 36%  307901 at 42% " },
{ label : "215996", id : 8, color : "#accb8f", textcolor : "#6c8b4f", size : 5, desc : "Bot: 21596 No similar languages found." },
{ label : "274759", id : 9, color : "#a1b2b2", textcolor : "#617272", size : 15, desc : "Bot: 274759 Similar to: 17 at 32%  206942 at 36% " },
{ label : "307901", id : 10, color : "#b7acc7", textcolor : "#776c87", size : 5, desc : "Bot: 307901 Similar to: 139008 at 36% " },
{ label : "15", id : 11, color : "#85e982", textcolor : "#45a942", size : 25, desc : "Bot: 15  Similar to: 206942 at 48% " },
{ label : "16", id : 12, color : "#bedeef", textcolor : "#7e9eaf", size : 5, desc : "Bot: 16 No similar languages found." },
{ label : "18", id : 13, color : "#e481ee", textcolor : "#a441ae", size : 45, desc : "Bot: 18 Similar to: 14 at 55% " },
{ label : "19", id : 14, color : "#da98ac", textcolor : "#9a586c", size : 5, desc : "Bot: 19 Similar to: 5 at 68% " }

];

var nodesHash = [];
nodesHash["1"] = 0;
nodesHash["5"] = 1;
nodesHash["12"] = 2;
nodesHash["13"] = 3;
nodesHash["14"] = 4;
nodesHash["17"] = 5;
nodesHash["139008"] = 6;
nodesHash["206942"] = 7;
nodesHash["215996"] = 8;
nodesHash["274759"] = 9;
nodesHash["307901"] = 10;
nodesHash["15"] = 11;
nodesHash["16"] = 12;
nodesHash["18"] = 13;
nodesHash["19"] = 14;


var linksArray = [
{ desc : "1 -- 5", source : 0, target : 1, weight : 0.463352032318284, color : "#cfcfff" },
{ desc : "1 -- 12", source : 0, target : 2, weight : 0.383321439278753, color : "#e3e3ff" },
{ desc : "12 -- 13", source : 2, target : 3, weight : 0.362946535310438, color : "#e8e8ff" },
{ desc : "12 -- 17", source : 2, target : 5, weight : 0.411126216081552, color : "#dcdcff" },
{ desc : "206942 -- 307901", source : 7, target : 10, weight : 0.424951754457142, color : "#d9d9ff" },
{ desc : "206942 -- 17", source : 7, target : 5, weight : 0.358784190429154, color : "#e9e9ff" },
{ desc : "206942 -- 274759", source : 7, target : 9, weight : 0.357063027870304, color : "#e9e9ff" },
{ desc : "17 -- 139008", source : 5, target : 6, weight : 0.359149758304868, color : "#e9e9ff" },
{ desc : "17 -- 274759", source : 5, target : 9, weight : 0.342103372309722, color : "#ededff" },
{ desc : "15 -- 206942", source : 11, target : 7, weight : 0.480498232927762, color : "#cbcbff" },
{ desc : "206942 -- 13", source : 7, target : 3, weight : 0.582230987488062, color : "#b3b3ff" },
{ desc : "17 -- 16", source : 5, target : 12, weight : 0.544639134176687, color : "#bcbcff" },
{ desc : "139008 -- 307901", source : 6, target : 10, weight : 0.355952757961896, color : "#e9e9ff" },
{ desc : "18 -- 14", source : 13, target : 4, weight : 0.553185966164393, color : "#babaff" },
{ desc : "19 -- 5", source : 14, target : 1, weight : 0.684145679444443, color : "#9b9bff" }
];
