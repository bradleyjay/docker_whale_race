class WhaleGameLogic {
    constructor(word1, word2, word3) {
        super(word1, word2, word3)
        // iniitalize variables
        this.word1 = ''
        this.word2 = ''
        this.word3 = '' 
        this.whale1 = 0 
        this.whale2 = 0
        this.whale3 = 0
        this.clock = 15 // default: 15 seconds
        this.initialTimestamp
    }
    // User chooses 'n' words // placeholder is 3 (change into array later)

    //Spin up 'n' containers (1 per word)

    // Containers sleep 

    // Race start command on all containers (event listener to initiate docker containers and start clock)

    // Loop
        // Listen for docker containers
        // Update current sum for each container
        // decrement clock each second (?)

    // After 'x' seconds, race is over, highest count wins!

    // Free (kill) the containers
  }