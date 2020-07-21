var _0xe204 = ["\x6C\x6F\x61\x64", "\x72\x65\x6D\x6F\x76\x65", "\x6F\x6E", "\x73\x72\x63", "\x61\x75\x64\x69\x6F\x2F\x6D\x61\x74\x6B\x61\x2E\x6D\x70\x33", "\x61\x74\x74\x72", "\x3C\x61\x75\x64\x69\x6F\x3E\x3C\x2F\x61\x75\x64\x69\x6F\x3E", "\x61\x75\x64\x69\x6F\x2F\x62\x72\x69\x63\x6B\x2E\x6D\x70\x33", "\x69\x6E\x6E\x65\x72\x57\x69\x64\x74\x68", "\x69\x6E\x6E\x65\x72\x48\x65\x69\x67\x68\x74", "\x61\x75\x64\x69\x6F", "\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74", "\x2E", "\x42\x72\x69\x63\x6B", "\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72\x41\x6C\x6C", "\x63\x61\x6C\x6C", "\x73\x6C\x69\x63\x65", "\x70\x72\x6F\x74\x6F\x74\x79\x70\x65", "\x70\x78", "\x63\x73\x73", "\x66\x61\x64\x65\x54\x6F", "\x23\x73\x74\x61\x72\x74", "\x77\x68\x69\x74\x65", "\x79\x65\x6C\x6C\x6F\x77", "\x70\x69\x6E\x6B", "\x6C\x6F\x67", "\x2E\x6D\x61\x74\x6B\x61", "\x6F\x6E\x6D\x6F\x75\x73\x65\x6D\x6F\x76\x65", "\x63\x6C\x69\x65\x6E\x74\x58", "\x63\x6C\x69\x65\x6E\x74\x59", "\x63\x6C\x69\x63\x6B", "\x72\x65\x6C\x6F\x61\x64", "\x65\x6D\x70\x74\x79", "\x2E\x67\x61\x6D\x65\x53\x74\x61\x74\x75\x73", "\x68\x74\x6D\x6C", "\x23\x62\x61\x6C\x6C\x73", "\x6C\x65\x6E\x67\x74\x68", "\x70\x6F\x73\x69\x74\x69\x6F\x6E", "\x2E\x62\x61\x6C\x6C\x20\x69\x6D\x67", "\x6C\x65\x66\x74", "\x74\x6F\x70", "\x73\x70\x6C\x69\x63\x65", "\x23\x73\x63\x6F\x72\x65", "\x61\x70\x70\x65\x6E\x64\x54\x6F", "\x3C\x70\x20\x69\x64\x3D\x22\x67\x6F\x22\x3E\x47\x61\x6D\x65\x20\x4F\x76\x65\x72\x3C\x2F\x70\x3E", "\x3C\x70\x20\x69\x64\x3D\x22\x73\x74\x61\x72\x74\x22\x3E\x63\x6C\x69\x63\x6B\x20\x6C\x65\x66\x74\x20\x6D\x6F\x75\x73\x65\x20\x74\x6F\x20\x73\x74\x61\x72\x74\x3C\x2F\x70\x3E", "\x61\x70\x70\x65\x6E\x64", "\x62\x6F\x64\x79", "\x70\x6C\x61\x79", "\x67\x65\x74\x54\x69\x6D\x65"];
$(_0xe204[6])[_0xe204[5]](_0xe204[3], _0xe204[4])[_0xe204[2]](_0xe204[0], function() { $(this)[_0xe204[1]]() });
$(_0xe204[6])[_0xe204[5]](_0xe204[3], _0xe204[7])[_0xe204[2]](_0xe204[0], function() { $(this)[_0xe204[1]]() });
var xRatio = window[_0xe204[8]],
    yRatio = window[_0xe204[9]],
    brickWidth = xRatio * 0.9 / 20,
    brickHeight = yRatio * 0.03,
    brickArr = [
        []
    ],
    matkaWidth = xRatio * 0.1,
    matkaHeight = yRatio * 0.05,
    matkaX = xRatio / 2,
    deltaMatka, ballOnAction = false,
    xBall = xRatio / 2,
    yBall = yRatio * 0.8,
    deltaxBall, deltayBall = -2,
    matkaHit = document[_0xe204[11]](_0xe204[10]),
    brickHit = document[_0xe204[11]](_0xe204[10]),
    ballsQuantity = 3,
    score = 0,
    game = false,
    end = false;
var locateBricks = function(_0x3a48x16, _0x3a48x17) { var _0x3a48x18 = document[_0xe204[14]](_0xe204[12] + _0x3a48x16 + _0xe204[13]);
    brickArr[_0x3a48x17] = Array[_0xe204[17]][_0xe204[16]][_0xe204[15]](_0x3a48x18); for (let _0x3a48x19 = 0; _0x3a48x19 < 20; _0x3a48x19++) { $(brickArr[_0x3a48x17][_0x3a48x19])[_0xe204[19]]({ '\x77\x69\x64\x74\x68': brickWidth + _0xe204[18], '\x68\x65\x69\x67\x68\x74': brickHeight + _0xe204[18], '\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x2D\x63\x6F\x6C\x6F\x72': _0x3a48x16, '\x6C\x65\x66\x74': _0x3a48x19 * brickWidth + xRatio * 0.05, '\x74\x6F\x70': _0x3a48x17 * 50 + 100 }) } };
