let homeScore = 0
        let guestScore = 0


        let lakersScore = document.getElementById('scorelakers')
        let sparksScore = document.getElementById('scoresparks')
        let resultScore = document.getElementById('result')
        let lakersBg = document.getElementById ('highlightlakers')
        let sparksBg = document.getElementById ('highlightsparks')
        
        function addonelakers() {
            homeScore += 1
            lakersScore.textContent = homeScore
        }
        function addtwolakers() {
            homeScore += 2
            lakersScore.textContent = homeScore
        }
        function addthreelakers() {
            homeScore += 3
            lakersScore.textContent = homeScore
        }
        function addonespark() {
            guestScore += 1
            sparksScore.textContent = guestScore
        }
        function addtwospark() {
            guestScore += 2
            sparksScore.textContent = guestScore
        }
        function addthreespark() {
            guestScore += 3
            sparksScore.textContent = guestScore
        }
        function newgame() {
            homeScore = 0
            guestScore = 0
            lakersScore.textContent = 0
            sparksScore.innerHTML = 0
            resultScore.innerHTML = null
            document.getElementById("highlightlakers").style.backgroundColor="transparent";
            document.getElementById("highlightsparks").style.backgroundColor="transparent";
        }

        function endgame() {
            if (homeScore > guestScore) {
                document.getElementById("highlightlakers").style.backgroundColor="pink";
                resultScore.innerHTML = ('Lakers Win !!! 🏅 🏀 ')
            }
            else if (homeScore < guestScore) {
                document.getElementById("highlightsparks").style.backgroundColor="rgb(197, 136, 224)";
                resultScore.innerHTML = ('Sparks Win !!! 🏅 🏀 ')
            }

            else {
                document.getElementById("highlightsparks").style.backgroundColor="rgb(202, 61, 122)";
                document.getElementById("highlightlakers").style.backgroundColor="rgb(202, 61, 122)";
                resultScore.innerHTML = ('Draw !! 🏀')
            }
        }