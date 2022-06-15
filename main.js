let csid = document.getElementsByTagName('iframe')[0].src.split('csid=')[1].split('&type')[0];
let csid2 = csid.split('.phx')[0] + csid.split('_')[0].split('phx')[1];
csid2 = csid2.replaceAll('.', '_');
// gets all units
// gets all units
fetch("https://cdn.i-ready.com/instruction/phoenix/master/121/lessonmap.json")
    .then(response => response.json())

    // loads units
    .then(unitData => units = unitData)
    .then(function() {
        listLessons();

        // loops through every lesson in unit
        function listLessons(i = 0, j = 0) {
            fetch("https://api.allorigins.win/raw?url=" + "https://cdn.i-ready.com/instruction/phoenix-content/math/" + csid2 + "/lessonStructure.json")
                .then(response => response.json())
                .then(function(lessonData) {
                    let slideCount = lessonData.lessonStructureObj.slideData.length;
                    let info = "true,".repeat(slideCount)

                    document.getElementsByTagName('iframe')[0].contentWindow.snarggAdapter.snarggAPI_.StateStore.save({
                        "finalStageArr": [info + `{
                            "6": {
                                "bgColorStr": "#ff6600",
                                "currentTileId": 0,
                                "boxStateArr": [{
                                    "parentIdInt": 6,
                                    "idStr": "inputBox_0",
                                    "xInt": 432,
                                    "yInt": 156,
                                    "widthInt": 82.85,
                                    "heightInt": 44.05,
                                    "radiusInt": 0,
                                    "strokeStyleStr": "rgba(0,0,0,1)",
                                    "initFillStyleStr": "transparent",
                                    "fillStyleStr": "#ff6600",
                                    "borderWidthInt": 1,
                                    "shadowVisibleBool": false,
                                    "shadowColorStr": "rgba(0,0,0,0.5)",
                                    "shadowOffsetXInt": 2,
                                    "shadowOffsetYInt": 2,
                                    "shadowBlurInt": 10,
                                    "initBgImageStr": "mcqInputBoxInsetShadow1.png",
                                    "bgImageStr": "",
                                    "paddingArr": [0, 0, 0, 0],
                                    "fontSizeNum": 30,
                                    "fontFamilyStr": "Komika",
                                    "fontColorStr": "rgba(0,0,0,1)",
                                    "valueStr": "3",
                                    "filterTypeInt": 4,
                                    "maxLengthInt": 3,
                                    "showQMarkBool": false,
                                    "qMarkStyleInt": 1,
                                    "staticBool": false,
                                    "qMarkPercentNum": 0.7,
                                    "glowVisibleBool": false,
                                    "glowColorStr": "rgb(255,255,0)",
                                    "glowAnimStyleInt": 1,
                                    "cursorColorStr": "rgba(0, 0, 0, 1)"
                                }],
                                "slideEndFrameInt": 361
                            }
                        }`],
                        "curSlideInt": slideCount - 1,
                        "slideCompletedArr": [info],
                        "allScoreDataArr": [info + 100],
                        "stateStoreDataObj": {}
                    })
                  lessonBridge.close()
                })
        }
    })