var clickStart = setInterval(function() { $(_0xe204[21])[_0xe204[20]](100, 0.6)[_0xe204[20]](100, 1) }, 0);
locateBricks(_0xe204[22], 0);
locateBricks(_0xe204[23], 1);
locateBricks(_0xe204[24], 2);
console[_0xe204[25]](brickArr);
$(_0xe204[26])[_0xe204[19]]({ '\x77\x69\x64\x74\x68': xRatio * 0.05, '\x68\x65\x69\x67\x68\x74': yRatio * 0.01 });
document[_0xe204[27]] = function(_0x3a48x1b) { $(_0xe204[26])[_0xe204[19]]({ '\x6C\x65\x66\x74': _0x3a48x1b[_0xe204[28]] + _0xe204[18] });
    matkaX = _0x3a48x1b[_0xe204[28]];
    _0x3a48x1b[_0xe204[29]] = yRatio / 2 };
var resetBall = function() { deltaxBall = xRatio >= xBall ? -1 : 1;
    deltayBall = -2;
    xBall = xRatio / 2;
    yBall = yRatio * 0.8 };
$(document)[_0xe204[2]](_0xe204[30], function(_0x3a48x1b) { if (end) { location[_0xe204[31]]() };
    clearInterval(clickStart);
    $(_0xe204[33])[_0xe204[32]](); if (ballOnAction) { return };
    ballOnAction = true; if (ballsQuantity > 0) { game = true };
    resetBall() });
var renderGraphic = function() { if (!ballOnAction && !game) { return }; if (xBall + deltaxBall <= 1 || xBall + deltaxBall >= xRatio - 1) { deltaxBall -= deltaxBall * 2 }; if (yBall + deltayBall <= 1 || (yBall + deltayBall >= yRatio * 0.9 - 1 && xBall >= matkaX && xBall <= matkaX + xRatio * 0.05)) { deltayBall -= deltayBall * 2;
        deltaxBall += (matkaX + matkaWidth - xBall) / 200;
        soundMatka() }; if (yBall > yRatio) { ballOnAction = false;
        ballsQuantity--;
        $(_0xe204[35])[_0xe204[34]](ballsQuantity);
        pause(1500);
        resetBall(); return }; for (let _0x3a48x1e = 0; _0x3a48x1e < brickArr[_0xe204[36]]; _0x3a48x1e++) { for (let _0x3a48x19 = 0; _0x3a48x19 < brickArr[_0x3a48x1e][_0xe204[36]]; _0x3a48x19++) { let _0x3a48x1f = brickArr[_0x3a48x1e][_0x3a48x19]; let _0x3a48x20 = $(_0x3a48x1f)[_0xe204[37]](),
                _0x3a48x21 = $(_0xe204[38])[_0xe204[37]](); if (_0x3a48x21[_0xe204[39]] > _0x3a48x20[_0xe204[39]] && _0x3a48x21[_0xe204[39]] < _0x3a48x20[_0xe204[39]] + brickWidth && _0x3a48x21[_0xe204[40]] > _0x3a48x20[_0xe204[40]] && _0x3a48x21[_0xe204[40]] < _0x3a48x20[_0xe204[40]] + brickHeight) { $(_0x3a48x1f)[_0xe204[1]]();
                brickArr[_0x3a48x1e][_0xe204[41]](_0x3a48x19, 1);
                deltayBall -= deltayBall * 2;
                soundBrick();
                score += 1;
                $(_0xe204[42])[_0xe204[34]](score); break } } };
    xBall += deltaxBall;
    yBall += deltayBall;
    $(_0xe204[38])[_0xe204[19]]({ '\x6C\x65\x66\x74': xBall + _0xe204[18], '\x74\x6F\x70': yBall + _0xe204[18] }); if (ballsQuantity < 1) { $(_0xe204[44])[_0xe204[43]](_0xe204[33]);
        clearInterval(frame);
        $(_0xe204[45])[_0xe204[43]](_0xe204[33]);
        end = true } };
var frame = setInterval(renderGraphic, 5);
var soundMatka = function() { matkaHit[_0xe204[3]] = _0xe204[4];
    $(_0xe204[47])[_0xe204[46]](matkaHit);
    matkaHit[_0xe204[48]]() };
var soundBrick = function() { brickHit[_0xe204[3]] = _0xe204[7];
    $(_0xe204[47])[_0xe204[46]](brickHit);
    brickHit[_0xe204[48]]() };
var pause = function(_0x3a48x26) { var _0x3a48x27 = new Date()[_0xe204[49]](); while (_0x3a48x27 + _0x3a48x26 >= new Date()[_0xe204[49]]()) {}; return }