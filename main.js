if(document.getElementsByTagName('iframe')[0].contentWindow.snarggAdapter != undefined){
  console.log('lesson compatable')
csid = document.getElementsByTagName('iframe')[0].src.split('csid=')[1].split('&type')[0];
csid2 = csid.split('.phx')[0] + csid.split('_')[0].split('phx')[1];
csid2 = csid2.replaceAll('.', '_');

// gets all units
// gets all units
fetch("https://cdn.i-ready.com/instruction/phoenix/master/121/lessonmap.json")
    .then(response => response.json())

    // loads units
    .then(unitData => units = unitData)
    .then(function() {
        listLessons();
        if(csid.includes('undefined')==true){console.log('true')}
        // loops through every lesson in unit
        function listLessons(i = 0, j = 0) {
            fetch('https://api.allorigins.win/raw?url=https://cdn.i-ready.com/instruction/phoenix-content/math/'+csid2+'/lessonStructure.json')
                .then(response => response.json())
                .then(function(lessonData) {
                  document.getElementsByTagName('iframe')[0].contentWindow.snarggAdapter.StateStore.deleteState()
                    let slideCount = lessonData.lessonStructureObj.slideData.length;
                    let info = "true,".repeat(slideCount)
                    let score=prompt('How many questions would you like to get right out of: '+slideCount+' questions?')
                    let fin='1,'.repeat(score)
                    document.getElementsByTagName('iframe')[0].contentWindow.snarggAdapter.snarggAPI_.StateStore.save({
                        "finalStageArr": [info],
                        "curSlideInt": slideCount - 1,
                        "slideCompletedArr": [info],
                        "allScoreDataArr": [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,100],
                        "stateStoreDataObj": {}
                    })
                })
        }
    })
window.open('https://cdn.i-ready.com/instruction/phoenix-content/math/'+csid2+'/lessonStructure.json')
} else{
  alert('Your lesson dosnt work with this hack, a new hack for this type of lesson is being made. please wait.')
}
