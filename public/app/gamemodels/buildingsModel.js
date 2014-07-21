'use strict';

app.factory('BuildingsModel', function () {
    return {
        mineralFactory: {
            amount: [1, 2, 4, 6, 8, 11, 14, 17, 21, 26, 31, 38, 45, 53, 63, 74, 86, 100, 116, 135, 155, 179, 199],
            cost: [0, 112, 169, 252, 378, 568, 853, 1281, 1921, 2882, 4323, 6486, 9730, 14596, 21893, 32841, 49267, 73895, 103453, 166263, 249394, 374091, 561137],
            energy: [0, 12, 20, 29, 40, 53, 68, 86, 106, 130, 157, 188, 224, 266, 313, 341, 378, 402, 437, 479, 501, 543, 599],
            time: [0, 7, 20, 43, 68, 101, 158, 219, 280, 340, 400, 521, 555, 628, 688, 733, 877, 1037, 1486, 1924, 2488, 2950, 3599]
        },
        gasFactory: {
            amount: [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 18, 22, 28, 33, 39, 45, 52, 62, 75, 99],
            cost: [0, 449, 674, 1012, 1518, 2277, 3417, 5125, 7688, 11533, 17300, 25949, 38924, 58385, 87579, 131368, 197052, 295579, 443368, 665052, 997577, 1496365, 2244548],
            energy: [0, 24, 40, 59, 81, 106, 136, 171, 212, 259, 290, 321, 352, 383, 414, 445, 476, 507, 538, 569, 600, 631, 699],
            time: [0, 8, 22, 48, 76, 112, 176, 243, 311, 378, 444, 579, 617, 698, 764, 814, 974, 1152, 1651, 2138, 2764, 3278, 3999]
        },
        solarPanels: {
            amount: [20, 33, 72, 119, 176, 242, 318, 408, 513, 636, 777, 941, 1130, 1346, 1595, 1880, 2205, 2577, 3002, 3486, 3994],
            cost: [0, 105, 157, 235, 354, 530, 796, 1195, 1793, 2690, 4042, 6053, 9081, 12931, 18596, 28652, 43978, 68968, 103453, 155179, 232768],
            energy: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            time: [0, 84, 153, 213, 287, 357, 415, 498, 571, 654, 712, 767, 815, 997, 1267, 1341, 1552, 1683, 1988, 2543, 3200]
        },
        supply: {
            amount: [6, 12, 24, 36, 48, 66, 84, 102, 126, 156, 186, 228, 270, 318, 378, 444, 516, 600, 696, 777, 888, 999],
            cost: [0, 336, 507, 756, 1134, 1704, 2559, 3843, 5763, 8646, 12969, 19458, 29190, 43788, 65679, 98523, 147801, 221685, 310359, 498789, 748182, 1122273],
            energy: [0, 8, 14, 20, 28, 37, 48, 60, 74, 91, 110, 132, 157, 186, 219, 258, 301, 350, 407, 471, 543, 599],
            time: [0, 67, 154, 214, 329, 384, 442, 497, 543, 612, 698, 754, 812, 888, 1023, 1267, 1312, 1452, 1674, 1980, 2457, 3200]
        },
        barracks: {
            amount: [0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4],
            cost: [0, 1029, 2206, 4622, 7328, 10111, 14611, 17999, 22879, 28829, 35999],
            energy: [0, 18, 32, 45, 76, 112, 154, 212, 267, 299, 399],
            time: [0, 1346, 1874, 2526, 3142, 3652, 4382, 5025, 5755, 6266, 6750]
        },
        shipYard: {
            amount: [0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4],
            cost: [0, 1143, 2451, 5136, 8142, 11234, 16234, 19999, 25421, 32032, 39999],
            energy: [0, 27, 54, 87, 112, 154, 216, 338, 415, 499, 699],
            time: [0, 1591, 2215, 2985, 3713, 4316, 5179, 5938, 6802, 7405, 7977]
        },
        lab: {
            amount: [0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4],
            cost: [0, 1134, 2941, 6163, 9770, 13481, 19481, 23999, 30505, 38438, 47999],
            energy: [0, 47, 143, 326, 412, 538, 653, 743, 821, 895, 999],
            time: [0, 943, 1704, 2296, 2856, 3320, 3984, 4568, 5232, 5696, 6136]
        }
    }
});